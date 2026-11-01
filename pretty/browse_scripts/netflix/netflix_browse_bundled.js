/*******************************************************
 * Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var e = {
      7588() {
        !(function (e, t, i) {
          "use strict";
          if (e.MutationObserver && "undefined" != typeof HTMLElement) {
            var n,
              r = 0,
              o =
                ((n =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (e, t) {
                    return e instanceof HTMLElement && n.call(e, t);
                  },
                  addMethod: function (e, t, i) {
                    var n = e[t];
                    e[t] = function () {
                      return i.length == arguments.length
                        ? i.apply(this, arguments)
                        : "function" == typeof n
                          ? n.apply(this, arguments)
                          : void 0;
                    };
                  },
                  callCallbacks: function (e, t, i) {
                    if (e.length) {
                      t &&
                        t.options.onceOnly &&
                        ((e = [e[0]]),
                        t.me.unbindEventWithSelectorAndCallback.call(
                          t.target,
                          t.selector,
                          t.callback,
                        ));
                      for (var n, r = 0; (n = e[r]); r++)
                        n && n.callback && n.callback.call(n.elem, n.elem);
                      t &&
                        t.callback &&
                        i &&
                        i.addTimeoutHandler(
                          t.target,
                          t.selector,
                          t.callback,
                          t.options,
                          t.data,
                        );
                    }
                  },
                  checkChildNodesRecursively: function (e, t, i, n) {
                    for (var r, s = 0; (r = e[s]); s++)
                      (i(r, t, n) && n.push({ callback: t.callback, elem: r }),
                        r.childNodes.length > 0 &&
                          o.checkChildNodesRecursively(r.childNodes, t, i, n));
                  },
                  mergeArrays: function (e, t) {
                    var i,
                      n = {};
                    for (i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                    for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                    return n;
                  },
                  toElementsArray: function (t) {
                    return (
                      void 0 === t ||
                        ("number" == typeof t.length && t !== e) ||
                        (t = [t]),
                      t
                    );
                  },
                }),
              s = (function () {
                var e = function () {
                  ((this.t = []), (this.i = null), (this.o = null));
                };
                return (
                  (e.prototype.addEvent = function (e, t, i, n, r) {
                    var o = {
                      target: e,
                      selector: t,
                      options: i,
                      callback: n,
                      data: r,
                      firedElems: [],
                    };
                    return (this.i && this.i(o), this.t.push(o), o);
                  }),
                  (e.prototype.removeEvent = function (e) {
                    for (var t, i = this.t.length - 1; (t = this.t[i]); i--)
                      if (e(t)) {
                        (this.o && this.o(t),
                          t.data &&
                            t.data.timeoutId &&
                            clearTimeout(t.data.timeoutId));
                        var n = this.t.splice(i, 1);
                        n && n.length && (n[0].callback = null);
                      }
                  }),
                  (e.prototype.beforeAdding = function (e) {
                    this.i = e;
                  }),
                  (e.prototype.beforeRemoving = function (e) {
                    this.o = e;
                  }),
                  e
                );
              })(),
              a = function (t, n) {
                var r = new s(),
                  a = this,
                  c = { fireOnAttributesModification: !1 };
                return (
                  r.beforeAdding(function (i) {
                    var r,
                      o = i.target;
                    ((o !== e.document && o !== e) ||
                      (o = document.getElementsByTagName("html")[0]),
                      (r = new MutationObserver(function (e) {
                        n.call(this, e, i);
                      })));
                    var s = t(i.options);
                    (r.observe(o, s), (i.observer = r), (i.me = a));
                  }),
                  r.beforeRemoving(function (e) {
                    e.observer.disconnect();
                  }),
                  (this.bindEvent = function (e, t, i) {
                    t = o.mergeArrays(c, t);
                    for (
                      var n = o.toElementsArray(this), s = 0;
                      s < n.length;
                      s++
                    ) {
                      const o = {};
                      (a.addTimeoutHandler(n[s], e, i, t, o),
                        r.addEvent(n[s], e, t, i, o));
                    }
                  }),
                  (this.unbindEvent = function () {
                    var e = o.toElementsArray(this);
                    r.removeEvent(function (t) {
                      for (var n = 0; n < e.length; n++)
                        if (this === i || t.target === e[n]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (e) {
                    var t,
                      n = o.toElementsArray(this),
                      s = e;
                    ((t =
                      "function" == typeof e
                        ? function (e) {
                            for (var t = 0; t < n.length; t++)
                              if (
                                (this === i || e.target === n[t]) &&
                                e.callback === s
                              )
                                return !0;
                            return !1;
                          }
                        : function (t) {
                            for (var r = 0; r < n.length; r++)
                              if (
                                (this === i || t.target === n[r]) &&
                                t.selector === e
                              )
                                return !0;
                            return !1;
                          }),
                      r.removeEvent(t));
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (e, t) {
                    var n = o.toElementsArray(this);
                    r.removeEvent(function (r) {
                      for (var o = 0; o < n.length; o++)
                        if (
                          (this === i || r.target === n[o]) &&
                          r.selector === e &&
                          r.callback === t
                        )
                          return !0;
                      return !1;
                    });
                  }),
                  (this.addTimeoutHandler = function (e, t, i, n, r) {
                    !n.timeout ||
                      n.timeout <= 0 ||
                      (r.timeoutId && clearTimeout(r.timeoutId),
                      (r.timeoutId = setTimeout(() => {
                        (a.unbindEventWithSelectorAndCallback.call(e, t, i),
                          i.call(null, null));
                      }, n.timeout)));
                  }),
                  this
                );
              },
              c = new (function () {
                var e = {
                  fireOnAttributesModification: !1,
                  onceOnly: !1,
                  existing: !1,
                  timeout: 0,
                };
                function t(e, t, n) {
                  return (
                    !(
                      !o.matchesSelector(e, t.selector) ||
                      (e.l === i && (e.l = r++),
                      -1 != t.firedElems.indexOf(e.l))
                    ) && (t.firedElems.push(e.l), !0)
                  );
                }
                var n = (c = new a(
                  function (e) {
                    var t = { attributes: !1, childList: !0, subtree: !0 };
                    return (
                      e.fireOnAttributesModification && (t.attributes = !0),
                      t
                    );
                  },
                  function (e, i) {
                    e.forEach(function (e) {
                      var n = e.addedNodes,
                        r = e.target,
                        s = [];
                      (null !== n && n.length > 0
                        ? o.checkChildNodesRecursively(n, i, t, s)
                        : "attributes" === e.type &&
                          t(r, i, s) &&
                          s.push({ callback: i.callback, elem: r }),
                        o.callCallbacks(s, i, c));
                    });
                  },
                )).bindEvent;
                return (
                  (c.bindEvent = function (t, r, s) {
                    var a =
                        "object" == typeof r ? o.mergeArrays(e, r) : { ...e },
                      c =
                        "function" == typeof s
                          ? s
                          : "function" == typeof r
                            ? r
                            : i,
                      l = o.toElementsArray(this);
                    if ((c || (a.onceOnly = !0), a.existing)) {
                      for (var u = [], f = 0; f < l.length; f++)
                        for (
                          var m = l[f].querySelectorAll(t), h = 0;
                          h < m.length;
                          h++
                        )
                          u.push({ callback: c, elem: m[h] });
                      if (a.onceOnly && u.length)
                        return c
                          ? c.call(u[0].elem, u[0].elem)
                          : Promise.resolve(u[0].elem);
                      setTimeout(o.callCallbacks, 1, u);
                    }
                    if (!c) {
                      var d = this;
                      return new Promise((e) => n.call(d, t, a, e));
                    }
                    n.call(this, t, a, c);
                  }),
                  c
                );
              })(),
              l = new (function () {
                var e = { onceOnly: !1, timeout: 0 };
                function t(e, t) {
                  return o.matchesSelector(e, t.selector);
                }
                var n = (l = new a(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (e, i) {
                    e.forEach(function (e) {
                      var n = e.removedNodes,
                        r = [];
                      (null !== n &&
                        n.length > 0 &&
                        o.checkChildNodesRecursively(n, i, t, r),
                        o.callCallbacks(r, i, l));
                    });
                  },
                )).bindEvent;
                return (
                  (l.bindEvent = function (t, r, s) {
                    var a =
                        "object" == typeof r ? o.mergeArrays(e, r) : { ...e },
                      c =
                        "function" == typeof s
                          ? s
                          : "function" == typeof r
                            ? r
                            : i;
                    if (!c) {
                      a.onceOnly = !0;
                      var l = this;
                      return new Promise((e) => n.call(l, t, a, e));
                    }
                    n.call(this, t, a, c);
                  }),
                  l
                );
              })();
            (t && m(t.fn),
              m(HTMLElement.prototype),
              m(NodeList.prototype),
              m(HTMLCollection.prototype),
              m(HTMLDocument.prototype),
              m(Window.prototype));
            var u = {};
            return (f(c, u, "unbindAllArrive"), f(l, u, "unbindAllLeave"), u);
          }
          function f(e, t, i) {
            (o.addMethod(t, i, e.unbindEvent),
              o.addMethod(t, i, e.unbindEventWithSelectorOrCallback),
              o.addMethod(t, i, e.unbindEventWithSelectorAndCallback));
          }
          function m(e) {
            ((e.arrive = c.bindEvent),
              f(c, e, "unbindArrive"),
              (e.leave = l.bindEvent),
              f(l, e, "unbindLeave"));
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      },
    },
    t = {};
  function i(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var o = (t[n] = { exports: {} });
    return (e[n](o, o.exports, i), o.exports);
  }
  (() => {
    "use strict";
    const e = "Service_Background",
      t = "Popup",
      n = "Content_Script",
      r =
        "Failed to read chrome storage. Please refresh the page and try again";
    var o = function (e, t, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
    const s = new (class {
      getItemAsync(e) {
        var t;
        return o(this, void 0, void 0, function* () {
          const i = yield chrome.storage.local.get(e);
          return null !== (t = i[e]) && void 0 !== t ? t : null;
        });
      }
      getItemsAsync(e) {
        return o(this, void 0, void 0, function* () {
          return new Promise((t, i) => {
            chrome.storage.local.get(e, (e) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), i(new Error(r)))
                : t(e);
            });
          });
        });
      }
      getStorageUse() {
        return o(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            chrome.storage.local.getBytesInUse(null, (i) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), t(new Error(r)))
                : e(i);
            });
          });
        });
      }
      getAllItemsAsync() {
        return o(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            chrome.storage.local.get(null, (i) => {
              chrome.runtime.lastError
                ? (console.error(chrome.runtime.lastError), t(new Error(r)))
                : e(i);
            });
          });
        });
      }
    })();
    Object.freeze(s);
    const a = s;
    var c = function (e, t, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
    const l = new (class {
      setItemsAsync(e) {
        return c(this, void 0, void 0, function* () {
          return new Promise((t, i) => {
            chrome.storage.local.set(e, () => {
              chrome.runtime.lastError
                ? i(
                    new Error(
                      "Failed to write to chrome storage. Please refresh the page and try again",
                    ),
                  )
                : t();
            });
          });
        });
      }
    })();
    Object.freeze(l);
    const u = l;
    var f, m, h;
    const d = "undefined" != typeof chrome ? chrome.runtime : void 0,
      p = null !== (f = null == d ? void 0 : d.id) && void 0 !== f ? f : "",
      v =
        ((h =
          null === (m = null == d ? void 0 : d.getManifest()) || void 0 === m
            ? void 0
            : m.version),
        "redirectDataMap");
    var g = console.log.bind(self.console),
      w = function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    const b = new (class {
      addListener(e) {
        chrome.runtime.onMessage.addListener(e);
      }
      removeListener(e) {
        chrome.runtime.onMessage.removeListener(e);
      }
      sendMessageToTabAsync(e, t, i = 2e4) {
        return w(this, void 0, void 0, function* () {
          return new Promise((n, r) => {
            const o = setTimeout(() => {
              (console.log("send timeout"), r("Message Timeout"));
            }, i);
            try {
              chrome.tabs.sendMessage(t, e, (t) => {
                (chrome.runtime.lastError &&
                  g(chrome.runtime.lastError.message + JSON.stringify(e)),
                  clearTimeout(o),
                  n(t));
              });
            } catch (e) {
              (clearTimeout(o), r(e));
            }
          });
        });
      }
      u(e, t) {
        return w(this, void 0, void 0, function* () {
          return new Promise((i, n) => {
            let r = null;
            t &&
              (r = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, t));
            try {
              chrome.runtime.sendMessage(p, e, (t) => {
                (chrome.runtime.lastError &&
                  console.log(
                    chrome.runtime.lastError.message + JSON.stringify(e),
                  ),
                  r && clearTimeout(r),
                  i(t));
              });
            } catch (e) {
              (r && clearTimeout(r), n(e));
            }
          });
        });
      }
    })();
    class _ {
      constructor(e, t, i) {
        ((this.sender = e), (this.target = t), (this.type = i));
      }
    }
    class y extends _ {
      constructor(e, t, i) {
        (super(e, t, i), (this.type = i));
      }
    }
    var k, S;
    (!(function (e) {
      ((e.JOIN_SESSION = "joinSession"),
        (e.LEAVE_SESSION = "leaveSession"),
        (e.ACCEPT_DROPIN = "acceptDropin"),
        (e.SET_STATUS_TYPE = "setStatusType"),
        (e.SET_DATA = "setData"),
        (e.GET_DATA = "getData"),
        (e.GET_STATUS_TYPE = "getStatusType"),
        (e.GET_PARTY_STATUS = "getPartyStatus"),
        (e.GET_TAB_PARTY_SESSION_FOR_POPUP = "getTabPartySessionForPopup"),
        (e.GET_VIDEO_DATA = "getVideoData"),
        (e.LOAD_SESSION = "loadSession"),
        (e.NO_SESSION_DATA = "noSessionData"),
        (e.ON_NOTIF = "onNotif"),
        (e.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
        (e.TEARDOWN = "teardown"),
        (e.ON_VIDEO_UPDATE = "onVideoUpdate"),
        (e.SOCKET_LOST_CONNECTION = "socketLostConnection"),
        (e.REBOOT = "socketReconnect"),
        (e.LOG_EVENT = "logEvent"),
        (e.LOG_EXPERIMENT = "logExperiment"),
        (e.STAY_ALIVE = "stayAlive"),
        (e.LOAD_CHAT_WINDOW = "loadChatWindow"),
        (e.RESET_CHAT_WINDOW = "resetChatWindow"),
        (e.HIDE_CHAT_WINDOW = "hideChatWindow"),
        (e.SET_USER_PRESENCE = "setUserPresence"),
        (e.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
        (e.GET_ACTIVE_PARTY = "getActiveParty"),
        (e.GET_TAB_ID = "getTabId"),
        (e.SET_ACTIVE_PARTY = "setActiveParty"),
        (e.FULLSCREEN_WINDOW = "fullscreenWindow"),
        (e.MAX_WINDOW = "maxWindow"),
        (e.GET_EXPERIMENT_FLAG = "getExpFlag"),
        (e.USER_LIST = "userList"),
        (e.USER_AUTHENTICATED = "userAuthenticated"),
        (e.BLOCK_CSP = "blockCSP"),
        (e.REDIRECT_DATA_SET = "redirectDataSet"),
        (e.LOAD_NETFLIX_DATA = "loadNetflixData"),
        (e.TOGGLE_BACKGROUND_TAB = "toggleBackgroundTab"),
        (e.GET_ALLCHAT_HAS_FOCUS = "getAllchatHasFocus"),
        (e.SET_REDIRECT_URL = "setRedirectUrl"),
        (e.GET_REDIRECT_URL = "getRedirectUrl"),
        (e.SET_POSTHOG_DISTINCT_ID = "setPosthogDistinctId"),
        (e.POSTHOG_HAS_FEATURE = "posthogHasFeature"),
        (e.GET_PERM_ID = "getPermId"),
        (e.GET_VALIDATIONS_FAILURE_INFO = "getValidationsFailureInfo"),
        (e.UPDATE_USER_SETTINGS = "updateUserSettings"),
        (e.UPDATE_HANDLE = "updateHandle"),
        (e.SEND_API_REQUEST = "sendApiRequest"),
        (e.PARTY_INIT_TIMING = "partyInitTiming"));
    })(k || (k = {})),
      (function (e) {
        ((e.POSTHOG = "posthog"), (e.METIS = "metis"), (e.BOTH = "both"));
      })(S || (S = {})));
    class A extends y {
      constructor(e, t, i, n = S.BOTH) {
        (super(e, t, k.LOG_EVENT),
          (this.eventPipelineTarget = S.BOTH),
          (this.data = i),
          (this.sender = e),
          (this.target = t),
          (this.eventPipelineTarget = n));
      }
    }
    function U(e) {
      let t = e.length;
      for (; --t >= 0;) e[t] = 0;
    }
    const R = 256,
      E = 286,
      N = 30,
      T = 15,
      I = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      D = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      Z = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      O = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      L = new Array(576);
    U(L);
    const P = new Array(60);
    U(P);
    const F = new Array(512);
    U(F);
    const B = new Array(256);
    U(B);
    const M = new Array(29);
    U(M);
    const x = new Array(N);
    function j(e, t, i, n, r) {
      ((this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = i),
        (this.elems = n),
        (this.max_length = r),
        (this.has_stree = e && e.length));
    }
    let H, C, z;
    function V(e, t) {
      ((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t));
    }
    U(x);
    const J = (e) => (e < 256 ? F[e] : F[256 + (e >>> 7)]),
      K = (e, t) => {
        ((e.pending_buf[e.pending++] = 255 & t),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255));
      },
      Y = (e, t, i) => {
        e.bi_valid > 16 - i
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            K(e, e.bi_buf),
            (e.bi_buf = t >> (16 - e.bi_valid)),
            (e.bi_valid += i - 16))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += i));
      },
      W = (e, t, i) => {
        Y(e, i[2 * t], i[2 * t + 1]);
      },
      G = (e, t) => {
        let i = 0;
        do {
          ((i |= 1 & e), (e >>>= 1), (i <<= 1));
        } while (--t > 0);
        return i >>> 1;
      },
      $ = (e, t, i) => {
        const n = new Array(16);
        let r,
          o,
          s = 0;
        for (r = 1; r <= T; r++) ((s = (s + i[r - 1]) << 1), (n[r] = s));
        for (o = 0; o <= t; o++) {
          let t = e[2 * o + 1];
          0 !== t && (e[2 * o] = G(n[t]++, t));
        }
      },
      X = (e) => {
        let t;
        for (t = 0; t < E; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < N; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        ((e.dyn_ltree[512] = 1),
          (e.opt_len = e.static_len = 0),
          (e.sym_next = e.matches = 0));
      },
      Q = (e) => {
        (e.bi_valid > 8
          ? K(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0));
      },
      q = (e, t, i, n) => {
        const r = 2 * t,
          o = 2 * i;
        return e[r] < e[o] || (e[r] === e[o] && n[t] <= n[i]);
      },
      ee = (e, t, i) => {
        const n = e.heap[i];
        let r = i << 1;
        for (
          ;
          r <= e.heap_len &&
          (r < e.heap_len && q(t, e.heap[r + 1], e.heap[r], e.depth) && r++,
          !q(t, n, e.heap[r], e.depth));
        )
          ((e.heap[i] = e.heap[r]), (i = r), (r <<= 1));
        e.heap[i] = n;
      },
      te = (e, t, i) => {
        let n,
          r,
          o,
          s,
          a = 0;
        if (0 !== e.sym_next)
          do {
            ((n = 255 & e.pending_buf[e.sym_buf + a++]),
              (n += (255 & e.pending_buf[e.sym_buf + a++]) << 8),
              (r = e.pending_buf[e.sym_buf + a++]),
              0 === n
                ? W(e, r, t)
                : ((o = B[r]),
                  W(e, o + R + 1, t),
                  (s = I[o]),
                  0 !== s && ((r -= M[o]), Y(e, r, s)),
                  n--,
                  (o = J(n)),
                  W(e, o, i),
                  (s = D[o]),
                  0 !== s && ((n -= x[o]), Y(e, n, s))));
          } while (a < e.sym_next);
        W(e, 256, t);
      },
      ie = (e, t) => {
        const i = t.dyn_tree,
          n = t.stat_desc.static_tree,
          r = t.stat_desc.has_stree,
          o = t.stat_desc.elems;
        let s,
          a,
          c,
          l = -1;
        for (e.heap_len = 0, e.heap_max = 573, s = 0; s < o; s++)
          0 !== i[2 * s]
            ? ((e.heap[++e.heap_len] = l = s), (e.depth[s] = 0))
            : (i[2 * s + 1] = 0);
        for (; e.heap_len < 2;)
          ((c = e.heap[++e.heap_len] = l < 2 ? ++l : 0),
            (i[2 * c] = 1),
            (e.depth[c] = 0),
            e.opt_len--,
            r && (e.static_len -= n[2 * c + 1]));
        for (t.max_code = l, s = e.heap_len >> 1; s >= 1; s--) ee(e, i, s);
        c = o;
        do {
          ((s = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            ee(e, i, 1),
            (a = e.heap[1]),
            (e.heap[--e.heap_max] = s),
            (e.heap[--e.heap_max] = a),
            (i[2 * c] = i[2 * s] + i[2 * a]),
            (e.depth[c] =
              (e.depth[s] >= e.depth[a] ? e.depth[s] : e.depth[a]) + 1),
            (i[2 * s + 1] = i[2 * a + 1] = c),
            (e.heap[1] = c++),
            ee(e, i, 1));
        } while (e.heap_len >= 2);
        ((e.heap[--e.heap_max] = e.heap[1]),
          ((e, t) => {
            const i = t.dyn_tree,
              n = t.max_code,
              r = t.stat_desc.static_tree,
              o = t.stat_desc.has_stree,
              s = t.stat_desc.extra_bits,
              a = t.stat_desc.extra_base,
              c = t.stat_desc.max_length;
            let l,
              u,
              f,
              m,
              h,
              d,
              p = 0;
            for (m = 0; m <= T; m++) e.bl_count[m] = 0;
            for (
              i[2 * e.heap[e.heap_max] + 1] = 0, l = e.heap_max + 1;
              l < 573;
              l++
            )
              ((u = e.heap[l]),
                (m = i[2 * i[2 * u + 1] + 1] + 1),
                m > c && ((m = c), p++),
                (i[2 * u + 1] = m),
                u > n ||
                  (e.bl_count[m]++,
                  (h = 0),
                  u >= a && (h = s[u - a]),
                  (d = i[2 * u]),
                  (e.opt_len += d * (m + h)),
                  o && (e.static_len += d * (r[2 * u + 1] + h))));
            if (0 !== p) {
              do {
                for (m = c - 1; 0 === e.bl_count[m];) m--;
                (e.bl_count[m]--,
                  (e.bl_count[m + 1] += 2),
                  e.bl_count[c]--,
                  (p -= 2));
              } while (p > 0);
              for (m = c; 0 !== m; m--)
                for (u = e.bl_count[m]; 0 !== u;)
                  ((f = e.heap[--l]),
                    f > n ||
                      (i[2 * f + 1] !== m &&
                        ((e.opt_len += (m - i[2 * f + 1]) * i[2 * f]),
                        (i[2 * f + 1] = m)),
                      u--));
            }
          })(e, t),
          $(i, l, e.bl_count));
      },
      ne = (e, t, i) => {
        let n,
          r,
          o = -1,
          s = t[1],
          a = 0,
          c = 7,
          l = 4;
        for (
          0 === s && ((c = 138), (l = 3)), t[2 * (i + 1) + 1] = 65535, n = 0;
          n <= i;
          n++
        )
          ((r = s),
            (s = t[2 * (n + 1) + 1]),
            (++a < c && r === s) ||
              (a < l
                ? (e.bl_tree[2 * r] += a)
                : 0 !== r
                  ? (r !== o && e.bl_tree[2 * r]++, e.bl_tree[32]++)
                  : a <= 10
                    ? e.bl_tree[34]++
                    : e.bl_tree[36]++,
              (a = 0),
              (o = r),
              0 === s
                ? ((c = 138), (l = 3))
                : r === s
                  ? ((c = 6), (l = 3))
                  : ((c = 7), (l = 4))));
      },
      re = (e, t, i) => {
        let n,
          r,
          o = -1,
          s = t[1],
          a = 0,
          c = 7,
          l = 4;
        for (0 === s && ((c = 138), (l = 3)), n = 0; n <= i; n++)
          if (((r = s), (s = t[2 * (n + 1) + 1]), !(++a < c && r === s))) {
            if (a < l)
              do {
                W(e, r, e.bl_tree);
              } while (0 !== --a);
            else
              0 !== r
                ? (r !== o && (W(e, r, e.bl_tree), a--),
                  W(e, 16, e.bl_tree),
                  Y(e, a - 3, 2))
                : a <= 10
                  ? (W(e, 17, e.bl_tree), Y(e, a - 3, 3))
                  : (W(e, 18, e.bl_tree), Y(e, a - 11, 7));
            ((a = 0),
              (o = r),
              0 === s
                ? ((c = 138), (l = 3))
                : r === s
                  ? ((c = 6), (l = 3))
                  : ((c = 7), (l = 4)));
          }
      };
    let oe = !1;
    const se = (e, t, i, n) => {
      (Y(e, 0 + (n ? 1 : 0), 3),
        Q(e),
        K(e, i),
        K(e, ~i),
        i && e.pending_buf.set(e.window.subarray(t, t + i), e.pending),
        (e.pending += i));
    };
    var ae = (e, t, i, n) => {
        let r,
          o,
          s = 0;
        (e.level > 0
          ? (2 === e.strm.data_type &&
              (e.strm.data_type = ((e) => {
                let t,
                  i = 4093624447;
                for (t = 0; t <= 31; t++, i >>>= 1)
                  if (1 & i && 0 !== e.dyn_ltree[2 * t]) return 0;
                if (
                  0 !== e.dyn_ltree[18] ||
                  0 !== e.dyn_ltree[20] ||
                  0 !== e.dyn_ltree[26]
                )
                  return 1;
                for (t = 32; t < R; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                return 0;
              })(e)),
            ie(e, e.l_desc),
            ie(e, e.d_desc),
            (s = ((e) => {
              let t;
              for (
                ne(e, e.dyn_ltree, e.l_desc.max_code),
                  ne(e, e.dyn_dtree, e.d_desc.max_code),
                  ie(e, e.bl_desc),
                  t = 18;
                t >= 3 && 0 === e.bl_tree[2 * O[t] + 1];
                t--
              );
              return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
            })(e)),
            (r = (e.opt_len + 3 + 7) >>> 3),
            (o = (e.static_len + 3 + 7) >>> 3),
            o <= r && (r = o))
          : (r = o = i + 5),
          i + 4 <= r && -1 !== t
            ? se(e, t, i, n)
            : 4 === e.strategy || o === r
              ? (Y(e, 2 + (n ? 1 : 0), 3), te(e, L, P))
              : (Y(e, 4 + (n ? 1 : 0), 3),
                ((e, t, i, n) => {
                  let r;
                  for (
                    Y(e, t - 257, 5), Y(e, i - 1, 5), Y(e, n - 4, 4), r = 0;
                    r < n;
                    r++
                  )
                    Y(e, e.bl_tree[2 * O[r] + 1], 3);
                  (re(e, e.dyn_ltree, t - 1), re(e, e.dyn_dtree, i - 1));
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                te(e, e.dyn_ltree, e.dyn_dtree)),
          X(e),
          n && Q(e));
      },
      ce = {
        m: (e) => {
          (oe ||
            ((() => {
              let e, t, i, n, r;
              const o = new Array(16);
              for (i = 0, n = 0; n < 28; n++)
                for (M[n] = i, e = 0; e < 1 << I[n]; e++) B[i++] = n;
              for (B[i - 1] = n, r = 0, n = 0; n < 16; n++)
                for (x[n] = r, e = 0; e < 1 << D[n]; e++) F[r++] = n;
              for (r >>= 7; n < N; n++)
                for (x[n] = r << 7, e = 0; e < 1 << (D[n] - 7); e++)
                  F[256 + r++] = n;
              for (t = 0; t <= T; t++) o[t] = 0;
              for (e = 0; e <= 143;) ((L[2 * e + 1] = 8), e++, o[8]++);
              for (; e <= 255;) ((L[2 * e + 1] = 9), e++, o[9]++);
              for (; e <= 279;) ((L[2 * e + 1] = 7), e++, o[7]++);
              for (; e <= 287;) ((L[2 * e + 1] = 8), e++, o[8]++);
              for ($(L, 287, o), e = 0; e < N; e++)
                ((P[2 * e + 1] = 5), (P[2 * e] = G(e, 5)));
              ((H = new j(L, I, 257, E, T)),
                (C = new j(P, D, 0, N, T)),
                (z = new j(new Array(0), Z, 0, 19, 7)));
            })(),
            (oe = !0)),
            (e.l_desc = new V(e.dyn_ltree, H)),
            (e.d_desc = new V(e.dyn_dtree, C)),
            (e.bl_desc = new V(e.bl_tree, z)),
            (e.bi_buf = 0),
            (e.bi_valid = 0),
            X(e));
        },
        h: se,
        p: ae,
        v: (e, t, i) => (
          (e.pending_buf[e.sym_buf + e.sym_next++] = t),
          (e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8),
          (e.pending_buf[e.sym_buf + e.sym_next++] = i),
          0 === t
            ? e.dyn_ltree[2 * i]++
            : (e.matches++,
              t--,
              e.dyn_ltree[2 * (B[i] + R + 1)]++,
              e.dyn_dtree[2 * J(t)]++),
          e.sym_next === e.sym_end
        ),
        _: (e) => {
          (Y(e, 2, 3),
            W(e, 256, L),
            ((e) => {
              16 === e.bi_valid
                ? (K(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                : e.bi_valid >= 8 &&
                  ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                  (e.bi_buf >>= 8),
                  (e.bi_valid -= 8));
            })(e));
        },
      };
    var le = (e, t, i, n) => {
      let r = 65535 & e,
        o = (e >>> 16) & 65535,
        s = 0;
      for (; 0 !== i;) {
        ((s = i > 2e3 ? 2e3 : i), (i -= s));
        do {
          ((r = (r + t[n++]) | 0), (o = (o + r) | 0));
        } while (--s);
        ((r %= 65521), (o %= 65521));
      }
      return r | (o << 16);
    };
    const ue = new Uint32Array(
      (() => {
        let e,
          t = [];
        for (var i = 0; i < 256; i++) {
          e = i;
          for (var n = 0; n < 8; n++)
            e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[i] = e;
        }
        return t;
      })(),
    );
    var fe = (e, t, i, n) => {
        const r = ue,
          o = n + i;
        e ^= -1;
        for (let i = n; i < o; i++) e = (e >>> 8) ^ r[255 & (e ^ t[i])];
        return -1 ^ e;
      },
      me = {
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
      he = {
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
    const { m: de, h: pe, p: ve, v: ge, _: we } = ce,
      {
        Z_NO_FLUSH: be,
        Z_PARTIAL_FLUSH: _e,
        Z_FULL_FLUSH: ye,
        Z_FINISH: ke,
        Z_BLOCK: Se,
        Z_OK: Ae,
        Z_STREAM_END: Ue,
        Z_STREAM_ERROR: Re,
        Z_DATA_ERROR: Ee,
        Z_BUF_ERROR: Ne,
        Z_DEFAULT_COMPRESSION: Te,
        Z_FILTERED: Ie,
        Z_HUFFMAN_ONLY: De,
        Z_RLE: Ze,
        Z_FIXED: Oe,
        Z_DEFAULT_STRATEGY: Le,
        Z_UNKNOWN: Pe,
        Z_DEFLATED: Fe,
      } = he,
      Be = 258,
      Me = 262,
      xe = 42,
      je = 113,
      He = 666,
      Ce = (e, t) => ((e.msg = me[t]), t),
      ze = (e) => 2 * e - (e > 4 ? 9 : 0),
      Ve = (e) => {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0;
      },
      Je = (e) => {
        let t,
          i,
          n,
          r = e.w_size;
        ((t = e.hash_size), (n = t));
        do {
          ((i = e.head[--n]), (e.head[n] = i >= r ? i - r : 0));
        } while (--t);
        ((t = r), (n = t));
        do {
          ((i = e.prev[--n]), (e.prev[n] = i >= r ? i - r : 0));
        } while (--t);
      };
    let Ke = (e, t, i) => ((t << e.hash_shift) ^ i) & e.hash_mask;
    const Ye = (e) => {
        const t = e.state;
        let i = t.pending;
        (i > e.avail_out && (i = e.avail_out),
          0 !== i &&
            (e.output.set(
              t.pending_buf.subarray(t.pending_out, t.pending_out + i),
              e.next_out,
            ),
            (e.next_out += i),
            (t.pending_out += i),
            (e.total_out += i),
            (e.avail_out -= i),
            (t.pending -= i),
            0 === t.pending && (t.pending_out = 0)));
      },
      We = (e, t) => {
        (ve(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t,
        ),
          (e.block_start = e.strstart),
          Ye(e.strm));
      },
      Ge = (e, t) => {
        e.pending_buf[e.pending++] = t;
      },
      $e = (e, t) => {
        ((e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = 255 & t));
      },
      Xe = (e, t, i, n) => {
        let r = e.avail_in;
        return (
          r > n && (r = n),
          0 === r
            ? 0
            : ((e.avail_in -= r),
              t.set(e.input.subarray(e.next_in, e.next_in + r), i),
              1 === e.state.wrap
                ? (e.adler = le(e.adler, t, r, i))
                : 2 === e.state.wrap && (e.adler = fe(e.adler, t, r, i)),
              (e.next_in += r),
              (e.total_in += r),
              r)
        );
      },
      Qe = (e, t) => {
        let i,
          n,
          r = e.max_chain_length,
          o = e.strstart,
          s = e.prev_length,
          a = e.nice_match;
        const c = e.strstart > e.w_size - Me ? e.strstart - (e.w_size - Me) : 0,
          l = e.window,
          u = e.w_mask,
          f = e.prev,
          m = e.strstart + Be;
        let h = l[o + s - 1],
          d = l[o + s];
        (e.prev_length >= e.good_match && (r >>= 2),
          a > e.lookahead && (a = e.lookahead));
        do {
          if (
            ((i = t),
            l[i + s] === d &&
              l[i + s - 1] === h &&
              l[i] === l[o] &&
              l[++i] === l[o + 1])
          ) {
            ((o += 2), i++);
            do {} while (
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              l[++o] === l[++i] &&
              o < m
            );
            if (((n = Be - (m - o)), (o = m - Be), n > s)) {
              if (((e.match_start = t), (s = n), n >= a)) break;
              ((h = l[o + s - 1]), (d = l[o + s]));
            }
          }
        } while ((t = f[t & u]) > c && 0 !== --r);
        return s <= e.lookahead ? s : e.lookahead;
      },
      qe = (e) => {
        const t = e.w_size;
        let i, n, r;
        do {
          if (
            ((n = e.window_size - e.lookahead - e.strstart),
            e.strstart >= t + (t - Me) &&
              (e.window.set(e.window.subarray(t, t + t - n), 0),
              (e.match_start -= t),
              (e.strstart -= t),
              (e.block_start -= t),
              e.insert > e.strstart && (e.insert = e.strstart),
              Je(e),
              (n += t)),
            0 === e.strm.avail_in)
          )
            break;
          if (
            ((i = Xe(e.strm, e.window, e.strstart + e.lookahead, n)),
            (e.lookahead += i),
            e.lookahead + e.insert >= 3)
          )
            for (
              r = e.strstart - e.insert,
                e.ins_h = e.window[r],
                e.ins_h = Ke(e, e.ins_h, e.window[r + 1]);
              e.insert &&
              ((e.ins_h = Ke(e, e.ins_h, e.window[r + 3 - 1])),
              (e.prev[r & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = r),
              r++,
              e.insert--,
              !(e.lookahead + e.insert < 3));
            );
        } while (e.lookahead < Me && 0 !== e.strm.avail_in);
      },
      et = (e, t) => {
        let i,
          n,
          r,
          o =
            e.pending_buf_size - 5 > e.w_size
              ? e.w_size
              : e.pending_buf_size - 5,
          s = 0,
          a = e.strm.avail_in;
        do {
          if (((i = 65535), (r = (e.bi_valid + 42) >> 3), e.strm.avail_out < r))
            break;
          if (
            ((r = e.strm.avail_out - r),
            (n = e.strstart - e.block_start),
            i > n + e.strm.avail_in && (i = n + e.strm.avail_in),
            i > r && (i = r),
            i < o &&
              ((0 === i && t !== ke) || t === be || i !== n + e.strm.avail_in))
          )
            break;
          ((s = t === ke && i === n + e.strm.avail_in ? 1 : 0),
            pe(e, 0, 0, s),
            (e.pending_buf[e.pending - 4] = i),
            (e.pending_buf[e.pending - 3] = i >> 8),
            (e.pending_buf[e.pending - 2] = ~i),
            (e.pending_buf[e.pending - 1] = ~i >> 8),
            Ye(e.strm),
            n &&
              (n > i && (n = i),
              e.strm.output.set(
                e.window.subarray(e.block_start, e.block_start + n),
                e.strm.next_out,
              ),
              (e.strm.next_out += n),
              (e.strm.avail_out -= n),
              (e.strm.total_out += n),
              (e.block_start += n),
              (i -= n)),
            i &&
              (Xe(e.strm, e.strm.output, e.strm.next_out, i),
              (e.strm.next_out += i),
              (e.strm.avail_out -= i),
              (e.strm.total_out += i)));
        } while (0 === s);
        return (
          (a -= e.strm.avail_in),
          a &&
            (a >= e.w_size
              ? ((e.matches = 2),
                e.window.set(
                  e.strm.input.subarray(
                    e.strm.next_in - e.w_size,
                    e.strm.next_in,
                  ),
                  0,
                ),
                (e.strstart = e.w_size),
                (e.insert = e.strstart))
              : (e.window_size - e.strstart <= a &&
                  ((e.strstart -= e.w_size),
                  e.window.set(
                    e.window.subarray(e.w_size, e.w_size + e.strstart),
                    0,
                  ),
                  e.matches < 2 && e.matches++,
                  e.insert > e.strstart && (e.insert = e.strstart)),
                e.window.set(
                  e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in),
                  e.strstart,
                ),
                (e.strstart += a),
                (e.insert +=
                  a > e.w_size - e.insert ? e.w_size - e.insert : a)),
            (e.block_start = e.strstart)),
          e.high_water < e.strstart && (e.high_water = e.strstart),
          s
            ? 4
            : t !== be &&
                t !== ke &&
                0 === e.strm.avail_in &&
                e.strstart === e.block_start
              ? 2
              : ((r = e.window_size - e.strstart),
                e.strm.avail_in > r &&
                  e.block_start >= e.w_size &&
                  ((e.block_start -= e.w_size),
                  (e.strstart -= e.w_size),
                  e.window.set(
                    e.window.subarray(e.w_size, e.w_size + e.strstart),
                    0,
                  ),
                  e.matches < 2 && e.matches++,
                  (r += e.w_size),
                  e.insert > e.strstart && (e.insert = e.strstart)),
                r > e.strm.avail_in && (r = e.strm.avail_in),
                r &&
                  (Xe(e.strm, e.window, e.strstart, r),
                  (e.strstart += r),
                  (e.insert +=
                    r > e.w_size - e.insert ? e.w_size - e.insert : r)),
                e.high_water < e.strstart && (e.high_water = e.strstart),
                (r = (e.bi_valid + 42) >> 3),
                (r =
                  e.pending_buf_size - r > 65535
                    ? 65535
                    : e.pending_buf_size - r),
                (o = r > e.w_size ? e.w_size : r),
                (n = e.strstart - e.block_start),
                (n >= o ||
                  ((n || t === ke) &&
                    t !== be &&
                    0 === e.strm.avail_in &&
                    n <= r)) &&
                  ((i = n > r ? r : n),
                  (s = t === ke && 0 === e.strm.avail_in && i === n ? 1 : 0),
                  pe(e, e.block_start, i, s),
                  (e.block_start += i),
                  Ye(e.strm)),
                s ? 3 : 1)
        );
      },
      tt = (e, t) => {
        let i, n;
        for (;;) {
          if (e.lookahead < Me) {
            if ((qe(e), e.lookahead < Me && t === be)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((i = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== i &&
              e.strstart - i <= e.w_size - Me &&
              (e.match_length = Qe(e, i)),
            e.match_length >= 3)
          )
            if (
              ((n = ge(e, e.strstart - e.match_start, e.match_length - 3)),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
              e.match_length--;
              do {
                (e.strstart++,
                  (e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                  (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart));
              } while (0 !== --e.match_length);
              e.strstart++;
            } else
              ((e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 1])));
          else
            ((n = ge(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++);
          if (n && (We(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        return (
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          t === ke
            ? (We(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.sym_next && (We(e, !1), 0 === e.strm.avail_out)
              ? 1
              : 2
        );
      },
      it = (e, t) => {
        let i, n, r;
        for (;;) {
          if (e.lookahead < Me) {
            if ((qe(e), e.lookahead < Me && t === be)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((i = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== i &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - i <= e.w_size - Me &&
              ((e.match_length = Qe(e, i)),
              e.match_length <= 5 &&
                (e.strategy === Ie ||
                  (3 === e.match_length &&
                    e.strstart - e.match_start > 4096)) &&
                (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
          ) {
            ((r = e.strstart + e.lookahead - 3),
              (n = ge(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2));
            do {
              ++e.strstart <= r &&
                ((e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            } while (0 !== --e.prev_length);
            if (
              ((e.match_available = 0),
              (e.match_length = 2),
              e.strstart++,
              n && (We(e, !1), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((n = ge(e, 0, e.window[e.strstart - 1])),
              n && We(e, !1),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else ((e.match_available = 1), e.strstart++, e.lookahead--);
        }
        return (
          e.match_available &&
            ((n = ge(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          t === ke
            ? (We(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.sym_next && (We(e, !1), 0 === e.strm.avail_out)
              ? 1
              : 2
        );
      };
    function nt(e, t, i, n, r) {
      ((this.good_length = e),
        (this.max_lazy = t),
        (this.nice_length = i),
        (this.max_chain = n),
        (this.func = r));
    }
    const rt = [
      new nt(0, 0, 0, 0, et),
      new nt(4, 4, 8, 4, tt),
      new nt(4, 5, 16, 8, tt),
      new nt(4, 6, 32, 32, tt),
      new nt(4, 4, 16, 16, it),
      new nt(8, 16, 32, 32, it),
      new nt(8, 16, 128, 128, it),
      new nt(8, 32, 128, 256, it),
      new nt(32, 128, 258, 1024, it),
      new nt(32, 258, 258, 4096, it),
    ];
    function ot() {
      ((this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = Fe),
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
        Ve(this.dyn_ltree),
        Ve(this.dyn_dtree),
        Ve(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        Ve(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        Ve(this.depth),
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
    const st = (e) => {
        if (!e) return 1;
        const t = e.state;
        return !t ||
          t.strm !== e ||
          (t.status !== xe &&
            57 !== t.status &&
            69 !== t.status &&
            73 !== t.status &&
            91 !== t.status &&
            103 !== t.status &&
            t.status !== je &&
            t.status !== He)
          ? 1
          : 0;
      },
      at = (e) => {
        if (st(e)) return Ce(e, Re);
        ((e.total_in = e.total_out = 0), (e.data_type = Pe));
        const t = e.state;
        return (
          (t.pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = 2 === t.wrap ? 57 : t.wrap ? xe : je),
          (e.adler = 2 === t.wrap ? 0 : 1),
          (t.last_flush = -2),
          de(t),
          Ae
        );
      },
      ct = (e) => {
        const t = at(e);
        var i;
        return (
          t === Ae &&
            (((i = e.state).window_size = 2 * i.w_size),
            Ve(i.head),
            (i.max_lazy_match = rt[i.level].max_lazy),
            (i.good_match = rt[i.level].good_length),
            (i.nice_match = rt[i.level].nice_length),
            (i.max_chain_length = rt[i.level].max_chain),
            (i.strstart = 0),
            (i.block_start = 0),
            (i.lookahead = 0),
            (i.insert = 0),
            (i.match_length = i.prev_length = 2),
            (i.match_available = 0),
            (i.ins_h = 0)),
          t
        );
      },
      lt = (e, t, i, n, r, o) => {
        if (!e) return Re;
        let s = 1;
        if (
          (t === Te && (t = 6),
          n < 0 ? ((s = 0), (n = -n)) : n > 15 && ((s = 2), (n -= 16)),
          r < 1 ||
            r > 9 ||
            i !== Fe ||
            n < 8 ||
            n > 15 ||
            t < 0 ||
            t > 9 ||
            o < 0 ||
            o > Oe ||
            (8 === n && 1 !== s))
        )
          return Ce(e, Re);
        8 === n && (n = 9);
        const a = new ot();
        return (
          (e.state = a),
          (a.strm = e),
          (a.status = xe),
          (a.wrap = s),
          (a.gzhead = null),
          (a.w_bits = n),
          (a.w_size = 1 << a.w_bits),
          (a.w_mask = a.w_size - 1),
          (a.hash_bits = r + 7),
          (a.hash_size = 1 << a.hash_bits),
          (a.hash_mask = a.hash_size - 1),
          (a.hash_shift = ~~((a.hash_bits + 3 - 1) / 3)),
          (a.window = new Uint8Array(2 * a.w_size)),
          (a.head = new Uint16Array(a.hash_size)),
          (a.prev = new Uint16Array(a.w_size)),
          (a.lit_bufsize = 1 << (r + 6)),
          (a.pending_buf_size = 4 * a.lit_bufsize),
          (a.pending_buf = new Uint8Array(a.pending_buf_size)),
          (a.sym_buf = a.lit_bufsize),
          (a.sym_end = 3 * (a.lit_bufsize - 1)),
          (a.level = t),
          (a.strategy = o),
          (a.method = i),
          ct(e)
        );
      };
    var ut = {
      deflateInit: (e, t) => lt(e, t, Fe, 15, 8, Le),
      deflateInit2: lt,
      deflateReset: ct,
      deflateResetKeep: at,
      deflateSetHeader: (e, t) =>
        st(e) || 2 !== e.state.wrap ? Re : ((e.state.gzhead = t), Ae),
      deflate: (e, t) => {
        if (st(e) || t > Se || t < 0) return e ? Ce(e, Re) : Re;
        const i = e.state;
        if (
          !e.output ||
          (0 !== e.avail_in && !e.input) ||
          (i.status === He && t !== ke)
        )
          return Ce(e, 0 === e.avail_out ? Ne : Re);
        const n = i.last_flush;
        if (((i.last_flush = t), 0 !== i.pending)) {
          if ((Ye(e), 0 === e.avail_out)) return ((i.last_flush = -1), Ae);
        } else if (0 === e.avail_in && ze(t) <= ze(n) && t !== ke)
          return Ce(e, Ne);
        if (i.status === He && 0 !== e.avail_in) return Ce(e, Ne);
        if (
          (i.status === xe && 0 === i.wrap && (i.status = je), i.status === xe)
        ) {
          let t = (Fe + ((i.w_bits - 8) << 4)) << 8,
            n = -1;
          if (
            ((n =
              i.strategy >= De || i.level < 2
                ? 0
                : i.level < 6
                  ? 1
                  : 6 === i.level
                    ? 2
                    : 3),
            (t |= n << 6),
            0 !== i.strstart && (t |= 32),
            (t += 31 - (t % 31)),
            $e(i, t),
            0 !== i.strstart && ($e(i, e.adler >>> 16), $e(i, 65535 & e.adler)),
            (e.adler = 1),
            (i.status = je),
            Ye(e),
            0 !== i.pending)
          )
            return ((i.last_flush = -1), Ae);
        }
        if (57 === i.status)
          if (((e.adler = 0), Ge(i, 31), Ge(i, 139), Ge(i, 8), i.gzhead))
            (Ge(
              i,
              (i.gzhead.text ? 1 : 0) +
                (i.gzhead.hcrc ? 2 : 0) +
                (i.gzhead.extra ? 4 : 0) +
                (i.gzhead.name ? 8 : 0) +
                (i.gzhead.comment ? 16 : 0),
            ),
              Ge(i, 255 & i.gzhead.time),
              Ge(i, (i.gzhead.time >> 8) & 255),
              Ge(i, (i.gzhead.time >> 16) & 255),
              Ge(i, (i.gzhead.time >> 24) & 255),
              Ge(
                i,
                9 === i.level ? 2 : i.strategy >= De || i.level < 2 ? 4 : 0,
              ),
              Ge(i, 255 & i.gzhead.os),
              i.gzhead.extra &&
                i.gzhead.extra.length &&
                (Ge(i, 255 & i.gzhead.extra.length),
                Ge(i, (i.gzhead.extra.length >> 8) & 255)),
              i.gzhead.hcrc &&
                (e.adler = fe(e.adler, i.pending_buf, i.pending, 0)),
              (i.gzindex = 0),
              (i.status = 69));
          else if (
            (Ge(i, 0),
            Ge(i, 0),
            Ge(i, 0),
            Ge(i, 0),
            Ge(i, 0),
            Ge(i, 9 === i.level ? 2 : i.strategy >= De || i.level < 2 ? 4 : 0),
            Ge(i, 3),
            (i.status = je),
            Ye(e),
            0 !== i.pending)
          )
            return ((i.last_flush = -1), Ae);
        if (69 === i.status) {
          if (i.gzhead.extra) {
            let t = i.pending,
              n = (65535 & i.gzhead.extra.length) - i.gzindex;
            for (; i.pending + n > i.pending_buf_size;) {
              let r = i.pending_buf_size - i.pending;
              if (
                (i.pending_buf.set(
                  i.gzhead.extra.subarray(i.gzindex, i.gzindex + r),
                  i.pending,
                ),
                (i.pending = i.pending_buf_size),
                i.gzhead.hcrc &&
                  i.pending > t &&
                  (e.adler = fe(e.adler, i.pending_buf, i.pending - t, t)),
                (i.gzindex += r),
                Ye(e),
                0 !== i.pending)
              )
                return ((i.last_flush = -1), Ae);
              ((t = 0), (n -= r));
            }
            let r = new Uint8Array(i.gzhead.extra);
            (i.pending_buf.set(r.subarray(i.gzindex, i.gzindex + n), i.pending),
              (i.pending += n),
              i.gzhead.hcrc &&
                i.pending > t &&
                (e.adler = fe(e.adler, i.pending_buf, i.pending - t, t)),
              (i.gzindex = 0));
          }
          i.status = 73;
        }
        if (73 === i.status) {
          if (i.gzhead.name) {
            let t,
              n = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > n &&
                    (e.adler = fe(e.adler, i.pending_buf, i.pending - n, n)),
                  Ye(e),
                  0 !== i.pending)
                )
                  return ((i.last_flush = -1), Ae);
                n = 0;
              }
              ((t =
                i.gzindex < i.gzhead.name.length
                  ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                  : 0),
                Ge(i, t));
            } while (0 !== t);
            (i.gzhead.hcrc &&
              i.pending > n &&
              (e.adler = fe(e.adler, i.pending_buf, i.pending - n, n)),
              (i.gzindex = 0));
          }
          i.status = 91;
        }
        if (91 === i.status) {
          if (i.gzhead.comment) {
            let t,
              n = i.pending;
            do {
              if (i.pending === i.pending_buf_size) {
                if (
                  (i.gzhead.hcrc &&
                    i.pending > n &&
                    (e.adler = fe(e.adler, i.pending_buf, i.pending - n, n)),
                  Ye(e),
                  0 !== i.pending)
                )
                  return ((i.last_flush = -1), Ae);
                n = 0;
              }
              ((t =
                i.gzindex < i.gzhead.comment.length
                  ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                  : 0),
                Ge(i, t));
            } while (0 !== t);
            i.gzhead.hcrc &&
              i.pending > n &&
              (e.adler = fe(e.adler, i.pending_buf, i.pending - n, n));
          }
          i.status = 103;
        }
        if (103 === i.status) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size && (Ye(e), 0 !== i.pending))
              return ((i.last_flush = -1), Ae);
            (Ge(i, 255 & e.adler), Ge(i, (e.adler >> 8) & 255), (e.adler = 0));
          }
          if (((i.status = je), Ye(e), 0 !== i.pending))
            return ((i.last_flush = -1), Ae);
        }
        if (
          0 !== e.avail_in ||
          0 !== i.lookahead ||
          (t !== be && i.status !== He)
        ) {
          let n =
            0 === i.level
              ? et(i, t)
              : i.strategy === De
                ? ((e, t) => {
                    let i;
                    for (;;) {
                      if (0 === e.lookahead && (qe(e), 0 === e.lookahead)) {
                        if (t === be) return 1;
                        break;
                      }
                      if (
                        ((e.match_length = 0),
                        (i = ge(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++,
                        i && (We(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      t === ke
                        ? (We(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.sym_next && (We(e, !1), 0 === e.strm.avail_out)
                          ? 1
                          : 2
                    );
                  })(i, t)
                : i.strategy === Ze
                  ? ((e, t) => {
                      let i, n, r, o;
                      const s = e.window;
                      for (;;) {
                        if (e.lookahead <= Be) {
                          if ((qe(e), e.lookahead <= Be && t === be)) return 1;
                          if (0 === e.lookahead) break;
                        }
                        if (
                          ((e.match_length = 0),
                          e.lookahead >= 3 &&
                            e.strstart > 0 &&
                            ((r = e.strstart - 1),
                            (n = s[r]),
                            n === s[++r] && n === s[++r] && n === s[++r]))
                        ) {
                          o = e.strstart + Be;
                          do {} while (
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            n === s[++r] &&
                            r < o
                          );
                          ((e.match_length = Be - (o - r)),
                            e.match_length > e.lookahead &&
                              (e.match_length = e.lookahead));
                        }
                        if (
                          (e.match_length >= 3
                            ? ((i = ge(e, 1, e.match_length - 3)),
                              (e.lookahead -= e.match_length),
                              (e.strstart += e.match_length),
                              (e.match_length = 0))
                            : ((i = ge(e, 0, e.window[e.strstart])),
                              e.lookahead--,
                              e.strstart++),
                          i && (We(e, !1), 0 === e.strm.avail_out))
                        )
                          return 1;
                      }
                      return (
                        (e.insert = 0),
                        t === ke
                          ? (We(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                          : e.sym_next && (We(e, !1), 0 === e.strm.avail_out)
                            ? 1
                            : 2
                      );
                    })(i, t)
                  : rt[i.level].func(i, t);
          if (((3 !== n && 4 !== n) || (i.status = He), 1 === n || 3 === n))
            return (0 === e.avail_out && (i.last_flush = -1), Ae);
          if (
            2 === n &&
            (t === _e
              ? we(i)
              : t !== Se &&
                (pe(i, 0, 0, !1),
                t === ye &&
                  (Ve(i.head),
                  0 === i.lookahead &&
                    ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
            Ye(e),
            0 === e.avail_out)
          )
            return ((i.last_flush = -1), Ae);
        }
        return t !== ke
          ? Ae
          : i.wrap <= 0
            ? Ue
            : (2 === i.wrap
                ? (Ge(i, 255 & e.adler),
                  Ge(i, (e.adler >> 8) & 255),
                  Ge(i, (e.adler >> 16) & 255),
                  Ge(i, (e.adler >> 24) & 255),
                  Ge(i, 255 & e.total_in),
                  Ge(i, (e.total_in >> 8) & 255),
                  Ge(i, (e.total_in >> 16) & 255),
                  Ge(i, (e.total_in >> 24) & 255))
                : ($e(i, e.adler >>> 16), $e(i, 65535 & e.adler)),
              Ye(e),
              i.wrap > 0 && (i.wrap = -i.wrap),
              0 !== i.pending ? Ae : Ue);
      },
      deflateEnd: (e) => {
        if (st(e)) return Re;
        const t = e.state.status;
        return ((e.state = null), t === je ? Ce(e, Ee) : Ae);
      },
      deflateSetDictionary: (e, t) => {
        let i = t.length;
        if (st(e)) return Re;
        const n = e.state,
          r = n.wrap;
        if (2 === r || (1 === r && n.status !== xe) || n.lookahead) return Re;
        if (
          (1 === r && (e.adler = le(e.adler, t, i, 0)),
          (n.wrap = 0),
          i >= n.w_size)
        ) {
          0 === r &&
            (Ve(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0));
          let e = new Uint8Array(n.w_size);
          (e.set(t.subarray(i - n.w_size, i), 0), (t = e), (i = n.w_size));
        }
        const o = e.avail_in,
          s = e.next_in,
          a = e.input;
        for (
          e.avail_in = i, e.next_in = 0, e.input = t, qe(n);
          n.lookahead >= 3;
        ) {
          let e = n.strstart,
            t = n.lookahead - 2;
          do {
            ((n.ins_h = Ke(n, n.ins_h, n.window[e + 3 - 1])),
              (n.prev[e & n.w_mask] = n.head[n.ins_h]),
              (n.head[n.ins_h] = e),
              e++);
          } while (--t);
          ((n.strstart = e), (n.lookahead = 2), qe(n));
        }
        return (
          (n.strstart += n.lookahead),
          (n.block_start = n.strstart),
          (n.insert = n.lookahead),
          (n.lookahead = 0),
          (n.match_length = n.prev_length = 2),
          (n.match_available = 0),
          (e.next_in = s),
          (e.input = a),
          (e.avail_in = o),
          (n.wrap = r),
          Ae
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    };
    const ft = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var mt = function (e) {
        const t = Array.prototype.slice.call(arguments, 1);
        for (; t.length;) {
          const i = t.shift();
          if (i) {
            if ("object" != typeof i)
              throw new TypeError(i + "must be non-object");
            for (const t in i) ft(i, t) && (e[t] = i[t]);
          }
        }
        return e;
      },
      ht = (e) => {
        let t = 0;
        for (let i = 0, n = e.length; i < n; i++) t += e[i].length;
        const i = new Uint8Array(t);
        for (let t = 0, n = 0, r = e.length; t < r; t++) {
          let r = e[t];
          (i.set(r, n), (n += r.length));
        }
        return i;
      };
    let dt = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (e) {
      dt = !1;
    }
    const pt = new Uint8Array(256);
    for (let e = 0; e < 256; e++)
      pt[e] =
        e >= 252
          ? 6
          : e >= 248
            ? 5
            : e >= 240
              ? 4
              : e >= 224
                ? 3
                : e >= 192
                  ? 2
                  : 1;
    pt[254] = pt[254] = 1;
    var vt = (e) => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(e);
        let t,
          i,
          n,
          r,
          o,
          s = e.length,
          a = 0;
        for (r = 0; r < s; r++)
          ((i = e.charCodeAt(r)),
            55296 == (64512 & i) &&
              r + 1 < s &&
              ((n = e.charCodeAt(r + 1)),
              56320 == (64512 & n) &&
                ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), r++)),
            (a += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4));
        for (t = new Uint8Array(a), o = 0, r = 0; o < a; r++)
          ((i = e.charCodeAt(r)),
            55296 == (64512 & i) &&
              r + 1 < s &&
              ((n = e.charCodeAt(r + 1)),
              56320 == (64512 & n) &&
                ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), r++)),
            i < 128
              ? (t[o++] = i)
              : i < 2048
                ? ((t[o++] = 192 | (i >>> 6)), (t[o++] = 128 | (63 & i)))
                : i < 65536
                  ? ((t[o++] = 224 | (i >>> 12)),
                    (t[o++] = 128 | ((i >>> 6) & 63)),
                    (t[o++] = 128 | (63 & i)))
                  : ((t[o++] = 240 | (i >>> 18)),
                    (t[o++] = 128 | ((i >>> 12) & 63)),
                    (t[o++] = 128 | ((i >>> 6) & 63)),
                    (t[o++] = 128 | (63 & i))));
        return t;
      },
      gt = (e, t) => {
        const i = t || e.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(e.subarray(0, t));
        let n, r;
        const o = new Array(2 * i);
        for (r = 0, n = 0; n < i;) {
          let t = e[n++];
          if (t < 128) {
            o[r++] = t;
            continue;
          }
          let s = pt[t];
          if (s > 4) ((o[r++] = 65533), (n += s - 1));
          else {
            for (t &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < i;)
              ((t = (t << 6) | (63 & e[n++])), s--);
            s > 1
              ? (o[r++] = 65533)
              : t < 65536
                ? (o[r++] = t)
                : ((t -= 65536),
                  (o[r++] = 55296 | ((t >> 10) & 1023)),
                  (o[r++] = 56320 | (1023 & t)));
          }
        }
        return ((e, t) => {
          if (t < 65534 && e.subarray && dt)
            return String.fromCharCode.apply(
              null,
              e.length === t ? e : e.subarray(0, t),
            );
          let i = "";
          for (let n = 0; n < t; n++) i += String.fromCharCode(e[n]);
          return i;
        })(o, r);
      },
      wt = (e, t) => {
        (t = t || e.length) > e.length && (t = e.length);
        let i = t - 1;
        for (; i >= 0 && 128 == (192 & e[i]);) i--;
        return i < 0 || 0 === i ? t : i + pt[e[i]] > t ? i : t;
      };
    var bt = function () {
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
    const _t = Object.prototype.toString,
      {
        Z_NO_FLUSH: yt,
        Z_SYNC_FLUSH: kt,
        Z_FULL_FLUSH: St,
        Z_FINISH: At,
        Z_OK: Ut,
        Z_STREAM_END: Rt,
        Z_DEFAULT_COMPRESSION: Et,
        Z_DEFAULT_STRATEGY: Nt,
        Z_DEFLATED: Tt,
      } = he;
    function It(e) {
      this.options = mt(
        {
          level: Et,
          method: Tt,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Nt,
        },
        e || {},
      );
      let t = this.options;
      (t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new bt()),
        (this.strm.avail_out = 0));
      let i = ut.deflateInit2(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy,
      );
      if (i !== Ut) throw new Error(me[i]);
      if (
        (t.header && ut.deflateSetHeader(this.strm, t.header), t.dictionary)
      ) {
        let e;
        if (
          ((e =
            "string" == typeof t.dictionary
              ? vt(t.dictionary)
              : "[object ArrayBuffer]" === _t.call(t.dictionary)
                ? new Uint8Array(t.dictionary)
                : t.dictionary),
          (i = ut.deflateSetDictionary(this.strm, e)),
          i !== Ut)
        )
          throw new Error(me[i]);
        this.k = !0;
      }
    }
    function Dt(e, t) {
      const i = new It(t);
      if ((i.push(e, !0), i.err)) throw i.msg || me[i.err];
      return i.result;
    }
    ((It.prototype.push = function (e, t) {
      const i = this.strm,
        n = this.options.chunkSize;
      let r, o;
      if (this.ended) return !1;
      for (
        o = t === ~~t ? t : !0 === t ? At : yt,
          "string" == typeof e
            ? (i.input = vt(e))
            : "[object ArrayBuffer]" === _t.call(e)
              ? (i.input = new Uint8Array(e))
              : (i.input = e),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;
      )
        if (
          (0 === i.avail_out &&
            ((i.output = new Uint8Array(n)),
            (i.next_out = 0),
            (i.avail_out = n)),
          (o === kt || o === St) && i.avail_out <= 6)
        )
          (this.onData(i.output.subarray(0, i.next_out)), (i.avail_out = 0));
        else {
          if (((r = ut.deflate(i, o)), r === Rt))
            return (
              i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
              (r = ut.deflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              r === Ut
            );
          if (0 !== i.avail_out) {
            if (o > 0 && i.next_out > 0)
              (this.onData(i.output.subarray(0, i.next_out)),
                (i.avail_out = 0));
            else if (0 === i.avail_in) break;
          } else this.onData(i.output);
        }
      return !0;
    }),
      (It.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (It.prototype.onEnd = function (e) {
        (e === Ut && (this.result = ht(this.chunks)),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg));
      }));
    var Zt = {
      Deflate: It,
      deflate: Dt,
      deflateRaw: function (e, t) {
        return (((t = t || {}).raw = !0), Dt(e, t));
      },
      gzip: function (e, t) {
        return (((t = t || {}).gzip = !0), Dt(e, t));
      },
      constants: he,
    };
    const Ot = 16209;
    var Lt = function (e, t) {
      let i,
        n,
        r,
        o,
        s,
        a,
        c,
        l,
        u,
        f,
        m,
        h,
        d,
        p,
        v,
        g,
        w,
        b,
        _,
        y,
        k,
        S,
        A,
        U;
      const R = e.state;
      ((i = e.next_in),
        (A = e.input),
        (n = i + (e.avail_in - 5)),
        (r = e.next_out),
        (U = e.output),
        (o = r - (t - e.avail_out)),
        (s = r + (e.avail_out - 257)),
        (a = R.dmax),
        (c = R.wsize),
        (l = R.whave),
        (u = R.wnext),
        (f = R.window),
        (m = R.hold),
        (h = R.bits),
        (d = R.lencode),
        (p = R.distcode),
        (v = (1 << R.lenbits) - 1),
        (g = (1 << R.distbits) - 1));
      e: do {
        (h < 15 && ((m += A[i++] << h), (h += 8), (m += A[i++] << h), (h += 8)),
          (w = d[m & v]));
        t: for (;;) {
          if (
            ((b = w >>> 24),
            (m >>>= b),
            (h -= b),
            (b = (w >>> 16) & 255),
            0 === b)
          )
            U[r++] = 65535 & w;
          else {
            if (!(16 & b)) {
              if (64 & b) {
                if (32 & b) {
                  R.mode = 16191;
                  break e;
                }
                ((e.msg = "invalid literal/length code"), (R.mode = Ot));
                break e;
              }
              w = d[(65535 & w) + (m & ((1 << b) - 1))];
              continue t;
            }
            for (
              _ = 65535 & w,
                b &= 15,
                b &&
                  (h < b && ((m += A[i++] << h), (h += 8)),
                  (_ += m & ((1 << b) - 1)),
                  (m >>>= b),
                  (h -= b)),
                h < 15 &&
                  ((m += A[i++] << h), (h += 8), (m += A[i++] << h), (h += 8)),
                w = p[m & g];
              ;
            ) {
              if (
                ((b = w >>> 24),
                (m >>>= b),
                (h -= b),
                (b = (w >>> 16) & 255),
                16 & b)
              ) {
                if (
                  ((y = 65535 & w),
                  (b &= 15),
                  h < b &&
                    ((m += A[i++] << h),
                    (h += 8),
                    h < b && ((m += A[i++] << h), (h += 8))),
                  (y += m & ((1 << b) - 1)),
                  y > a)
                ) {
                  ((e.msg = "invalid distance too far back"), (R.mode = Ot));
                  break e;
                }
                if (((m >>>= b), (h -= b), (b = r - o), y > b)) {
                  if (((b = y - b), b > l && R.sane)) {
                    ((e.msg = "invalid distance too far back"), (R.mode = Ot));
                    break e;
                  }
                  if (((k = 0), (S = f), 0 === u)) {
                    if (((k += c - b), b < _)) {
                      _ -= b;
                      do {
                        U[r++] = f[k++];
                      } while (--b);
                      ((k = r - y), (S = U));
                    }
                  } else if (u < b) {
                    if (((k += c + u - b), (b -= u), b < _)) {
                      _ -= b;
                      do {
                        U[r++] = f[k++];
                      } while (--b);
                      if (((k = 0), u < _)) {
                        ((b = u), (_ -= b));
                        do {
                          U[r++] = f[k++];
                        } while (--b);
                        ((k = r - y), (S = U));
                      }
                    }
                  } else if (((k += u - b), b < _)) {
                    _ -= b;
                    do {
                      U[r++] = f[k++];
                    } while (--b);
                    ((k = r - y), (S = U));
                  }
                  for (; _ > 2;)
                    ((U[r++] = S[k++]),
                      (U[r++] = S[k++]),
                      (U[r++] = S[k++]),
                      (_ -= 3));
                  _ && ((U[r++] = S[k++]), _ > 1 && (U[r++] = S[k++]));
                } else {
                  k = r - y;
                  do {
                    ((U[r++] = U[k++]),
                      (U[r++] = U[k++]),
                      (U[r++] = U[k++]),
                      (_ -= 3));
                  } while (_ > 2);
                  _ && ((U[r++] = U[k++]), _ > 1 && (U[r++] = U[k++]));
                }
                break;
              }
              if (64 & b) {
                ((e.msg = "invalid distance code"), (R.mode = Ot));
                break e;
              }
              w = p[(65535 & w) + (m & ((1 << b) - 1))];
            }
          }
          break;
        }
      } while (i < n && r < s);
      ((_ = h >> 3),
        (i -= _),
        (h -= _ << 3),
        (m &= (1 << h) - 1),
        (e.next_in = i),
        (e.next_out = r),
        (e.avail_in = i < n ? n - i + 5 : 5 - (i - n)),
        (e.avail_out = r < s ? s - r + 257 : 257 - (r - s)),
        (R.hold = m),
        (R.bits = h));
    };
    const Pt = 15,
      Ft = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      Bt = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      Mt = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      xt = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var jt = (e, t, i, n, r, o, s, a) => {
      const c = a.bits;
      let l,
        u,
        f,
        m,
        h,
        d,
        p = 0,
        v = 0,
        g = 0,
        w = 0,
        b = 0,
        _ = 0,
        y = 0,
        k = 0,
        S = 0,
        A = 0,
        U = null;
      const R = new Uint16Array(16),
        E = new Uint16Array(16);
      let N,
        T,
        I,
        D = null;
      for (p = 0; p <= Pt; p++) R[p] = 0;
      for (v = 0; v < n; v++) R[t[i + v]]++;
      for (b = c, w = Pt; w >= 1 && 0 === R[w]; w--);
      if ((b > w && (b = w), 0 === w))
        return ((r[o++] = 20971520), (r[o++] = 20971520), (a.bits = 1), 0);
      for (g = 1; g < w && 0 === R[g]; g++);
      for (b < g && (b = g), k = 1, p = 1; p <= Pt; p++)
        if (((k <<= 1), (k -= R[p]), k < 0)) return -1;
      if (k > 0 && (0 === e || 1 !== w)) return -1;
      for (E[1] = 0, p = 1; p < Pt; p++) E[p + 1] = E[p] + R[p];
      for (v = 0; v < n; v++) 0 !== t[i + v] && (s[E[t[i + v]]++] = v);
      if (
        (0 === e
          ? ((U = D = s), (d = 20))
          : 1 === e
            ? ((U = Ft), (D = Bt), (d = 257))
            : ((U = Mt), (D = xt), (d = 0)),
        (A = 0),
        (v = 0),
        (p = g),
        (h = o),
        (_ = b),
        (y = 0),
        (f = -1),
        (S = 1 << b),
        (m = S - 1),
        (1 === e && S > 852) || (2 === e && S > 592))
      )
        return 1;
      for (;;) {
        ((N = p - y),
          s[v] + 1 < d
            ? ((T = 0), (I = s[v]))
            : s[v] >= d
              ? ((T = D[s[v] - d]), (I = U[s[v] - d]))
              : ((T = 96), (I = 0)),
          (l = 1 << (p - y)),
          (u = 1 << _),
          (g = u));
        do {
          ((u -= l), (r[h + (A >> y) + u] = (N << 24) | (T << 16) | I));
        } while (0 !== u);
        for (l = 1 << (p - 1); A & l;) l >>= 1;
        if ((0 !== l ? ((A &= l - 1), (A += l)) : (A = 0), v++, 0 === --R[p])) {
          if (p === w) break;
          p = t[i + s[v]];
        }
        if (p > b && (A & m) !== f) {
          for (
            0 === y && (y = b), h += g, _ = p - y, k = 1 << _;
            _ + y < w && ((k -= R[_ + y]), !(k <= 0));
          )
            (_++, (k <<= 1));
          if (((S += 1 << _), (1 === e && S > 852) || (2 === e && S > 592)))
            return 1;
          ((f = A & m), (r[f] = (b << 24) | (_ << 16) | (h - o)));
        }
      }
      return (
        0 !== A && (r[h + A] = ((p - y) << 24) | (64 << 16)),
        (a.bits = b),
        0
      );
    };
    const {
        Z_FINISH: Ht,
        Z_BLOCK: Ct,
        Z_TREES: zt,
        Z_OK: Vt,
        Z_STREAM_END: Jt,
        Z_NEED_DICT: Kt,
        Z_STREAM_ERROR: Yt,
        Z_DATA_ERROR: Wt,
        Z_MEM_ERROR: Gt,
        Z_BUF_ERROR: $t,
        Z_DEFLATED: Xt,
      } = he,
      Qt = 16180,
      qt = 16190,
      ei = 16191,
      ti = 16192,
      ii = 16194,
      ni = 16199,
      ri = 16200,
      oi = 16206,
      si = 16209,
      ai = (e) =>
        ((e >>> 24) & 255) +
        ((e >>> 8) & 65280) +
        ((65280 & e) << 8) +
        ((255 & e) << 24);
    function ci() {
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
    const li = (e) => {
        if (!e) return 1;
        const t = e.state;
        return !t || t.strm !== e || t.mode < Qt || t.mode > 16211 ? 1 : 0;
      },
      ui = (e) => {
        if (li(e)) return Yt;
        const t = e.state;
        return (
          (e.total_in = e.total_out = t.total = 0),
          (e.msg = ""),
          t.wrap && (e.adler = 1 & t.wrap),
          (t.mode = Qt),
          (t.last = 0),
          (t.havedict = 0),
          (t.flags = -1),
          (t.dmax = 32768),
          (t.head = null),
          (t.hold = 0),
          (t.bits = 0),
          (t.lencode = t.lendyn = new Int32Array(852)),
          (t.distcode = t.distdyn = new Int32Array(592)),
          (t.sane = 1),
          (t.back = -1),
          Vt
        );
      },
      fi = (e) => {
        if (li(e)) return Yt;
        const t = e.state;
        return ((t.wsize = 0), (t.whave = 0), (t.wnext = 0), ui(e));
      },
      mi = (e, t) => {
        let i;
        if (li(e)) return Yt;
        const n = e.state;
        return (
          t < 0
            ? ((i = 0), (t = -t))
            : ((i = 5 + (t >> 4)), t < 48 && (t &= 15)),
          t && (t < 8 || t > 15)
            ? Yt
            : (null !== n.window && n.wbits !== t && (n.window = null),
              (n.wrap = i),
              (n.wbits = t),
              fi(e))
        );
      },
      hi = (e, t) => {
        if (!e) return Yt;
        const i = new ci();
        ((e.state = i), (i.strm = e), (i.window = null), (i.mode = Qt));
        const n = mi(e, t);
        return (n !== Vt && (e.state = null), n);
      };
    let di,
      pi,
      vi = !0;
    const gi = (e) => {
        if (vi) {
          ((di = new Int32Array(512)), (pi = new Int32Array(32)));
          let t = 0;
          for (; t < 144;) e.lens[t++] = 8;
          for (; t < 256;) e.lens[t++] = 9;
          for (; t < 280;) e.lens[t++] = 7;
          for (; t < 288;) e.lens[t++] = 8;
          for (
            jt(1, e.lens, 0, 288, di, 0, e.work, { bits: 9 }), t = 0;
            t < 32;
          )
            e.lens[t++] = 5;
          (jt(2, e.lens, 0, 32, pi, 0, e.work, { bits: 5 }), (vi = !1));
        }
        ((e.lencode = di),
          (e.lenbits = 9),
          (e.distcode = pi),
          (e.distbits = 5));
      },
      wi = (e, t, i, n) => {
        let r;
        const o = e.state;
        return (
          null === o.window &&
            ((o.wsize = 1 << o.wbits),
            (o.wnext = 0),
            (o.whave = 0),
            (o.window = new Uint8Array(o.wsize))),
          n >= o.wsize
            ? (o.window.set(t.subarray(i - o.wsize, i), 0),
              (o.wnext = 0),
              (o.whave = o.wsize))
            : ((r = o.wsize - o.wnext),
              r > n && (r = n),
              o.window.set(t.subarray(i - n, i - n + r), o.wnext),
              (n -= r)
                ? (o.window.set(t.subarray(i - n, i), 0),
                  (o.wnext = n),
                  (o.whave = o.wsize))
                : ((o.wnext += r),
                  o.wnext === o.wsize && (o.wnext = 0),
                  o.whave < o.wsize && (o.whave += r))),
          0
        );
      };
    var bi = {
      inflateReset: fi,
      inflateReset2: mi,
      inflateResetKeep: ui,
      inflateInit: (e) => hi(e, 15),
      inflateInit2: hi,
      inflate: (e, t) => {
        let i,
          n,
          r,
          o,
          s,
          a,
          c,
          l,
          u,
          f,
          m,
          h,
          d,
          p,
          v,
          g,
          w,
          b,
          _,
          y,
          k,
          S,
          A = 0;
        const U = new Uint8Array(4);
        let R, E;
        const N = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
        if (li(e) || !e.output || (!e.input && 0 !== e.avail_in)) return Yt;
        ((i = e.state),
          i.mode === ei && (i.mode = ti),
          (s = e.next_out),
          (r = e.output),
          (c = e.avail_out),
          (o = e.next_in),
          (n = e.input),
          (a = e.avail_in),
          (l = i.hold),
          (u = i.bits),
          (f = a),
          (m = c),
          (S = Vt));
        e: for (;;)
          switch (i.mode) {
            case Qt:
              if (0 === i.wrap) {
                i.mode = ti;
                break;
              }
              for (; u < 16;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if (2 & i.wrap && 35615 === l) {
                (0 === i.wbits && (i.wbits = 15),
                  (i.check = 0),
                  (U[0] = 255 & l),
                  (U[1] = (l >>> 8) & 255),
                  (i.check = fe(i.check, U, 2, 0)),
                  (l = 0),
                  (u = 0),
                  (i.mode = 16181));
                break;
              }
              if (
                (i.head && (i.head.done = !1),
                !(1 & i.wrap) || (((255 & l) << 8) + (l >> 8)) % 31)
              ) {
                ((e.msg = "incorrect header check"), (i.mode = si));
                break;
              }
              if ((15 & l) !== Xt) {
                ((e.msg = "unknown compression method"), (i.mode = si));
                break;
              }
              if (
                ((l >>>= 4),
                (u -= 4),
                (k = 8 + (15 & l)),
                0 === i.wbits && (i.wbits = k),
                k > 15 || k > i.wbits)
              ) {
                ((e.msg = "invalid window size"), (i.mode = si));
                break;
              }
              ((i.dmax = 1 << i.wbits),
                (i.flags = 0),
                (e.adler = i.check = 1),
                (i.mode = 512 & l ? 16189 : ei),
                (l = 0),
                (u = 0));
              break;
            case 16181:
              for (; u < 16;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if (((i.flags = l), (255 & i.flags) !== Xt)) {
                ((e.msg = "unknown compression method"), (i.mode = si));
                break;
              }
              if (57344 & i.flags) {
                ((e.msg = "unknown header flags set"), (i.mode = si));
                break;
              }
              (i.head && (i.head.text = (l >> 8) & 1),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((U[0] = 255 & l),
                  (U[1] = (l >>> 8) & 255),
                  (i.check = fe(i.check, U, 2, 0))),
                (l = 0),
                (u = 0),
                (i.mode = 16182));
            case 16182:
              for (; u < 32;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              (i.head && (i.head.time = l),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((U[0] = 255 & l),
                  (U[1] = (l >>> 8) & 255),
                  (U[2] = (l >>> 16) & 255),
                  (U[3] = (l >>> 24) & 255),
                  (i.check = fe(i.check, U, 4, 0))),
                (l = 0),
                (u = 0),
                (i.mode = 16183));
            case 16183:
              for (; u < 16;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              (i.head && ((i.head.xflags = 255 & l), (i.head.os = l >> 8)),
                512 & i.flags &&
                  4 & i.wrap &&
                  ((U[0] = 255 & l),
                  (U[1] = (l >>> 8) & 255),
                  (i.check = fe(i.check, U, 2, 0))),
                (l = 0),
                (u = 0),
                (i.mode = 16184));
            case 16184:
              if (1024 & i.flags) {
                for (; u < 16;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((i.length = l),
                  i.head && (i.head.extra_len = l),
                  512 & i.flags &&
                    4 & i.wrap &&
                    ((U[0] = 255 & l),
                    (U[1] = (l >>> 8) & 255),
                    (i.check = fe(i.check, U, 2, 0))),
                  (l = 0),
                  (u = 0));
              } else i.head && (i.head.extra = null);
              i.mode = 16185;
            case 16185:
              if (
                1024 & i.flags &&
                ((h = i.length),
                h > a && (h = a),
                h &&
                  (i.head &&
                    ((k = i.head.extra_len - i.length),
                    i.head.extra ||
                      (i.head.extra = new Uint8Array(i.head.extra_len)),
                    i.head.extra.set(n.subarray(o, o + h), k)),
                  512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = fe(i.check, n, h, o)),
                  (a -= h),
                  (o += h),
                  (i.length -= h)),
                i.length)
              )
                break e;
              ((i.length = 0), (i.mode = 16186));
            case 16186:
              if (2048 & i.flags) {
                if (0 === a) break e;
                h = 0;
                do {
                  ((k = n[o + h++]),
                    i.head &&
                      k &&
                      i.length < 65536 &&
                      (i.head.name += String.fromCharCode(k)));
                } while (k && h < a);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = fe(i.check, n, h, o)),
                  (a -= h),
                  (o += h),
                  k)
                )
                  break e;
              } else i.head && (i.head.name = null);
              ((i.length = 0), (i.mode = 16187));
            case 16187:
              if (4096 & i.flags) {
                if (0 === a) break e;
                h = 0;
                do {
                  ((k = n[o + h++]),
                    i.head &&
                      k &&
                      i.length < 65536 &&
                      (i.head.comment += String.fromCharCode(k)));
                } while (k && h < a);
                if (
                  (512 & i.flags &&
                    4 & i.wrap &&
                    (i.check = fe(i.check, n, h, o)),
                  (a -= h),
                  (o += h),
                  k)
                )
                  break e;
              } else i.head && (i.head.comment = null);
              i.mode = 16188;
            case 16188:
              if (512 & i.flags) {
                for (; u < 16;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                if (4 & i.wrap && l !== (65535 & i.check)) {
                  ((e.msg = "header crc mismatch"), (i.mode = si));
                  break;
                }
                ((l = 0), (u = 0));
              }
              (i.head &&
                ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                (e.adler = i.check = 0),
                (i.mode = ei));
              break;
            case 16189:
              for (; u < 32;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              ((e.adler = i.check = ai(l)), (l = 0), (u = 0), (i.mode = qt));
            case qt:
              if (0 === i.havedict)
                return (
                  (e.next_out = s),
                  (e.avail_out = c),
                  (e.next_in = o),
                  (e.avail_in = a),
                  (i.hold = l),
                  (i.bits = u),
                  Kt
                );
              ((e.adler = i.check = 1), (i.mode = ei));
            case ei:
              if (t === Ct || t === zt) break e;
            case ti:
              if (i.last) {
                ((l >>>= 7 & u), (u -= 7 & u), (i.mode = oi));
                break;
              }
              for (; u < 3;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              switch (((i.last = 1 & l), (l >>>= 1), (u -= 1), 3 & l)) {
                case 0:
                  i.mode = 16193;
                  break;
                case 1:
                  if ((gi(i), (i.mode = ni), t === zt)) {
                    ((l >>>= 2), (u -= 2));
                    break e;
                  }
                  break;
                case 2:
                  i.mode = 16196;
                  break;
                case 3:
                  ((e.msg = "invalid block type"), (i.mode = si));
              }
              ((l >>>= 2), (u -= 2));
              break;
            case 16193:
              for (l >>>= 7 & u, u -= 7 & u; u < 32;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if ((65535 & l) != ((l >>> 16) ^ 65535)) {
                ((e.msg = "invalid stored block lengths"), (i.mode = si));
                break;
              }
              if (
                ((i.length = 65535 & l),
                (l = 0),
                (u = 0),
                (i.mode = ii),
                t === zt)
              )
                break e;
            case ii:
              i.mode = 16195;
            case 16195:
              if (((h = i.length), h)) {
                if ((h > a && (h = a), h > c && (h = c), 0 === h)) break e;
                (r.set(n.subarray(o, o + h), s),
                  (a -= h),
                  (o += h),
                  (c -= h),
                  (s += h),
                  (i.length -= h));
                break;
              }
              i.mode = ei;
              break;
            case 16196:
              for (; u < 14;) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if (
                ((i.nlen = 257 + (31 & l)),
                (l >>>= 5),
                (u -= 5),
                (i.ndist = 1 + (31 & l)),
                (l >>>= 5),
                (u -= 5),
                (i.ncode = 4 + (15 & l)),
                (l >>>= 4),
                (u -= 4),
                i.nlen > 286 || i.ndist > 30)
              ) {
                ((e.msg = "too many length or distance symbols"),
                  (i.mode = si));
                break;
              }
              ((i.have = 0), (i.mode = 16197));
            case 16197:
              for (; i.have < i.ncode;) {
                for (; u < 3;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((i.lens[N[i.have++]] = 7 & l), (l >>>= 3), (u -= 3));
              }
              for (; i.have < 19;) i.lens[N[i.have++]] = 0;
              if (
                ((i.lencode = i.lendyn),
                (i.lenbits = 7),
                (R = { bits: i.lenbits }),
                (S = jt(0, i.lens, 0, 19, i.lencode, 0, i.work, R)),
                (i.lenbits = R.bits),
                S)
              ) {
                ((e.msg = "invalid code lengths set"), (i.mode = si));
                break;
              }
              ((i.have = 0), (i.mode = 16198));
            case 16198:
              for (; i.have < i.nlen + i.ndist;) {
                for (
                  ;
                  (A = i.lencode[l & ((1 << i.lenbits) - 1)]),
                    (v = A >>> 24),
                    (g = (A >>> 16) & 255),
                    (w = 65535 & A),
                    !(v <= u);
                ) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                if (w < 16) ((l >>>= v), (u -= v), (i.lens[i.have++] = w));
                else {
                  if (16 === w) {
                    for (E = v + 2; u < E;) {
                      if (0 === a) break e;
                      (a--, (l += n[o++] << u), (u += 8));
                    }
                    if (((l >>>= v), (u -= v), 0 === i.have)) {
                      ((e.msg = "invalid bit length repeat"), (i.mode = si));
                      break;
                    }
                    ((k = i.lens[i.have - 1]),
                      (h = 3 + (3 & l)),
                      (l >>>= 2),
                      (u -= 2));
                  } else if (17 === w) {
                    for (E = v + 3; u < E;) {
                      if (0 === a) break e;
                      (a--, (l += n[o++] << u), (u += 8));
                    }
                    ((l >>>= v),
                      (u -= v),
                      (k = 0),
                      (h = 3 + (7 & l)),
                      (l >>>= 3),
                      (u -= 3));
                  } else {
                    for (E = v + 7; u < E;) {
                      if (0 === a) break e;
                      (a--, (l += n[o++] << u), (u += 8));
                    }
                    ((l >>>= v),
                      (u -= v),
                      (k = 0),
                      (h = 11 + (127 & l)),
                      (l >>>= 7),
                      (u -= 7));
                  }
                  if (i.have + h > i.nlen + i.ndist) {
                    ((e.msg = "invalid bit length repeat"), (i.mode = si));
                    break;
                  }
                  for (; h--;) i.lens[i.have++] = k;
                }
              }
              if (i.mode === si) break;
              if (0 === i.lens[256]) {
                ((e.msg = "invalid code -- missing end-of-block"),
                  (i.mode = si));
                break;
              }
              if (
                ((i.lenbits = 9),
                (R = { bits: i.lenbits }),
                (S = jt(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, R)),
                (i.lenbits = R.bits),
                S)
              ) {
                ((e.msg = "invalid literal/lengths set"), (i.mode = si));
                break;
              }
              if (
                ((i.distbits = 6),
                (i.distcode = i.distdyn),
                (R = { bits: i.distbits }),
                (S = jt(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, R)),
                (i.distbits = R.bits),
                S)
              ) {
                ((e.msg = "invalid distances set"), (i.mode = si));
                break;
              }
              if (((i.mode = ni), t === zt)) break e;
            case ni:
              i.mode = ri;
            case ri:
              if (a >= 6 && c >= 258) {
                ((e.next_out = s),
                  (e.avail_out = c),
                  (e.next_in = o),
                  (e.avail_in = a),
                  (i.hold = l),
                  (i.bits = u),
                  Lt(e, m),
                  (s = e.next_out),
                  (r = e.output),
                  (c = e.avail_out),
                  (o = e.next_in),
                  (n = e.input),
                  (a = e.avail_in),
                  (l = i.hold),
                  (u = i.bits),
                  i.mode === ei && (i.back = -1));
                break;
              }
              for (
                i.back = 0;
                (A = i.lencode[l & ((1 << i.lenbits) - 1)]),
                  (v = A >>> 24),
                  (g = (A >>> 16) & 255),
                  (w = 65535 & A),
                  !(v <= u);
              ) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if (g && !(240 & g)) {
                for (
                  b = v, _ = g, y = w;
                  (A = i.lencode[y + ((l & ((1 << (b + _)) - 1)) >> b)]),
                    (v = A >>> 24),
                    (g = (A >>> 16) & 255),
                    (w = 65535 & A),
                    !(b + v <= u);
                ) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((l >>>= b), (u -= b), (i.back += b));
              }
              if (
                ((l >>>= v), (u -= v), (i.back += v), (i.length = w), 0 === g)
              ) {
                i.mode = 16205;
                break;
              }
              if (32 & g) {
                ((i.back = -1), (i.mode = ei));
                break;
              }
              if (64 & g) {
                ((e.msg = "invalid literal/length code"), (i.mode = si));
                break;
              }
              ((i.extra = 15 & g), (i.mode = 16201));
            case 16201:
              if (i.extra) {
                for (E = i.extra; u < E;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((i.length += l & ((1 << i.extra) - 1)),
                  (l >>>= i.extra),
                  (u -= i.extra),
                  (i.back += i.extra));
              }
              ((i.was = i.length), (i.mode = 16202));
            case 16202:
              for (
                ;
                (A = i.distcode[l & ((1 << i.distbits) - 1)]),
                  (v = A >>> 24),
                  (g = (A >>> 16) & 255),
                  (w = 65535 & A),
                  !(v <= u);
              ) {
                if (0 === a) break e;
                (a--, (l += n[o++] << u), (u += 8));
              }
              if (!(240 & g)) {
                for (
                  b = v, _ = g, y = w;
                  (A = i.distcode[y + ((l & ((1 << (b + _)) - 1)) >> b)]),
                    (v = A >>> 24),
                    (g = (A >>> 16) & 255),
                    (w = 65535 & A),
                    !(b + v <= u);
                ) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((l >>>= b), (u -= b), (i.back += b));
              }
              if (((l >>>= v), (u -= v), (i.back += v), 64 & g)) {
                ((e.msg = "invalid distance code"), (i.mode = si));
                break;
              }
              ((i.offset = w), (i.extra = 15 & g), (i.mode = 16203));
            case 16203:
              if (i.extra) {
                for (E = i.extra; u < E;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                ((i.offset += l & ((1 << i.extra) - 1)),
                  (l >>>= i.extra),
                  (u -= i.extra),
                  (i.back += i.extra));
              }
              if (i.offset > i.dmax) {
                ((e.msg = "invalid distance too far back"), (i.mode = si));
                break;
              }
              i.mode = 16204;
            case 16204:
              if (0 === c) break e;
              if (((h = m - c), i.offset > h)) {
                if (((h = i.offset - h), h > i.whave && i.sane)) {
                  ((e.msg = "invalid distance too far back"), (i.mode = si));
                  break;
                }
                (h > i.wnext
                  ? ((h -= i.wnext), (d = i.wsize - h))
                  : (d = i.wnext - h),
                  h > i.length && (h = i.length),
                  (p = i.window));
              } else ((p = r), (d = s - i.offset), (h = i.length));
              (h > c && (h = c), (c -= h), (i.length -= h));
              do {
                r[s++] = p[d++];
              } while (--h);
              0 === i.length && (i.mode = ri);
              break;
            case 16205:
              if (0 === c) break e;
              ((r[s++] = i.length), c--, (i.mode = ri));
              break;
            case oi:
              if (i.wrap) {
                for (; u < 32;) {
                  if (0 === a) break e;
                  (a--, (l |= n[o++] << u), (u += 8));
                }
                if (
                  ((m -= c),
                  (e.total_out += m),
                  (i.total += m),
                  4 & i.wrap &&
                    m &&
                    (e.adler = i.check =
                      i.flags
                        ? fe(i.check, r, m, s - m)
                        : le(i.check, r, m, s - m)),
                  (m = c),
                  4 & i.wrap && (i.flags ? l : ai(l)) !== i.check)
                ) {
                  ((e.msg = "incorrect data check"), (i.mode = si));
                  break;
                }
                ((l = 0), (u = 0));
              }
              i.mode = 16207;
            case 16207:
              if (i.wrap && i.flags) {
                for (; u < 32;) {
                  if (0 === a) break e;
                  (a--, (l += n[o++] << u), (u += 8));
                }
                if (4 & i.wrap && l !== (4294967295 & i.total)) {
                  ((e.msg = "incorrect length check"), (i.mode = si));
                  break;
                }
                ((l = 0), (u = 0));
              }
              i.mode = 16208;
            case 16208:
              S = Jt;
              break e;
            case si:
              S = Wt;
              break e;
            case 16210:
              return Gt;
            default:
              return Yt;
          }
        return (
          (e.next_out = s),
          (e.avail_out = c),
          (e.next_in = o),
          (e.avail_in = a),
          (i.hold = l),
          (i.bits = u),
          (i.wsize ||
            (m !== e.avail_out && i.mode < si && (i.mode < oi || t !== Ht))) &&
            wi(e, e.output, e.next_out, m - e.avail_out),
          (f -= e.avail_in),
          (m -= e.avail_out),
          (e.total_in += f),
          (e.total_out += m),
          (i.total += m),
          4 & i.wrap &&
            m &&
            (e.adler = i.check =
              i.flags
                ? fe(i.check, r, m, e.next_out - m)
                : le(i.check, r, m, e.next_out - m)),
          (e.data_type =
            i.bits +
            (i.last ? 64 : 0) +
            (i.mode === ei ? 128 : 0) +
            (i.mode === ni || i.mode === ii ? 256 : 0)),
          ((0 === f && 0 === m) || t === Ht) && S === Vt && (S = $t),
          S
        );
      },
      inflateEnd: (e) => {
        if (li(e)) return Yt;
        let t = e.state;
        return (t.window && (t.window = null), (e.state = null), Vt);
      },
      inflateGetHeader: (e, t) => {
        if (li(e)) return Yt;
        const i = e.state;
        return 2 & i.wrap ? ((i.head = t), (t.done = !1), Vt) : Yt;
      },
      inflateSetDictionary: (e, t) => {
        const i = t.length;
        let n, r, o;
        return li(e)
          ? Yt
          : ((n = e.state),
            0 !== n.wrap && n.mode !== qt
              ? Yt
              : n.mode === qt && ((r = 1), (r = le(r, t, i, 0)), r !== n.check)
                ? Wt
                : ((o = wi(e, t, i, i)),
                  o ? ((n.mode = 16210), Gt) : ((n.havedict = 1), Vt)));
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    };
    var _i = function () {
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
    const yi = Object.prototype.toString,
      {
        Z_NO_FLUSH: ki,
        Z_FINISH: Si,
        Z_OK: Ai,
        Z_STREAM_END: Ui,
        Z_NEED_DICT: Ri,
        Z_STREAM_ERROR: Ei,
        Z_DATA_ERROR: Ni,
        Z_MEM_ERROR: Ti,
      } = he;
    function Ii(e) {
      this.options = mt({ chunkSize: 65536, windowBits: 15, to: "" }, e || {});
      const t = this.options;
      (t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        !(t.windowBits >= 0 && t.windowBits < 16) ||
          (e && e.windowBits) ||
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          (15 & t.windowBits || (t.windowBits |= 15)),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new bt()),
        (this.strm.avail_out = 0));
      let i = bi.inflateInit2(this.strm, t.windowBits);
      if (i !== Ai) throw new Error(me[i]);
      if (
        ((this.header = new _i()),
        bi.inflateGetHeader(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = vt(t.dictionary))
            : "[object ArrayBuffer]" === yi.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw &&
            ((i = bi.inflateSetDictionary(this.strm, t.dictionary)), i !== Ai)))
      )
        throw new Error(me[i]);
    }
    function Di(e, t) {
      const i = new Ii(t);
      if ((i.push(e), i.err)) throw i.msg || me[i.err];
      return i.result;
    }
    ((Ii.prototype.push = function (e, t) {
      const i = this.strm,
        n = this.options.chunkSize,
        r = this.options.dictionary;
      let o, s, a;
      if (this.ended) return !1;
      for (
        s = t === ~~t ? t : !0 === t ? Si : ki,
          "[object ArrayBuffer]" === yi.call(e)
            ? (i.input = new Uint8Array(e))
            : (i.input = e),
          i.next_in = 0,
          i.avail_in = i.input.length;
        ;
      ) {
        for (
          0 === i.avail_out &&
            ((i.output = new Uint8Array(n)),
            (i.next_out = 0),
            (i.avail_out = n)),
            o = bi.inflate(i, s),
            o === Ri &&
              r &&
              ((o = bi.inflateSetDictionary(i, r)),
              o === Ai ? (o = bi.inflate(i, s)) : o === Ni && (o = Ri));
          i.avail_in > 0 && o === Ui && i.state.wrap > 0 && 0 !== e[i.next_in];
        )
          (bi.inflateReset(i), (o = bi.inflate(i, s)));
        switch (o) {
          case Ei:
          case Ni:
          case Ri:
          case Ti:
            return (this.onEnd(o), (this.ended = !0), !1);
        }
        if (((a = i.avail_out), i.next_out && (0 === i.avail_out || o === Ui)))
          if ("string" === this.options.to) {
            let e = wt(i.output, i.next_out),
              t = i.next_out - e,
              r = gt(i.output, e);
            ((i.next_out = t),
              (i.avail_out = n - t),
              t && i.output.set(i.output.subarray(e, e + t), 0),
              this.onData(r));
          } else
            this.onData(
              i.output.length === i.next_out
                ? i.output
                : i.output.subarray(0, i.next_out),
            );
        if (o !== Ai || 0 !== a) {
          if (o === Ui)
            return (
              (o = bi.inflateEnd(this.strm)),
              this.onEnd(o),
              (this.ended = !0),
              !0
            );
          if (0 === i.avail_in) break;
        }
      }
      return !0;
    }),
      (Ii.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (Ii.prototype.onEnd = function (e) {
        (e === Ai &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = ht(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg));
      }));
    var Zi = {
      Inflate: Ii,
      inflate: Di,
      inflateRaw: function (e, t) {
        return (((t = t || {}).raw = !0), Di(e, t));
      },
      ungzip: Di,
      constants: he,
    };
    const { Deflate: Oi, deflate: Li, deflateRaw: Pi, gzip: Fi } = Zt,
      { Inflate: Bi, inflate: Mi, inflateRaw: xi, ungzip: ji } = Zi;
    var Hi, Ci;
    function zi(e) {
      return function () {
        return new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        });
      };
    }
    function Vi(e) {
      const t = document.createElement("script");
      (t.setAttribute("tpInjected", ""),
        (t.src = e),
        (document.head || document.documentElement).appendChild(t),
        t.remove());
    }
    (!(function (e) {
      ((e.REGISTER = "register"),
        (e.PARTY_START = "party_start"),
        (e.PARTY_JOIN = "party_join"),
        (e.PARTY_END = "party_end"),
        (e.PARTY_SHARE = "party_share"),
        (e.PARTY_SCHEDULE = "party_schedule"));
    })(Hi || (Hi = {})),
      (function (e) {
        ((e.NETFLIX = "Netflix"),
          (e.HULU = "Hulu"),
          (e.DISNEY_PLUS = "Disney"),
          (e.DISNEY_PLUS_MENA = "DisneyMena"),
          (e.HBO_MAX = "HBOMax"),
          (e.MAX = "Max"),
          (e.YOUTUBE = "Youtube"),
          (e.YOUTUBE_TV = "YoutubeTV"),
          (e.AMAZON = "Amazon"),
          (e.CRUNCHYROLL = "Crunchyroll"),
          (e.ESPN = "ESPN+"),
          (e.PARAMOUNT = "Paramount+"),
          (e.FUNIMATION = "Funimation"),
          (e.HOTSTAR = "Hotstar"),
          (e.PEACOCK = "Peacock TV"),
          (e.STAR_PLUS = "Starplus"),
          (e.PLUTO_TV = "PlutoTV"),
          (e.APPLE_TV = "AppleTV"),
          (e.JIO_CINEMA = "JioCinema"),
          (e.TUBI_TV = "TubiTV"),
          (e.MUBI = "Mubi"),
          (e.STAN = "Stan"),
          (e.CRAVE = "Crave"),
          (e.SLING = "Sling"),
          (e.FUBO = "Fubo"),
          (e.VIKI = "Viki"),
          (e.SPOTIFY = "Spotify"),
          (e.ZEE5 = "Zee5"),
          (e.SONY_LIV = "SonyLiv"),
          (e.UNEXT = "U-Next"),
          (e.HULU_JP = "Hulu Japan"),
          (e.WILLOW = "Willow"),
          (e.CANALPLUS = "Canal+"),
          (e.FANCODE = "Fancode"),
          (e.SHAHID = "Shahid"),
          (e.SHUDDER = "Shudder"),
          (e.VIU = "Viu"),
          (e.VIDIO = "Vidio"),
          (e.FOX_ONE = "Fox One"),
          (e.TSN_PLUS = "TSN+"),
          (e.LEAGUE_PASS = "LeaguePass"),
          (e.DAZN = "DAZN"),
          (e.VIX = "Vix"),
          (e.MIGU = "Migu"),
          (e.F1_TV = "F1 TV"));
      })(Ci || (Ci = {})));
    class Ji {
      constructor() {
        ((this.S = this.A.bind(this)), (this.U = []), this.R());
      }
      addMessageListener(e) {
        this.U.push(e);
      }
      removeMessageListener(e) {
        this.U = this.U.filter((e) => {});
      }
      R() {
        b.addListener(this.S);
      }
      teardown() {
        ((this.U = []), b.removeListener(this.S));
      }
      A(e, t, i) {
        if (!this.N(e)) return !1;
        return !!this.T(e, t, i) || (i({}), !1);
      }
      N(e) {
        return e.target === n;
      }
      T(e, t, i) {
        let n = !1;
        return (
          this.U.forEach((r) => {
            r.onMessage(e, t, i) && (n = !0);
          }),
          n
        );
      }
    }
    var Ki, Yi;
    i(7588);
    !(function (e) {
      ((e.CREATE_SESSION = "createSession"),
        (e.SCHEDULE_SESSION = "scheduleSession"),
        (e.LOBBY_RELAY_SEND_CHAT = "lobbyRelaySendChat"),
        (e.LOBBY_RELAY_SET_TYPING = "lobbyRelaySetTyping"),
        (e.LOBBY_RELAY_BIND_JOIN = "lobbyRelayBindJoin"),
        (e.SELECT_PROVIDER = "selectProvider"),
        (e.REPORT_STREAM_POSITION = "reportStreamPosition"),
        (e.RE_INJECT = "reInject"),
        (e.GET_INIT_DATA = "getInitData"),
        (e.GET_INIT_USER_SETTINGS = "getInitUserSettings"),
        (e.IS_CONTENT_SCRIPT_READY = "isContentScriptReady"),
        (e.IS_VIDEO_READY = "isVideoReady"),
        (e.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE =
          "getCustomStartPartyButtonMessage"),
        (e.CHANGE_FIREBASE_PASSWORD = "changeFirebasePassword"),
        (e.SET_CHAT_VISIBLE = "setChatVisible"),
        (e.SET_USER_REACTIONS_DISABLED = "setUserReactionsDisabled"),
        (e.DISCONNECT = "teardown"),
        (e.CLOSE_POPUP = "closePopup"),
        (e.GET_SCHEDULED_EVENTS = "getScheduledEvents"),
        (e.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents"),
        (e.GOOGLE_SIGN_IN = "googleSignIn"),
        (e.EMAIL_SIGN_IN = "emailSignIn"),
        (e.FORGOT_PASSWORD = "forgotPassword"),
        (e.EMAIL_SIGN_UP = "emailSignUp"),
        (e.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn"),
        (e.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
        (e.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
        (e.SET_USER_STATUS = "SET_USER_STATUS"),
        (e.SIGN_IN_CREATE = "SIGN_IN_CREATE"),
        (e.REDIRECT_DATA_SET = "redirectDataSet"),
        (e.LOAD_REDIRECT_URL_FINISHED = "loadRedirectUrlFinished"),
        (e.RESET_PASSWORD = "resetPassword"));
    })(Ki || (Ki = {}));
    class Wi extends _ {
      constructor(e, t, i) {
        (super(e, t, i), (this.type = i));
      }
    }
    class Gi extends Wi {
      constructor(e, t, i = !1) {
        (super(e, t, Ki.GET_INIT_USER_SETTINGS),
          (this.shouldRefresh = i),
          (this.data = { shouldRefresh: i }));
      }
    }
    !(function (e) {
      ((e.NETFLIX = "netflix"),
        (e.HULU = "hulu"),
        (e.DISNEY_PLUS = "disney"),
        (e.STAR_PLUS = "starplus"),
        (e.AMAZON = "amazon"),
        (e.YOUTUBE = "youtube"),
        (e.HBO_MAX = "hbomax"),
        (e.MAX = "max"),
        (e.FUBO = "fubo"),
        (e.CRUNCHYROLL = "crunchyroll"),
        (e.PARAMOUNT = "paramount"),
        (e.PEACOCK = "peacock"),
        (e.HOTSTAR = "hotstar"),
        (e.DISNEY_PLUS_MENA = "disneymena"),
        (e.APPLE_TV = "appletv"),
        (e.PLUTO_TV = "plutotv"),
        (e.FUNIMATION = "funimation"),
        (e.TUBI_TV = "tubitv"),
        (e.JIO_CINEMA = "jiocinema"),
        (e.MUBI = "mubi"),
        (e.CRAVE = "crave"),
        (e.STAN = "stan"),
        (e.SONY_LIV = "sonyliv"),
        (e.ZEE5 = "zee5"),
        (e.HULU_JP = "hulujp"),
        (e.UNEXT = "unext"),
        (e.GLOBOPLAY = "globoplay"),
        (e.WILLOW = "willow"),
        (e.FANCODE = "fancode"),
        (e.CANALPLUS = "canalplus"),
        (e.SHAHID = "shahid"),
        (e.RTL = "rtl"),
        (e.ESPN = "espn"),
        (e.SLING = "sling"),
        (e.VIKI = "viki"),
        (e.SPOTIFY = "spotify"),
        (e.SHOWTIME = "showtime"),
        (e.SHUDDER = "shudder"),
        (e.AMC_PLUS = "amcplus"),
        (e.VIU = "viu"),
        (e.VIDIO = "vidio"),
        (e.FOX_ONE = "foxone"),
        (e.TSN_PLUS = "tsnplus"),
        (e.LEAGUE_PASS = "leaguepass"),
        (e.DAZN = "dazn"),
        (e.VIX = "vix"),
        (e.MIGU = "migu"),
        (e.F1_TV = "f1tv"));
    })(Yi || (Yi = {}));
    const $i = [
        {
          domains: [".netflix."],
          serverName: Yi.NETFLIX,
          name: Ci.NETFLIX,
          homepage: "https://netflix.com",
          premium: !1,
          iconUrl: "/img/service_logos/netflix.svg",
          popularity: 64184.49597,
        },
        {
          domains: [".disneyplus."],
          serverName: Yi.DISNEY_PLUS,
          name: Ci.DISNEY_PLUS,
          homepage: "https://disneyplus.com",
          premium: !1,
          iconUrl: "/img/service_logos/disney.svg",
          popularity: 7139.926064,
        },
        {
          domains: [".hbomax.", ".max."],
          serverName: Yi.HBO_MAX,
          name: Ci.HBO_MAX,
          homepage: "https://play.max.com",
          premium: !1,
          iconUrl: "/img/service_logos/max.svg",
          popularity: 8070.383044,
        },
        {
          domains: [".hulu."],
          serverName: Yi.HULU,
          name: Ci.HULU,
          homepage: "https://hulu.com",
          premium: !1,
          iconUrl: "/img/service_logos/hulu.svg",
          popularity: 1854.542783,
        },
        {
          domains: [".amazon.", ".primevideo."],
          serverName: Yi.AMAZON,
          name: Ci.AMAZON,
          homepage:
            "https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011",
          premium: !1,
          iconUrl: "/img/service_logos/prime.svg",
          popularity: 3003.498061,
        },
        {
          domains: [".youtube."],
          serverName: Yi.YOUTUBE,
          name: Ci.YOUTUBE,
          homepage: "https://youtube.com",
          premium: !1,
          iconUrl: "/img/service_logos/youtube.svg",
          popularity: 4812.704642,
        },
        {
          domains: [".paramountplus."],
          serverName: Yi.PARAMOUNT,
          name: Ci.PARAMOUNT,
          homepage: "https://www.paramountplus.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/paramount_banner.webp",
          iconUrl: "/img/service_logos/paramount.svg",
          popularity: 130.809939,
        },
        {
          domains: [".peacocktv."],
          serverName: Yi.PEACOCK,
          name: Ci.PEACOCK,
          homepage: "https://www.peacocktv.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/peacock_banner.webp",
          iconUrl: "/img/service_logos/peacock.svg",
          popularity: 193.353472,
        },
        {
          domains: [".crunchyroll."],
          serverName: Yi.CRUNCHYROLL,
          name: Ci.CRUNCHYROLL,
          homepage: "https://beta.crunchyroll.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/crunch_banner.webp",
          iconUrl: "/img/service_logos/crunchyroll.svg",
          popularity: 634.02917,
        },
        {
          domains: [".fubo.tv"],
          serverName: Yi.FUBO,
          name: Ci.FUBO,
          homepage: "https://www.fubo.tv/",
          premium: !0,
          notificationBannerImage: "img/service_banners/fubo_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/fubo.svg",
          popularity: 0,
        },
        {
          domains: [".espn."],
          serverName: Yi.ESPN,
          name: Ci.ESPN,
          homepage: "https://plus.espn.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/espn_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/espnplus.svg",
          popularity: 0,
        },
        {
          domains: [".hotstar."],
          serverName: Yi.HOTSTAR,
          name: Ci.HOTSTAR,
          homepage: "https://www.hotstar.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/hotstar_banner.webp",
          iconUrl: "/img/service_logos/jiohotstar.svg",
          popularity: 52.29375,
        },
        {
          domains: ["tv.apple."],
          serverName: Yi.APPLE_TV,
          name: Ci.APPLE_TV,
          homepage: "https://tv.apple.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/apple_tv_banner.webp",
          iconUrl: "/img/service_logos/appletv.svg",
          popularity: 13.574957,
        },
        {
          domains: ["tubitv.com"],
          serverName: Yi.TUBI_TV,
          name: Ci.TUBI_TV,
          homepage: "https://tubitv.com",
          premium: !1,
          notificationBannerImage: "img/service_banners/tubi_tv_banner.webp",
          iconUrl: "/img/service_logos/tubi.svg",
          popularity: 223.183048,
        },
        {
          domains: [".sling."],
          serverName: Yi.SLING,
          name: Ci.SLING,
          homepage: "https://watch.sling.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/sling_banner.webp",
          iconUrl: "/img/service_logos/sling.svg",
          popularity: 0,
        },
        {
          domains: ["pluto."],
          serverName: Yi.PLUTO_TV,
          name: Ci.PLUTO_TV,
          homepage: "https://www.pluto.tv",
          premium: !1,
          notificationBannerImage: "img/service_banners/pluto_tv_banner.webp",
          iconUrl: "/img/service_logos/pluto.svg",
          popularity: 0,
        },
        {
          domains: [".tsn."],
          serverName: Yi.TSN_PLUS,
          name: Ci.TSN_PLUS,
          homepage: "https://www.tsn.ca/video/",
          premium: !0,
          notificationBannerImage: "img/tsn_plus_banner.webp",
          iconUrl: "/img/service_logos/tsnplus.svg",
          popularity: 0,
        },
        {
          domains: ["mubi."],
          serverName: Yi.MUBI,
          name: Ci.MUBI,
          homepage: "https://mubi.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/mubi_banner.webp",
          iconUrl: "/img/service_logos/mubi.svg",
          popularity: 0,
        },
        {
          domains: ["stan."],
          serverName: Yi.STAN,
          name: Ci.STAN,
          homepage: "https://play.stan.com.au/",
          premium: !0,
          notificationBannerImage: "img/service_banners/stan_banner.webp",
          iconUrl: "/img/service_logos/stan.svg",
          popularity: 0,
        },
        {
          domains: [".crave."],
          serverName: Yi.CRAVE,
          name: Ci.CRAVE,
          homepage: "https://crave.ca",
          premium: !0,
          notificationBannerImage: "img/service_banners/crave_banner.webp",
          iconUrl: "/img/service_logos/crave.svg",
          popularity: 0,
        },
        {
          domains: [".viki."],
          serverName: Yi.VIKI,
          name: Ci.VIKI,
          homepage: "https://www.viki.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/viki_banner.webp",
          iconUrl: "/img/service_logos/viki.svg",
          popularity: 0,
        },
        {
          domains: [".spotify."],
          serverName: Yi.SPOTIFY,
          name: Ci.SPOTIFY,
          homepage: "https://open.spotify.com/",
          premium: !1,
          iconUrl: "/img/service_logos/spotify.svg",
          popularity: 0,
        },
        {
          domains: [".zee5."],
          serverName: Yi.ZEE5,
          name: Ci.ZEE5,
          homepage: "https://www.zee5.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/zee5_banner.webp",
          iconUrl: "/img/service_logos/zee5.svg",
          popularity: 0,
        },
        {
          domains: [".sonyliv."],
          serverName: Yi.SONY_LIV,
          name: Ci.SONY_LIV,
          homepage: "https://www.sonyliv.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/sonyliv_banner.webp",
          iconUrl: "/img/service_logos/sonyliv.svg",
          popularity: 0,
        },
        {
          domains: [".shudder."],
          serverName: Yi.SHUDDER,
          name: Ci.SHUDDER,
          homepage: "https://watch.shudder.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/shudder_banner.webp",
          iconUrl: "img/service_logos/shudder.svg",
          popularity: 0,
        },
        {
          domains: [".fox."],
          serverName: Yi.FOX_ONE,
          name: Ci.FOX_ONE,
          homepage: "https://www.fox.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/foxone_banner.webp",
          iconUrl: "img/service_logos/foxone.svg",
          popularity: 0,
        },
        {
          domains: [".willow."],
          serverName: Yi.WILLOW,
          name: Ci.WILLOW,
          homepage: "https://www.willow.tv/",
          premium: !0,
          iconUrl: "/img/service_logos/willow.svg",
          notificationBannerImage: "img/service_banners/willow_banner.webp",
          popularity: 0,
        },
        {
          domains: [".fancode."],
          serverName: Yi.FANCODE,
          name: Ci.FANCODE,
          homepage: "https://www.fancode.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/fancode_banner.webp",
          iconUrl: "/img/service_logos/fancode.svg",
          popularity: 0,
        },
        {
          domains: [".canalplus."],
          serverName: Yi.CANALPLUS,
          name: Ci.CANALPLUS,
          homepage: "https://www.canalplus.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/canalplus_banner.webp",
          iconUrl: "/img/service_logos/canalplus.svg",
          popularity: 0,
          disabled: !1,
        },
        {
          domains: ["shahid."],
          serverName: Yi.SHAHID,
          name: Ci.SHAHID,
          homepage: "https://shahid.mbc.net/",
          premium: !0,
          notificationBannerImage: "img/service_banners/shahid_banner.webp",
          iconUrl: "/img/service_logos/shahid.svg",
          popularity: 0,
        },
        {
          domains: [".viu."],
          serverName: Yi.VIU,
          name: Ci.VIU,
          homepage: "https://www.viu.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/viu_banner.webp",
          iconUrl: "/img/service_logos/viu.svg",
          popularity: 0,
        },
        {
          domains: [".vidio."],
          serverName: Yi.VIDIO,
          name: Ci.VIDIO,
          homepage: "https://www.vidio.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/vidio_banner.webp",
          iconUrl: "/img/service_logos/vidio.png",
          popularity: 0,
        },
        {
          domains: [".nba."],
          serverName: Yi.LEAGUE_PASS,
          name: Ci.LEAGUE_PASS,
          homepage: "https://nba.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/leaguepass_banner.webp",
          sports: ["nba"],
          iconUrl: "/img/service_logos/leaguepass.svg",
          popularity: 0,
        },
        {
          domains: ["vix.com"],
          serverName: Yi.VIX,
          name: Ci.VIX,
          homepage: "https://vix.com/",
          premium: !0,
          notificationBannerImage: "img/service_banners/vix_banner.webp",
          iconUrl: "/img/service_logos/vix.svg",
          popularity: 0,
        },
        {
          domains: [".unext."],
          serverName: Yi.UNEXT,
          name: Ci.UNEXT,
          homepage: "https://video.unext.jp/",
          premium: !0,
          notificationBannerImage: "img/service_banners/unext_banner.webp",
          iconUrl: "/img/service_logos/unext.svg",
          popularity: 0,
        },
        {
          domains: [".hulu.jp"],
          serverName: Yi.HULU_JP,
          name: Ci.HULU_JP,
          homepage: "https://www.hulu.jp/",
          premium: !0,
          notificationBannerImage: "img/service_banners/hulujp_banner.webp",
          iconUrl: "/img/service_logos/hulujp.svg",
          popularity: 0,
        },
        {
          domains: [".showtime."],
          serverName: Yi.SHOWTIME,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".amcplus."],
          serverName: Yi.AMC_PLUS,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".funimation."],
          serverName: Yi.FUNIMATION,
          name: Ci.FUNIMATION,
          disabled: !0,
          premium: !0,
          iconUrl: "",
          popularity: 0,
        },
        {
          domains: [".starplus."],
          serverName: Yi.STAR_PLUS,
          name: Ci.STAR_PLUS,
          homepage: "https://www.starplus.com/",
          premium: !0,
          disabled: !0,
          notificationBannerImage: "img/service_banners/starplus_banner.webp",
          iconUrl: "/img/service_logos/starplus.svg",
          popularity: 0,
        },
        {
          domains: [".jiocinema."],
          serverName: Yi.JIO_CINEMA,
          name: Ci.JIO_CINEMA,
          homepage: "https://www.jiocinema.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/jiocinema_banner.webp",
          disabled: !0,
          iconUrl: "/img/service_logos/jiocinema.svg",
          popularity: 0,
        },
        {
          domains: [".dazn."],
          serverName: Yi.DAZN,
          name: Ci.DAZN,
          homepage: "https://dazn.com",
          premium: !0,
          iconUrl: "/img/service_logos/dazn.svg",
          popularity: 0,
          notificationBannerImage: "img/service_banners/dazn_banner.webp",
        },
        {
          domains: [".miguvideo."],
          serverName: Yi.MIGU,
          name: Ci.MIGU,
          homepage: "https://miguvideo.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/migu_banner.webp",
          iconUrl: "/img/service_logos/migu.svg",
          popularity: 0,
        },
        {
          domains: ["f1tv.formula1.com"],
          serverName: Yi.F1_TV,
          name: Ci.F1_TV,
          homepage: "https://f1tv.formula1.com",
          premium: !0,
          notificationBannerImage: "img/service_banners/f1tv_banner.webp",
          iconUrl: "/img/service_logos/f1tv.svg",
          popularity: 0,
        },
      ].filter((e) => !e.disabled),
      Xi =
        ($i.flatMap((e) => e.domains),
        $i.filter((e) => {
          var t;
          return (
            e.notificationBannerImage ||
            (null === (t = e.sports) || void 0 === t ? void 0 : t.length)
          );
        })),
      Qi =
        (Xi.flatMap((e) => e.domains),
        $i.filter((e) => e.premium).map((e) => e.serverName));
    var qi = function (e, t, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
    const en = new (class {
      getRedirectDataForTabAsync(e) {
        return qi(this, void 0, void 0, function* () {
          const t = (yield a.getItemsAsync([v])).redirectDataMap,
            i = this.I(e);
          if (t && t[i]) {
            const e = t[i];
            if (this.D(e)) return e;
          }
        });
      }
      deleteRedirectDataForTabAsync(e) {
        return qi(this, void 0, void 0, function* () {
          const t = (yield a.getItemsAsync([v])).redirectDataMap,
            i = this.I(e);
          (t && t[i] && delete t[i], yield u.setItemsAsync({ [v]: t }));
        });
      }
      I(e) {
        return e;
      }
      storeRedirectDataForTabAsync(e, t) {
        return qi(this, void 0, void 0, function* () {
          console.log("store data for tab " + e);
          const i = this.I(t);
          let n = yield a.getItemsAsync([v]);
          ((n[i] = e), (n = this.Z(n)), yield u.setItemsAsync({ [v]: n }));
        });
      }
      Z(e) {
        return (function (e, t) {
          const i = {};
          let n;
          for (n in e) e.hasOwnProperty(n) && t(e[n]) && (i[n] = e[n]);
          return i;
        })(e, this.D);
      }
      D(e) {
        const t = e.date;
        return (
          void 0 !== t &&
          "number" == typeof t &&
          t <= Date.now() &&
          Date.now() - t < 108e5
        );
      }
    })();
    Object.freeze(en);
    const tn = en;
    class nn extends y {
      constructor(e, t) {
        super(e, t, k.GET_PARTY_STATUS);
      }
    }
    var rn;
    !(function (e) {
      ((e[(e.PARTY_STATE_NONE = 0)] = "PARTY_STATE_NONE"),
        (e[(e.PARTY_STATE_IN_SESSION = 1)] = "PARTY_STATE_IN_SESSION"));
    })(rn || (rn = {}));
    class on extends Wi {
      constructor(e, t) {
        super(e, t, Ki.IS_CONTENT_SCRIPT_READY);
      }
    }
    var sn = function (e, t, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
    class an {
      constructor(e, t, i = !0) {
        ((this.S = new Ji()),
          this.S.addMessageListener(this),
          (this.serviceName = e),
          (this.colloquialServiceName = t),
          this.O(),
          this.L(),
          i && this.P());
      }
      L() {
        const i = () =>
          sn(this, void 0, void 0, function* () {
            var i;
            try {
              const n = yield b.u(new nn(t, e));
              sessionStorage.setItem(
                "telepartyPartyStatus",
                JSON.stringify({
                  partyState:
                    null !== (i = null == n ? void 0 : n.partyState) &&
                    void 0 !== i
                      ? i
                      : rn.PARTY_STATE_NONE,
                  timestamp: Date.now(),
                }),
              );
            } catch (e) {}
          });
        (i(), setInterval(i, 1e3));
      }
      isLoggingIn() {
        return !0;
      }
      O() {
        return sn(this, void 0, void 0, function* () {
          const i = yield b.u(new Gi(t, e)),
            n = Qi.includes(this.serviceName),
            r = (null == i ? void 0 : i.has_premium) || !1;
          this.F(n, r);
        });
      }
      F(e, t) {
        (sessionStorage.setItem(
          "telepartyPremiumConfig",
          JSON.stringify({
            serviceIsPremium: e,
            serviceName: this.serviceName,
            userHasPremium: t,
            timestamp: Date.now(),
          }),
        ),
          Vi(
            chrome.runtime.getURL(
              `browse_scripts/${this.serviceName}/${this.serviceName}_browse_injected_bundled.js`,
            ),
          ));
      }
      P() {
        var e, t, i;
        return sn(this, void 0, void 0, function* () {
          const n = yield tn.getRedirectDataForTabAsync(
            null !==
              (t =
                null === (e = window.teleparty) || void 0 === e
                  ? void 0
                  : e.tabId) && void 0 !== t
              ? t
              : 0,
          );
          if (!(null == n ? void 0 : n.partyUrl)) return;
          const r = JSON.parse(
            null !== (i = localStorage.getItem("autoRejoinPartyData")) &&
              void 0 !== i
              ? i
              : "{}",
          );
          (r.partyUrl != n.partyUrl &&
            (console.log("New party detected. Clearing old rejoin data"),
            console.log(r, n),
            localStorage.setItem(
              "autoRejoinPartyData",
              JSON.stringify({
                partyUrl: n.partyUrl,
                firstJoinAttempt: Date.now(),
                numRetries: 0,
              }),
            )),
            yield zi(2e3)(),
            this.B());
        });
      }
      M() {
        (localStorage.removeItem("autoRejoinPartyData"),
          this.j && clearTimeout(this.j));
      }
      H() {
        var i;
        return sn(this, void 0, void 0, function* () {
          const n = yield b.u(new nn(t, e));
          return (
            console.log("CUR PARTY: ", n),
            (null === (i = window.teleparty) || void 0 === i
              ? void 0
              : i.contentScriptInjected) &&
              (null == n ? void 0 : n.partyState) === rn.PARTY_STATE_IN_SESSION
          );
        });
      }
      C(e) {
        var t, i, n, r;
        try {
          if (window.location.hostname.includes("disneyplus")) {
            const t = window.location.pathname.split("/"),
              i = t[t.length - 1],
              n = e.partyUrl.split("/");
            return n[n.length - 1] !== i;
          }
          if (window.location.hostname.includes("primevideo")) {
            const t = window.location.href.split("/").pop();
            return e.partyUrl.split("/").pop() !== t;
          }
          if (window.location.hostname.includes("apple")) {
            const o =
              null ===
                (i =
                  null === (t = window.location.pathname.split("/").pop()) ||
                  void 0 === t
                    ? void 0
                    : t.split("?action=play")) || void 0 === i
                ? void 0
                : i[0];
            return (
              (null ===
                (r =
                  null === (n = e.partyUrl.split("/").pop()) || void 0 === n
                    ? void 0
                    : n.split("?action=play")) || void 0 === r
                ? void 0
                : r[0]) !== o
            );
          }
          if (window.location.hostname.includes("tubitv")) {
            const t = window.location.pathname.split("/").slice(0, 3).join("/");
            return e.partyUrl.split("/").slice(0, 3).join("/") !== t;
          }
          return (
            !window.location.hostname.includes("espn") &&
            !window.location.hostname.includes("nba.com") &&
            window.location.href !== e.partyUrl &&
            (console.log(
              "BrowseScript: Invalid party URL",
              window.location.href,
              e.partyUrl,
            ),
            !0)
          );
        } catch (e) {
          return !1;
        }
      }
      V(e) {
        var i, r;
        return sn(this, void 0, void 0, function* () {
          if (yield this.H()) return;
          console.log("Rejoining party");
          const o = JSON.parse(
              null !== (i = localStorage.getItem("autoRejoinPartyData")) &&
                void 0 !== i
                ? i
                : "{}",
            ),
            s = (null !== (r = o.numRetries) && void 0 !== r ? r : 0) + 1;
          (console.log(o, s),
            s >= 3 ||
              (localStorage.setItem(
                "autoRejoinPartyData",
                JSON.stringify(
                  Object.assign(Object.assign({}, o), { numRetries: s }),
                ),
              ),
              this.C(e) &&
                (console.log(
                  `Redirecting to ${e.partyUrl} from ${window.location.href}`,
                ),
                (window.location.href = e.partyUrl)),
              b.u(new on(t, n))));
        });
      }
      B() {
        var e;
        const t = JSON.parse(
          null !== (e = localStorage.getItem("autoRejoinPartyData")) &&
            void 0 !== e
            ? e
            : "{}",
        );
        this.j = window.setTimeout(
          () =>
            sn(this, void 0, void 0, function* () {
              var e;
              (console.log("Checking if party has started"),
                console.log(
                  null === (e = window.teleparty) || void 0 === e
                    ? void 0
                    : e.contentScriptInjected,
                  t.partyUrl,
                  this.isLoggingIn(),
                ));
              (yield this.H())
                ? this.M()
                : t.partyUrl &&
                  !this.isLoggingIn() &&
                  (yield this.V(t), this.M());
            }),
          2e3,
        );
      }
      onMessage(e, t, i) {
        return !0;
      }
    }
    class cn extends an {
      constructor() {
        super("netflix", Ci.NETFLIX);
      }
      isLoggingIn() {
        if (window.location.href.includes("/login")) return !0;
        const e = document.querySelector(
          "button[data-uia='homepage-link-button']",
        );
        if ("JOIN NOW" === (null == e ? void 0 : e.textContent)) return !0;
        const t = document.querySelector("a[data-uia='header-login-link']");
        return "Sign In" === (null == t ? void 0 : t.textContent);
      }
    }
    var ln = function (e, t, i, n) {
      return new (i || (i = Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
    if (
      (function () {
        var e;
        return (
          !window.teleparty ||
          !(null === (e = window.teleparty) || void 0 === e
            ? void 0
            : e.browseScriptInjected)
        );
      })() &&
      window === top
    ) {
      (window.teleparty || (window.teleparty = {}),
        (window.teleparty.browseScriptInjected = !0),
        new cn());
      {
        const t = () =>
          ln(void 0, void 0, void 0, function* () {
            const e = (yield a.getItemsAsync(["NDL"])).NDL;
            (null == e || Date.now() - e > 121e7) &&
              window.postMessage(
                { type: "tpLoadNetflixData", lastFetch: e },
                "*",
              );
          });
        window.addEventListener("message", (i) => {
          if (
            ("tpNetflixBrowseReady" === i.data.type && t(),
            "tpSetNetflixData" === i.data.type)
          ) {
            const t = i.data.data,
              r = t.deviceList,
              o = [];
            r.forEach((e) => {
              const t = new Date(e.lastWatched).getTime();
              o.push(
                Object.assign(Object.assign({}, e), {
                  lastWatchedTimeStamp: t,
                }),
              );
            });
            const s = new Map(),
              a = new Set();
            t.watchHistoryList.forEach((e) => {
              e.watchHistory.forEach((e) => {
                let t = -1,
                  i = !1;
                for (let n = 0; n < o.length; n++) {
                  const r = o[n];
                  Math.abs(e.date - r.lastWatchedTimeStamp) < 6e4 &&
                    (-1 === t ? (t = n) : (i = !0));
                }
                if (-1 !== t && !i) {
                  const i = o[t].deviceDescription;
                  s.has(e.deviceType) && s.get(e.deviceType) !== i
                    ? (a.add(e.deviceType), s.delete(e.deviceType))
                    : a.has(e.deviceType) ||
                      s.set(e.deviceType, o[t].deviceDescription);
                }
              });
            });
            const c = { name: "netflix_device_list", data: { device_json: r } };
            b.u(new A(n, e, c));
            const l = t.watchHistoryList;
            let f = 0;
            l.forEach((e) => {
              (e.watchHistory.forEach((e) => {
                e.deviceDescription = s.get(e.deviceType);
              }),
                (f = Math.max(f, e.watchHistory.length)));
            });
            const m = new y(n, e, k.LOAD_NETFLIX_DATA);
            ((m.data = l), b.u(m), u.setItemsAsync({ NDL: Date.now() }));
          }
        });
      }
    }
  })();
})();
