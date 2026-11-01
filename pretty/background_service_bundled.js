/*******************************************************
 * Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      736(t, e, i) {
        t.exports = function (t) {
          function e(t) {
            let i,
              s,
              r,
              o = null;
            function u(...t) {
              if (!u.enabled) return;
              const n = u,
                s = Number(new Date()),
                r = s - (i || s);
              ((n.diff = r),
                (n.prev = i),
                (n.curr = s),
                (i = s),
                (t[0] = e.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O"));
              let o = 0;
              ((t[0] = t[0].replace(/%([a-zA-Z%])/g, (i, s) => {
                if ("%%" === i) return "%";
                o++;
                const r = e.formatters[s];
                if ("function" == typeof r) {
                  const e = t[o];
                  ((i = r.call(n, e)), t.splice(o, 1), o--);
                }
                return i;
              })),
                e.formatArgs.call(n, t));
              (n.log || e.log).apply(n, t);
            }
            return (
              (u.namespace = t),
              (u.useColors = e.useColors()),
              (u.color = e.selectColor(t)),
              (u.extend = n),
              (u.destroy = e.destroy),
              Object.defineProperty(u, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== o
                    ? o
                    : (s !== e.namespaces &&
                        ((s = e.namespaces), (r = e.enabled(t))),
                      r),
                set: (t) => {
                  o = t;
                },
              }),
              "function" == typeof e.init && e.init(u),
              u
            );
          }
          function n(t, i) {
            const n = e(this.namespace + (void 0 === i ? ":" : i) + t);
            return ((n.log = this.log), n);
          }
          function s(t, e) {
            let i = 0,
              n = 0,
              s = -1,
              r = 0;
            for (; i < t.length;)
              if (n < e.length && (e[n] === t[i] || "*" === e[n]))
                "*" === e[n] ? ((s = n), (r = i), n++) : (i++, n++);
              else {
                if (-1 === s) return !1;
                ((n = s + 1), r++, (i = r));
              }
            for (; n < e.length && "*" === e[n];) n++;
            return n === e.length;
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              if (t instanceof Error) return t.stack || t.message;
              return t;
            }),
            (e.disable = function () {
              const t = [...e.names, ...e.skips.map((t) => "-" + t)].join(",");
              return (e.enable(""), t);
            }),
            (e.enable = function (t) {
              (e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []));
              const i = ("string" == typeof t ? t : "")
                .trim()
                .replace(/\s+/g, ",")
                .split(",")
                .filter(Boolean);
              for (const t of i)
                "-" === t[0] ? e.skips.push(t.slice(1)) : e.names.push(t);
            }),
            (e.enabled = function (t) {
              for (const i of e.skips) if (s(t, i)) return !1;
              for (const i of e.names) if (s(t, i)) return !0;
              return !1;
            }),
            (e.humanize = i(6585)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              );
            }),
            Object.keys(t).forEach((i) => {
              e[i] = t[i];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let i = 0;
              for (let e = 0; e < t.length; e++)
                ((i = (i << 5) - i + t.charCodeAt(e)), (i |= 0));
              return e.colors[Math.abs(i) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      5587(t, e, i) {
        var n = i(7627),
          s = i(9046);
        ((t.exports = n), (t.exports.murmur3 = n), (t.exports.murmur2 = s));
      },
      6585(t) {
        var e = 1e3,
          i = 60 * e,
          n = 60 * i,
          s = 24 * n,
          r = 7 * s,
          o = 365.25 * s;
        function u(t, e, i, n) {
          var s = e >= 1.5 * i;
          return Math.round(t / i) + " " + n + (s ? "s" : "");
        }
        t.exports = function (t, a) {
          a = a || {};
          var c = typeof t;
          if ("string" === c && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var u =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t,
                );
              if (!u) return;
              var a = parseFloat(u[1]);
              switch ((u[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return a * o;
                case "weeks":
                case "week":
                case "w":
                  return a * r;
                case "days":
                case "day":
                case "d":
                  return a * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return a * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return a * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return a * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return a;
                default:
                  return;
              }
            })(t);
          if ("number" === c && isFinite(t))
            return a.long
              ? (function (t) {
                  var r = Math.abs(t);
                  if (r >= s) return u(t, r, s, "day");
                  if (r >= n) return u(t, r, n, "hour");
                  if (r >= i) return u(t, r, i, "minute");
                  if (r >= e) return u(t, r, e, "second");
                  return t + " ms";
                })(t)
              : (function (t) {
                  var r = Math.abs(t);
                  if (r >= s) return Math.round(t / s) + "d";
                  if (r >= n) return Math.round(t / n) + "h";
                  if (r >= i) return Math.round(t / i) + "m";
                  if (r >= e) return Math.round(t / e) + "s";
                  return t + "ms";
                })(t);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(t),
          );
        };
      },
      7627(t) {
        t.exports = function (t, e) {
          var i, n, s, r, o, u, a, c;
          for (
            i = 3 & t.length,
              n = t.length - i,
              s = e,
              o = 3432918353,
              u = 461845907,
              c = 0;
            c < n;
          )
            ((a =
              (255 & t.charCodeAt(c)) |
              ((255 & t.charCodeAt(++c)) << 8) |
              ((255 & t.charCodeAt(++c)) << 16) |
              ((255 & t.charCodeAt(++c)) << 24)),
              ++c,
              (s =
                27492 +
                (65535 &
                  (r =
                    (5 *
                      (65535 &
                        (s =
                          ((s ^= a =
                            ((65535 &
                              (a =
                                ((a =
                                  ((65535 & a) * o +
                                    ((((a >>> 16) * o) & 65535) << 16)) &
                                  4294967295) <<
                                  15) |
                                (a >>> 17))) *
                              u +
                              ((((a >>> 16) * u) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (s >>> 19))) +
                      (((5 * (s >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                ((((r >>> 16) + 58964) & 65535) << 16)));
          switch (((a = 0), i)) {
            case 3:
              a ^= (255 & t.charCodeAt(c + 2)) << 16;
            case 2:
              a ^= (255 & t.charCodeAt(c + 1)) << 8;
            case 1:
              s ^= a =
                ((65535 &
                  (a =
                    ((a =
                      ((65535 & (a ^= 255 & t.charCodeAt(c))) * o +
                        ((((a >>> 16) * o) & 65535) << 16)) &
                      4294967295) <<
                      15) |
                    (a >>> 17))) *
                  u +
                  ((((a >>> 16) * u) & 65535) << 16)) &
                4294967295;
          }
          return (
            (s ^= t.length),
            (s =
              (2246822507 * (65535 & (s ^= s >>> 16)) +
                (((2246822507 * (s >>> 16)) & 65535) << 16)) &
              4294967295),
            (s =
              (3266489909 * (65535 & (s ^= s >>> 13)) +
                (((3266489909 * (s >>> 16)) & 65535) << 16)) &
              4294967295),
            (s ^= s >>> 16) >>> 0
          );
        };
      },
      7833(t, e, i) {
        ((e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const i = "color: " + this.color;
          e.splice(1, 0, i, "color: inherit");
          let n = 0,
            s = 0;
          (e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (s = n));
          }),
            e.splice(s, 0, i));
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
            } catch (t) {}
            !t &&
              "undefined" != typeof process &&
              "env" in process &&
              (t = "MISSING_ENV_VAR".DEBUG);
            return t;
          }),
          (e.useColors = function () {
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
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                ));
            };
          })()),
          (e.colors = [
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
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = i(736)(e)));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      8922(t, e, i) {
        var n;
        !(function () {
          "use strict";
          function s(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (i >> 16)) << 16) | (65535 & i);
          }
          function r(t, e, i, n, r, o) {
            return s(
              ((u = s(s(e, t), s(n, o))) << (a = r)) | (u >>> (32 - a)),
              i,
            );
            var u, a;
          }
          function o(t, e, i, n, s, o, u) {
            return r((e & i) | (~e & n), t, e, s, o, u);
          }
          function u(t, e, i, n, s, o, u) {
            return r((e & n) | (i & ~n), t, e, s, o, u);
          }
          function a(t, e, i, n, s, o, u) {
            return r(e ^ i ^ n, t, e, s, o, u);
          }
          function c(t, e, i, n, s, o, u) {
            return r(i ^ (e | ~n), t, e, s, o, u);
          }
          function d(t, e) {
            var i, n, r, d, l;
            ((t[e >> 5] |= 128 << (e % 32)),
              (t[14 + (((e + 64) >>> 9) << 4)] = e));
            var h = 1732584193,
              f = -271733879,
              D = -1732584194,
              v = 271733878;
            for (i = 0; i < t.length; i += 16)
              ((n = h),
                (r = f),
                (d = D),
                (l = v),
                (h = o(h, f, D, v, t[i], 7, -680876936)),
                (v = o(v, h, f, D, t[i + 1], 12, -389564586)),
                (D = o(D, v, h, f, t[i + 2], 17, 606105819)),
                (f = o(f, D, v, h, t[i + 3], 22, -1044525330)),
                (h = o(h, f, D, v, t[i + 4], 7, -176418897)),
                (v = o(v, h, f, D, t[i + 5], 12, 1200080426)),
                (D = o(D, v, h, f, t[i + 6], 17, -1473231341)),
                (f = o(f, D, v, h, t[i + 7], 22, -45705983)),
                (h = o(h, f, D, v, t[i + 8], 7, 1770035416)),
                (v = o(v, h, f, D, t[i + 9], 12, -1958414417)),
                (D = o(D, v, h, f, t[i + 10], 17, -42063)),
                (f = o(f, D, v, h, t[i + 11], 22, -1990404162)),
                (h = o(h, f, D, v, t[i + 12], 7, 1804603682)),
                (v = o(v, h, f, D, t[i + 13], 12, -40341101)),
                (D = o(D, v, h, f, t[i + 14], 17, -1502002290)),
                (h = u(
                  h,
                  (f = o(f, D, v, h, t[i + 15], 22, 1236535329)),
                  D,
                  v,
                  t[i + 1],
                  5,
                  -165796510,
                )),
                (v = u(v, h, f, D, t[i + 6], 9, -1069501632)),
                (D = u(D, v, h, f, t[i + 11], 14, 643717713)),
                (f = u(f, D, v, h, t[i], 20, -373897302)),
                (h = u(h, f, D, v, t[i + 5], 5, -701558691)),
                (v = u(v, h, f, D, t[i + 10], 9, 38016083)),
                (D = u(D, v, h, f, t[i + 15], 14, -660478335)),
                (f = u(f, D, v, h, t[i + 4], 20, -405537848)),
                (h = u(h, f, D, v, t[i + 9], 5, 568446438)),
                (v = u(v, h, f, D, t[i + 14], 9, -1019803690)),
                (D = u(D, v, h, f, t[i + 3], 14, -187363961)),
                (f = u(f, D, v, h, t[i + 8], 20, 1163531501)),
                (h = u(h, f, D, v, t[i + 13], 5, -1444681467)),
                (v = u(v, h, f, D, t[i + 2], 9, -51403784)),
                (D = u(D, v, h, f, t[i + 7], 14, 1735328473)),
                (h = a(
                  h,
                  (f = u(f, D, v, h, t[i + 12], 20, -1926607734)),
                  D,
                  v,
                  t[i + 5],
                  4,
                  -378558,
                )),
                (v = a(v, h, f, D, t[i + 8], 11, -2022574463)),
                (D = a(D, v, h, f, t[i + 11], 16, 1839030562)),
                (f = a(f, D, v, h, t[i + 14], 23, -35309556)),
                (h = a(h, f, D, v, t[i + 1], 4, -1530992060)),
                (v = a(v, h, f, D, t[i + 4], 11, 1272893353)),
                (D = a(D, v, h, f, t[i + 7], 16, -155497632)),
                (f = a(f, D, v, h, t[i + 10], 23, -1094730640)),
                (h = a(h, f, D, v, t[i + 13], 4, 681279174)),
                (v = a(v, h, f, D, t[i], 11, -358537222)),
                (D = a(D, v, h, f, t[i + 3], 16, -722521979)),
                (f = a(f, D, v, h, t[i + 6], 23, 76029189)),
                (h = a(h, f, D, v, t[i + 9], 4, -640364487)),
                (v = a(v, h, f, D, t[i + 12], 11, -421815835)),
                (D = a(D, v, h, f, t[i + 15], 16, 530742520)),
                (h = c(
                  h,
                  (f = a(f, D, v, h, t[i + 2], 23, -995338651)),
                  D,
                  v,
                  t[i],
                  6,
                  -198630844,
                )),
                (v = c(v, h, f, D, t[i + 7], 10, 1126891415)),
                (D = c(D, v, h, f, t[i + 14], 15, -1416354905)),
                (f = c(f, D, v, h, t[i + 5], 21, -57434055)),
                (h = c(h, f, D, v, t[i + 12], 6, 1700485571)),
                (v = c(v, h, f, D, t[i + 3], 10, -1894986606)),
                (D = c(D, v, h, f, t[i + 10], 15, -1051523)),
                (f = c(f, D, v, h, t[i + 1], 21, -2054922799)),
                (h = c(h, f, D, v, t[i + 8], 6, 1873313359)),
                (v = c(v, h, f, D, t[i + 15], 10, -30611744)),
                (D = c(D, v, h, f, t[i + 6], 15, -1560198380)),
                (f = c(f, D, v, h, t[i + 13], 21, 1309151649)),
                (h = c(h, f, D, v, t[i + 4], 6, -145523070)),
                (v = c(v, h, f, D, t[i + 11], 10, -1120210379)),
                (D = c(D, v, h, f, t[i + 2], 15, 718787259)),
                (f = c(f, D, v, h, t[i + 9], 21, -343485551)),
                (h = s(h, n)),
                (f = s(f, r)),
                (D = s(D, d)),
                (v = s(v, l)));
            return [h, f, D, v];
          }
          function l(t) {
            var e,
              i = "",
              n = 32 * t.length;
            for (e = 0; e < n; e += 8)
              i += String.fromCharCode((t[e >> 5] >>> (e % 32)) & 255);
            return i;
          }
          function h(t) {
            var e,
              i = [];
            for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1)
              i[e] = 0;
            var n = 8 * t.length;
            for (e = 0; e < n; e += 8)
              i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << (e % 32);
            return i;
          }
          function f(t) {
            var e,
              i,
              n = "0123456789abcdef",
              s = "";
            for (i = 0; i < t.length; i += 1)
              ((e = t.charCodeAt(i)),
                (s += n.charAt((e >>> 4) & 15) + n.charAt(15 & e)));
            return s;
          }
          function D(t) {
            return unescape(encodeURIComponent(t));
          }
          function v(t) {
            return (function (t) {
              return l(d(h(t), 8 * t.length));
            })(D(t));
          }
          function p(t, e) {
            return (function (t, e) {
              var i,
                n,
                s = h(t),
                r = [],
                o = [];
              for (
                r[15] = o[15] = void 0,
                  s.length > 16 && (s = d(s, 8 * t.length)),
                  i = 0;
                i < 16;
                i += 1
              )
                ((r[i] = 909522486 ^ s[i]), (o[i] = 1549556828 ^ s[i]));
              return (
                (n = d(r.concat(h(e)), 512 + 8 * e.length)),
                l(d(o.concat(n), 640))
              );
            })(D(t), D(e));
          }
          function b(t, e, i) {
            return e ? (i ? p(e, t) : f(p(e, t))) : i ? v(t) : f(v(t));
          }
          void 0 ===
            (n = function () {
              return b;
            }.call(e, i, e, t)) || (t.exports = n);
        })();
      },
      9046(t) {
        t.exports = function (t, e) {
          for (var i, n = t.length, s = e ^ n, r = 0; n >= 4;)
            ((i =
              1540483477 *
                (65535 &
                  (i =
                    (255 & t.charCodeAt(r)) |
                    ((255 & t.charCodeAt(++r)) << 8) |
                    ((255 & t.charCodeAt(++r)) << 16) |
                    ((255 & t.charCodeAt(++r)) << 24))) +
              (((1540483477 * (i >>> 16)) & 65535) << 16)),
              (s =
                (1540483477 * (65535 & s) +
                  (((1540483477 * (s >>> 16)) & 65535) << 16)) ^
                (i =
                  1540483477 * (65535 & (i ^= i >>> 24)) +
                  (((1540483477 * (i >>> 16)) & 65535) << 16))),
              (n -= 4),
              ++r);
          switch (n) {
            case 3:
              s ^= (255 & t.charCodeAt(r + 2)) << 16;
            case 2:
              s ^= (255 & t.charCodeAt(r + 1)) << 8;
            case 1:
              s =
                1540483477 * (65535 & (s ^= 255 & t.charCodeAt(r))) +
                (((1540483477 * (s >>> 16)) & 65535) << 16);
          }
          return (
            (s =
              1540483477 * (65535 & (s ^= s >>> 13)) +
              (((1540483477 * (s >>> 16)) & 65535) << 16)),
            (s ^= s >>> 15) >>> 0
          );
        };
      },
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var r = (e[n] = { exports: {} });
    return (t[n].call(r.exports, r, r.exports, i), r.exports);
  }
  ((i.n = (t) => {
    var e = t && t.i ? () => t.default : () => t;
    return (i.d(e, { a: e }), e);
  }),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "i", { value: !0 }));
    }));
  var n = {};
  (() => {
    "use strict";
    i.d(n, { A: () => hf });
    var t = {};
    (i.r(t),
      i.d(t, {
        Decoder: () => zo,
        Encoder: () => Wo,
        PacketType: () => Ho,
        isPacketValid: () => Yo,
        protocol: () => $o,
      }));
    const e = "https://api.teleparty.com",
      s = "wss://ws.teleparty.com",
      r = "https://www.teleparty.com",
      o = {
        apiKey: "AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ",
        authDomain: "teleparty-mobile.firebaseapp.com",
        projectId: "teleparty-mobile",
        storageBucket: "teleparty-mobile.appspot.com",
        messagingSenderId: "961974665980",
        appId: "1:961974665980:web:fe4179db8591331aeb8d79",
        measurementId: "G-PC36DK40FL",
      },
      u = "phc_8h1T6DYsM416utBY2HpUYkyyBKyVErAyoNpFbtp2D9b",
      a = "https://us.i.posthog.com",
      c =
        "Failed to read chrome storage. Please refresh the page and try again";
    var d = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const l = new (class {
      getItemAsync(t) {
        var e;
        return d(this, void 0, void 0, function* () {
          const i = yield chrome.storage.local.get(t);
          return null !== (e = i[t]) && void 0 !== e ? e : null;
        });
      }
      getItemsAsync(t) {
        return d(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.get(t, (t) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), i(new Error(c)))
                : e(t);
            });
          });
        });
      }
      getStorageUse() {
        return d(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.getBytesInUse(null, (i) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), e(new Error(c)))
                : t(i);
            });
          });
        });
      }
      getAllItemsAsync() {
        return d(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.get(null, (i) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), e(new Error(c)))
                : t(i);
            });
          });
        });
      }
    })();
    Object.freeze(l);
    const h = l;
    var f = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const D = new (class {
      setItemsAsync(t) {
        return f(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.set(t, () => {
              chrome.runtime.lastError
                ? i(
                    new Error(
                      "Failed to write to chrome storage. Please refresh the page and try again",
                    ),
                  )
                : e();
            });
          });
        });
      }
    })();
    Object.freeze(D);
    const v = D;
    var p = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const b = "api_feature_flags_cache_v1",
      m = 6e5,
      g = "ff_version";
    let _ = null;
    const y = (t) =>
      p(void 0, void 0, void 0, function* () {
        const i = Date.now();
        if (!t && _ && i - _.fetchedAtMs < m) return _;
        if (!t) {
          const t = yield p(void 0, void 0, void 0, function* () {
            try {
              const { [b]: t } = yield chrome.storage.local.get(b);
              return (null == t ? void 0 : t.flags)
                ? Date.now() - t.fetchedAtMs > m
                  ? null
                  : t
                : null;
            } catch (t) {
              return null;
            }
          });
          if (t) return ((_ = t), t);
        }
        try {
          const t = yield fetch(`${e}/feature-flags`, { cache: "no-cache" });
          if (!t.ok) throw new Error(`HTTP ${t.status}`);
          const { flags: n, ffVersion: s } = ((t) => {
            if (!t || "object" != typeof t) return { flags: {} };
            const e = Object.entries(t),
              i = t[g],
              n =
                "string" == typeof i || "number" == typeof i
                  ? String(i)
                  : void 0;
            return {
              flags: Object.fromEntries(
                e.filter(([t]) => t !== g).map(([t, e]) => [t, !!e]),
              ),
              ffVersion: n,
            };
          })(yield t.json());
          return (
            yield ((t, e) =>
              p(void 0, void 0, void 0, function* () {
                const i = { flags: t, fetchedAtMs: Date.now(), ffVersion: e };
                _ = i;
                try {
                  yield chrome.storage.local.set({ [b]: i });
                } catch (t) {}
              }))(n, s),
            { flags: n, fetchedAtMs: i, ffVersion: s }
          );
        } catch (t) {
          if (_) return _;
          const e = yield chrome.storage.local
            .get(b)
            .then((t) => t[b])
            .catch(() => {});
          return (null == e ? void 0 : e.flags)
            ? ((_ = e), e)
            : { flags: {}, fetchedAtMs: 0 };
        }
      });
    var w, F, E;
    const C = "undefined" != typeof chrome ? chrome.runtime : void 0,
      A = null !== (w = null == C ? void 0 : C.id) && void 0 !== w ? w : "",
      I =
        null !==
          (E =
            null === (F = null == C ? void 0 : C.getManifest()) || void 0 === F
              ? void 0
              : F.version) && void 0 !== E
          ? E
          : "",
      S = "ci_bundled.js",
      k = "https://wptony1.netflixparty.com",
      T = ["canceled", "unpaid", "incomplete_expired", "incomplete"],
      B = `${r}/signup?ref=onboarding`,
      O = `${r}/sidebar`,
      N = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
      j = "redirectDataMap",
      P =
        /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g,
      R = [
        "14dd5266c70789bdc806364df4586335",
        "084b9a35bf7a90ee3b1209295143a160",
        "198ee5b40d881b11c181e809a920686d",
        "f1351f24c338026365ebe359042454c0",
        "03dd02fa0897d31a6acdd8e29b445a20",
        "bb50827dd4b988cadc8da099269413b6",
        "a966436ff4efb93d82438c84c9e82501",
        "75c9d855053feaac9d52123046affcb3",
        "35119bfe29703c10c707681340e27745",
        "f5a61b4f7a84ef7190a5b710a85e1481",
        "88e37d809d6511659604bf5b3e35d036",
        "0db478dd562961e254fd9f50080b8cc7",
        "6db3172a7ce6bd0537347aa67ad9721d",
        "076419202c9a2f0ddbc9b892e3f56cd6",
        "dc94d8874491e57a4e3478f5b0079344",
        "7bc58fe626ebf7556b488e22e80183c1",
        "e4fd8b025b4efb3dd1471c519b50026b",
        "6889163f14209cef43c9ef16f0c60c9d",
        "0d8e948f7c24d3142e52317cf428ef5b",
        "f1465d57dd48abdcf5df77d7758ed4b9",
        "f0e13d3805734d70efebf8a5d3490220",
        "df1461577dac70fdd4fa9e387960f9e6",
        "535d54131b17f9c209919bab80d1e4c6",
        "1125be55ec1c46eaf7b444eaf758e171",
        "503ac5d2d29c77d14e88927cbae2e5f1",
        "6557a2ad0cc698c74338f534e2300e39",
        "a68704a7579d48b3160f2139f259bb85",
        "00eac5fbde04851d6bfbbf154fb4a798",
        "c60cf5514b98cf1b06af59681a0fb47d",
        "b0ba65fe241ee7327495e3f12fc27271",
        "6ac3824b129e8156300b14f9c223cc05",
        "b4f2c479e80b9eac28584628362e82be",
        "e0597ac2994cf2fbf6deacdfd47ec344",
        "8c138e5921db00042f684ac0561fb82c",
        "fde70d823115be6e349d2467b4cfd4a1",
        "911aca15ca1314fa218de7d28e0a5904",
        "0b1c1cc7c9cdb30206009e7deefa8349",
        "f218a98c995db7b568925445a0e1e0b2",
        "f4061f9b7b90e2d97979b3d58683ef53",
        "1b66409e7ce72ec6f3e8d6f30f200188",
        "3607c674e4ea89c6c71331d497a41da1",
        "b29c5e185480f4fb7d3f0dc37386184c",
        "10e64eb35388d6b89a09439a40d246b3",
        "d745905af032337196e54ba9ceadc3b7",
        "7c1e014a0e6e2be77f0f828f746db60d",
        "51fa4f675876f51d22ea779dae63f120",
        "c179fe84a54c30cf17c026e2127edd16",
        "1e4c0bdcb9128be744bc4bb2b9b2f9ad",
        "6c3b7fbb0dfe761451f9fd38dacf9f0e",
        "46222e429cd67082a16790d36ae814b6",
        "b429bdefd1bbf93368808974fe75ac6b",
        "4b5045f64a7ae1dad40aad53b6410424",
        "9bab8d20ffdb11ec6ec6c5daab51fe79",
        "2ef7422b899b269497c6ce39f539da90",
        "fd28648d87890bfc3651ee92e688e74e",
        "ca578f911239dfbabe8a5ea312302434",
        "c67454e42c79e0103c2c85d72a6b1012",
        "c45d7ccb5a624cb55b7f7e79d3b15dab",
        "af17c2e7b870cf581e6a7d501c1c7a84",
        "43a4892acfb869207169b0821af0c8b8",
        "b0c0ecdb3ed120aeebcd025976e8c9c4",
        "e6f1172be8e8e4e3045ab51151d27398",
        "22f314c1a713abf0a4e0b577ab3c880a",
        "8832d30b7f66e3be6a006449bae0ad2f",
        "9e699143919f33f2685abc56e49493c4",
        "aab3b394303fdaa028e53d5ccb82fec9",
        "01fa6f0b354ecd346dd6a4152f2cd70b",
        "b7a00a351503e693272363e3b1d49fa4",
        "4b96227cfe88622fa075ad2cd3edeaa0",
        "681bc4b134c2283644c34fd424ab6926",
        "ed196065e5d419611888db17f0ce09db",
        "bbdde3801d234025f7a74c938a7dddaf",
        "aed1253ca571ef2907662b56d7635d26",
        "6eb07dac77c36975d9a8c288540b3b7a",
        "51227b9fcd6bcb6322e499ebc2f9fa46",
        "a545aeb5244bcf1052ad7a06b2fcabc2",
        "bee3e3459819a89a6c17cda46cde1e67",
        "eb4cd3640f79241688ca61b43f8b8fe6",
        "5bf3f15133fcc8d332b3d5e538d87ee8",
        "62b44a3a7b8fbe73eefeaa28b82ae5bc",
        "734992877dd736affd0a6b275d9fc178",
        "583129b8a7bd52532a741ad973004650",
        "eb47ccdd24317e042451fec1d32c40fd",
        "6d4777979f2b9eec091f4278d24d03f4",
        "828b25871af640acd3cb8cb812fc7cd0",
        "691b6e107e0f5e1b308d104f2bba45c2",
        "e2a78d2121c7ccbeb4f51f8d7c76370e",
        "94208773c1928e7199990b469a8efd46",
        "4c428bc930f3fb55cc0a9b485aaf06e7",
        "90a0ae81e70d6366c913e759ed071f6e",
        "a6fe78012b8dd863269ae232e1628272",
        "26a572eaad2ac36b8263ac653b78c8ba",
        "78236d8a2e74e8ab2baca0de23cad517",
        "80927eb4ab23b6542ff90d128db51d8b",
        "1481c20796daff385341278bd1ccfb63",
        "5fd444c9c92e04097385fe338b2dd592",
        "91f17d4cc596697753b8a3f7c3a51fe8",
        "e67c7bfb56164f89707096b64a0fa222",
        "055f259a02e2695a3e9a47fa2f611190",
        "3614880645f2537751cd14bea0e7d3e0",
        "f284bdc7d2d5b8e8fd0315494119d103",
        "d4cf015248b3189befb639ae103779a2",
        "b7d826611e341275e69c57db102edd3f",
        "ca4220108488f0b3b7093f80ece241e6",
        "427313ade83889963636fbf11979b57a",
        "2de49f63f6cad290d722d3553cb11fff",
        "09662bd51633164e47df492f9f8eee42",
        "a8028e323ec822578301eb00d5be435e",
        "ea15ba28196946db886be874682170ee",
        "ea15ba28196946db886be874682170ee",
        "09ea85c2472b4f5a6a8651b891235e3a",
        "01a1d2098d5dbe44e98e07f545c50e0a",
        "2b724beac6fdb59b2f058c93c4143844",
        "0b13c18858a94efc80b61e3191228e9c",
        "c5123c5eb1dc3e7accc8e69b8d0ad0ed",
        "9299c0a3b1386abdcb96a2d994733a97",
        "1c14ba2bfeabd0336316f4cf01803aba",
        "5807641735f62780cf90626357f730fd",
        "b6f36d9e0736f5986a942a5948b62897",
        "5d3d66b0b2e359200e6ec020385beee1",
        "058bc167332631fced05f99fd61ec049",
        "9c9d1f329f42806a51ee3997632693b5",
        "118502ee69b77ae34f5ef5f6e1eb9b8b",
        "67427d949468416bdc8aec0519bd1ecb",
        "87d666e3fe3692f02370fe8eed7c4c3d",
        "9795341414b13d2c0b907fc3d078a3be",
        "9795341414b13d2c0b907fc3d078a3be",
        "8933f1a8bb580c258131189542aee0ff",
        "a3482994829b824188d30e66577d3c47",
        "5741eb5a721fd8db8c46d515e8e3c943",
        "db732f53471552d528896bef96aa55e2",
        "f2c2fbb6dc6296c6af64480161723ae1",
        "b2510ab6b4b3d3e5fa99b55b2f14952c",
        "dd2f0cbb17c98dd30584c255910faaf4",
        "ea5bcfdd63637c0de85cd9457d0ebd39",
        "a895f19c167c482e14ba68a871474362",
        "56ab5ff71e2cef96e0930fedfd6732dc",
        "e8e7510baf1c560e5b75b65dd39d9b0c",
        "970359ab1498b0f1424bbaa31e04c941",
        "9cd57ab957780ad3d683a77b465ecf10",
        "5e453b5bd2a30cbf6681b90ee66ded53",
        "86f10c9bfed04d371c5ec2f72b45b97c",
        "78083e14057c371766825ee50381fc57",
        "d4d790bdfea5f4c62c2a549aa09948c2",
        "e176c7afb65995e8c6c040b2676344b0",
        "54fa4c3c28588089d333fec450eeec4c",
        "d96aae6152222bec0444a884deb9952a",
        "7c82d4bdbfb964df322fa88fa74c3ec1",
        "1cd6d7bed81d8e29beef2b4b84f8d8d8",
        "6e710a2bb843536c9bc3ee8d212411e9",
        "83b10a053c01b3e43c99a2b6bea977bd",
        "c53b8a80e0f94ea72710637e9d96e157",
        "0ea3c774c0ff2d95ea58c99f1dfef15c",
        "193b430d3916bfce6c8f7e7473a9c373",
        "872578c13658c8cfc0366ddbaeb4e24b",
        "aa55b92a78d3b7d5c10d8a3670365bd9",
        "191fcaeda8ccbd0cb05dd266b9433bb4",
        "a7ddefee6f4f563dc109372a6a4ccdd2",
        "d27856a35d8397ed93ff92cfb797b262",
        "5d781780ca1f717f60325284638a0266",
        "26d0b368e0f542d7cd013981211d4394",
        "c1b57a55ffa6e6adc85ccf0cc02f0e5a",
        "df6ae22ab6703ba141f0f332984eb578",
        "cb49691920eb99bf892990332db2af70",
        "4bad1875be647a5fdb36adac2d5dd26c",
        "ae63837e9c9b6b5dce7aeb5a0214aa1e",
        "70309b32ffa9f9542ca97ab6f2431b91",
        "2f04e600b84eb286b8ad6e7cad302dbd",
        "7d52fcdeed5b5a483603b4be5c45a2df",
        "050c88c09a60c7098b33d14a96843ac7",
        "c274ff9d348780515ae26b6bf852b15a",
        "fb85f8acc64f1e7a22033691520a67d5",
        "d7f5c11844b5f7e0878838e45047da86",
        "f78d9aed58bb78988ffc4d35cd607ffa",
        "2822e9c3bd7c01a3a20af188cd6c212e",
        "9ca645f2bb26ec48ad038ff01d9d5b8f",
        "f079644b8dd403017fba1f91e5a93077",
        "1020b3dfcf64cb64f3bb4cad6d0487e4",
        "552d46425a5420009d2918ce4662a4ac",
        "31279a351e3601797881bfe8b2acd6a3",
        "008d4798dbd3dcb649c8d3d53302871f",
        "9c9dc07ac5a4007978fc18e0bbaa6601",
        "d5b7b7dd03cb2cab9a4e5650a3a88422",
        "cad66d1a540fdd56545ba7d2dcd989a4",
        "91c10c140c0d89804f689b74a9c731f6",
        "9c4c61e51ff2008389ffe8f6065caf14",
        "9c4c61e51ff2008389ffe8f6065caf14",
        "e6fdc34ff0a3692d1fa34c0796ba022a",
      ];
    var U = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const x = new (class {
        constructor() {
          ((this.BASE_HEADERS = { "Content-Type": "application/json" }),
            (this.FEATURE_CACHE_KEY = "posthogFeatureFlagsCache"),
            (this.CACHE_TTL_WITH_VERSION_MS = 864e5),
            (this.CACHE_TTL_WITHOUT_VERSION_MS = 144e5));
        }
        u(t, e) {
          return U(this, void 0, void 0, function* () {
            if (!u || !a) return null;
            try {
              const i = yield fetch(`${a}${t}`, {
                method: "POST",
                headers: this.BASE_HEADERS,
                body: JSON.stringify(e),
              });
              if (!i.ok) throw new Error(`PostHog API error: ${i.status}`);
              return yield i.json().catch(() => ({}));
            } catch (t) {
              return null;
            }
          });
        }
        sendEvent(t, e, i = {}) {
          return U(this, void 0, void 0, function* () {
            if (
              ![
                "party_start",
                "allchat_open_create_comment_clicked",
                "allchat_post_button_clicked",
                "allchat_cancel_post_clicked",
                "allchat_login_modal_opened",
                "allchat_message_sent",
                "allchat_message_rejected",
                "allchat_message_errored",
                "allchat_message_accepted",
                "event_failure",
                "party_init_timing",
              ].includes(t) ||
              !e
            )
              return;
            const n = yield this.l(e),
              s = Object.entries(n || {}).filter(([, t]) =>
                null == t ? void 0 : t.enabled,
              ),
              r = Object.fromEntries(
                s.map(([t, e]) => {
                  var i;
                  return [
                    `$feature/${t}`,
                    null === (i = e.variant) || void 0 === i || i,
                  ];
                }),
              ),
              o = s.map(([t]) => t);
            o.length > 0 && (r.$active_feature_flags = o);
            const a = {
              api_key: u,
              event: t,
              distinct_id: e,
              properties: Object.assign(
                Object.assign(Object.assign({}, i), r),
                {
                  $lib: "teleparty-chrome-extension-background",
                  $lib_version: I,
                },
              ),
            };
            yield this.u("/i/v0/e/", a);
          });
        }
        h(t) {
          var e;
          return U(this, void 0, void 0, function* () {
            const i = { api_key: u, distinct_id: t },
              n = yield this.u("/flags?v=2", i);
            return null !== (e = null == n ? void 0 : n.flags) && void 0 !== e
              ? e
              : null;
          });
        }
        D() {
          return U(this, void 0, void 0, function* () {
            const t = yield h.getItemsAsync([this.FEATURE_CACHE_KEY]);
            return t && t[this.FEATURE_CACHE_KEY];
          });
        }
        l(t, e = !1) {
          var i, n, s;
          return U(this, void 0, void 0, function* () {
            if (!t) return {};
            const r = Date.now(),
              o = (yield h.getItemsAsync([this.FEATURE_CACHE_KEY]))[
                this.FEATURE_CACHE_KEY
              ],
              u =
                null !==
                  (i = yield (function () {
                    var t;
                    return p(this, void 0, void 0, function* () {
                      return null !== (t = (yield y(!1)).ffVersion) &&
                        void 0 !== t
                        ? t
                        : null;
                    });
                  })()) && void 0 !== i
                  ? i
                  : void 0,
              a = u
                ? this.CACHE_TTL_WITH_VERSION_MS
                : this.CACHE_TTL_WITHOUT_VERSION_MS,
              c = !u || (null == o ? void 0 : o.ffVersion) === u;
            if (o && c && r - o.timestamp < a && !e)
              return null !== (n = null == o ? void 0 : o.flags) && void 0 !== n
                ? n
                : {};
            const d = yield this.h(t);
            if (null === d)
              return null !== (s = null == o ? void 0 : o.flags) && void 0 !== s
                ? s
                : {};
            const l = { flags: d, timestamp: r, ffVersion: u };
            return (yield v.setItemsAsync({ [this.FEATURE_CACHE_KEY]: l }), d);
          });
        }
        hasFeature(t, e) {
          var i, n, s;
          return U(this, void 0, void 0, function* () {
            const r = yield this.D(),
              o =
                null ===
                  (n =
                    null === (i = null == r ? void 0 : r.flags) || void 0 === i
                      ? void 0
                      : i[t]) || void 0 === n
                  ? void 0
                  : n.enabled;
            if ("boolean" == typeof o) return o;
            if (!e) return !1;
            const u = yield this.l(e);
            return !!(null === (s = null == u ? void 0 : u[t]) || void 0 === s
              ? void 0
              : s.enabled);
          });
        }
        getFeatureVariant(t, e) {
          var i, n, s;
          return U(this, void 0, void 0, function* () {
            const r = yield this.D(),
              o =
                null ===
                  (n =
                    null === (i = null == r ? void 0 : r.flags) || void 0 === i
                      ? void 0
                      : i[t]) || void 0 === n
                  ? void 0
                  : n.variant;
            if (void 0 !== o) return o;
            const u = yield this.l(e);
            return null === (s = null == u ? void 0 : u[t]) || void 0 === s
              ? void 0
              : s.variant;
          });
        }
      })(),
      L = "Service_Background",
      M = "Popup",
      V = "Content_Script";
    var $ = console.log.bind(self.console),
      H = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function u(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, u);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    const W = new (class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, e, i = 2e4) {
        return H(this, void 0, void 0, function* () {
          return new Promise((n, s) => {
            const r = setTimeout(() => {
              (console.log("send timeout"), s("Message Timeout"));
            }, i);
            try {
              chrome.tabs.sendMessage(e, t, (e) => {
                (chrome.runtime.lastError &&
                  $(chrome.runtime.lastError.message + JSON.stringify(t)),
                  clearTimeout(r),
                  n(e));
              });
            } catch (t) {
              (clearTimeout(r), s(t));
            }
          });
        });
      }
      p(t, e) {
        return H(this, void 0, void 0, function* () {
          return new Promise((i, n) => {
            let s = null;
            e &&
              (s = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(A, t, (e) => {
                (chrome.runtime.lastError &&
                  console.log(
                    chrome.runtime.lastError.message + JSON.stringify(t),
                  ),
                  s && clearTimeout(s),
                  i(e));
              });
            } catch (t) {
              (s && clearTimeout(s), n(t));
            }
          });
        });
      }
    })();
    const z = new (class {
      constructor() {
        ((this.m = this._.bind(this)), (this.F = []), this.C());
      }
      addMessageListener(t) {
        this.F.push(t);
      }
      removeMessageListener(t) {
        this.F = this.F.filter((t) => {});
      }
      C() {
        W.addListener(this.m);
      }
      teardown() {
        ((this.F = []), W.removeListener(this.m));
      }
      _(t, e, i) {
        return (
          !!this.I(t, e, (t) => {
            i(null != t ? t : {});
          }) || (i({}), !1)
        );
      }
      I(t, e, i) {
        let n = !1;
        return (
          this.F.forEach((s) => {
            s.onMessage(t, e, i) && (n = !0);
          }),
          n
        );
      }
    })();
    var G = i(7833),
      Z = i.n(G);
    const J = 368;
    chrome.runtime.getURL("img/x-circle.svg");
    const Y = { showAlert: !1 },
      K = new Set([
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
    function q(t) {
      return t
        ? t
            .replace(/\s+/g, " ")
            .replace(/\s+[-|:]\s+teleparty$/i, "")
            .trim()
        : "";
    }
    function X(t) {
      const e = q(t);
      if (e.length < 2 || e.length > 160) return !1;
      const i = e.toLowerCase();
      if (K.has(i)) return !1;
      if (/^(sign|log)\s?in$/i.test(e) || /^episode\s+\d+$/i.test(e)) return !1;
      const n = e.split(" "),
        s = e.replace(/[^a-z0-9]/gi, "");
      return n.length <= 18 && s.length >= 2;
    }
    function Q(t) {
      if (void 0 !== t && Number.isInteger(t) && t > 0) return t;
    }
    class tt {
      constructor(t, e, i, n, s, r = []) {
        ((this.requiredPermissions = t),
          (this.serverName = i),
          (this.name = n),
          (this.contentScripts = e),
          (this.syncFromEnd = s),
          (this.browseScripts = r));
      }
      validateVideoId(t) {
        return !!t;
      }
      validateVideoType(t) {
        return !!t;
      }
      urlWithSessionId(t) {
        return `${r}/join/${t}`;
      }
    }
    var et = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const it = `tp_csrf:${new URL(e).origin}`;
    let nt = null;
    function st() {
      var t, i, n;
      return et(this, void 0, void 0, function* () {
        const s = yield fetch(`${e}/session/csrf`, {
          method: "GET",
          credentials: "include",
        });
        if (!s.ok) return;
        const r = yield s.json().catch(() => ({})),
          o =
            null !==
              (i =
                null !== (t = null == r ? void 0 : r.csrf) && void 0 !== t
                  ? t
                  : null == r
                    ? void 0
                    : r.token) && void 0 !== i
              ? i
              : null === (n = null == r ? void 0 : r.data) || void 0 === n
                ? void 0
                : n.csrf;
        return "string" == typeof o && o
          ? ((function (t) {
              try {
                if ("undefined" == typeof sessionStorage) return;
                sessionStorage.setItem(
                  it,
                  JSON.stringify({ v: t, t: Date.now() }),
                );
              } catch (t) {}
            })(o),
            o)
          : void 0;
      });
    }
    function rt(t = !1) {
      return et(this, void 0, void 0, function* () {
        const e = (function () {
          try {
            if ("undefined" == typeof sessionStorage) return;
            const t = sessionStorage.getItem(it);
            if (!t) return;
            const { v: e, t: i } = JSON.parse(t);
            if (Date.now() - i < 6e4) return e;
          } catch (t) {}
        })();
        return e && !t
          ? e
          : (null != nt ||
              (nt = st().finally(() => {
                nt = null;
              })),
            nt);
      });
    }
    const ot = Object.freeze("video-highlights"),
      ut = Object.freeze([
        "live-match-info",
        "fantasy",
        "commentary",
        "scorecard",
        "squad",
        "key-moments",
      ]),
      at = Object.freeze({ tag: "type", value: "match-info" }),
      ct = Object.freeze({
        VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
        VIDEO_ELEMENT_SELECTOR_2: 'video[class*="StyledVideo"]',
        TITLE_ELEMENT_SELECTOR: '[class*="VideoPlayerTitleLabel"]',
        MATCH_INFO_QUERY_PARAM: at,
        AD_CLASS_NAME: 'video[title="Advertisement"]',
        INSTREAM_AD_ID: '[id*="instream-video"]',
        LIVE_MATCH_PAGE_TYPES: ut,
        HIGHLIGHTS: ot,
      }),
      dt = Object.freeze({
        LIVE: "/live/",
        VIDEO: "/video/",
        CHANNELS: "/canales/",
      }),
      lt = Object.freeze([dt.LIVE, dt.CHANNELS]),
      ht = Object.freeze({
        PATH_TYPES: dt,
        LIVE_PATHS: lt,
        VIDEO_ELEMENT_SELECTOR: "video",
        TITLE_ELEMENT_SELECTOR: "h1",
      }),
      ft = Object.freeze({ SHOW: "player", LIVE_TV: "livestream" }),
      Dt = Object.freeze({
        VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
        LIVE_VIDEO_ELEMENT_SELECTOR:
          "video#bitmovinplayer-video-bitmovin-element",
        TITLE_ELEMENT_SELECTOR: 'h3[class*="VODTitle_show-title"]',
        VIDEO_TYPES: ft,
        AD_CLASS_NAME: 'video[title="Advertisement"]',
      }),
      vt = Object.freeze({ VIDEO: "vod", LIVE: "live" }),
      pt = Object.freeze({
        VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
        AD_CLASS_NAME: 'video[title="Advertisement"]',
        TITLE_ELEMENT_SELECTOR: "#series_title",
        TITLE_ELEMENT_SELECTOR_LIVE_TV:
          ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
        UI_CONTAINER: ".bmpui-ui-uicontainer",
        VIDEO_TYPES: vt,
        QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode",
      });
    function bt(t) {
      let e = t.length;
      for (; --e >= 0;) t[e] = 0;
    }
    const mt = 256,
      gt = 286,
      _t = 30,
      yt = 15,
      wt = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      Ft = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      Et = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      Ct = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      At = new Array(576);
    bt(At);
    const It = new Array(60);
    bt(It);
    const St = new Array(512);
    bt(St);
    const kt = new Array(256);
    bt(kt);
    const Tt = new Array(29);
    bt(Tt);
    const Bt = new Array(_t);
    function Ot(t, e, i, n, s) {
      ((this.static_tree = t),
        (this.extra_bits = e),
        (this.extra_base = i),
        (this.elems = n),
        (this.max_length = s),
        (this.has_stree = t && t.length));
    }
    let Nt, jt, Pt;
    function Rt(t, e) {
      ((this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e));
    }
    bt(Bt);
    const Ut = (t) => (t < 256 ? St[t] : St[256 + (t >>> 7)]),
      xt = (t, e) => {
        ((t.pending_buf[t.pending++] = 255 & e),
          (t.pending_buf[t.pending++] = (e >>> 8) & 255));
      },
      Lt = (t, e, i) => {
        t.bi_valid > 16 - i
          ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
            xt(t, t.bi_buf),
            (t.bi_buf = e >> (16 - t.bi_valid)),
            (t.bi_valid += i - 16))
          : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += i));
      },
      Mt = (t, e, i) => {
        Lt(t, i[2 * e], i[2 * e + 1]);
      },
      Vt = (t, e) => {
        let i = 0;
        do {
          ((i |= 1 & t), (t >>>= 1), (i <<= 1));
        } while (--e > 0);
        return i >>> 1;
      },
      $t = (t, e, i) => {
        const n = new Array(16);
        let s,
          r,
          o = 0;
        for (s = 1; s <= yt; s++) ((o = (o + i[s - 1]) << 1), (n[s] = o));
        for (r = 0; r <= e; r++) {
          let e = t[2 * r + 1];
          0 !== e && (t[2 * r] = Vt(n[e]++, e));
        }
      },
      Ht = (t) => {
        let e;
        for (e = 0; e < gt; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < _t; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        ((t.dyn_ltree[512] = 1),
          (t.opt_len = t.static_len = 0),
          (t.sym_next = t.matches = 0));
      },
      Wt = (t) => {
        (t.bi_valid > 8
          ? xt(t, t.bi_buf)
          : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
          (t.bi_buf = 0),
          (t.bi_valid = 0));
      },
      zt = (t, e, i, n) => {
        const s = 2 * e,
          r = 2 * i;
        return t[s] < t[r] || (t[s] === t[r] && n[e] <= n[i]);
      },
      Gt = (t, e, i) => {
        const n = t.heap[i];
        let s = i << 1;
        for (
          ;
          s <= t.heap_len &&
          (s < t.heap_len && zt(e, t.heap[s + 1], t.heap[s], t.depth) && s++,
          !zt(e, n, t.heap[s], t.depth));
        )
          ((t.heap[i] = t.heap[s]), (i = s), (s <<= 1));
        t.heap[i] = n;
      },
      Zt = (t, e, i) => {
        let n,
          s,
          r,
          o,
          u = 0;
        if (0 !== t.sym_next)
          do {
            ((n = 255 & t.pending_buf[t.sym_buf + u++]),
              (n += (255 & t.pending_buf[t.sym_buf + u++]) << 8),
              (s = t.pending_buf[t.sym_buf + u++]),
              0 === n
                ? Mt(t, s, e)
                : ((r = kt[s]),
                  Mt(t, r + mt + 1, e),
                  (o = wt[r]),
                  0 !== o && ((s -= Tt[r]), Lt(t, s, o)),
                  n--,
                  (r = Ut(n)),
                  Mt(t, r, i),
                  (o = Ft[r]),
                  0 !== o && ((n -= Bt[r]), Lt(t, n, o))));
          } while (u < t.sym_next);
        Mt(t, 256, e);
      },
      Jt = (t, e) => {
        const i = e.dyn_tree,
          n = e.stat_desc.static_tree,
          s = e.stat_desc.has_stree,
          r = e.stat_desc.elems;
        let o,
          u,
          a,
          c = -1;
        for (t.heap_len = 0, t.heap_max = 573, o = 0; o < r; o++)
          0 !== i[2 * o]
            ? ((t.heap[++t.heap_len] = c = o), (t.depth[o] = 0))
            : (i[2 * o + 1] = 0);
        for (; t.heap_len < 2;)
          ((a = t.heap[++t.heap_len] = c < 2 ? ++c : 0),
            (i[2 * a] = 1),
            (t.depth[a] = 0),
            t.opt_len--,
            s && (t.static_len -= n[2 * a + 1]));
        for (e.max_code = c, o = t.heap_len >> 1; o >= 1; o--) Gt(t, i, o);
        a = r;
        do {
          ((o = t.heap[1]),
            (t.heap[1] = t.heap[t.heap_len--]),
            Gt(t, i, 1),
            (u = t.heap[1]),
            (t.heap[--t.heap_max] = o),
            (t.heap[--t.heap_max] = u),
            (i[2 * a] = i[2 * o] + i[2 * u]),
            (t.depth[a] =
              (t.depth[o] >= t.depth[u] ? t.depth[o] : t.depth[u]) + 1),
            (i[2 * o + 1] = i[2 * u + 1] = a),
            (t.heap[1] = a++),
            Gt(t, i, 1));
        } while (t.heap_len >= 2);
        ((t.heap[--t.heap_max] = t.heap[1]),
          ((t, e) => {
            const i = e.dyn_tree,
              n = e.max_code,
              s = e.stat_desc.static_tree,
              r = e.stat_desc.has_stree,
              o = e.stat_desc.extra_bits,
              u = e.stat_desc.extra_base,
              a = e.stat_desc.max_length;
            let c,
              d,
              l,
              h,
              f,
              D,
              v = 0;
            for (h = 0; h <= yt; h++) t.bl_count[h] = 0;
            for (
              i[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1;
              c < 573;
              c++
            )
              ((d = t.heap[c]),
                (h = i[2 * i[2 * d + 1] + 1] + 1),
                h > a && ((h = a), v++),
                (i[2 * d + 1] = h),
                d > n ||
                  (t.bl_count[h]++,
                  (f = 0),
                  d >= u && (f = o[d - u]),
                  (D = i[2 * d]),
                  (t.opt_len += D * (h + f)),
                  r && (t.static_len += D * (s[2 * d + 1] + f))));
            if (0 !== v) {
              do {
                for (h = a - 1; 0 === t.bl_count[h];) h--;
                (t.bl_count[h]--,
                  (t.bl_count[h + 1] += 2),
                  t.bl_count[a]--,
                  (v -= 2));
              } while (v > 0);
              for (h = a; 0 !== h; h--)
                for (d = t.bl_count[h]; 0 !== d;)
                  ((l = t.heap[--c]),
                    l > n ||
                      (i[2 * l + 1] !== h &&
                        ((t.opt_len += (h - i[2 * l + 1]) * i[2 * l]),
                        (i[2 * l + 1] = h)),
                      d--));
            }
          })(t, e),
          $t(i, c, t.bl_count));
      },
      Yt = (t, e, i) => {
        let n,
          s,
          r = -1,
          o = e[1],
          u = 0,
          a = 7,
          c = 4;
        for (
          0 === o && ((a = 138), (c = 3)), e[2 * (i + 1) + 1] = 65535, n = 0;
          n <= i;
          n++
        )
          ((s = o),
            (o = e[2 * (n + 1) + 1]),
            (++u < a && s === o) ||
              (u < c
                ? (t.bl_tree[2 * s] += u)
                : 0 !== s
                  ? (s !== r && t.bl_tree[2 * s]++, t.bl_tree[32]++)
                  : u <= 10
                    ? t.bl_tree[34]++
                    : t.bl_tree[36]++,
              (u = 0),
              (r = s),
              0 === o
                ? ((a = 138), (c = 3))
                : s === o
                  ? ((a = 6), (c = 3))
                  : ((a = 7), (c = 4))));
      },
      Kt = (t, e, i) => {
        let n,
          s,
          r = -1,
          o = e[1],
          u = 0,
          a = 7,
          c = 4;
        for (0 === o && ((a = 138), (c = 3)), n = 0; n <= i; n++)
          if (((s = o), (o = e[2 * (n + 1) + 1]), !(++u < a && s === o))) {
            if (u < c)
              do {
                Mt(t, s, t.bl_tree);
              } while (0 !== --u);
            else
              0 !== s
                ? (s !== r && (Mt(t, s, t.bl_tree), u--),
                  Mt(t, 16, t.bl_tree),
                  Lt(t, u - 3, 2))
                : u <= 10
                  ? (Mt(t, 17, t.bl_tree), Lt(t, u - 3, 3))
                  : (Mt(t, 18, t.bl_tree), Lt(t, u - 11, 7));
            ((u = 0),
              (r = s),
              0 === o
                ? ((a = 138), (c = 3))
                : s === o
                  ? ((a = 6), (c = 3))
                  : ((a = 7), (c = 4)));
          }
      };
    let qt = !1;
    const Xt = (t, e, i, n) => {
      (Lt(t, 0 + (n ? 1 : 0), 3),
        Wt(t),
        xt(t, i),
        xt(t, ~i),
        i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending),
        (t.pending += i));
    };
    var Qt = (t, e, i, n) => {
        let s,
          r,
          o = 0;
        (t.level > 0
          ? (2 === t.strm.data_type &&
              (t.strm.data_type = ((t) => {
                let e,
                  i = 4093624447;
                for (e = 0; e <= 31; e++, i >>>= 1)
                  if (1 & i && 0 !== t.dyn_ltree[2 * e]) return 0;
                if (
                  0 !== t.dyn_ltree[18] ||
                  0 !== t.dyn_ltree[20] ||
                  0 !== t.dyn_ltree[26]
                )
                  return 1;
                for (e = 32; e < mt; e++)
                  if (0 !== t.dyn_ltree[2 * e]) return 1;
                return 0;
              })(t)),
            Jt(t, t.l_desc),
            Jt(t, t.d_desc),
            (o = ((t) => {
              let e;
              for (
                Yt(t, t.dyn_ltree, t.l_desc.max_code),
                  Yt(t, t.dyn_dtree, t.d_desc.max_code),
                  Jt(t, t.bl_desc),
                  e = 18;
                e >= 3 && 0 === t.bl_tree[2 * Ct[e] + 1];
                e--
              );
              return ((t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e);
            })(t)),
            (s = (t.opt_len + 3 + 7) >>> 3),
            (r = (t.static_len + 3 + 7) >>> 3),
            r <= s && (s = r))
          : (s = r = i + 5),
          i + 4 <= s && -1 !== e
            ? Xt(t, e, i, n)
            : 4 === t.strategy || r === s
              ? (Lt(t, 2 + (n ? 1 : 0), 3), Zt(t, At, It))
              : (Lt(t, 4 + (n ? 1 : 0), 3),
                ((t, e, i, n) => {
                  let s;
                  for (
                    Lt(t, e - 257, 5), Lt(t, i - 1, 5), Lt(t, n - 4, 4), s = 0;
                    s < n;
                    s++
                  )
                    Lt(t, t.bl_tree[2 * Ct[s] + 1], 3);
                  (Kt(t, t.dyn_ltree, e - 1), Kt(t, t.dyn_dtree, i - 1));
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
                Zt(t, t.dyn_ltree, t.dyn_dtree)),
          Ht(t),
          n && Wt(t));
      },
      te = {
        S: (t) => {
          (qt ||
            ((() => {
              let t, e, i, n, s;
              const r = new Array(16);
              for (i = 0, n = 0; n < 28; n++)
                for (Tt[n] = i, t = 0; t < 1 << wt[n]; t++) kt[i++] = n;
              for (kt[i - 1] = n, s = 0, n = 0; n < 16; n++)
                for (Bt[n] = s, t = 0; t < 1 << Ft[n]; t++) St[s++] = n;
              for (s >>= 7; n < _t; n++)
                for (Bt[n] = s << 7, t = 0; t < 1 << (Ft[n] - 7); t++)
                  St[256 + s++] = n;
              for (e = 0; e <= yt; e++) r[e] = 0;
              for (t = 0; t <= 143;) ((At[2 * t + 1] = 8), t++, r[8]++);
              for (; t <= 255;) ((At[2 * t + 1] = 9), t++, r[9]++);
              for (; t <= 279;) ((At[2 * t + 1] = 7), t++, r[7]++);
              for (; t <= 287;) ((At[2 * t + 1] = 8), t++, r[8]++);
              for ($t(At, 287, r), t = 0; t < _t; t++)
                ((It[2 * t + 1] = 5), (It[2 * t] = Vt(t, 5)));
              ((Nt = new Ot(At, wt, 257, gt, yt)),
                (jt = new Ot(It, Ft, 0, _t, yt)),
                (Pt = new Ot(new Array(0), Et, 0, 19, 7)));
            })(),
            (qt = !0)),
            (t.l_desc = new Rt(t.dyn_ltree, Nt)),
            (t.d_desc = new Rt(t.dyn_dtree, jt)),
            (t.bl_desc = new Rt(t.bl_tree, Pt)),
            (t.bi_buf = 0),
            (t.bi_valid = 0),
            Ht(t));
        },
        k: Xt,
        T: Qt,
        B: (t, e, i) => (
          (t.pending_buf[t.sym_buf + t.sym_next++] = e),
          (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
          (t.pending_buf[t.sym_buf + t.sym_next++] = i),
          0 === e
            ? t.dyn_ltree[2 * i]++
            : (t.matches++,
              e--,
              t.dyn_ltree[2 * (kt[i] + mt + 1)]++,
              t.dyn_dtree[2 * Ut(e)]++),
          t.sym_next === t.sym_end
        ),
        O: (t) => {
          (Lt(t, 2, 3),
            Mt(t, 256, At),
            ((t) => {
              16 === t.bi_valid
                ? (xt(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                : t.bi_valid >= 8 &&
                  ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                  (t.bi_buf >>= 8),
                  (t.bi_valid -= 8));
            })(t));
        },
      };
    var ee = (t, e, i, n) => {
      let s = 65535 & t,
        r = (t >>> 16) & 65535,
        o = 0;
      for (; 0 !== i;) {
        ((o = i > 2e3 ? 2e3 : i), (i -= o));
        do {
          ((s = (s + e[n++]) | 0), (r = (r + s) | 0));
        } while (--o);
        ((s %= 65521), (r %= 65521));
      }
      return s | (r << 16);
    };
    const ie = new Uint32Array(
      (() => {
        let t,
          e = [];
        for (var i = 0; i < 256; i++) {
          t = i;
          for (var n = 0; n < 8; n++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
          e[i] = t;
        }
        return e;
      })(),
    );
    var ne = (t, e, i, n) => {
        const s = ie,
          r = n + i;
        t ^= -1;
        for (let i = n; i < r; i++) t = (t >>> 8) ^ s[255 & (t ^ e[i])];
        return -1 ^ t;
      },
      se = {
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
      re = {
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
    const { S: oe, k: ue, T: ae, B: ce, O: de } = te,
      {
        Z_NO_FLUSH: le,
        Z_PARTIAL_FLUSH: he,
        Z_FULL_FLUSH: fe,
        Z_FINISH: De,
        Z_BLOCK: ve,
        Z_OK: pe,
        Z_STREAM_END: be,
        Z_STREAM_ERROR: me,
        Z_DATA_ERROR: ge,
        Z_BUF_ERROR: _e,
        Z_DEFAULT_COMPRESSION: ye,
        Z_FILTERED: we,
        Z_HUFFMAN_ONLY: Fe,
        Z_RLE: Ee,
        Z_FIXED: Ce,
        Z_DEFAULT_STRATEGY: Ae,
        Z_UNKNOWN: Ie,
        Z_DEFLATED: Se,
      } = re,
      ke = 258,
      Te = 262,
      Be = 42,
      Oe = 113,
      Ne = 666,
      je = (t, e) => ((t.msg = se[e]), e),
      Pe = (t) => 2 * t - (t > 4 ? 9 : 0),
      Re = (t) => {
        let e = t.length;
        for (; --e >= 0;) t[e] = 0;
      },
      Ue = (t) => {
        let e,
          i,
          n,
          s = t.w_size;
        ((e = t.hash_size), (n = e));
        do {
          ((i = t.head[--n]), (t.head[n] = i >= s ? i - s : 0));
        } while (--e);
        ((e = s), (n = e));
        do {
          ((i = t.prev[--n]), (t.prev[n] = i >= s ? i - s : 0));
        } while (--e);
      };
    let xe = (t, e, i) => ((e << t.hash_shift) ^ i) & t.hash_mask;
    const Le = (t) => {
        const e = t.state;
        let i = e.pending;
        (i > t.avail_out && (i = t.avail_out),
          0 !== i &&
            (t.output.set(
              e.pending_buf.subarray(e.pending_out, e.pending_out + i),
              t.next_out,
            ),
            (t.next_out += i),
            (e.pending_out += i),
            (t.total_out += i),
            (t.avail_out -= i),
            (e.pending -= i),
            0 === e.pending && (e.pending_out = 0)));
      },
      Me = (t, e) => {
        (ae(
          t,
          t.block_start >= 0 ? t.block_start : -1,
          t.strstart - t.block_start,
          e,
        ),
          (t.block_start = t.strstart),
          Le(t.strm));
      },
      Ve = (t, e) => {
        t.pending_buf[t.pending++] = e;
      },
      $e = (t, e) => {
        ((t.pending_buf[t.pending++] = (e >>> 8) & 255),
          (t.pending_buf[t.pending++] = 255 & e));
      },
      He = (t, e, i, n) => {
        let s = t.avail_in;
        return (
          s > n && (s = n),
          0 === s
            ? 0
            : ((t.avail_in -= s),
              e.set(t.input.subarray(t.next_in, t.next_in + s), i),
              1 === t.state.wrap
                ? (t.adler = ee(t.adler, e, s, i))
                : 2 === t.state.wrap && (t.adler = ne(t.adler, e, s, i)),
              (t.next_in += s),
              (t.total_in += s),
              s)
        );
      },
      We = (t, e) => {
        let i,
          n,
          s = t.max_chain_length,
          r = t.strstart,
          o = t.prev_length,
          u = t.nice_match;
        const a = t.strstart > t.w_size - Te ? t.strstart - (t.w_size - Te) : 0,
          c = t.window,
          d = t.w_mask,
          l = t.prev,
          h = t.strstart + ke;
        let f = c[r + o - 1],
          D = c[r + o];
        (t.prev_length >= t.good_match && (s >>= 2),
          u > t.lookahead && (u = t.lookahead));
        do {
          if (
            ((i = e),
            c[i + o] === D &&
              c[i + o - 1] === f &&
              c[i] === c[r] &&
              c[++i] === c[r + 1])
          ) {
            ((r += 2), i++);
            do {} while (
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              c[++r] === c[++i] &&
              r < h
            );
            if (((n = ke - (h - r)), (r = h - ke), n > o)) {
              if (((t.match_start = e), (o = n), n >= u)) break;
              ((f = c[r + o - 1]), (D = c[r + o]));
            }
          }
        } while ((e = l[e & d]) > a && 0 !== --s);
        return o <= t.lookahead ? o : t.lookahead;
      },
      ze = (t) => {
        const e = t.w_size;
        let i, n, s;
        do {
          if (
            ((n = t.window_size - t.lookahead - t.strstart),
            t.strstart >= e + (e - Te) &&
              (t.window.set(t.window.subarray(e, e + e - n), 0),
              (t.match_start -= e),
              (t.strstart -= e),
              (t.block_start -= e),
              t.insert > t.strstart && (t.insert = t.strstart),
              Ue(t),
              (n += e)),
            0 === t.strm.avail_in)
          )
            break;
          if (
            ((i = He(t.strm, t.window, t.strstart + t.lookahead, n)),
            (t.lookahead += i),
            t.lookahead + t.insert >= 3)
          )
            for (
              s = t.strstart - t.insert,
                t.ins_h = t.window[s],
                t.ins_h = xe(t, t.ins_h, t.window[s + 1]);
              t.insert &&
              ((t.ins_h = xe(t, t.ins_h, t.window[s + 3 - 1])),
              (t.prev[s & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = s),
              s++,
              t.insert--,
              !(t.lookahead + t.insert < 3));
            );
        } while (t.lookahead < Te && 0 !== t.strm.avail_in);
      },
      Ge = (t, e) => {
        let i,
          n,
          s,
          r =
            t.pending_buf_size - 5 > t.w_size
              ? t.w_size
              : t.pending_buf_size - 5,
          o = 0,
          u = t.strm.avail_in;
        do {
          if (((i = 65535), (s = (t.bi_valid + 42) >> 3), t.strm.avail_out < s))
            break;
          if (
            ((s = t.strm.avail_out - s),
            (n = t.strstart - t.block_start),
            i > n + t.strm.avail_in && (i = n + t.strm.avail_in),
            i > s && (i = s),
            i < r &&
              ((0 === i && e !== De) || e === le || i !== n + t.strm.avail_in))
          )
            break;
          ((o = e === De && i === n + t.strm.avail_in ? 1 : 0),
            ue(t, 0, 0, o),
            (t.pending_buf[t.pending - 4] = i),
            (t.pending_buf[t.pending - 3] = i >> 8),
            (t.pending_buf[t.pending - 2] = ~i),
            (t.pending_buf[t.pending - 1] = ~i >> 8),
            Le(t.strm),
            n &&
              (n > i && (n = i),
              t.strm.output.set(
                t.window.subarray(t.block_start, t.block_start + n),
                t.strm.next_out,
              ),
              (t.strm.next_out += n),
              (t.strm.avail_out -= n),
              (t.strm.total_out += n),
              (t.block_start += n),
              (i -= n)),
            i &&
              (He(t.strm, t.strm.output, t.strm.next_out, i),
              (t.strm.next_out += i),
              (t.strm.avail_out -= i),
              (t.strm.total_out += i)));
        } while (0 === o);
        return (
          (u -= t.strm.avail_in),
          u &&
            (u >= t.w_size
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
              : (t.window_size - t.strstart <= u &&
                  ((t.strstart -= t.w_size),
                  t.window.set(
                    t.window.subarray(t.w_size, t.w_size + t.strstart),
                    0,
                  ),
                  t.matches < 2 && t.matches++,
                  t.insert > t.strstart && (t.insert = t.strstart)),
                t.window.set(
                  t.strm.input.subarray(t.strm.next_in - u, t.strm.next_in),
                  t.strstart,
                ),
                (t.strstart += u),
                (t.insert +=
                  u > t.w_size - t.insert ? t.w_size - t.insert : u)),
            (t.block_start = t.strstart)),
          t.high_water < t.strstart && (t.high_water = t.strstart),
          o
            ? 4
            : e !== le &&
                e !== De &&
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
                  (He(t.strm, t.window, t.strstart, s),
                  (t.strstart += s),
                  (t.insert +=
                    s > t.w_size - t.insert ? t.w_size - t.insert : s)),
                t.high_water < t.strstart && (t.high_water = t.strstart),
                (s = (t.bi_valid + 42) >> 3),
                (s =
                  t.pending_buf_size - s > 65535
                    ? 65535
                    : t.pending_buf_size - s),
                (r = s > t.w_size ? t.w_size : s),
                (n = t.strstart - t.block_start),
                (n >= r ||
                  ((n || e === De) &&
                    e !== le &&
                    0 === t.strm.avail_in &&
                    n <= s)) &&
                  ((i = n > s ? s : n),
                  (o = e === De && 0 === t.strm.avail_in && i === n ? 1 : 0),
                  ue(t, t.block_start, i, o),
                  (t.block_start += i),
                  Le(t.strm)),
                o ? 3 : 1)
        );
      },
      Ze = (t, e) => {
        let i, n;
        for (;;) {
          if (t.lookahead < Te) {
            if ((ze(t), t.lookahead < Te && e === le)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((i = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = xe(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            0 !== i &&
              t.strstart - i <= t.w_size - Te &&
              (t.match_length = We(t, i)),
            t.match_length >= 3)
          )
            if (
              ((n = ce(t, t.strstart - t.match_start, t.match_length - 3)),
              (t.lookahead -= t.match_length),
              t.match_length <= t.max_lazy_match && t.lookahead >= 3)
            ) {
              t.match_length--;
              do {
                (t.strstart++,
                  (t.ins_h = xe(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart));
              } while (0 !== --t.match_length);
              t.strstart++;
            } else
              ((t.strstart += t.match_length),
                (t.match_length = 0),
                (t.ins_h = t.window[t.strstart]),
                (t.ins_h = xe(t, t.ins_h, t.window[t.strstart + 1])));
          else
            ((n = ce(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++);
          if (n && (Me(t, !1), 0 === t.strm.avail_out)) return 1;
        }
        return (
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === De
            ? (Me(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.sym_next && (Me(t, !1), 0 === t.strm.avail_out)
              ? 1
              : 2
        );
      },
      Je = (t, e) => {
        let i, n, s;
        for (;;) {
          if (t.lookahead < Te) {
            if ((ze(t), t.lookahead < Te && e === le)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((i = 0),
            t.lookahead >= 3 &&
              ((t.ins_h = xe(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            (t.prev_length = t.match_length),
            (t.prev_match = t.match_start),
            (t.match_length = 2),
            0 !== i &&
              t.prev_length < t.max_lazy_match &&
              t.strstart - i <= t.w_size - Te &&
              ((t.match_length = We(t, i)),
              t.match_length <= 5 &&
                (t.strategy === we ||
                  (3 === t.match_length &&
                    t.strstart - t.match_start > 4096)) &&
                (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length)
          ) {
            ((s = t.strstart + t.lookahead - 3),
              (n = ce(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
              (t.lookahead -= t.prev_length - 1),
              (t.prev_length -= 2));
            do {
              ++t.strstart <= s &&
                ((t.ins_h = xe(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart));
            } while (0 !== --t.prev_length);
            if (
              ((t.match_available = 0),
              (t.match_length = 2),
              t.strstart++,
              n && (Me(t, !1), 0 === t.strm.avail_out))
            )
              return 1;
          } else if (t.match_available) {
            if (
              ((n = ce(t, 0, t.window[t.strstart - 1])),
              n && Me(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
            )
              return 1;
          } else ((t.match_available = 1), t.strstart++, t.lookahead--);
        }
        return (
          t.match_available &&
            ((n = ce(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          e === De
            ? (Me(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.sym_next && (Me(t, !1), 0 === t.strm.avail_out)
              ? 1
              : 2
        );
      };
    function Ye(t, e, i, n, s) {
      ((this.good_length = t),
        (this.max_lazy = e),
        (this.nice_length = i),
        (this.max_chain = n),
        (this.func = s));
    }
    const Ke = [
      new Ye(0, 0, 0, 0, Ge),
      new Ye(4, 4, 8, 4, Ze),
      new Ye(4, 5, 16, 8, Ze),
      new Ye(4, 6, 32, 32, Ze),
      new Ye(4, 4, 16, 16, Je),
      new Ye(8, 16, 32, 32, Je),
      new Ye(8, 16, 128, 128, Je),
      new Ye(8, 32, 128, 256, Je),
      new Ye(32, 128, 258, 1024, Je),
      new Ye(32, 258, 258, 4096, Je),
    ];
    function qe() {
      ((this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = Se),
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
        Re(this.dyn_ltree),
        Re(this.dyn_dtree),
        Re(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        Re(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        Re(this.depth),
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
    const Xe = (t) => {
        if (!t) return 1;
        const e = t.state;
        return !e ||
          e.strm !== t ||
          (e.status !== Be &&
            57 !== e.status &&
            69 !== e.status &&
            73 !== e.status &&
            91 !== e.status &&
            103 !== e.status &&
            e.status !== Oe &&
            e.status !== Ne)
          ? 1
          : 0;
      },
      Qe = (t) => {
        if (Xe(t)) return je(t, me);
        ((t.total_in = t.total_out = 0), (t.data_type = Ie));
        const e = t.state;
        return (
          (e.pending = 0),
          (e.pending_out = 0),
          e.wrap < 0 && (e.wrap = -e.wrap),
          (e.status = 2 === e.wrap ? 57 : e.wrap ? Be : Oe),
          (t.adler = 2 === e.wrap ? 0 : 1),
          (e.last_flush = -2),
          oe(e),
          pe
        );
      },
      ti = (t) => {
        const e = Qe(t);
        var i;
        return (
          e === pe &&
            (((i = t.state).window_size = 2 * i.w_size),
            Re(i.head),
            (i.max_lazy_match = Ke[i.level].max_lazy),
            (i.good_match = Ke[i.level].good_length),
            (i.nice_match = Ke[i.level].nice_length),
            (i.max_chain_length = Ke[i.level].max_chain),
            (i.strstart = 0),
            (i.block_start = 0),
            (i.lookahead = 0),
            (i.insert = 0),
            (i.match_length = i.prev_length = 2),
            (i.match_available = 0),
            (i.ins_h = 0)),
          e
        );
      },
      ei = (t, e, i, n, s, r) => {
        if (!t) return me;
        let o = 1;
        if (
          (e === ye && (e = 6),
          n < 0 ? ((o = 0), (n = -n)) : n > 15 && ((o = 2), (n -= 16)),
          s < 1 ||
            s > 9 ||
            i !== Se ||
            n < 8 ||
            n > 15 ||
            e < 0 ||
            e > 9 ||
            r < 0 ||
            r > Ce ||
            (8 === n && 1 !== o))
        )
          return je(t, me);
        8 === n && (n = 9);
        const u = new qe();
        return (
          (t.state = u),
          (u.strm = t),
          (u.status = Be),
          (u.wrap = o),
          (u.gzhead = null),
          (u.w_bits = n),
          (u.w_size = 1 << u.w_bits),
          (u.w_mask = u.w_size - 1),
          (u.hash_bits = s + 7),
          (u.hash_size = 1 << u.hash_bits),
          (u.hash_mask = u.hash_size - 1),
          (u.hash_shift = ~~((u.hash_bits + 3 - 1) / 3)),
          (u.window = new Uint8Array(2 * u.w_size)),
          (u.head = new Uint16Array(u.hash_size)),
          (u.prev = new Uint16Array(u.w_size)),
          (u.lit_bufsize = 1 << (s + 6)),
          (u.pending_buf_size = 4 * u.lit_bufsize),
          (u.pending_buf = new Uint8Array(u.pending_buf_size)),
          (u.sym_buf = u.lit_bufsize),
          (u.sym_end = 3 * (u.lit_bufsize - 1)),
          (u.level = e),
          (u.strategy = r),
          (u.method = i),
          ti(t)
        );
      };
    var ii = {
      deflateInit: (t, e) => ei(t, e, Se, 15, 8, Ae),
      deflateInit2: ei,
      deflateReset: ti,
      deflateResetKeep: Qe,
      deflateSetHeader: (t, e) =>
        Xe(t) || 2 !== t.state.wrap ? me : ((t.state.gzhead = e), pe),
      deflate: (t, e) => {
        if (Xe(t) || e > ve || e < 0) return t ? je(t, me) : me;
        const i = t.state;
        if (
          !t.output ||
          (0 !== t.avail_in && !t.input) ||
          (i.status === Ne && e !== De)
        )
          return je(t, 0 === t.avail_out ? _e : me);
        const n = i.last_flush;
        if (((i.last_flush = e), 0 !== i.pending)) {
          if ((Le(t), 0 === t.avail_out)) return ((i.last_flush = -1), pe);
        } else if (0 === t.avail_in && Pe(e) <= Pe(n) && e !== De)
          return je(t, _e);
        if (i.status === Ne && 0 !== t.avail_in) return je(t, _e);
        if (
          (i.status === Be && 0 === i.wrap && (i.status = Oe), i.status === Be)
        ) {
          let e = (Se + ((i.w_bits - 8) << 4)) << 8,
            n = -1;
          if (
            ((n =
              i.strategy >= Fe || i.level < 2
                ? 0
                : i.level < 6
                  ? 1
                  : 6 === i.level
                    ? 2
                    : 3),
            (e |= n << 6),
            0 !== i.strstart && (e |= 32),
            (e += 31 - (e % 31)),
            $e(i, e),
            0 !== i.strstart && ($e(i, t.adler >>> 16), $e(i, 65535 & t.adler)),
            (t.adler = 1),
            (i.status = Oe),
            Le(t),
            0 !== i.pending)
          )
            return ((i.last_flush = -1), pe);
        }
        if (57 === i.status)
          if (((t.adler = 0), Ve(i, 31), Ve(i, 139), Ve(i, 8), i.gzhead))
            (Ve(
              i,
              (i.gzhead.text ? 1 : 0) +
                (i.gzhead.hcrc ? 2 : 0) +
                (i.gzhead.extra ? 4 : 0) +
                (i.gzhead.name ? 8 : 0) +
                (i.gzhead.comment ? 16 : 0),
            ),
              Ve(i, 255 & i.gzhead.time),
              Ve(i, (i.gzhead.time >> 8) & 255),
              Ve(i, (i.gzhead.time >> 16) & 255),
              Ve(i, (i.gzhead.time >> 24) & 255),
              Ve(
                i,
                9 === i.level ? 2 : i.strategy >= Fe || i.level < 2 ? 4 : 0,
              ),
              Ve(i, 255 & i.gzhead.os),
              i.gzhead.extra &&
                i.gzhead.extra.length &&
                (Ve(i, 255 & i.gzhead.extra.length),
                Ve(i, (i.gzhead.extra.length >> 8) & 255)),
              i.gzhead.hcrc &&
                (t.adler = ne(t.adler, i.pending_buf, i.pending, 0)),
              (i.gzindex = 0),
              (i.status = 69));
          else if (
            (Ve(i, 0),
            Ve(i, 0),
            Ve(i, 0),
            Ve(i, 0),
            Ve(i, 0),
            Ve(i, 9 === i.level ? 2 : i.strategy >= Fe || i.level < 2 ? 4 : 0),
            Ve(i, 3),
            (i.status = Oe),
            Le(t),
            0 !== i.pending)
          )
            return ((i.last_flush = -1), pe);
        if (69 === i.status) {
          if (i.gzhead.extra) {
            let e = i.pending,
              n = (65535 & i.gzhead.extra.length) - i.gzindex;
            for (; i.pending + n > i.pending_buf_size;) {
              let s = i.pending_buf_size - i.pending;
              if (
                (i.pending_buf.set(
                  i.gzhead.extra.subarray(i.gzindex, i.gzindex + s),
                  i.pending,
                ),
                (i.pending = i.pending_buf_size),
                i.gzhead.hcrc &&
                  i.pending > e &&
                  (t.adler = ne(t.adler, i.pending_buf, i.pending - e, e)),
                (i.gzindex += s),
                Le(t),
                0 !== i.pending)
              )
                return ((i.last_flush = -1), pe);
              ((e = 0), (n -= s));
            }
            let s = new Uint8Array(i.gzhead.extra);
            (i.pending_buf.set(s.subarray(i.gzindex, i.gzindex + n), i.pending),
              (i.pending += n),
              i.gzhead.hcrc &&
                i.pending > e &&
                (t.adler = ne(t.adler, i.pending_buf, i.pending - e, e)),
              (i.gzindex = 0));
          }
          i.status = 73;
        }
        if (73 === i.status) {
          if (i.gzhead.name) {
            let e,
              n = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > n &&
                    (t.adler = ne(t.adler, i.pending_buf, i.pending - n, n)),
                  Le(t),
                  0 !== i.pending)
                )
                  return ((i.last_flush = -1), pe);
                n = 0;
              }
              ((e =
                i.gzindex < i.gzhead.name.length
                  ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                  : 0),
                Ve(i, e));
            } while (0 !== e);
            (i.gzhead.hcrc &&
              i.pending > n &&
              (t.adler = ne(t.adler, i.pending_buf, i.pending - n, n)),
              (i.gzindex = 0));
          }
          i.status = 91;
        }
        if (91 === i.status) {
          if (i.gzhead.comment) {
            let e,
              n = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > n &&
                    (t.adler = ne(t.adler, i.pending_buf, i.pending - n, n)),
                  Le(t),
                  0 !== i.pending)
                )
                  return ((i.last_flush = -1), pe);
                n = 0;
              }
              ((e =
                i.gzindex < i.gzhead.comment.length
                  ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                  : 0),
                Ve(i, e));
            } while (0 !== e);
            i.gzhead.hcrc &&
              i.pending > n &&
              (t.adler = ne(t.adler, i.pending_buf, i.pending - n, n));
          }
          i.status = 103;
        }
        if (103 === i.status) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size && (Le(t), 0 !== i.pending))
              return ((i.last_flush = -1), pe);
            (Ve(i, 255 & t.adler), Ve(i, (t.adler >> 8) & 255), (t.adler = 0));
          }
          if (((i.status = Oe), Le(t), 0 !== i.pending))
            return ((i.last_flush = -1), pe);
        }
        if (
          0 !== t.avail_in ||
          0 !== i.lookahead ||
          (e !== le && i.status !== Ne)
        ) {
          let n =
            0 === i.level
              ? Ge(i, e)
              : i.strategy === Fe
                ? ((t, e) => {
                    let i;
                    for (;;) {
                      if (0 === t.lookahead && (ze(t), 0 === t.lookahead)) {
                        if (e === le) return 1;
                        break;
                      }
                      if (
                        ((t.match_length = 0),
                        (i = ce(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++,
                        i && (Me(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      e === De
                        ? (Me(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.sym_next && (Me(t, !1), 0 === t.strm.avail_out)
                          ? 1
                          : 2
                    );
                  })(i, e)
                : i.strategy === Ee
                  ? ((t, e) => {
                      let i, n, s, r;
                      const o = t.window;
                      for (;;) {
                        if (t.lookahead <= ke) {
                          if ((ze(t), t.lookahead <= ke && e === le)) return 1;
                          if (0 === t.lookahead) break;
                        }
                        if (
                          ((t.match_length = 0),
                          t.lookahead >= 3 &&
                            t.strstart > 0 &&
                            ((s = t.strstart - 1),
                            (n = o[s]),
                            n === o[++s] && n === o[++s] && n === o[++s]))
                        ) {
                          r = t.strstart + ke;
                          do {} while (
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            n === o[++s] &&
                            s < r
                          );
                          ((t.match_length = ke - (r - s)),
                            t.match_length > t.lookahead &&
                              (t.match_length = t.lookahead));
                        }
                        if (
                          (t.match_length >= 3
                            ? ((i = ce(t, 1, t.match_length - 3)),
                              (t.lookahead -= t.match_length),
                              (t.strstart += t.match_length),
                              (t.match_length = 0))
                            : ((i = ce(t, 0, t.window[t.strstart])),
                              t.lookahead--,
                              t.strstart++),
                          i && (Me(t, !1), 0 === t.strm.avail_out))
                        )
                          return 1;
                      }
                      return (
                        (t.insert = 0),
                        e === De
                          ? (Me(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                          : t.sym_next && (Me(t, !1), 0 === t.strm.avail_out)
                            ? 1
                            : 2
                      );
                    })(i, e)
                  : Ke[i.level].func(i, e);
          if (((3 !== n && 4 !== n) || (i.status = Ne), 1 === n || 3 === n))
            return (0 === t.avail_out && (i.last_flush = -1), pe);
          if (
            2 === n &&
            (e === he
              ? de(i)
              : e !== ve &&
                (ue(i, 0, 0, !1),
                e === fe &&
                  (Re(i.head),
                  0 === i.lookahead &&
                    ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
            Le(t),
            0 === t.avail_out)
          )
            return ((i.last_flush = -1), pe);
        }
        return e !== De
          ? pe
          : i.wrap <= 0
            ? be
            : (2 === i.wrap
                ? (Ve(i, 255 & t.adler),
                  Ve(i, (t.adler >> 8) & 255),
                  Ve(i, (t.adler >> 16) & 255),
                  Ve(i, (t.adler >> 24) & 255),
                  Ve(i, 255 & t.total_in),
                  Ve(i, (t.total_in >> 8) & 255),
                  Ve(i, (t.total_in >> 16) & 255),
                  Ve(i, (t.total_in >> 24) & 255))
                : ($e(i, t.adler >>> 16), $e(i, 65535 & t.adler)),
              Le(t),
              i.wrap > 0 && (i.wrap = -i.wrap),
              0 !== i.pending ? pe : be);
      },
      deflateEnd: (t) => {
        if (Xe(t)) return me;
        const e = t.state.status;
        return ((t.state = null), e === Oe ? je(t, ge) : pe);
      },
      deflateSetDictionary: (t, e) => {
        let i = e.length;
        if (Xe(t)) return me;
        const n = t.state,
          s = n.wrap;
        if (2 === s || (1 === s && n.status !== Be) || n.lookahead) return me;
        if (
          (1 === s && (t.adler = ee(t.adler, e, i, 0)),
          (n.wrap = 0),
          i >= n.w_size)
        ) {
          0 === s &&
            (Re(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0));
          let t = new Uint8Array(n.w_size);
          (t.set(e.subarray(i - n.w_size, i), 0), (e = t), (i = n.w_size));
        }
        const r = t.avail_in,
          o = t.next_in,
          u = t.input;
        for (
          t.avail_in = i, t.next_in = 0, t.input = e, ze(n);
          n.lookahead >= 3;
        ) {
          let t = n.strstart,
            e = n.lookahead - 2;
          do {
            ((n.ins_h = xe(n, n.ins_h, n.window[t + 3 - 1])),
              (n.prev[t & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = t),
              t++);
          } while (--e);
          ((n.strstart = t), (n.lookahead = 2), ze(n));
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (t.next_in = o),
          (t.input = u),
          (t.avail_in = r),
          (n.wrap = s),
          pe
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    };
    const ni = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var si = function (t) {
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length;) {
          const i = e.shift();
          if (i) {
            if ("object" != typeof i)
              throw new TypeError(i + "must be non-object");
            for (const e in i) ni(i, e) && (t[e] = i[e]);
          }
        }
        return t;
      },
      ri = (t) => {
        let e = 0;
        for (let i = 0, n = t.length; i < n; i++) e += t[i].length;
        const i = new Uint8Array(e);
        for (let e = 0, n = 0, s = t.length; e < s; e++) {
          let s = t[e];
          (i.set(s, n), (n += s.length));
        }
        return i;
      };
    let oi = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      oi = !1;
    }
    const ui = new Uint8Array(256);
    for (let t = 0; t < 256; t++)
      ui[t] =
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
    ui[254] = ui[254] = 1;
    var ai = (t) => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(t);
        let e,
          i,
          n,
          s,
          r,
          o = t.length,
          u = 0;
        for (s = 0; s < o; s++)
          ((i = t.charCodeAt(s)),
            55296 == (64512 & i) &&
              s + 1 < o &&
              ((n = t.charCodeAt(s + 1)),
              56320 == (64512 & n) &&
                ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), s++)),
            (u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4));
        for (e = new Uint8Array(u), r = 0, s = 0; r < u; s++)
          ((i = t.charCodeAt(s)),
            55296 == (64512 & i) &&
              s + 1 < o &&
              ((n = t.charCodeAt(s + 1)),
              56320 == (64512 & n) &&
                ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), s++)),
            i < 128
              ? (e[r++] = i)
              : i < 2048
                ? ((e[r++] = 192 | (i >>> 6)), (e[r++] = 128 | (63 & i)))
                : i < 65536
                  ? ((e[r++] = 224 | (i >>> 12)),
                    (e[r++] = 128 | ((i >>> 6) & 63)),
                    (e[r++] = 128 | (63 & i)))
                  : ((e[r++] = 240 | (i >>> 18)),
                    (e[r++] = 128 | ((i >>> 12) & 63)),
                    (e[r++] = 128 | ((i >>> 6) & 63)),
                    (e[r++] = 128 | (63 & i))));
        return e;
      },
      ci = (t, e) => {
        const i = e || t.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(t.subarray(0, e));
        let n, s;
        const r = new Array(2 * i);
        for (s = 0, n = 0; n < i;) {
          let e = t[n++];
          if (e < 128) {
            r[s++] = e;
            continue;
          }
          let o = ui[e];
          if (o > 4) ((r[s++] = 65533), (n += o - 1));
          else {
            for (e &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < i;)
              ((e = (e << 6) | (63 & t[n++])), o--);
            o > 1
              ? (r[s++] = 65533)
              : e < 65536
                ? (r[s++] = e)
                : ((e -= 65536),
                  (r[s++] = 55296 | ((e >> 10) & 1023)),
                  (r[s++] = 56320 | (1023 & e)));
          }
        }
        return ((t, e) => {
          if (e < 65534 && t.subarray && oi)
            return String.fromCharCode.apply(
              null,
              t.length === e ? t : t.subarray(0, e),
            );
          let i = "";
          for (let n = 0; n < e; n++) i += String.fromCharCode(t[n]);
          return i;
        })(r, s);
      },
      di = (t, e) => {
        (e = e || t.length) > t.length && (e = t.length);
        let i = e - 1;
        for (; i >= 0 && 128 == (192 & t[i]);) i--;
        return i < 0 || 0 === i ? e : i + ui[t[i]] > e ? i : e;
      };
    var li = function () {
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
    const hi = Object.prototype.toString,
      {
        Z_NO_FLUSH: fi,
        Z_SYNC_FLUSH: Di,
        Z_FULL_FLUSH: vi,
        Z_FINISH: pi,
        Z_OK: bi,
        Z_STREAM_END: mi,
        Z_DEFAULT_COMPRESSION: gi,
        Z_DEFAULT_STRATEGY: _i,
        Z_DEFLATED: yi,
      } = re;
    function wi(t) {
      this.options = si(
        {
          level: gi,
          method: yi,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: _i,
        },
        t || {},
      );
      let e = this.options;
      (e.raw && e.windowBits > 0
        ? (e.windowBits = -e.windowBits)
        : e.gzip &&
          e.windowBits > 0 &&
          e.windowBits < 16 &&
          (e.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new li()),
        (this.strm.avail_out = 0));
      let i = ii.deflateInit2(
        this.strm,
        e.level,
        e.method,
        e.windowBits,
        e.memLevel,
        e.strategy,
      );
      if (i !== bi) throw new Error(se[i]);
      if (
        (e.header && ii.deflateSetHeader(this.strm, e.header), e.dictionary)
      ) {
        let t;
        if (
          ((t =
            "string" == typeof e.dictionary
              ? ai(e.dictionary)
              : "[object ArrayBuffer]" === hi.call(e.dictionary)
                ? new Uint8Array(e.dictionary)
                : e.dictionary),
          (i = ii.deflateSetDictionary(this.strm, t)),
          i !== bi)
        )
          throw new Error(se[i]);
        this.N = !0;
      }
    }
    function Fi(t, e) {
      const i = new wi(e);
      if ((i.push(t, !0), i.err)) throw i.msg || se[i.err];
      return i.result;
    }
    ((wi.prototype.push = function (t, e) {
      const i = this.strm,
        n = this.options.chunkSize;
      let s, r;
      if (this.ended) return !1;
      for (
        r = e === ~~e ? e : !0 === e ? pi : fi,
          "string" == typeof t
            ? (i.input = ai(t))
            : "[object ArrayBuffer]" === hi.call(t)
              ? (i.input = new Uint8Array(t))
              : (i.input = t),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;
      )
        if (
          (0 === i.avail_out &&
            ((i.output = new Uint8Array(n)),
            (i.next_out = 0),
            (i.avail_out = n)),
          (r === Di || r === vi) && i.avail_out <= 6)
        )
          (this.onData(i.output.subarray(0, i.next_out)), (i.avail_out = 0));
        else {
          if (((s = ii.deflate(i, r)), s === mi))
            return (
              i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
              (s = ii.deflateEnd(this.strm)),
              this.onEnd(s),
              (this.ended = !0),
              s === bi
            );
          if (0 !== i.avail_out) {
            if (r > 0 && i.next_out > 0)
              (this.onData(i.output.subarray(0, i.next_out)),
                (i.avail_out = 0));
            else if (0 === i.avail_in) break;
          } else this.onData(i.output);
        }
      return !0;
    }),
      (wi.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (wi.prototype.onEnd = function (t) {
        (t === bi && (this.result = ri(this.chunks)),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg));
      }));
    var Ei = {
      Deflate: wi,
      deflate: Fi,
      deflateRaw: function (t, e) {
        return (((e = e || {}).raw = !0), Fi(t, e));
      },
      gzip: function (t, e) {
        return (((e = e || {}).gzip = !0), Fi(t, e));
      },
      constants: re,
    };
    const Ci = 16209;
    var Ai = function (t, e) {
      let i,
        n,
        s,
        r,
        o,
        u,
        a,
        c,
        d,
        l,
        h,
        f,
        D,
        v,
        p,
        b,
        m,
        g,
        _,
        y,
        w,
        F,
        E,
        C;
      const A = t.state;
      ((i = t.next_in),
        (E = t.input),
        (n = i + (t.avail_in - 5)),
        (s = t.next_out),
        (C = t.output),
        (r = s - (e - t.avail_out)),
        (o = s + (t.avail_out - 257)),
        (u = A.dmax),
        (a = A.wsize),
        (c = A.whave),
        (d = A.wnext),
        (l = A.window),
        (h = A.hold),
        (f = A.bits),
        (D = A.lencode),
        (v = A.distcode),
        (p = (1 << A.lenbits) - 1),
        (b = (1 << A.distbits) - 1));
      t: do {
        (f < 15 && ((h += E[i++] << f), (f += 8), (h += E[i++] << f), (f += 8)),
          (m = D[h & p]));
        e: for (;;) {
          if (
            ((g = m >>> 24),
            (h >>>= g),
            (f -= g),
            (g = (m >>> 16) & 255),
            0 === g)
          )
            C[s++] = 65535 & m;
          else {
            if (!(16 & g)) {
              if (64 & g) {
                if (32 & g) {
                  A.mode = 16191;
                  break t;
                }
                ((t.msg = "invalid literal/length code"), (A.mode = Ci));
                break t;
              }
              m = D[(65535 & m) + (h & ((1 << g) - 1))];
              continue e;
            }
            for (
              _ = 65535 & m,
                g &= 15,
                g &&
                  (f < g && ((h += E[i++] << f), (f += 8)),
                  (_ += h & ((1 << g) - 1)),
                  (h >>>= g),
                  (f -= g)),
                f < 15 &&
                  ((h += E[i++] << f), (f += 8), (h += E[i++] << f), (f += 8)),
                m = v[h & b];
              ;
            ) {
              if (
                ((g = m >>> 24),
                (h >>>= g),
                (f -= g),
                (g = (m >>> 16) & 255),
                16 & g)
              ) {
                if (
                  ((y = 65535 & m),
                  (g &= 15),
                  f < g &&
                    ((h += E[i++] << f),
                    (f += 8),
                    f < g && ((h += E[i++] << f), (f += 8))),
                  (y += h & ((1 << g) - 1)),
                  y > u)
                ) {
                  ((t.msg = "invalid distance too far back"), (A.mode = Ci));
                  break t;
                }
                if (((h >>>= g), (f -= g), (g = s - r), y > g)) {
                  if (((g = y - g), g > c && A.sane)) {
                    ((t.msg = "invalid distance too far back"), (A.mode = Ci));
                    break t;
                  }
                  if (((w = 0), (F = l), 0 === d)) {
                    if (((w += a - g), g < _)) {
                      _ -= g;
                      do {
                        C[s++] = l[w++];
                      } while (--g);
                      ((w = s - y), (F = C));
                    }
                  } else if (d < g) {
                    if (((w += a + d - g), (g -= d), g < _)) {
                      _ -= g;
                      do {
                        C[s++] = l[w++];
                      } while (--g);
                      if (((w = 0), d < _)) {
                        ((g = d), (_ -= g));
                        do {
                          C[s++] = l[w++];
                        } while (--g);
                        ((w = s - y), (F = C));
                      }
                    }
                  } else if (((w += d - g), g < _)) {
                    _ -= g;
                    do {
                      C[s++] = l[w++];
                    } while (--g);
                    ((w = s - y), (F = C));
                  }
                  for (; _ > 2;)
                    ((C[s++] = F[w++]),
                      (C[s++] = F[w++]),
                      (C[s++] = F[w++]),
                      (_ -= 3));
                  _ && ((C[s++] = F[w++]), _ > 1 && (C[s++] = F[w++]));
                } else {
                  w = s - y;
                  do {
                    ((C[s++] = C[w++]),
                      (C[s++] = C[w++]),
                      (C[s++] = C[w++]),
                      (_ -= 3));
                  } while (_ > 2);
                  _ && ((C[s++] = C[w++]), _ > 1 && (C[s++] = C[w++]));
                }
                break;
              }
              if (64 & g) {
                ((t.msg = "invalid distance code"), (A.mode = Ci));
                break t;
              }
              m = v[(65535 & m) + (h & ((1 << g) - 1))];
            }
          }
          break;
        }
      } while (i < n && s < o);
      ((_ = f >> 3),
        (i -= _),
        (f -= _ << 3),
        (h &= (1 << f) - 1),
        (t.next_in = i),
        (t.next_out = s),
        (t.avail_in = i < n ? n - i + 5 : 5 - (i - n)),
        (t.avail_out = s < o ? o - s + 257 : 257 - (s - o)),
        (A.hold = h),
        (A.bits = f));
    };
    const Ii = 15,
      Si = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      ki = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      Ti = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      Bi = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var Oi = (t, e, i, n, s, r, o, u) => {
      const a = u.bits;
      let c,
        d,
        l,
        h,
        f,
        D,
        v = 0,
        p = 0,
        b = 0,
        m = 0,
        g = 0,
        _ = 0,
        y = 0,
        w = 0,
        F = 0,
        E = 0,
        C = null;
      const A = new Uint16Array(16),
        I = new Uint16Array(16);
      let S,
        k,
        T,
        B = null;
      for (v = 0; v <= Ii; v++) A[v] = 0;
      for (p = 0; p < n; p++) A[e[i + p]]++;
      for (g = a, m = Ii; m >= 1 && 0 === A[m]; m--);
      if ((g > m && (g = m), 0 === m))
        return ((s[r++] = 20971520), (s[r++] = 20971520), (u.bits = 1), 0);
      for (b = 1; b < m && 0 === A[b]; b++);
      for (g < b && (g = b), w = 1, v = 1; v <= Ii; v++)
        if (((w <<= 1), (w -= A[v]), w < 0)) return -1;
      if (w > 0 && (0 === t || 1 !== m)) return -1;
      for (I[1] = 0, v = 1; v < Ii; v++) I[v + 1] = I[v] + A[v];
      for (p = 0; p < n; p++) 0 !== e[i + p] && (o[I[e[i + p]]++] = p);
      if (
        (0 === t
          ? ((C = B = o), (D = 20))
          : 1 === t
            ? ((C = Si), (B = ki), (D = 257))
            : ((C = Ti), (B = Bi), (D = 0)),
        (E = 0),
        (p = 0),
        (v = b),
        (f = r),
        (_ = g),
        (y = 0),
        (l = -1),
        (F = 1 << g),
        (h = F - 1),
        (1 === t && F > 852) || (2 === t && F > 592))
      )
        return 1;
      for (;;) {
        ((S = v - y),
          o[p] + 1 < D
            ? ((k = 0), (T = o[p]))
            : o[p] >= D
              ? ((k = B[o[p] - D]), (T = C[o[p] - D]))
              : ((k = 96), (T = 0)),
          (c = 1 << (v - y)),
          (d = 1 << _),
          (b = d));
        do {
          ((d -= c), (s[f + (E >> y) + d] = (S << 24) | (k << 16) | T));
        } while (0 !== d);
        for (c = 1 << (v - 1); E & c;) c >>= 1;
        if ((0 !== c ? ((E &= c - 1), (E += c)) : (E = 0), p++, 0 === --A[v])) {
          if (v === m) break;
          v = e[i + o[p]];
        }
        if (v > g && (E & h) !== l) {
          for (
            0 === y && (y = g), f += b, _ = v - y, w = 1 << _;
            _ + y < m && ((w -= A[_ + y]), !(w <= 0));
          )
            (_++, (w <<= 1));
          if (((F += 1 << _), (1 === t && F > 852) || (2 === t && F > 592)))
            return 1;
          ((l = E & h), (s[l] = (g << 24) | (_ << 16) | (f - r)));
        }
      }
      return (
        0 !== E && (s[f + E] = ((v - y) << 24) | (64 << 16)),
        (u.bits = g),
        0
      );
    };
    const {
        Z_FINISH: Ni,
        Z_BLOCK: ji,
        Z_TREES: Pi,
        Z_OK: Ri,
        Z_STREAM_END: Ui,
        Z_NEED_DICT: xi,
        Z_STREAM_ERROR: Li,
        Z_DATA_ERROR: Mi,
        Z_MEM_ERROR: Vi,
        Z_BUF_ERROR: $i,
        Z_DEFLATED: Hi,
      } = re,
      Wi = 16180,
      zi = 16190,
      Gi = 16191,
      Zi = 16192,
      Ji = 16194,
      Yi = 16199,
      Ki = 16200,
      qi = 16206,
      Xi = 16209,
      Qi = (t) =>
        ((t >>> 24) & 255) +
        ((t >>> 8) & 65280) +
        ((65280 & t) << 8) +
        ((255 & t) << 24);
    function tn() {
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
    const en = (t) => {
        if (!t) return 1;
        const e = t.state;
        return !e || e.strm !== t || e.mode < Wi || e.mode > 16211 ? 1 : 0;
      },
      nn = (t) => {
        if (en(t)) return Li;
        const e = t.state;
        return (
          (t.total_in = t.total_out = e.total = 0),
          (t.msg = ""),
          e.wrap && (t.adler = 1 & e.wrap),
          (e.mode = Wi),
          (e.last = 0),
          (e.havedict = 0),
          (e.flags = -1),
          (e.dmax = 32768),
          (e.head = null),
          (e.hold = 0),
          (e.bits = 0),
          (e.lencode = e.lendyn = new Int32Array(852)),
          (e.distcode = e.distdyn = new Int32Array(592)),
          (e.sane = 1),
          (e.back = -1),
          Ri
        );
      },
      sn = (t) => {
        if (en(t)) return Li;
        const e = t.state;
        return ((e.wsize = 0), (e.whave = 0), (e.wnext = 0), nn(t));
      },
      rn = (t, e) => {
        let i;
        if (en(t)) return Li;
        const n = t.state;
        return (
          e < 0
            ? ((i = 0), (e = -e))
            : ((i = 5 + (e >> 4)), e < 48 && (e &= 15)),
          e && (e < 8 || e > 15)
            ? Li
            : (null !== n.window && n.wbits !== e && (n.window = null),
              (n.wrap = i),
              (n.wbits = e),
              sn(t))
        );
      },
      on = (t, e) => {
        if (!t) return Li;
        const i = new tn();
        ((t.state = i), (i.strm = t), (i.window = null), (i.mode = Wi));
        const n = rn(t, e);
        return (n !== Ri && (t.state = null), n);
      };
    let un,
      an,
      cn = !0;
    const dn = (t) => {
        if (cn) {
          ((un = new Int32Array(512)), (an = new Int32Array(32)));
          let e = 0;
          for (; e < 144;) t.lens[e++] = 8;
          for (; e < 256;) t.lens[e++] = 9;
          for (; e < 280;) t.lens[e++] = 7;
          for (; e < 288;) t.lens[e++] = 8;
          for (
            Oi(1, t.lens, 0, 288, un, 0, t.work, { bits: 9 }), e = 0;
            e < 32;
          )
            t.lens[e++] = 5;
          (Oi(2, t.lens, 0, 32, an, 0, t.work, { bits: 5 }), (cn = !1));
        }
        ((t.lencode = un),
          (t.lenbits = 9),
          (t.distcode = an),
          (t.distbits = 5));
      },
      ln = (t, e, i, n) => {
        let s;
        const r = t.state;
        return (
          null === r.window &&
            ((r.wsize = 1 << r.wbits),
            (r.wnext = 0),
            (r.whave = 0),
            (r.window = new Uint8Array(r.wsize))),
          n >= r.wsize
            ? (r.window.set(e.subarray(i - r.wsize, i), 0),
              (r.wnext = 0),
              (r.whave = r.wsize))
            : ((s = r.wsize - r.wnext),
              s > n && (s = n),
              r.window.set(e.subarray(i - n, i - n + s), r.wnext),
              (n -= s)
                ? (r.window.set(e.subarray(i - n, i), 0),
                  (r.wnext = n),
                  (r.whave = r.wsize))
                : ((r.wnext += s),
                  r.wnext === r.wsize && (r.wnext = 0),
                  r.whave < r.wsize && (r.whave += s))),
          0
        );
      };
    var hn = {
      inflateReset: sn,
      inflateReset2: rn,
      inflateResetKeep: nn,
      inflateInit: (t) => on(t, 15),
      inflateInit2: on,
      inflate: (t, e) => {
        let i,
          n,
          s,
          r,
          o,
          u,
          a,
          c,
          d,
          l,
          h,
          f,
          D,
          v,
          p,
          b,
          m,
          g,
          _,
          y,
          w,
          F,
          E = 0;
        const C = new Uint8Array(4);
        let A, I;
        const S = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
        if (en(t) || !t.output || (!t.input && 0 !== t.avail_in)) return Li;
        ((i = t.state),
          i.mode === Gi && (i.mode = Zi),
          (o = t.next_out),
          (s = t.output),
          (a = t.avail_out),
          (r = t.next_in),
          (n = t.input),
          (u = t.avail_in),
          (c = i.hold),
          (d = i.bits),
          (l = u),
          (h = a),
          (F = Ri));
        t: for (;;)
          switch (i.mode) {
            case Wi:
              if (0 === i.wrap) {
                i.mode = Zi;
                break;
              }
              for (; d < 16;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if (2 & i.wrap && 35615 === c) {
                (0 === i.wbits && (i.wbits = 15),
                  (i.check = 0),
                  (C[0] = 255 & c),
                  (C[1] = (c >>> 8) & 255),
                  (i.check = ne(i.check, C, 2, 0)),
                  (c = 0),
                  (d = 0),
                  (i.mode = 16181));
                break;
              }
              if (
                (i.head && (i.head.done = !1),
                !(1 & i.wrap) || (((255 & c) << 8) + (c >> 8)) % 31)
              ) {
                ((t.msg = "incorrect header check"), (i.mode = Xi));
                break;
              }
              if ((15 & c) !== Hi) {
                ((t.msg = "unknown compression method"), (i.mode = Xi));
                break;
              }
              if (
                ((c >>>= 4),
                (d -= 4),
                (w = 8 + (15 & c)),
                0 === i.wbits && (i.wbits = w),
                w > 15 || w > i.wbits)
              ) {
                ((t.msg = "invalid window size"), (i.mode = Xi));
                break;
              }
              ((i.dmax = 1 << i.wbits),
                (i.flags = 0),
                (t.adler = i.check = 1),
                (i.mode = 512 & c ? 16189 : Gi),
                (c = 0),
                (d = 0));
              break;
            case 16181:
              for (; d < 16;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if (((i.flags = c), (255 & i.flags) !== Hi)) {
                ((t.msg = "unknown compression method"), (i.mode = Xi));
                break;
              }
              if (57344 & i.flags) {
                ((t.msg = "unknown header flags set"), (i.mode = Xi));
                break;
              }
              (i.head && (i.head.text = (c >> 8) & 1),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((C[0] = 255 & c),
                  (C[1] = (c >>> 8) & 255),
                  (i.check = ne(i.check, C, 2, 0))),
                (c = 0),
                (d = 0),
                (i.mode = 16182));
            case 16182:
              for (; d < 32;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              (i.head && (i.head.time = c),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((C[0] = 255 & c),
                  (C[1] = (c >>> 8) & 255),
                  (C[2] = (c >>> 16) & 255),
                  (C[3] = (c >>> 24) & 255),
                  (i.check = ne(i.check, C, 4, 0))),
                (c = 0),
                (d = 0),
                (i.mode = 16183));
            case 16183:
              for (; d < 16;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              (i.head && ((i.head.xflags = 255 & c), (i.head.os = c >> 8)),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((C[0] = 255 & c),
                  (C[1] = (c >>> 8) & 255),
                  (i.check = ne(i.check, C, 2, 0))),
                (c = 0),
                (d = 0),
                (i.mode = 16184));
            case 16184:
              if (1024 & i.flags) {
                for (; d < 16;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((i.length = c),
                  i.head && (i.head.extra_len = c),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((C[0] = 255 & c),
                    (C[1] = (c >>> 8) & 255),
                    (i.check = ne(i.check, C, 2, 0))),
                  (c = 0),
                  (d = 0));
              } else i.head && (i.head.extra = null);
              i.mode = 16185;
            case 16185:
              if (
                1024 & i.flags &&
                ((f = i.length),
                f > u && (f = u),
                f &&
                  (i.head &&
                    ((w = i.head.extra_len - i.length),
                    i.head.extra ||
                      (i.head.extra = new Uint8Array(i.head.extra_len)),
                    i.head.extra.set(n.subarray(r, r + f), w)),
                  512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = ne(i.check, n, f, r)),
                  (u -= f),
                  (r += f),
                  (i.length -= f)),
                i.length)
              )
                break t;
              ((i.length = 0), (i.mode = 16186));
            case 16186:
              if (2048 & i.flags) {
                if (0 === u) break t;
                f = 0;
                do {
                  ((w = n[r + f++]),
                    i.head &&
                      w &&
                      i.length < 65536 &&
                      (i.head.name += String.fromCharCode(w)));
                } while (w && f < u);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = ne(i.check, n, f, r)),
                  (u -= f),
                  (r += f),
                  w)
                )
                  break t;
              } else i.head && (i.head.name = null);
              ((i.length = 0), (i.mode = 16187));
            case 16187:
              if (4096 & i.flags) {
                if (0 === u) break t;
                f = 0;
                do {
                  ((w = n[r + f++]),
                    i.head &&
                      w &&
                      i.length < 65536 &&
                      (i.head.comment += String.fromCharCode(w)));
                } while (w && f < u);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = ne(i.check, n, f, r)),
                  (u -= f),
                  (r += f),
                  w)
                )
                  break t;
              } else i.head && (i.head.comment = null);
              i.mode = 16188;
            case 16188:
              if (512 & i.flags) {
                for (; d < 16;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                if (4 & i.wrap && c !== (65535 & i.check)) {
                  ((t.msg = "header crc mismatch"), (i.mode = Xi));
                  break;
                }
                ((c = 0), (d = 0));
              }
              (i.head &&
                ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                (t.adler = i.check = 0),
                (i.mode = Gi));
              break;
            case 16189:
              for (; d < 32;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              ((t.adler = i.check = Qi(c)), (c = 0), (d = 0), (i.mode = zi));
            case zi:
              if (0 === i.havedict)
                return (
                  (t.next_out = o),
                  (t.avail_out = a),
                  (t.next_in = r),
                  (t.avail_in = u),
                  (i.hold = c),
                  (i.bits = d),
                  xi
                );
              ((t.adler = i.check = 1), (i.mode = Gi));
            case Gi:
              if (e === ji || e === Pi) break t;
            case Zi:
              if (i.last) {
                ((c >>>= 7 & d), (d -= 7 & d), (i.mode = qi));
                break;
              }
              for (; d < 3;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              switch (((i.last = 1 & c), (c >>>= 1), (d -= 1), 3 & c)) {
                case 0:
                  i.mode = 16193;
                  break;
                case 1:
                  if ((dn(i), (i.mode = Yi), e === Pi)) {
                    ((c >>>= 2), (d -= 2));
                    break t;
                  }
                  break;
                case 2:
                  i.mode = 16196;
                  break;
                case 3:
                  ((t.msg = "invalid block type"), (i.mode = Xi));
              }
              ((c >>>= 2), (d -= 2));
              break;
            case 16193:
              for (c >>>= 7 & d, d -= 7 & d; d < 32;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if ((65535 & c) != ((c >>> 16) ^ 65535)) {
                ((t.msg = "invalid stored block lengths"), (i.mode = Xi));
                break;
              }
              if (
                ((i.length = 65535 & c),
                (c = 0),
                (d = 0),
                (i.mode = Ji),
                e === Pi)
              )
                break t;
            case Ji:
              i.mode = 16195;
            case 16195:
              if (((f = i.length), f)) {
                if ((f > u && (f = u), f > a && (f = a), 0 === f)) break t;
                (s.set(n.subarray(r, r + f), o),
                  (u -= f),
                  (r += f),
                  (a -= f),
                  (o += f),
                  (i.length -= f));
                break;
              }
              i.mode = Gi;
              break;
            case 16196:
              for (; d < 14;) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if (
                ((i.nlen = 257 + (31 & c)),
                (c >>>= 5),
                (d -= 5),
                (i.ndist = 1 + (31 & c)),
                (c >>>= 5),
                (d -= 5),
                (i.ncode = 4 + (15 & c)),
                (c >>>= 4),
                (d -= 4),
                i.nlen > 286 || i.ndist > 30)
              ) {
                ((t.msg = "too many length or distance symbols"),
                  (i.mode = Xi));
                break;
              }
              ((i.have = 0), (i.mode = 16197));
            case 16197:
              for (; i.have < i.ncode;) {
                for (; d < 3;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((i.lens[S[i.have++]] = 7 & c), (c >>>= 3), (d -= 3));
              }
              for (; i.have < 19;) i.lens[S[i.have++]] = 0;
              if (
                ((i.lencode = i.lendyn),
                (i.lenbits = 7),
                (A = { bits: i.lenbits }),
                (F = Oi(0, i.lens, 0, 19, i.lencode, 0, i.work, A)),
                (i.lenbits = A.bits),
                F)
              ) {
                ((t.msg = "invalid code lengths set"), (i.mode = Xi));
                break;
              }
              ((i.have = 0), (i.mode = 16198));
            case 16198:
              for (; i.have < i.nlen + i.ndist;) {
                for (
                  ;
                  (E = i.lencode[c & ((1 << i.lenbits) - 1)]),
                    (p = E >>> 24),
                    (b = (E >>> 16) & 255),
                    (m = 65535 & E),
                    !(p <= d);
                ) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                if (m < 16) ((c >>>= p), (d -= p), (i.lens[i.have++] = m));
                else {
                  if (16 === m) {
                    for (I = p + 2; d < I;) {
                      if (0 === u) break t;
                      (u--, (c += n[r++] << d), (d += 8));
                    }
                    if (((c >>>= p), (d -= p), 0 === i.have)) {
                      ((t.msg = "invalid bit length repeat"), (i.mode = Xi));
                      break;
                    }
                    ((w = i.lens[i.have - 1]),
                      (f = 3 + (3 & c)),
                      (c >>>= 2),
                      (d -= 2));
                  } else if (17 === m) {
                    for (I = p + 3; d < I;) {
                      if (0 === u) break t;
                      (u--, (c += n[r++] << d), (d += 8));
                    }
                    ((c >>>= p),
                      (d -= p),
                      (w = 0),
                      (f = 3 + (7 & c)),
                      (c >>>= 3),
                      (d -= 3));
                  } else {
                    for (I = p + 7; d < I;) {
                      if (0 === u) break t;
                      (u--, (c += n[r++] << d), (d += 8));
                    }
                    ((c >>>= p),
                      (d -= p),
                      (w = 0),
                      (f = 11 + (127 & c)),
                      (c >>>= 7),
                      (d -= 7));
                  }
                  if (i.have + f > i.nlen + i.ndist) {
                    ((t.msg = "invalid bit length repeat"), (i.mode = Xi));
                    break;
                  }
                  for (; f--;) i.lens[i.have++] = w;
                }
              }
              if (i.mode === Xi) break;
              if (0 === i.lens[256]) {
                ((t.msg = "invalid code -- missing end-of-block"),
                  (i.mode = Xi));
                break;
              }
              if (
                ((i.lenbits = 9),
                (A = { bits: i.lenbits }),
                (F = Oi(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, A)),
                (i.lenbits = A.bits),
                F)
              ) {
                ((t.msg = "invalid literal/lengths set"), (i.mode = Xi));
                break;
              }
              if (
                ((i.distbits = 6),
                (i.distcode = i.distdyn),
                (A = { bits: i.distbits }),
                (F = Oi(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, A)),
                (i.distbits = A.bits),
                F)
              ) {
                ((t.msg = "invalid distances set"), (i.mode = Xi));
                break;
              }
              if (((i.mode = Yi), e === Pi)) break t;
            case Yi:
              i.mode = Ki;
            case Ki:
              if (u >= 6 && a >= 258) {
                ((t.next_out = o),
                  (t.avail_out = a),
                  (t.next_in = r),
                  (t.avail_in = u),
                  (i.hold = c),
                  (i.bits = d),
                  Ai(t, h),
                  (o = t.next_out),
                  (s = t.output),
                  (a = t.avail_out),
                  (r = t.next_in),
                  (n = t.input),
                  (u = t.avail_in),
                  (c = i.hold),
                  (d = i.bits),
                  i.mode === Gi && (i.back = -1));
                break;
              }
              for (
                i.back = 0;
                (E = i.lencode[c & ((1 << i.lenbits) - 1)]),
                  (p = E >>> 24),
                  (b = (E >>> 16) & 255),
                  (m = 65535 & E),
                  !(p <= d);
              ) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if (b && !(240 & b)) {
                for (
                  g = p, _ = b, y = m;
                  (E = i.lencode[y + ((c & ((1 << (g + _)) - 1)) >> g)]),
                    (p = E >>> 24),
                    (b = (E >>> 16) & 255),
                    (m = 65535 & E),
                    !(g + p <= d);
                ) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((c >>>= g), (d -= g), (i.back += g));
              }
              if (
                ((c >>>= p), (d -= p), (i.back += p), (i.length = m), 0 === b)
              ) {
                i.mode = 16205;
                break;
              }
              if (32 & b) {
                ((i.back = -1), (i.mode = Gi));
                break;
              }
              if (64 & b) {
                ((t.msg = "invalid literal/length code"), (i.mode = Xi));
                break;
              }
              ((i.extra = 15 & b), (i.mode = 16201));
            case 16201:
              if (i.extra) {
                for (I = i.extra; d < I;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((i.length += c & ((1 << i.extra) - 1)),
                  (c >>>= i.extra),
                  (d -= i.extra),
                  (i.back += i.extra));
              }
              ((i.was = i.length), (i.mode = 16202));
            case 16202:
              for (
                ;
                (E = i.distcode[c & ((1 << i.distbits) - 1)]),
                  (p = E >>> 24),
                  (b = (E >>> 16) & 255),
                  (m = 65535 & E),
                  !(p <= d);
              ) {
                if (0 === u) break t;
                (u--, (c += n[r++] << d), (d += 8));
              }
              if (!(240 & b)) {
                for (
                  g = p, _ = b, y = m;
                  (E = i.distcode[y + ((c & ((1 << (g + _)) - 1)) >> g)]),
                    (p = E >>> 24),
                    (b = (E >>> 16) & 255),
                    (m = 65535 & E),
                    !(g + p <= d);
                ) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((c >>>= g), (d -= g), (i.back += g));
              }
              if (((c >>>= p), (d -= p), (i.back += p), 64 & b)) {
                ((t.msg = "invalid distance code"), (i.mode = Xi));
                break;
              }
              ((i.offset = m), (i.extra = 15 & b), (i.mode = 16203));
            case 16203:
              if (i.extra) {
                for (I = i.extra; d < I;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                ((i.offset += c & ((1 << i.extra) - 1)),
                  (c >>>= i.extra),
                  (d -= i.extra),
                  (i.back += i.extra));
              }
              if (i.offset > i.dmax) {
                ((t.msg = "invalid distance too far back"), (i.mode = Xi));
                break;
              }
              i.mode = 16204;
            case 16204:
              if (0 === a) break t;
              if (((f = h - a), i.offset > f)) {
                if (((f = i.offset - f), f > i.whave && i.sane)) {
                  ((t.msg = "invalid distance too far back"), (i.mode = Xi));
                  break;
                }
                (f > i.wnext
                  ? ((f -= i.wnext), (D = i.wsize - f))
                  : (D = i.wnext - f),
                  f > i.length && (f = i.length),
                  (v = i.window));
              } else ((v = s), (D = o - i.offset), (f = i.length));
              (f > a && (f = a), (a -= f), (i.length -= f));
              do {
                s[o++] = v[D++];
              } while (--f);
              0 === i.length && (i.mode = Ki);
              break;
            case 16205:
              if (0 === a) break t;
              ((s[o++] = i.length), a--, (i.mode = Ki));
              break;
            case qi:
              if (i.wrap) {
                for (; d < 32;) {
                  if (0 === u) break t;
                  (u--, (c |= n[r++] << d), (d += 8));
                }
                if (
                  ((h -= a),
                  (t.total_out += h),
                  (i.total += h),
                  4 & i.wrap &&
                    h &&
                    (t.adler = i.check =
                      i.flags
                        ? ne(i.check, s, h, o - h)
                        : ee(i.check, s, h, o - h)),
                  (h = a),
                  4 & i.wrap && (i.flags ? c : Qi(c)) !== i.check)
                ) {
                  ((t.msg = "incorrect data check"), (i.mode = Xi));
                  break;
                }
                ((c = 0), (d = 0));
              }
              i.mode = 16207;
            case 16207:
              if (i.wrap && i.flags) {
                for (; d < 32;) {
                  if (0 === u) break t;
                  (u--, (c += n[r++] << d), (d += 8));
                }
                if (4 & i.wrap && c !== (4294967295 & i.total)) {
                  ((t.msg = "incorrect length check"), (i.mode = Xi));
                  break;
                }
                ((c = 0), (d = 0));
              }
              i.mode = 16208;
            case 16208:
              F = Ui;
              break t;
            case Xi:
              F = Mi;
              break t;
            case 16210:
              return Vi;
            default:
              return Li;
          }
        return (
          (t.next_out = o),
          (t.avail_out = a),
          (t.next_in = r),
          (t.avail_in = u),
          (i.hold = c),
          (i.bits = d),
          (i.wsize ||
            (h !== t.avail_out && i.mode < Xi && (i.mode < qi || e !== Ni))) &&
            ln(t, t.output, t.next_out, h - t.avail_out),
          (l -= t.avail_in),
          (h -= t.avail_out),
          (t.total_in += l),
          (t.total_out += h),
          (i.total += h),
          4 & i.wrap &&
            h &&
            (t.adler = i.check =
              i.flags
                ? ne(i.check, s, h, t.next_out - h)
                : ee(i.check, s, h, t.next_out - h)),
          (t.data_type =
            i.bits +
            (i.last ? 64 : 0) +
            (i.mode === Gi ? 128 : 0) +
            (i.mode === Yi || i.mode === Ji ? 256 : 0)),
          ((0 === l && 0 === h) || e === Ni) && F === Ri && (F = $i),
          F
        );
      },
      inflateEnd: (t) => {
        if (en(t)) return Li;
        let e = t.state;
        return (e.window && (e.window = null), (t.state = null), Ri);
      },
      inflateGetHeader: (t, e) => {
        if (en(t)) return Li;
        const i = t.state;
        return 2 & i.wrap ? ((i.head = e), (e.done = !1), Ri) : Li;
      },
      inflateSetDictionary: (t, e) => {
        const i = e.length;
        let n, s, r;
        return en(t)
          ? Li
          : ((n = t.state),
            0 !== n.wrap && n.mode !== zi
              ? Li
              : n.mode === zi && ((s = 1), (s = ee(s, e, i, 0)), s !== n.check)
                ? Mi
                : ((r = ln(t, e, i, i)),
                  r ? ((n.mode = 16210), Vi) : ((n.havedict = 1), Ri)));
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    };
    var fn = function () {
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
    const Dn = Object.prototype.toString,
      {
        Z_NO_FLUSH: vn,
        Z_FINISH: pn,
        Z_OK: bn,
        Z_STREAM_END: mn,
        Z_NEED_DICT: gn,
        Z_STREAM_ERROR: _n,
        Z_DATA_ERROR: yn,
        Z_MEM_ERROR: wn,
      } = re;
    function Fn(t) {
      this.options = si({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
      const e = this.options;
      (e.raw &&
        e.windowBits >= 0 &&
        e.windowBits < 16 &&
        ((e.windowBits = -e.windowBits),
        0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) ||
          (t && t.windowBits) ||
          (e.windowBits += 32),
        e.windowBits > 15 &&
          e.windowBits < 48 &&
          (15 & e.windowBits || (e.windowBits |= 15)),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new li()),
        (this.strm.avail_out = 0));
      let i = hn.inflateInit2(this.strm, e.windowBits);
      if (i !== bn) throw new Error(se[i]);
      if (
        ((this.header = new fn()),
        hn.inflateGetHeader(this.strm, this.header),
        e.dictionary &&
          ("string" == typeof e.dictionary
            ? (e.dictionary = ai(e.dictionary))
            : "[object ArrayBuffer]" === Dn.call(e.dictionary) &&
              (e.dictionary = new Uint8Array(e.dictionary)),
          e.raw &&
            ((i = hn.inflateSetDictionary(this.strm, e.dictionary)), i !== bn)))
      )
        throw new Error(se[i]);
    }
    function En(t, e) {
      const i = new Fn(e);
      if ((i.push(t), i.err)) throw i.msg || se[i.err];
      return i.result;
    }
    ((Fn.prototype.push = function (t, e) {
      const i = this.strm,
        n = this.options.chunkSize,
        s = this.options.dictionary;
      let r, o, u;
      if (this.ended) return !1;
      for (
        o = e === ~~e ? e : !0 === e ? pn : vn,
          "[object ArrayBuffer]" === Dn.call(t)
            ? (i.input = new Uint8Array(t))
            : (i.input = t),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;
      ) {
        for (
          0 === i.avail_out &&
            ((i.output = new Uint8Array(n)),
            (i.next_out = 0),
            (i.avail_out = n)),
            r = hn.inflate(i, o),
            r === gn &&
              s &&
              ((r = hn.inflateSetDictionary(i, s)),
              r === bn ? (r = hn.inflate(i, o)) : r === yn && (r = gn));
          i.avail_in > 0 && r === mn && i.state.wrap > 0 && 0 !== t[i.next_in];
        )
          (hn.inflateReset(i), (r = hn.inflate(i, o)));
        switch (r) {
          case _n:
          case yn:
          case gn:
          case wn:
            return (this.onEnd(r), (this.ended = !0), !1);
        }
        if (((u = i.avail_out), i.next_out && (0 === i.avail_out || r === mn)))
          if ("string" === this.options.to) {
            let t = di(i.output, i.next_out),
              e = i.next_out - t,
              s = ci(i.output, t);
            ((i.next_out = e),
              (i.avail_out = n - e),
              e && i.output.set(i.output.subarray(t, t + e), 0),
              this.onData(s));
          } else
            this.onData(
              i.output.length === i.next_out
                ? i.output
                : i.output.subarray(0, i.next_out),
            );
        if (r !== bn || 0 !== u) {
          if (r === mn)
            return (
              (r = hn.inflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              !0
            );
          if (0 === i.avail_in) break;
        }
      }
      return !0;
    }),
      (Fn.prototype.onData = function (t) {
        this.chunks.push(t);
      }),
      (Fn.prototype.onEnd = function (t) {
        (t === bn &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = ri(this.chunks))),
          (this.chunks = []),
          (this.err = t),
          (this.msg = this.strm.msg));
      }));
    var Cn = {
      Inflate: Fn,
      inflate: En,
      inflateRaw: function (t, e) {
        return (((e = e || {}).raw = !0), En(t, e));
      },
      ungzip: En,
      constants: re,
    };
    const { Deflate: An, deflate: In, deflateRaw: Sn, gzip: kn } = Ei,
      { Inflate: Tn, inflate: Bn, inflateRaw: On, ungzip: Nn } = Cn;
    var jn,
      Pn,
      Rn = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function u(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, u);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    function Un(t) {
      return (
        t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.")
      );
    }
    function xn(t = new URL(window.location.href)) {
      return "tv.youtube.com" === t.hostname;
    }
    function Ln(t) {
      return function () {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      };
    }
    function Mn(t) {
      return Rn(this, void 0, void 0, function* () {
        if ((t.headers.get("content-type") || "").includes("application/json"))
          try {
            return yield t.json();
          } catch (t) {}
        const e = yield t.text();
        if (!e) return e;
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      });
    }
    function Vn(t, i, n, s, r, o, u = !1) {
      return Rn(this, void 0, void 0, function* () {
        const a = `${e}/${t}`.replace(/([^:]\/)\/+/g, "$1"),
          c = n && !!r,
          d = n && !r,
          l = Object.assign({ Accept: "application/json" }, o || {}),
          h = (t) =>
            ("undefined" != typeof FormData && t instanceof FormData) ||
            ("undefined" != typeof Blob && t instanceof Blob) ||
            ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer);
        if (
          ("GET" === i ||
            null == s ||
            h(s) ||
            (l["Content-Type"] = l["Content-Type"] || "application/json"),
          c && (l.Authorization = `Bearer ${r}`),
          d && !l["x-tp-csrf"])
        ) {
          const t = yield rt(u);
          t && (l["x-tp-csrf"] = t);
        }
        const f = {
            method: i,
            headers: l,
            credentials: d ? "include" : "omit",
            body:
              "GET" !== i && null != s
                ? h(s)
                  ? s
                  : JSON.stringify(s)
                : void 0,
          },
          D = yield fetch(a, f);
        if (0 === D.status || (D.status >= 200 && D.status < 400))
          return yield Mn(D);
        const v = yield Mn(D),
          p = new Error("string" == typeof v ? v : JSON.stringify(v));
        throw ((p.status = D.status), p);
      });
    }
    (!(function (t) {
      ((t.REGISTER = "register"),
        (t.PARTY_START = "party_start"),
        (t.PARTY_JOIN = "party_join"),
        (t.PARTY_END = "party_end"),
        (t.PARTY_SHARE = "party_share"),
        (t.PARTY_SCHEDULE = "party_schedule"));
    })(jn || (jn = {})),
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
      })(Pn || (Pn = {})));
    const $n = new (class extends tt {
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
      Pn.APPLE_TV,
      !1,
      ["browse_scripts/appletv/appletv_browse_bundled.js"],
    );
    Object.freeze($n);
    const Hn = $n;
    const Wn = new (class extends tt {
      isValidUrl(t) {
        return Un(t);
      }
      isBrowsing(t) {
        return Un(t) || t.pathname.includes("amazon.");
      }
      getVideoId(t) {
        const e = t.pathname
          .split("ref")[0]
          .match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
        return null != e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/amazon/amazon_content_bundled.js"],
      "amazon",
      Pn.AMAZON,
      !1,
      ["browse_scripts/amazon/amazon_browse_bundled.js"],
    );
    Object.freeze(Wn);
    const zn = Wn;
    const Gn = new (class extends tt {
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
            ].some((e) => t.pathname.includes(e))
          );
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".canalplus.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/").filter(Boolean);
        return "live" === e[0] && e.length >= 2 ? e[1] : e.join("/");
      }
    })(
      [],
      ["content_scripts/canalplus/canalplus_content_bundled.js"],
      "canalplus",
      Pn.CANALPLUS,
      !1,
      ["browse_scripts/canalplus/canalplus_browse_bundled.js"],
    );
    Object.freeze(Gn);
    const Zn = Gn;
    const Jn = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes(".crave."),
            i = t.pathname.includes("/play/") || t.pathname.includes("/live");
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".crave.");
      }
      getVideoId(t) {
        if (t.pathname.includes("/live")) {
          const e = t.searchParams.get("channel");
          return e ? `live/${e}` : "live";
        }
        return t.pathname.split("/").slice(2).join("/");
      }
    })(
      [],
      ["content_scripts/crave/crave_content_bundled.js"],
      "crave",
      Pn.CRAVE,
      !1,
      ["browse_scripts/crave/crave_browse_bundled.js"],
    );
    Object.freeze(Jn);
    const Yn = Jn;
    const Kn = new (class extends tt {
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
        const e = t.pathname.match(/watch\/(.*)\//);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"],
      "crunchyroll",
      Pn.CRUNCHYROLL,
      !1,
      ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"],
    );
    Object.freeze(Kn);
    const qn = Kn;
    const Xn = new (class extends tt {
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
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/disney/disney_content_bundled.js"],
      "disney",
      Pn.DISNEY_PLUS,
      !1,
      ["browse_scripts/disney/disney_browse_bundled.js"],
    );
    Object.freeze(Xn);
    const Qn = Xn;
    const ts = new (class extends tt {
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
        const e = t.pathname.split("/");
        return e && e.length > 1 ? e[e.length - 2] : void 0;
      }
    })(
      [],
      ["content_scripts/disneymena/disneymena_content_bundled.js"],
      "disneymena",
      Pn.DISNEY_PLUS_MENA,
      !1,
    );
    Object.freeze(ts);
    const es = ts;
    const is = new (class extends tt {
      isBrowsing(t) {
        return t.hostname.includes(".espn.");
      }
      isValidUrl(t) {
        return (function (t) {
          if (!t.hostname.includes(".espn.")) return !1;
          const e = t.pathname;
          return e.includes("/player") || e.includes("/watch/");
        })(t);
      }
      getVideoId(t) {
        const e = t.pathname,
          i = e.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
        if (null == i ? void 0 : i[1]) return decodeURIComponent(i[1]);
        const n = ["contentId", "mediaId", "id"];
        for (const e of n) {
          const i = t.searchParams.get(e);
          if (!i) continue;
          const n = decodeURIComponent(i);
          if (
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(
              n,
            ) ||
            /^\d{8,}$/.test(n)
          )
            return n;
        }
        const s = (e + t.hash).match(
          /\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/,
        );
        return null == s ? void 0 : s[1];
      }
    })(
      [],
      ["content_scripts/espn/espn_content_bundled.js"],
      "espn",
      Pn.ESPN,
      !1,
      ["browse_scripts/espn/espn_browse_bundled.js"],
    );
    Object.freeze(is);
    const ns = is;
    const ss = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("fancode.com"),
            i =
              t.searchParams.get(ct.MATCH_INFO_QUERY_PARAM.tag) ===
              ct.MATCH_INFO_QUERY_PARAM.value,
            n = t.pathname.includes(ct.HIGHLIGHTS),
            s = ct.LIVE_MATCH_PAGE_TYPES.some((e) => t.pathname.includes(e));
          return e && !i && (n || s);
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
      Pn.FANCODE,
      !1,
      ["browse_scripts/fancode/fancode_browse_bundled.js"],
    );
    Object.freeze(ss);
    const rs = ss;
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
    const us = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".fox.") && t.pathname.includes("/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".fox.");
      }
      getVideoId(t) {
        const e = t.pathname,
          i = e.indexOf("/watch/");
        if (-1 !== i) return e.substring(i + 7);
      }
    })(
      [],
      ["content_scripts/foxone/foxone_content_bundled.js"],
      os.FOX_ONE,
      Pn.FOX_ONE,
      !1,
      ["browse_scripts/foxone/foxone_browse_bundled.js"],
    );
    Object.freeze(us);
    const as = us;
    const cs = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("fubo.tv"),
            i = t.pathname.includes("watch");
          return e && i;
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
      Pn.FUBO,
      !1,
      ["browse_scripts/fubo/fubo_browse_bundled.js"],
    );
    Object.freeze(cs);
    const ds = cs;
    const ls = new (class extends tt {
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
      Pn.FUNIMATION,
      !1,
      ["browse_scripts/funimation/funimation_browse_bundled.js"],
    );
    Object.freeze(ls);
    const hs = ls;
    function fs(t) {
      const e = t.match(/\/video\/watch\/([^/?#]+)/i);
      return e ? e[1] : void 0;
    }
    const Ds = new (class extends tt {
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
        return fs(t.pathname);
      }
    })(
      [],
      ["content_scripts/hbo_max/hbo_max_content_bundled.js"],
      "hbomax",
      Pn.HBO_MAX,
      !1,
      ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"],
    );
    Object.freeze(Ds);
    const vs = Ds;
    const ps = new (class extends tt {
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
      Pn.HOTSTAR,
      !1,
      ["browse_scripts/hotstar/hotstar_browse_bundled.js"],
    );
    Object.freeze(ps);
    const bs = ps;
    const ms = new (class extends tt {
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
        return t.hostname.includes(".hulu.") && !t.hostname.includes("hulu.jp");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/hulu/hulu_content_bundled.js"],
      "hulu",
      Pn.HULU,
      !1,
      ["browse_scripts/hulu/hulu_browse_bundled.js"],
    );
    Object.freeze(ms);
    const gs = ms;
    const _s = new (class extends tt {
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
        const e = t.pathname.split("watch/");
        if (e.length > 1 && e[1].length > 0) return e[1];
      }
    })(
      [],
      ["content_scripts/hulujp/hulujp_content_bundled.js"],
      "hulujp",
      Pn.HULU_JP,
      !1,
      ["browse_scripts/hulujp/hulujp_browse_bundled.js"],
    );
    Object.freeze(_s);
    const ys = _s;
    const ws = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes(".jiocinema."),
            i =
              t.pathname.includes("/watch") && t.pathname.includes("/movies/"),
            n = t.pathname.includes("/sports/"),
            s = t.pathname.includes("/tv-shows/"),
            r = t.pathname.includes("/news/");
          return e && (i || n || s || r);
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
      Pn.JIO_CINEMA,
      !1,
      ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"],
    );
    Object.freeze(ws);
    const Fs = ws;
    const Es = new (class extends tt {
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
        return fs(t.pathname);
      }
    })([], ["content_scripts/max/max_content_bundled.js"], "max", Pn.MAX, !1, [
      "browse_scripts/max/max_browse_bundled.js",
    ]);
    Object.freeze(Es);
    const Cs = Es;
    const As = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("mubi."),
            i = t.pathname.includes("player");
          return e && i;
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
      Pn.MUBI,
      !1,
      ["browse_scripts/mubi/mubi_browse_bundled.js"],
    );
    Object.freeze(As);
    const Is = As;
    const Ss = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          return (
            t.hostname.includes(".netflix.") && t.pathname.includes("/watch")
          );
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".netflix.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/netflix/netflix_content_bundled.js"],
      "netflix",
      Pn.NETFLIX,
      !1,
      ["browse_scripts/netflix/netflix_browse_bundled.js"],
    );
    Object.freeze(Ss);
    const ks = Ss;
    const Ts = new (class extends tt {
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
      Pn.PARAMOUNT,
      !1,
      ["browse_scripts/paramount/paramount_browse_bundled.js"],
    );
    Object.freeze(Ts);
    const Bs = Ts;
    const Os = new (class extends tt {
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
        const e = t.pathname.match(
          /\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/,
        );
        if (e) return `${e[1]}/${e[2]}`;
        const i = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
        return i && i.length > 0 ? i[1] : void 0;
      }
    })(
      [],
      ["content_scripts/peacock/peacock_content_bundled.js"],
      "peacock",
      Pn.PEACOCK,
      !1,
      ["browse_scripts/peacock/peacock_browse_bundled.js"],
    );
    Object.freeze(Os);
    const Ns = Os,
      js = /(?:^|\/)watch\/live-tv(?:\/|$)/i,
      Ps = "us";
    const Rs = new (class extends tt {
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
        const e = t.pathname.replace(/^\/+|\/+$/g, "");
        if (this.P(e)) {
          const e = this.getLiveOriginId(t);
          if (!e) return;
          return this.buildLiveVideoId(e, this.getLocale(t));
        }
        if (this.R(e) || this.U(e) || this.L(e)) return `${e}#open`;
      }
      getWatchUrl(t) {
        const e = this.getLiveOriginIdFromVideoId(t);
        if (e)
          return `https://www.pluto.tv/${this.getLocaleFromVideoId(t)}/watch/live-tv/#${e}`;
        return `https://www.pluto.tv/${t.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
      }
      isMoviePath(t) {
        return this.R(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isShowEpisodePath(t) {
        return this.U(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      isLiveTvPath(t) {
        return this.P(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLocale(t) {
        return this.M(t.pathname.replace(/^\/+|\/+$/g, ""));
      }
      getLiveOriginId(t) {
        const e = t.hash.replace(/^#/, "").trim();
        if (e && "open" !== e.toLowerCase()) return e;
      }
      buildLiveVideoId(t, e = Ps) {
        return `${e || Ps}/watch/live-tv/#${t}`;
      }
      getLiveOriginIdFromVideoId(t) {
        var e;
        const i = t.replace(/^\/+/, "");
        if (/#/.test(i) && /watch\/live-tv/i.test(i)) {
          const t =
            null === (e = i.split("#").pop()) || void 0 === e
              ? void 0
              : e.trim();
          if (t && "open" !== t.toLowerCase()) return t;
        }
        const n = i.match(/live-tv\/([^/#]+)/i);
        return (null == n ? void 0 : n[1])
          ? n[1]
          : /^\d+$/.test(i)
            ? i
            : void 0;
      }
      getLocaleFromVideoId(t) {
        return this.M(t.replace(/^\/+|\/+$/g, ""));
      }
      M(t) {
        const e = t.split("/")[0];
        return e && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(e) && e.length <= 5
          ? e.toLowerCase()
          : Ps;
      }
      P(t) {
        return js.test(t);
      }
      L(t) {
        return /(^|\/)on-demand\//.test(t);
      }
      R(t) {
        return /(^|\/)movies\/[^/]+/.test(t);
      }
      U(t) {
        return /(^|\/)shows\/[^/]+\/episode\/[^/]+/.test(t);
      }
    })(
      [],
      ["content_scripts/plutotv/plutotv_content_bundled.js"],
      "plutotv",
      Pn.PLUTO_TV,
      !1,
      ["browse_scripts/plutotv/plutotv_browse_bundled.js"],
    );
    Object.freeze(Rs);
    const Us = Rs;
    const xs = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("shahid.mbc.net"),
            i = t.pathname.includes(Dt.VIDEO_TYPES.SHOW),
            n = t.pathname.includes(Dt.VIDEO_TYPES.LIVE_TV);
          return e && (i || n);
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
      Pn.SHAHID,
      !1,
      ["browse_scripts/shahid/shahid_browse_bundled.js"],
    );
    Object.freeze(xs);
    const Ls = xs;
    const Ms = new (class extends tt {
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
      Pn.SHUDDER,
      !1,
      ["browse_scripts/shudder/shudder_browse_bundled.js"],
    );
    Object.freeze(Ms);
    const Vs = Ms;
    const $s = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("watch.sling.com"),
            i = t.pathname.split("/");
          return e && i.length > 0 && "watch" === i[i.length - 1];
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
      Pn.SLING,
      !1,
      ["browse_scripts/sling/sling_browse_bundled.js"],
    );
    Object.freeze($s);
    const Hs = $s;
    const Ws = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("sonyliv.com"),
            i = "true" === t.searchParams.get("watch");
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sonyliv.com");
      }
      getVideoId(t) {
        let e = t.pathname.substring(1);
        return (t.search && (e += t.search), e);
      }
    })(
      [],
      ["content_scripts/sonyliv/sonyliv_content_bundled.js"],
      "sonyliv",
      Pn.SONY_LIV,
      !1,
      ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"],
    );
    Object.freeze(Ws);
    const zs = Ws;
    const Gs = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes("spotify.com");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".spotify.com");
      }
      getVideoId(t) {
        const e = t.pathname.replace(/^\//, "");
        if (e.startsWith("track/")) {
          const t = e.split("/")[1];
          return t ? `track/${t}` : void 0;
        }
        const i = t.searchParams.get("trackId");
        if (i) return `track/${i}`;
        return e + t.search || void 0;
      }
    })(
      [],
      ["content_scripts/spotify/spotify_content_bundled.js"],
      "spotify",
      Pn.SPOTIFY,
      !1,
    );
    Object.freeze(Gs);
    const Zs = Gs;
    const Js = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e =
              t.hostname.includes("app.stan.com.au") ||
              t.hostname.includes("play.stan.com.au"),
            i = t.pathname.split("/");
          return e && 4 === i.length && "play" === i[3];
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
      Pn.STAN,
      !1,
      ["browse_scripts/stan/stan_browse_bundled.js"],
    );
    Object.freeze(Js);
    const Ys = Js;
    const Ks = new (class extends tt {
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
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })(
      [],
      ["content_scripts/starplus/starplus_content_bundled.js"],
      "starplus",
      Pn.STAR_PLUS,
      !1,
    );
    Object.freeze(Ks);
    const qs = Ks;
    const Xs = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = "tsn.ca" === t.hostname || t.hostname.endsWith(".tsn.ca"),
            i = t.pathname.split("/").filter(Boolean),
            n = i.indexOf("video"),
            s = "/live" === t.pathname.replace(/\/+$/, ""),
            r = ((a = t.pathname), a.includes("/event/")),
            o = -1 !== n,
            u = -1 !== n && i.length > n + 1;
          var a;
          return (
            console.log("checking tsn party url", {
              isTsn: e,
              hasVideoSection: o,
              hasExtraPathAfterVideo: u,
              isLive: s,
              isEvent: r,
            }),
            e && (s || r || (o && u))
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
      Pn.TSN_PLUS,
      !1,
      ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"],
    );
    Object.freeze(Xs);
    const Qs = Xs;
    const tr = new (class extends tt {
      isBrowsing(t) {
        return t.hostname.includes("tubitv.com");
      }
      isValidUrl(t) {
        return (function (t) {
          const e = t.pathname.includes("live"),
            i =
              ["tv-shows", "movies"].some((e) => t.pathname.includes(e)) &&
              t.pathname.split("/").length > 2;
          return t.hostname.includes("tubitv.com") && (e || i);
        })(t);
      }
      getVideoId(t) {
        return t.pathname.split("/").slice(0, 3).join("/");
      }
    })(
      [],
      ["content_scripts/tubitv/tubitv_content_bundled.js"],
      "tubitv",
      Pn.TUBI_TV,
      !1,
      ["browse_scripts/tubitv/tubitv_browse_bundled.js"],
    );
    Object.freeze(tr);
    const er = tr;
    const ir = new (class extends tt {
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
        const e = t.pathname.split("/").filter(Boolean);
        return "play" === e[0] && e.length >= 3
          ? `${e[1]}/${e[2]}`
          : "live" === e[0] && e.length >= 2
            ? e[1]
            : void 0;
      }
    })(
      [],
      ["content_scripts/unext/unext_content_bundled.js"],
      "unext",
      Pn.UNEXT,
      !1,
      ["browse_scripts/unext/unext_browse_bundled.js"],
    );
    Object.freeze(ir);
    const nr = ir;
    const sr = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes(".vidio."),
            i = t.pathname.includes("/watch/") || t.pathname.includes("/live/"),
            n = t.pathname.includes("shorts");
          return e && i && !n;
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
      Pn.VIDIO,
      !1,
      ["browse_scripts/vidio/vidio_browse_bundled.js"],
    );
    Object.freeze(sr);
    const rr = sr;
    const or = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("viki.com"),
            i = t.pathname.includes("videos");
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viki.com");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        if (3 === e.length && "videos" === e[1]) return e[2];
      }
    })(
      [],
      ["content_scripts/viki/viki_content_bundled.js"],
      "viki",
      Pn.VIKI,
      !1,
      ["browse_scripts/viki/viki_browse_bundled.js"],
    );
    Object.freeze(or);
    const ur = or;
    const ar = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("viu.com"),
            i = t.pathname.includes(pt.VIDEO_TYPES.VIDEO),
            n = t.pathname.includes(pt.VIDEO_TYPES.LIVE);
          return e && (i || n);
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".viu.");
      }
      getVideoId(t) {
        var e, i, n;
        return `${null === (e = t.pathname.split("/")) || void 0 === e ? void 0 : e[4]}/${null === (i = t.pathname.split("/")) || void 0 === i ? void 0 : i[5]}/${null === (n = t.pathname.split("/")) || void 0 === n ? void 0 : n[6]}${t.search}`;
      }
    })([], ["content_scripts/viu/viu_content_bundled.js"], "viu", Pn.VIU, !1, [
      "browse_scripts/viu/viu_browse_bundled.js",
    ]);
    Object.freeze(ar);
    const cr = ar;
    const dr = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("vix.com"),
            i = Object.values(ht.PATH_TYPES).some((e) =>
              t.pathname.includes(e),
            );
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("vix.com");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    })([], ["content_scripts/vix/vix_content_bundled.js"], "vix", Pn.VIX, !1, [
      "browse_scripts/vix/vix_browse_bundled.js",
    ]);
    Object.freeze(dr);
    const lr = dr;
    const hr = new (class extends tt {
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
      Pn.WILLOW,
      !1,
      ["browse_scripts/willow/willow_browse_bundled.js"],
    );
    Object.freeze(hr);
    const fr = hr;
    const Dr = new (class extends tt {
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
            !(xn(t) && !t.pathname.includes("/watch")) &&
            t.hostname.includes(".youtube.")
          );
        })(t);
      }
      getVideoId(t) {
        let e;
        const { pathname: i, searchParams: n, hostname: s } = t;
        if (
          (function (t = new URL(window.location.href)) {
            return xn(t) && t.pathname.includes("/watch");
          })(t)
        ) {
          const t = i.split("/").filter(Boolean);
          "watch" === t[0] && t[1] && (e = t[1]);
        } else if (i.startsWith("/watch")) e = n.get("v") || void 0;
        else if (i.startsWith("/shorts/")) {
          e = i.split("/").filter(Boolean)[1];
        }
        if (!e && (t.href.includes("/watch") || t.href.includes("/shorts/"))) {
          const i =
            /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(
              t.href,
            );
          e = null != i && i.length > 3 && i[3] ? i[3] : void 0;
        }
        if (!e) {
          const t = i.split("/").filter(Boolean),
            n = t[t.length - 1];
          i.startsWith("/embed/")
            ? (e = "embed" !== n ? n : void 0)
            : i.startsWith("/v/")
              ? (e = "v" !== n ? n : void 0)
              : "youtu.be" === s && (e = n);
        }
        return e || "browsing";
      }
    })(
      [],
      ["content_scripts/youtube/youtube_content_bundled.js"],
      "youtube",
      Pn.YOUTUBE,
      !1,
      [],
    );
    Object.freeze(Dr);
    const vr = Dr;
    const pr = new (class extends tt {
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
        const e = t.pathname.substring(1).split("global/");
        return e[e.length - 1];
      }
    })(
      [],
      ["content_scripts/zee5/zee5_content_bundled.js"],
      "zee5",
      Pn.ZEE5,
      !1,
      ["browse_scripts/zee5/zee5_browse_bundled.js"],
    );
    Object.freeze(pr);
    const br = pr;
    const mr = new (class extends tt {
      V(t) {
        return "nba.com" === t || t.endsWith(".nba.com");
      }
      $(t) {
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
        return this.V(t.hostname) && this.$(t.pathname.toLowerCase());
      }
      getVideoId(t) {
        const e = t.pathname.replace(/\/+$/, "").replace(/^\/+/, ""),
          i = e.toLowerCase();
        if (i.startsWith("game/") || i.startsWith("watch/")) return e;
      }
    })(
      [],
      ["content_scripts/leaguepass/leaguepass_content_bundled.js"],
      "leaguepass",
      Pn.LEAGUE_PASS,
      !1,
      ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"],
    );
    Object.freeze(mr);
    const gr = mr;
    const _r = new (class extends tt {
      isBrowsing(t) {
        return t.hostname.includes(".dazn.");
      }
      isValidUrl(t) {
        return t.hostname.includes("dazn.com");
      }
      getVideoId(t) {
        const e = t.pathname.split("/").filter(Boolean);
        return (/^[a-z]{2}-[A-Z]{2}$/.test(e[0]) && e.shift(), e.join("/"));
      }
    })(
      [],
      ["content_scripts/dazn/dazn_content_bundled.js"],
      "dazn",
      Pn.DAZN,
      !1,
      ["browse_scripts/dazn/dazn_browse_bundled.js"],
    );
    Object.freeze(_r);
    const yr = _r;
    function wr(t) {
      return (
        t.hostname.includes("miguvideo.com") &&
        ("/" === t.pathname || "" === t.pathname)
      );
    }
    const Fr = new (class extends tt {
      isBrowsing(t) {
        return !wr(t) && t.hostname.includes(".miguvideo.");
      }
      isValidUrl(t) {
        return (
          !(
            !t.hostname.includes("miguvideo.com") ||
            !t.pathname.startsWith("/p/")
          ) || wr(t)
        );
      }
      getVideoId(t) {
        if (wr(t)) return "live/home";
        const e = t.pathname,
          i = e.indexOf("/p/");
        return -1 !== i ? e.substring(i + 3) : void 0;
      }
    })(
      [],
      ["content_scripts/migu/migu_content_bundled.js"],
      "migu",
      Pn.MIGU,
      !1,
      ["browse_scripts/migu/migu_browse_bundled.js"],
    );
    Object.freeze(Fr);
    const Er = Fr;
    const Cr = new (class extends tt {
      isValidUrl(t) {
        return (function (t) {
          return (
            t.hostname.includes("f1tv.formula1.com") &&
            t.pathname.includes("/detail/")
          );
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("f1tv.formula1.com") && !this.isValidUrl(t);
      }
      getVideoId(t) {
        const e = t.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
        if (e.startsWith("detail/")) return e;
      }
    })(
      [],
      ["content_scripts/f1_tv/f1_tv_content_bundled.js"],
      os.F1_TV,
      Pn.F1_TV,
      !1,
      ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"],
    );
    Object.freeze(Cr);
    const Ar = [
        ks,
        gs,
        Qn,
        vs,
        zn,
        vr,
        qn,
        ns,
        Bs,
        bs,
        Ns,
        qs,
        Cs,
        hs,
        Hn,
        Us,
        Fs,
        er,
        Is,
        Ys,
        Yn,
        Hs,
        es,
        ds,
        ur,
        Zs,
        ys,
        zs,
        nr,
        fr,
        br,
        rs,
        Zn,
        Ls,
        cr,
        rr,
        Vs,
        as,
        Qs,
        gr,
        yr,
        lr,
        Er,
        Cr,
      ],
      Ir = Object.fromEntries(Ar.map((t) => [t.name, t]));
    class Sr {
      constructor(t, e) {
        ((this.isBrowsing = !1),
          (this.needsCSPBlock = !1),
          (this.id = e),
          this.videoId,
          (this.url = t));
        const i = [Hn];
        for (const e of Ar) {
          if (e.isValidUrl(this.url)) {
            ((this.streamingService = e),
              (this.serviceName = e.name),
              (this.videoId = e.getVideoId(t)),
              i.includes(e) && (this.needsCSPBlock = !0));
            break;
          }
          if (e.isBrowsing(this.url)) {
            ((this.isBrowsing = !0),
              (this.streamingService = e),
              (this.serviceName = e.name),
              i.includes(e) && (this.needsCSPBlock = !0));
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
    const kr = 4500;
    class Tr {
      constructor() {
        this.H = new Map();
      }
      W() {
        let t = "";
        for (let e = 0; e < 16; e += 1)
          t += "0123456789abcdef"[Math.floor(16 * Math.random())];
        return t;
      }
      executeCallback(t, e) {
        const i = this.H.get(t);
        i && (i(e), this.H.delete(t));
      }
      addCallback(t, e) {
        let i = this.W();
        for (; this.H.has(i);) i = this.W();
        return (
          this.H.set(i, t),
          e &&
            setTimeout(() => {
              this.executeCallback(i, {
                errorMessage:
                  "Could not connect to the server. Please refresh the page and try again.",
              });
            }, e),
          i
        );
      }
    }
    const Br = Object.create(null);
    ((Br.open = "0"),
      (Br.close = "1"),
      (Br.ping = "2"),
      (Br.pong = "3"),
      (Br.message = "4"),
      (Br.upgrade = "5"),
      (Br.noop = "6"));
    const Or = Object.create(null);
    Object.keys(Br).forEach((t) => {
      Or[Br[t]] = t;
    });
    const Nr = { type: "error", data: "parser error" },
      jr =
        "function" == typeof Blob ||
        ("undefined" != typeof Blob &&
          "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
      Pr = "function" == typeof ArrayBuffer,
      Rr = (t) =>
        "function" == typeof ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer instanceof ArrayBuffer,
      Ur = ({ type: t, data: e }, i, n) =>
        jr && e instanceof Blob
          ? i
            ? n(e)
            : xr(e, n)
          : Pr && (e instanceof ArrayBuffer || Rr(e))
            ? i
              ? n(e)
              : xr(new Blob([e]), n)
            : n(Br[t] + (e || "")),
      xr = (t, e) => {
        const i = new FileReader();
        return (
          (i.onload = function () {
            const t = i.result.split(",")[1];
            e("b" + (t || ""));
          }),
          i.readAsDataURL(t)
        );
      };
    function Lr(t) {
      return t instanceof Uint8Array
        ? t
        : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    }
    let Mr;
    const Vr =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      $r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
    for (let t = 0; t < 64; t++) $r[Vr.charCodeAt(t)] = t;
    const Hr = "function" == typeof ArrayBuffer,
      Wr = (t, e) => {
        if ("string" != typeof t) return { type: "message", data: Gr(t, e) };
        const i = t.charAt(0);
        if ("b" === i) return { type: "message", data: zr(t.substring(1), e) };
        return Or[i]
          ? t.length > 1
            ? { type: Or[i], data: t.substring(1) }
            : { type: Or[i] }
          : Nr;
      },
      zr = (t, e) => {
        if (Hr) {
          const i = ((t) => {
            let e,
              i,
              n,
              s,
              r,
              o = 0.75 * t.length,
              u = t.length,
              a = 0;
            "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
            const c = new ArrayBuffer(o),
              d = new Uint8Array(c);
            for (e = 0; e < u; e += 4)
              ((i = $r[t.charCodeAt(e)]),
                (n = $r[t.charCodeAt(e + 1)]),
                (s = $r[t.charCodeAt(e + 2)]),
                (r = $r[t.charCodeAt(e + 3)]),
                (d[a++] = (i << 2) | (n >> 4)),
                (d[a++] = ((15 & n) << 4) | (s >> 2)),
                (d[a++] = ((3 & s) << 6) | (63 & r)));
            return c;
          })(t);
          return Gr(i, e);
        }
        return { base64: !0, data: t };
      },
      Gr = (t, e) =>
        "blob" === e
          ? t instanceof Blob
            ? t
            : new Blob([t])
          : t instanceof ArrayBuffer
            ? t
            : t.buffer,
      Zr = String.fromCharCode(30);
    function Jr() {
      return new TransformStream({
        transform(t, e) {
          !(function (t, e) {
            jr && t.data instanceof Blob
              ? t.data.arrayBuffer().then(Lr).then(e)
              : Pr && (t.data instanceof ArrayBuffer || Rr(t.data))
                ? e(Lr(t.data))
                : Ur(t, !1, (t) => {
                    (Mr || (Mr = new TextEncoder()), e(Mr.encode(t)));
                  });
          })(t, (i) => {
            const n = i.length;
            let s;
            if (n < 126)
              ((s = new Uint8Array(1)), new DataView(s.buffer).setUint8(0, n));
            else if (n < 65536) {
              s = new Uint8Array(3);
              const t = new DataView(s.buffer);
              (t.setUint8(0, 126), t.setUint16(1, n));
            } else {
              s = new Uint8Array(9);
              const t = new DataView(s.buffer);
              (t.setUint8(0, 127), t.setBigUint64(1, BigInt(n)));
            }
            (t.data && "string" != typeof t.data && (s[0] |= 128),
              e.enqueue(s),
              e.enqueue(i));
          });
        },
      });
    }
    let Yr;
    function Kr(t) {
      return t.reduce((t, e) => t + e.length, 0);
    }
    function qr(t, e) {
      if (t[0].length === e) return t.shift();
      const i = new Uint8Array(e);
      let n = 0;
      for (let s = 0; s < e; s++)
        ((i[s] = t[0][n++]), n === t[0].length && (t.shift(), (n = 0)));
      return (t.length && n < t[0].length && (t[0] = t[0].slice(n)), i);
    }
    function Xr(t) {
      if (t)
        return (function (t) {
          for (var e in Xr.prototype) t[e] = Xr.prototype[e];
          return t;
        })(t);
    }
    ((Xr.prototype.on = Xr.prototype.addEventListener =
      function (t, e) {
        return (
          (this.G = this.G || {}),
          (this.G["$" + t] = this.G["$" + t] || []).push(e),
          this
        );
      }),
      (Xr.prototype.once = function (t, e) {
        function i() {
          (this.off(t, i), e.apply(this, arguments));
        }
        return ((i.fn = e), this.on(t, i), this);
      }),
      (Xr.prototype.off =
        Xr.prototype.removeListener =
        Xr.prototype.removeAllListeners =
        Xr.prototype.removeEventListener =
          function (t, e) {
            if (((this.G = this.G || {}), 0 == arguments.length))
              return ((this.G = {}), this);
            var i,
              n = this.G["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return (delete this.G["$" + t], this);
            for (var s = 0; s < n.length; s++)
              if ((i = n[s]) === e || i.fn === e) {
                n.splice(s, 1);
                break;
              }
            return (0 === n.length && delete this.G["$" + t], this);
          }),
      (Xr.prototype.emit = function (t) {
        this.G = this.G || {};
        for (
          var e = new Array(arguments.length - 1), i = this.G["$" + t], n = 1;
          n < arguments.length;
          n++
        )
          e[n - 1] = arguments[n];
        if (i) {
          n = 0;
          for (var s = (i = i.slice(0)).length; n < s; ++n) i[n].apply(this, e);
        }
        return this;
      }),
      (Xr.prototype.emitReserved = Xr.prototype.emit),
      (Xr.prototype.listeners = function (t) {
        return ((this.G = this.G || {}), this.G["$" + t] || []);
      }),
      (Xr.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      }));
    const Qr =
        "function" == typeof Promise && "function" == typeof Promise.resolve
          ? (t) => Promise.resolve().then(t)
          : (t, e) => e(t, 0),
      to =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
            ? window
            : Function("return this")();
    function eo(t, ...e) {
      return e.reduce((e, i) => (t.hasOwnProperty(i) && (e[i] = t[i]), e), {});
    }
    const io = to.setTimeout,
      no = to.clearTimeout;
    function so(t, e) {
      e.useNativeTimers
        ? ((t.setTimeoutFn = io.bind(to)), (t.clearTimeoutFn = no.bind(to)))
        : ((t.setTimeoutFn = to.setTimeout.bind(to)),
          (t.clearTimeoutFn = to.clearTimeout.bind(to)));
    }
    function ro(t) {
      return "string" == typeof t
        ? (function (t) {
            let e = 0,
              i = 0;
            for (let n = 0, s = t.length; n < s; n++)
              ((e = t.charCodeAt(n)),
                e < 128
                  ? (i += 1)
                  : e < 2048
                    ? (i += 2)
                    : e < 55296 || e >= 57344
                      ? (i += 3)
                      : (n++, (i += 4)));
            return i;
          })(t)
        : Math.ceil(1.33 * (t.byteLength || t.size));
    }
    function oo() {
      return (
        Date.now().toString(36).substring(3) +
        Math.random().toString(36).substring(2, 5)
      );
    }
    class uo extends Error {
      constructor(t, e, i) {
        (super(t),
          (this.description = e),
          (this.context = i),
          (this.type = "TransportError"));
      }
    }
    class ao extends Xr {
      constructor(t) {
        (super(),
          (this.writable = !1),
          so(this, t),
          (this.opts = t),
          (this.query = t.query),
          (this.socket = t.socket),
          (this.supportsBinary = !t.forceBase64));
      }
      onError(t, e, i) {
        return (super.emitReserved("error", new uo(t, e, i)), this);
      }
      open() {
        return ((this.readyState = "opening"), this.doOpen(), this);
      }
      close() {
        return (
          ("opening" !== this.readyState && "open" !== this.readyState) ||
            (this.doClose(), this.onClose()),
          this
        );
      }
      send(t) {
        "open" === this.readyState && this.write(t);
      }
      onOpen() {
        ((this.readyState = "open"),
          (this.writable = !0),
          super.emitReserved("open"));
      }
      onData(t) {
        const e = Wr(t, this.socket.binaryType);
        this.onPacket(e);
      }
      onPacket(t) {
        super.emitReserved("packet", t);
      }
      onClose(t) {
        ((this.readyState = "closed"), super.emitReserved("close", t));
      }
      pause(t) {}
      createUri(t, e = {}) {
        return t + "://" + this.Z() + this.J() + this.opts.path + this.Y(e);
      }
      Z() {
        const t = this.opts.hostname;
        return -1 === t.indexOf(":") ? t : "[" + t + "]";
      }
      J() {
        return this.opts.port &&
          ((this.opts.secure && 443 !== Number(this.opts.port)) ||
            (!this.opts.secure && 80 !== Number(this.opts.port)))
          ? ":" + this.opts.port
          : "";
      }
      Y(t) {
        const e = (function (t) {
          let e = "";
          for (let i in t)
            t.hasOwnProperty(i) &&
              (e.length && (e += "&"),
              (e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i])));
          return e;
        })(t);
        return e.length ? "?" + e : "";
      }
    }
    class co extends ao {
      constructor() {
        (super(...arguments), (this.K = !1));
      }
      get name() {
        return "polling";
      }
      doOpen() {
        this.q();
      }
      pause(t) {
        this.readyState = "pausing";
        const e = () => {
          ((this.readyState = "paused"), t());
        };
        if (this.K || !this.writable) {
          let t = 0;
          (this.K &&
            (t++,
            this.once("pollComplete", function () {
              --t || e();
            })),
            this.writable ||
              (t++,
              this.once("drain", function () {
                --t || e();
              })));
        } else e();
      }
      q() {
        ((this.K = !0), this.doPoll(), this.emitReserved("poll"));
      }
      onData(t) {
        (((t, e) => {
          const i = t.split(Zr),
            n = [];
          for (let t = 0; t < i.length; t++) {
            const s = Wr(i[t], e);
            if ((n.push(s), "error" === s.type)) break;
          }
          return n;
        })(t, this.socket.binaryType).forEach((t) => {
          if (
            ("opening" === this.readyState &&
              "open" === t.type &&
              this.onOpen(),
            "close" === t.type)
          )
            return (
              this.onClose({ description: "transport closed by the server" }),
              !1
            );
          this.onPacket(t);
        }),
          "closed" !== this.readyState &&
            ((this.K = !1),
            this.emitReserved("pollComplete"),
            "open" === this.readyState && this.q()));
      }
      doClose() {
        const t = () => {
          this.write([{ type: "close" }]);
        };
        "open" === this.readyState ? t() : this.once("open", t);
      }
      write(t) {
        ((this.writable = !1),
          ((t, e) => {
            const i = t.length,
              n = new Array(i);
            let s = 0;
            t.forEach((t, r) => {
              Ur(t, !1, (t) => {
                ((n[r] = t), ++s === i && e(n.join(Zr)));
              });
            });
          })(t, (t) => {
            this.doWrite(t, () => {
              ((this.writable = !0), this.emitReserved("drain"));
            });
          }));
      }
      uri() {
        const t = this.opts.secure ? "https" : "http",
          e = this.query || {};
        return (
          !1 !== this.opts.timestampRequests &&
            (e[this.opts.timestampParam] = oo()),
          this.supportsBinary || e.sid || (e.b64 = 1),
          this.createUri(t, e)
        );
      }
    }
    let lo = !1;
    try {
      lo =
        "undefined" != typeof XMLHttpRequest &&
        "withCredentials" in new XMLHttpRequest();
    } catch (je) {}
    const ho = lo;
    function fo() {}
    class Do extends co {
      constructor(t) {
        if ((super(t), "undefined" != typeof location)) {
          const e = "https:" === location.protocol;
          let i = location.port;
          (i || (i = e ? "443" : "80"),
            (this.xd =
              ("undefined" != typeof location &&
                t.hostname !== location.hostname) ||
              i !== t.port));
        }
      }
      doWrite(t, e) {
        const i = this.request({ method: "POST", data: t });
        (i.on("success", e),
          i.on("error", (t, e) => {
            this.onError("xhr post error", t, e);
          }));
      }
      doPoll() {
        const t = this.request();
        (t.on("data", this.onData.bind(this)),
          t.on("error", (t, e) => {
            this.onError("xhr poll error", t, e);
          }),
          (this.pollXhr = t));
      }
    }
    class vo extends Xr {
      constructor(t, e, i) {
        (super(),
          (this.createRequest = t),
          so(this, i),
          (this.X = i),
          (this.tt = i.method || "GET"),
          (this.et = e),
          (this.it = void 0 !== i.data ? i.data : null),
          this.nt());
      }
      nt() {
        var t;
        const e = eo(
          this.X,
          "agent",
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "autoUnref",
        );
        e.xdomain = !!this.X.xd;
        const i = (this.st = this.createRequest(e));
        try {
          i.open(this.tt, this.et, !0);
          try {
            if (this.X.extraHeaders) {
              i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
              for (let t in this.X.extraHeaders)
                this.X.extraHeaders.hasOwnProperty(t) &&
                  i.setRequestHeader(t, this.X.extraHeaders[t]);
            }
          } catch (t) {}
          if ("POST" === this.tt)
            try {
              i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (t) {}
          try {
            i.setRequestHeader("Accept", "*/*");
          } catch (t) {}
          (null === (t = this.X.cookieJar) || void 0 === t || t.addCookies(i),
            "withCredentials" in i &&
              (i.withCredentials = this.X.withCredentials),
            this.X.requestTimeout && (i.timeout = this.X.requestTimeout),
            (i.onreadystatechange = () => {
              var t;
              (3 === i.readyState &&
                (null === (t = this.X.cookieJar) ||
                  void 0 === t ||
                  t.parseCookies(i.getResponseHeader("set-cookie"))),
                4 === i.readyState &&
                  (200 === i.status || 1223 === i.status
                    ? this.rt()
                    : this.setTimeoutFn(() => {
                        this.ot("number" == typeof i.status ? i.status : 0);
                      }, 0)));
            }),
            i.send(this.it));
        } catch (t) {
          return void this.setTimeoutFn(() => {
            this.ot(t);
          }, 0);
        }
        "undefined" != typeof document &&
          ((this.ut = vo.requestsCount++), (vo.requests[this.ut] = this));
      }
      ot(t) {
        (this.emitReserved("error", t, this.st), this.ct(!0));
      }
      ct(t) {
        if (void 0 !== this.st && null !== this.st) {
          if (((this.st.onreadystatechange = fo), t))
            try {
              this.st.abort();
            } catch (t) {}
          ("undefined" != typeof document && delete vo.requests[this.ut],
            (this.st = null));
        }
      }
      rt() {
        const t = this.st.responseText;
        null !== t &&
          (this.emitReserved("data", t),
          this.emitReserved("success"),
          this.ct());
      }
      abort() {
        this.ct();
      }
    }
    if (
      ((vo.requestsCount = 0),
      (vo.requests = {}),
      "undefined" != typeof document)
    )
      if ("function" == typeof attachEvent) attachEvent("onunload", po);
      else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in to ? "pagehide" : "unload", po, !1);
      }
    function po() {
      for (let t in vo.requests)
        vo.requests.hasOwnProperty(t) && vo.requests[t].abort();
    }
    const bo = (function () {
      const t = mo({ xdomain: !1 });
      return t && null !== t.responseType;
    })();
    function mo(t) {
      const e = t.xdomain;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!e || ho))
          return new XMLHttpRequest();
      } catch (t) {}
      if (!e)
        try {
          return new to[["Active"].concat("Object").join("X")](
            "Microsoft.XMLHTTP",
          );
        } catch (t) {}
    }
    const go =
      "undefined" != typeof navigator &&
      "string" == typeof navigator.product &&
      "reactnative" === navigator.product.toLowerCase();
    class _o extends ao {
      get name() {
        return "websocket";
      }
      doOpen() {
        const t = this.uri(),
          e = this.opts.protocols,
          i = go
            ? {}
            : eo(
                this.opts,
                "agent",
                "perMessageDeflate",
                "pfx",
                "key",
                "passphrase",
                "cert",
                "ca",
                "ciphers",
                "rejectUnauthorized",
                "localAddress",
                "protocolVersion",
                "origin",
                "maxPayload",
                "family",
                "checkServerIdentity",
              );
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
          this.ws = this.createSocket(t, e, i);
        } catch (t) {
          return this.emitReserved("error", t);
        }
        ((this.ws.binaryType = this.socket.binaryType),
          this.addEventListeners());
      }
      addEventListeners() {
        ((this.ws.onopen = () => {
          (this.opts.autoUnref && this.ws.dt.unref(), this.onOpen());
        }),
          (this.ws.onclose = (t) =>
            this.onClose({
              description: "websocket connection closed",
              context: t,
            })),
          (this.ws.onmessage = (t) => this.onData(t.data)),
          (this.ws.onerror = (t) => this.onError("websocket error", t)));
      }
      write(t) {
        this.writable = !1;
        for (let e = 0; e < t.length; e++) {
          const i = t[e],
            n = e === t.length - 1;
          Ur(i, this.supportsBinary, (t) => {
            try {
              this.doWrite(i, t);
            } catch (t) {}
            n &&
              Qr(() => {
                ((this.writable = !0), this.emitReserved("drain"));
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        void 0 !== this.ws &&
          ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
      }
      uri() {
        const t = this.opts.secure ? "wss" : "ws",
          e = this.query || {};
        return (
          this.opts.timestampRequests && (e[this.opts.timestampParam] = oo()),
          this.supportsBinary || (e.b64 = 1),
          this.createUri(t, e)
        );
      }
    }
    const yo = to.WebSocket || to.MozWebSocket;
    const wo = {
        websocket: class extends _o {
          createSocket(t, e, i) {
            return go ? new yo(t, e, i) : e ? new yo(t, e) : new yo(t);
          }
          doWrite(t, e) {
            this.ws.send(e);
          }
        },
        webtransport: class extends ao {
          get name() {
            return "webtransport";
          }
          doOpen() {
            try {
              this.lt = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name],
              );
            } catch (t) {
              return this.emitReserved("error", t);
            }
            (this.lt.closed
              .then(() => {
                this.onClose();
              })
              .catch((t) => {
                this.onError("webtransport error", t);
              }),
              this.lt.ready.then(() => {
                this.lt.createBidirectionalStream().then((t) => {
                  const e = (function (t, e) {
                      Yr || (Yr = new TextDecoder());
                      const i = [];
                      let n = 0,
                        s = -1,
                        r = !1;
                      return new TransformStream({
                        transform(o, u) {
                          for (i.push(o); ;) {
                            if (0 === n) {
                              if (Kr(i) < 1) break;
                              const t = qr(i, 1);
                              ((r = !(128 & ~t[0])),
                                (s = 127 & t[0]),
                                (n = s < 126 ? 3 : 126 === s ? 1 : 2));
                            } else if (1 === n) {
                              if (Kr(i) < 2) break;
                              const t = qr(i, 2);
                              ((s = new DataView(
                                t.buffer,
                                t.byteOffset,
                                t.length,
                              ).getUint16(0)),
                                (n = 3));
                            } else if (2 === n) {
                              if (Kr(i) < 8) break;
                              const t = qr(i, 8),
                                e = new DataView(
                                  t.buffer,
                                  t.byteOffset,
                                  t.length,
                                ),
                                r = e.getUint32(0);
                              if (r > Math.pow(2, 21) - 1) {
                                u.enqueue(Nr);
                                break;
                              }
                              ((s = r * Math.pow(2, 32) + e.getUint32(4)),
                                (n = 3));
                            } else {
                              if (Kr(i) < s) break;
                              const t = qr(i, s);
                              (u.enqueue(Wr(r ? t : Yr.decode(t), e)), (n = 0));
                            }
                            if (0 === s || s > t) {
                              u.enqueue(Nr);
                              break;
                            }
                          }
                        },
                      });
                    })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = t.readable.pipeThrough(e).getReader(),
                    n = Jr();
                  (n.readable.pipeTo(t.writable),
                    (this.ht = n.writable.getWriter()));
                  const s = () => {
                    i.read()
                      .then(({ done: t, value: e }) => {
                        t || (this.onPacket(e), s());
                      })
                      .catch((t) => {});
                  };
                  s();
                  const r = { type: "open" };
                  (this.query.sid && (r.data = `{"sid":"${this.query.sid}"}`),
                    this.ht.write(r).then(() => this.onOpen()));
                });
              }));
          }
          write(t) {
            this.writable = !1;
            for (let e = 0; e < t.length; e++) {
              const i = t[e],
                n = e === t.length - 1;
              this.ht.write(i).then(() => {
                n &&
                  Qr(() => {
                    ((this.writable = !0), this.emitReserved("drain"));
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            var t;
            null === (t = this.lt) || void 0 === t || t.close();
          }
        },
        polling: class extends Do {
          constructor(t) {
            super(t);
            const e = t && t.forceBase64;
            this.supportsBinary = bo && !e;
          }
          request(t = {}) {
            return (
              Object.assign(t, { xd: this.xd }, this.opts),
              new vo(mo, this.uri(), t)
            );
          }
        },
      },
      Fo =
        /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      Eo = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ];
    function Co(t) {
      if (t.length > 8e3) throw "URI too long";
      const e = t,
        i = t.indexOf("["),
        n = t.indexOf("]");
      -1 != i &&
        -1 != n &&
        (t =
          t.substring(0, i) +
          t.substring(i, n).replace(/:/g, ";") +
          t.substring(n, t.length));
      let s = Fo.exec(t || ""),
        r = {},
        o = 14;
      for (; o--;) r[Eo[o]] = s[o] || "";
      return (
        -1 != i &&
          -1 != n &&
          ((r.source = e),
          (r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":")),
          (r.authority = r.authority
            .replace("[", "")
            .replace("]", "")
            .replace(/;/g, ":")),
          (r.ipv6uri = !0)),
        (r.pathNames = (function (t, e) {
          const i = /\/{2,9}/g,
            n = e.replace(i, "/").split("/");
          ("/" != e.slice(0, 1) && 0 !== e.length) || n.splice(0, 1);
          "/" == e.slice(-1) && n.splice(n.length - 1, 1);
          return n;
        })(0, r.path)),
        (r.queryKey = (function (t, e) {
          const i = {};
          return (
            e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
              e && (i[e] = n);
            }),
            i
          );
        })(0, r.query)),
        r
      );
    }
    const Ao =
        "function" == typeof addEventListener &&
        "function" == typeof removeEventListener,
      Io = [];
    Ao &&
      addEventListener(
        "offline",
        () => {
          Io.forEach((t) => t());
        },
        !1,
      );
    class So extends Xr {
      constructor(t, e) {
        if (
          (super(),
          (this.binaryType = "arraybuffer"),
          (this.writeBuffer = []),
          (this.ft = 0),
          (this.Dt = -1),
          (this.vt = -1),
          (this.bt = -1),
          (this.gt = 1 / 0),
          t && "object" == typeof t && ((e = t), (t = null)),
          t)
        ) {
          const i = Co(t);
          ((e.hostname = i.host),
            (e.secure = "https" === i.protocol || "wss" === i.protocol),
            (e.port = i.port),
            i.query && (e.query = i.query));
        } else e.host && (e.hostname = Co(e.host).host);
        (so(this, e),
          (this.secure =
            null != e.secure
              ? e.secure
              : "undefined" != typeof location &&
                "https:" === location.protocol),
          e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
          (this.hostname =
            e.hostname ||
            ("undefined" != typeof location ? location.hostname : "localhost")),
          (this.port =
            e.port ||
            ("undefined" != typeof location && location.port
              ? location.port
              : this.secure
                ? "443"
                : "80")),
          (this.transports = []),
          (this._t = {}),
          e.transports.forEach((t) => {
            const e = t.prototype.name;
            (this.transports.push(e), (this._t[e] = t));
          }),
          (this.opts = Object.assign(
            {
              path: "/engine.io",
              agent: !1,
              withCredentials: !1,
              upgrade: !0,
              timestampParam: "t",
              rememberUpgrade: !1,
              addTrailingSlash: !0,
              rejectUnauthorized: !0,
              perMessageDeflate: { threshold: 1024 },
              transportOptions: {},
              closeOnBeforeunload: !1,
            },
            e,
          )),
          (this.opts.path =
            this.opts.path.replace(/\/$/, "") +
            (this.opts.addTrailingSlash ? "/" : "")),
          "string" == typeof this.opts.query &&
            (this.opts.query = (function (t) {
              let e = {},
                i = t.split("&");
              for (let t = 0, n = i.length; t < n; t++) {
                let n = i[t].split("=");
                e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
              }
              return e;
            })(this.opts.query)),
          Ao &&
            (this.opts.closeOnBeforeunload &&
              ((this.yt = () => {
                this.transport &&
                  (this.transport.removeAllListeners(), this.transport.close());
              }),
              addEventListener("beforeunload", this.yt, !1)),
            "localhost" !== this.hostname &&
              ((this.wt = () => {
                this.Ft("transport close", {
                  description: "network connection lost",
                });
              }),
              Io.push(this.wt))),
          this.opts.withCredentials && (this.Et = void 0),
          this.Ct());
      }
      createTransport(t) {
        const e = Object.assign({}, this.opts.query);
        ((e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id));
        const i = Object.assign(
          {},
          this.opts,
          {
            query: e,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
          },
          this.opts.transportOptions[t],
        );
        return new this._t[t](i);
      }
      Ct() {
        if (0 === this.transports.length)
          return void this.setTimeoutFn(() => {
            this.emitReserved("error", "No transports available");
          }, 0);
        const t =
          this.opts.rememberUpgrade &&
          So.priorWebsocketSuccess &&
          -1 !== this.transports.indexOf("websocket")
            ? "websocket"
            : this.transports[0];
        this.readyState = "opening";
        const e = this.createTransport(t);
        (e.open(), this.setTransport(e));
      }
      setTransport(t) {
        (this.transport && this.transport.removeAllListeners(),
          (this.transport = t),
          t
            .on("drain", this.At.bind(this))
            .on("packet", this.It.bind(this))
            .on("error", this.ot.bind(this))
            .on("close", (t) => this.Ft("transport close", t)));
      }
      onOpen() {
        ((this.readyState = "open"),
          (So.priorWebsocketSuccess = "websocket" === this.transport.name),
          this.emitReserved("open"),
          this.flush());
      }
      It(t) {
        if (
          "opening" === this.readyState ||
          "open" === this.readyState ||
          "closing" === this.readyState
        )
          switch (
            (this.emitReserved("packet", t),
            this.emitReserved("heartbeat"),
            t.type)
          ) {
            case "open":
              this.onHandshake(JSON.parse(t.data));
              break;
            case "ping":
              (this.St("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this.kt());
              break;
            case "error":
              const e = new Error("server error");
              ((e.code = t.data), this.ot(e));
              break;
            case "message":
              (this.emitReserved("data", t.data),
                this.emitReserved("message", t.data));
          }
      }
      onHandshake(t) {
        (this.emitReserved("handshake", t),
          (this.id = t.sid),
          (this.transport.query.sid = t.sid),
          (this.Dt = t.pingInterval),
          (this.vt = t.pingTimeout),
          (this.bt = t.maxPayload),
          this.onOpen(),
          "closed" !== this.readyState && this.kt());
      }
      kt() {
        this.clearTimeoutFn(this.Tt);
        const t = this.Dt + this.vt;
        ((this.gt = Date.now() + t),
          (this.Tt = this.setTimeoutFn(() => {
            this.Ft("ping timeout");
          }, t)),
          this.opts.autoUnref && this.Tt.unref());
      }
      At() {
        (this.writeBuffer.splice(0, this.ft),
          (this.ft = 0),
          0 === this.writeBuffer.length
            ? this.emitReserved("drain")
            : this.flush());
      }
      flush() {
        if (
          "closed" !== this.readyState &&
          this.transport.writable &&
          !this.upgrading &&
          this.writeBuffer.length
        ) {
          const t = this.Bt();
          (this.transport.send(t),
            (this.ft = t.length),
            this.emitReserved("flush"));
        }
      }
      Bt() {
        if (!(
          this.bt &&
          "polling" === this.transport.name &&
          this.writeBuffer.length > 1
        ))
          return this.writeBuffer;
        let t = 1;
        for (let e = 0; e < this.writeBuffer.length; e++) {
          const i = this.writeBuffer[e].data;
          if ((i && (t += ro(i)), e > 0 && t > this.bt))
            return this.writeBuffer.slice(0, e);
          t += 2;
        }
        return this.writeBuffer;
      }
      Ot() {
        if (!this.gt) return !0;
        const t = Date.now() > this.gt;
        return (
          t &&
            ((this.gt = 0),
            Qr(() => {
              this.Ft("ping timeout");
            }, this.setTimeoutFn)),
          t
        );
      }
      write(t, e, i) {
        return (this.St("message", t, e, i), this);
      }
      send(t, e, i) {
        return (this.St("message", t, e, i), this);
      }
      St(t, e, i, n) {
        if (
          ("function" == typeof e && ((n = e), (e = void 0)),
          "function" == typeof i && ((n = i), (i = null)),
          "closing" === this.readyState || "closed" === this.readyState)
        )
          return;
        (i = i || {}).compress = !1 !== i.compress;
        const s = { type: t, data: e, options: i };
        (this.emitReserved("packetCreate", s),
          this.writeBuffer.push(s),
          n && this.once("flush", n),
          this.flush());
      }
      close() {
        const t = () => {
            (this.Ft("forced close"), this.transport.close());
          },
          e = () => {
            (this.off("upgrade", e), this.off("upgradeError", e), t());
          },
          i = () => {
            (this.once("upgrade", e), this.once("upgradeError", e));
          };
        return (
          ("opening" !== this.readyState && "open" !== this.readyState) ||
            ((this.readyState = "closing"),
            this.writeBuffer.length
              ? this.once("drain", () => {
                  this.upgrading ? i() : t();
                })
              : this.upgrading
                ? i()
                : t()),
          this
        );
      }
      ot(t) {
        if (
          ((So.priorWebsocketSuccess = !1),
          this.opts.tryAllTransports &&
            this.transports.length > 1 &&
            "opening" === this.readyState)
        )
          return (this.transports.shift(), this.Ct());
        (this.emitReserved("error", t), this.Ft("transport error", t));
      }
      Ft(t, e) {
        if (
          "opening" === this.readyState ||
          "open" === this.readyState ||
          "closing" === this.readyState
        ) {
          if (
            (this.clearTimeoutFn(this.Tt),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            Ao &&
              (this.yt && removeEventListener("beforeunload", this.yt, !1),
              this.wt))
          ) {
            const t = Io.indexOf(this.wt);
            -1 !== t && Io.splice(t, 1);
          }
          ((this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, e),
            (this.writeBuffer = []),
            (this.ft = 0));
        }
      }
    }
    So.protocol = 4;
    class ko extends So {
      constructor() {
        (super(...arguments), (this.Nt = []));
      }
      onOpen() {
        if ((super.onOpen(), "open" === this.readyState && this.opts.upgrade))
          for (let t = 0; t < this.Nt.length; t++) this.jt(this.Nt[t]);
      }
      jt(t) {
        let e = this.createTransport(t),
          i = !1;
        So.priorWebsocketSuccess = !1;
        const n = () => {
          i ||
            (e.send([{ type: "ping", data: "probe" }]),
            e.once("packet", (t) => {
              if (!i)
                if ("pong" === t.type && "probe" === t.data) {
                  if (
                    ((this.upgrading = !0),
                    this.emitReserved("upgrading", e),
                    !e)
                  )
                    return;
                  ((So.priorWebsocketSuccess = "websocket" === e.name),
                    this.transport.pause(() => {
                      i ||
                        ("closed" !== this.readyState &&
                          (c(),
                          this.setTransport(e),
                          e.send([{ type: "upgrade" }]),
                          this.emitReserved("upgrade", e),
                          (e = null),
                          (this.upgrading = !1),
                          this.flush()));
                    }));
                } else {
                  const t = new Error("probe error");
                  ((t.transport = e.name),
                    this.emitReserved("upgradeError", t));
                }
            }));
        };
        function s() {
          i || ((i = !0), c(), e.close(), (e = null));
        }
        const r = (t) => {
          const i = new Error("probe error: " + t);
          ((i.transport = e.name), s(), this.emitReserved("upgradeError", i));
        };
        function o() {
          r("transport closed");
        }
        function u() {
          r("socket closed");
        }
        function a(t) {
          e && t.name !== e.name && s();
        }
        const c = () => {
          (e.removeListener("open", n),
            e.removeListener("error", r),
            e.removeListener("close", o),
            this.off("close", u),
            this.off("upgrading", a));
        };
        (e.once("open", n),
          e.once("error", r),
          e.once("close", o),
          this.once("close", u),
          this.once("upgrading", a),
          -1 !== this.Nt.indexOf("webtransport") && "webtransport" !== t
            ? this.setTimeoutFn(() => {
                i || e.open();
              }, 200)
            : e.open());
      }
      onHandshake(t) {
        ((this.Nt = this.Pt(t.upgrades)), super.onHandshake(t));
      }
      Pt(t) {
        const e = [];
        for (let i = 0; i < t.length; i++)
          ~this.transports.indexOf(t[i]) && e.push(t[i]);
        return e;
      }
    }
    class To extends ko {
      constructor(t, e = {}) {
        const i = "object" == typeof t ? t : e;
        ((!i.transports ||
          (i.transports && "string" == typeof i.transports[0])) &&
          (i.transports = (
            i.transports || ["polling", "websocket", "webtransport"]
          )
            .map((t) => wo[t])
            .filter((t) => !!t)),
          super(t, i));
      }
    }
    const Bo = "function" == typeof ArrayBuffer,
      Oo = Object.prototype.toString,
      No =
        "function" == typeof Blob ||
        ("undefined" != typeof Blob &&
          "[object BlobConstructor]" === Oo.call(Blob)),
      jo =
        "function" == typeof File ||
        ("undefined" != typeof File &&
          "[object FileConstructor]" === Oo.call(File));
    function Po(t) {
      return (
        (Bo &&
          (t instanceof ArrayBuffer ||
            ((t) =>
              "function" == typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : t.buffer instanceof ArrayBuffer)(t))) ||
        (No && t instanceof Blob) ||
        (jo && t instanceof File)
      );
    }
    function Ro(t, e) {
      if (!t || "object" != typeof t) return !1;
      if (Array.isArray(t)) {
        for (let e = 0, i = t.length; e < i; e++) if (Ro(t[e])) return !0;
        return !1;
      }
      if (Po(t)) return !0;
      if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length)
        return Ro(t.toJSON(), !0);
      for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e) && Ro(t[e])) return !0;
      return !1;
    }
    function Uo(t) {
      const e = [],
        i = t.data,
        n = t;
      return (
        (n.data = xo(i, e)),
        (n.attachments = e.length),
        { packet: n, buffers: e }
      );
    }
    function xo(t, e) {
      if (!t) return t;
      if (Po(t)) {
        const i = { Rt: !0, num: e.length };
        return (e.push(t), i);
      }
      if (Array.isArray(t)) {
        const i = new Array(t.length);
        for (let n = 0; n < t.length; n++) i[n] = xo(t[n], e);
        return i;
      }
      if ("object" == typeof t && !(t instanceof Date)) {
        const i = {};
        for (const n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (i[n] = xo(t[n], e));
        return i;
      }
      return t;
    }
    function Lo(t, e) {
      return ((t.data = Mo(t.data, e)), delete t.attachments, t);
    }
    function Mo(t, e) {
      if (!t) return t;
      if (t && !0 === t.Rt) {
        if ("number" == typeof t.num && t.num >= 0 && t.num < e.length)
          return e[t.num];
        throw new Error("illegal attachments");
      }
      if (Array.isArray(t))
        for (let i = 0; i < t.length; i++) t[i] = Mo(t[i], e);
      else if ("object" == typeof t)
        for (const i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (t[i] = Mo(t[i], e));
      return t;
    }
    const Vo = [
        "connect",
        "connect_error",
        "disconnect",
        "disconnecting",
        "newListener",
        "removeListener",
      ],
      $o = 5;
    var Ho;
    !(function (t) {
      ((t[(t.CONNECT = 0)] = "CONNECT"),
        (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
        (t[(t.EVENT = 2)] = "EVENT"),
        (t[(t.ACK = 3)] = "ACK"),
        (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (t[(t.BINARY_ACK = 6)] = "BINARY_ACK"));
    })(Ho || (Ho = {}));
    class Wo {
      constructor(t) {
        this.replacer = t;
      }
      encode(t) {
        return (t.type !== Ho.EVENT && t.type !== Ho.ACK) || !Ro(t)
          ? [this.encodeAsString(t)]
          : this.encodeAsBinary({
              type: t.type === Ho.EVENT ? Ho.BINARY_EVENT : Ho.BINARY_ACK,
              nsp: t.nsp,
              data: t.data,
              id: t.id,
            });
      }
      encodeAsString(t) {
        let e = "" + t.type;
        return (
          (t.type !== Ho.BINARY_EVENT && t.type !== Ho.BINARY_ACK) ||
            (e += t.attachments + "-"),
          t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
          null != t.id && (e += t.id),
          null != t.data && (e += JSON.stringify(t.data, this.replacer)),
          e
        );
      }
      encodeAsBinary(t) {
        const e = Uo(t),
          i = this.encodeAsString(e.packet),
          n = e.buffers;
        return (n.unshift(i), n);
      }
    }
    class zo extends Xr {
      constructor(t) {
        (super(), (this.reviver = t));
      }
      add(t) {
        let e;
        if ("string" == typeof t) {
          if (this.reconstructor)
            throw new Error("got plaintext data when reconstructing a packet");
          e = this.decodeString(t);
          const i = e.type === Ho.BINARY_EVENT;
          i || e.type === Ho.BINARY_ACK
            ? ((e.type = i ? Ho.EVENT : Ho.ACK),
              (this.reconstructor = new Go(e)),
              0 === e.attachments && super.emitReserved("decoded", e))
            : super.emitReserved("decoded", e);
        } else {
          if (!Po(t) && !t.base64) throw new Error("Unknown type: " + t);
          if (!this.reconstructor)
            throw new Error("got binary data when not reconstructing a packet");
          ((e = this.reconstructor.takeBinaryData(t)),
            e &&
              ((this.reconstructor = null), super.emitReserved("decoded", e)));
        }
      }
      decodeString(t) {
        let e = 0;
        const i = { type: Number(t.charAt(0)) };
        if (void 0 === Ho[i.type])
          throw new Error("unknown packet type " + i.type);
        if (i.type === Ho.BINARY_EVENT || i.type === Ho.BINARY_ACK) {
          const n = e + 1;
          for (; "-" !== t.charAt(++e) && e != t.length;);
          const s = t.substring(n, e);
          if (s != Number(s) || "-" !== t.charAt(e))
            throw new Error("Illegal attachments");
          i.attachments = Number(s);
        }
        if ("/" === t.charAt(e + 1)) {
          const n = e + 1;
          for (; ++e;) {
            if ("," === t.charAt(e)) break;
            if (e === t.length) break;
          }
          i.nsp = t.substring(n, e);
        } else i.nsp = "/";
        const n = t.charAt(e + 1);
        if ("" !== n && Number(n) == n) {
          const n = e + 1;
          for (; ++e;) {
            const i = t.charAt(e);
            if (null == i || Number(i) != i) {
              --e;
              break;
            }
            if (e === t.length) break;
          }
          i.id = Number(t.substring(n, e + 1));
        }
        if (t.charAt(++e)) {
          const n = this.tryParse(t.substr(e));
          if (!zo.isPayloadValid(i.type, n)) throw new Error("invalid payload");
          i.data = n;
        }
        return i;
      }
      tryParse(t) {
        try {
          return JSON.parse(t, this.reviver);
        } catch (t) {
          return !1;
        }
      }
      static isPayloadValid(t, e) {
        switch (t) {
          case Ho.CONNECT:
            return Jo(e);
          case Ho.DISCONNECT:
            return void 0 === e;
          case Ho.CONNECT_ERROR:
            return "string" == typeof e || Jo(e);
          case Ho.EVENT:
          case Ho.BINARY_EVENT:
            return (
              Array.isArray(e) &&
              ("number" == typeof e[0] ||
                ("string" == typeof e[0] && -1 === Vo.indexOf(e[0])))
            );
          case Ho.ACK:
          case Ho.BINARY_ACK:
            return Array.isArray(e);
        }
      }
      destroy() {
        this.reconstructor &&
          (this.reconstructor.finishedReconstruction(),
          (this.reconstructor = null));
      }
    }
    class Go {
      constructor(t) {
        ((this.packet = t), (this.buffers = []), (this.reconPack = t));
      }
      takeBinaryData(t) {
        if (
          (this.buffers.push(t),
          this.buffers.length === this.reconPack.attachments)
        ) {
          const t = Lo(this.reconPack, this.buffers);
          return (this.finishedReconstruction(), t);
        }
        return null;
      }
      finishedReconstruction() {
        ((this.reconPack = null), (this.buffers = []));
      }
    }
    const Zo =
      Number.isInteger ||
      function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
      };
    function Jo(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }
    function Yo(t) {
      return (
        "string" == typeof t.nsp &&
        (void 0 === (e = t.id) || Zo(e)) &&
        (function (t, e) {
          switch (t) {
            case Ho.CONNECT:
              return void 0 === e || Jo(e);
            case Ho.DISCONNECT:
              return void 0 === e;
            case Ho.EVENT:
              return (
                Array.isArray(e) &&
                ("number" == typeof e[0] ||
                  ("string" == typeof e[0] && -1 === Vo.indexOf(e[0])))
              );
            case Ho.ACK:
              return Array.isArray(e);
            case Ho.CONNECT_ERROR:
              return "string" == typeof e || Jo(e);
            default:
              return !1;
          }
        })(t.type, t.data)
      );
      var e;
    }
    function Ko(t, e, i) {
      return (
        t.on(e, i),
        function () {
          t.off(e, i);
        }
      );
    }
    const qo = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      newListener: 1,
      removeListener: 1,
    });
    class Xo extends Xr {
      constructor(t, e, i) {
        (super(),
          (this.connected = !1),
          (this.recovered = !1),
          (this.receiveBuffer = []),
          (this.sendBuffer = []),
          (this.Ut = []),
          (this.xt = 0),
          (this.ids = 0),
          (this.acks = {}),
          (this.flags = {}),
          (this.io = t),
          (this.nsp = e),
          i && i.auth && (this.auth = i.auth),
          (this.X = Object.assign({}, i)),
          this.io.Lt && this.open());
      }
      get disconnected() {
        return !this.connected;
      }
      subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
          Ko(t, "open", this.onopen.bind(this)),
          Ko(t, "packet", this.onpacket.bind(this)),
          Ko(t, "error", this.onerror.bind(this)),
          Ko(t, "close", this.onclose.bind(this)),
        ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        return (
          this.connected ||
            (this.subEvents(),
            this.io.Mt || this.io.open(),
            "open" === this.io.Vt && this.onopen()),
          this
        );
      }
      open() {
        return this.connect();
      }
      send(...t) {
        return (t.unshift("message"), this.emit.apply(this, t), this);
      }
      emit(t, ...e) {
        var i, n, s;
        if (qo.hasOwnProperty(t))
          throw new Error('"' + t.toString() + '" is a reserved event name');
        if (
          (e.unshift(t),
          this.X.retries && !this.flags.fromQueue && !this.flags.volatile)
        )
          return (this.$t(e), this);
        const r = { type: Ho.EVENT, data: e, options: {} };
        if (
          ((r.options.compress = !1 !== this.flags.compress),
          "function" == typeof e[e.length - 1])
        ) {
          const t = this.ids++,
            i = e.pop();
          (this.Ht(t, i), (r.id = t));
        }
        const o =
            null ===
              (n =
                null === (i = this.io.engine) || void 0 === i
                  ? void 0
                  : i.transport) || void 0 === n
              ? void 0
              : n.writable,
          u =
            this.connected &&
            !(null === (s = this.io.engine) || void 0 === s ? void 0 : s.Ot());
        return (
          (this.flags.volatile && !o) ||
            (u
              ? (this.notifyOutgoingListeners(r), this.packet(r))
              : this.sendBuffer.push(r)),
          (this.flags = {}),
          this
        );
      }
      Ht(t, e) {
        var i;
        const n =
          null !== (i = this.flags.timeout) && void 0 !== i
            ? i
            : this.X.ackTimeout;
        if (void 0 === n) return void (this.acks[t] = e);
        const s = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let e = 0; e < this.sendBuffer.length; e++)
              this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
            e.call(this, new Error("operation has timed out"));
          }, n),
          r = (...t) => {
            (this.io.clearTimeoutFn(s), e.apply(this, t));
          };
        ((r.withError = !0), (this.acks[t] = r));
      }
      emitWithAck(t, ...e) {
        return new Promise((i, n) => {
          const s = (t, e) => (t ? n(t) : i(e));
          ((s.withError = !0), e.push(s), this.emit(t, ...e));
        });
      }
      $t(t) {
        let e;
        "function" == typeof t[t.length - 1] && (e = t.pop());
        const i = {
          id: this.xt++,
          tryCount: 0,
          pending: !1,
          args: t,
          flags: Object.assign({ fromQueue: !0 }, this.flags),
        };
        (t.push((t, ...n) => {
          this.Ut[0];
          return (
            null !== t
              ? i.tryCount > this.X.retries && (this.Ut.shift(), e && e(t))
              : (this.Ut.shift(), e && e(null, ...n)),
            (i.pending = !1),
            this.Wt()
          );
        }),
          this.Ut.push(i),
          this.Wt());
      }
      Wt(t = !1) {
        if (!this.connected || 0 === this.Ut.length) return;
        const e = this.Ut[0];
        (e.pending && !t) ||
          ((e.pending = !0),
          e.tryCount++,
          (this.flags = e.flags),
          this.emit.apply(this, e.args));
      }
      packet(t) {
        ((t.nsp = this.nsp), this.io.zt(t));
      }
      onopen() {
        "function" == typeof this.auth
          ? this.auth((t) => {
              this.Gt(t);
            })
          : this.Gt(this.auth);
      }
      Gt(t) {
        this.packet({
          type: Ho.CONNECT,
          data: this.Zt
            ? Object.assign({ pid: this.Zt, offset: this.Jt }, t)
            : t,
        });
      }
      onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
      }
      onclose(t, e) {
        ((this.connected = !1),
          delete this.id,
          this.emitReserved("disconnect", t, e),
          this.Yt());
      }
      Yt() {
        Object.keys(this.acks).forEach((t) => {
          if (!this.sendBuffer.some((e) => String(e.id) === t)) {
            const e = this.acks[t];
            (delete this.acks[t],
              e.withError &&
                e.call(this, new Error("socket has been disconnected")));
          }
        });
      }
      onpacket(t) {
        if (t.nsp === this.nsp)
          switch (t.type) {
            case Ho.CONNECT:
              t.data && t.data.sid
                ? this.onconnect(t.data.sid, t.data.pid)
                : this.emitReserved(
                    "connect_error",
                    new Error(
                      "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                    ),
                  );
              break;
            case Ho.EVENT:
            case Ho.BINARY_EVENT:
              this.onevent(t);
              break;
            case Ho.ACK:
            case Ho.BINARY_ACK:
              this.onack(t);
              break;
            case Ho.DISCONNECT:
              this.ondisconnect();
              break;
            case Ho.CONNECT_ERROR:
              this.destroy();
              const e = new Error(t.data.message);
              ((e.data = t.data.data), this.emitReserved("connect_error", e));
          }
      }
      onevent(t) {
        const e = t.data || [];
        (null != t.id && e.push(this.ack(t.id)),
          this.connected
            ? this.emitEvent(e)
            : this.receiveBuffer.push(Object.freeze(e)));
      }
      emitEvent(t) {
        if (this.Kt && this.Kt.length) {
          const e = this.Kt.slice();
          for (const i of e) i.apply(this, t);
        }
        (super.emit.apply(this, t),
          this.Zt &&
            t.length &&
            "string" == typeof t[t.length - 1] &&
            (this.Jt = t[t.length - 1]));
      }
      ack(t) {
        const e = this;
        let i = !1;
        return function (...n) {
          i || ((i = !0), e.packet({ type: Ho.ACK, id: t, data: n }));
        };
      }
      onack(t) {
        const e = this.acks[t.id];
        "function" == typeof e &&
          (delete this.acks[t.id],
          e.withError && t.data.unshift(null),
          e.apply(this, t.data));
      }
      onconnect(t, e) {
        ((this.id = t),
          (this.recovered = e && this.Zt === e),
          (this.Zt = e),
          (this.connected = !0),
          this.emitBuffered(),
          this.Wt(!0),
          this.emitReserved("connect"));
      }
      emitBuffered() {
        (this.receiveBuffer.forEach((t) => this.emitEvent(t)),
          (this.receiveBuffer = []),
          this.sendBuffer.forEach((t) => {
            (this.notifyOutgoingListeners(t), this.packet(t));
          }),
          (this.sendBuffer = []));
      }
      ondisconnect() {
        (this.destroy(), this.onclose("io server disconnect"));
      }
      destroy() {
        (this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
          this.io.qt(this));
      }
      disconnect() {
        return (
          this.connected && this.packet({ type: Ho.DISCONNECT }),
          this.destroy(),
          this.connected && this.onclose("io client disconnect"),
          this
        );
      }
      close() {
        return this.disconnect();
      }
      compress(t) {
        return ((this.flags.compress = t), this);
      }
      get volatile() {
        return ((this.flags.volatile = !0), this);
      }
      timeout(t) {
        return ((this.flags.timeout = t), this);
      }
      onAny(t) {
        return ((this.Kt = this.Kt || []), this.Kt.push(t), this);
      }
      prependAny(t) {
        return ((this.Kt = this.Kt || []), this.Kt.unshift(t), this);
      }
      offAny(t) {
        if (!this.Kt) return this;
        if (t) {
          const e = this.Kt;
          for (let i = 0; i < e.length; i++)
            if (t === e[i]) return (e.splice(i, 1), this);
        } else this.Kt = [];
        return this;
      }
      listenersAny() {
        return this.Kt || [];
      }
      onAnyOutgoing(t) {
        return ((this.Xt = this.Xt || []), this.Xt.push(t), this);
      }
      prependAnyOutgoing(t) {
        return ((this.Xt = this.Xt || []), this.Xt.unshift(t), this);
      }
      offAnyOutgoing(t) {
        if (!this.Xt) return this;
        if (t) {
          const e = this.Xt;
          for (let i = 0; i < e.length; i++)
            if (t === e[i]) return (e.splice(i, 1), this);
        } else this.Xt = [];
        return this;
      }
      listenersAnyOutgoing() {
        return this.Xt || [];
      }
      notifyOutgoingListeners(t) {
        if (this.Xt && this.Xt.length) {
          const e = this.Xt.slice();
          for (const i of e) i.apply(this, t.data);
        }
      }
    }
    function Qo(t) {
      ((t = t || {}),
        (this.ms = t.min || 100),
        (this.max = t.max || 1e4),
        (this.factor = t.factor || 2),
        (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
        (this.attempts = 0));
    }
    ((Qo.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          i = Math.floor(e * this.jitter * t);
        t = 1 & Math.floor(10 * e) ? t + i : t - i;
      }
      return 0 | Math.min(t, this.max);
    }),
      (Qo.prototype.reset = function () {
        this.attempts = 0;
      }),
      (Qo.prototype.setMin = function (t) {
        this.ms = t;
      }),
      (Qo.prototype.setMax = function (t) {
        this.max = t;
      }),
      (Qo.prototype.setJitter = function (t) {
        this.jitter = t;
      }));
    class tu extends Xr {
      constructor(e, i) {
        var n;
        (super(),
          (this.nsps = {}),
          (this.subs = []),
          e && "object" == typeof e && ((i = e), (e = void 0)),
          ((i = i || {}).path = i.path || "/socket.io"),
          (this.opts = i),
          so(this, i),
          this.reconnection(!1 !== i.reconnection),
          this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(i.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3),
          this.randomizationFactor(
            null !== (n = i.randomizationFactor) && void 0 !== n ? n : 0.5,
          ),
          (this.backoff = new Qo({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
          })),
          this.timeout(null == i.timeout ? 2e4 : i.timeout),
          (this.Vt = "closed"),
          (this.uri = e));
        const s = i.parser || t;
        ((this.encoder = new s.Encoder()),
          (this.decoder = new s.Decoder()),
          (this.Lt = !1 !== i.autoConnect),
          this.Lt && this.open());
      }
      reconnection(t) {
        return arguments.length
          ? ((this.Qt = !!t), t || (this.skipReconnect = !0), this)
          : this.Qt;
      }
      reconnectionAttempts(t) {
        return void 0 === t ? this.te : ((this.te = t), this);
      }
      reconnectionDelay(t) {
        var e;
        return void 0 === t
          ? this.ee
          : ((this.ee = t),
            null === (e = this.backoff) || void 0 === e || e.setMin(t),
            this);
      }
      randomizationFactor(t) {
        var e;
        return void 0 === t
          ? this.ie
          : ((this.ie = t),
            null === (e = this.backoff) || void 0 === e || e.setJitter(t),
            this);
      }
      reconnectionDelayMax(t) {
        var e;
        return void 0 === t
          ? this.ne
          : ((this.ne = t),
            null === (e = this.backoff) || void 0 === e || e.setMax(t),
            this);
      }
      timeout(t) {
        return arguments.length ? ((this.se = t), this) : this.se;
      }
      maybeReconnectOnOpen() {
        !this.Mt && this.Qt && 0 === this.backoff.attempts && this.reconnect();
      }
      open(t) {
        if (~this.Vt.indexOf("open")) return this;
        this.engine = new To(this.uri, this.opts);
        const e = this.engine,
          i = this;
        ((this.Vt = "opening"), (this.skipReconnect = !1));
        const n = Ko(e, "open", function () {
            (i.onopen(), t && t());
          }),
          s = (e) => {
            (this.cleanup(),
              (this.Vt = "closed"),
              this.emitReserved("error", e),
              t ? t(e) : this.maybeReconnectOnOpen());
          },
          r = Ko(e, "error", s);
        if (!1 !== this.se) {
          const t = this.se,
            i = this.setTimeoutFn(() => {
              (n(), s(new Error("timeout")), e.close());
            }, t);
          (this.opts.autoUnref && i.unref(),
            this.subs.push(() => {
              this.clearTimeoutFn(i);
            }));
        }
        return (this.subs.push(n), this.subs.push(r), this);
      }
      connect(t) {
        return this.open(t);
      }
      onopen() {
        (this.cleanup(), (this.Vt = "open"), this.emitReserved("open"));
        const t = this.engine;
        this.subs.push(
          Ko(t, "ping", this.onping.bind(this)),
          Ko(t, "data", this.ondata.bind(this)),
          Ko(t, "error", this.onerror.bind(this)),
          Ko(t, "close", this.onclose.bind(this)),
          Ko(this.decoder, "decoded", this.ondecoded.bind(this)),
        );
      }
      onping() {
        this.emitReserved("ping");
      }
      ondata(t) {
        try {
          this.decoder.add(t);
        } catch (t) {
          this.onclose("parse error", t);
        }
      }
      ondecoded(t) {
        Qr(() => {
          this.emitReserved("packet", t);
        }, this.setTimeoutFn);
      }
      onerror(t) {
        this.emitReserved("error", t);
      }
      socket(t, e) {
        let i = this.nsps[t];
        return (
          i
            ? this.Lt && !i.active && i.connect()
            : ((i = new Xo(this, t, e)), (this.nsps[t] = i)),
          i
        );
      }
      qt(t) {
        const e = Object.keys(this.nsps);
        for (const t of e) {
          if (this.nsps[t].active) return;
        }
        this.re();
      }
      zt(t) {
        const e = this.encoder.encode(t);
        for (let i = 0; i < e.length; i++) this.engine.write(e[i], t.options);
      }
      cleanup() {
        (this.subs.forEach((t) => t()),
          (this.subs.length = 0),
          this.decoder.destroy());
      }
      re() {
        ((this.skipReconnect = !0),
          (this.Mt = !1),
          this.onclose("forced close"));
      }
      disconnect() {
        return this.re();
      }
      onclose(t, e) {
        var i;
        (this.cleanup(),
          null === (i = this.engine) || void 0 === i || i.close(),
          this.backoff.reset(),
          (this.Vt = "closed"),
          this.emitReserved("close", t, e),
          this.Qt && !this.skipReconnect && this.reconnect());
      }
      reconnect() {
        if (this.Mt || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this.te)
          (this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            (this.Mt = !1));
        else {
          const e = this.backoff.duration();
          this.Mt = !0;
          const i = this.setTimeoutFn(() => {
            t.skipReconnect ||
              (this.emitReserved("reconnect_attempt", t.backoff.attempts),
              t.skipReconnect ||
                t.open((e) => {
                  e
                    ? ((t.Mt = !1),
                      t.reconnect(),
                      this.emitReserved("reconnect_error", e))
                    : t.onreconnect();
                }));
          }, e);
          (this.opts.autoUnref && i.unref(),
            this.subs.push(() => {
              this.clearTimeoutFn(i);
            }));
        }
      }
      onreconnect() {
        const t = this.backoff.attempts;
        ((this.Mt = !1),
          this.backoff.reset(),
          this.emitReserved("reconnect", t));
      }
    }
    const eu = {};
    function iu(t, e) {
      "object" == typeof t && ((e = t), (t = void 0));
      const i = (function (t, e = "", i) {
          let n = t;
          ((i = i || ("undefined" != typeof location && location)),
            null == t && (t = i.protocol + "//" + i.host),
            "string" == typeof t &&
              ("/" === t.charAt(0) &&
                (t = "/" === t.charAt(1) ? i.protocol + t : i.host + t),
              /^(https?|wss?):\/\//.test(t) ||
                (t = void 0 !== i ? i.protocol + "//" + t : "https://" + t),
              (n = Co(t))),
            n.port ||
              (/^(http|ws)$/.test(n.protocol)
                ? (n.port = "80")
                : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
            (n.path = n.path || "/"));
          const s = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
          return (
            (n.id = n.protocol + "://" + s + ":" + n.port + e),
            (n.href =
              n.protocol +
              "://" +
              s +
              (i && i.port === n.port ? "" : ":" + n.port)),
            n
          );
        })(t, (e = e || {}).path || "/socket.io"),
        n = i.source,
        s = i.id,
        r = i.path,
        o = eu[s] && r in eu[s].nsps;
      let u;
      return (
        e.forceNew || e["force new connection"] || !1 === e.multiplex || o
          ? (u = new tu(n, e))
          : (eu[s] || (eu[s] = new tu(n, e)), (u = eu[s])),
        i.query && !e.query && (e.query = i.queryKey),
        u.socket(i.path, e)
      );
    }
    var nu;
    (Object.assign(iu, { Manager: tu, Socket: Xo, io: iu, connect: iu }),
      (function (t) {
        ((t.CREATE_SESSION = "createSession"),
          (t.SCHEDULE_SESSION = "scheduleSession"),
          (t.CREATE_TEMP_SESSION = "createTempSession"),
          (t.JOIN_SESSION = "joinSession"),
          (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE_MESSAGE = "nextEpisode"),
          (t.REBOOT_MESSAGE = "reboot"),
          (t.SEND_MESSAGE = "sendMessage"),
          (t.JUMP_TO_NEXT_EPISODE = "jumpToNextEpisode"),
          (t.BUFFERING_MESSAGE = "buffering"),
          (t.TYPING_MESSAGE = "typing"),
          (t.SET_BUFFERING_PRESENCE = "setBufferingPresence"),
          (t.SET_TYPING_PRESENCE = "setTypingPresence"),
          (t.BROADCAST_USER_SETTINGS = "broadcastUserSettings"),
          (t.UPDATE_SETTINGS_MESSAGE = "updateSettings"),
          (t.SET_ADS_PRESENCE = "setAdsPresence"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.LEAVE_SESSION = "leaveSession"),
          (t.SEND_REACTION = "sendReaction"),
          (t.SEND_GIF = "sendGIF"),
          (t.SIGN_IN = "signIn"),
          (t.USER_LIST = "userList"),
          (t.WEB_RTC = "webRTC"),
          (t.AUTHENTICATE_USER = "authenticateUser"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.VALIDATION = "validation"),
          (t.PARTY_STARTED = "partyStarted"),
          (t.PARTY_ENDED = "partyEnded"),
          (t.SELECT_PROVIDER = "selectProvider"),
          (t.REPORT_STREAM_POSITION = "reportStreamPosition"),
          (t.PROVIDER_OFFSETS_UPDATED = "providerOffsetsUpdated"));
      })(nu || (nu = {})));
    var su,
      ru,
      ou,
      uu = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function u(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, u);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class au {
      constructor(t, e, i, n) {
        ((this.oe = !1),
          (this.ue = 0),
          (this.ae = !1),
          (this.ce = !1),
          (this.de = !0),
          (this.le = "rfb"),
          (this.he = e),
          (this.fe = t),
          (this.De = 0),
          (this.ve = new Tr()),
          (this.pe = n),
          (this.be = new WebSocket(this.fe)),
          this.me(),
          (this.ge = setTimeout(this._e.bind(this), 5e3)),
          (this.ye = i));
      }
      getId() {
        return this.we;
      }
      getType() {
        return void 0 !== this.be ? "uws" : "socket.io";
      }
      getTransport() {
        var t;
        return void 0 !== this.be
          ? "websocket"
          : null === (t = this.Fe) || void 0 === t
            ? void 0
            : t.io.engine.transport.name;
      }
      getSocketStartTime() {
        return this.Ee;
      }
      Ce() {
        return {
          id: this.getId(),
          type: this.getType(),
          transport: this.getTransport(),
          start_time_ms: this.getSocketStartTime(),
        };
      }
      _e() {
        var t, e;
        (null === (t = this.Fe) || void 0 === t || t.disconnect(),
          null === (e = this.be) || void 0 === e || e.close(kr),
          console.log("Connect timed out, switching servers"));
        const i = {
          name: "socket_error",
          action: {
            description: this.ce
              ? "socket.io"
              : "uws failed to connect in time",
            reason: "connect timed out",
          },
          socket_session: this.Ce(),
        };
        (hf.logEventForTabId(i, this.ye), this.Ae());
      }
      get dropInToggled() {
        return this.oe;
      }
      set dropInToggled(t) {
        this.oe = t;
      }
      get sessionId() {
        return this.Ie;
      }
      get tempSessionId() {
        return this.Se;
      }
      set tempSessionId(t) {
        ((this.Se = t), this.he.loadTempSessionId(t));
      }
      loadSessionData(t, e) {
        ((this.Ie = t.sessionId), this.he.loadSessionData(t, e));
      }
      clearSessionData() {
        ((this.Ie = void 0), this.he.clearSessionData());
      }
      getCurrentSessionData() {
        return this.he.getSessionData();
      }
      me() {
        this.be &&
          ((this.be.onmessage = this.ke.bind(this)),
          (this.be.onclose = this.Ft.bind(this)),
          (this.be.onerror = this.ot.bind(this)),
          (this.be.onopen = this.Te.bind(this)),
          (this.Be = setInterval(this.Oe.bind(this), 15e3)));
      }
      Ne() {
        this.Fe &&
          (this.Fe.on("connect", () => {
            this.Te();
          }),
          this.Fe.on("connect_error", (t) => {
            (console.log(`connect_error due to ${t.message}`), $(t));
            const e = {
              name: "socket_error",
              action: {
                description: t.message,
                reason: "socket reported error.",
              },
              socket_session: this.Ce(),
            };
            hf.logEventForTabId(e, this.ye);
          }),
          this.Fe.on("disconnect", (t) => {
            (this.je(),
              $("Socket io disconnect"),
              this.Be && clearInterval(this.Be),
              $("Websocket lost connection: " + t));
            const e = {
              name: "socket_close",
              action: { description: "socket.io socket closed", reason: t },
              socket_session: this.Ce(),
            };
            if ((hf.logEventForTabId(e, this.ye), "io client disconnect" !== t))
              this.Ae();
            else if (this.Ie) {
              const t = {
                name: "party_disconnect",
                action: { reason: "party disconnected manually." },
                socket_session: this.Ce(),
              };
              hf.logEventForTabId(t, this.ye);
            }
          }),
          this.Fe.on("message", (t) => {
            var e;
            if ("ping" === t)
              null === (e = this.Fe) || void 0 === e || e.emit("pong");
            else {
              const e = JSON.parse(t);
              this.Pe(e);
            }
          }));
      }
      Oe() {
        var t;
        1 == (null === (t = this.be) || void 0 === t ? void 0 : t.readyState) &&
          this.be.send(JSON.stringify({ type: "ping" }));
      }
      Te() {
        (console.log("TRYING OPEN"), (this.Ee = Date.now()), this.je());
        const t = { name: "socket_open", socket_session: this.Ce() };
        if ((hf.logEventForTabId(t, this.ye), this.Re)) {
          (clearTimeout(this.Re), (this.we = void 0), (this.ae = !0));
          const t = {
            name: "party_reconnect",
            action: {
              description:
                "party reconnected using " +
                (this.ce ? "socket.io" : "uws") +
                " after " +
                this.De +
                " attempts.",
              reason: "party reconnected.",
            },
            socket_session: this.Ce(),
          };
          hf.logEventForTabId(t, this.ye);
        }
        (this.Ue(),
          this.pe &&
            this.sendMessage(nu.AUTHENTICATE_USER, { firebaseToken: this.pe }));
      }
      Ue() {
        (this.Re && clearTimeout(this.Re), (this.Re = void 0), (this.De = 0));
      }
      je() {
        (console.log("Clearing connect timeout"),
          this.ge && clearTimeout(this.ge));
      }
      Ft(t) {
        this.je();
        const e = {
          name: "socket_close",
          action: { description: "uws socket closed", reason: String(t.code) },
          socket_session: this.Ce(),
        };
        if ((hf.logEventForTabId(e, this.ye), t.code !== kr)) {
          if (($("Websocket lost connection"), 1007 === t.code)) {
            const e = {
              sessionId: this.Ie,
              eventType: "socket-close-" + t.code,
            };
            hf.logOldEventAsync(e);
          }
          this.Ae();
        } else {
          if (this.Ie) {
            const t = {
              name: "party_disconnect",
              action: { reason: "party disconnected manually." },
              socket_session: this.Ce(),
            };
            hf.logEventForTabId(t, this.ye);
          }
          $("Websocket connection closed manually");
        }
      }
      xe() {
        return 1e3 * Math.pow(2, this.De);
      }
      Ae() {
        if (this.de)
          if ((this.Le(), this.De++, this.De > 10)) this.he.onReconnectFailed();
          else {
            let t = this.xe();
            ($("Recreating socket with delay: " + t),
              void 0 === this.we && this.De <= 2 && (t = 500),
              (this.Re = setTimeout(this.Me.bind(this), t)));
          }
      }
      Ve() {
        if (
          (this.Be && (clearInterval(this.Be), (this.Be = void 0)), this.be)
        ) {
          ((this.be.onmessage = null),
            (this.be.onclose = null),
            (this.be.onerror = null),
            (this.be.onopen = null));
          const t = this.be.readyState;
          ((t !== WebSocket.OPEN && t !== WebSocket.CONNECTING) ||
            this.be.close(kr),
            (this.be = void 0));
        }
        this.Fe &&
          (this.Fe.removeAllListeners(),
          this.Fe.disconnect(),
          (this.Fe = void 0));
      }
      Me() {
        try {
          (this.ue >= 3 || this.De > 1 ? (this.ce = !this.ce) : (this.ce = !1),
            this.Ve());
          const t = {
            name: "socket_reconnect_attempt",
            action: {
              description:
                "attempting to reconnect using " +
                (this.ce ? "socket.io" : "uws"),
              reason: "reconnecting after socket disconnect",
            },
            socket_session: this.Ce(),
          };
          (hf.logEventForTabId(t, this.ye),
            this.ce
              ? ((this.Fe = iu("https://socketio.teleparty.com", {
                  reconnection: !1,
                  withCredentials: !0,
                })),
                this.Ne())
              : ((this.be = new WebSocket(this.fe)), this.me()),
            this.je(),
            (this.ge = setTimeout(this._e.bind(this), 5e3)));
        } catch (t) {
          console.warn(
            "Failed to recreate socket: " +
              (10 - this.De) +
              " attempts remaining",
          );
        }
      }
      Le() {
        this.ue += 1;
      }
      ot(t) {
        $("WebSocket error observed:", t);
        const e = {
          name: "socket_error",
          action: {
            description: "uws socket error",
            reason: "socket reported error.",
          },
          socket_session: this.Ce(),
        };
        hf.logEventForTabId(e, this.ye);
      }
      ke(t) {
        try {
          const e = JSON.parse(t.data);
          this.Pe(e);
        } catch (t) {
          $("An error occured while parsing a message from the server");
        }
      }
      Pe(t) {
        "userId" === t.type
          ? this.$e(t.data.userId)
          : t.callbackId
            ? this.ve.executeCallback(t.callbackId, t.data)
            : this.he.onMessage(t);
      }
      $e(t) {
        ($("User id:  " + t),
          null == this.we &&
            ((this.we = t),
            this.he.setUserId(t),
            this.ae && ((this.ae = !1), this.he.onReconnect())));
      }
      teardown() {
        var t, e;
        (console.log("Teardown called"), (this.de = !1));
        try {
          (null === (t = this.be) || void 0 === t || t.close(kr),
            null === (e = this.Fe) || void 0 === e || e.disconnect());
        } catch (t) {}
        ((this.we = ""),
          (this.Ie = ""),
          (this.Se = ""),
          this.Re && clearTimeout(this.Re),
          this.Be && clearInterval(this.Be));
      }
      sendMessage(t, e, i) {
        var n, s;
        let r = "null";
        i && (r = this.ve.addCallback(i));
        const o = this.He(t, e, r),
          u = JSON.stringify(o);
        this.ce
          ? null === (n = this.Fe) || void 0 === n || n.send(u)
          : null === (s = this.be) || void 0 === s || s.send(u);
      }
      He(t, e, i) {
        return { type: t, data: e, callbackId: i };
      }
      signIn(t) {
        return uu(this, void 0, void 0, function* () {
          return this.sendMessage(nu.SIGN_IN, { token: t });
        });
      }
      getUserIdAsync() {
        var t;
        return uu(this, void 0, void 0, function* () {
          this.Re && (this.Ue(), this.Me());
          try {
            return (
              yield (function (t, e, i = 250) {
                return function () {
                  const n = new Date().getTime(),
                    s = function () {
                      return Rn(this, void 0, void 0, function* () {
                        return (yield t())
                          ? Promise.resolve()
                          : null !== e && new Date().getTime() - n > e
                            ? Promise.reject(
                                new Error("delayUntil timed out: " + t),
                              )
                            : Ln(i)().then(s);
                      });
                    };
                  return s();
                };
              })(() => null != this.we, 2e4)(),
              null !== (t = this.we) && void 0 !== t ? t : ""
            );
          } catch (t) {
            const e = {
              name: "connection_error",
              action: { description: t, reason: "failed to get user id" },
              socket_session: this.Ce(),
            };
            hf.logEventForTabId(e, this.ye);
            const i = { sessionId: this.Ie, eventType: "connection-fail" };
            throw (
              hf.logOldEventAsync(i),
              new Error(
                "Could not connect to the server. Please refresh the page and try again.",
              )
            );
          }
        });
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
    })(su || (su = {}));
    class cu {
      constructor(t, e, i) {
        ((this.sender = t), (this.target = e), (this.type = i));
      }
    }
    class du extends cu {
      constructor(t, e, i) {
        (super(t, e, i), (this.type = i));
      }
    }
    class lu extends du {
      constructor(t, e, i) {
        (super(t, e, su.USER_AUTHENTICATED), (this.data = i));
      }
    }
    class hu extends cu {
      constructor(t, e, i) {
        (super(t, e, i), (this.type = i));
      }
    }
    !(function (t) {
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
    })(ru || (ru = {}));
    class fu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_MESSAGE), (this.data = i));
      }
    }
    class Du extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_REACTION), (this.data = i));
      }
    }
    class vu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.UPDATE_SETTINGS), (this.data = i));
      }
    }
    class pu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_BUFFER), (this.data = i));
      }
    }
    class bu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_TYPING), (this.data = i));
      }
    }
    class mu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_WATCHING_ADS), (this.data = i));
      }
    }
    class gu extends cu {
      constructor(t, e, i) {
        (super(t, e, i), (this.type = i));
      }
    }
    !(function (t) {
      ((t.UPDATE_SESSION = "updateSession"),
        (t.NEXT_EPISODE = "nextEpisode"),
        (t.REBOOT_SESSION = "rebootSession"),
        (t.GET_SERVER_TIME = "getServerTime"),
        (t.RELOAD_PARTY = "reloadParty"),
        (t.PARTY_PHASE = "partyPhase"));
    })(ou || (ou = {}));
    class _u extends gu {
      constructor(t, e, i) {
        (super(t, e, ou.UPDATE_SESSION), (this.data = i));
      }
    }
    const yu = new (class {
      constructor() {
        this.We = new Map();
      }
      getTabForSessionId(t) {
        for (const e of this.We.keys()) {
          const i = this.We.get(e);
          if ((null == i ? void 0 : i.tempSessionId) === t) return e;
        }
      }
      getAllSockets() {
        return this.We.values();
      }
      setSocketForTabId(t, e) {
        const i = this.We.get(t);
        (i && i !== e && i.teardown(), this.We.set(t, e));
      }
      getSocketForTabId(t) {
        return this.We.get(t);
      }
      findSocketsWithActiveParty() {
        var t;
        const e = [];
        for (const [i, n] of this.We)
          (null === (t = n.getCurrentSessionData()) || void 0 === t
            ? void 0
            : t.sessionId) && e.push({ tabId: i, socket: n });
        return e;
      }
      containsSocketForTabId(t) {
        return this.We.has(t);
      }
      removeSocketForTabId(t) {
        this.We.delete(t);
      }
      teardown() {
        (this.We.forEach((t) => {
          t.teardown();
        }),
          this.We.clear());
      }
    })();
    Object.freeze(yu);
    const wu = yu;
    class Fu {
      loadSessionData(t, e) {
        ((this.ze = t),
          this.ze &&
            ((this.ze.userSettings = e),
            this.ze.messages || (this.ze.messages = [])));
      }
      get sessionData() {
        return this.ze;
      }
      set sessionData(t) {
        this.ze = t;
      }
    }
    class Eu extends gu {
      constructor(t, e, i) {
        (super(t, e, ou.NEXT_EPISODE), (this.data = i));
      }
    }
    class Cu extends gu {
      constructor(t, e, i) {
        (super(t, e, ou.REBOOT_SESSION), (this.data = i));
      }
    }
    class Au extends gu {
      constructor(t, e, i) {
        (super(t, e, ou.PARTY_PHASE), (this.data = i));
      }
    }
    class Iu extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_GIF), (this.data = i));
      }
    }
    class Su extends hu {
      constructor(t, e, i, n) {
        (super(t, e, ru.USER_LIST),
          (this.data = { userList: i, socketConnectionId: n }));
      }
    }
    class ku extends hu {
      constructor(t, e, i) {
        (super(t, e, ru.ON_WEB_RTC), (this.data = i));
      }
    }
    function Tu(t, e, i) {
      const n = {
        type: "telepartyLobbyRelayPush",
        tabId: t,
        event: e,
        payload: i,
      };
      chrome.runtime.sendMessage(n).catch(() => {});
    }
    class Bu {
      constructor(t) {
        ((this.ye = t), (this.Ge = new Fu()));
      }
      setUserId(t) {
        ((this.we = t),
          this.Ge.sessionData &&
            ((this.Ge.sessionData.socketConnectionId = t),
            (this.Ge.sessionData.userId = t)));
      }
      onMessage(t) {
        switch (t.type) {
          case nu.SEND_MESSAGE:
            this.Ze(t);
            break;
          case nu.SET_BUFFERING_PRESENCE:
            this.Je(t);
            break;
          case nu.SET_TYPING_PRESENCE:
            this.Ye(t);
            break;
          case nu.SET_ADS_PRESENCE:
            this.Ke(t);
            break;
          case nu.UPDATE_SETTINGS_MESSAGE:
            this.qe(t);
            break;
          case nu.UPDATE_SESSION:
            this.Xe(t);
            break;
          case nu.JUMP_TO_NEXT_EPISODE:
            this.Qe(t);
            break;
          case nu.SEND_REACTION:
            this.ti(t);
            break;
          case nu.SEND_GIF:
            this.ei(t);
            break;
          case nu.WEB_RTC:
            this.ii(t);
            break;
          case nu.USER_LIST:
            this.ni(t);
            break;
          case nu.USER_AUTHENTICATED:
            this.si(t);
            break;
          case nu.PARTY_STARTED:
            this.ri(t, "live");
            break;
          case nu.PARTY_ENDED:
            this.ri(t, "ended");
            break;
          case nu.PROVIDER_OFFSETS_UPDATED:
            this.oi(t);
        }
      }
      getSessionData() {
        return this.Ge.sessionData;
      }
      loadSessionData(t, e) {
        this.Ge.loadSessionData(t, e);
      }
      clearSessionData() {
        this.Ge.sessionData = void 0;
      }
      loadTempSessionId(t) {
        this.Se = t;
      }
      onReconnectFailed() {
        const t = new gu(L, V, ou.RELOAD_PARTY);
        (wu.removeSocketForTabId(this.ye), W.sendMessageToTabAsync(t, this.ye));
      }
      setDataManager(t) {
        this.Ge = t;
      }
      onConnect() {
        $("Connected to server");
      }
      onReconnect() {
        const t = wu.getSocketForTabId(this.ye);
        this.Ge.sessionData &&
          (null == t ||
            t.sendMessage(nu.REBOOT_MESSAGE, this.Ge.sessionData, (t) => {
              if (!t || t.errorMessage)
                (t && console.log(t.errorMessage), this.onReconnectFailed());
              else {
                const e = new Cu(L, V, t);
                W.sendMessageToTabAsync(e, this.ye).then((t) => {
                  t || this.onReconnectFailed();
                });
              }
            }));
      }
      Ze(t) {
        var e, i, n;
        const s = null === (e = t.data) || void 0 === e ? void 0 : e.messageId;
        if (
          s &&
          (null === (i = this.Ge.sessionData) || void 0 === i
            ? void 0
            : i.messages.some((t) => t.messageId === s))
        )
          return;
        const r = new fu(L, V, t.data);
        (W.sendMessageToTabAsync(r, this.ye),
          null === (n = this.Ge.sessionData) ||
            void 0 === n ||
            n.messages.push(r.data),
          Tu(this.ye, "chat", t.data));
      }
      Je(t) {
        const e = new pu(L, V, t.data);
        ((e.data.usersBuffering = e.data.usersBuffering.filter(
          (t) => t != this.we,
        )),
          W.sendMessageToTabAsync(e, this.ye));
      }
      Ye(t) {
        const e = new bu(L, V, t.data);
        ((e.data.usersTyping = e.data.usersTyping.filter((t) => t != this.we)),
          W.sendMessageToTabAsync(e, this.ye),
          Tu(this.ye, "typing", t.data));
      }
      ti(t) {
        const e = new Du(L, V, t.data);
        W.sendMessageToTabAsync(e, this.ye);
      }
      ii(t) {
        const e = new ku(L, V, t.data);
        W.sendMessageToTabAsync(e, this.ye);
      }
      ei(t) {
        var e, i, n;
        const s = null === (e = t.data) || void 0 === e ? void 0 : e.messageId;
        if (
          s &&
          (null === (i = this.Ge.sessionData) || void 0 === i
            ? void 0
            : i.messages.some((t) => t.messageId === s))
        )
          return;
        const r = new Iu(L, V, t.data);
        (W.sendMessageToTabAsync(r, this.ye),
          null === (n = this.Ge.sessionData) ||
            void 0 === n ||
            n.messages.push(r.data));
      }
      Ke(t) {
        const e = new mu(L, V, t.data);
        ((e.data.usersWatchingAds = e.data.usersWatchingAds.filter(
          (t) => t != this.we,
        )),
          W.sendMessageToTabAsync(e, this.ye));
      }
      qe(t) {
        const e = new vu(L, V, t.data);
        (W.sendMessageToTabAsync(e, this.ye),
          this.Ge.sessionData &&
            this.Ge.sessionData.permId == e.data.permId &&
            (this.Ge.sessionData.userSettings, e.data.userSettings));
      }
      Xe(t) {
        const e = new _u(L, V, t.data);
        (W.sendMessageToTabAsync(e, this.ye),
          this.Ge.sessionData &&
            ((this.Ge.sessionData.state = e.data.state),
            (this.Ge.sessionData.lastKnownTime = e.data.lastKnownTime),
            (this.Ge.sessionData.lastKnownTimeUpdatedAt =
              e.data.lastKnownTimeUpdatedAt),
            e.data.providerOffsets &&
              (this.Ge.sessionData.providerOffsets = e.data.providerOffsets)),
          Tu(this.ye, "updateSession", t.data));
      }
      oi(t) {
        (this.Ge.sessionData &&
          t.data &&
          (this.Ge.sessionData.providerOffsets = t.data),
          Tu(this.ye, "providerOffsetsUpdated", t.data));
      }
      Qe(t) {
        const e = new Eu(L, V, t.data);
        (W.sendMessageToTabAsync(e, this.ye),
          this.Ge.sessionData &&
            ((this.Ge.sessionData.videoId = e.data.videoId),
            void 0 !== e.data.videoType &&
              (this.Ge.sessionData.videoType = e.data.videoType)));
      }
      ni(t) {
        var e;
        (console.log("GOT USER LIST", t.data),
          this.Ge.sessionData && (this.Ge.sessionData.userList = t.data));
        const i = new Su(
          L,
          V,
          t.data,
          null !== (e = this.we) && void 0 !== e ? e : "",
        );
        (W.sendMessageToTabAsync(i, this.ye),
          hf.updateShareList(i),
          Tu(this.ye, "userList", t.data));
      }
      si(t) {
        console.log("GOT USER AUTH", t.data);
        const e = new lu(L, V, t.data);
        (W.p(e), hf.updateShareListFirebaseId(e));
      }
      ri(t, e) {
        var i, n, s;
        const r = null === (i = t.data) || void 0 === i ? void 0 : i.phase,
          o = (function (t) {
            return "lobby" === t || "live" === t || "ended" === t;
          })(r)
            ? r
            : e;
        this.Ge.sessionData && (this.Ge.sessionData.phase = o);
        const u = {
            phase: o,
            actualStartedAt:
              null === (n = t.data) || void 0 === n
                ? void 0
                : n.actualStartedAt,
            actualEndedAt:
              null === (s = t.data) || void 0 === s ? void 0 : s.actualEndedAt,
          },
          a = new Au(L, V, u);
        (W.sendMessageToTabAsync(a, this.ye), Tu(this.ye, "partyPhase", u));
      }
    }
    class Ou {
      constructor(t) {
        this.ye = t;
      }
      createSocketForTab(t) {
        const e = new Bu(this.ye),
          i = new au(s, e, this.ye, t);
        return ($("Created Socket with url: " + s), i);
      }
    }
    const Nu = [
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
      ju = [
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
      Pu = [
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
      ];
    function Ru(t) {
      return t
        ? t
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/[\r\n]{3,}/gm, "\n\n")
            .replace(
              P,
              `<span style="font-size: ${(function (t) {
                let e = 16;
                const i = t.replace(P, "").replace(/[\uFE0F]/g, ""),
                  n = ((t || "").match(P) || []).length;
                return (0 === i.length && n <= 3 && (e = 32), e);
              })(t)}px">$&</span>`,
            )
        : t;
    }
    var Uu = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const xu = new (class {
      isUserIconValid(t) {
        if (!t) return !1;
        if (t.includes("/profile-images/")) return !0;
        if (t.includes("?newIconUrl=")) {
          const [e, i] = t.split("?newIconUrl=");
          return Pu.includes(i) && Nu.includes(e);
        }
        return Pu.includes(t);
      }
      isUserIdValid(t) {
        return "string" == typeof t && (16 === t.length || 36 === t.length);
      }
      isUserNickNameValid(t) {
        return "string" == typeof t && t.length > 0 && t.length < 20;
      }
      getDefaultUserIcon() {
        const t = Math.floor(Math.random() * ju.length);
        return ju[t];
      }
      getDefaultUserNickName() {
        return "";
      }
      ui(t) {
        return Uu(this, void 0, void 0, function* () {
          try {
            yield v.setItemsAsync(t);
          } catch (t) {}
        });
      }
      getValidatedChromeStorageDataAsync() {
        return Uu(this, void 0, void 0, function* () {
          const t = yield h.getAllItemsAsync(),
            e = this.validateStorageData(t);
          return (JSON.stringify(t) !== JSON.stringify(e) && this.ui(e), e);
        });
      }
      validateStorageData(t) {
        var e;
        const i = "object" == typeof t ? Object.assign({}, t) : {};
        return (
          (null === (e = i.userIcon) || void 0 === e
            ? void 0
            : e.includes("?newIconUrl=")) &&
            (i.userIcon = i.userIcon.split("?newIconUrl=")[1]),
          this.isUserIconValid(i.userIcon) ||
            (i.userIcon = this.getDefaultUserIcon()),
          this.isUserNickNameValid(i.userNickname) ||
            (i.userNickname = this.getDefaultUserNickName()),
          i
        );
      }
    })();
    Object.freeze(xu);
    const Lu = xu;
    var Mu = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const Vu = new (class {
      getRedirectDataForTabAsync(t) {
        return Mu(this, void 0, void 0, function* () {
          const e = (yield h.getItemsAsync([j])).redirectDataMap,
            i = this.ai(t);
          if (e && e[i]) {
            const t = e[i];
            if (this.ci(t)) return t;
          }
        });
      }
      deleteRedirectDataForTabAsync(t) {
        return Mu(this, void 0, void 0, function* () {
          const e = (yield h.getItemsAsync([j])).redirectDataMap,
            i = this.ai(t);
          (e && e[i] && delete e[i], yield v.setItemsAsync({ [j]: e }));
        });
      }
      ai(t) {
        return t;
      }
      storeRedirectDataForTabAsync(t, e) {
        return Mu(this, void 0, void 0, function* () {
          console.log("store data for tab " + t);
          const i = this.ai(e);
          let n = yield h.getItemsAsync([j]);
          ((n[i] = t), (n = this.di(n)), yield v.setItemsAsync({ [j]: n }));
        });
      }
      di(t) {
        return (function (t, e) {
          const i = {};
          let n;
          for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
          return i;
        })(t, this.ci);
      }
      ci(t) {
        const e = t.date;
        return (
          void 0 !== e &&
          "number" == typeof e &&
          e <= Date.now() &&
          Date.now() - e < 108e5
        );
      }
    })();
    Object.freeze(Vu);
    const $u = Vu;
    var Hu, Wu, zu, Gu;
    !(function (t) {
      ((t.GET_AUTH_TOKEN = "getAuthToken"),
        (t.SIGN_OUT = "signOut"),
        (t.GET_SIGN_OUT_EPOCH = "getSignOutEpoch"));
    })(Hu || (Hu = {}));
    class Zu extends du {
      constructor(t, e, i) {
        (super(t, e, su.LOAD_SESSION), (this.data = i));
      }
    }
    !(function (t) {
      ((t.POSTHOG = "posthog"), (t.METIS = "metis"), (t.BOTH = "both"));
    })(Wu || (Wu = {}));
    class Ju extends du {
      constructor(t, e, i) {
        (super(t, e, su.TEARDOWN), (this.data = i));
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
    })(zu || (zu = {}));
    class Yu extends cu {
      constructor(t, e, i) {
        (super(t, e, i), (this.type = i));
      }
    }
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
    })(Gu || (Gu = {}));
    class Ku extends Yu {
      constructor(t, e) {
        super(t, e, Gu.CLOSE_POPUP);
      }
    }
    const qu = [
        {
          domains: [".netflix."],
          serverName: os.NETFLIX,
          name: Pn.NETFLIX,
          homepage: "https://netflix.com",
          premium: !1,
          iconUrl: "/img/service_logos/netflix.svg",
          popularity: 64184.49597,
        },
        {
          domains: [".disneyplus."],
          serverName: os.DISNEY_PLUS,
          name: Pn.DISNEY_PLUS,
          homepage: "https://disneyplus.com",
          premium: !1,
          iconUrl: "/img/service_logos/disney.svg",
          popularity: 7139.926064,
        },
        {
          domains: [".hbomax.", ".max."],
          serverName: os.HBO_MAX,
          name: Pn.HBO_MAX,
          homepage: "https://play.max.com",
          premium: !1,
          iconUrl: "/img/service_logos/max.svg",
          popularity: 8070.383044,
        },
        {
          domains: [".hulu."],
          serverName: os.HULU,
          name: Pn.HULU,
          homepage: "https://hulu.com",
          premium: !1,
          iconUrl: "/img/service_logos/hulu.svg",
          popularity: 1854.542783,
        },
        {
          domains: [".amazon.", ".primevideo."],
          serverName: os.AMAZON,
          name: Pn.AMAZON,
          homepage:
            "https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011",
          premium: !1,
          iconUrl: "/img/service_logos/prime.svg",
          popularity: 3003.498061,
        },
        {
          domains: [".youtube."],
          serverName: os.YOUTUBE,
          name: Pn.YOUTUBE,
          homepage: "https://youtube.com",
          premium: !1,
          iconUrl: "/img/service_logos/youtube.svg",
          popularity: 4812.704642,
        },
        {
          domains: [".paramountplus."],
          serverName: os.PARAMOUNT,
          name: Pn.PARAMOUNT,
          homepage: "https://www.paramountplus.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/paramount_banner.webp",
          iconUrl: "/img/service_logos/paramount.svg",
          popularity: 130.809939,
        },
        {
          domains: [".peacocktv."],
          serverName: os.PEACOCK,
          name: Pn.PEACOCK,
          homepage: "https://www.peacocktv.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/peacock_banner.webp",
          iconUrl: "/img/service_logos/peacock.svg",
          popularity: 193.353472,
        },
        {
          domains: [".crunchyroll."],
          serverName: os.CRUNCHYROLL,
          name: Pn.CRUNCHYROLL,
          homepage: "https://beta.crunchyroll.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/crunch_banner.webp",
          iconUrl: "/img/service_logos/crunchyroll.svg",
          popularity: 634.02917,
        },
        {
          domains: [".fubo.tv"],
          serverName: os.FUBO,
          name: Pn.FUBO,
          homepage: "https://www.fubo.tv/",
          premium: !0,
          notificationBannerImage: "img/service_banners/fubo_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/fubo.svg",
          popularity: 0,
        },
        {
          domains: [".espn."],
          serverName: os.ESPN,
          name: Pn.ESPN,
          homepage: "https://plus.espn.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/espn_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/espnplus.svg",
          popularity: 0,
        },
        {
          domains: [".hotstar."],
          serverName: os.HOTSTAR,
          name: Pn.HOTSTAR,
          homepage: "https://www.hotstar.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/hotstar_banner.webp",
          iconUrl: "/img/service_logos/jiohotstar.svg",
          popularity: 52.29375,
        },
        {
          domains: ["tv.apple."],
          serverName: os.APPLE_TV,
          name: Pn.APPLE_TV,
          homepage: "https://tv.apple.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/apple_tv_banner.webp",
          iconUrl: "/img/service_logos/appletv.svg",
          popularity: 13.574957,
        },
        {
          domains: ["tubitv.com"],
          serverName: os.TUBI_TV,
          name: Pn.TUBI_TV,
          homepage: "https://tubitv.com",
          premium: !1,
          notificationBannerImage: "img/service_banners/tubi_tv_banner.webp",
          iconUrl: "/img/service_logos/tubi.svg",
          popularity: 223.183048,
        },
        {
          domains: [".sling."],
          serverName: os.SLING,
          name: Pn.SLING,
          homepage: "https://watch.sling.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/sling_banner.webp",
          iconUrl: "/img/service_logos/sling.svg",
          popularity: 0,
        },
        {
          domains: ["pluto."],
          serverName: os.PLUTO_TV,
          name: Pn.PLUTO_TV,
          homepage: "https://www.pluto.tv",
          premium: !1,
          notificationBannerImage: "img/service_banners/pluto_tv_banner.webp",
          iconUrl: "/img/service_logos/pluto.svg",
          popularity: 0,
        },
        {
          domains: [".tsn."],
          serverName: os.TSN_PLUS,
          name: Pn.TSN_PLUS,
          homepage: "https://www.tsn.ca/video/",
          premium: !0,
          notificationBannerImage: "img/tsn_plus_banner.webp",
          iconUrl: "/img/service_logos/tsnplus.svg",
          popularity: 0,
        },
        {
          domains: ["mubi."],
          serverName: os.MUBI,
          name: Pn.MUBI,
          homepage: "https://mubi.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/mubi_banner.webp",
          iconUrl: "/img/service_logos/mubi.svg",
          popularity: 0,
        },
        {
          domains: ["stan."],
          serverName: os.STAN,
          name: Pn.STAN,
          homepage: "https://play.stan.com.au/",
          premium: !0,
          notificationBannerImage: "img/service_banners/stan_banner.webp",
          iconUrl: "/img/service_logos/stan.svg",
          popularity: 0,
        },
        {
          domains: [".crave."],
          serverName: os.CRAVE,
          name: Pn.CRAVE,
          homepage: "https://crave.ca",
          premium: !0,
          notificationBannerImage: "img/service_banners/crave_banner.webp",
          iconUrl: "/img/service_logos/crave.svg",
          popularity: 0,
        },
        {
          domains: [".viki."],
          serverName: os.VIKI,
          name: Pn.VIKI,
          homepage: "https://www.viki.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/viki_banner.webp",
          iconUrl: "/img/service_logos/viki.svg",
          popularity: 0,
        },
        {
          domains: [".spotify."],
          serverName: os.SPOTIFY,
          name: Pn.SPOTIFY,
          homepage: "https://open.spotify.com/",
          premium: !1,
          iconUrl: "/img/service_logos/spotify.svg",
          popularity: 0,
        },
        {
          domains: [".zee5."],
          serverName: os.ZEE5,
          name: Pn.ZEE5,
          homepage: "https://www.zee5.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/zee5_banner.webp",
          iconUrl: "/img/service_logos/zee5.svg",
          popularity: 0,
        },
        {
          domains: [".sonyliv."],
          serverName: os.SONY_LIV,
          name: Pn.SONY_LIV,
          homepage: "https://www.sonyliv.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/sonyliv_banner.webp",
          iconUrl: "/img/service_logos/sonyliv.svg",
          popularity: 0,
        },
        {
          domains: [".shudder."],
          serverName: os.SHUDDER,
          name: Pn.SHUDDER,
          homepage: "https://watch.shudder.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/shudder_banner.webp",
          iconUrl: "img/service_logos/shudder.svg",
          popularity: 0,
        },
        {
          domains: [".fox."],
          serverName: os.FOX_ONE,
          name: Pn.FOX_ONE,
          homepage: "https://www.fox.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/foxone_banner.webp",
          iconUrl: "img/service_logos/foxone.svg",
          popularity: 0,
        },
        {
          domains: [".willow."],
          serverName: os.WILLOW,
          name: Pn.WILLOW,
          homepage: "https://www.willow.tv/",
          premium: !0,
          iconUrl: "/img/service_logos/willow.svg",
          notificationBannerImage: "img/service_banners/willow_banner.webp",
          popularity: 0,
        },
        {
          domains: [".fancode."],
          serverName: os.FANCODE,
          name: Pn.FANCODE,
          homepage: "https://www.fancode.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/fancode_banner.webp",
          iconUrl: "/img/service_logos/fancode.svg",
          popularity: 0,
        },
        {
          domains: [".canalplus."],
          serverName: os.CANALPLUS,
          name: Pn.CANALPLUS,
          homepage: "https://www.canalplus.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/canalplus_banner.webp",
          iconUrl: "/img/service_logos/canalplus.svg",
          popularity: 0,
          disabled: !1,
        },
        {
          domains: ["shahid."],
          serverName: os.SHAHID,
          name: Pn.SHAHID,
          homepage: "https://shahid.mbc.net/",
          premium: !0,
          notificationBannerImage: "img/service_banners/shahid_banner.webp",
          iconUrl: "/img/service_logos/shahid.svg",
          popularity: 0,
        },
        {
          domains: [".viu."],
          serverName: os.VIU,
          name: Pn.VIU,
          homepage: "https://www.viu.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/viu_banner.webp",
          iconUrl: "/img/service_logos/viu.svg",
          popularity: 0,
        },
        {
          domains: [".vidio."],
          serverName: os.VIDIO,
          name: Pn.VIDIO,
          homepage: "https://www.vidio.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/vidio_banner.webp",
          iconUrl: "/img/service_logos/vidio.png",
          popularity: 0,
        },
        {
          domains: [".nba."],
          serverName: os.LEAGUE_PASS,
          name: Pn.LEAGUE_PASS,
          homepage: "https://nba.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/leaguepass_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/leaguepass.svg",
          popularity: 0,
        },
        {
          domains: ["vix.com"],
          serverName: os.VIX,
          name: Pn.VIX,
          homepage: "https://vix.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/vix_banner.webp",
          iconUrl: "/img/service_logos/vix.svg",
          popularity: 0,
        },
        {
          domains: [".unext."],
          serverName: os.UNEXT,
          name: Pn.UNEXT,
          homepage: "https://video.unext.jp/",
          premium: !0,
          notificationBannerImage: "img/service_banners/unext_banner.webp",
          iconUrl: "/img/service_logos/unext.svg",
          popularity: 0,
        },
        {
          domains: [".hulu.jp"],
          serverName: os.HULU_JP,
          name: Pn.HULU_JP,
          homepage: "https://www.hulu.jp/",
          premium: !0,
          notificationBannerImage: "img/service_banners/hulujp_banner.webp",
          iconUrl: "/img/service_logos/hulujp.svg",
          popularity: 0,
        },
        {
          domains: [".showtime."],
          serverName: os.SHOWTIME,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".amcplus."],
          serverName: os.AMC_PLUS,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".funimation."],
          serverName: os.FUNIMATION,
          name: Pn.FUNIMATION,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".starplus."],
          serverName: os.STAR_PLUS,
          name: Pn.STAR_PLUS,
          homepage: "https://www.starplus.com/",
          premium: !0,
          disabled: !0,
          notificationBannerImage: "img/service_banners/starplus_banner.webp",
          iconUrl: "/img/service_logos/starplus.svg",
          popularity: 0,
        },
        {
          domains: [".jiocinema."],
          serverName: os.JIO_CINEMA,
          name: Pn.JIO_CINEMA,
          homepage: "https://www.jiocinema.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/jiocinema_banner.webp",
          disabled: !0,
          iconUrl: "/img/service_logos/jiocinema.svg",
          popularity: 0,
        },
        {
          domains: [".dazn."],
          serverName: os.DAZN,
          name: Pn.DAZN,
          homepage: "https://dazn.com",
          premium: !0,
          iconUrl: "/img/service_logos/dazn.svg",
          popularity: 0,
          notificationBannerImage: "img/service_banners/dazn_banner.webp",
        },
        {
          domains: [".miguvideo."],
          serverName: os.MIGU,
          name: Pn.MIGU,
          homepage: "https://miguvideo.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/migu_banner.webp",
          iconUrl: "/img/service_logos/migu.svg",
          popularity: 0,
        },
        {
          domains: ["f1tv.formula1.com"],
          serverName: os.F1_TV,
          name: Pn.F1_TV,
          homepage: "https://f1tv.formula1.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/f1tv_banner.webp",
          iconUrl: "/img/service_logos/f1tv.svg",
          popularity: 0,
        },
      ].filter((t) => !t.disabled),
      Xu = qu.flatMap((t) => t.domains),
      Qu = qu.filter((t) => {
        var e;
        return (
          t.notificationBannerImage ||
          (null === (e = t.sports) || void 0 === e ? void 0 : e.length)
        );
      });
    (Qu.flatMap((t) => t.domains),
      qu.filter((t) => t.premium).map((t) => t.serverName));
    class ta extends Yu {
      constructor(t, e) {
        super(t, e, Gu.IS_CONTENT_SCRIPT_READY);
      }
    }
    var ea,
      ia = new Uint8Array(16);
    function na() {
      if (
        !ea &&
        !(ea =
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
      return ea(ia);
    }
    const sa =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const ra = function (t) {
      return "string" == typeof t && sa.test(t);
    };
    for (var oa = [], ua = 0; ua < 256; ++ua)
      oa.push((ua + 256).toString(16).substr(1));
    const aa = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = (
          oa[t[e + 0]] +
          oa[t[e + 1]] +
          oa[t[e + 2]] +
          oa[t[e + 3]] +
          "-" +
          oa[t[e + 4]] +
          oa[t[e + 5]] +
          "-" +
          oa[t[e + 6]] +
          oa[t[e + 7]] +
          "-" +
          oa[t[e + 8]] +
          oa[t[e + 9]] +
          "-" +
          oa[t[e + 10]] +
          oa[t[e + 11]] +
          oa[t[e + 12]] +
          oa[t[e + 13]] +
          oa[t[e + 14]] +
          oa[t[e + 15]]
        ).toLowerCase();
      if (!ra(i)) throw TypeError("Stringified UUID is invalid");
      return i;
    };
    const ca = function (t, e, i) {
      var n = (t = t || {}).random || (t.rng || na)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        i = i || 0;
        for (var s = 0; s < 16; ++s) e[i + s] = n[s];
        return e;
      }
      return aa(n);
    };
    function da() {
      try {
        return ca();
      } catch (t) {
        return "";
      }
    }
    var la;
    !(function (t) {
      ((t[(t.UNKNOWN = 0)] = "UNKNOWN"),
        (t[(t.OFFLINE = 1)] = "OFFLINE"),
        (t[(t.AWAY = 2)] = "AWAY"),
        (t[(t.ONLINE = 3)] = "ONLINE"),
        (t[(t.WATCHING_ALONE = 4)] = "WATCHING_ALONE"),
        (t[(t.WATCHING_IN_PARTY = 5)] = "WATCHING_IN_PARTY"));
    })(la || (la = {}));
    const ha = { Q7: ["*://*/*"] };
    var fa = i(8922),
      Da = i.n(fa),
      va = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function u(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, u);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class pa {
      constructor(t) {
        ((this.li = []), (this.hi = t), this.fi());
      }
      get array() {
        return Object.freeze([...this.li]);
      }
      fi() {
        var t;
        return va(this, void 0, void 0, function* () {
          this.li =
            null !== (t = yield h.getItemAsync(this.hi)) && void 0 !== t
              ? t
              : [];
        });
      }
      Di() {
        v.setItemsAsync({ [this.hi]: this.li }).catch((t) => {
          console.error(t);
        });
      }
      getIndex(t) {
        return this.li[t];
      }
      filterInPlace(t) {
        ((this.li = this.li.filter(t)), this.Di());
      }
      includes(t) {
        return this.li.includes(t);
      }
      setIndex(t, e) {
        ((this.li[t] = e), this.Di());
      }
      add(t) {
        (this.li.push(t), this.Di());
      }
      splice(t, e, ...i) {
        (this.li.splice(t, e, ...i), this.Di());
      }
      clear() {
        ((this.li = []), this.Di());
      }
      get length() {
        return this.li.length;
      }
    }
    var ba = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    class ma {
      constructor(t) {
        ((this.pi = new Map()), (this.hi = t), this.bi());
      }
      get mapObj() {
        return new Map(this.pi);
      }
      bi() {
        var t;
        return ba(this, void 0, void 0, function* () {
          const e =
            null !== (t = yield h.getItemAsync(this.hi)) && void 0 !== t
              ? t
              : {};
          this.pi = new Map(Object.entries(e));
        });
      }
      mi() {
        const t = Object.fromEntries(this.pi);
        v.setItemsAsync({ [this.hi]: t }).catch((t) => {
          console.error(t);
        });
      }
      get(t) {
        return this.pi.get(t);
      }
      set(t, e) {
        (this.pi.set(t, e), this.mi());
      }
      has(t) {
        return this.pi.has(t);
      }
      delete(t) {
        const e = this.pi.delete(t);
        return (e && this.mi(), e);
      }
      clear() {
        (this.pi.clear(), this.mi());
      }
      get size() {
        return this.pi.size;
      }
    }
    var ga = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const _a = new (class {
        constructor() {
          ((this.gi = 0),
            (this._i = 0),
            (this.yi = null),
            (this.wi = 0),
            console.log("Load Variable Manager"),
            (this.Fi = new pa("signInCallbacks")),
            (this.Ei = new pa("errorList")),
            (this.Ci = new pa("videoErrorList")),
            (this.Ai = new pa("cspBlockingTabs")),
            (this.Ii = new ma("partyWindowsMap")),
            (this.Si = new ma("sessionProcessedUsers")),
            (this.ki = new ma("UUIDMap")),
            (this.Ti = this.loadVariables()));
        }
        loadVariables() {
          return ga(this, void 0, void 0, function* () {
            const [t, e, i, n, s] = yield Promise.all([
              h.getItemAsync("subscriptionLastUpdated"),
              h.getItemAsync("subscriptionData"),
              h.getItemAsync("lastSendDelay"),
              h.getItemAsync("sessionMeLastUpdated"),
              h.getItemAsync("sessionMe"),
            ]);
            ((this.gi = null != t ? t : 0),
              (this.Bi = null != e ? e : {}),
              (this._i = null != i ? i : 0),
              (this.wi = null != n ? n : 0),
              (this.yi = null != s ? s : null));
          });
        }
        ready() {
          return this.Ti;
        }
        get signInCallbacks() {
          return this.Fi;
        }
        get errorList() {
          return this.Ei;
        }
        get sessionProcessedUsers() {
          return this.Si;
        }
        get UUIDMap() {
          return this.ki;
        }
        get partyWindowsMap() {
          return this.Ii;
        }
        get videoErrorList() {
          return this.Ci;
        }
        get cspBlockingTabs() {
          return this.Ai;
        }
        get subscriptionData() {
          return this.Bi;
        }
        set subscriptionData(t) {
          ((this.Bi = t),
            v.setItemsAsync({ subscriptionData: t }).catch((t) => {
              console.error(t);
            }));
        }
        get subscriptionLastUpdated() {
          return this.gi;
        }
        set subscriptionLastUpdated(t) {
          ((this.gi = t),
            v.setItemsAsync({ subscriptionLastUpdated: t }).catch((t) => {
              console.error(t);
            }));
        }
        get lastSendDelay() {
          return this._i;
        }
        set lastSendDelay(t) {
          ((this._i = t),
            v.setItemsAsync({ lastSendDelay: t }).catch((t) => {
              console.error(t);
            }));
        }
        getSessionMe() {
          return ga(this, void 0, void 0, function* () {
            return (yield this.Ti, this.yi);
          });
        }
        setSessionMe(t) {
          return ga(this, void 0, void 0, function* () {
            (yield this.Ti,
              (this.yi = t),
              yield v.setItemsAsync({ sessionMe: t }));
          });
        }
        getSessionMeLastUpdated() {
          return ga(this, void 0, void 0, function* () {
            return (yield this.Ti, this.wi);
          });
        }
        setSessionMeLastUpdated(t) {
          return ga(this, void 0, void 0, function* () {
            (yield this.Ti,
              (this.wi = t),
              yield v.setItemsAsync({ sessionMeLastUpdated: t }));
          });
        }
      })(),
      ya = _a;
    var wa = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    class Fa {
      constructor() {
        ((this.Oi = null),
          this.Ni(),
          this.ji(),
          (this.Pi = 0),
          (this.Ri = 0),
          (this.Ui = 0),
          (this.xi = 0),
          (this.Li = da()),
          (this.Mi = da()),
          (this.Vi = Date.now()),
          (this.$i = 0),
          (this.Hi = new Map()));
      }
      setEventWindow(t) {
        this.Oi = t;
      }
      closeEventWindow() {
        this.Oi && (this.Oi.close(), (this.Oi = null));
      }
      eventPostMessage(t, e) {
        var i;
        null === (i = this.Oi) || void 0 === i || i.postMessage(t, e);
      }
      addAliveTab(t, e, i = !1) {
        if (i) {
          const e = this.Hi.get(t);
          e && clearTimeout(e);
        }
        this.Hi.set(t, e);
      }
      removeAliveTab(t) {
        console.log("Removing alive tab: " + t);
        const e = this.Hi.get(t);
        (e && clearTimeout(e), this.Hi.delete(t));
      }
      checkAliveTab(t) {
        return this.Hi.has(t);
      }
      clearTimeout(t) {
        const e = this.Hi.get(t);
        e && clearTimeout(e);
      }
      getVideoSessionData() {
        return {
          id: this.Mi,
          start_time_ms: this.Pi,
          heartbeat_duration_ms: Math.min(this.xi, Fa.MAX_HEARTBEAT),
          total_duration_ms: this.Ui,
        };
      }
      resetVideoSession() {
        ((this.Mi = da()),
          (this.Pi = Date.now()),
          (this.Ri = Date.now()),
          (this.Ui = 0));
      }
      pauseHeartBeat() {
        this.xi = 0;
      }
      resumeHeartBeat() {
        ((this.Ri = Date.now()), (this.xi = 0));
      }
      heartBeatProc() {
        ((this.xi =
          0 === this.Ri ? Date.now() - this.Pi : Date.now() - this.Ri),
          (this.Ui += this.xi),
          (this.Ri = Date.now()));
      }
      incrementAppSessionEventNumber() {
        this.$i++;
      }
      getAppSession() {
        return { id: this.Li, start_time_ms: this.Vi, event_number: this.$i };
      }
      Wi() {
        return wa(this, void 0, void 0, function* () {
          const t = (yield h.getItemsAsync(["NDS"])).NDS;
          if (!t || 0 === t.length) return;
          const e = [];
          let i = !0;
          for (; i;) {
            const n = t.shift();
            if (n) {
              const { splitData: s, restData: r } = this.zi(
                n,
                15e4 - this.Gi(e),
              );
              (s.watchHistory.length && e.push(s),
                r && ((i = !1), t.unshift(r)));
            } else i = !1;
          }
          if (0 === e.length) return;
          const n = { name: "netflix_content", data: { content_json: e } };
          try {
            (yield hf.Zi(n, void 0, !0), v.setItemsAsync({ NDS: t }));
            const e = 5;
            ((ya.lastSendDelay = e),
              chrome.alarms.create("sendPendingData", { delayInMinutes: e }));
          } catch (t) {
            const e = 2 * ya.lastSendDelay;
            (chrome.alarms.create("sendPendingData", { delayInMinutes: e }),
              (ya.lastSendDelay = e));
          }
        });
      }
      zi(t, e) {
        const i = this.Gi(t);
        if (i > e) {
          const n = t.watchHistory.length,
            s = e / i,
            r = Math.round(s * n);
          return {
            splitData: {
              guid: t.guid,
              profileName: t.profileName,
              watchHistory: t.watchHistory.slice(0, r),
            },
            restData: {
              guid: t.guid,
              profileName: t.profileName,
              watchHistory: t.watchHistory.slice(r),
            },
          };
        }
        return { splitData: t };
      }
      Ji(t, e) {
        return wa(this, void 0, void 0, function* () {
          let i = JSON.stringify(t).length;
          const n = JSON.parse(JSON.stringify(t));
          for (; i > e;) {
            let t = 0;
            if (
              (n.forEach((e) => {
                t = Math.max(t, e.watchHistory.length);
              }),
              t <= 50)
            )
              return [];
            (n.forEach((e) => {
              e.watchHistory = e.watchHistory.slice(0, Math.round(0.9 * t));
            }),
              (i = JSON.stringify(n).length));
          }
          return n;
        });
      }
      Gi(t) {
        return JSON.stringify(t).length;
      }
      Yi(t) {
        var e;
        return wa(this, void 0, void 0, function* () {
          const i = 9e6,
            n = yield h.getItemsAsync(["NDS"]),
            s = null !== (e = n.NDS) && void 0 !== e ? e : [],
            r = this.Gi(t);
          if (this.Gi(s) + r < i)
            try {
              yield v.setItemsAsync({ NDS: [...t, ...s] });
              (yield chrome.alarms.get("sendPendingData")) || this.Wi();
            } catch (t) {}
          else if (r < i) {
            const e = i - r,
              n = yield this.Ji(s, e),
              o = [...t, ...n];
            try {
              (yield v.setItemsAsync({ NDS: o }), this.Wi());
            } catch (t) {}
          } else {
            const e = yield this.Ji(t, i);
            try {
              (yield v.setItemsAsync({ NDS: e }), this.Wi());
            } catch (t) {}
          }
        });
      }
      Ki() {
        chrome.runtime.reload();
      }
      Ni() {
        (chrome.tabs.onUpdated.addListener(this.qi.bind(this)),
          chrome.runtime.onInstalled.addListener(this.Xi.bind(this)),
          chrome.runtime.onUpdateAvailable.addListener(this.Ki.bind(this)));
      }
      Xi(t) {
        return wa(this, void 0, void 0, function* () {
          if ("install" == t.reason)
            (yield Ln(1e3)(),
              hf.Zi({
                name: "install",
                action: {
                  description:
                    "install extension for the first time version " + I,
                },
              }),
              hf.logOldEventAsync({ eventType: "install" }),
              chrome.tabs.create({ url: B }));
          else if ("update" == t.reason) {
            if (
              (console.log(
                "Updated from " + t.previousVersion + " to " + I + "!",
              ),
              "4.0.4" === I)
            ) {
              const e = {
                name: "update",
                action: {
                  description:
                    "Updated from " + t.previousVersion + " to " + I + "!",
                  reason: "Extension version is out of date",
                },
              };
              hf.Zi(e);
            }
            hf.logOldEventAsync({ eventType: "update-" + I });
            Math.random() < 0.05 &&
              "5.0.0" === I &&
              chrome.permissions.contains({ origins: ha.Q7 }, (t) => {
                hf.Zi({
                  name: "granted_permissions",
                  action: { description: t ? "true" : "false" },
                });
              });
          }
        });
      }
      getIdleState() {
        return wa(this, void 0, void 0, function* () {
          return new Promise((t) => {
            chrome.idle ? chrome.idle.queryState(600, t) : t("active");
          });
        });
      }
      getActiveTabId() {
        return wa(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
              var n;
              i ? t(null !== (n = i.id) && void 0 !== n ? n : 0) : e();
            });
          });
        });
      }
      getOnlineState() {
        return wa(this, void 0, void 0, function* () {
          return "active" !== (yield this.getIdleState())
            ? { status: la.AWAY }
            : new Promise((t) => {
                let e = { status: la.ONLINE };
                chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
                  if (i) {
                    const n = i.url;
                    if (n && i.id) {
                      const s = new Sr(new URL(n), i.id);
                      s.streamingService &&
                        (s.isBrowsing
                          ? (e = {
                              status: la.WATCHING_ALONE,
                              service: s.serviceName,
                              status_text: "Browsing",
                            })
                          : t(void 0));
                    }
                  }
                  t(e);
                });
              });
        });
      }
      Qi(t) {
        return 16 === t.length || 36 === t.length;
      }
      tn() {
        return wa(this, void 0, void 0, function* () {
          const t =
            navigator.userAgent.toLowerCase().indexOf("edg") > -1
              ? "edge"
              : "chrome";
          console.log("browser: " + t);
          const e = "?browser=" + t,
            i = yield fetch("https://data3.netflixparty.com/create-userId" + e),
            n = yield i.text(),
            s = new Date();
          this.Qi(n) &&
            (chrome.storage.local.set(
              {
                userId: n,
                recentlyUpdated: !0,
                recentlyUpdated3: !0,
                date: s.toString(),
              },
              function () {
                console.log("Settings saved");
              },
            ),
            chrome.runtime.setUninstallURL(
              "https://www.teleparty.com/uninstall?userId=" +
                n +
                "&browser=chrome&version=" +
                encodeURIComponent(chrome.runtime.getManifest().version),
            ));
        });
      }
      ji() {
        try {
          h.getAllItemsAsync().then((t) => {
            t.userId && Lu.isUserIdValid(t.userId)
              ? chrome.runtime.setUninstallURL(
                  "https://www.teleparty.com/uninstall?userId=" +
                    t.userId +
                    "&browser=chrome&version=" +
                    encodeURIComponent(I),
                )
              : (console.log(
                  "userId undefined/invalid in local storage -> now setting",
                ),
                this.tn());
          });
        } catch (t) {
          const e = {
            name: "error",
            action: { description: "user auth error", reason: t },
          };
          hf.Zi(e);
        }
      }
      qi(t, e, i) {
        if ("loading" === e.status) {
          hf.en(i);
          const t = e.url || i.url;
          this.nn(t)
            ? this.sn(i, t)
            : this.rn(t) &&
              this.un(i.id).then(() =>
                this.an(i, !1, { awaitReady: !1, urlOverride: t }),
              );
        }
        (e.url &&
          this.nn(e.url) &&
          "loading" !== e.status &&
          this.an(i, !1, { awaitReady: !1, urlOverride: e.url }),
          "complete" == e.status && this.an(i, !0));
      }
      nn(t) {
        if (!t) return !1;
        try {
          return new URL(t).hostname.includes("pluto.tv");
        } catch (t) {
          return !1;
        }
      }
      rn(t) {
        if (!t) return !1;
        try {
          const e = new URL(t);
          return (
            e.hostname.includes("f1tv.formula1.com") &&
            e.pathname.includes("/detail/")
          );
        } catch (t) {
          return !1;
        }
      }
      cn(t) {
        return t === Pn.PLUTO_TV || t === Pn.F1_TV;
      }
      un(t) {
        return wa(this, void 0, void 0, function* () {
          if (t)
            try {
              yield chrome.scripting.executeScript({
                target: { tabId: t },
                world: "MAIN",
                injectImmediately: !0,
                files: ["content_scripts/f1_tv/f1_tv_webpackhook_bundled.js"],
              });
            } catch (t) {}
        });
      }
      sn(t, e) {
        return wa(this, void 0, void 0, function* () {
          if ((yield this.an(t, !1, { awaitReady: !1, urlOverride: e }), !t.id))
            return;
          const i = t.id;
          for (const t of [1500, 4e3, 1e4]) {
            yield Ln(t)();
            const e = yield chrome.tabs.get(i).catch(() => {});
            if (!(null == e ? void 0 : e.id) || !e.url) return;
            if ("complete" === e.status) return;
            if (!this.nn(e.url)) return;
            yield this.an(e, !1, { awaitReady: !1 });
          }
        });
      }
      an(t, e, i = {}) {
        return wa(this, void 0, void 0, function* () {
          const n = i.urlOverride || t.url;
          if (n && t.id)
            try {
              const s = new URL(n).hostname,
                r = new Sr(new URL(n), t.id),
                o = r.streamingService;
              if (e) {
                const e =
                  null !=
                  (function (t) {
                    try {
                      const e = t.split("."),
                        i = [];
                      for (let t = e.length - 2; t >= 0; t--) {
                        let n = "";
                        for (let i = t; i < e.length - 1; i++) n += `${e[i]}.`;
                        ((n += e[e.length - 1]), i.push(n));
                      }
                      return i;
                    } catch (t) {
                      return [];
                    }
                  })(s).find((t) => R.includes(Da()(t)));
                (Xu.some((t) => s.includes(t)) || e) &&
                  chrome.scripting.executeScript({
                    target: { tabId: t.id },
                    files: [S],
                  });
              }
              o &&
                (o.name === Pn.F1_TV && (yield this.un(r.id)),
                yield this.initContentScriptsAsync(r, !1 !== i.awaitReady),
                yield this.initBrowseScriptsAsync(r));
            } catch (t) {}
          else chrome.runtime.lastError;
        });
      }
      initContentScriptsAsync(t, e = !0) {
        return wa(this, void 0, void 0, function* () {
          if (
            t.streamingService &&
            (!t.isBrowsing || t.streamingService.name == Pn.PLUTO_TV)
          ) {
            const i = t.streamingService;
            let n = !1;
            const s = i.name == Pn.ESPN,
              r = this.cn(i.name);
            (s && ((n = !0), yield Ln(5e3)()),
              yield chrome.scripting.executeScript({
                target: { tabId: t.id },
                injectImmediately: r,
                func: (t) => {
                  window.teleparty || (window.teleparty = { tabId: t });
                },
                args: [t.id],
              }));
            const o = () =>
              wa(this, void 0, void 0, function* () {
                yield Promise.all(
                  i.contentScripts.map((e) =>
                    chrome.scripting.executeScript({
                      target: { tabId: t.id, allFrames: n },
                      injectImmediately: r,
                      files: ["lib/tp_libraries_min.js", e],
                    }),
                  ),
                );
              });
            yield o();
            const u = new ta(L, V),
              a = W.sendMessageToTabAsync(u, t.id);
            e ? yield a : a.catch(() => {});
          }
        });
      }
      initBrowseScriptsAsync(t) {
        return wa(this, void 0, void 0, function* () {
          if (t.streamingService) {
            const e = t.streamingService,
              i = this.cn(e.name);
            (yield chrome.scripting.executeScript({
              target: { tabId: t.id },
              injectImmediately: i,
              func: (t) => {
                window.teleparty || (window.teleparty = { tabId: t });
              },
              args: [t.id],
            }),
              yield Promise.all(
                e.browseScripts.map((e) =>
                  chrome.scripting.executeScript({
                    target: { tabId: t.id },
                    injectImmediately: i,
                    files: [e],
                  }),
                ),
              ));
          }
        });
      }
    }
    Fa.MAX_HEARTBEAT = 8e4;
    var Ea = i(5587),
      Ca = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function u(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, u);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class Aa {
      constructor() {
        ((this.dn = []),
          (this.ln = ""),
          (this.throttleStatus = {}),
          this.getConfigData(),
          this.hn());
      }
      hn() {
        return Ca(this, void 0, void 0, function* () {
          this.ln = yield this.Dn();
        });
      }
      throttle(t, e, i) {
        return (...n) => {
          this.throttleStatus[i] ||
            (t.apply(this, n),
            (this.throttleStatus[i] = !0),
            setTimeout(() => (this.throttleStatus[i] = !1), e));
        };
      }
      Zi(t) {
        hf.Zi(t);
      }
      Dn() {
        return Ca(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              Ca(this, void 0, void 0, function* () {
                i++;
                const s = yield Lu.getValidatedChromeStorageDataAsync();
                s.userId
                  ? t(s.userId)
                  : i < 5
                    ? setTimeout(n, 5e3)
                    : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      vn() {
        return Ca(this, void 0, void 0, function* () {
          const t = yield fetch(`${e}/experiment-data`);
          try {
            const e = yield t.json();
            this.dn = e;
          } catch (t) {
            this.dn = [];
          }
        });
      }
      getConfigData() {
        return Ca(this, void 0, void 0, function* () {
          (this.pn && (clearInterval(this.pn), (this.pn = void 0)),
            yield this.vn(),
            (this.pn = setInterval(
              () =>
                Ca(this, void 0, void 0, function* () {
                  try {
                    yield this.vn();
                  } catch (t) {
                    console.log("Error fetching experiment data", t);
                  }
                }),
              Aa.CONFIG_PULL_TIME,
            )));
        });
      }
      bn(t, e, i) {
        const n = i + t;
        return (1 * Ea.murmur3(n, e)) / 4294967295;
      }
      checkFlag(t) {
        const e = this.dn.map((t) => t.name);
        if (-1 === e.indexOf(t)) return null;
        const i = e.indexOf(t),
          n = this.dn[i].seed,
          s = this.dn[i].is_exp,
          r = this.dn[i].version,
          o = this.bn(t, n, this.ln),
          u = this.dn[i].buckets;
        for (const e of u) {
          const i = Object.keys(e)[0],
            u = e[i],
            a = u[0],
            c = u[1];
          if (o >= a && o < c) {
            if (s) {
              this.throttle(
                this.Zi,
                500,
                t,
              )({
                name: "experiment_exposure",
                experiment: { name: t, bucket: i, seed: n, version: r },
              });
            }
            return i;
          }
        }
        return null;
      }
    }
    Aa.CONFIG_PULL_TIME = 6e5;
    class Ia {
      constructor() {
        ($("Message forwarder"), this.mn());
      }
      gn(t, e) {
        const i = t,
          n = wu.getSocketForTabId(i.data.tabId);
        (null == n || n.sendMessage(nu.REBOOT_MESSAGE, i.data.sessionData, e),
          $("Attempted to reboot session"));
      }
      _n(t, e, i) {
        if (t.target === L) {
          if (t.type == zu.BROADCAST) {
            const n = t;
            return (this.yn(nu.UPDATE_SESSION, n.data, e, i), !0);
          }
          if (t.type == zu.SEND_MESSAGE) {
            const n = t;
            return (this.yn(nu.SEND_MESSAGE, n.data, e, i), !0);
          }
          if (t.type == zu.SET_TYPING) {
            const n = t;
            return (this.yn(nu.SET_TYPING_PRESENCE, n.data, e, i), !0);
          }
          if (t.type == zu.SET_BUFFERING) {
            const n = t;
            return (this.yn(nu.SET_BUFFERING_PRESENCE, n.data, e, i), !0);
          }
          if (t.type == zu.SET_WATCHING_ADS) {
            const n = t;
            return (this.yn(nu.SET_ADS_PRESENCE, n.data, e, i), !0);
          }
          if (t.type === zu.BROADCAST_USER_SETTINGS) {
            const n = t;
            return (this.yn(nu.BROADCAST_USER_SETTINGS, n.data, e, i), !0);
          }
          if (t.type === zu.BROADCAST_NEXT_EPISODE) {
            const n = t;
            return (this.yn(nu.NEXT_EPISODE_MESSAGE, n.data, e, i), !0);
          }
          if (t.type === ou.GET_SERVER_TIME)
            return (this.yn(nu.GET_SERVER_TIME, {}, e, i), !0);
          if (t.type == zu.SEND_REACTION) {
            const n = t;
            return (this.yn(nu.SEND_REACTION, n.data, e, i), !0);
          }
          if (t.type == zu.SEND_GIF) {
            const n = t;
            return (this.yn(nu.SEND_GIF, n.data, e, i), !0);
          }
          if (t.type == su.REBOOT) return (this.gn(t, i), !0);
          if (t.type == zu.WEB_RTC)
            return (this.yn(nu.WEB_RTC, t.data, e, i), !0);
          if (t.type === zu.SELECT_PROVIDER)
            return (this.yn(nu.SELECT_PROVIDER, t.data, e, i), !0);
          if (t.type === zu.REPORT_STREAM_POSITION)
            return (this.yn(nu.REPORT_STREAM_POSITION, t.data, e, i), !0);
          if (t.sender == L && t.type == su.REBOOT) return (this.gn(t, i), !0);
        }
        return !1;
      }
      yn(t, e, i, n) {
        const s = this.wn(i);
        null == s || s.sendMessage(t, e, n);
      }
      wn(t) {
        var e;
        const i = null === (e = t.tab) || void 0 === e ? void 0 : e.id;
        return i ? wu.getSocketForTabId(i) : void 0;
      }
      mn() {
        z.addMessageListener({ onMessage: this._n.bind(this) });
      }
    }
    var Sa = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    function ka(t) {
      return Sa(this, void 0, void 0, function* () {
        if (!t || "string" != typeof t.endpoint || "string" != typeof t.method)
          return { ok: !1, error: "Invalid sendApiRequest payload" };
        const e = t.method.toUpperCase(),
          i = (function (t, e) {
            if (!e) return t;
            const i = new URLSearchParams();
            let n = !1;
            for (const [t, s] of Object.entries(e))
              void 0 !== s && (i.append(t, String(s)), (n = !0));
            if (!n) return t;
            const s = t.includes("?") ? "&" : "?";
            return `${t}${s}${i.toString()}`;
          })(t.endpoint, t.params),
          n = (function (t) {
            if (t.formData && t.formData.length > 0)
              return (function (t) {
                const e = new FormData();
                for (const i of t)
                  if ("string" === i.kind) e.append(i.name, i.value);
                  else {
                    const t = Ta(i.base64),
                      n = new Blob([t.buffer], {
                        type: i.mimeType || "application/octet-stream",
                      });
                    e.append(i.name, n, i.filename || "blob");
                  }
                return e;
              })(t.formData);
            if (void 0 !== t.jsonBody) return t.jsonBody;
            return;
          })(t),
          s = (function (t) {
            if (!t) return;
            const e = {};
            for (const [i, n] of Object.entries(t)) {
              const t = i.toLowerCase();
              "x-tp-csrf" !== t &&
                "content-type" !== t &&
                "authorization" !== t &&
                (e[i] = n);
            }
            return Object.keys(e).length > 0 ? e : void 0;
          })(t.headers);
        try {
          return {
            ok: !0,
            status: 200,
            data: yield Vn(i, e, !0, n, void 0, s),
          };
        } catch (t) {
          const e = null == t ? void 0 : t.status,
            i = t instanceof Error ? t.message : String(t);
          return "number" == typeof e
            ? { ok: !1, status: e, data: Ba(i) }
            : { ok: !1, error: i };
        }
      });
    }
    function Ta(t) {
      const e = atob(t),
        i = e.length,
        n = new Uint8Array(i);
      for (let t = 0; t < i; t++) n[t] = e.charCodeAt(t);
      return n;
    }
    function Ba(t) {
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }
    const Oa = function (t) {
        const e = [];
        let i = 0;
        for (let n = 0; n < t.length; n++) {
          let s = t.charCodeAt(n);
          s < 128
            ? (e[i++] = s)
            : s < 2048
              ? ((e[i++] = (s >> 6) | 192), (e[i++] = (63 & s) | 128))
              : 55296 == (64512 & s) &&
                  n + 1 < t.length &&
                  56320 == (64512 & t.charCodeAt(n + 1))
                ? ((s =
                    65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n))),
                  (e[i++] = (s >> 18) | 240),
                  (e[i++] = ((s >> 12) & 63) | 128),
                  (e[i++] = ((s >> 6) & 63) | 128),
                  (e[i++] = (63 & s) | 128))
                : ((e[i++] = (s >> 12) | 224),
                  (e[i++] = ((s >> 6) & 63) | 128),
                  (e[i++] = (63 & s) | 128));
        }
        return e;
      },
      Na = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray(t, e) {
          if (!Array.isArray(t))
            throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const i = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            n = [];
          for (let e = 0; e < t.length; e += 3) {
            const s = t[e],
              r = e + 1 < t.length,
              o = r ? t[e + 1] : 0,
              u = e + 2 < t.length,
              a = u ? t[e + 2] : 0,
              c = s >> 2,
              d = ((3 & s) << 4) | (o >> 4);
            let l = ((15 & o) << 2) | (a >> 6),
              h = 63 & a;
            (u || ((h = 64), r || (l = 64)), n.push(i[c], i[d], i[l], i[h]));
          }
          return n.join("");
        },
        encodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e
            ? btoa(t)
            : this.encodeByteArray(Oa(t), e);
        },
        decodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e
            ? atob(t)
            : (function (t) {
                const e = [];
                let i = 0,
                  n = 0;
                for (; i < t.length;) {
                  const s = t[i++];
                  if (s < 128) e[n++] = String.fromCharCode(s);
                  else if (s > 191 && s < 224) {
                    const r = t[i++];
                    e[n++] = String.fromCharCode(((31 & s) << 6) | (63 & r));
                  } else if (s > 239 && s < 365) {
                    const r =
                      (((7 & s) << 18) |
                        ((63 & t[i++]) << 12) |
                        ((63 & t[i++]) << 6) |
                        (63 & t[i++])) -
                      65536;
                    ((e[n++] = String.fromCharCode(55296 + (r >> 10))),
                      (e[n++] = String.fromCharCode(56320 + (1023 & r))));
                  } else {
                    const r = t[i++],
                      o = t[i++];
                    e[n++] = String.fromCharCode(
                      ((15 & s) << 12) | ((63 & r) << 6) | (63 & o),
                    );
                  }
                }
                return e.join("");
              })(this.decodeStringToByteArray(t, e));
        },
        decodeStringToByteArray(t, e) {
          this.init_();
          const i = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            n = [];
          for (let e = 0; e < t.length;) {
            const s = i[t.charAt(e++)],
              r = e < t.length ? i[t.charAt(e)] : 0;
            ++e;
            const o = e < t.length ? i[t.charAt(e)] : 64;
            ++e;
            const u = e < t.length ? i[t.charAt(e)] : 64;
            if ((++e, null == s || null == r || null == o || null == u))
              throw new ja();
            const a = (s << 2) | (r >> 4);
            if ((n.push(a), 64 !== o)) {
              const t = ((r << 4) & 240) | (o >> 2);
              if ((n.push(t), 64 !== u)) {
                const t = ((o << 6) & 192) | u;
                n.push(t);
              }
            }
          }
          return n;
        },
        init_() {
          if (!this.byteToCharMap_) {
            ((this.byteToCharMap_ = {}),
              (this.charToByteMap_ = {}),
              (this.byteToCharMapWebSafe_ = {}),
              (this.charToByteMapWebSafe_ = {}));
            for (let t = 0; t < this.ENCODED_VALS.length; t++)
              ((this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                (this.byteToCharMapWebSafe_[t] =
                  this.ENCODED_VALS_WEBSAFE.charAt(t)),
                (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
                t >= this.ENCODED_VALS_BASE.length &&
                  ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] =
                    t),
                  (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] =
                    t)));
          }
        },
      };
    class ja extends Error {
      constructor() {
        (super(...arguments), (this.name = "DecodeBase64StringError"));
      }
    }
    const Pa = function (t) {
        return (function (t) {
          const e = Oa(t);
          return Na.encodeByteArray(e, !0);
        })(t).replace(/\./g, "");
      },
      Ra = function (t) {
        try {
          return Na.decodeString(t, !0);
        } catch (t) {
          console.error("base64Decode failed: ", t);
        }
        return null;
      };
    const Ua = () =>
        (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof globalThis) return globalThis;
          throw new Error("Unable to locate global object.");
        })().Fn,
      xa = () => {
        try {
          return (
            Ua() ||
            (() => {
              if ("undefined" == typeof process) return;
              const t = "MISSING_ENV_VAR".Fn;
              return t ? JSON.parse(t) : void 0;
            })() ||
            (() => {
              if ("undefined" == typeof document) return;
              let t;
              try {
                t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
              } catch (t) {
                return;
              }
              const e = t && Ra(t[1]);
              return e && JSON.parse(e);
            })()
          );
        } catch (t) {
          return void console.info(
            `Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`,
          );
        }
      },
      La = (t) => {
        var e, i;
        return null ===
          (i =
            null === (e = xa()) || void 0 === e ? void 0 : e.emulatorHosts) ||
          void 0 === i
          ? void 0
          : i[t];
      },
      Ma = () => {
        var t;
        return null === (t = xa()) || void 0 === t ? void 0 : t.config;
      };
    class Va {
      constructor() {
        ((this.reject = () => {}),
          (this.resolve = () => {}),
          (this.promise = new Promise((t, e) => {
            ((this.resolve = t), (this.reject = e));
          })));
      }
      wrapCallback(t) {
        return (e, i) => {
          (e ? this.reject(e) : this.resolve(i),
            "function" == typeof t &&
              (this.promise.catch(() => {}), 1 === t.length ? t(e) : t(e, i)));
        };
      }
    }
    function $a() {
      return "undefined" != typeof navigator &&
        "string" == typeof navigator.userAgent
        ? navigator.userAgent
        : "";
    }
    class Ha extends Error {
      constructor(t, e, i) {
        (super(e),
          (this.code = t),
          (this.customData = i),
          (this.name = "FirebaseError"),
          Object.setPrototypeOf(this, Ha.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, Wa.prototype.create));
      }
    }
    class Wa {
      constructor(t, e, i) {
        ((this.service = t), (this.serviceName = e), (this.errors = i));
      }
      create(t, ...e) {
        const i = e[0] || {},
          n = `${this.service}/${t}`,
          s = this.errors[t],
          r = s
            ? (function (t, e) {
                return t.replace(za, (t, i) => {
                  const n = e[i];
                  return null != n ? String(n) : `<${i}?>`;
                });
              })(s, i)
            : "Error",
          o = `${this.serviceName}: ${r} (${n}).`;
        return new Ha(n, o, i);
      }
    }
    const za = /\{\$([^}]+)}/g;
    function Ga(t, e) {
      if (t === e) return !0;
      const i = Object.keys(t),
        n = Object.keys(e);
      for (const s of i) {
        if (!n.includes(s)) return !1;
        const i = t[s],
          r = e[s];
        if (Za(i) && Za(r)) {
          if (!Ga(i, r)) return !1;
        } else if (i !== r) return !1;
      }
      for (const t of n) if (!i.includes(t)) return !1;
      return !0;
    }
    function Za(t) {
      return null !== t && "object" == typeof t;
    }
    function Ja(t) {
      const e = [];
      for (const [i, n] of Object.entries(t))
        Array.isArray(n)
          ? n.forEach((t) => {
              e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t));
            })
          : e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n));
      return e.length ? "&" + e.join("&") : "";
    }
    function Ya(t) {
      const e = {};
      return (
        t
          .replace(/^\?/, "")
          .split("&")
          .forEach((t) => {
            if (t) {
              const [i, n] = t.split("=");
              e[decodeURIComponent(i)] = decodeURIComponent(n);
            }
          }),
        e
      );
    }
    function Ka(t) {
      const e = t.indexOf("?");
      if (!e) return "";
      const i = t.indexOf("#", e);
      return t.substring(e, i > 0 ? i : void 0);
    }
    class qa {
      constructor(t, e) {
        ((this.observers = []),
          (this.unsubscribes = []),
          (this.observerCount = 0),
          (this.task = Promise.resolve()),
          (this.finalized = !1),
          (this.onNoObservers = e),
          this.task
            .then(() => {
              t(this);
            })
            .catch((t) => {
              this.error(t);
            }));
      }
      next(t) {
        this.forEachObserver((e) => {
          e.next(t);
        });
      }
      error(t) {
        (this.forEachObserver((e) => {
          e.error(t);
        }),
          this.close(t));
      }
      complete() {
        (this.forEachObserver((t) => {
          t.complete();
        }),
          this.close());
      }
      subscribe(t, e, i) {
        let n;
        if (void 0 === t && void 0 === e && void 0 === i)
          throw new Error("Missing Observer.");
        ((n = (function (t, e) {
          if ("object" != typeof t || null === t) return !1;
          for (const i of e) if (i in t && "function" == typeof t[i]) return !0;
          return !1;
        })(t, ["next", "error", "complete"])
          ? t
          : { next: t, error: e, complete: i }),
          void 0 === n.next && (n.next = Xa),
          void 0 === n.error && (n.error = Xa),
          void 0 === n.complete && (n.complete = Xa));
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return (
          this.finalized &&
            this.task.then(() => {
              try {
                this.finalError ? n.error(this.finalError) : n.complete();
              } catch (t) {}
            }),
          this.observers.push(n),
          s
        );
      }
      unsubscribeOne(t) {
        void 0 !== this.observers &&
          void 0 !== this.observers[t] &&
          (delete this.observers[t],
          (this.observerCount -= 1),
          0 === this.observerCount &&
            void 0 !== this.onNoObservers &&
            this.onNoObservers(this));
      }
      forEachObserver(t) {
        if (!this.finalized)
          for (let e = 0; e < this.observers.length; e++) this.sendOne(e, t);
      }
      sendOne(t, e) {
        this.task.then(() => {
          if (void 0 !== this.observers && void 0 !== this.observers[t])
            try {
              e(this.observers[t]);
            } catch (t) {
              "undefined" != typeof console &&
                console.error &&
                console.error(t);
            }
        });
      }
      close(t) {
        this.finalized ||
          ((this.finalized = !0),
          void 0 !== t && (this.finalError = t),
          this.task.then(() => {
            ((this.observers = void 0), (this.onNoObservers = void 0));
          }));
      }
    }
    function Xa() {}
    function Qa(t) {
      return t && t.En ? t.En : t;
    }
    class tc {
      constructor(t, e, i) {
        ((this.name = t),
          (this.instanceFactory = e),
          (this.type = i),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null));
      }
      setInstantiationMode(t) {
        return ((this.instantiationMode = t), this);
      }
      setMultipleInstances(t) {
        return ((this.multipleInstances = t), this);
      }
      setServiceProps(t) {
        return ((this.serviceProps = t), this);
      }
      setInstanceCreatedCallback(t) {
        return ((this.onInstanceCreated = t), this);
      }
    }
    const ec = "[DEFAULT]";
    class ic {
      constructor(t, e) {
        ((this.name = t),
          (this.container = e),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.instancesOptions = new Map()),
          (this.onInitCallbacks = new Map()));
      }
      get(t) {
        const e = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(e)) {
          const t = new Va();
          if (
            (this.instancesDeferred.set(e, t),
            this.isInitialized(e) || this.shouldAutoInitialize())
          )
            try {
              const i = this.getOrInitializeService({ instanceIdentifier: e });
              i && t.resolve(i);
            } catch (t) {}
        }
        return this.instancesDeferred.get(e).promise;
      }
      getImmediate(t) {
        var e;
        const i = this.normalizeInstanceIdentifier(
            null == t ? void 0 : t.identifier,
          ),
          n =
            null !== (e = null == t ? void 0 : t.optional) && void 0 !== e && e;
        if (!this.isInitialized(i) && !this.shouldAutoInitialize()) {
          if (n) return null;
          throw Error(`Service ${this.name} is not available`);
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: i });
        } catch (t) {
          if (n) return null;
          throw t;
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(t) {
        if (t.name !== this.name)
          throw Error(
            `Mismatching Component ${t.name} for Provider ${this.name}.`,
          );
        if (this.component)
          throw Error(`Component for ${this.name} has already been provided`);
        if (((this.component = t), this.shouldAutoInitialize())) {
          if (
            (function (t) {
              return "EAGER" === t.instantiationMode;
            })(t)
          )
            try {
              this.getOrInitializeService({ instanceIdentifier: ec });
            } catch (t) {}
          for (const [t, e] of this.instancesDeferred.entries()) {
            const i = this.normalizeInstanceIdentifier(t);
            try {
              const t = this.getOrInitializeService({ instanceIdentifier: i });
              e.resolve(t);
            } catch (t) {}
          }
        }
      }
      clearInstance(t = ec) {
        (this.instancesDeferred.delete(t),
          this.instancesOptions.delete(t),
          this.instances.delete(t));
      }
      async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([
          ...t.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
          ...t.filter((t) => "Cn" in t).map((t) => t.Cn()),
        ]);
      }
      isComponentSet() {
        return null != this.component;
      }
      isInitialized(t = ec) {
        return this.instances.has(t);
      }
      getOptions(t = ec) {
        return this.instancesOptions.get(t) || {};
      }
      initialize(t = {}) {
        const { options: e = {} } = t,
          i = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(i))
          throw Error(`${this.name}(${i}) has already been initialized`);
        if (!this.isComponentSet())
          throw Error(`Component ${this.name} has not been registered yet`);
        const n = this.getOrInitializeService({
          instanceIdentifier: i,
          options: e,
        });
        for (const [t, e] of this.instancesDeferred.entries()) {
          i === this.normalizeInstanceIdentifier(t) && e.resolve(n);
        }
        return n;
      }
      onInit(t, e) {
        var i;
        const n = this.normalizeInstanceIdentifier(e),
          s =
            null !== (i = this.onInitCallbacks.get(n)) && void 0 !== i
              ? i
              : new Set();
        (s.add(t), this.onInitCallbacks.set(n, s));
        const r = this.instances.get(n);
        return (
          r && t(r, n),
          () => {
            s.delete(t);
          }
        );
      }
      invokeOnInitCallbacks(t, e) {
        const i = this.onInitCallbacks.get(e);
        if (i)
          for (const n of i)
            try {
              n(t, e);
            } catch (t) {}
      }
      getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
        let i = this.instances.get(t);
        if (
          !i &&
          this.component &&
          ((i = this.component.instanceFactory(this.container, {
            instanceIdentifier: ((n = t), n === ec ? void 0 : n),
            options: e,
          })),
          this.instances.set(t, i),
          this.instancesOptions.set(t, e),
          this.invokeOnInitCallbacks(i, t),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, t, i);
          } catch (t) {}
        var n;
        return i || null;
      }
      normalizeInstanceIdentifier(t = ec) {
        return this.component ? (this.component.multipleInstances ? t : ec) : t;
      }
      shouldAutoInitialize() {
        return (
          !!this.component && "EXPLICIT" !== this.component.instantiationMode
        );
      }
    }
    class nc {
      constructor(t) {
        ((this.name = t), (this.providers = new Map()));
      }
      addComponent(t) {
        const e = this.getProvider(t.name);
        if (e.isComponentSet())
          throw new Error(
            `Component ${t.name} has already been registered with ${this.name}`,
          );
        e.setComponent(t);
      }
      addOrOverwriteComponent(t) {
        (this.getProvider(t.name).isComponentSet() &&
          this.providers.delete(t.name),
          this.addComponent(t));
      }
      getProvider(t) {
        if (this.providers.has(t)) return this.providers.get(t);
        const e = new ic(t, this);
        return (this.providers.set(t, e), e);
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
    const sc = [];
    var rc;
    !(function (t) {
      ((t[(t.DEBUG = 0)] = "DEBUG"),
        (t[(t.VERBOSE = 1)] = "VERBOSE"),
        (t[(t.INFO = 2)] = "INFO"),
        (t[(t.WARN = 3)] = "WARN"),
        (t[(t.ERROR = 4)] = "ERROR"),
        (t[(t.SILENT = 5)] = "SILENT"));
    })(rc || (rc = {}));
    const oc = {
        debug: rc.DEBUG,
        verbose: rc.VERBOSE,
        info: rc.INFO,
        warn: rc.WARN,
        error: rc.ERROR,
        silent: rc.SILENT,
      },
      uc = rc.INFO,
      ac = {
        [rc.DEBUG]: "log",
        [rc.VERBOSE]: "log",
        [rc.INFO]: "info",
        [rc.WARN]: "warn",
        [rc.ERROR]: "error",
      },
      cc = (t, e, ...i) => {
        if (e < t.logLevel) return;
        const n = new Date().toISOString(),
          s = ac[e];
        if (!s)
          throw new Error(
            `Attempted to log a message with an invalid logType (value: ${e})`,
          );
        console[s](`[${n}]  ${t.name}:`, ...i);
      };
    class dc {
      constructor(t) {
        ((this.name = t),
          (this.An = uc),
          (this.In = cc),
          (this.Sn = null),
          sc.push(this));
      }
      get logLevel() {
        return this.An;
      }
      set logLevel(t) {
        if (!(t in rc))
          throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this.An = t;
      }
      setLogLevel(t) {
        this.An = "string" == typeof t ? oc[t] : t;
      }
      get logHandler() {
        return this.In;
      }
      set logHandler(t) {
        if ("function" != typeof t)
          throw new TypeError(
            "Value assigned to `logHandler` must be a function",
          );
        this.In = t;
      }
      get userLogHandler() {
        return this.Sn;
      }
      set userLogHandler(t) {
        this.Sn = t;
      }
      debug(...t) {
        (this.Sn && this.Sn(this, rc.DEBUG, ...t),
          this.In(this, rc.DEBUG, ...t));
      }
      log(...t) {
        (this.Sn && this.Sn(this, rc.VERBOSE, ...t),
          this.In(this, rc.VERBOSE, ...t));
      }
      info(...t) {
        (this.Sn && this.Sn(this, rc.INFO, ...t), this.In(this, rc.INFO, ...t));
      }
      warn(...t) {
        (this.Sn && this.Sn(this, rc.WARN, ...t), this.In(this, rc.WARN, ...t));
      }
      error(...t) {
        (this.Sn && this.Sn(this, rc.ERROR, ...t),
          this.In(this, rc.ERROR, ...t));
      }
    }
    let lc, hc;
    const fc = new WeakMap(),
      Dc = new WeakMap(),
      vc = new WeakMap(),
      pc = new WeakMap(),
      bc = new WeakMap();
    let mc = {
      get(t, e, i) {
        if (t instanceof IDBTransaction) {
          if ("done" === e) return Dc.get(t);
          if ("objectStoreNames" === e) return t.objectStoreNames || vc.get(t);
          if ("store" === e)
            return i.objectStoreNames[1]
              ? void 0
              : i.objectStore(i.objectStoreNames[0]);
        }
        return yc(t[e]);
      },
      set: (t, e, i) => ((t[e] = i), !0),
      has: (t, e) =>
        (t instanceof IDBTransaction && ("done" === e || "store" === e)) ||
        e in t,
    };
    function gc(t) {
      return t !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            hc ||
            (hc = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(t)
          ? function (...e) {
              return (t.apply(wc(this), e), yc(fc.get(this)));
            }
          : function (...e) {
              return yc(t.apply(wc(this), e));
            }
        : function (e, ...i) {
            const n = t.call(wc(this), e, ...i);
            return (vc.set(n, e.sort ? e.sort() : [e]), yc(n));
          };
    }
    function _c(t) {
      return "function" == typeof t
        ? gc(t)
        : (t instanceof IDBTransaction &&
            (function (t) {
              if (Dc.has(t)) return;
              const e = new Promise((e, i) => {
                const n = () => {
                    (t.removeEventListener("complete", s),
                      t.removeEventListener("error", r),
                      t.removeEventListener("abort", r));
                  },
                  s = () => {
                    (e(), n());
                  },
                  r = () => {
                    (i(t.error || new DOMException("AbortError", "AbortError")),
                      n());
                  };
                (t.addEventListener("complete", s),
                  t.addEventListener("error", r),
                  t.addEventListener("abort", r));
              });
              Dc.set(t, e);
            })(t),
          (e = t),
          (
            lc ||
            (lc = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some((t) => e instanceof t)
            ? new Proxy(t, mc)
            : t);
      var e;
    }
    function yc(t) {
      if (t instanceof IDBRequest)
        return (function (t) {
          const e = new Promise((e, i) => {
            const n = () => {
                (t.removeEventListener("success", s),
                  t.removeEventListener("error", r));
              },
              s = () => {
                (e(yc(t.result)), n());
              },
              r = () => {
                (i(t.error), n());
              };
            (t.addEventListener("success", s), t.addEventListener("error", r));
          });
          return (
            e
              .then((e) => {
                e instanceof IDBCursor && fc.set(e, t);
              })
              .catch(() => {}),
            bc.set(e, t),
            e
          );
        })(t);
      if (pc.has(t)) return pc.get(t);
      const e = _c(t);
      return (e !== t && (pc.set(t, e), bc.set(e, t)), e);
    }
    const wc = (t) => bc.get(t);
    const Fc = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Ec = ["put", "add", "delete", "clear"],
      Cc = new Map();
    function Ac(t, e) {
      if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
      if (Cc.get(e)) return Cc.get(e);
      const i = e.replace(/FromIndex$/, ""),
        n = e !== i,
        s = Ec.includes(i);
      if (
        !(i in (n ? IDBIndex : IDBObjectStore).prototype) ||
        (!s && !Fc.includes(i))
      )
        return;
      const r = async function (t, ...e) {
        const r = this.transaction(t, s ? "readwrite" : "readonly");
        let o = r.store;
        return (
          n && (o = o.index(e.shift())),
          (await Promise.all([o[i](...e), s && r.done]))[0]
        );
      };
      return (Cc.set(e, r), r);
    }
    mc = ((t) => ({
      ...t,
      get: (e, i, n) => Ac(e, i) || t.get(e, i, n),
      has: (e, i) => !!Ac(e, i) || t.has(e, i),
    }))(mc);
    class Ic {
      constructor(t) {
        this.container = t;
      }
      getPlatformInfoString() {
        return this.container
          .getProviders()
          .map((t) => {
            if (
              (function (t) {
                const e = t.getComponent();
                return "VERSION" === (null == e ? void 0 : e.type);
              })(t)
            ) {
              const e = t.getImmediate();
              return `${e.library}/${e.version}`;
            }
            return null;
          })
          .filter((t) => t)
          .join(" ");
      }
    }
    const Sc = "@firebase/app",
      kc = "0.10.13",
      Tc = new dc("@firebase/app"),
      Bc = "@firebase/app-compat",
      Oc = "@firebase/analytics-compat",
      Nc = "@firebase/analytics",
      jc = "@firebase/app-check-compat",
      Pc = "@firebase/app-check",
      Rc = "@firebase/auth",
      Uc = "@firebase/auth-compat",
      xc = "@firebase/database",
      Lc = "@firebase/data-connect",
      Mc = "@firebase/database-compat",
      Vc = "@firebase/functions",
      $c = "@firebase/functions-compat",
      Hc = "@firebase/installations",
      Wc = "@firebase/installations-compat",
      zc = "@firebase/messaging",
      Gc = "@firebase/messaging-compat",
      Zc = "@firebase/performance",
      Jc = "@firebase/performance-compat",
      Yc = "@firebase/remote-config",
      Kc = "@firebase/remote-config-compat",
      qc = "@firebase/storage",
      Xc = "@firebase/storage-compat",
      Qc = "@firebase/firestore",
      td = "@firebase/vertexai-preview",
      ed = "@firebase/firestore-compat",
      id = "firebase",
      nd = "[DEFAULT]",
      sd = {
        [Sc]: "fire-core",
        [Bc]: "fire-core-compat",
        [Nc]: "fire-analytics",
        [Oc]: "fire-analytics-compat",
        [Pc]: "fire-app-check",
        [jc]: "fire-app-check-compat",
        [Rc]: "fire-auth",
        [Uc]: "fire-auth-compat",
        [xc]: "fire-rtdb",
        [Lc]: "fire-data-connect",
        [Mc]: "fire-rtdb-compat",
        [Vc]: "fire-fn",
        [$c]: "fire-fn-compat",
        [Hc]: "fire-iid",
        [Wc]: "fire-iid-compat",
        [zc]: "fire-fcm",
        [Gc]: "fire-fcm-compat",
        [Zc]: "fire-perf",
        [Jc]: "fire-perf-compat",
        [Yc]: "fire-rc",
        [Kc]: "fire-rc-compat",
        [qc]: "fire-gcs",
        [Xc]: "fire-gcs-compat",
        [Qc]: "fire-fst",
        [ed]: "fire-fst-compat",
        [td]: "fire-vertex",
        "fire-js": "fire-js",
        [id]: "fire-js-all",
      },
      rd = new Map(),
      od = new Map(),
      ud = new Map();
    function ad(t, e) {
      try {
        t.container.addComponent(e);
      } catch (i) {
        Tc.debug(
          `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
          i,
        );
      }
    }
    function cd(t) {
      const e = t.name;
      if (ud.has(e))
        return (
          Tc.debug(`There were multiple attempts to register component ${e}.`),
          !1
        );
      ud.set(e, t);
      for (const e of rd.values()) ad(e, t);
      for (const e of od.values()) ad(e, t);
      return !0;
    }
    function dd(t, e) {
      const i = t.container
        .getProvider("heartbeat")
        .getImmediate({ optional: !0 });
      return (i && i.triggerHeartbeat(), t.container.getProvider(e));
    }
    function ld(t) {
      return void 0 !== t.settings;
    }
    const hd = new Wa("app", "Firebase", {
      "no-app":
        "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}'",
      "duplicate-app":
        "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "server-app-deleted": "Firebase Server App has been deleted",
      "no-options":
        "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument":
        "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument":
        "First argument to `onLog` must be null or a function.",
      "idb-open":
        "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get":
        "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set":
        "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete":
        "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
      "finalization-registry-not-supported":
        "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
      "invalid-server-app-environment":
        "FirebaseServerApp is not for use in browser environments.",
    });
    class fd {
      constructor(t, e, i) {
        ((this.kn = !1),
          (this.Tn = Object.assign({}, t)),
          (this.Bn = Object.assign({}, e)),
          (this.On = e.name),
          (this.Nn = e.automaticDataCollectionEnabled),
          (this.jn = i),
          this.container.addComponent(new tc("app", () => this, "PUBLIC")));
      }
      get automaticDataCollectionEnabled() {
        return (this.checkDestroyed(), this.Nn);
      }
      set automaticDataCollectionEnabled(t) {
        (this.checkDestroyed(), (this.Nn = t));
      }
      get name() {
        return (this.checkDestroyed(), this.On);
      }
      get options() {
        return (this.checkDestroyed(), this.Tn);
      }
      get config() {
        return (this.checkDestroyed(), this.Bn);
      }
      get container() {
        return this.jn;
      }
      get isDeleted() {
        return this.kn;
      }
      set isDeleted(t) {
        this.kn = t;
      }
      checkDestroyed() {
        if (this.isDeleted)
          throw hd.create("app-deleted", { appName: this.On });
      }
    }
    const Dd = "10.14.1";
    function vd(t, e = {}) {
      let i = t;
      if ("object" != typeof e) {
        e = { name: e };
      }
      const n = Object.assign(
          { name: nd, automaticDataCollectionEnabled: !1 },
          e,
        ),
        s = n.name;
      if ("string" != typeof s || !s)
        throw hd.create("bad-app-name", { appName: String(s) });
      if ((i || (i = Ma()), !i)) throw hd.create("no-options");
      const r = rd.get(s);
      if (r) {
        if (Ga(i, r.options) && Ga(n, r.config)) return r;
        throw hd.create("duplicate-app", { appName: s });
      }
      const o = new nc(s);
      for (const t of ud.values()) o.addComponent(t);
      const u = new fd(i, n, o);
      return (rd.set(s, u), u);
    }
    function pd(t, e, i) {
      var n;
      let s = null !== (n = sd[t]) && void 0 !== n ? n : t;
      i && (s += `-${i}`);
      const r = s.match(/\s|\//),
        o = e.match(/\s|\//);
      if (r || o) {
        const t = [`Unable to register library "${s}" with version "${e}":`];
        return (
          r &&
            t.push(
              `library name "${s}" contains illegal characters (whitespace or "/")`,
            ),
          r && o && t.push("and"),
          o &&
            t.push(
              `version name "${e}" contains illegal characters (whitespace or "/")`,
            ),
          void Tc.warn(t.join(" "))
        );
      }
      cd(new tc(`${s}-version`, () => ({ library: s, version: e }), "VERSION"));
    }
    const bd = "firebase-heartbeat-store";
    let md = null;
    function gd() {
      return (
        md ||
          (md = (function (
            t,
            e,
            { blocked: i, upgrade: n, blocking: s, terminated: r } = {},
          ) {
            const o = indexedDB.open(t, e),
              u = yc(o);
            return (
              n &&
                o.addEventListener("upgradeneeded", (t) => {
                  n(
                    yc(o.result),
                    t.oldVersion,
                    t.newVersion,
                    yc(o.transaction),
                    t,
                  );
                }),
              i &&
                o.addEventListener("blocked", (t) =>
                  i(t.oldVersion, t.newVersion, t),
                ),
              u
                .then((t) => {
                  (r && t.addEventListener("close", () => r()),
                    s &&
                      t.addEventListener("versionchange", (t) =>
                        s(t.oldVersion, t.newVersion, t),
                      ));
                })
                .catch(() => {}),
              u
            );
          })("firebase-heartbeat-database", 1, {
            upgrade: (t, e) => {
              if (0 === e)
                try {
                  t.createObjectStore(bd);
                } catch (t) {
                  console.warn(t);
                }
            },
          }).catch((t) => {
            throw hd.create("idb-open", { originalErrorMessage: t.message });
          })),
        md
      );
    }
    async function _d(t, e) {
      try {
        const i = (await gd()).transaction(bd, "readwrite"),
          n = i.objectStore(bd);
        (await n.put(e, yd(t)), await i.done);
      } catch (t) {
        if (t instanceof Ha) Tc.warn(t.message);
        else {
          const e = hd.create("idb-set", {
            originalErrorMessage: null == t ? void 0 : t.message,
          });
          Tc.warn(e.message);
        }
      }
    }
    function yd(t) {
      return `${t.name}!${t.options.appId}`;
    }
    class wd {
      constructor(t) {
        ((this.container = t), (this.Pn = null));
        const e = this.container.getProvider("app").getImmediate();
        ((this.Rn = new Ed(e)),
          (this.Un = this.Rn.read().then((t) => ((this.Pn = t), t))));
      }
      async triggerHeartbeat() {
        var t, e;
        try {
          const i = this.container
              .getProvider("platform-logger")
              .getImmediate()
              .getPlatformInfoString(),
            n = Fd();
          if (
            null ==
              (null === (t = this.Pn) || void 0 === t
                ? void 0
                : t.heartbeats) &&
            ((this.Pn = await this.Un),
            null ==
              (null === (e = this.Pn) || void 0 === e ? void 0 : e.heartbeats))
          )
            return;
          if (
            this.Pn.lastSentHeartbeatDate === n ||
            this.Pn.heartbeats.some((t) => t.date === n)
          )
            return;
          return (
            this.Pn.heartbeats.push({ date: n, agent: i }),
            (this.Pn.heartbeats = this.Pn.heartbeats.filter((t) => {
              const e = new Date(t.date).valueOf();
              return Date.now() - e <= 2592e6;
            })),
            this.Rn.overwrite(this.Pn)
          );
        } catch (t) {
          Tc.warn(t);
        }
      }
      async getHeartbeatsHeader() {
        var t;
        try {
          if (
            (null === this.Pn && (await this.Un),
            null ==
              (null === (t = this.Pn) || void 0 === t
                ? void 0
                : t.heartbeats) || 0 === this.Pn.heartbeats.length)
          )
            return "";
          const e = Fd(),
            { heartbeatsToSend: i, unsentEntries: n } = (function (
              t,
              e = 1024,
            ) {
              const i = [];
              let n = t.slice();
              for (const s of t) {
                const t = i.find((t) => t.agent === s.agent);
                if (t) {
                  if ((t.dates.push(s.date), Cd(i) > e)) {
                    t.dates.pop();
                    break;
                  }
                } else if (
                  (i.push({ agent: s.agent, dates: [s.date] }), Cd(i) > e)
                ) {
                  i.pop();
                  break;
                }
                n = n.slice(1);
              }
              return { heartbeatsToSend: i, unsentEntries: n };
            })(this.Pn.heartbeats),
            s = Pa(JSON.stringify({ version: 2, heartbeats: i }));
          return (
            (this.Pn.lastSentHeartbeatDate = e),
            n.length > 0
              ? ((this.Pn.heartbeats = n), await this.Rn.overwrite(this.Pn))
              : ((this.Pn.heartbeats = []), this.Rn.overwrite(this.Pn)),
            s
          );
        } catch (t) {
          return (Tc.warn(t), "");
        }
      }
    }
    function Fd() {
      return new Date().toISOString().substring(0, 10);
    }
    class Ed {
      constructor(t) {
        ((this.app = t), (this.xn = this.runIndexedDBEnvironmentCheck()));
      }
      async runIndexedDBEnvironmentCheck() {
        return (
          !!(function () {
            try {
              return "object" == typeof indexedDB;
            } catch (t) {
              return !1;
            }
          })() &&
          new Promise((t, e) => {
            try {
              let i = !0;
              const n =
                  "validate-browser-context-for-indexeddb-analytics-module",
                s = self.indexedDB.open(n);
              ((s.onsuccess = () => {
                (s.result.close(),
                  i || self.indexedDB.deleteDatabase(n),
                  t(!0));
              }),
                (s.onupgradeneeded = () => {
                  i = !1;
                }),
                (s.onerror = () => {
                  var t;
                  e(
                    (null === (t = s.error) || void 0 === t
                      ? void 0
                      : t.message) || "",
                  );
                }));
            } catch (t) {
              e(t);
            }
          })
            .then(() => !0)
            .catch(() => !1)
        );
      }
      async read() {
        if (await this.xn) {
          const t = await (async function (t) {
            try {
              const e = (await gd()).transaction(bd),
                i = await e.objectStore(bd).get(yd(t));
              return (await e.done, i);
            } catch (t) {
              if (t instanceof Ha) Tc.warn(t.message);
              else {
                const e = hd.create("idb-get", {
                  originalErrorMessage: null == t ? void 0 : t.message,
                });
                Tc.warn(e.message);
              }
            }
          })(this.app);
          return (null == t ? void 0 : t.heartbeats) ? t : { heartbeats: [] };
        }
        return { heartbeats: [] };
      }
      async overwrite(t) {
        var e;
        if (await this.xn) {
          const i = await this.read();
          return _d(this.app, {
            lastSentHeartbeatDate:
              null !== (e = t.lastSentHeartbeatDate) && void 0 !== e
                ? e
                : i.lastSentHeartbeatDate,
            heartbeats: t.heartbeats,
          });
        }
      }
      async add(t) {
        var e;
        if (await this.xn) {
          const i = await this.read();
          return _d(this.app, {
            lastSentHeartbeatDate:
              null !== (e = t.lastSentHeartbeatDate) && void 0 !== e
                ? e
                : i.lastSentHeartbeatDate,
            heartbeats: [...i.heartbeats, ...t.heartbeats],
          });
        }
      }
    }
    function Cd(t) {
      return Pa(JSON.stringify({ version: 2, heartbeats: t })).length;
    }
    var Ad;
    ((Ad = ""),
      cd(new tc("platform-logger", (t) => new Ic(t), "PRIVATE")),
      cd(new tc("heartbeat", (t) => new wd(t), "PRIVATE")),
      pd(Sc, kc, Ad),
      pd(Sc, kc, "esm2017"),
      pd("fire-js", ""));
    function Id(t, e) {
      var i = {};
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) &&
          e.indexOf(n) < 0 &&
          (i[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var s = 0;
        for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
          e.indexOf(n[s]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
            (i[n[s]] = t[n[s]]);
      }
      return i;
    }
    Object.create;
    Object.create;
    "function" == typeof SuppressedError && SuppressedError;
    function Sd() {
      return {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      };
    }
    const kd = Sd,
      Td = new Wa("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      }),
      Bd = new dc("@firebase/auth");
    function Od(t, ...e) {
      Bd.logLevel <= rc.ERROR && Bd.error(`Auth (${Dd}): ${t}`, ...e);
    }
    function Nd(t, ...e) {
      throw Ud(t, ...e);
    }
    function jd(t, ...e) {
      return Ud(t, ...e);
    }
    function Pd(t, e, i) {
      const n = Object.assign(Object.assign({}, kd()), { [e]: i });
      return new Wa("auth", "Firebase", n).create(e, { appName: t.name });
    }
    function Rd(t) {
      return Pd(
        t,
        "operation-not-supported-in-this-environment",
        "Operations that alter the current user are not supported in conjunction with FirebaseServerApp",
      );
    }
    function Ud(t, ...e) {
      if ("string" != typeof t) {
        const i = e[0],
          n = [...e.slice(1)];
        return (n[0] && (n[0].appName = t.name), t.Ln.create(i, ...n));
      }
      return Td.create(t, ...e);
    }
    function xd(t, e, ...i) {
      if (!t) throw Ud(e, ...i);
    }
    function Ld(t) {
      const e = "INTERNAL ASSERTION FAILED: " + t;
      throw (Od(e), new Error(e));
    }
    function Md(t, e) {
      t || Ld(e);
    }
    function Vd() {
      var t;
      return (
        ("undefined" != typeof self &&
          (null === (t = self.location) || void 0 === t ? void 0 : t.href)) ||
        ""
      );
    }
    function $d() {
      return "http:" === Hd() || "https:" === Hd();
    }
    function Hd() {
      var t;
      return (
        ("undefined" != typeof self &&
          (null === (t = self.location) || void 0 === t
            ? void 0
            : t.protocol)) ||
        null
      );
    }
    function Wd() {
      return (
        !(
          "undefined" != typeof navigator &&
          navigator &&
          "onLine" in navigator &&
          "boolean" == typeof navigator.onLine &&
          ($d() ||
            (function () {
              const t =
                "object" == typeof chrome
                  ? chrome.runtime
                  : "object" == typeof browser
                    ? browser.runtime
                    : void 0;
              return "object" == typeof t && void 0 !== t.id;
            })() ||
            "connection" in navigator)
        ) || navigator.onLine
      );
    }
    class zd {
      static initialize(t, e, i) {
        ((this.fetchImpl = t),
          e && (this.headersImpl = e),
          i && (this.responseImpl = i));
      }
      static fetch() {
        return this.fetchImpl
          ? this.fetchImpl
          : "undefined" != typeof self && "fetch" in self
            ? self.fetch
            : "undefined" != typeof globalThis && globalThis.fetch
              ? globalThis.fetch
              : "undefined" != typeof fetch
                ? fetch
                : void Ld(
                    "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                  );
      }
      static headers() {
        return this.headersImpl
          ? this.headersImpl
          : "undefined" != typeof self && "Headers" in self
            ? self.Headers
            : "undefined" != typeof globalThis && globalThis.Headers
              ? globalThis.Headers
              : "undefined" != typeof Headers
                ? Headers
                : void Ld(
                    "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                  );
      }
      static response() {
        return this.responseImpl
          ? this.responseImpl
          : "undefined" != typeof self && "Response" in self
            ? self.Response
            : "undefined" != typeof globalThis && globalThis.Response
              ? globalThis.Response
              : "undefined" != typeof Response
                ? Response
                : void Ld(
                    "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                  );
      }
    }
    const Gd = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "missing-password",
        INVALID_LOGIN_CREDENTIALS: "invalid-credential",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
          "password-does-not-meet-requirements",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
        RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "missing-client-type",
        MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
        INVALID_REQ_TYPE: "invalid-req-type",
      },
      Zd = new (class {
        constructor(t, e) {
          ((this.shortDelay = t),
            (this.longDelay = e),
            Md(e > t, "Short delay should be less than long delay!"),
            (this.isMobile =
              ("undefined" != typeof window &&
                !!(window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  $a(),
                )) ||
              ("object" == typeof navigator &&
                "ReactNative" === navigator.product)));
        }
        get() {
          return Wd()
            ? this.isMobile
              ? this.longDelay
              : this.shortDelay
            : Math.min(5e3, this.shortDelay);
        }
      })(3e4, 6e4);
    function Jd(t, e) {
      return t.tenantId && !e.tenantId
        ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
        : e;
    }
    async function Yd(t, e, i, n, s = {}) {
      return Kd(t, s, async () => {
        let s = {},
          r = {};
        n && ("GET" === e ? (r = n) : (s = { body: JSON.stringify(n) }));
        const o = Ja(Object.assign({ key: t.config.apiKey }, r)).slice(1),
          u = await t.Mn();
        ((u["Content-Type"] = "application/json"),
          t.languageCode && (u["X-Firebase-Locale"] = t.languageCode));
        const a = Object.assign({ method: e, headers: u }, s);
        return (
          ("undefined" != typeof navigator &&
            "Cloudflare-Workers" === navigator.userAgent) ||
            (a.referrerPolicy = "no-referrer"),
          zd.fetch()(Xd(t, t.config.apiHost, i, o), a)
        );
      });
    }
    async function Kd(t, e, i) {
      t.Vn = !1;
      const n = Object.assign(Object.assign({}, Gd), e);
      try {
        const e = new tl(t),
          s = await Promise.race([i(), e.promise]);
        e.clearNetworkTimeout();
        const r = await s.json();
        if ("needConfirmation" in r)
          throw el(t, "account-exists-with-different-credential", r);
        if (s.ok && !("errorMessage" in r)) return r;
        {
          const e = s.ok ? r.errorMessage : r.error.message,
            [i, o] = e.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === i)
            throw el(t, "credential-already-in-use", r);
          if ("EMAIL_EXISTS" === i) throw el(t, "email-already-in-use", r);
          if ("USER_DISABLED" === i) throw el(t, "user-disabled", r);
          const u = n[i] || i.toLowerCase().replace(/[_\s]+/g, "-");
          if (o) throw Pd(t, u, o);
          Nd(t, u);
        }
      } catch (e) {
        if (e instanceof Ha) throw e;
        Nd(t, "network-request-failed", { message: String(e) });
      }
    }
    async function qd(t, e, i, n, s = {}) {
      const r = await Yd(t, e, i, n, s);
      return (
        "mfaPendingCredential" in r &&
          Nd(t, "multi-factor-auth-required", { $n: r }),
        r
      );
    }
    function Xd(t, e, i, n) {
      const s = `${e}${i}?${n}`;
      return t.config.emulator
        ? (function (t, e) {
            Md(t.emulator, "Emulator should always be set here");
            const { url: i } = t.emulator;
            return e ? `${i}${e.startsWith("/") ? e.slice(1) : e}` : i;
          })(t.config, s)
        : `${t.config.apiScheme}://${s}`;
    }
    function Qd(t) {
      switch (t) {
        case "ENFORCE":
          return "ENFORCE";
        case "AUDIT":
          return "AUDIT";
        case "OFF":
          return "OFF";
        default:
          return "ENFORCEMENT_STATE_UNSPECIFIED";
      }
    }
    class tl {
      constructor(t) {
        ((this.auth = t),
          (this.timer = null),
          (this.promise = new Promise((t, e) => {
            this.timer = setTimeout(
              () => e(jd(this.auth, "network-request-failed")),
              Zd.get(),
            );
          })));
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function el(t, e, i) {
      const n = { appName: t.name };
      (i.email && (n.email = i.email),
        i.phoneNumber && (n.phoneNumber = i.phoneNumber));
      const s = jd(t, e, n);
      return ((s.customData.Hn = i), s);
    }
    function il(t) {
      return void 0 !== t && void 0 !== t.enterprise;
    }
    class nl {
      constructor(t) {
        if (
          ((this.siteKey = ""),
          (this.recaptchaEnforcementState = []),
          void 0 === t.recaptchaKey)
        )
          throw new Error("recaptchaKey undefined");
        ((this.siteKey = t.recaptchaKey.split("/")[3]),
          (this.recaptchaEnforcementState = t.recaptchaEnforcementState));
      }
      getProviderEnforcementState(t) {
        if (
          !this.recaptchaEnforcementState ||
          0 === this.recaptchaEnforcementState.length
        )
          return null;
        for (const e of this.recaptchaEnforcementState)
          if (e.provider && e.provider === t) return Qd(e.enforcementState);
        return null;
      }
      isProviderEnabled(t) {
        return (
          "ENFORCE" === this.getProviderEnforcementState(t) ||
          "AUDIT" === this.getProviderEnforcementState(t)
        );
      }
    }
    async function sl(t, e) {
      return Yd(t, "GET", "/v2/recaptchaConfig", Jd(t, e));
    }
    async function rl(t, e) {
      return Yd(t, "POST", "/v1/accounts:lookup", e);
    }
    function ol(t) {
      if (t)
        try {
          const e = new Date(Number(t));
          if (!isNaN(e.getTime())) return e.toUTCString();
        } catch (t) {}
    }
    function ul(t) {
      return 1e3 * Number(t);
    }
    function al(t) {
      const [e, i, n] = t.split(".");
      if (void 0 === e || void 0 === i || void 0 === n)
        return (Od("JWT malformed, contained fewer than 3 sections"), null);
      try {
        const t = Ra(i);
        return t
          ? JSON.parse(t)
          : (Od("Failed to decode base64 JWT payload"), null);
      } catch (t) {
        return (
          Od(
            "Caught error parsing JWT payload as JSON",
            null == t ? void 0 : t.toString(),
          ),
          null
        );
      }
    }
    function cl(t) {
      const e = al(t);
      return (
        xd(e, "internal-error"),
        xd(void 0 !== e.exp, "internal-error"),
        xd(void 0 !== e.iat, "internal-error"),
        Number(e.exp) - Number(e.iat)
      );
    }
    async function dl(t, e, i = !1) {
      if (i) return e;
      try {
        return await e;
      } catch (e) {
        throw (
          e instanceof Ha &&
            (function ({ code: t }) {
              return (
                "auth/user-disabled" === t || "auth/user-token-expired" === t
              );
            })(e) &&
            t.auth.currentUser === t &&
            (await t.auth.signOut()),
          e
        );
      }
    }
    class ll {
      constructor(t) {
        ((this.user = t),
          (this.isRunning = !1),
          (this.timerId = null),
          (this.errorBackoff = 3e4));
      }
      Wn() {
        this.isRunning || ((this.isRunning = !0), this.schedule());
      }
      zn() {
        this.isRunning &&
          ((this.isRunning = !1),
          null !== this.timerId && clearTimeout(this.timerId));
      }
      getInterval(t) {
        var e;
        if (t) {
          const t = this.errorBackoff;
          return (
            (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)),
            t
          );
        }
        {
          this.errorBackoff = 3e4;
          const t =
            (null !== (e = this.user.stsTokenManager.expirationTime) &&
            void 0 !== e
              ? e
              : 0) -
            Date.now() -
            3e5;
          return Math.max(0, t);
        }
      }
      schedule(t = !1) {
        if (!this.isRunning) return;
        const e = this.getInterval(t);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, e);
      }
      async iteration() {
        try {
          await this.user.getIdToken(!0);
        } catch (t) {
          return void (
            "auth/network-request-failed" === (null == t ? void 0 : t.code) &&
            this.schedule(!0)
          );
        }
        this.schedule();
      }
    }
    class hl {
      constructor(t, e) {
        ((this.createdAt = t), (this.lastLoginAt = e), this.Gn());
      }
      Gn() {
        ((this.lastSignInTime = ol(this.lastLoginAt)),
          (this.creationTime = ol(this.createdAt)));
      }
      Zn(t) {
        ((this.createdAt = t.createdAt),
          (this.lastLoginAt = t.lastLoginAt),
          this.Gn());
      }
      toJSON() {
        return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
      }
    }
    async function fl(t) {
      var e;
      const i = t.auth,
        n = await t.getIdToken(),
        s = await dl(t, rl(i, { idToken: n }));
      xd(null == s ? void 0 : s.users.length, i, "internal-error");
      const r = s.users[0];
      t.Jn(r);
      const o = (
          null === (e = r.providerUserInfo) || void 0 === e ? void 0 : e.length
        )
          ? Dl(r.providerUserInfo)
          : [],
        u =
          ((a = t.providerData),
          (c = o),
          [
            ...a.filter((t) => !c.some((e) => e.providerId === t.providerId)),
            ...c,
          ]);
      var a, c;
      const d = t.isAnonymous,
        l = !((t.email && r.passwordHash) || (null == u ? void 0 : u.length)),
        h = !!d && l,
        f = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: u,
          metadata: new hl(r.createdAt, r.lastLoginAt),
          isAnonymous: h,
        };
      Object.assign(t, f);
    }
    function Dl(t) {
      return t.map((t) => {
        var { providerId: e } = t,
          i = Id(t, ["providerId"]);
        return {
          providerId: e,
          uid: i.rawId || "",
          displayName: i.displayName || null,
          email: i.email || null,
          phoneNumber: i.phoneNumber || null,
          photoURL: i.photoUrl || null,
        };
      });
    }
    class vl {
      constructor() {
        ((this.refreshToken = null),
          (this.accessToken = null),
          (this.expirationTime = null));
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(t) {
        (xd(t.idToken, "internal-error"),
          xd(void 0 !== t.idToken, "internal-error"),
          xd(void 0 !== t.refreshToken, "internal-error"));
        const e =
          "expiresIn" in t && void 0 !== t.expiresIn
            ? Number(t.expiresIn)
            : cl(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, e);
      }
      updateFromIdToken(t) {
        xd(0 !== t.length, "internal-error");
        const e = cl(t);
        this.updateTokensAndExpiration(t, null, e);
      }
      async getToken(t, e = !1) {
        return e || !this.accessToken || this.isExpired
          ? (xd(this.refreshToken, t, "user-token-expired"),
            this.refreshToken
              ? (await this.refresh(t, this.refreshToken), this.accessToken)
              : null)
          : this.accessToken;
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(t, e) {
        const {
          accessToken: i,
          refreshToken: n,
          expiresIn: s,
        } = await (async function (t, e) {
          const i = await Kd(t, {}, async () => {
            const i = Ja({
                grant_type: "refresh_token",
                refresh_token: e,
              }).slice(1),
              { tokenApiHost: n, apiKey: s } = t.config,
              r = Xd(t, n, "/v1/token", `key=${s}`),
              o = await t.Mn();
            return (
              (o["Content-Type"] = "application/x-www-form-urlencoded"),
              zd.fetch()(r, { method: "POST", headers: o, body: i })
            );
          });
          return {
            accessToken: i.access_token,
            expiresIn: i.expires_in,
            refreshToken: i.refresh_token,
          };
        })(t, e);
        this.updateTokensAndExpiration(i, n, Number(s));
      }
      updateTokensAndExpiration(t, e, i) {
        ((this.refreshToken = e || null),
          (this.accessToken = t || null),
          (this.expirationTime = Date.now() + 1e3 * i));
      }
      static fromJSON(t, e) {
        const { refreshToken: i, accessToken: n, expirationTime: s } = e,
          r = new vl();
        return (
          i &&
            (xd("string" == typeof i, "internal-error", { appName: t }),
            (r.refreshToken = i)),
          n &&
            (xd("string" == typeof n, "internal-error", { appName: t }),
            (r.accessToken = n)),
          s &&
            (xd("number" == typeof s, "internal-error", { appName: t }),
            (r.expirationTime = s)),
          r
        );
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime,
        };
      }
      Yn(t) {
        ((this.accessToken = t.accessToken),
          (this.refreshToken = t.refreshToken),
          (this.expirationTime = t.expirationTime));
      }
      Kn() {
        return Object.assign(new vl(), this.toJSON());
      }
      qn() {
        return Ld("not implemented");
      }
    }
    function pl(t, e) {
      xd("string" == typeof t || void 0 === t, "internal-error", {
        appName: e,
      });
    }
    class bl {
      constructor(t) {
        var { uid: e, auth: i, stsTokenManager: n } = t,
          s = Id(t, ["uid", "auth", "stsTokenManager"]);
        ((this.providerId = "firebase"),
          (this.proactiveRefresh = new ll(this)),
          (this.reloadUserInfo = null),
          (this.reloadListener = null),
          (this.uid = e),
          (this.auth = i),
          (this.stsTokenManager = n),
          (this.accessToken = n.accessToken),
          (this.displayName = s.displayName || null),
          (this.email = s.email || null),
          (this.emailVerified = s.emailVerified || !1),
          (this.phoneNumber = s.phoneNumber || null),
          (this.photoURL = s.photoURL || null),
          (this.isAnonymous = s.isAnonymous || !1),
          (this.tenantId = s.tenantId || null),
          (this.providerData = s.providerData ? [...s.providerData] : []),
          (this.metadata = new hl(
            s.createdAt || void 0,
            s.lastLoginAt || void 0,
          )));
      }
      async getIdToken(t) {
        const e = await dl(this, this.stsTokenManager.getToken(this.auth, t));
        return (
          xd(e, this.auth, "internal-error"),
          this.accessToken !== e &&
            ((this.accessToken = e),
            await this.auth.Xn(this),
            this.auth.Qn(this)),
          e
        );
      }
      getIdTokenResult(t) {
        return (async function (t, e = !1) {
          const i = Qa(t),
            n = await i.getIdToken(e),
            s = al(n);
          xd(s && s.exp && s.auth_time && s.iat, i.auth, "internal-error");
          const r = "object" == typeof s.firebase ? s.firebase : void 0,
            o = null == r ? void 0 : r.sign_in_provider;
          return {
            claims: s,
            token: n,
            authTime: ol(ul(s.auth_time)),
            issuedAtTime: ol(ul(s.iat)),
            expirationTime: ol(ul(s.exp)),
            signInProvider: o || null,
            signInSecondFactor:
              (null == r ? void 0 : r.sign_in_second_factor) || null,
          };
        })(this, t);
      }
      reload() {
        return (async function (t) {
          const e = Qa(t);
          (await fl(e), await e.auth.Xn(e), e.auth.Qn(e));
        })(this);
      }
      Yn(t) {
        this !== t &&
          (xd(this.uid === t.uid, this.auth, "internal-error"),
          (this.displayName = t.displayName),
          (this.photoURL = t.photoURL),
          (this.email = t.email),
          (this.emailVerified = t.emailVerified),
          (this.phoneNumber = t.phoneNumber),
          (this.isAnonymous = t.isAnonymous),
          (this.tenantId = t.tenantId),
          (this.providerData = t.providerData.map((t) => Object.assign({}, t))),
          this.metadata.Zn(t.metadata),
          this.stsTokenManager.Yn(t.stsTokenManager));
      }
      Kn(t) {
        const e = new bl(
          Object.assign(Object.assign({}, this), {
            auth: t,
            stsTokenManager: this.stsTokenManager.Kn(),
          }),
        );
        return (e.metadata.Zn(this.metadata), e);
      }
      ts(t) {
        (xd(!this.reloadListener, this.auth, "internal-error"),
          (this.reloadListener = t),
          this.reloadUserInfo &&
            (this.Jn(this.reloadUserInfo), (this.reloadUserInfo = null)));
      }
      Jn(t) {
        this.reloadListener
          ? this.reloadListener(t)
          : (this.reloadUserInfo = t);
      }
      es() {
        this.proactiveRefresh.Wn();
      }
      ns() {
        this.proactiveRefresh.zn();
      }
      async ss(t, e = !1) {
        let i = !1;
        (t.idToken &&
          t.idToken !== this.stsTokenManager.accessToken &&
          (this.stsTokenManager.updateFromServerResponse(t), (i = !0)),
          e && (await fl(this)),
          await this.auth.Xn(this),
          i && this.auth.Qn(this));
      }
      async delete() {
        if (ld(this.auth.app)) return Promise.reject(Rd(this.auth));
        const t = await this.getIdToken();
        return (
          await dl(
            this,
            (async function (t, e) {
              return Yd(t, "POST", "/v1/accounts:delete", e);
            })(this.auth, { idToken: t }),
          ),
          this.stsTokenManager.clearRefreshToken(),
          this.auth.signOut()
        );
      }
      toJSON() {
        return Object.assign(
          Object.assign(
            {
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((t) => Object.assign({}, t)),
              stsTokenManager: this.stsTokenManager.toJSON(),
              rs: this.rs,
            },
            this.metadata.toJSON(),
          ),
          { apiKey: this.auth.config.apiKey, appName: this.auth.name },
        );
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static us(t, e) {
        var i, n, s, r, o, u, a, c;
        const d = null !== (i = e.displayName) && void 0 !== i ? i : void 0,
          l = null !== (n = e.email) && void 0 !== n ? n : void 0,
          h = null !== (s = e.phoneNumber) && void 0 !== s ? s : void 0,
          f = null !== (r = e.photoURL) && void 0 !== r ? r : void 0,
          D = null !== (o = e.tenantId) && void 0 !== o ? o : void 0,
          v = null !== (u = e.rs) && void 0 !== u ? u : void 0,
          p = null !== (a = e.createdAt) && void 0 !== a ? a : void 0,
          b = null !== (c = e.lastLoginAt) && void 0 !== c ? c : void 0,
          {
            uid: m,
            emailVerified: g,
            isAnonymous: _,
            providerData: y,
            stsTokenManager: w,
          } = e;
        xd(m && w, t, "internal-error");
        const F = vl.fromJSON(this.name, w);
        (xd("string" == typeof m, t, "internal-error"),
          pl(d, t.name),
          pl(l, t.name),
          xd("boolean" == typeof g, t, "internal-error"),
          xd("boolean" == typeof _, t, "internal-error"),
          pl(h, t.name),
          pl(f, t.name),
          pl(D, t.name),
          pl(v, t.name),
          pl(p, t.name),
          pl(b, t.name));
        const E = new bl({
          uid: m,
          auth: t,
          email: l,
          emailVerified: g,
          displayName: d,
          isAnonymous: _,
          photoURL: f,
          phoneNumber: h,
          tenantId: D,
          stsTokenManager: F,
          createdAt: p,
          lastLoginAt: b,
        });
        return (
          y &&
            Array.isArray(y) &&
            (E.providerData = y.map((t) => Object.assign({}, t))),
          v && (E.rs = v),
          E
        );
      }
      static async cs(t, e, i = !1) {
        const n = new vl();
        n.updateFromServerResponse(e);
        const s = new bl({
          uid: e.localId,
          auth: t,
          stsTokenManager: n,
          isAnonymous: i,
        });
        return (await fl(s), s);
      }
      static async ds(t, e, i) {
        const n = e.users[0];
        xd(void 0 !== n.localId, "internal-error");
        const s = void 0 !== n.providerUserInfo ? Dl(n.providerUserInfo) : [],
          r = !((n.email && n.passwordHash) || (null == s ? void 0 : s.length)),
          o = new vl();
        o.updateFromIdToken(i);
        const u = new bl({
            uid: n.localId,
            auth: t,
            stsTokenManager: o,
            isAnonymous: r,
          }),
          a = {
            uid: n.localId,
            displayName: n.displayName || null,
            photoURL: n.photoUrl || null,
            email: n.email || null,
            emailVerified: n.emailVerified || !1,
            phoneNumber: n.phoneNumber || null,
            tenantId: n.tenantId || null,
            providerData: s,
            metadata: new hl(n.createdAt, n.lastLoginAt),
            isAnonymous: !(
              (n.email && n.passwordHash) ||
              (null == s ? void 0 : s.length)
            ),
          };
        return (Object.assign(u, a), u);
      }
    }
    const ml = new Map();
    function gl(t) {
      Md(t instanceof Function, "Expected a class definition");
      let e = ml.get(t);
      return e
        ? (Md(e instanceof t, "Instance stored in cache mismatched with class"),
          e)
        : ((e = new t()), ml.set(t, e), e);
    }
    class _l {
      constructor() {
        ((this.type = "NONE"), (this.storage = {}));
      }
      async ls() {
        return !0;
      }
      async hs(t, e) {
        this.storage[t] = e;
      }
      async fs(t) {
        const e = this.storage[t];
        return void 0 === e ? null : e;
      }
      async Ds(t) {
        delete this.storage[t];
      }
      vs(t, e) {}
      ps(t, e) {}
    }
    _l.type = "NONE";
    const yl = _l;
    function wl(t, e, i) {
      return `firebase:${t}:${e}:${i}`;
    }
    class Fl {
      constructor(t, e, i) {
        ((this.persistence = t), (this.auth = e), (this.userKey = i));
        const { config: n, name: s } = this.auth;
        ((this.fullUserKey = wl(this.userKey, n.apiKey, s)),
          (this.fullPersistenceKey = wl("persistence", n.apiKey, s)),
          (this.boundEventHandler = e.bs.bind(e)),
          this.persistence.vs(this.fullUserKey, this.boundEventHandler));
      }
      setCurrentUser(t) {
        return this.persistence.hs(this.fullUserKey, t.toJSON());
      }
      async getCurrentUser() {
        const t = await this.persistence.fs(this.fullUserKey);
        return t ? bl.us(this.auth, t) : null;
      }
      removeCurrentUser() {
        return this.persistence.Ds(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence.hs(
          this.fullPersistenceKey,
          this.persistence.type,
        );
      }
      async setPersistence(t) {
        if (this.persistence === t) return;
        const e = await this.getCurrentUser();
        return (
          await this.removeCurrentUser(),
          (this.persistence = t),
          e ? this.setCurrentUser(e) : void 0
        );
      }
      delete() {
        this.persistence.ps(this.fullUserKey, this.boundEventHandler);
      }
      static async create(t, e, i = "authUser") {
        if (!e.length) return new Fl(gl(yl), t, i);
        const n = (
          await Promise.all(
            e.map(async (t) => {
              if (await t.ls()) return t;
            }),
          )
        ).filter((t) => t);
        let s = n[0] || gl(yl);
        const r = wl(i, t.config.apiKey, t.name);
        let o = null;
        for (const i of e)
          try {
            const e = await i.fs(r);
            if (e) {
              const n = bl.us(t, e);
              (i !== s && (o = n), (s = i));
              break;
            }
          } catch (t) {}
        const u = n.filter((t) => t.gs);
        return s.gs && u.length
          ? ((s = u[0]),
            o && (await s.hs(r, o.toJSON())),
            await Promise.all(
              e.map(async (t) => {
                if (t !== s)
                  try {
                    await t.Ds(r);
                  } catch (t) {}
              }),
            ),
            new Fl(s, t, i))
          : new Fl(s, t, i);
      }
    }
    function El(t) {
      const e = t.toLowerCase();
      if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
        return "Opera";
      if (Cl(e)) return "IEMobile";
      if (e.includes("msie") || e.includes("trident/")) return "IE";
      if (e.includes("edge/")) return "Edge";
      if (
        (function (t = $a()) {
          return /firefox\//i.test(t);
        })(e)
      )
        return "Firefox";
      if (e.includes("silk/")) return "Silk";
      if (Il(e)) return "Blackberry";
      if (Sl(e)) return "Webos";
      if (
        (function (t = $a()) {
          const e = t.toLowerCase();
          return (
            e.includes("safari/") &&
            !e.includes("chrome/") &&
            !e.includes("crios/") &&
            !e.includes("android")
          );
        })(e)
      )
        return "Safari";
      if (
        (e.includes("chrome/") ||
          (function (t = $a()) {
            return /crios\//i.test(t);
          })(e)) &&
        !e.includes("edge/")
      )
        return "Chrome";
      if (Al(e)) return "Android";
      {
        const e = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          i = t.match(e);
        if (2 === (null == i ? void 0 : i.length)) return i[1];
      }
      return "Other";
    }
    function Cl(t = $a()) {
      return /iemobile/i.test(t);
    }
    function Al(t = $a()) {
      return /android/i.test(t);
    }
    function Il(t = $a()) {
      return /blackberry/i.test(t);
    }
    function Sl(t = $a()) {
      return /webos/i.test(t);
    }
    function kl(t, e = []) {
      let i;
      switch (t) {
        case "Browser":
          i = El($a());
          break;
        case "Worker":
          i = `${El($a())}-${t}`;
          break;
        default:
          i = t;
      }
      const n = e.length ? e.join(",") : "FirebaseCore-web";
      return `${i}/JsCore/${Dd}/${n}`;
    }
    class Tl {
      constructor(t) {
        ((this.auth = t), (this.queue = []));
      }
      pushCallback(t, e) {
        const i = (e) =>
          new Promise((i, n) => {
            try {
              i(t(e));
            } catch (t) {
              n(t);
            }
          });
        ((i.onAbort = e), this.queue.push(i));
        const n = this.queue.length - 1;
        return () => {
          this.queue[n] = () => Promise.resolve();
        };
      }
      async runMiddleware(t) {
        if (this.auth.currentUser === t) return;
        const e = [];
        try {
          for (const i of this.queue)
            (await i(t), i.onAbort && e.push(i.onAbort));
        } catch (t) {
          e.reverse();
          for (const t of e)
            try {
              t();
            } catch (t) {}
          throw this.auth.Ln.create("login-blocked", {
            originalMessage: null == t ? void 0 : t.message,
          });
        }
      }
    }
    class Bl {
      constructor(t) {
        var e, i, n, s;
        const r = t.customStrengthOptions;
        ((this.customStrengthOptions = {}),
          (this.customStrengthOptions.minPasswordLength =
            null !== (e = r.minPasswordLength) && void 0 !== e ? e : 6),
          r.maxPasswordLength &&
            (this.customStrengthOptions.maxPasswordLength =
              r.maxPasswordLength),
          void 0 !== r.containsLowercaseCharacter &&
            (this.customStrengthOptions.containsLowercaseLetter =
              r.containsLowercaseCharacter),
          void 0 !== r.containsUppercaseCharacter &&
            (this.customStrengthOptions.containsUppercaseLetter =
              r.containsUppercaseCharacter),
          void 0 !== r.containsNumericCharacter &&
            (this.customStrengthOptions.containsNumericCharacter =
              r.containsNumericCharacter),
          void 0 !== r.containsNonAlphanumericCharacter &&
            (this.customStrengthOptions.containsNonAlphanumericCharacter =
              r.containsNonAlphanumericCharacter),
          (this.enforcementState = t.enforcementState),
          "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
            (this.enforcementState = "OFF"),
          (this.allowedNonAlphanumericCharacters =
            null !==
              (n =
                null === (i = t.allowedNonAlphanumericCharacters) ||
                void 0 === i
                  ? void 0
                  : i.join("")) && void 0 !== n
              ? n
              : ""),
          (this.forceUpgradeOnSignin =
            null !== (s = t.forceUpgradeOnSignin) && void 0 !== s && s),
          (this.schemaVersion = t.schemaVersion));
      }
      validatePassword(t) {
        var e, i, n, s, r, o;
        const u = { isValid: !0, passwordPolicy: this };
        return (
          this.validatePasswordLengthOptions(t, u),
          this.validatePasswordCharacterOptions(t, u),
          u.isValid &&
            (u.isValid =
              null === (e = u.meetsMinPasswordLength) || void 0 === e || e),
          u.isValid &&
            (u.isValid =
              null === (i = u.meetsMaxPasswordLength) || void 0 === i || i),
          u.isValid &&
            (u.isValid =
              null === (n = u.containsLowercaseLetter) || void 0 === n || n),
          u.isValid &&
            (u.isValid =
              null === (s = u.containsUppercaseLetter) || void 0 === s || s),
          u.isValid &&
            (u.isValid =
              null === (r = u.containsNumericCharacter) || void 0 === r || r),
          u.isValid &&
            (u.isValid =
              null === (o = u.containsNonAlphanumericCharacter) ||
              void 0 === o ||
              o),
          u
        );
      }
      validatePasswordLengthOptions(t, e) {
        const i = this.customStrengthOptions.minPasswordLength,
          n = this.customStrengthOptions.maxPasswordLength;
        (i && (e.meetsMinPasswordLength = t.length >= i),
          n && (e.meetsMaxPasswordLength = t.length <= n));
      }
      validatePasswordCharacterOptions(t, e) {
        let i;
        this.updatePasswordCharacterOptionsStatuses(e, !1, !1, !1, !1);
        for (let n = 0; n < t.length; n++)
          ((i = t.charAt(n)),
            this.updatePasswordCharacterOptionsStatuses(
              e,
              i >= "a" && i <= "z",
              i >= "A" && i <= "Z",
              i >= "0" && i <= "9",
              this.allowedNonAlphanumericCharacters.includes(i),
            ));
      }
      updatePasswordCharacterOptionsStatuses(t, e, i, n, s) {
        (this.customStrengthOptions.containsLowercaseLetter &&
          (t.containsLowercaseLetter || (t.containsLowercaseLetter = e)),
          this.customStrengthOptions.containsUppercaseLetter &&
            (t.containsUppercaseLetter || (t.containsUppercaseLetter = i)),
          this.customStrengthOptions.containsNumericCharacter &&
            (t.containsNumericCharacter || (t.containsNumericCharacter = n)),
          this.customStrengthOptions.containsNonAlphanumericCharacter &&
            (t.containsNonAlphanumericCharacter ||
              (t.containsNonAlphanumericCharacter = s)));
      }
    }
    class Ol {
      constructor(t, e, i, n) {
        ((this.app = t),
          (this.heartbeatServiceProvider = e),
          (this.appCheckServiceProvider = i),
          (this.config = n),
          (this.currentUser = null),
          (this.emulatorConfig = null),
          (this.operations = Promise.resolve()),
          (this.authStateSubscription = new jl(this)),
          (this.idTokenSubscription = new jl(this)),
          (this.beforeStateQueue = new Tl(this)),
          (this.redirectUser = null),
          (this.isProactiveRefreshEnabled = !1),
          (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
          (this.Vn = !0),
          (this._s = !1),
          (this.ys = !1),
          (this.Fs = null),
          (this.Es = null),
          (this.Ln = Td),
          (this.Cs = null),
          (this.As = {}),
          (this.Is = null),
          (this.Ss = {}),
          (this.lastNotifiedUid = void 0),
          (this.languageCode = null),
          (this.tenantId = null),
          (this.settings = { appVerificationDisabledForTesting: !1 }),
          (this.frameworks = []),
          (this.name = t.name),
          (this.clientVersion = n.sdkClientVersion));
      }
      ks(t, e) {
        return (
          e && (this.Es = gl(e)),
          (this.Fs = this.queue(async () => {
            var i, n;
            if (
              !this.ys &&
              ((this.persistenceManager = await Fl.create(this, t)), !this.ys)
            ) {
              if (null === (i = this.Es) || void 0 === i ? void 0 : i.Ts)
                try {
                  await this.Es.Bs(this);
                } catch (t) {}
              (await this.initializeCurrentUser(e),
                (this.lastNotifiedUid =
                  (null === (n = this.currentUser) || void 0 === n
                    ? void 0
                    : n.uid) || null),
                this.ys || (this._s = !0));
            }
          })),
          this.Fs
        );
      }
      async bs() {
        if (this.ys) return;
        const t = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || t
          ? this.currentUser && t && this.currentUser.uid === t.uid
            ? (this.Os.Yn(t), void (await this.currentUser.getIdToken()))
            : void (await this.Ns(t, !0))
          : void 0;
      }
      async initializeCurrentUserFromIdToken(t) {
        try {
          const e = await rl(this, { idToken: t }),
            i = await bl.ds(this, e, t);
          await this.directlySetCurrentUser(i);
        } catch (t) {
          (console.warn(
            "FirebaseServerApp could not login user with provided authIdToken: ",
            t,
          ),
            await this.directlySetCurrentUser(null));
        }
      }
      async initializeCurrentUser(t) {
        var e;
        if (ld(this.app)) {
          const t = this.app.settings.authIdToken;
          return t
            ? new Promise((e) => {
                setTimeout(() =>
                  this.initializeCurrentUserFromIdToken(t).then(e, e),
                );
              })
            : this.directlySetCurrentUser(null);
        }
        const i = await this.assertedPersistence.getCurrentUser();
        let n = i,
          s = !1;
        if (t && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const i =
              null === (e = this.redirectUser) || void 0 === e ? void 0 : e.rs,
            r = null == n ? void 0 : n.rs,
            o = await this.tryRedirectSignIn(t);
          (i && i !== r) ||
            !(null == o ? void 0 : o.user) ||
            ((n = o.user), (s = !0));
        }
        if (!n) return this.directlySetCurrentUser(null);
        if (!n.rs) {
          if (s)
            try {
              await this.beforeStateQueue.runMiddleware(n);
            } catch (t) {
              ((n = i), this.Es.js(this, () => Promise.reject(t)));
            }
          return n
            ? this.reloadAndSetCurrentUserOrClear(n)
            : this.directlySetCurrentUser(null);
        }
        return (
          xd(this.Es, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser && this.redirectUser.rs === n.rs
            ? this.directlySetCurrentUser(n)
            : this.reloadAndSetCurrentUserOrClear(n)
        );
      }
      async tryRedirectSignIn(t) {
        let e = null;
        try {
          e = await this.Es.Ps(this, t, !0);
        } catch (t) {
          await this.Rs(null);
        }
        return e;
      }
      async reloadAndSetCurrentUserOrClear(t) {
        try {
          await fl(t);
        } catch (t) {
          if ("auth/network-request-failed" !== (null == t ? void 0 : t.code))
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(t);
      }
      useDeviceLanguage() {
        this.languageCode = (function () {
          if ("undefined" == typeof navigator) return null;
          const t = navigator;
          return (t.languages && t.languages[0]) || t.language || null;
        })();
      }
      async Cn() {
        this.ys = !0;
      }
      async updateCurrentUser(t) {
        if (ld(this.app)) return Promise.reject(Rd(this));
        const e = t ? Qa(t) : null;
        return (
          e &&
            xd(
              e.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token",
            ),
          this.Ns(e && e.Kn(this))
        );
      }
      async Ns(t, e = !1) {
        if (!this.ys)
          return (
            t && xd(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
            e || (await this.beforeStateQueue.runMiddleware(t)),
            this.queue(async () => {
              (await this.directlySetCurrentUser(t),
                this.notifyAuthListeners());
            })
          );
      }
      async signOut() {
        return ld(this.app)
          ? Promise.reject(Rd(this))
          : (await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this.Es) &&
              (await this.Rs(null)),
            this.Ns(null, !0));
      }
      setPersistence(t) {
        return ld(this.app)
          ? Promise.reject(Rd(this))
          : this.queue(async () => {
              await this.assertedPersistence.setPersistence(gl(t));
            });
      }
      Us() {
        return null == this.tenantId ? this.Cs : this.As[this.tenantId];
      }
      async validatePassword(t) {
        this.xs() || (await this.Ls());
        const e = this.xs();
        return e.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
          ? Promise.reject(
              this.Ln.create("unsupported-password-policy-schema-version", {}),
            )
          : e.validatePassword(t);
      }
      xs() {
        return null === this.tenantId ? this.Is : this.Ss[this.tenantId];
      }
      async Ls() {
        const t = await (async function (t, e = {}) {
            return Yd(t, "GET", "/v2/passwordPolicy", Jd(t, e));
          })(this),
          e = new Bl(t);
        null === this.tenantId ? (this.Is = e) : (this.Ss[this.tenantId] = e);
      }
      Ms() {
        return this.assertedPersistence.persistence.type;
      }
      Vs(t) {
        this.Ln = new Wa("auth", "Firebase", t());
      }
      onAuthStateChanged(t, e, i) {
        return this.registerStateListener(this.authStateSubscription, t, e, i);
      }
      beforeAuthStateChanged(t, e) {
        return this.beforeStateQueue.pushCallback(t, e);
      }
      onIdTokenChanged(t, e, i) {
        return this.registerStateListener(this.idTokenSubscription, t, e, i);
      }
      authStateReady() {
        return new Promise((t, e) => {
          if (this.currentUser) t();
          else {
            const i = this.onAuthStateChanged(() => {
              (i(), t());
            }, e);
          }
        });
      }
      async revokeAccessToken(t) {
        if (this.currentUser) {
          const e = {
            providerId: "apple.com",
            tokenType: "ACCESS_TOKEN",
            token: t,
            idToken: await this.currentUser.getIdToken(),
          };
          (null != this.tenantId && (e.tenantId = this.tenantId),
            await (async function (t, e) {
              return Yd(t, "POST", "/v2/accounts:revokeToken", Jd(t, e));
            })(this, e));
        }
      }
      toJSON() {
        var t;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser:
            null === (t = this.Os) || void 0 === t ? void 0 : t.toJSON(),
        };
      }
      async Rs(t, e) {
        const i = await this.getOrInitRedirectPersistenceManager(e);
        return null === t ? i.removeCurrentUser() : i.setCurrentUser(t);
      }
      async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
          const e = (t && gl(t)) || this.Es;
          (xd(e, this, "argument-error"),
            (this.redirectPersistenceManager = await Fl.create(
              this,
              [gl(e.$s)],
              "redirectUser",
            )),
            (this.redirectUser =
              await this.redirectPersistenceManager.getCurrentUser()));
        }
        return this.redirectPersistenceManager;
      }
      async Hs(t) {
        var e, i;
        return (
          this._s && (await this.queue(async () => {})),
          (null === (e = this.Os) || void 0 === e ? void 0 : e.rs) === t
            ? this.Os
            : (null === (i = this.redirectUser) || void 0 === i
                  ? void 0
                  : i.rs) === t
              ? this.redirectUser
              : null
        );
      }
      async Xn(t) {
        if (t === this.currentUser)
          return this.queue(async () => this.directlySetCurrentUser(t));
      }
      Qn(t) {
        t === this.currentUser && this.notifyAuthListeners();
      }
      Ws() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      es() {
        ((this.isProactiveRefreshEnabled = !0),
          this.currentUser && this.Os.es());
      }
      ns() {
        ((this.isProactiveRefreshEnabled = !1),
          this.currentUser && this.Os.ns());
      }
      get Os() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var t, e;
        if (!this._s) return;
        this.idTokenSubscription.next(this.currentUser);
        const i =
          null !==
            (e =
              null === (t = this.currentUser) || void 0 === t
                ? void 0
                : t.uid) && void 0 !== e
            ? e
            : null;
        this.lastNotifiedUid !== i &&
          ((this.lastNotifiedUid = i),
          this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(t, e, i, n) {
        if (this.ys) return () => {};
        const s = "function" == typeof e ? e : e.next.bind(e);
        let r = !1;
        const o = this._s ? Promise.resolve() : this.Fs;
        if (
          (xd(o, this, "internal-error"),
          o.then(() => {
            r || s(this.currentUser);
          }),
          "function" == typeof e)
        ) {
          const s = t.addObserver(e, i, n);
          return () => {
            ((r = !0), s());
          };
        }
        {
          const i = t.addObserver(e);
          return () => {
            ((r = !0), i());
          };
        }
      }
      async directlySetCurrentUser(t) {
        (this.currentUser && this.currentUser !== t && this.Os.ns(),
          t && this.isProactiveRefreshEnabled && t.es(),
          (this.currentUser = t),
          t
            ? await this.assertedPersistence.setCurrentUser(t)
            : await this.assertedPersistence.removeCurrentUser());
      }
      queue(t) {
        return (
          (this.operations = this.operations.then(t, t)),
          this.operations
        );
      }
      get assertedPersistence() {
        return (
          xd(this.persistenceManager, this, "internal-error"),
          this.persistenceManager
        );
      }
      zs(t) {
        t &&
          !this.frameworks.includes(t) &&
          (this.frameworks.push(t),
          this.frameworks.sort(),
          (this.clientVersion = kl(this.config.clientPlatform, this.Gs())));
      }
      Gs() {
        return this.frameworks;
      }
      async Mn() {
        var t;
        const e = { "X-Client-Version": this.clientVersion };
        this.app.options.appId &&
          (e["X-Firebase-gmpid"] = this.app.options.appId);
        const i = await (null ===
          (t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
        void 0 === t
          ? void 0
          : t.getHeartbeatsHeader());
        i && (e["X-Firebase-Client"] = i);
        const n = await this.Zs();
        return (n && (e["X-Firebase-AppCheck"] = n), e);
      }
      async Zs() {
        var t;
        const e = await (null ===
          (t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) ||
        void 0 === t
          ? void 0
          : t.getToken());
        return (
          (null == e ? void 0 : e.error) &&
            (function (t, ...e) {
              Bd.logLevel <= rc.WARN && Bd.warn(`Auth (${Dd}): ${t}`, ...e);
            })(`Error while retrieving App Check token: ${e.error}`),
          null == e ? void 0 : e.token
        );
      }
    }
    function Nl(t) {
      return Qa(t);
    }
    class jl {
      constructor(t) {
        ((this.auth = t),
          (this.observer = null),
          (this.addObserver = (function (t, e) {
            const i = new qa(t, e);
            return i.subscribe.bind(i);
          })((t) => (this.observer = t))));
      }
      get next() {
        return (
          xd(this.observer, this.auth, "internal-error"),
          this.observer.next.bind(this.observer)
        );
      }
    }
    let Pl = {
      async loadJS() {
        throw new Error("Unable to load external scripts");
      },
      recaptchaV2Script: "",
      recaptchaEnterpriseScript: "",
      gapiScript: "",
    };
    class Rl {
      constructor(t) {
        ((this.type = "recaptcha-enterprise"), (this.auth = Nl(t)));
      }
      async verify(t = "verify", e = !1) {
        function i(e, i, n) {
          const s = window.grecaptcha;
          il(s)
            ? s.enterprise.ready(() => {
                s.enterprise
                  .execute(e, { action: t })
                  .then((t) => {
                    i(t);
                  })
                  .catch(() => {
                    i("NO_RECAPTCHA");
                  });
              })
            : n(Error("No reCAPTCHA enterprise script loaded."));
        }
        return new Promise((t, n) => {
          (async function (t) {
            if (!e) {
              if (null == t.tenantId && null != t.Cs) return t.Cs.siteKey;
              if (null != t.tenantId && void 0 !== t.As[t.tenantId])
                return t.As[t.tenantId].siteKey;
            }
            return new Promise(async (e, i) => {
              sl(t, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE",
              })
                .then((n) => {
                  if (void 0 !== n.recaptchaKey) {
                    const i = new nl(n);
                    return (
                      null == t.tenantId ? (t.Cs = i) : (t.As[t.tenantId] = i),
                      e(i.siteKey)
                    );
                  }
                  i(new Error("recaptcha Enterprise site key undefined"));
                })
                .catch((t) => {
                  i(t);
                });
            });
          })(this.auth)
            .then((s) => {
              if (!e && il(window.grecaptcha)) i(s, t, n);
              else {
                if ("undefined" == typeof window)
                  return void n(
                    new Error("RecaptchaVerifier is only supported in browser"),
                  );
                let e = Pl.recaptchaEnterpriseScript;
                (0 !== e.length && (e += s),
                  (function (t) {
                    return Pl.loadJS(t);
                  })(e)
                    .then(() => {
                      i(s, t, n);
                    })
                    .catch((t) => {
                      n(t);
                    }));
              }
            })
            .catch((t) => {
              n(t);
            });
        });
      }
    }
    async function Ul(t, e, i, n = !1) {
      const s = new Rl(t);
      let r;
      try {
        r = await s.verify(i);
      } catch (t) {
        r = await s.verify(i, !0);
      }
      const o = Object.assign({}, e);
      return (
        n
          ? Object.assign(o, { captchaResp: r })
          : Object.assign(o, { captchaResponse: r }),
        Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
        Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
        o
      );
    }
    async function xl(t, e, i, n) {
      var s;
      if (
        null === (s = t.Us()) || void 0 === s
          ? void 0
          : s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
      ) {
        const s = await Ul(t, e, i, "getOobCode" === i);
        return n(t, s);
      }
      return n(t, e).catch(async (s) => {
        if ("auth/missing-recaptcha-token" === s.code) {
          console.log(
            `${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
          );
          const s = await Ul(t, e, i, "getOobCode" === i);
          return n(t, s);
        }
        return Promise.reject(s);
      });
    }
    function Ll(t, e) {
      const i = dd(t, "auth");
      if (i.isInitialized()) {
        const t = i.getImmediate();
        if (Ga(i.getOptions(), null != e ? e : {})) return t;
        Nd(t, "already-initialized");
      }
      return i.initialize({ options: e });
    }
    function Ml(t, e, i) {
      const n = Nl(t);
      (xd(n.Vn, n, "emulator-config-failed"),
        xd(/^https?:\/\//.test(e), n, "invalid-emulator-scheme"));
      const s = !!(null == i ? void 0 : i.disableWarnings),
        r = Vl(e),
        { host: o, port: u } = (function (t) {
          const e = Vl(t),
            i = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
          if (!i) return { host: "", port: null };
          const n = i[2].split("@").pop() || "",
            s = /^(\[[^\]]+\])(:|$)/.exec(n);
          if (s) {
            const t = s[1];
            return { host: t, port: $l(n.substr(t.length + 1)) };
          }
          {
            const [t, e] = n.split(":");
            return { host: t, port: $l(e) };
          }
        })(e),
        a = null === u ? "" : `:${u}`;
      ((n.config.emulator = { url: `${r}//${o}${a}/` }),
        (n.settings.appVerificationDisabledForTesting = !0),
        (n.emulatorConfig = Object.freeze({
          host: o,
          port: u,
          protocol: r.replace(":", ""),
          options: Object.freeze({ disableWarnings: s }),
        })),
        s ||
          (function () {
            function t() {
              const t = document.createElement("p"),
                e = t.style;
              ((t.innerText =
                "Running in emulator mode. Do not use with production credentials."),
                (e.position = "fixed"),
                (e.width = "100%"),
                (e.backgroundColor = "#ffffff"),
                (e.border = ".1em solid #000000"),
                (e.color = "#b50000"),
                (e.bottom = "0px"),
                (e.left = "0px"),
                (e.margin = "0px"),
                (e.zIndex = "10000"),
                (e.textAlign = "center"),
                t.classList.add("firebase-emulator-warning"),
                document.body.appendChild(t));
            }
            "undefined" != typeof console &&
              "function" == typeof console.info &&
              console.info(
                "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
              );
            "undefined" != typeof window &&
              "undefined" != typeof document &&
              ("loading" === document.readyState
                ? window.addEventListener("DOMContentLoaded", t)
                : t());
          })());
    }
    function Vl(t) {
      const e = t.indexOf(":");
      return e < 0 ? "" : t.substr(0, e + 1);
    }
    function $l(t) {
      if (!t) return null;
      const e = Number(t);
      return isNaN(e) ? null : e;
    }
    class Hl {
      constructor(t, e) {
        ((this.providerId = t), (this.signInMethod = e));
      }
      toJSON() {
        return Ld("not implemented");
      }
      Js(t) {
        return Ld("not implemented");
      }
      Ys(t, e) {
        return Ld("not implemented");
      }
      Ks(t) {
        return Ld("not implemented");
      }
    }
    async function Wl(t, e) {
      return Yd(t, "POST", "/v1/accounts:signUp", e);
    }
    async function zl(t, e) {
      return qd(t, "POST", "/v1/accounts:signInWithPassword", Jd(t, e));
    }
    class Gl extends Hl {
      constructor(t, e, i, n = null) {
        (super("password", i), (this.qs = t), (this.Xs = e), (this.Qs = n));
      }
      static tr(t, e) {
        return new Gl(t, e, "password");
      }
      static er(t, e, i = null) {
        return new Gl(t, e, "emailLink", i);
      }
      toJSON() {
        return {
          email: this.qs,
          password: this.Xs,
          signInMethod: this.signInMethod,
          tenantId: this.Qs,
        };
      }
      static fromJSON(t) {
        const e = "string" == typeof t ? JSON.parse(t) : t;
        if (
          (null == e ? void 0 : e.email) &&
          (null == e ? void 0 : e.password)
        ) {
          if ("password" === e.signInMethod)
            return this.tr(e.email, e.password);
          if ("emailLink" === e.signInMethod)
            return this.er(e.email, e.password, e.tenantId);
        }
        return null;
      }
      async Js(t) {
        switch (this.signInMethod) {
          case "password":
            return xl(
              t,
              {
                returnSecureToken: !0,
                email: this.qs,
                password: this.Xs,
                clientType: "CLIENT_TYPE_WEB",
              },
              "signInWithPassword",
              zl,
            );
          case "emailLink":
            return (async function (t, e) {
              return qd(
                t,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Jd(t, e),
              );
            })(t, { email: this.qs, oobCode: this.Xs });
          default:
            Nd(t, "internal-error");
        }
      }
      async Ys(t, e) {
        switch (this.signInMethod) {
          case "password":
            return xl(
              t,
              {
                idToken: e,
                returnSecureToken: !0,
                email: this.qs,
                password: this.Xs,
                clientType: "CLIENT_TYPE_WEB",
              },
              "signUpPassword",
              Wl,
            );
          case "emailLink":
            return (async function (t, e) {
              return qd(
                t,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Jd(t, e),
              );
            })(t, { idToken: e, email: this.qs, oobCode: this.Xs });
          default:
            Nd(t, "internal-error");
        }
      }
      Ks(t) {
        return this.Js(t);
      }
    }
    async function Zl(t, e) {
      return qd(t, "POST", "/v1/accounts:signInWithIdp", Jd(t, e));
    }
    class Jl extends Hl {
      constructor() {
        (super(...arguments), (this.pendingToken = null));
      }
      static ir(t) {
        const e = new Jl(t.providerId, t.signInMethod);
        return (
          t.idToken || t.accessToken
            ? (t.idToken && (e.idToken = t.idToken),
              t.accessToken && (e.accessToken = t.accessToken),
              t.nonce && !t.pendingToken && (e.nonce = t.nonce),
              t.pendingToken && (e.pendingToken = t.pendingToken))
            : t.oauthToken && t.oauthTokenSecret
              ? ((e.accessToken = t.oauthToken),
                (e.secret = t.oauthTokenSecret))
              : Nd("argument-error"),
          e
        );
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod,
        };
      }
      static fromJSON(t) {
        const e = "string" == typeof t ? JSON.parse(t) : t,
          { providerId: i, signInMethod: n } = e,
          s = Id(e, ["providerId", "signInMethod"]);
        if (!i || !n) return null;
        const r = new Jl(i, n);
        return (
          (r.idToken = s.idToken || void 0),
          (r.accessToken = s.accessToken || void 0),
          (r.secret = s.secret),
          (r.nonce = s.nonce),
          (r.pendingToken = s.pendingToken || null),
          r
        );
      }
      Js(t) {
        return Zl(t, this.buildRequest());
      }
      Ys(t, e) {
        const i = this.buildRequest();
        return ((i.idToken = e), Zl(t, i));
      }
      Ks(t) {
        const e = this.buildRequest();
        return ((e.autoCreate = !1), Zl(t, e));
      }
      buildRequest() {
        const t = { requestUri: "http://localhost", returnSecureToken: !0 };
        if (this.pendingToken) t.pendingToken = this.pendingToken;
        else {
          const e = {};
          (this.idToken && (e.id_token = this.idToken),
            this.accessToken && (e.access_token = this.accessToken),
            this.secret && (e.oauth_token_secret = this.secret),
            (e.providerId = this.providerId),
            this.nonce && !this.pendingToken && (e.nonce = this.nonce),
            (t.postBody = Ja(e)));
        }
        return t;
      }
    }
    class Yl {
      constructor(t) {
        var e, i, n, s, r, o;
        const u = Ya(Ka(t)),
          a = null !== (e = u.apiKey) && void 0 !== e ? e : null,
          c = null !== (i = u.oobCode) && void 0 !== i ? i : null,
          d = (function (t) {
            switch (t) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null;
            }
          })(null !== (n = u.mode) && void 0 !== n ? n : null);
        (xd(a && c && d, "argument-error"),
          (this.apiKey = a),
          (this.operation = d),
          (this.code = c),
          (this.continueUrl =
            null !== (s = u.continueUrl) && void 0 !== s ? s : null),
          (this.languageCode =
            null !== (r = u.languageCode) && void 0 !== r ? r : null),
          (this.tenantId =
            null !== (o = u.tenantId) && void 0 !== o ? o : null));
      }
      static parseLink(t) {
        const e = (function (t) {
          const e = Ya(Ka(t)).link,
            i = e ? Ya(Ka(e)).deep_link_id : null,
            n = Ya(Ka(t)).deep_link_id;
          return (n ? Ya(Ka(n)).link : null) || n || i || e || t;
        })(t);
        try {
          return new Yl(e);
        } catch (t) {
          return null;
        }
      }
    }
    class Kl {
      constructor() {
        this.providerId = Kl.PROVIDER_ID;
      }
      static credential(t, e) {
        return Gl.tr(t, e);
      }
      static credentialWithLink(t, e) {
        const i = Yl.parseLink(e);
        return (xd(i, "argument-error"), Gl.er(t, i.code, i.tenantId));
      }
    }
    ((Kl.PROVIDER_ID = "password"),
      (Kl.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
      (Kl.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"));
    class ql {
      constructor(t) {
        ((this.providerId = t),
          (this.defaultLanguageCode = null),
          (this.customParameters = {}));
      }
      setDefaultLanguage(t) {
        this.defaultLanguageCode = t;
      }
      setCustomParameters(t) {
        return ((this.customParameters = t), this);
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    class Xl extends ql {
      constructor() {
        (super(...arguments), (this.scopes = []));
      }
      addScope(t) {
        return (this.scopes.includes(t) || this.scopes.push(t), this);
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    class Ql extends Xl {
      constructor() {
        super("facebook.com");
      }
      static credential(t) {
        return Jl.ir({
          providerId: Ql.PROVIDER_ID,
          signInMethod: Ql.FACEBOOK_SIGN_IN_METHOD,
          accessToken: t,
        });
      }
      static credentialFromResult(t) {
        return Ql.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return Ql.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Hn: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return Ql.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    ((Ql.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
      (Ql.PROVIDER_ID = "facebook.com"));
    class th extends Xl {
      constructor() {
        (super("google.com"), this.addScope("profile"));
      }
      static credential(t, e) {
        return Jl.ir({
          providerId: th.PROVIDER_ID,
          signInMethod: th.GOOGLE_SIGN_IN_METHOD,
          idToken: t,
          accessToken: e,
        });
      }
      static credentialFromResult(t) {
        return th.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return th.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Hn: t }) {
        if (!t) return null;
        const { oauthIdToken: e, oauthAccessToken: i } = t;
        if (!e && !i) return null;
        try {
          return th.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    ((th.GOOGLE_SIGN_IN_METHOD = "google.com"),
      (th.PROVIDER_ID = "google.com"));
    class eh extends Xl {
      constructor() {
        super("github.com");
      }
      static credential(t) {
        return Jl.ir({
          providerId: eh.PROVIDER_ID,
          signInMethod: eh.GITHUB_SIGN_IN_METHOD,
          accessToken: t,
        });
      }
      static credentialFromResult(t) {
        return eh.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return eh.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Hn: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return eh.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    ((eh.GITHUB_SIGN_IN_METHOD = "github.com"),
      (eh.PROVIDER_ID = "github.com"));
    class ih extends Xl {
      constructor() {
        super("twitter.com");
      }
      static credential(t, e) {
        return Jl.ir({
          providerId: ih.PROVIDER_ID,
          signInMethod: ih.TWITTER_SIGN_IN_METHOD,
          oauthToken: t,
          oauthTokenSecret: e,
        });
      }
      static credentialFromResult(t) {
        return ih.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return ih.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Hn: t }) {
        if (!t) return null;
        const { oauthAccessToken: e, oauthTokenSecret: i } = t;
        if (!e || !i) return null;
        try {
          return ih.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    async function nh(t, e) {
      return qd(t, "POST", "/v1/accounts:signUp", Jd(t, e));
    }
    ((ih.TWITTER_SIGN_IN_METHOD = "twitter.com"),
      (ih.PROVIDER_ID = "twitter.com"));
    class sh {
      constructor(t) {
        ((this.user = t.user),
          (this.providerId = t.providerId),
          (this.Hn = t.Hn),
          (this.operationType = t.operationType));
      }
      static async cs(t, e, i, n = !1) {
        const s = await bl.cs(t, i, n),
          r = rh(i);
        return new sh({ user: s, providerId: r, Hn: i, operationType: e });
      }
      static async nr(t, e, i) {
        await t.ss(i, !0);
        const n = rh(i);
        return new sh({ user: t, providerId: n, Hn: i, operationType: e });
      }
    }
    function rh(t) {
      return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
    }
    class oh extends Ha {
      constructor(t, e, i, n) {
        var s;
        (super(e.code, e.message),
          (this.operationType = i),
          (this.user = n),
          Object.setPrototypeOf(this, oh.prototype),
          (this.customData = {
            appName: t.name,
            tenantId: null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
            $n: e.customData.$n,
            operationType: i,
          }));
      }
      static sr(t, e, i, n) {
        return new oh(t, e, i, n);
      }
    }
    function uh(t, e, i, n) {
      return ("reauthenticate" === e ? i.Ks(t) : i.Js(t)).catch((i) => {
        if ("auth/multi-factor-auth-required" === i.code)
          throw oh.sr(t, i, e, n);
        throw i;
      });
    }
    async function ah(t, e) {
      return (async function (t, e, i = !1) {
        if (ld(t.app)) return Promise.reject(Rd(t));
        const n = "signIn",
          s = await uh(t, n, e),
          r = await sh.cs(t, n, s);
        return (i || (await t.Ns(r.user)), r);
      })(Nl(t), e);
    }
    async function ch(t, e) {
      return (async function (t, e, i = !1) {
        const { auth: n } = t;
        if (ld(n.app)) return Promise.reject(Rd(n));
        const s = "reauthenticate";
        try {
          const r = await dl(t, uh(n, s, e, t), i);
          xd(r.idToken, n, "internal-error");
          const o = al(r.idToken);
          xd(o, n, "internal-error");
          const { sub: u } = o;
          return (xd(t.uid === u, n, "user-mismatch"), sh.nr(t, s, r));
        } catch (t) {
          throw (
            "auth/user-not-found" === (null == t ? void 0 : t.code) &&
              Nd(n, "user-mismatch"),
            t
          );
        }
      })(Qa(t), e);
    }
    async function dh(t) {
      const e = Nl(t);
      e.xs() && (await e.Ls());
    }
    async function lh(t, e, i) {
      if (ld(t.app)) return Promise.reject(Rd(t));
      const n = Nl(t),
        s = xl(
          n,
          {
            returnSecureToken: !0,
            email: e,
            password: i,
            clientType: "CLIENT_TYPE_WEB",
          },
          "signUpPassword",
          nh,
        ),
        r = await s.catch((e) => {
          throw (
            "auth/password-does-not-meet-requirements" === e.code && dh(t),
            e
          );
        }),
        o = await sh.cs(n, "signIn", r);
      return (await n.Ns(o.user), o);
    }
    function hh(t, e, i) {
      return ld(t.app)
        ? Promise.reject(Rd(t))
        : ah(Qa(t), Kl.credential(e, i)).catch(async (e) => {
            throw (
              "auth/password-does-not-meet-requirements" === e.code && dh(t),
              e
            );
          });
    }
    async function fh(t, e) {
      const i = {
          identifier: e,
          continueUri: $d() ? Vd() : "http://localhost",
        },
        { signinMethods: n } = await (async function (t, e) {
          return Yd(t, "POST", "/v1/accounts:createAuthUri", Jd(t, e));
        })(Qa(t), i);
      return n || [];
    }
    async function Dh(t, e, i) {
      const { auth: n } = t,
        s = { idToken: await t.getIdToken(), returnSecureToken: !0 };
      (e && (s.email = e), i && (s.password = i));
      const r = await dl(
        t,
        (async function (t, e) {
          return Yd(t, "POST", "/v1/accounts:update", e);
        })(n, s),
      );
      await t.ss(r, !0);
    }
    new WeakMap();
    const vh = "__sak";
    class ph {
      constructor(t) {
        ((this.eventTarget = t),
          (this.handlersMap = {}),
          (this.boundEventHandler = this.handleEvent.bind(this)));
      }
      static rr(t) {
        const e = this.receivers.find((e) => e.isListeningto(t));
        if (e) return e;
        const i = new ph(t);
        return (this.receivers.push(i), i);
      }
      isListeningto(t) {
        return this.eventTarget === t;
      }
      async handleEvent(t) {
        const e = t,
          { eventId: i, eventType: n, data: s } = e.data,
          r = this.handlersMap[n];
        if (!(null == r ? void 0 : r.size)) return;
        e.ports[0].postMessage({ status: "ack", eventId: i, eventType: n });
        const o = Array.from(r).map(async (t) => t(e.origin, s)),
          u = await (function (t) {
            return Promise.all(
              t.map(async (t) => {
                try {
                  return { fulfilled: !0, value: await t };
                } catch (t) {
                  return { fulfilled: !1, reason: t };
                }
              }),
            );
          })(o);
        e.ports[0].postMessage({
          status: "done",
          eventId: i,
          eventType: n,
          response: u,
        });
      }
      ur(t, e) {
        (0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[t] || (this.handlersMap[t] = new Set()),
          this.handlersMap[t].add(e));
      }
      ar(t, e) {
        (this.handlersMap[t] && e && this.handlersMap[t].delete(e),
          (e && 0 !== this.handlersMap[t].size) || delete this.handlersMap[t],
          0 === Object.keys(this.handlersMap).length &&
            this.eventTarget.removeEventListener(
              "message",
              this.boundEventHandler,
            ));
      }
    }
    ph.receivers = [];
    class bh {
      constructor(t) {
        ((this.target = t), (this.handlers = new Set()));
      }
      removeMessageHandler(t) {
        (t.messageChannel &&
          (t.messageChannel.port1.removeEventListener("message", t.onMessage),
          t.messageChannel.port1.close()),
          this.handlers.delete(t));
      }
      async cr(t, e, i = 50) {
        const n =
          "undefined" != typeof MessageChannel ? new MessageChannel() : null;
        if (!n) throw new Error("connection_unavailable");
        let s, r;
        return new Promise((o, u) => {
          const a = (function (t = "", e = 10) {
            let i = "";
            for (let t = 0; t < e; t++) i += Math.floor(10 * Math.random());
            return t + i;
          })("", 20);
          n.port1.start();
          const c = setTimeout(() => {
            u(new Error("unsupported_event"));
          }, i);
          ((r = {
            messageChannel: n,
            onMessage(t) {
              const e = t;
              if (e.data.eventId === a)
                switch (e.data.status) {
                  case "ack":
                    (clearTimeout(c),
                      (s = setTimeout(() => {
                        u(new Error("timeout"));
                      }, 3e3)));
                    break;
                  case "done":
                    (clearTimeout(s), o(e.data.response));
                    break;
                  default:
                    (clearTimeout(c),
                      clearTimeout(s),
                      u(new Error("invalid_response")));
                }
            },
          }),
            this.handlers.add(r),
            n.port1.addEventListener("message", r.onMessage),
            this.target.postMessage({ eventType: t, eventId: a, data: e }, [
              n.port2,
            ]));
        }).finally(() => {
          r && this.removeMessageHandler(r);
        });
      }
    }
    function mh() {
      return window;
    }
    function gh() {
      return (
        void 0 !== mh().WorkerGlobalScope &&
        "function" == typeof mh().importScripts
      );
    }
    const _h = "firebaseLocalStorageDb",
      yh = "firebaseLocalStorage",
      wh = "fbase_key";
    class Fh {
      constructor(t) {
        this.request = t;
      }
      toPromise() {
        return new Promise((t, e) => {
          (this.request.addEventListener("success", () => {
            t(this.request.result);
          }),
            this.request.addEventListener("error", () => {
              e(this.request.error);
            }));
        });
      }
    }
    function Eh(t, e) {
      return t.transaction([yh], e ? "readwrite" : "readonly").objectStore(yh);
    }
    function Ch() {
      const t = indexedDB.open(_h, 1);
      return new Promise((e, i) => {
        (t.addEventListener("error", () => {
          i(t.error);
        }),
          t.addEventListener("upgradeneeded", () => {
            const e = t.result;
            try {
              e.createObjectStore(yh, { keyPath: wh });
            } catch (t) {
              i(t);
            }
          }),
          t.addEventListener("success", async () => {
            const i = t.result;
            i.objectStoreNames.contains(yh)
              ? e(i)
              : (i.close(),
                await (function () {
                  const t = indexedDB.deleteDatabase(_h);
                  return new Fh(t).toPromise();
                })(),
                e(await Ch()));
          }));
      });
    }
    async function Ah(t, e, i) {
      const n = Eh(t, !0).put({ [wh]: e, value: i });
      return new Fh(n).toPromise();
    }
    function Ih(t, e) {
      const i = Eh(t, !0).delete(e);
      return new Fh(i).toPromise();
    }
    class Sh {
      constructor() {
        ((this.type = "LOCAL"),
          (this.gs = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this.dr = this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {},
          )));
      }
      async lr() {
        return (this.db || (this.db = await Ch()), this.db);
      }
      async hr(t) {
        let e = 0;
        for (;;)
          try {
            const e = await this.lr();
            return await t(e);
          } catch (t) {
            if (e++ > 3) throw t;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return gh() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        ((this.receiver = ph.rr(gh() ? self : null)),
          this.receiver.ur("keyChanged", async (t, e) => ({
            keyProcessed: (await this.q()).includes(e.key),
          })),
          this.receiver.ur("ping", async (t, e) => ["keyChanged"]));
      }
      async initializeSender() {
        var t, e;
        if (
          ((this.activeServiceWorker = await (async function () {
            if (
              !(null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker)
            )
              return null;
            try {
              return (await navigator.serviceWorker.ready).active;
            } catch (t) {
              return null;
            }
          })()),
          !this.activeServiceWorker)
        )
          return;
        this.sender = new bh(this.activeServiceWorker);
        const i = await this.sender.cr("ping", {}, 800);
        i &&
          (null === (t = i[0]) || void 0 === t ? void 0 : t.fulfilled) &&
          (null === (e = i[0]) || void 0 === e
            ? void 0
            : e.value.includes("keyChanged")) &&
          (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(t) {
        if (
          this.sender &&
          this.activeServiceWorker &&
          (function () {
            var t;
            return (
              (null ===
                (t =
                  null === navigator || void 0 === navigator
                    ? void 0
                    : navigator.serviceWorker) || void 0 === t
                ? void 0
                : t.controller) || null
            );
          })() === this.activeServiceWorker
        )
          try {
            await this.sender.cr(
              "keyChanged",
              { key: t },
              this.serviceWorkerReceiverAvailable ? 800 : 50,
            );
          } catch (t) {}
      }
      async ls() {
        try {
          if (!indexedDB) return !1;
          const t = await Ch();
          return (await Ah(t, vh, "1"), await Ih(t, vh), !0);
        } catch (t) {}
        return !1;
      }
      async Dr(t) {
        this.pendingWrites++;
        try {
          await t();
        } finally {
          this.pendingWrites--;
        }
      }
      async hs(t, e) {
        return this.Dr(
          async () => (
            await this.hr((i) => Ah(i, t, e)),
            (this.localCache[t] = e),
            this.notifyServiceWorker(t)
          ),
        );
      }
      async fs(t) {
        const e = await this.hr((e) =>
          (async function (t, e) {
            const i = Eh(t, !1).get(e),
              n = await new Fh(i).toPromise();
            return void 0 === n ? null : n.value;
          })(e, t),
        );
        return ((this.localCache[t] = e), e);
      }
      async Ds(t) {
        return this.Dr(
          async () => (
            await this.hr((e) => Ih(e, t)),
            delete this.localCache[t],
            this.notifyServiceWorker(t)
          ),
        );
      }
      async q() {
        const t = await this.hr((t) => {
          const e = Eh(t, !1).getAll();
          return new Fh(e).toPromise();
        });
        if (!t) return [];
        if (0 !== this.pendingWrites) return [];
        const e = [],
          i = new Set();
        if (0 !== t.length)
          for (const { fbase_key: n, value: s } of t)
            (i.add(n),
              JSON.stringify(this.localCache[n]) !== JSON.stringify(s) &&
                (this.notifyListeners(n, s), e.push(n)));
        for (const t of Object.keys(this.localCache))
          this.localCache[t] &&
            !i.has(t) &&
            (this.notifyListeners(t, null), e.push(t));
        return e;
      }
      notifyListeners(t, e) {
        this.localCache[t] = e;
        const i = this.listeners[t];
        if (i) for (const t of Array.from(i)) t(e);
      }
      startPolling() {
        (this.stopPolling(),
          (this.pollTimer = setInterval(async () => this.q(), 800)));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      vs(t, e) {
        (0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[t] || ((this.listeners[t] = new Set()), this.fs(t)),
          this.listeners[t].add(e));
      }
      ps(t, e) {
        (this.listeners[t] &&
          (this.listeners[t].delete(e),
          0 === this.listeners[t].size && delete this.listeners[t]),
          0 === Object.keys(this.listeners).length && this.stopPolling());
      }
    }
    Sh.type = "LOCAL";
    const kh = Sh;
    var Th,
      Bh,
      Oh,
      Nh = "@firebase/auth",
      jh = "1.7.9";
    class Ph {
      constructor(t) {
        ((this.auth = t), (this.internalListeners = new Map()));
      }
      getUid() {
        var t;
        return (
          this.assertAuthConfigured(),
          (null === (t = this.auth.currentUser) || void 0 === t
            ? void 0
            : t.uid) || null
        );
      }
      async getToken(t) {
        if (
          (this.assertAuthConfigured(),
          await this.auth.Fs,
          !this.auth.currentUser)
        )
          return null;
        return { accessToken: await this.auth.currentUser.getIdToken(t) };
      }
      addAuthTokenListener(t) {
        if ((this.assertAuthConfigured(), this.internalListeners.has(t)))
          return;
        const e = this.auth.onIdTokenChanged((e) => {
          t((null == e ? void 0 : e.stsTokenManager.accessToken) || null);
        });
        (this.internalListeners.set(t, e), this.updateProactiveRefresh());
      }
      removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const e = this.internalListeners.get(t);
        e &&
          (this.internalListeners.delete(t),
          e(),
          this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        xd(this.auth.Fs, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth.es() : this.auth.ns();
      }
    }
    function Rh(
      t = (function (t = nd) {
        const e = rd.get(t);
        if (!e && t === nd && Ma()) return vd();
        if (!e) throw hd.create("no-app", { appName: t });
        return e;
      })(),
    ) {
      const e = dd(t, "auth");
      if (e.isInitialized()) return e.getImmediate();
      const i = Ll(t, { persistence: [kh] }),
        n = La("auth");
      return (n && Ml(i, `http://${n}`), i);
    }
    ((Th = "WebExtension"),
      cd(
        new tc(
          "auth",
          (t, { options: e }) => {
            const i = t.getProvider("app").getImmediate(),
              n = t.getProvider("heartbeat"),
              s = t.getProvider("app-check-internal"),
              { apiKey: r, authDomain: o } = i.options;
            xd(r && !r.includes(":"), "invalid-api-key", { appName: i.name });
            const u = {
                apiKey: r,
                authDomain: o,
                clientPlatform: Th,
                apiHost: "identitytoolkit.googleapis.com",
                tokenApiHost: "securetoken.googleapis.com",
                apiScheme: "https",
                sdkClientVersion: kl(Th),
              },
              a = new Ol(i, n, s, u);
            return (
              (function (t, e) {
                const i = (null == e ? void 0 : e.persistence) || [],
                  n = (Array.isArray(i) ? i : [i]).map(gl);
                ((null == e ? void 0 : e.errorMap) && t.Vs(e.errorMap),
                  t.ks(n, null == e ? void 0 : e.popupRedirectResolver));
              })(a, e),
              a
            );
          },
          "PUBLIC",
        )
          .setInstantiationMode("EXPLICIT")
          .setInstanceCreatedCallback((t, e, i) => {
            t.getProvider("auth-internal").initialize();
          }),
      ),
      cd(
        new tc(
          "auth-internal",
          (t) => ((t) => new Ph(t))(Nl(t.getProvider("auth").getImmediate())),
          "PRIVATE",
        ).setInstantiationMode("EXPLICIT"),
      ),
      pd(
        Nh,
        jh,
        (function (t) {
          switch (t) {
            case "Node":
              return "node";
            case "ReactNative":
              return "rn";
            case "Worker":
              return "webworker";
            case "Cordova":
              return "cordova";
            case "WebExtension":
              return "web-extension";
            default:
              return;
          }
        })(Th),
      ),
      pd(Nh, jh, "esm2017"),
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
      })(Bh || (Bh = {})),
      (function (t) {
        ((t[(t.PARTY_STATE_NONE = 0)] = "PARTY_STATE_NONE"),
          (t[(t.PARTY_STATE_IN_SESSION = 1)] = "PARTY_STATE_IN_SESSION"));
      })(Oh || (Oh = {})));
    class Uh extends Yu {
      constructor(t, e, i) {
        (super(t, e, Gu.LOAD_REDIRECT_URL_FINISHED), (this.data = i));
      }
    }
    class xh extends du {
      constructor(t, e, i = !1) {
        (super(t, e, su.GET_VALIDATIONS_FAILURE_INFO),
          (this.includeDiagnostics = i));
      }
    }
    var Lh = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    class Mh {
      log(t, e) {
        var i;
        return Lh(this, void 0, void 0, function* () {
          const n = Object.assign(Object.assign({}, t), {
            platform: "extension",
          });
          if (!1 !== (null == e ? void 0 : e.sendApiRequest))
            try {
              Vn("events", "POST", !1, {
                eventName: n.event_name,
                success: n.success,
                platform: n.platform,
                serviceName:
                  null !== (i = n.service) && void 0 !== i ? i : n.service_name,
              });
            } catch (t) {
              console.error(t);
            }
          if (!n.success) {
            const t = yield this.transform(n, e);
            hf.Zi(
              { name: "event_failure", event_info: Object.assign({}, t) },
              null == e ? void 0 : e.tab,
              !1,
              Wu.POSTHOG,
            );
          }
        });
      }
      transform(t, e) {
        return Lh(this, void 0, void 0, function* () {
          return Object.assign(Object.assign({}, t), { platform: "extension" });
        });
      }
    }
    const Vh = new Mh();
    var $h = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    function Hh(t) {
      const e = JSON.stringify(t);
      return new TextEncoder().encode(e).length;
    }
    const Wh = new (class extends Mh {
      transform(t, e) {
        const i = Object.create(null, {
          transform: { get: () => super.transform },
        });
        var n, s;
        return $h(this, void 0, void 0, function* () {
          const r = yield i.transform.call(this, t),
            o = null == e ? void 0 : e.tabId,
            u =
              null !==
                (n = yield (function (t) {
                  var e, i, n;
                  return $h(this, void 0, void 0, function* () {
                    if (null == t) return;
                    return (
                      (null ===
                        (i =
                          null === (e = wu.getSocketForTabId(t)) || void 0 === e
                            ? void 0
                            : e.getCurrentSessionData()) || void 0 === i
                        ? void 0
                        : i.sessionId) ||
                      (null === (n = yield $u.getRedirectDataForTabAsync(t)) ||
                      void 0 === n
                        ? void 0
                        : n.sessionId)
                    );
                  });
                })(o)) && void 0 !== n
                ? n
                : r.session_id,
            a = u ? Object.assign(Object.assign({}, r), { session_id: u }) : r;
          if (!this.isPartyError(a)) return a;
          const c =
            null !== (s = null == e ? void 0 : e.sender) && void 0 !== s
              ? s
              : L;
          let d;
          if (o)
            try {
              d = yield this.fetchExtraInfoFromTab(
                o,
                c,
                null == e ? void 0 : e.includeDiagnostics,
              );
            } catch (t) {
              console.warn("Failed to fetch party error diagnostics", t);
            }
          let l = Object.assign({}, a);
          const h = Object.assign({ name: l.event_name }, l);
          if (d) {
            const t = [
              "system_chat_msgs_gzip_base64",
              "html_gzip_base64",
              "service_worker_console_dump_gzip_base64",
              "interaction_mappings_gzip_base64",
              "screenshot_gzip_base64",
            ];
            for (const e of t) {
              const t = d[e];
              if (null == t) continue;
              const i = Object.assign(Object.assign({}, l), { [e]: t }),
                n = Hh(Object.assign(Object.assign({}, h), i));
              n <= 819200
                ? (l = i)
                : console.debug(
                    `Dropping field ${String(e)} from ${l.event_name} (size would be ${n} bytes)`,
                  );
            }
          }
          return l;
        });
      }
      fetchExtraInfoFromTab(t, e, i) {
        return $h(this, void 0, void 0, function* () {
          return yield W.sendMessageToTabAsync(new xh(e, V, i), t);
        });
      }
      isPartyError(t) {
        return "string" == typeof t.service;
      }
    })();
    var zh;
    !(function (t) {
      t.PARTY = "party";
    })(zh || (zh = {}));
    pd("firebase", "10.14.1", "app");
    var Gh = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const Zh = new (class {
      constructor() {
        ((this.app = vd(o)), (this.auth = Ll(this.app, { persistence: kh })));
      }
      changeFirebasePassword(t, e) {
        return Gh(this, void 0, void 0, function* () {
          const i = this.auth.currentUser;
          if (i && i.email) {
            const n = Kl.credential(i.email, t);
            try {
              return (
                yield ch(i, n),
                yield (function (t, e) {
                  return Dh(Qa(t), null, e);
                })(i, e),
                { success: !0 }
              );
            } catch (t) {
              return { success: !1, error: t.message };
            }
          }
          return {
            success: !1,
            error: "No user found or this is not an email user",
          };
        });
      }
    })();
    var Jh = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    function Yh(t, e) {
      if (t === e) return !0;
      if (!t || !e) return !1;
      if (t.length !== e.length) return !1;
      const i = new Set(t),
        n = new Set(e);
      if (i.size !== n.size) return !1;
      for (const t of i) if (!n.has(t)) return !1;
      return !0;
    }
    function Kh(t, e, i, n, s, r) {
      const o = r ? r(n, s) : n === s;
      e && !o && (t[i] = s);
    }
    const qh = new (class {
        constructor() {
          ((this.vr = 0), (this.auth = Zh.auth));
        }
        pr() {
          return Jh(this, void 0, void 0, function* () {
            if ((this.br || (this.br = this.mr()), yield this.br, !this.gr))
              throw new Error("User data failed to load");
            return this.gr;
          });
        }
        _r() {
          var t;
          return Jh(this, void 0, void 0, function* () {
            const e = yield null === (t = this.auth.currentUser) || void 0 === t
              ? void 0
              : t.getIdToken();
            try {
              const t = yield Vn("subscription", "GET", !0, {}, e);
              return (
                (ya.subscriptionData = t),
                (ya.subscriptionLastUpdated = Date.now()),
                (this.vr = 0),
                t
              );
            } catch (t) {
              (this.vr > 0 && (ya.subscriptionLastUpdated = Date.now()),
                (this.vr += 1));
            }
          });
        }
        yr() {
          var t, e, i, n;
          return Jh(this, void 0, void 0, function* () {
            const s = yield null === (t = this.auth.currentUser) || void 0 === t
              ? void 0
              : t.getIdToken();
            if (
              s &&
              (null === (e = this.auth.currentUser) || void 0 === e
                ? void 0
                : e.uid)
            ) {
              const t = ya.UUIDMap.get(this.auth.currentUser.uid);
              if (t) return t;
              try {
                const t = yield Vn("getUUID", "GET", !0, {}, s),
                  e =
                    null !== (i = t.uuid) && void 0 !== i
                      ? i
                      : null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.uuid;
                if (e) return (ya.UUIDMap.set(this.auth.currentUser.uid, e), e);
              } catch (t) {}
            }
          });
        }
        Dn() {
          return Jh(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              let i = 0;
              const n = () =>
                Jh(this, void 0, void 0, function* () {
                  i++;
                  const s = yield Lu.getValidatedChromeStorageDataAsync();
                  s.userId
                    ? t(s.userId)
                    : i < 5
                      ? setTimeout(n, 5e3)
                      : e("Could not get permId in time");
                });
              n();
            });
          });
        }
        mr(t = !1) {
          var e,
            i,
            n,
            s,
            r,
            o,
            u,
            a,
            c,
            d,
            l,
            h,
            f,
            D,
            p,
            b,
            m,
            g,
            _,
            y,
            w,
            F,
            E,
            C,
            A,
            I,
            S,
            k,
            B,
            O,
            j,
            P,
            R,
            U,
            x,
            L,
            M,
            V,
            $,
            H;
          return Jh(this, void 0, void 0, function* () {
            yield this.auth.authStateReady();
            const W =
              null !== (e = Zh.auth.currentUser) && void 0 !== e ? e : null;
            let z, G;
            try {
              const e = Date.now(),
                i = yield ya.getSessionMeLastUpdated(),
                n = yield ya.getSessionMe(),
                s = !i || e - i >= 864e5 || t;
              if (W)
                try {
                  G = yield W.getIdToken();
                } catch (t) {}
              if (s)
                try {
                  ((z = yield Vn("session/me", "GET", !0, void 0, G)),
                    ya.setSessionMeLastUpdated(e),
                    ya.setSessionMe(z));
                } catch (t) {
                  W
                    ? (z = null != n ? n : void 0)
                    : ((z = void 0),
                      n &&
                        (ya.setSessionMe(null), ya.setSessionMeLastUpdated(0)));
                }
              else z = n;
            } catch (t) {}
            const Z = !(!z && !W),
              J =
                null !== (i = null == z ? void 0 : z.presence_data) &&
                void 0 !== i
                  ? i
                  : { status: 0 },
              Y =
                null !==
                  (s =
                    null === (n = null == z ? void 0 : z.currentUser) ||
                    void 0 === n
                      ? void 0
                      : n.uid) && void 0 !== s
                  ? s
                  : null == W
                    ? void 0
                    : W.uid,
              K =
                null !==
                  (u =
                    null !==
                      (o =
                        null === (r = null == z ? void 0 : z.currentUser) ||
                        void 0 === r
                          ? void 0
                          : r.email) && void 0 !== o
                      ? o
                      : null == W
                        ? void 0
                        : W.email) && void 0 !== u
                  ? u
                  : void 0,
              q =
                null !==
                  (d =
                    null !==
                      (c =
                        null === (a = null == z ? void 0 : z.currentUser) ||
                        void 0 === a
                          ? void 0
                          : a.displayName) && void 0 !== c
                      ? c
                      : null == W
                        ? void 0
                        : W.displayName) && void 0 !== d
                  ? d
                  : void 0,
              X =
                null !==
                  (f =
                    null !==
                      (h =
                        null === (l = null == z ? void 0 : z.currentUser) ||
                        void 0 === l
                          ? void 0
                          : l.photoURL) && void 0 !== h
                      ? h
                      : null == W
                        ? void 0
                        : W.photoURL) && void 0 !== f
                  ? f
                  : void 0,
              Q =
                null !==
                  (p =
                    null === (D = null == z ? void 0 : z.currentUser) ||
                    void 0 === D
                      ? void 0
                      : D.authProviders) && void 0 !== p
                  ? p
                  : (null == W ? void 0 : W.providerData)
                    ? W.providerData.map((t) => t.providerId)
                    : void 0;
            let tt =
              null !==
                (m =
                  null === (b = null == z ? void 0 : z.currentUser) ||
                  void 0 === b
                    ? void 0
                    : b.handle) && void 0 !== m
                ? m
                : void 0;
            !tt &&
              Z &&
              ((tt = yield this.wr(G)),
              tt &&
                z &&
                ((z = Object.assign(Object.assign({}, z), {
                  currentUser: Object.assign(
                    Object.assign(
                      {},
                      null !== (g = z.currentUser) && void 0 !== g ? g : {},
                    ),
                    { handle: tt },
                  ),
                })),
                ya.setSessionMe(z)));
            let et =
              null !==
                (y =
                  null === (_ = null == z ? void 0 : z.currentUser) ||
                  void 0 === _
                    ? void 0
                    : _.uuid) && void 0 !== y
                ? y
                : null ===
                      (F =
                        null === (w = null == z ? void 0 : z.currentUser) ||
                        void 0 === w
                          ? void 0
                          : w.userIds) || void 0 === F
                  ? void 0
                  : F.uuid;
            if (!et)
              try {
                et = yield this.yr();
              } catch (t) {}
            const it = yield this.Dn(),
              nt = yield this._r(),
              st = yield Lu.getValidatedChromeStorageDataAsync(),
              rt = {
                userIcon:
                  null !==
                    (A =
                      null !==
                        (C =
                          null === (E = null == z ? void 0 : z.currentUser) ||
                          void 0 === E
                            ? void 0
                            : E.photoURL) && void 0 !== C
                        ? C
                        : st.userIcon) && void 0 !== A
                    ? A
                    : "",
                userIconFrame:
                  null !==
                    (k =
                      null !==
                        (S =
                          null === (I = null == z ? void 0 : z.currentUser) ||
                          void 0 === I
                            ? void 0
                            : I.iconFrame) && void 0 !== S
                        ? S
                        : st.userIconFrame) && void 0 !== k
                    ? k
                    : "",
                userNickname:
                  null !==
                    (j =
                      null !==
                        (O =
                          null === (B = null == z ? void 0 : z.currentUser) ||
                          void 0 === B
                            ? void 0
                            : B.displayName) && void 0 !== O
                        ? O
                        : st.userNickname) && void 0 !== j
                    ? j
                    : "",
                nameColor:
                  null !==
                    (U =
                      null !==
                        (R =
                          null === (P = null == z ? void 0 : z.currentUser) ||
                          void 0 === P
                            ? void 0
                            : P.nameColor) && void 0 !== R
                        ? R
                        : st.nameColor) && void 0 !== U
                    ? U
                    : "",
                badge:
                  null !==
                    (M =
                      null !==
                        (L =
                          null === (x = null == z ? void 0 : z.currentUser) ||
                          void 0 === x
                            ? void 0
                            : x.badge) && void 0 !== L
                        ? L
                        : st.badge) && void 0 !== M
                    ? M
                    : "",
                reactions:
                  null !==
                    (H =
                      null !==
                        ($ =
                          null === (V = null == z ? void 0 : z.currentUser) ||
                          void 0 === V
                            ? void 0
                            : V.reactions) && void 0 !== $
                        ? $
                        : st.reactions) && void 0 !== H
                    ? H
                    : N,
              };
            v.setItemsAsync(rt);
            const ot = {
              userSettings: rt,
              presence_data: J,
              signedIn: Z,
              currentUser: {
                photoURL: X,
                displayName: q,
                email: K,
                uid: Y,
                authProviders: Q,
                uuid: et,
                handle: tt,
                userIds: { permId: it, firebaseId: Y, uuid: et },
              },
              subscriptionData: nt,
              has_premium: nt && !T.includes(nt.subscriptionStatus),
            };
            this.gr = ot;
          });
        }
        wr(t) {
          var e;
          return Jh(this, void 0, void 0, function* () {
            try {
              const i = yield Vn("handles/me", "GET", !0, void 0, t),
                n =
                  null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.handle;
              return "string" == typeof n && n.length > 0 ? n : void 0;
            } catch (t) {
              return;
            }
          });
        }
        Fr() {
          var t, e, i, n, s, r;
          return Jh(this, void 0, void 0, function* () {
            const o = yield Lu.getValidatedChromeStorageDataAsync(),
              u = {
                userIcon: null !== (t = o.userIcon) && void 0 !== t ? t : "",
                userIconFrame:
                  null !== (e = o.userIconFrame) && void 0 !== e ? e : "",
                userNickname:
                  null !== (i = o.userNickname) && void 0 !== i ? i : "",
                nameColor: null !== (n = o.nameColor) && void 0 !== n ? n : "",
                badge: null !== (s = o.badge) && void 0 !== s ? s : "",
                reactions: null !== (r = o.reactions) && void 0 !== r ? r : N,
              };
            this.gr &&
              ((this.gr.userSettings = u),
              (this.gr.currentUser.displayName = u.userNickname),
              (this.gr.currentUser.photoURL = u.userIcon));
          });
        }
        updateUserSettings(t) {
          var e, i;
          return Jh(this, void 0, void 0, function* () {
            yield this.pr();
            const n = this.gr.userSettings,
              s = Object.assign(Object.assign({}, n), t),
              r = Object.assign(Object.assign({}, s), {
                userIcon: Ru(s.userIcon),
                userIconFrame: Ru(
                  null !== (e = s.userIconFrame) && void 0 !== e ? e : "",
                ),
              });
            ((this.gr.userSettings = r),
              (this.gr.currentUser.displayName = r.userNickname),
              (this.gr.currentUser.photoURL = r.userIcon),
              yield v.setItemsAsync(r));
            const o = yield h.getItemAsync("sessionMe");
            (v.setItemsAsync({
              sessionMe: Object.assign(Object.assign({}, o), {
                currentUser: Object.assign(
                  Object.assign({}, null == o ? void 0 : o.currentUser),
                  {
                    photoURL: r.userIcon,
                    iconFrame: r.userIconFrame,
                    displayName: r.userNickname,
                    nameColor: r.nameColor,
                    badge: r.badge,
                    reactions: r.reactions,
                  },
                ),
              }),
            }),
              yield ya.loadVariables());
            const u = {},
              a = Ru(n.userIcon),
              c = Ru(null !== (i = n.userIconFrame) && void 0 !== i ? i : "");
            return (
              Kh(
                u,
                void 0 !== t.userNickname,
                "displayName",
                n.userNickname,
                r.userNickname,
              ),
              Kh(u, void 0 !== t.userIcon, "photoUrl", a, r.userIcon),
              Kh(
                u,
                void 0 !== t.userIconFrame,
                "iconFrame",
                c,
                r.userIconFrame,
              ),
              Kh(
                u,
                void 0 !== t.nameColor,
                "nameColor",
                n.nameColor,
                r.nameColor,
              ),
              Kh(u, void 0 !== t.badge, "badge", n.badge, r.badge),
              Kh(
                u,
                void 0 !== t.reactions,
                "reactions",
                n.reactions,
                r.reactions,
                Yh,
              ),
              Object.keys(u).length > 0 && Vn("user/@me", "PATCH", !0, u),
              r
            );
          });
        }
        updateHandle(t) {
          return Jh(this, void 0, void 0, function* () {
            (yield this.pr(), (this.gr.currentUser.handle = t));
            const e = yield ya.getSessionMe();
            e &&
              (yield ya.setSessionMe(
                Object.assign(Object.assign({}, e), {
                  currentUser: Object.assign(Object.assign({}, e.currentUser), {
                    handle: t,
                  }),
                }),
              ));
          });
        }
        clearUserData() {
          return Jh(this, void 0, void 0, function* () {
            const t = {
              userIcon: "",
              userIconFrame: "",
              userNickname: "",
              nameColor: "",
              badge: "",
              reactions: N,
            };
            ((this.gr = {
              signedIn: !1,
              userSettings: t,
              presence_data: { status: 0 },
              currentUser: { userIds: { permId: yield this.Dn() } },
              subscriptionData: void 0,
              has_premium: !1,
            }),
              (this.br = void 0),
              yield v.setItemsAsync(t),
              yield v.setItemsAsync({
                sessionMe: null,
                sessionMeLastUpdated: 0,
              }),
              yield ya.setSessionMe(null),
              yield ya.setSessionMeLastUpdated(0));
          });
        }
        getCachedSignedIn() {
          var t;
          return null === (t = this.gr) || void 0 === t ? void 0 : t.signedIn;
        }
        getUserData(t = !1) {
          return Jh(this, void 0, void 0, function* () {
            return (
              t ? ((this.br = this.mr(t)), yield this.br) : yield this.pr(),
              yield this.Fr(),
              this.gr
            );
          });
        }
      })(),
      Xh = qh;
    var Qh = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const tf = Date.now(),
      ef = [
        ["1_popup", "popup_click", "bg_create_received"],
        ["2_server", "bg_create_received", "bg_load_session_sent"],
        ["3_page", "bg_load_session_sent", "cs_chat_injected"],
        ["4_sidebar_download", "cs_chat_injected", "sb_friend_ctx_start"],
        ["5_sidebar_user_data", "sb_friend_ctx_start", "sb_friend_ctx_loaded"],
        ["6_sidebar_ready", "sb_friend_ctx_loaded", "sb_interactive"],
      ],
      nf = {
        popup_click: 1,
        popup_permissions_checked: 1,
        popup_scripts_injected: 1,
        popup_create_sent: 1,
        bg_create_received: 1,
        bg_video_data: 2,
        bg_socket_ready: 2,
        bg_id_token: 2,
        bg_leave_session_done: 2,
        bg_user_id: 2,
        bg_create_session_response: 2,
        bg_load_session_sent: 2,
        cs_load_session_received: 3,
        cs_user_data: 3,
        cs_chat_injected: 3,
        cs_chat_visible: 3,
        sb_nav_start: 4,
        sb_response_start: 4,
        sb_response_end: 4,
        sb_dom_interactive: 4,
        sb_dom_content_loaded: 4,
        sb_sidebar_module_loaded: 4,
        sb_sidebar_mounted: 4,
        sb_friend_ctx_start: 4,
        sb_check_extension_done: 5,
        sb_perm_id_ready: 5,
        sb_subscription_done: 5,
        sb_extension_user_done: 5,
        sb_session_me_done: 5,
        sb_geo_done: 5,
        sb_friend_ctx_loaded: 5,
        sb_init_data_loaded: 6,
        sb_handler_added: 6,
        cs_sidebar_messaging_ready: 6,
        cs_init_data_sent: 6,
        sb_init_data_received: 6,
        sb_interactive: 6,
      },
      sf = [
        ["popup_permissions", "popup_click", "popup_permissions_checked"],
        [
          "popup_inject_scripts",
          "popup_permissions_checked",
          "popup_scripts_injected",
        ],
        ["popup_fixed_delay", "popup_scripts_injected", "popup_create_sent"],
        ["bg_video_data", "bg_create_received", "bg_video_data"],
        ["bg_socket", "bg_video_data", "bg_socket_ready"],
        ["bg_id_token", "bg_socket_ready", "bg_id_token"],
        ["bg_leave_session", "bg_id_token", "bg_leave_session_done"],
        ["bg_user_id", "bg_leave_session_done", "bg_user_id"],
        ["bg_create_session", "bg_user_id", "bg_create_session_response"],
        [
          "bg_load_session",
          "bg_create_session_response",
          "bg_load_session_sent",
        ],
        [
          "cs_load_session_delivery",
          "bg_load_session_sent",
          "cs_load_session_received",
        ],
        ["cs_user_data", "cs_load_session_received", "cs_user_data"],
        ["cs_inject_chat", "cs_user_data", "cs_chat_injected"],
        ["cs_show_chat", "cs_chat_injected", "cs_chat_visible"],
        ["sb_ttfb", "sb_nav_start", "sb_response_start"],
        ["sb_html", "sb_nav_start", "sb_response_end"],
        ["sb_dom_interactive", "sb_nav_start", "sb_dom_interactive"],
        ["sb_until_react", "sb_nav_start", "sb_friend_ctx_start"],
        ["sb_sidebar_chunk", "sb_nav_start", "sb_sidebar_module_loaded"],
        [
          "sb_check_extension",
          "sb_friend_ctx_start",
          "sb_check_extension_done",
        ],
        [
          "sb_subscription_api",
          "sb_check_extension_done",
          "sb_subscription_done",
        ],
        ["sb_session_me_api", "sb_extension_user_done", "sb_session_me_done"],
        ["sb_geo_api", "sb_friend_ctx_start", "sb_geo_done"],
        ["sb_perm_id", "sb_check_extension_done", "sb_perm_id_ready"],
        ["sb_load_version", "sb_friend_ctx_loaded", "sb_init_data_loaded"],
        ["sb_add_handler", "sb_init_data_loaded", "sb_handler_added"],
        [
          "sb_messaging_ready",
          "sb_handler_added",
          "cs_sidebar_messaging_ready",
        ],
        ["sb_init_data", "cs_sidebar_messaging_ready", "sb_init_data_received"],
        ["sb_render", "sb_init_data_received", "sb_interactive"],
      ];
    function rf(t, e) {
      const i = nf[e];
      return void 0 === i ? t : `${i}_${t}`;
    }
    function of(t) {
      try {
        t();
      } catch (t) {
        console.log("Party init timing error", t);
      }
    }
    const uf = new (class {
      constructor() {
        ((this.Er = new Map()), (this.Cr = new Map()), (this.Ar = 1));
      }
      start(t, e = {}, i = {}) {
        const n = this.Ar++;
        return (
          of(() => {
            var s, r, o;
            const u = this.Er.get(
                null !== (s = this.Cr.get(t)) && void 0 !== s ? s : 0,
              ),
              a =
                void 0 !==
                (null == u ? void 0 : u.marks.bg_create_session_response);
            u &&
              !a &&
              this.Ir(null !== (r = this.Cr.get(t)) && void 0 !== r ? r : 0, {
                completed: !1,
                superseded: !0,
              });
            const c = Date.now(),
              d = Object.assign(Object.assign({}, e), {
                bg_create_received: c,
              });
            (this.Er.set(n, {
              tabId: t,
              startedAt: null !== (o = d.popup_click) && void 0 !== o ? o : c,
              marks: d,
              meta: Object.assign(
                Object.assign(Object.assign({}, i), { bg_uptime_ms: c - tf }),
                a ? { duplicate: !0 } : {},
              ),
              timeoutId: setTimeout(
                () => this.Ir(n, { completed: !1, timed_out: !0 }),
                2e4,
              ),
            }),
              a || this.Cr.set(t, n));
          }),
          n
        );
      }
      markAttempt(t, e, i = Date.now()) {
        this.Sr(t, { [e]: i }, {});
      }
      setAttemptMeta(t, e) {
        this.Sr(t, {}, e);
      }
      failAttempt(t, e) {
        of(() => {
          const i = e instanceof Error ? e.message : String(e);
          this.Ir(t, { completed: !1, error: i.slice(0, 200) });
        });
      }
      mark(t, e, i = Date.now()) {
        this.addMarks(t, { [e]: i });
      }
      addMarks(t, e = {}, i = {}) {
        var n;
        this.Sr(null !== (n = this.Cr.get(t)) && void 0 !== n ? n : 0, e, i);
      }
      setMeta(t, e) {
        this.addMarks(t, {}, e);
      }
      isTracking(t) {
        return this.Cr.has(t);
      }
      complete(t) {
        var e;
        this.Ir(null !== (e = this.Cr.get(t)) && void 0 !== e ? e : 0, {
          completed: !0,
        });
      }
      Sr(t, e, i) {
        of(() => {
          const n = this.Er.get(t);
          if (n) {
            for (const [t, i] of Object.entries(e))
              "number" == typeof i &&
                Number.isFinite(i) &&
                void 0 === n.marks[t] &&
                (n.marks[t] = i);
            Object.assign(n.meta, i);
          }
        });
      }
      Ir(t, e) {
        of(() => {
          const i = this.Er.get(t);
          i &&
            (this.Er.delete(t),
            this.Cr.get(i.tabId) === t && this.Cr.delete(i.tabId),
            clearTimeout(i.timeoutId),
            this.kr(i, e));
        });
      }
      kr(t, e) {
        return Qh(this, void 0, void 0, function* () {
          try {
            const i = (yield Xh.getUserData()).currentUser.userIds.permId;
            if (!i) return;
            const { startedAt: n, marks: s, meta: r } = t,
              o = Object.assign(Object.assign(Object.assign({}, r), e), {
                sidebar_reported: void 0 !== s.sb_interactive,
                extension_version: I,
                browser: "chrome",
                is_prod: !0,
              }),
              u = (t, e) =>
                void 0 !== s[t] && void 0 !== s[e] ? s[e] - s[t] : void 0,
              a = (t, e) => {
                void 0 !== e && (o[t] = e);
              };
            for (const [t, e] of Object.entries(s)) o[`t_${rf(t, t)}`] = e - n;
            for (const [t, e, i] of ef) a(`d_${t}`, u(e, i));
            for (const [t, e, i] of sf) a(`d_${rf(t, i)}`, u(e, i));
            (a(
              `d_${rf("sb_extension_user", "sb_extension_user_done")}`,
              u(
                (function (t) {
                  return "test" === t.sb_fast_load_variant
                    ? "sb_perm_id_ready"
                    : "sb_subscription_done";
                })(r),
                "sb_extension_user_done",
              ),
            ),
              a("d_total", u("popup_click", "sb_interactive")),
              yield x.sendEvent("party_init_timing", i, o));
          } catch (t) {
            console.log("Failed to send party init timing", t);
          }
        });
      }
    })();
    class af {
      constructor() {
        ((this.Tr = Z()("teleparty:log")),
          (this.Br = Z()("teleparty:warn")),
          (this.Or = Z()("teleparty:error")),
          (this.Tr.log = console.debug.bind(console)),
          (this.Br.log = console.warn.bind(console)),
          (this.Or.log = console.error.bind(console)));
      }
      static get instance() {
        return (af.Nr || (af.Nr = new af()), af.Nr);
      }
      log(t, ...e) {
        this.Tr(`[Teleparty] ${t}`, ...e);
      }
      warn(t, ...e) {
        this.Br(`[Teleparty] ${t}`, ...e);
      }
      error(t, ...e) {
        this.Or(`[Teleparty] ${t}`, ...e);
      }
    }
    const cf = af.instance;
    var df = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function u(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, u);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const lf = new (class {
        constructor() {
          ((this.jr = new Map()),
            (this.Pr = new Map()),
            (this.Ge = new Fa()),
            (this.auth = Zh.auth),
            this.Ge.Wi(),
            (this.Rr = new Aa()),
            this.mn());
          const t =
            ((e = this.auth),
            (i = (e) => {
              e && (this.triggerSignIn(), t());
            }),
            Qa(e).onAuthStateChanged(i, n, s));
          var e, i, n, s;
          ((this.ze = void 0), console.log("Background Script Loaded"));
        }
        Ur(t, e) {
          return df(this, void 0, void 0, function* () {
            const i = yield h.getItemsAsync(["REDIRECT_URL"]);
            if (e && !(i.REDIRECT_URL || {})[e]) {
              const n = Object.assign(Object.assign({}, i.REDIRECT_URL || {}), {
                [e]: t,
              });
              v.setItemsAsync({ REDIRECT_URL: n });
            }
          });
        }
        Lr(t) {
          return df(this, void 0, void 0, function* () {
            const e = yield h.getItemsAsync(["REDIRECT_URL"]);
            if (t && e.REDIRECT_URL && e.REDIRECT_URL[t])
              return e.REDIRECT_URL[t];
          });
        }
        Mr(t, e) {
          var i, n;
          return df(this, void 0, void 0, function* () {
            const s = { inSession: !1 };
            if (t) {
              try {
                const e = wu.getSocketForTabId(t),
                  o =
                    null ===
                      (i = null == e ? void 0 : e.getCurrentSessionData()) ||
                    void 0 === i
                      ? void 0
                      : i.sessionId;
                o &&
                  ((s.inSession = !0),
                  (s.sessionId = o),
                  (s.partyUrl =
                    null !== (n = yield this.Lr(o)) && void 0 !== n
                      ? n
                      : `${r}/join/${o}`));
              } catch (t) {}
              e(s);
            } else e(s);
          });
        }
        Vr() {
          return df(this, void 0, void 0, function* () {
            yield v.setItemsAsync({ REDIRECT_URL: {} });
          });
        }
        loadRedirectUrl(t, i = 0) {
          return df(this, void 0, void 0, function* () {
            try {
              if ((yield this.Lr(t)) || i > 1) return;
              if (!this.ze) return;
              {
                const {
                    title: n,
                    releaseYear: s,
                    service: o,
                    type: u,
                    episodeYear: a,
                  } = this.ze,
                  c = new URLSearchParams(
                    Object.entries(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign({}, n ? { title: n } : {}),
                              u ? { type: u } : {},
                            ),
                            s ? { release_year: s } : {},
                          ),
                          a ? { episode_year: a } : {},
                        ),
                        o ? { service: o } : {},
                      ),
                    ).reduce(
                      (t, [e, i]) => (void 0 !== i && (t[e] = i), t),
                      {},
                    ),
                  ),
                  d = yield fetch(`${e}/get-join-url?${c}`, { method: "GET" });
                if (d) {
                  const e = yield d.json();
                  if ((console.log("DATA", e), null == e ? void 0 : e.url)) {
                    const i = `${r}${e.url}${t ? `?sessionId=${t}` : ""}`;
                    yield this.Ur(i, t);
                    const n = new Uh(L, M, { sessionId: t, redirectUrl: i });
                    W.p(n);
                  } else {
                    const e = i + 1;
                    (yield new Promise((t) => setTimeout(t, 7e3)),
                      yield this.loadRedirectUrl(t, e));
                  }
                }
              }
            } catch (t) {
              console.log("Error in loadRedirectUrl", t);
            }
          });
        }
        removeSignInCallback(t) {
          const e = ya.signInCallbacks.array.findIndex((e) => e.callback === t);
          -1 !== e && ya.signInCallbacks.splice(e, 1);
        }
        addSignInFunction(t, e) {
          ya.signInCallbacks.add({
            callback: t,
            data: e,
            startTime: Date.now(),
          });
        }
        signInCallbacksFunction(t, e) {
          if ("StartParty" === t) this.$r(e);
          else console.log("Non existent callback");
        }
        triggerSignIn() {
          (ya.signInCallbacks.array.forEach(
            ({ callback: t, data: e, startTime: i }) => {
              if (!(Date.now() - i > 3e5))
                try {
                  this.signInCallbacksFunction(t, e);
                } catch (t) {
                  console.log("SIGN IN CALLBACK ERROR", t);
                }
            },
          ),
            ya.signInCallbacks.clear());
        }
        Hr() {
          this.Ge.closeEventWindow();
        }
        Wr() {
          this.Hr();
          const t = window.open(
            "https://redirect.teleparty.com/event-logger",
            "Teleparty Logger",
            "width=600,height=530,status=0,scrollbars=0,menubar=0",
          );
          t && this.Ge.setEventWindow(t);
        }
        _n(t, e, i) {
          var n,
            s,
            r,
            o,
            u,
            a,
            c,
            d,
            l,
            f,
            D,
            p,
            b,
            m,
            g,
            _,
            y,
            w,
            F,
            E,
            C,
            A,
            I,
            S,
            k,
            T,
            B,
            O,
            N,
            j,
            P,
            R,
            U,
            M,
            $;
          if (t.target === L) {
            if (t.type == Gu.CREATE_SESSION) {
              const r = t;
              Z()("Got create Session Message");
              const o = r.data;
              return (
                0 === o.tabId &&
                  (o.tabId =
                    null !==
                      (s =
                        null === (n = e.tab) || void 0 === n ? void 0 : n.id) &&
                    void 0 !== s
                      ? s
                      : 0),
                this.$r(o).then(i).catch(this.zr(i, e.tab)),
                !0
              );
            }
            if (
              t.type == Gu.SCHEDULE_SESSION ||
              t.type == Gu.CREATE_SCHEDULED_EVENT
            ) {
              const n = t.data;
              return (null == n ? void 0 : n.contentEventId) &&
                "string" == typeof n.contentEventId &&
                n.contentEventId.trim()
                ? (this.Gr(n, e, i), !0)
                : (i({
                    error:
                      "scheduleSession requires data.contentEventId (non-empty string)",
                  }),
                  !0);
            }
            if (t.type === Gu.LOBBY_RELAY_SEND_CHAT)
              return (this.Zr(t.data, e, i), !0);
            if (t.type === Gu.LOBBY_RELAY_SET_TYPING)
              return (this.Jr(t.data, e, i), !0);
            if (
              t.type === Gu.LOBBY_RELAY_BIND_JOIN ||
              t.type === su.JOIN_SESSION
            )
              return (this.Yr(t.data, e, i), !0);
            if (t.type === su.LEAVE_SESSION) return (this.Kr(t.data, e, i), !0);
            if (t.type === Gu.SELECT_PROVIDER)
              return (this.qr(t.data, e, i), !0);
            if (t.type === Gu.REPORT_STREAM_POSITION)
              return (this.Xr(t.data, e, i), !0);
            if (t.type == zu.GET_SESSION_DATA) {
              const n = t;
              return (this.Qr(n.data, e).then(i).catch(this.zr(i, e.tab)), !0);
            }
            if (t.type === zu.EVENT_SUCCESS) {
              const i = t,
                n = Object.assign(Object.assign({}, i.extraArgs), {
                  tabId: null === (r = e.tab) || void 0 === r ? void 0 : r.id,
                  tab: e.tab,
                });
              i.loggerType === zh.PARTY
                ? Wh.log(i.eventSuccess, n)
                : Vh.log(i.eventSuccess, n);
            } else {
              if (t.type == su.TEARDOWN) {
                console.log("Got Teardown message");
                const n = t;
                return (
                  this.eo(n, e).then(i),
                  (this.ze = void 0),
                  this.Vr(),
                  !0
                );
              }
              if (t.type == su.PARTY_INIT_TIMING) {
                const {
                  marks: n,
                  meta: s,
                  final: r,
                } = null !== (o = t.data) && void 0 !== o ? o : {};
                let c =
                  null !==
                    (a =
                      null === (u = e.tab) || void 0 === u ? void 0 : u.id) &&
                  void 0 !== a
                    ? a
                    : 0;
                return (
                  ya.partyWindowsMap.mapObj.forEach((t) => {
                    t.chatTabId === c && (c = t.videoTabId);
                  }),
                  uf.addMarks(c, n, s),
                  r && uf.complete(c),
                  i(),
                  !1
                );
              }
              if (t.type == su.LOG_EVENT) {
                const n = t,
                  s = n.data;
                if ("eventType" in s) this.logOldEventAsync(s);
                else {
                  let t;
                  (ya.partyWindowsMap.mapObj.forEach((i) => {
                    var n;
                    i.chatTabId ===
                      (null === (n = e.tab) || void 0 === n ? void 0 : n.id) &&
                      (t = i.videoTabId);
                  }),
                    t
                      ? this.no(t).then((t) => {
                          this.Zi(s, t, !1, n.eventPipelineTarget);
                        })
                      : this.Zi(s, e.tab, !1, n.eventPipelineTarget));
                }
                return (i(), !0);
              }
              if (t.type == su.GET_PARTY_STATUS) {
                const t = wu.getSocketForTabId(
                  null !==
                    (d =
                      null === (c = e.tab) || void 0 === c ? void 0 : c.id) &&
                    void 0 !== d
                    ? d
                    : 0,
                );
                return (
                  i({
                    partyState: t
                      ? Oh.PARTY_STATE_IN_SESSION
                      : Oh.PARTY_STATE_NONE,
                  }),
                  !0
                );
              }
              if (t.type == su.GET_TAB_PARTY_SESSION_FOR_POPUP) {
                const n =
                  null !==
                    (p =
                      null !==
                        (f =
                          null === (l = t.data) || void 0 === l
                            ? void 0
                            : l.tabId) && void 0 !== f
                        ? f
                        : null === (D = e.tab) || void 0 === D
                          ? void 0
                          : D.id) && void 0 !== p
                    ? p
                    : 0;
                return (this.Mr(n, i), !0);
              }
              if (t.type == Gu.RE_INJECT) {
                const n = t;
                Z()("Got Re Inject Message");
                const s = n.data;
                return (
                  0 === s.extensionTabData.id &&
                    (s.extensionTabData.id =
                      null !==
                        (m =
                          null === (b = e.tab) || void 0 === b
                            ? void 0
                            : b.id) && void 0 !== m
                        ? m
                        : 0),
                  this.so(s).then(i).catch(this.zr(i, e.tab)),
                  !0
                );
              }
              if (t.type == su.STAY_ALIVE) {
                const n = t,
                  s = this.ro(
                    null === (g = e.tab) || void 0 === g ? void 0 : g.url,
                  );
                let r =
                  null !==
                    (y =
                      null === (_ = e.tab) || void 0 === _ ? void 0 : _.id) &&
                  void 0 !== y
                    ? y
                    : 0;
                return (
                  (s &&
                    (null === (w = e.tab) || void 0 === w ? void 0 : w.id) &&
                    0 !== e.tab.id) ||
                    (n.data.tabId && 0 !== n.data.tabId && (r = n.data.tabId)),
                  console.log("Got Stay Alive Message", r),
                  this.oo(r, n.data.persist, s),
                  i(),
                  !0
                );
              }
              if (t.type == su.LOAD_CHAT_WINDOW) {
                const t =
                    null !==
                      (E =
                        null === (F = e.tab) || void 0 === F ? void 0 : F.id) &&
                    void 0 !== E
                      ? E
                      : 0,
                  n =
                    null !==
                      (A =
                        null === (C = e.tab) || void 0 === C
                          ? void 0
                          : C.windowId) && void 0 !== A
                      ? A
                      : 0;
                return (this.uo(t, n).then(i), !0);
              }
              if (t.type == su.FULLSCREEN_WINDOW) {
                const t =
                  null !==
                    (S =
                      null === (I = e.tab) || void 0 === I
                        ? void 0
                        : I.windowId) && void 0 !== S
                    ? S
                    : 0;
                return (console.log("Window ID is", t), this.fullScreen(t), !0);
              }
              if (t.type == su.MAX_WINDOW) {
                const t =
                  null !==
                    (T =
                      null === (k = e.tab) || void 0 === k
                        ? void 0
                        : k.windowId) && void 0 !== T
                    ? T
                    : 0;
                return (
                  console.log("Window ID is", t),
                  this.fullScreen(t, !1),
                  !0
                );
              }
              if (t.type == su.RESET_CHAT_WINDOW) {
                const t =
                  null !==
                    (O =
                      null === (B = e.tab) || void 0 === B ? void 0 : B.id) &&
                  void 0 !== O
                    ? O
                    : 0;
                let n;
                return (
                  ya.partyWindowsMap.mapObj.forEach((e) => {
                    (e.chatTabId != t && e.videoTabId != t) || (n = e);
                  }),
                  n && this.ao(n).then(i),
                  !0
                );
              }
              if (t.type == su.HIDE_CHAT_WINDOW) {
                const t =
                  null !==
                    (j =
                      null === (N = e.tab) || void 0 === N ? void 0 : N.id) &&
                  void 0 !== j
                    ? j
                    : 0;
                let n;
                return (
                  cf.log("Attempting to hide chat window"),
                  ya.partyWindowsMap.mapObj.forEach((e) => {
                    (e.chatTabId != t && e.videoTabId != t) || (n = e);
                  }),
                  n && this.co(n).then(i),
                  !0
                );
              }
              if (t.type == su.BLOCK_CSP) return (i(!1), !0);
              if (t.type == Gu.GET_INIT_USER_SETTINGS) {
                const e = t,
                  n = Boolean(
                    e.shouldRefresh ||
                    (null === (P = e.data) || void 0 === P
                      ? void 0
                      : P.shouldRefresh),
                  );
                return (
                  Xh.getUserData(n)
                    .then((t) => {
                      i(t);
                    })
                    .catch((t) => {
                      (console.log(t), i(void 0));
                    }),
                  !0
                );
              }
              if (t.type === su.UPDATE_USER_SETTINGS) {
                const e = t;
                return (Xh.updateUserSettings(e.data).then((t) => i(t)), !0);
              }
              if (t.type === su.UPDATE_HANDLE) {
                const e = t;
                return (
                  Xh.updateHandle(e.handle)
                    .then(() => i(!0))
                    .catch((t) => console.log(t)),
                  !0
                );
              }
              if (t.type == Gu.EMAIL_SIGN_IN) {
                const e = t;
                return (
                  this.doEmailSignIn(e.data.email, e.data.password)
                    .then(i)
                    .catch((t) => i({ error: t })),
                  !0
                );
              }
              if (t.type == Gu.CHANGE_FIREBASE_PASSWORD) {
                const e = t;
                return (
                  Zh.changeFirebasePassword(
                    e.data.oldPassword,
                    e.data.newPassword,
                  )
                    .then((t) => {
                      (console.log(t), i(t));
                    })
                    .catch((t) => i({ success: !1, error: t })),
                  !0
                );
              }
              if (t.type == Gu.FORGOT_PASSWORD) {
                const e = t;
                return (
                  this.forgotPassword(e.data.email)
                    .then(i)
                    .catch((t) => i({ error: t })),
                  !0
                );
              }
              if (t.type == Gu.EMAIL_SIGN_UP) {
                const e = t;
                return (
                  this.doEmailSignUp(
                    e.data.email,
                    e.data.password,
                    null === (R = e.data.optin) || void 0 === R || R,
                  )
                    .then(i)
                    .catch((t) => i({ error: t })),
                  !0
                );
              }
              if (t.type === Gu.ON_GOOGLE_SIGN_IN) {
                const e = t;
                return (this.onGoogleSignIn(e.data.credential).then(i), !0);
              }
              if (t.type == Hu.SIGN_OUT) return (this.do().then(i), !0);
              if (t.type == Hu.GET_SIGN_OUT_EPOCH)
                return (
                  chrome.storage.local
                    .get("tp_logout_epoch")
                    .then((t) => i(t))
                    .catch(i),
                  chrome.storage.local.remove("tp_logout_epoch"),
                  !0
                );
              if (t.type == Gu.GET_SCHEDULED_EVENTS)
                return (this.lo().then(i), !0);
              if (t.type == Gu.GET_RECENT_SCHEDULED_EVENTS)
                return (this.ho().then(i), !0);
              if (t.type === Hu.GET_AUTH_TOKEN) {
                const e =
                  !0 ===
                  (null === (U = t.data) || void 0 === U ? void 0 : U.refresh);
                return (
                  this.fo(e).then(i).catch(this.receiveMessageOnError(i)),
                  !0
                );
              }
              if (t.type == su.GET_EXPERIMENT_FLAG) {
                const e = t,
                  n = this.Rr.checkFlag(e.data.flag_name);
                return (i({ bucket: n }), !0);
              }
              if (t.type === su.GET_TAB_ID)
                return (
                  (() => {
                    df(this, void 0, void 0, function* () {
                      var t, n;
                      let s =
                        null === (t = e.tab) || void 0 === t ? void 0 : t.id;
                      if (null == s || 0 === s)
                        try {
                          s =
                            null ===
                              (n = (yield chrome.tabs.query({
                                active: !0,
                                currentWindow: !0,
                              }))[0]) || void 0 === n
                              ? void 0
                              : n.id;
                        } catch (t) {
                          s = void 0;
                        }
                      i(s);
                    });
                  })(),
                  !0
                );
              if (t.type === Gu.SIGN_IN_CREATE) {
                const e = t;
                return (
                  this.removeSignInCallback(e.data.action),
                  this.addSignInFunction(e.data.action, e.data.data),
                  !0
                );
              }
              if (t.type === Bh.OPEN_TAB) {
                const { url: e } = t.data;
                chrome.tabs.create({ url: e });
              } else if (t.type === su.TOGGLE_BACKGROUND_TAB) {
                const { url: e } = t.data;
                chrome.tabs.create({ url: e, active: !1 }, (t) =>
                  df(this, void 0, void 0, function* () {
                    chrome.tabs.onUpdated.addListener(function e(i, n) {
                      "complete" === n.status &&
                        i === t.id &&
                        (chrome.tabs.onUpdated.removeListener(e),
                        Ln(1e3)().then(() => {
                          chrome.tabs.remove(i);
                        }));
                    });
                  }),
                );
              } else {
                if (t.type === su.SET_DATA)
                  return (
                    v.setItemsAsync({ [t.data.key]: t.data.value }),
                    i(t.data.value),
                    !0
                  );
                if (t.type === su.GET_DATA)
                  return (
                    h
                      .getAllItemsAsync()
                      .then((e) => {
                        let n;
                        (e && (n = e[t.data.key]), i({ result: n }));
                      })
                      .catch(() => {
                        i({ result: void 0 });
                      }),
                    !0
                  );
                if (t.type === su.SET_REDIRECT_URL)
                  return (this.loadRedirectUrl(t.data), i(), !0);
                if (t.type === su.POSTHOG_HAS_FEATURE) {
                  const { featureName: e } = t.data;
                  return (
                    Xh.getUserData().then((t) => {
                      x.hasFeature(e, t.currentUser.userIds.permId).then(
                        (t) => {
                          i({ hasFeature: t });
                        },
                      );
                    }),
                    !0
                  );
                }
                if (t.type === su.GET_PERM_ID)
                  return (
                    this.waitForPermId().then((t) => {
                      i(t);
                    }),
                    !0
                  );
                if (t.type === su.SEND_API_REQUEST)
                  return (
                    ka(t.data)
                      .then(i)
                      .catch((t) => i({ ok: !1, error: String(t) })),
                    !0
                  );
              }
            }
            if (t.type === su.LOAD_NETFLIX_DATA)
              return (this.Ge.Yi(t.data), i(), !0);
          } else if (t.target == V) {
            let n,
              s =
                null !==
                  ($ = null === (M = e.tab) || void 0 === M ? void 0 : M.id) &&
                void 0 !== $
                  ? $
                  : 0;
            return (
              ya.partyWindowsMap.mapObj.forEach((t) => {
                (t.chatTabId != s && t.videoTabId != s) || (n = t);
              }),
              n &&
                (console.log("change tab ID for" + t.target),
                (s = t.target == V ? n.videoTabId : n.chatTabId)),
              (t.tabId = s),
              W.sendMessageToTabAsync(t, s).then(i).catch(i),
              !0
            );
          }
          return !1;
        }
        Do(t) {
          if (!t) return !1;
          try {
            return (t.includes("://") ? new URL(t).hostname : t).includes(
              ".peacocktv.",
            );
          } catch (e) {
            return t.includes(".peacocktv.");
          }
        }
        vo(t) {
          if (!t) return !1;
          const e = t.toLowerCase();
          try {
            const e = t.includes("://") ? new URL(t).hostname : t;
            return e.includes("pluto.tv") || "plutotv" === e;
          } catch (t) {
            return e.includes("pluto.tv") || e.includes("plutotv");
          }
        }
        po(t) {
          if (!t) return !1;
          const e = t.toLowerCase();
          try {
            const e = t.includes("://") ? new URL(t).hostname : t;
            return e.includes("mubi.") || "mubi.com" === e || "mubi" === e;
          } catch (t) {
            return (
              e.includes("mubi.") || e.includes("mubi.com") || "mubi" === e
            );
          }
        }
        ro(t) {
          return this.Do(t) || this.vo(t) || this.po(t);
        }
        oo(t, e, i = !1) {
          let n;
          (e ||
            (n = setTimeout(
              () =>
                df(this, void 0, void 0, function* () {
                  (this.Ge.removeAliveTab(t), yield this.bo(t));
                }),
              6e4,
            )),
            this.Ge.addAliveTab(t, n, i));
        }
        so(t) {
          return df(this, void 0, void 0, function* () {
            const e = t.extensionTabData;
            (yield this.Ge.initContentScriptsAsync(e),
              yield this.Ge.initBrowseScriptsAsync(e));
          });
        }
        mo() {
          var t;
          return df(this, void 0, void 0, function* () {
            const e = yield h.getItemsAsync(["extensionUses"]),
              i = null !== (t = e.extensionUses) && void 0 !== t ? t : 0;
            yield v.setItemsAsync({ extensionUses: i + 1 });
          });
        }
        updateShareListFirebaseId(t) {
          return df(this, void 0, void 0, function* () {
            const e = t.data.permId,
              i = t.data.firebaseUid,
              n = yield h.getItemsAsync(["shareList"]),
              s = n.findIndex((t) => t.permId === e);
            -1 !== s && i
              ? ((n[s].firebaseUid = i),
                yield v.setItemsAsync({ shareList: n }))
              : console.log("No user to update");
          });
        }
        updateShareList(t) {
          var e;
          return df(this, void 0, void 0, function* () {
            if (t.data.userList.length > 10 || !t.data.socketConnectionId)
              return;
            const i = yield h.getItemsAsync(["shareList"]),
              n = null !== (e = i.shareList) && void 0 !== e ? e : [],
              s = n.map((t) => t.permId),
              r = t.data.userList.flatMap((t) => (t.permId ? [t.permId] : [])),
              o = [...new Set([...s, ...r])],
              u =
                ya.sessionProcessedUsers.get(t.data.socketConnectionId) ||
                new Set(),
              a = o.filter((t) => !u.has(t));
            if (0 === a.length) return;
            const c = [];
            a.forEach((e) => {
              var i, s;
              const r = n.find((t) => t.permId === e),
                o = t.data.userList.find((t) => t.permId === e);
              (r
                ? ((r.partyCount += 1),
                  (r.firebaseUid =
                    null !== (i = null == o ? void 0 : o.firebaseUid) &&
                    void 0 !== i
                      ? i
                      : r.firebaseUid),
                  (r.userSettings =
                    null !== (s = null == o ? void 0 : o.userSettings) &&
                    void 0 !== s
                      ? s
                      : r.userSettings),
                  c.push(r))
                : c.push({
                    permId: e,
                    partyCount: 1,
                    firebaseUid: null == o ? void 0 : o.firebaseUid,
                    userSettings: null == o ? void 0 : o.userSettings,
                  }),
                u.add(e));
            });
            const d = [...n, ...c].filter(
              (t, e, i) => i.findIndex((e) => e.permId === t.permId) === e,
            );
            (ya.sessionProcessedUsers.set(t.data.socketConnectionId, u),
              yield v.setItemsAsync({ shareList: d }));
          });
        }
        _o(t) {
          if (
            (console.log(t),
            ya.cspBlockingTabs.includes(t.tabId) ||
              ya.cspBlockingTabs.add(t.tabId),
            !t.responseHeaders)
          )
            return;
          let e = !1;
          for (let i = 0; i < t.responseHeaders.length; i++)
            "content-security-policy" ===
              t.responseHeaders[i].name.toLowerCase() &&
              ((e = !0), (t.responseHeaders[i].value = ""));
          return (
            e ||
              t.responseHeaders.push({
                name: "Content-Security-Policy",
                value: "frame-src *.teleparty.com",
              }),
            { responseHeaders: t.responseHeaders }
          );
        }
        yo() {
          let t = "";
          return (
            navigator.userAgent.includes("Firefox/")
              ? (t = `Firefox v${navigator.userAgent.split("Firefox/")[1]}`)
              : navigator.userAgent.includes("Edg/")
                ? (t = `Edg v${navigator.userAgent.split("Edg/")[1]}`)
                : navigator.userAgent.includes("Chrome/") &&
                  (t = `Chrome v${navigator.userAgent.split("Chrome/")[1]}`),
            t
          );
        }
        wo() {
          let t = "";
          return (
            -1 != navigator.userAgent.indexOf("Windows NT 10.0") &&
              (t = "Windows 10"),
            -1 != navigator.userAgent.indexOf("Windows NT 6.3") &&
              (t = "Windows 8.1"),
            -1 != navigator.userAgent.indexOf("Windows NT 6.2") &&
              (t = "Windows 8"),
            -1 != navigator.userAgent.indexOf("Windows NT 6.1") &&
              (t = "Windows 7"),
            -1 != navigator.userAgent.indexOf("Windows NT 6.0") &&
              (t = "Windows Vista"),
            -1 != navigator.userAgent.indexOf("Windows NT 5.1") &&
              (t = "Windows XP"),
            -1 != navigator.userAgent.indexOf("Windows NT 5.0") &&
              (t = "Windows 2000"),
            -1 != navigator.userAgent.indexOf("Mac") && (t = "Mac/iOS"),
            -1 != navigator.userAgent.indexOf("X11") && (t = "UNIX"),
            -1 != navigator.userAgent.indexOf("Linux") && (t = "Linux"),
            t
          );
        }
        Fo(t) {
          const e = wu.getSocketForTabId(t);
          return {
            id: null == e ? void 0 : e.getId(),
            transport: null == e ? void 0 : e.getTransport(),
            type: null == e ? void 0 : e.getType(),
            start_time_ms: null == e ? void 0 : e.getSocketStartTime(),
          };
        }
        Eo(t, e) {
          var i, n, s, r, o, u, a, c, d, l, h, f, D, v, p;
          return df(this, void 0, void 0, function* () {
            const b = Object.assign({}, t),
              m = null !== (i = e.id) && void 0 !== i ? i : 0,
              g = wu.getSocketForTabId(m),
              _ =
                null !== (n = b.video_session) && void 0 !== n
                  ? n
                  : this.Ge.getVideoSessionData();
            if (g) {
              const t = g.getCurrentSessionData();
              if (t && t.sessionId) {
                const e = {
                  id: null == t ? void 0 : t.sessionId,
                  start_time_ms: null == t ? void 0 : t.created_at,
                  member_type: (null == t ? void 0 : t.created)
                    ? "host"
                    : "participant",
                };
                b.party_session = e;
              }
              const e = this.Fo(m);
              e.id && (b.socket_session = e);
            }
            if (g || "content_detected" === b.name)
              try {
                const t = yield this.Co(m),
                  i = t.videoState,
                  n = (function (t) {
                    var e;
                    const i = [
                      null == t ? void 0 : t.originalTitle,
                      null == t ? void 0 : t.videoTitle,
                      null === (e = null == t ? void 0 : t.content) ||
                      void 0 === e
                        ? void 0
                        : e.name,
                    ]
                      .map(q)
                      .find(X);
                    return i ? { title: i } : void 0;
                  })(t);
                if (
                  ((_.status = i),
                  (_.video_ts_ms = t.video_ts_ms),
                  (_.party_ts_ms = t.party_ts_ms),
                  "content_detected" === b.name)
                ) {
                  const i =
                      null !==
                        (a =
                          null !==
                            (o =
                              null !== (s = e.url) && void 0 !== s
                                ? s
                                : null === (r = b.page) || void 0 === r
                                  ? void 0
                                  : r.url) && void 0 !== o
                            ? o
                            : null === (u = t.content) || void 0 === u
                              ? void 0
                              : u.url) && void 0 !== a
                        ? a
                        : "",
                    f =
                      null !==
                        (d =
                          null === (c = b.page) || void 0 === c
                            ? void 0
                            : c.name) && void 0 !== d
                        ? d
                        : null === (l = b.content) || void 0 === l
                          ? void 0
                          : l.name;
                  ((b.page = (function (t, e, i) {
                    var n, s, r;
                    return {
                      type: "watch",
                      name:
                        null !== (n = null == e ? void 0 : e.title) &&
                        void 0 !== n
                          ? n
                          : q(i.fallbackName),
                      url: i.url,
                      is_adblock_enabled:
                        null !== (s = t.is_adblock_enabled) &&
                        void 0 !== s &&
                        s,
                      is_chat_visible: t.is_chat_visible,
                      is_player_fullscreen: t.is_player_fullscreen,
                      referrer:
                        null !== (r = i.referrer) && void 0 !== r ? r : "",
                      version: i.version,
                    };
                  })(t, n, {
                    url: i,
                    referrer:
                      null === (h = b.page) || void 0 === h
                        ? void 0
                        : h.referrer,
                    version: I,
                    fallbackName: f,
                  })),
                    (b.content = (function (t, e, i) {
                      var n, s, r;
                      const o =
                          null !== (n = t.content) && void 0 !== n ? n : {},
                        u =
                          (null == e ? void 0 : e.title) ||
                          q(i.fallbackTitle) ||
                          q(o.name),
                        a = {
                          id: o.id || t.videoId || "",
                          url: o.url || i.fallbackUrl,
                          name: u.toLowerCase(),
                          service: t.service || o.service || "",
                          type: o.type || t.type || t.videoType || "",
                          episode_name:
                            null !==
                              (r =
                                null === (s = o.episode_name) || void 0 === s
                                  ? void 0
                                  : s.toLowerCase()) && void 0 !== r
                              ? r
                              : "",
                        },
                        c = Q(o.season);
                      void 0 !== c && (a.season = c);
                      const d = Q(o.episode);
                      return (void 0 !== d && (a.episode = d), a);
                    })(t, n, { fallbackTitle: f, fallbackUrl: i })));
                } else {
                  b.page &&
                    ((b.page.is_adblock_enabled = t.is_adblock_enabled),
                    (b.page.is_chat_visible = t.is_chat_visible),
                    (b.page.is_player_fullscreen = t.is_player_fullscreen),
                    n && (b.page.name = n.title));
                  const e = n
                    ? (function (t, e) {
                        return Object.assign(Object.assign({}, t), {
                          name: e.title,
                        });
                      })(null !== (f = t.content) && void 0 !== f ? f : {}, n)
                    : Object.assign(
                        {},
                        null !== (D = t.content) && void 0 !== D ? D : {},
                      );
                  ((e.episode_name =
                    null === (v = e.episode_name) || void 0 === v
                      ? void 0
                      : v.toLowerCase()),
                    (e.name =
                      null === (p = e.name) || void 0 === p
                        ? void 0
                        : p.toLowerCase()),
                    (b.content = e));
                }
                b.screen = t.screen;
              } catch (t) {
                console.log(t);
              }
            return (
              ((b.party_session && b.party_session.id) ||
                b.name.startsWith("video_")) &&
                (b.video_session = _),
              b
            );
          });
        }
        Ao(t) {
          var e;
          const i =
            null === (e = self.navigator.userAgentData) || void 0 === e
              ? void 0
              : e.platform;
          return {
            name: "chrome",
            version: this.yo(),
            type: "browser",
            manufacturer: i,
            model: "",
            os_name: this.wo(),
            os_version: "",
            install_id: t,
          };
        }
        Io(t, e, i, n) {
          const s = this.Ao(n),
            r = this.Ge.getAppSession(),
            o = Date.now(),
            u = { name: "chrome_ext", version: I },
            a = Object.assign({}, e);
          return (
            a.app || (a.app = u),
            a.app_session || (a.app_session = r),
            (a.device = s),
            (a.client_timestamp_ms = o),
            null == a.page && (a.page = t),
            (a.user = i),
            a
          );
        }
        no(t) {
          return df(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              try {
                chrome.tabs.get(t, (t) => {
                  chrome.runtime.lastError ? i(chrome.runtime.lastError) : e(t);
                });
              } catch (t) {
                i(t);
              }
            });
          });
        }
        So(t, e) {
          return df(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              try {
                chrome.tabs.update(t, { url: e }, () => {
                  i();
                });
              } catch (t) {
                n(t);
              }
            });
          });
        }
        ko(t) {
          return df(this, void 0, void 0, function* () {
            const e = t.chatTabId;
            chrome.tabs.move(
              e,
              { index: -1, windowId: t.videoWindow.id },
              (e) =>
                df(this, void 0, void 0, function* () {
                  var i;
                  (yield this.ao(t),
                    chrome.tabs.update(
                      null !== (i = e.id) && void 0 !== i ? i : 0,
                      { active: !0 },
                    ));
                }),
            );
          });
        }
        en(t) {
          var e;
          return df(this, void 0, void 0, function* () {
            if (t.id) {
              const i = wu.getSocketForTabId(t.id);
              i &&
                (this.ro(t.url) ||
                  this.ro(
                    null === (e = i.getCurrentSessionData()) || void 0 === e
                      ? void 0
                      : e.serviceDomain,
                  )) &&
                this.oo(t.id, !0, !0);
            }
            let i;
            (ya.partyWindowsMap.mapObj.forEach((e) => {
              e.chatTabId === (null == t ? void 0 : t.id) && (i = e);
            }),
              i && t.url !== O && this.ko(i));
          });
        }
        logEventForTabId(t, e) {
          return df(this, void 0, void 0, function* () {
            try {
              const i = yield this.no(e);
              return this.Zi(t, i);
            } catch (e) {
              return this.Zi(t);
            }
          });
        }
        Zi(t, e, i = !1, n = Wu.BOTH) {
          var s, r, o, u, a, c, d, l, h, f;
          return df(this, void 0, void 0, function* () {
            if (t.name.includes("error")) {
              if (
                (ya.errorList.filterInPlace((t) => t > Date.now() - 6e4),
                ya.errorList.length >= 15)
              )
                return void console.log("Error rate limited");
              ya.errorList.add(Date.now());
            }
            if (t.name.includes("video_error")) {
              if (
                (ya.videoErrorList.filterInPlace((t) => t > Date.now() - 6e4),
                ya.videoErrorList.length >= 15)
              )
                return void console.log("Error rate limited");
              ya.videoErrorList.add(Date.now());
            }
            if (
              "content_detected" === t.name &&
              (null == e ? void 0 : e.id) &&
              wu.getSocketForTabId(e.id)
            )
              return;
            let D = Object.assign({}, t);
            try {
              const i = yield Lu.getValidatedChromeStorageDataAsync(),
                v = yield Xh.getUserData(),
                p = ["video_heartbeat"];
              this.Ge.incrementAppSessionEventNumber();
              const b = {
                  name:
                    null !== (s = null == e ? void 0 : e.title) && void 0 !== s
                      ? s
                      : "",
                  url:
                    null !== (r = null == e ? void 0 : e.url) && void 0 !== r
                      ? r
                      : "",
                },
                m = this.auth.currentUser,
                g = !(!v.signedIn && !m),
                _ =
                  null !==
                    (u =
                      null === (o = v.currentUser) || void 0 === o
                        ? void 0
                        : o.uid) && void 0 !== u
                    ? u
                    : null == m
                      ? void 0
                      : m.uid,
                y =
                  null !==
                    (d =
                      null !==
                        (c =
                          null === (a = v.currentUser) || void 0 === a
                            ? void 0
                            : a.email) && void 0 !== c
                        ? c
                        : null == m
                          ? void 0
                          : m.email) && void 0 !== d
                    ? d
                    : void 0;
              let w, F;
              g &&
                void 0 !== v.subscriptionData &&
                !T.includes(v.subscriptionData.subscriptionStatus) &&
                v.subscriptionData.uid === _ &&
                ("trialing" === v.subscriptionData.subscriptionStatus &&
                  (F = !0),
                (w =
                  "monthly" === v.subscriptionData.subscriptionType
                    ? "premium_monthly"
                    : "premium_annual"));
              const E = v.currentUser.userIds.permId;
              if (!E) throw Error("Failed to get perm ID in logNewEvent call");
              const C = {
                id: null != _ ? _ : E,
                email: y,
                name: i.userNickname,
                signed_in: g,
                plan: w,
                on_trial: F,
                firebase_id: _,
                perm_id: E,
                uuid:
                  null ===
                    (h =
                      null === (l = v.currentUser) || void 0 === l
                        ? void 0
                        : l.userIds) || void 0 === h
                    ? void 0
                    : h.uuid,
              };
              ((D = this.Io(b, D, C, E)),
                D.component &&
                  (D.component.type =
                    null === (f = D.component.type) || void 0 === f
                      ? void 0
                      : f.toLowerCase()),
                "video_start" === D.name && this.Ge.resetVideoSession(),
                "video_pause" === D.name && this.Ge.pauseHeartBeat(),
                "video_resume" === D.name && this.Ge.resumeHeartBeat(),
                p.includes(D.name) && this.Ge.heartBeatProc(),
                e && e.id && (D = yield this.Eo(D, e)));
              try {
                const i = Object.assign({}, D);
                ((i.extension_version = I),
                  (i.browser = "chrome"),
                  (i.is_prod = !0),
                  e &&
                    ((i.current_tab_url = e.url),
                    (i.current_tab_title = e.title)),
                  (function (t) {
                    return t === Wu.BOTH || t === Wu.POSTHOG;
                  })(n) && x.sendEvent(t.name, E, i));
              } catch (t) {}
            } catch (t) {
              console.log("log event error : " + t);
            }
            if (
              (function (t) {
                return t === Wu.BOTH || t === Wu.METIS;
              })(n)
            ) {
              if (i) return this.To(D);
              this.To(D).catch((t) => {
                console.log("Failed to send event", t);
              });
            }
          });
        }
        To(t) {
          return df(this, void 0, void 0, function* () {
            const e = yield fetch("https://metis.teleparty.com/v1/record", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            });
            if (e.status < 200 || e.status >= 300)
              throw new Error(e.statusText);
          });
        }
        openLogPage() {
          0;
        }
        logOldEventAsync(t) {
          return df(this, void 0, void 0, function* () {
            try {
              const e = {
                userId: (yield Xh.getUserData()).currentUser.userIds.permId,
                eventType: t.eventType,
                sessionId: t.sessionId,
              };
              (console.log("event: " + JSON.stringify(e)),
                yield fetch("https://data3.netflixparty.com/log-event", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                }));
            } catch (t) {
              console.log("log event error : " + t);
            }
          });
        }
        eo(t, e) {
          var i;
          return df(this, void 0, void 0, function* () {
            if (e.tab && e.tab.id) {
              const n = e.tab.id;
              ((t.sender = L),
                (t.target = V),
                yield W.sendMessageToTabAsync(t, n),
                yield this.bo(n),
                yield this.Bo(n));
              const s = new Ku(L, M);
              W.p(s);
              const r = ya.partyWindowsMap.get(String(n));
              r &&
                ((null === (i = null == r ? void 0 : r.chatWindow) ||
                void 0 === i
                  ? void 0
                  : i.id) && chrome.windows.remove(r.chatWindow.id),
                ya.partyWindowsMap.delete(String(n)));
            }
          });
        }
        Oo(t) {
          return df(this, void 0, void 0, function* () {
            const e = yield Lu.getValidatedChromeStorageDataAsync(),
              i = (yield this.No(t)).getCurrentSessionData();
            if (i) {
              const n = {
                  sessionCallbackData: i,
                  storageData: e,
                  isCreate: !1,
                  showReviewMessage: this.jo(e),
                },
                s = new Zu(L, V, n);
              yield this.sendMessageToTabAsync(t, s);
              const r = {
                name: "video_fix",
                action: {
                  description:
                    "video session was restored after next video error",
                },
              };
              return (
                this.logEventForTabId(r, t),
                { sessionId: i.sessionId, showReviewMessage: this.jo(e) }
              );
            }
          });
        }
        Qr(t, e) {
          var i, n;
          return df(this, void 0, void 0, function* () {
            if (!(e.tab && e.tab.id && e.url))
              throw new Error("Invalid Request");
            {
              const s = e.url,
                r = e.tab.id,
                o = wu.getSocketForTabId(r),
                u = yield this.Po(r),
                a =
                  this.ro(s) ||
                  this.ro(null == u ? void 0 : u.serviceDomain) ||
                  this.ro(
                    null ===
                      (i = null == o ? void 0 : o.getCurrentSessionData()) ||
                      void 0 === i
                      ? void 0
                      : i.serviceDomain,
                  );
              if (this.Ge.checkAliveTab(r))
                if (a) {
                  if (o) {
                    const t = o.getCurrentSessionData();
                    if (
                      u &&
                      t &&
                      (null == u ? void 0 : u.sessionId) ===
                        (null == t ? void 0 : t.sessionId)
                    ) {
                      if (
                        ("scheduled" === t.sessionType &&
                          !!t.providerCatalog) ||
                        !t.serviceDomain ||
                        s.includes(t.serviceDomain)
                      ) {
                        const t = yield this.Oo(r);
                        if (t) return (this.Ge.removeAliveTab(r), t);
                      }
                    } else if (null == t ? void 0 : t.sessionId) {
                      const t = yield this.Oo(r);
                      if (t) return (this.Ge.removeAliveTab(r), t);
                    }
                  }
                  this.Ge.removeAliveTab(r);
                } else if ((this.Ge.removeAliveTab(r), o)) {
                  const t = o.getCurrentSessionData();
                  if (
                    u &&
                    t &&
                    (null == u ? void 0 : u.sessionId) ===
                      (null == t ? void 0 : t.sessionId)
                  ) {
                    if (
                      ("scheduled" === t.sessionType && !!t.providerCatalog) ||
                      !t.serviceDomain ||
                      s.includes(t.serviceDomain)
                    ) {
                      const t = yield this.Oo(r);
                      return t || void 0;
                    }
                  }
                }
              const c = new Sr(new URL(s), r);
              let d, l, h, f, D, v;
              if (
                (u &&
                  ((d = u.sessionId),
                  (l = u.videoType),
                  (h = u.serviceDomain),
                  (v = u.selectedProvider),
                  u.joinVideoService &&
                    ((D = u.joinVideoService), (f = u.videoId))),
                d)
              ) {
                const e = t.videoId,
                  i = null == u ? void 0 : u.videoId,
                  n = /^https?:\/\//i.test(null != e ? e : "");
                e && !n ? (c.videoId = e) : i && (c.videoId = i);
                const s = {
                  extensionTab: c,
                  sessionId: d,
                  videoType: l,
                  serviceDomain: h,
                  joinVideoId: f,
                  joinVideoService: D,
                  selectedProvider: v,
                };
                return yield this.Ro(s);
              }
              const p = this.Pr.get(r);
              if (p) return p;
              const b = wu.getSocketForTabId(r);
              if (
                null === (n = null == b ? void 0 : b.getCurrentSessionData()) ||
                void 0 === n
                  ? void 0
                  : n.sessionId
              ) {
                const t = yield this.Oo(r);
                if (t) return t;
              }
            }
          });
        }
        Ro(t) {
          const e = t.extensionTab.id,
            i = this.Pr.get(e);
          if (i) return i;
          const n = this.Uo(t).finally(() => {
            this.Pr.delete(e);
          });
          return (this.Pr.set(e, n), n);
        }
        Uo(t) {
          var e, i, n, s, r, o, u, a;
          return df(this, void 0, void 0, function* () {
            const c = t.extensionTab,
              d = c.streamingService,
              l = yield this.No(c.id),
              f = l.getCurrentSessionData();
            if (
              !!(null == f ? void 0 : f.sessionId) &&
              f.sessionId === t.sessionId
            ) {
              const s = yield Lu.getValidatedChromeStorageDataAsync(),
                r =
                  null !==
                    (n =
                      null !==
                        (i =
                          null !== (e = t.joinVideoService) && void 0 !== e
                            ? e
                            : null == d
                              ? void 0
                              : d.serverName) && void 0 !== i
                        ? i
                        : f.videoService) && void 0 !== n
                    ? n
                    : "";
              return this.xo(f, c.id, s, r);
            }
            (yield this.Lo(l), l.clearSessionData());
            const D = yield this.Co(c.id),
              p = yield null === (s = this.auth.currentUser) || void 0 === s
                ? void 0
                : s.getIdToken(),
              b = yield Lu.getValidatedChromeStorageDataAsync(),
              m = yield l.getUserIdAsync(),
              g = b.userId ? b.userId : m;
            b.userId || (yield this.Mo(m), (b.userId = m));
            const _ = (yield Xh.getUserData()).userSettings,
              y =
                null !==
                  (o =
                    null !== (r = t.joinVideoService) && void 0 !== r
                      ? r
                      : null == d
                        ? void 0
                        : d.serverName) && void 0 !== o
                  ? o
                  : "",
              w =
                null !==
                  (a =
                    null !== (u = t.joinVideoId) && void 0 !== u
                      ? u
                      : c.videoId) && void 0 !== a
                  ? a
                  : D.videoId,
              F = {
                videoId: w,
                sessionId: t.sessionId,
                videoService: y,
                permId: g,
                userSettings: _,
              };
            t.selectedProvider && (F.selectedProvider = t.selectedProvider);
            const E = yield new Promise((t) => {
              l.sendMessage(nu.JOIN_SESSION, F, (e) => {
                t(e);
              });
            });
            ((E.socketConnectionId = m), (E.userId = m));
            const C = Object.assign(Object.assign({}, E), {
                permId: g,
                videoService: y,
                videoType: t.videoType,
                serviceDomain: t.serviceDomain,
                userSettings: _,
                created: !1,
                videoId: w,
              }),
              A = yield this.xo(E, t.extensionTab.id, b, y);
            l.loadSessionData(C, _);
            return (
              (yield h.getItemsAsync(["lastPartyId"])) !== E.sessionId &&
                Vn(
                  "logging",
                  "POST",
                  !0,
                  {
                    show: D.videoTitle,
                    streamingService: y,
                    eventType: jn.PARTY_JOIN,
                  },
                  p,
                ).catch((t) => console.error(t)),
              yield v.setItemsAsync({ lastPartyId: E.sessionId }),
              A
            );
          });
        }
        Vo(t) {
          var e, i, n, s;
          return df(this, void 0, void 0, function* () {
            const r =
                null === (e = t.joinVideoId) || void 0 === e
                  ? void 0
                  : e.trim(),
              o =
                null === (i = t.joinVideoService) || void 0 === i
                  ? void 0
                  : i.trim(),
              u = t.extensionTab,
              a = yield this.No(u.id);
            (yield this.Lo(a), a.clearSessionData());
            const c = yield null === (n = this.auth.currentUser) || void 0 === n
                ? void 0
                : n.getIdToken(),
              d = yield Lu.getValidatedChromeStorageDataAsync(),
              l = yield a.getUserIdAsync(),
              f = d.userId ? d.userId : l;
            d.userId || (yield this.Mo(l), (d.userId = l));
            const D = (yield Xh.getUserData()).userSettings,
              p = { sessionId: t.sessionId, permId: f, userSettings: D };
            (r && (p.videoId = r),
              o && (p.videoService = o),
              t.selectedProvider && (p.selectedProvider = t.selectedProvider));
            const b = yield new Promise((t) => {
              a.sendMessage(nu.JOIN_SESSION, p, (e) => {
                t(e);
              });
            });
            ((b.socketConnectionId = l), (b.userId = l));
            const m = null != r ? r : b.videoId,
              g =
                null !== (s = null != o ? o : b.videoService) && void 0 !== s
                  ? s
                  : "",
              _ = Object.assign(Object.assign({}, b), {
                permId: f,
                videoService: g,
                videoType: t.videoType,
                serviceDomain: t.serviceDomain,
                userSettings: D,
                created: !1,
                videoId: m,
              }),
              y = yield this.xo(b, t.extensionTab.id, d, g);
            a.loadSessionData(_, D);
            return (
              (yield h.getItemsAsync(["lastPartyId"])) !== b.sessionId &&
                Vn(
                  "logging",
                  "POST",
                  !0,
                  {
                    show: "lobby",
                    streamingService: g,
                    eventType: jn.PARTY_JOIN,
                  },
                  c,
                ).catch((t) => console.error(t)),
              yield v.setItemsAsync({ lastPartyId: b.sessionId }),
              y
            );
          });
        }
        $o(t) {
          var e, i, n;
          return !!(
            (null === (e = null == t ? void 0 : t.sessionId) || void 0 === e
              ? void 0
              : e.trim()) &&
            (null === (i = null == t ? void 0 : t.videoId) || void 0 === i
              ? void 0
              : i.trim()) &&
            (null === (n = null == t ? void 0 : t.videoService) || void 0 === n
              ? void 0
              : n.trim())
          );
        }
        Ho(t, e) {
          var i, n, s;
          return {
            sessionId: e.sessionId.trim(),
            extensionTab: new Sr(new URL(`${r}/lobby`), t),
            joinVideoId:
              null === (i = e.videoId) || void 0 === i ? void 0 : i.trim(),
            joinVideoService:
              null === (n = e.videoService) || void 0 === n ? void 0 : n.trim(),
            videoType: e.videoType,
            serviceDomain: e.serviceDomain,
            selectedProvider:
              null === (s = e.selectedProvider) || void 0 === s
                ? void 0
                : s.trim(),
          };
        }
        Wo(t, e, i) {
          var n;
          return df(this, void 0, void 0, function* () {
            let s = t && 0 !== t ? t : void 0;
            if (
              (s || (s = null === (n = e.tab) || void 0 === n ? void 0 : n.id),
              s || (s = yield this.zo(void 0, e)),
              !s)
            )
              return {
                ok: !1,
                error: "Could not determine browser tab for lobby bind.",
              };
            try {
              return (
                yield this.Vo(
                  this.Ho(s, {
                    sessionId: i.sessionId.trim(),
                    videoId: i.videoId.trim(),
                    videoService: i.videoService.trim(),
                    videoType: i.videoType,
                    serviceDomain: i.serviceDomain,
                  }),
                ),
                { ok: !0, tabId: s }
              );
            } catch (t) {
              return {
                ok: !1,
                error: t instanceof Error ? t.message : String(t),
              };
            }
          });
        }
        Lo(t) {
          return df(this, void 0, void 0, function* () {
            const e = {};
            yield new Promise((i) => {
              let n = !1;
              const s = () => {
                n || ((n = !0), i());
              };
              try {
                t.sendMessage(nu.LEAVE_SESSION, e, () => s());
              } catch (t) {
                return void s();
              }
              setTimeout(s, 2e3);
            });
          });
        }
        Kr(t, e, i) {
          var n, s;
          return df(this, void 0, void 0, function* () {
            try {
              let r =
                (null == t ? void 0 : t.tabId) && 0 !== t.tabId
                  ? t.tabId
                  : null === (n = e.tab) || void 0 === n
                    ? void 0
                    : n.id;
              if ((r || (r = yield this.zo(void 0, e)), !r))
                return void i({
                  error: "Could not determine tab for leaveSession.",
                });
              const o = wu.getSocketForTabId(r);
              o && (yield this.Lo(o));
              const u = new Ju(L, V, Y);
              ((u.sender = L), (u.target = V));
              try {
                yield W.sendMessageToTabAsync(u, r);
              } catch (t) {}
              (yield this.bo(r), yield this.Bo(r));
              const a = ya.partyWindowsMap.get(String(r));
              if (
                null === (s = null == a ? void 0 : a.chatWindow) || void 0 === s
                  ? void 0
                  : s.id
              ) {
                try {
                  chrome.windows.remove(a.chatWindow.id);
                } catch (t) {}
                ya.partyWindowsMap.delete(String(r));
              }
              const c = new Ku(L, M);
              (W.p(c), i({ ok: !0 }));
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        Yr(t, e, i) {
          var n, s;
          return df(this, void 0, void 0, function* () {
            try {
              if (
                !(null === (n = null == t ? void 0 : t.sessionId) ||
                void 0 === n
                  ? void 0
                  : n.trim())
              )
                return void i({
                  error: "lobbyRelayBindJoin requires sessionId.",
                });
              let r =
                t.tabId && 0 !== t.tabId
                  ? t.tabId
                  : null === (s = e.tab) || void 0 === s
                    ? void 0
                    : s.id;
              if ((r || (r = yield this.zo(void 0, e)), !r))
                return void i({
                  error: "Could not determine tab for lobby bind.",
                });
              const o = yield this.Vo(this.Ho(r, t));
              i({
                ok: !0,
                sessionId: o.sessionId,
                showReviewMessage: o.showReviewMessage,
              });
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        qr(t, e, i) {
          var n, s;
          return df(this, void 0, void 0, function* () {
            try {
              const r =
                null === (n = null == t ? void 0 : t.selectedProvider) ||
                void 0 === n
                  ? void 0
                  : n.trim();
              if (!t || !r)
                return void i({
                  error: "selectProvider requires selectedProvider.",
                });
              let o =
                t.tabId && 0 !== t.tabId
                  ? t.tabId
                  : null === (s = e.tab) || void 0 === s
                    ? void 0
                    : s.id;
              o || (o = yield this.zo(void 0, e));
              const u = this.Go(o);
              if ("error" in u) return void i({ error: u.error });
              const { socket: a } = u,
                c = yield new Promise((t) => {
                  a.sendMessage(
                    nu.SELECT_PROVIDER,
                    { selectedProvider: r },
                    (e) => t(e),
                  );
                });
              if (null == c ? void 0 : c.errorMessage)
                return void i({ error: c.errorMessage });
              const d = a.getCurrentSessionData();
              (d && (d.selectedProvider = r),
                i(Object.assign({ ok: !0 }, c)),
                Tu(null != o ? o : 0, "selectProviderResult", c));
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        Xr(t, e, i) {
          var n;
          return df(this, void 0, void 0, function* () {
            try {
              const s =
                  (null == t ? void 0 : t.tabId) ||
                  (null === (n = e.tab) || void 0 === n ? void 0 : n.id) ||
                  0,
                r = this.Go(s || void 0);
              if ("error" in r) return void i({ error: r.error });
              const { socket: o } = r;
              o.sendMessage(
                nu.REPORT_STREAM_POSITION,
                null != t ? t : {},
                () => {
                  i({ ok: !0 });
                },
              );
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        $r(t) {
          var e, i;
          return df(this, void 0, void 0, function* () {
            const n = t.tabId,
              s = uf.start(n, t.timingMarks, {
                source: t.isNative
                  ? "native"
                  : t.timingMarks
                    ? "popup"
                    : "other",
                service:
                  null !==
                    (i =
                      null === (e = t.streamingService) || void 0 === e
                        ? void 0
                        : e.serverName) && void 0 !== i
                    ? i
                    : "",
                socket_reused: void 0 !== wu.getSocketForTabId(n),
                signed_in: !(!Xh.getCachedSignedIn() && !this.auth.currentUser),
              });
            try {
              const e = yield this.Zo(t, s);
              return (uf.setAttemptMeta(s, { session_id: e.sessionId }), e);
            } catch (t) {
              throw (uf.failAttempt(s, t), t);
            }
          });
        }
        Zo(t, e) {
          var i, n;
          return df(this, void 0, void 0, function* () {
            const s = t.streamingService,
              r = yield this.Co(t.tabId);
            uf.markAttempt(e, "bg_video_data");
            const o = yield this.no(t.tabId).catch(() => {}),
              u = yield this.No(t.tabId);
            uf.markAttempt(e, "bg_socket_ready");
            const a = yield null === (i = this.auth.currentUser) || void 0 === i
              ? void 0
              : i.getIdToken();
            (uf.markAttempt(e, "bg_id_token"),
              yield this.Lo(u),
              uf.markAttempt(e, "bg_leave_session_done"),
              u.clearSessionData());
            const c = yield Lu.getValidatedChromeStorageDataAsync(),
              d = yield u.getUserIdAsync();
            uf.markAttempt(e, "bg_user_id");
            const l = c.userId ? c.userId : d;
            c.userId || (yield this.Mo(d), (c.userId = d));
            const h = (yield Xh.getUserData()).userSettings,
              f =
                null !== (n = null == s ? void 0 : s.serverName) && void 0 !== n
                  ? n
                  : "",
              D = {
                controlLock: t.createSettings.controlLock,
                reactionsDisabled: t.createSettings.reactionsDisabled,
                videoId: r.videoId,
                videoDuration: r.videoDuration,
                videoType: r.videoType,
                serviceDomain: r.serviceDomain,
                videoService: f,
                syncFromEnd: null == s ? void 0 : s.syncFromEnd,
                permId: l,
                userSettings: h,
              },
              v = yield new Promise((t) => {
                u.sendMessage(nu.CREATE_SESSION, D, (e) => {
                  t(e);
                });
              });
            uf.markAttempt(e, "bg_create_session_response");
            const p = ((b = s.name), Ir[b]);
            var b;
            (p
              ? (Wh.log(
                  {
                    event_name: "video_id_detected",
                    service: p.serverName,
                    success: p.validateVideoId(r.videoId),
                  },
                  { tabId: t.tabId, tab: o },
                ),
                Wh.log(
                  {
                    event_name: "video_type_detected",
                    service: p.serverName,
                    success: p.validateVideoType(r.videoType),
                  },
                  { tabId: t.tabId, tab: o },
                ))
              : this.logEventForTabId(
                  {
                    name: "invalid_validations_service",
                    message: { text: s.name },
                  },
                  t.tabId,
                ),
              (v.socketConnectionId = d),
              (v.userId = d));
            const m = Object.assign(Object.assign({}, v), {
                permId: l,
                videoService: f,
                messages: [],
                created_at: Date.now(),
                videoType: r.videoType,
                serviceDomain: r.serviceDomain,
                userSettings: h,
                created: !1,
              }),
              g = yield this.Jo(v, t.tabId, c, f, void 0, t.isNative);
            return (
              u.loadSessionData(m, h),
              Vn(
                "logging",
                "POST",
                !0,
                {
                  show: r.videoTitle,
                  streamingService: f,
                  eventType: jn.PARTY_START,
                },
                a,
              ).catch((t) => console.error(t)),
              g
            );
          });
        }
        zo(t, e) {
          var i, n, s;
          return df(this, void 0, void 0, function* () {
            let r = t && t > 0 ? t : 0;
            if (
              (!r &&
                (null === (i = e.tab) || void 0 === i ? void 0 : i.id) &&
                (r = e.tab.id),
              !r)
            )
              try {
                const t = yield chrome.tabs.query({
                  active: !0,
                  currentWindow: !0,
                });
                r =
                  null !==
                    (s = null === (n = t[0]) || void 0 === n ? void 0 : n.id) &&
                  void 0 !== s
                    ? s
                    : 0;
              } catch (t) {
                r = 0;
              }
            return r;
          });
        }
        Gr(t, e, i) {
          return df(this, void 0, void 0, function* () {
            const n = this.zr(i, e.tab);
            try {
              const n = yield this.zo(t.tabId, e);
              if (!n)
                return void i({
                  error:
                    "scheduleSession could not determine a tab id. Use a Teleparty connect iframe in a normal browser tab, or pass data.tabId.",
                });
              const s = yield this.Yo(
                Object.assign(Object.assign({}, t), { tabId: n }),
                n,
              );
              i(s);
            } catch (t) {
              n(t instanceof Error ? t : new Error(String(t)));
            }
          });
        }
        Go(t) {
          var e;
          if (null != t && 0 !== t) {
            const i = wu.getSocketForTabId(t);
            if (
              null === (e = null == i ? void 0 : i.getCurrentSessionData()) ||
              void 0 === e
                ? void 0
                : e.sessionId
            )
              return { socket: i };
          }
          const i = wu.findSocketsWithActiveParty();
          return 1 === i.length
            ? { socket: i[0].socket }
            : 0 === i.length
              ? {
                  error:
                    "No joined party socket in this browser. If teleparty-next joined via API only, call lobbyRelayBindJoin once with sessionId, videoId, and videoService (WP keys), or include those three fields on lobbyRelaySendChat / lobbyRelaySetTyping. Otherwise run scheduleSession or join from the extension. After an extension reload, bind or join again.",
                }
              : {
                  error:
                    "Several parties are open; close extra party tabs or re-join from this page so lobby chat targets one socket.",
                };
        }
        Zr(t, e, i) {
          var n;
          return df(this, void 0, void 0, function* () {
            try {
              let s =
                (null == t ? void 0 : t.tabId) && 0 !== t.tabId
                  ? t.tabId
                  : null === (n = e.tab) || void 0 === n
                    ? void 0
                    : n.id;
              if (!s) {
                s = (yield this.zo(void 0, e)) || void 0;
              }
              const r =
                "string" == typeof (null == t ? void 0 : t.body)
                  ? t.body.trim()
                  : "";
              if (!r)
                return void i({ error: "body must be a non-empty string." });
              let o = this.Go(s);
              if ("error" in o && t && this.$o(t)) {
                const n = yield this.Wo(s, e, t);
                if (!n.ok) return void i({ error: n.error });
                ((s = n.tabId), (o = this.Go(s)));
              }
              if ("error" in o) return void i({ error: o.error });
              const { socket: u } = o;
              (yield new Promise((t) => {
                u.sendMessage(nu.SEND_MESSAGE, { body: r }, () => t());
              }),
                i({ ok: !0 }));
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        Jr(t, e, i) {
          var n;
          return df(this, void 0, void 0, function* () {
            try {
              let s =
                (null == t ? void 0 : t.tabId) && 0 !== t.tabId
                  ? t.tabId
                  : null === (n = e.tab) || void 0 === n
                    ? void 0
                    : n.id;
              if (!s) {
                s = (yield this.zo(void 0, e)) || void 0;
              }
              if ("boolean" != typeof (null == t ? void 0 : t.typing))
                return void i({ error: "typing must be a boolean." });
              const r = t.typing;
              let o = this.Go(s);
              if ("error" in o && t && this.$o(t)) {
                const n = yield this.Wo(s, e, t);
                if (!n.ok) return void i({ error: n.error });
                ((s = n.tabId), (o = this.Go(s)));
              }
              if ("error" in o) return void i({ error: o.error });
              const { socket: u } = o;
              (yield new Promise((t) => {
                u.sendMessage(nu.SET_TYPING_PRESENCE, { typing: r }, () => t());
              }),
                i({ ok: !0 }));
            } catch (t) {
              i({ error: t instanceof Error ? t.message : String(t) });
            }
          });
        }
        Yo(t, e) {
          var i, n, s;
          return df(this, void 0, void 0, function* () {
            if (!e)
              throw new Error(
                "scheduleSession requires a tab (embed the Teleparty connect iframe on the page)",
              );
            const r = yield this.No(e),
              o = yield null === (i = this.auth.currentUser) || void 0 === i
                ? void 0
                : i.getIdToken();
            (yield this.Lo(r), r.clearSessionData());
            const u = yield Lu.getValidatedChromeStorageDataAsync(),
              a = yield r.getUserIdAsync(),
              c = u.userId ? u.userId : a;
            u.userId || (yield this.Mo(a), (u.userId = a));
            const d = (yield Xh.getUserData()).userSettings,
              l = {
                contentEventId: t.contentEventId,
                permId: c,
                userSettings: d,
              };
            (void 0 !== t.selectedProvider &&
              (l.selectedProvider = t.selectedProvider),
              void 0 !== t.streamerMode && (l.streamerMode = t.streamerMode),
              void 0 !== t.reactionsDisabled &&
                (l.reactionsDisabled = t.reactionsDisabled),
              void 0 !== t.videoType && (l.videoType = t.videoType),
              void 0 !== t.videoDuration &&
                (l.videoDuration = t.videoDuration));
            const h = "string" == typeof t.title ? t.title.trim() : "";
            h && (l.title = h);
            const f =
              "string" == typeof t.description ? t.description.trim() : "";
            if (
              (f && (l.description = f),
              void 0 !== t.themeId && null !== t.themeId)
            )
              if ("string" == typeof t.themeId) {
                const e = t.themeId.trim();
                e && (l.themeId = e);
              } else l.themeId = t.themeId;
            const D =
              "string" == typeof t.partyImage ? t.partyImage.trim() : "";
            D && (l.partyImage = D);
            const p = yield new Promise((t) => {
              r.sendMessage(nu.SCHEDULE_SESSION, l, (e) => {
                t(e);
              });
            });
            if (p.errorMessage) throw new Error(p.errorMessage);
            ((p.socketConnectionId = a), (p.userId = a));
            const b = null !== (n = p.videoService) && void 0 !== n ? n : "",
              m = Object.assign(Object.assign({}, p), {
                permId: c,
                videoService: b,
                messages: null !== (s = p.messages) && void 0 !== s ? s : [],
                userSettings: d,
                created: !1,
              });
            return (
              r.loadSessionData(m, d),
              yield v.setItemsAsync({ lastPartyId: p.sessionId }),
              Vn(
                "logging",
                "POST",
                !0,
                {
                  streamingService: b || "scheduled_event",
                  eventType: jn.PARTY_SCHEDULE,
                  sessionId: p.sessionId,
                },
                o,
              ).catch((t) => console.error(t)),
              p
            );
          });
        }
        No(t) {
          return df(this, void 0, void 0, function* () {
            const e = wu.getSocketForTabId(t);
            if (e) return e;
            {
              const e = yield this.Ko(t);
              return (wu.setSocketForTabId(t, e), e);
            }
          });
        }
        bo(t) {
          return df(this, void 0, void 0, function* () {
            const e = wu.getSocketForTabId(t);
            e && (e.teardown(), wu.removeSocketForTabId(t));
          });
        }
        Ko(t) {
          var e;
          return df(this, void 0, void 0, function* () {
            const i = new Ou(t),
              n = yield null === (e = Rh().currentUser) || void 0 === e
                ? void 0
                : e.getIdToken();
            return yield i.createSocketForTab(n);
          });
        }
        Co(t) {
          return df(this, void 0, void 0, function* () {
            const e = new du(L, V, su.GET_VIDEO_DATA),
              i = yield W.sendMessageToTabAsync(e, t);
            if (i) {
              if (i.error) throw ((this.ze = void 0), new Error(i.error));
              return (
                i.originalTitle
                  ? (this.ze = {
                      title: i.originalTitle,
                      releaseYear: i.releaseYear,
                      episodeYear: i.episodeYear,
                      type: i.type,
                      service: i.service,
                    })
                  : (this.ze = void 0),
                i
              );
            }
            throw (
              (this.ze = void 0),
              new Error(
                "Failed to connect to Script. Please refresh the page and try again",
              )
            );
          });
        }
        Po(t) {
          const e = this.jr.get(t);
          if (e) return e.then(() => {});
          const i = (() =>
            df(this, void 0, void 0, function* () {
              const e = yield $u.getRedirectDataForTabAsync(t);
              return (e && (yield $u.deleteRedirectDataForTabAsync(t)), e);
            }))().finally(() => {
            this.jr.delete(t);
          });
          return (this.jr.set(t, i), i);
        }
        Bo(t) {
          return df(this, void 0, void 0, function* () {
            return $u.deleteRedirectDataForTabAsync(t);
          });
        }
        Mo(t) {
          return df(this, void 0, void 0, function* () {
            (Z()("No perm id found, using socket id"),
              yield v.setItemsAsync({ userId: t }));
          });
        }
        fo(t) {
          return df(this, void 0, void 0, function* () {
            if (this.auth.currentUser) {
              return { token: yield this.auth.currentUser.getIdToken(t) };
            }
            throw new Error("Not Signed In");
          });
        }
        do() {
          return df(this, void 0, void 0, function* () {
            (yield chrome.storage.local.set({ tp_logout_epoch: Date.now() }),
              yield this.auth.signOut(),
              yield Vn("sessionLogout", "POST", !0, {}),
              yield Xh.clearUserData(),
              this.Zi({ name: "signout" }));
          });
        }
        qo(t) {
          var e;
          return df(this, void 0, void 0, function* () {
            this.Zi({ name: "signup" });
            const i = yield null === (e = this.auth.currentUser) || void 0 === e
              ? void 0
              : e.getIdToken();
            return Vn(
              "logging",
              "POST",
              !0,
              { optin: t, eventType: jn.REGISTER },
              i,
            );
          });
        }
        doEmailSignUp(t, e, i) {
          return df(this, void 0, void 0, function* () {
            if (this.auth.currentUser) return !1;
            (yield Promise.all([lh(this.auth, t, e)])) &&
              (yield this.triggerSignIn(),
              this.qo(i).catch((t) => console.error(t)));
          });
        }
        doEmailSignIn(t, e) {
          return df(this, void 0, void 0, function* () {
            if (this.auth.currentUser) return !1;
            if ((yield fh(this.auth, t)).includes(th.PROVIDER_ID))
              throw { code: "auth/google-account" };
            (yield Promise.all([hh(this.auth, t, e)])) &&
              (this.Zi({ name: "signin" }), yield this.triggerSignIn());
          });
        }
        forgotPassword(t) {
          return df(this, void 0, void 0, function* () {
            if (this.auth.currentUser) return !1;
            try {
              (yield Vn("reset-password", "POST", !1, { email: t })) &&
                this.Zi({ name: "forgot_password" });
            } catch (t) {
              console.error(t);
            }
          });
        }
        onGoogleSignIn(t) {
          return df(this, void 0, void 0, function* () {
            if (this.auth.currentUser) return !1;
            try {
              const e = Jl.fromJSON(t);
              if (e) {
                (yield ah(this.auth, e)) &&
                  (this.Zi({ name: "signin" }), yield this.triggerSignIn());
              }
            } catch (t) {
              console.log(t);
            }
            return !0;
          });
        }
        jo(t) {
          return (
            void 0 !== t.extensionUses &&
            (1 === t.extensionUses || t.extensionUses % 5 == 0) &&
            !t.reviewClicked
          );
        }
        Jo(t, e, i, n, s, r) {
          return df(this, void 0, void 0, function* () {
            if (!t || t.errorMessage)
              throw (
                this.Bo(e),
                new Error(
                  t
                    ? t.errorMessage
                    : "An unexpected error occurred. Please refresh the page and try again.",
                )
              );
            {
              const o = {
                  sessionCallbackData: t,
                  storageData: i,
                  isCreate: !0,
                  showReviewMessage: this.jo(i),
                },
                u = new Zu(L, V, o);
              (yield this.sendMessageToTabAsync(e, u),
                uf.mark(e, "bg_load_session_sent"));
              const a = {
                eventType: "create-session-chrome" + (s ? "-pc" : ""),
                sessionId: t.sessionId,
              };
              this.logOldEventAsync(a);
              const c = {
                name: "party_start",
                action: {
                  description: n,
                  reason: "session was created",
                  source: r ? "native" : "popup",
                },
              };
              return (
                this.logEventForTabId(c, e),
                this.mo(),
                this.loadRedirectUrl(t.sessionId),
                { sessionId: t.sessionId, showReviewMessage: this.jo(i) }
              );
            }
          });
        }
        xo(t, e, i, n) {
          return df(this, void 0, void 0, function* () {
            if (!t || t.errorMessage)
              throw (
                this.Bo(e),
                new Error(
                  t
                    ? t.errorMessage
                    : "An error occured while trying to join the session. Please navigate to the party url and try again.",
                )
              );
            {
              const s = {
                  sessionCallbackData: t,
                  storageData: i,
                  isCreate: !1,
                  showReviewMessage: this.jo(i),
                },
                r = new Zu(L, V, s);
              yield this.sendMessageToTabAsync(e, r);
              const o = {
                eventType: "join-session-chrome",
                sessionId: t.sessionId,
              };
              this.logOldEventAsync(o);
              const u = { name: "party_join", action: { description: n } };
              return (
                this.logEventForTabId(u, e),
                this.mo(),
                this.loadRedirectUrl(t.sessionId),
                { sessionId: t.sessionId, showReviewMessage: this.jo(i) }
              );
            }
          });
        }
        Xo(t, e) {
          return df(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              chrome.windows.update(t, e, (t) =>
                df(this, void 0, void 0, function* () {
                  chrome.runtime.lastError
                    ? n(chrome.runtime.lastError)
                    : (yield Ln(150)(), i(t));
                }),
              );
            });
          });
        }
        Qo(t) {
          return df(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.windows.create(t, (t) => {
                chrome.runtime.lastError || void 0 === t
                  ? i(chrome.runtime.lastError)
                  : e(t);
              });
            });
          });
        }
        tu(t) {
          return new Promise((e) => {
            chrome.windows.get(t, (t) => {
              chrome.runtime.lastError || void 0 === t ? e(!1) : e(!0);
            });
          });
        }
        eu(t) {
          return new Promise((e, i) => {
            chrome.tabs.query({ windowId: t }, (t) => {
              var n;
              chrome.runtime.lastError
                ? i(chrome.runtime.lastError)
                : e(null !== (n = t[0].id) && void 0 !== n ? n : 0);
            });
          });
        }
        iu(t) {
          return new Promise((e) => {
            chrome.tabs.update(t, { active: !0 }, () => {
              e();
            });
          });
        }
        nu() {
          var t, e, i;
          return df(this, void 0, void 0, function* () {
            if ("undefined" != typeof window && window.screen)
              return {
                width: window.screen.availWidth,
                height: window.screen.availHeight,
              };
            if (
              "undefined" != typeof chrome &&
              (null === (t = chrome.windows) || void 0 === t
                ? void 0
                : t.getCurrent)
            )
              try {
                const t = yield chrome.windows.getCurrent();
                return {
                  width: null !== (e = t.width) && void 0 !== e ? e : 1920,
                  height: null !== (i = t.height) && void 0 !== i ? i : 1080,
                };
              } catch (t) {
                console.warn("Failed to get current window:", t);
              }
            return { width: 1920, height: 1080 };
          });
        }
        co(t) {
          return df(this, void 0, void 0, function* () {
            const e = t.videoWindow;
            if (!e.id) return;
            yield this.iu(t.videoTabId);
            let i = t.chatWindow;
            i.id &&
              (yield this.tu(i.id)) &&
              (i = yield this.Xo(i.id, { state: "minimized", focused: !1 }));
            const n = yield this.nu();
            (yield this.Xo(e.id, { state: "maximized" }),
              yield this.Xo(e.id, {
                focused: !0,
                width: n.width,
                height: n.height,
              }));
          });
        }
        ao(t, e = 0) {
          var i;
          return df(this, void 0, void 0, function* () {
            let n = t.videoWindow;
            if (!n.id) return;
            if (
              (yield this.iu(t.videoTabId),
              (n = yield this.Xo(n.id, { state: "maximized" })),
              !n.id)
            )
              return;
            const s = yield this.nu();
            n = yield this.Xo(n.id, {
              state: "normal",
              width: s.width - 358,
              height: s.height,
              left: 0,
              top: 0,
              focused: !0,
            });
            let r = t.chatWindow,
              o = !1;
            if (
              ((r.id && (yield this.tu(r.id))) ||
                ((r = yield this.Qo({ url: O, type: "popup" })), (o = !0)),
              !r.id)
            )
              return;
            const u = yield this.eu(r.id);
            if (!o) {
              const t = yield this.no(u);
              void 0 !== t.url && t.url !== O && (yield this.So(u, O));
            }
            r = yield this.Xo(r.id, {
              state: "normal",
              width: J,
              height: s.height,
              left: s.width - J,
              top: 0,
              focused: !0,
            });
            const a = {
              chatWindow: r,
              videoWindow: n,
              chatTabId: u,
              videoTabId: t.videoTabId,
            };
            ya.partyWindowsMap.set(String(t.videoTabId), a);
            const c = wu.getSocketForTabId(t.videoTabId);
            return (
              c && wu.setSocketForTabId(u, c),
              console.log(n.width),
              e < 2 &&
              s.width - (null !== (i = n.width) && void 0 !== i ? i : 0) < 50
                ? (console.log("Retry Reset"), this.ao(t, e + 1))
                : void 0
            );
          });
        }
        fullScreen(t, e = !0) {
          return df(this, void 0, void 0, function* () {
            let i = "fullscreen";
            (e || (i = "maximized"), yield this.Xo(t, { state: i }));
          });
        }
        uo(t, e) {
          var i;
          return df(this, void 0, void 0, function* () {
            const n = yield this.Xo(e, { state: "maximized" });
            if (!n.id) return;
            const s = yield this.nu();
            yield this.Xo(n.id, {
              state: "normal",
              width: s.width - 358,
              height: s.height,
            });
            const r = yield this.Qo({
              url: O,
              type: "popup",
              state: "maximized",
            });
            if (r.id) {
              if (
                (yield this.Xo(r.id, {
                  state: "normal",
                  width: J,
                  height: s.height,
                  left: s.width - J,
                  top: 0,
                }),
                !r || !n)
              )
                throw new Error("Failed to Create Party View");
              {
                const e =
                    r.tabs && null !== (i = r.tabs[0].id) && void 0 !== i
                      ? i
                      : 0,
                  s = {
                    chatWindow: r,
                    videoWindow: n,
                    chatTabId: e,
                    videoTabId: t,
                  };
                ya.partyWindowsMap.set(String(t), s);
                const o = wu.getSocketForTabId(s.videoTabId);
                (o && wu.setSocketForTabId(e, o), yield this.ao(s));
              }
            }
          });
        }
        waitForPermId() {
          return df(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              let i = 0;
              const n = () =>
                df(this, void 0, void 0, function* () {
                  i++;
                  const s = yield Lu.getValidatedChromeStorageDataAsync();
                  s.userId
                    ? t(s.userId)
                    : i < 5
                      ? setTimeout(n, 5e3)
                      : e("Could not get permId in time");
                });
              n();
            });
          });
        }
        zr(t, e) {
          return (i) => {
            (this.su(i.message, e), t({ error: i.message }));
          };
        }
        su(t, e, i) {
          const n = { name: "error", action: { reason: t, description: i } };
          (this.Zi(n, e), Z()("An error occured: " + i + t));
        }
        mn() {
          var t;
          (chrome.runtime.onSuspend.addListener(() => {
            wu.teardown();
          }),
            chrome.tabs.onRemoved.addListener(this.ru.bind(this)),
            z.addMessageListener({ onMessage: this._n.bind(this) }),
            chrome.alarms.onAlarm.addListener((t) => {
              "sendPendingData" === t.name && this.Ge.Wi();
            }),
            this.ou(),
            new Ia(),
            (null === (t = chrome.permissions) || void 0 === t
              ? void 0
              : t.onAdded) &&
              chrome.permissions.onAdded.addListener(() => {
                this.uu();
              }));
        }
        uu() {
          return df(this, void 0, void 0, function* () {
            yield new Promise((t) => setTimeout(t, 1500));
            try {
              const t = (yield chrome.storage.local.get(
                "PENDING_PERMISSION_START",
              )).PENDING_PERMISSION_START;
              if (!t) return;
              yield chrome.storage.local.remove("PENDING_PERMISSION_START");
              if (
                !(yield chrome.permissions.contains({
                  origins: t.requiredOrigins,
                }))
              )
                return;
              try {
                yield chrome.tabs.get(t.createSessionData.tabId);
              } catch (t) {
                return;
              }
              yield this.$r(t.createSessionData);
            } catch (t) {
              console.error("Error processing pending permission start", t);
            }
          });
        }
        au() {
          return df(this, void 0, void 0, function* () {
            yield Ln(1e3)();
            const t = yield browser.permissions.contains({
              origins: ["*://*/*"],
            });
            (console.log("Has Permissions: " + String(t), !!t && "true"),
              browser.runtime.sendNativeMessage(
                "",
                JSON.stringify({
                  type: "hasPermissions",
                  hasPermissions: String(t),
                }),
              ));
          });
        }
        cu(t) {
          console.log("blockCSP for tab " + t);
          const e = {
            urls: ["*://*/*"],
            tabId: t,
            types: ["main_frame", "sub_frame"],
          };
          chrome.webRequest.onHeadersReceived.addListener(
            this._o.bind(this),
            e,
            ["blocking", "responseHeaders"],
          );
        }
        ru(t) {
          var e;
          return df(this, void 0, void 0, function* () {
            const i = this.Ge.checkAliveTab(t);
            let n = !1;
            try {
              n = !!(yield chrome.tabs.get(t));
            } catch (t) {
              n = !1;
            }
            const s = wu.getSocketForTabId(t),
              r = i || this.Ge.checkAliveTab(t);
            if (s && (!n || !r)) {
              const i = {
                name: "tab_close",
                action: {
                  description: "tab was closed with socket",
                  source: "tabID: " + t,
                },
              };
              (this.logEventForTabId(i, t),
                console.log(
                  "Detected Tab Close: Disconnecting socket for tab: " + t,
                ),
                s.teardown(),
                wu.removeSocketForTabId(t));
              const n = ya.partyWindowsMap.get(String(t));
              n &&
                ((null === (e = null == n ? void 0 : n.chatWindow) ||
                void 0 === e
                  ? void 0
                  : e.id) && chrome.windows.remove(n.chatWindow.id),
                ya.partyWindowsMap.delete(String(t)));
            }
          });
        }
        ou() {
          chrome.runtime.onConnect.addListener((t) => {
            var e, i;
            const n =
              null ===
                (i =
                  null === (e = t.sender) || void 0 === e ? void 0 : e.tab) ||
              void 0 === i
                ? void 0
                : i.id;
            if (n) {
              console.log("Connected to Content Script with Tab ID: " + n);
              try {
                if ((t.postMessage("pong"), "content-script-health" !== t.name))
                  return;
                t.onDisconnect.addListener(() => {
                  (console.log("Detected port disconnect: " + n), this.ru(n));
                });
              } catch (t) {}
            }
          });
        }
        sendMessageToTabAsync(t, e, i) {
          return df(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              let r;
              (i &&
                (r = setTimeout(() => {
                  s(
                    new Error(
                      "Could not get a response from the page in time. Please refresh the page and try again.",
                    ),
                  );
                }, i)),
                chrome.tabs.sendMessage(t, e, (t) => {
                  (r && clearTimeout(r), n(t));
                }));
            });
          });
        }
        receiveMessageOnError(t) {
          return (e) => {
            (this.logError(e.message), t({ error: e.message }));
          };
        }
        logError(t) {
          Z()("An error occured: " + t);
        }
        lo() {
          return new Promise((t, e) => {
            fetch(`${k}/events`, { credentials: "include" })
              .then((i) =>
                df(this, void 0, void 0, function* () {
                  i.ok ? t(yield i.json()) : e(yield i.json());
                }),
              )
              .catch((t) => {
                e(t);
              });
          });
        }
        ho() {
          return new Promise((t, e) => {
            fetch(`${k}/recent_events`, { credentials: "include" })
              .then((i) =>
                df(this, void 0, void 0, function* () {
                  i.ok ? t(yield i.json()) : e(yield i.json());
                }),
              )
              .catch((t) => {
                e(t);
              });
          });
        }
      })(),
      hf = lf;
    self.tpBackground = lf;
  })();
})();
