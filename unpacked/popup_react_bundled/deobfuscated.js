/*******************************************************
* Copyright (C) 2018-2024 WP Interactive Media, Inc. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
*******************************************************/
(() => {
  "use strict";

  var n = {
    540(n) {
      n.exports = function (n) {
        var e = document.createElement("style");
        n.setAttributes(e, n.attributes);
        n.insert(e, n.options);
        return e;
      };
    },
    961(n, e, t) {
      (function n() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
          } catch (n) {
            console.error(n);
          }
        }
      })();
      n.exports = t(2551);
    },
    1011(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".KleE7n7iqvwMTvnBHMG1 {\n    position: fixed;\n    margin-top: 8px;\n    right: 16px;\n    transform: scale(0.9);\n    opacity: 0;\n    pointer-events: none;\n    transition: all var(--transition-time);\n    border-radius: 8px;\n    border: 1px solid var(--black-15);\n    overflow: hidden;\n    z-index: 100000;\n}\n\n.KleE7n7iqvwMTvnBHMG1.as5kDQNcjC66VHAQwcqB {\n    transform: scale(1);\n    opacity: 1;\n    pointer-events: unset;\n}\n\n.c4OnVvC5unVt_YkGoWVh {\n    right: unset;\n    left: 16px;\n    top: 56px;\n}\n", ""]);
      o.locals = {
        contextMenu: "KleE7n7iqvwMTvnBHMG1",
        active: "as5kDQNcjC66VHAQwcqB",
        activityContextMenu: "c4OnVvC5unVt_YkGoWVh"
      };
      const l = o;
    },
    1020(n, e, t) {
      var r = t(6540);
      var i = Symbol.for("react.element");
      var u = Symbol.for("react.fragment");
      var o = Object.prototype.hasOwnProperty;
      var l = r.t.ReactCurrentOwner;
      var a = {
        key: true,
        ref: true,
        u: true,
        l: true
      };
      function s(n, e, t) {
        var r;
        var u = {};
        var s = null;
        var c = null;
        if (t !== undefined) {
          s = "" + t;
        }
        if (e.key !== undefined) {
          s = "" + e.key;
        }
        if (e.ref !== undefined) {
          c = e.ref;
        }
        for (r in e) {
          if (o.call(e, r) && !a.hasOwnProperty(r)) {
            u[r] = e[r];
          }
        }
        if (n && n.defaultProps) {
          for (r in e = n.defaultProps) {
            if (u[r] === undefined) {
              u[r] = e[r];
            }
          }
        }
        return {
          $$typeof: i,
          type: n,
          key: s,
          ref: c,
          props: u,
          h: l.current
        };
      }
      e.Fragment = u;
      e.jsx = s;
      e.jsxs = s;
    },
    1113(n) {
      n.exports = function (n, e) {
        if (e.styleSheet) {
          e.styleSheet.cssText = n;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(n));
        }
      };
    },
    1133(n, e, t) {
      var r = this && this.D || function (n) {
        if (n && n.p) {
          return n;
        } else {
          return {
            default: n
          };
        }
      };
      Object.defineProperty(e, "p", {
        value: true
      });
      e.default = function (n, e) {
        let t = null;
        if (!n || typeof n != "string") {
          return t;
        }
        const r = (0, i.default)(n);
        const u = typeof e == "function";
        r.forEach(n => {
          if (n.type !== "declaration") {
            return;
          }
          const {
            property: r,
            value: i
          } = n;
          if (u) {
            e(r, i, n);
          } else if (i) {
            t = t || {};
            t[r] = i;
          }
        });
        return t;
      };
      const i = r(t(5077));
    },
    1601(n) {
      n.exports = function (n) {
        return n[1];
      };
    },
    1811(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".ckR0FRSC5_YKidptL937 {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    font-size: 13px;\n    padding: 11px 0;\n    border-radius: 8px;\n    cursor: pointer;\n    margin: 10px 0;\n    transition: all var(--transition-time);\n    color: var(--white-5);\n\n    /* disable default button styles */\n    border: none;\n    background: none;\n    -webkit-appearance: none;\n    appearance: none;\n}\n.ckR0FRSC5_YKidptL937:hover {\n    filter: brightness(1.15);\n}\n.ckR0FRSC5_YKidptL937:last-child {\n    margin-bottom: 0;\n}\n.ckR0FRSC5_YKidptL937.kyZ65lhFTf_kLCrwiBgx {\n    background-image: linear-gradient(91.19deg, #e34248 0%, #9e55a0 100%);\n}\n.ckR0FRSC5_YKidptL937.YUTrmeIoGbMZuHFa1S_F {\n    background-color: #282828;\n    color: var(--white-25);\n}\n.ckR0FRSC5_YKidptL937.IoArfQEBsecKH3AcrcCN {\n    margin: 0;\n}\n.ckR0FRSC5_YKidptL937.hak2NQkLkG7z6CGt_lQA {\n    color: gold;\n    font-weight: bold;\n}\n.ckR0FRSC5_YKidptL937.QPD2cwuIsoZUZ7irHT8n {\n    --border-width: 1px;\n    border: double var(--border-width) transparent;\n    border-radius: 2px;\n    background-image:\n        linear-gradient(var(--base-black), var(--base-black)), linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    padding: 0;\n    line-height: calc(40px - calc(2 * var(--border-width)));\n    height: calc(36px - calc(2 * var(--border-width)));\n    width: calc(100% - calc(2 * var(--border-width)));\n    transition: background-color var(--transition-time);\n    position: relative;\n}\n.ckR0FRSC5_YKidptL937.QPD2cwuIsoZUZ7irHT8n:before {\n    opacity: 0;\n    position: absolute;\n    content: \" \";\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(91.19deg, #e34248 0%, #9e55a0 100%);\n    z-index: -1; /*background behind text*/\n    transition: opacity var(--transition-time);\n}\n.ckR0FRSC5_YKidptL937.QPD2cwuIsoZUZ7irHT8n:hover:before {\n    opacity: 1;\n}\n.ckR0FRSC5_YKidptL937.aZKwnLejNKY8iQXpvF3T,\n.ckR0FRSC5_YKidptL937.cdfBNrH52urISsGT0W7N {\n    --border-width: 1px;\n    border: var(--border-width) solid var(--base-red);\n    color: var(--base-red);\n    padding: 0;\n    line-height: calc(40px - calc(2 * var(--border-width)));\n    width: calc(100% - calc(2 * var(--border-width)));\n}\n.ckR0FRSC5_YKidptL937.aZKwnLejNKY8iQXpvF3T:hover,\n.ckR0FRSC5_YKidptL937.cdfBNrH52urISsGT0W7N:hover {\n    background-color: var(--base-red);\n    color: var(--white-5);\n}\n.ckR0FRSC5_YKidptL937.cdfBNrH52urISsGT0W7N {\n    margin-top: 0;\n}\n\n.ckR0FRSC5_YKidptL937.UF7dMCXkHSlZen4BVS3C {\n    background-color: gold;\n    border: 1px var(--black-10) solid;\n    color: var(--black-10);\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n    font-weight: bold;\n    display: inline-flex;\n    justify-content: center;\n    width: 167px;\n    padding: 8px 8px;\n    margin-top: 0;\n}\n\n.ckR0FRSC5_YKidptL937.hSfm85cbG9Q5jBksiFqi {\n    background-color: var(--black-25);\n    border: 1px #3a3a3a solid;\n    color: var(--white-15);\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: 90px;\n    padding: 11px 8px;\n    margin-top: 0;\n}\n.ckR0FRSC5_YKidptL937.tzAnjVjJ8l_arMEEH0tN {\n    background-color: var(--black-25);\n    border: 1px var(--black-10) solid;\n    color: var(--white-25);\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    display: inline-flex;\n    justify-content: flex-start;\n    width: 167px;\n    padding: 11px 8px;\n    margin-top: 0;\n}\n.ckR0FRSC5_YKidptL937.tzAnjVjJ8l_arMEEH0tN > img {\n    margin-right: 24px;\n    width: 18px;\n}\n.ckR0FRSC5_YKidptL937.tzAnjVjJ8l_arMEEH0tN:hover {\n    filter: none;\n}\n.ckR0FRSC5_YKidptL937.yT5bt1QvlYaZGAYPrzkA {\n    padding: 0;\n    margin: 0;\n    width: 100px;\n    font-weight: 400;\n    line-height: 19px;\n    background-color: var(--base-blue);\n}\n\n.H0jvkehmfLXZ0OtYOSAe {\n    height: 47px;\n    width: 96px;\n    margin-top: 0px;\n    position: relative;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    overflow: hidden;\n    cursor: pointer;\n    box-sizing: border-box;\n}\n\n.H0jvkehmfLXZ0OtYOSAe:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(28, 231, 131, 0.35);\n}\n\n.AZaewmmY4jjA0M_dapWj {\n    border: 1.5px solid #fbc55a6e;\n    transition: var(--transition-time, 0.2s);\n}\n\n.AZaewmmY4jjA0M_dapWj:hover {\n    border: 1.5px solid #fbc45a;\n}\n\n.Gntp9KpyUuvuC_Qaw14d::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    padding: 1.5px;\n    background: linear-gradient(91.19deg, #e34248 0%, #9e55a0 100%);\n    -webkit-mask:\n        linear-gradient(#fff 0 0) content-box,\n        linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    transition: opacity var(--transition-time, 0.2s);\n    z-index: 0;\n    opacity: 0.5;\n}\n\n.Gntp9KpyUuvuC_Qaw14d:hover::before,\n.Gntp9KpyUuvuC_Qaw14d:focus-visible::before {\n    opacity: 1;\n}\n\n.H0jvkehmfLXZ0OtYOSAe > * {\n    position: relative;\n    z-index: 1;\n}\n\n.H0jvkehmfLXZ0OtYOSAe img {\n    max-width: 70px;\n    max-height: 30px;\n    object-fit: contain;\n    display: block;\n}\n\n.cM81TXhMHRuIR636t3d3 {\n    border: 1.5px solid #787878; /* gray border */\n    cursor: not-allowed; /* indicate disabled */\n}\n\n.cM81TXhMHRuIR636t3d3 img {\n    filter: grayscale(100%) brightness(0.7); /* grayed out logo */\n    opacity: 0.6;\n}\n", ""]);
      o.locals = {
        button: "ckR0FRSC5_YKidptL937",
        gradient: "kyZ65lhFTf_kLCrwiBgx",
        gradientLocked: "YUTrmeIoGbMZuHFa1S_F",
        noMargins: "IoArfQEBsecKH3AcrcCN",
        premium: "hak2NQkLkG7z6CGt_lQA",
        outline: "QPD2cwuIsoZUZ7irHT8n",
        redOutline: "aZKwnLejNKY8iQXpvF3T",
        disconnect: "cdfBNrH52urISsGT0W7N",
        upgrade: "UF7dMCXkHSlZen4BVS3C",
        signIn: "hSfm85cbG9Q5jBksiFqi",
        google: "tzAnjVjJ8l_arMEEH0tN",
        reschedule: "yT5bt1QvlYaZGAYPrzkA",
        tpTile: "H0jvkehmfLXZ0OtYOSAe",
        tpTilePremium: "AZaewmmY4jjA0M_dapWj",
        tpTileNonPremium: "Gntp9KpyUuvuC_Qaw14d",
        tpTileUnavailable: "cM81TXhMHRuIR636t3d3"
      };
      const l = o;
    },
    1869(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".C9g_UPK0CdNO8l_4jrac {\n    padding: 8px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* height: 36px; */\n    overflow: hidden;\n    background-color: var(--black-25);\n}\n\n.Sx2gwQU7CAo86dVhfWz7 {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n}\n\n.GmraolWigWUwQcdXYvbi {\n    margin-right: 16px;\n}\n\n.RB1W6pbsDnFHcZBqx7NI {\n    background-color: 11ee1e;\n    border: 1px solid var(--black-5);\n}\n\n.B6jlFG2GJJMUHvLh8g_q {\n    display: inline-block;\n    height: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.Jv98gs6IBUXBXBxWWsFK {\n    cursor: default;\n    color: gold;\n    font-weight: bold;\n}\n.Jv98gs6IBUXBXBxWWsFK:hover span {\n    display: flex !important;\n}\n\n.Jv98gs6IBUXBXBxWWsFK span {\n    cursor: default;\n    font-size: 12px;\n    border-radius: 4px;\n    position: absolute;\n    display: flex;\n    text-align: center;\n    color: var(--white-10) !important;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 30px;\n    background-color: var(--black-20);\n    display: none;\n}\n\n.THwrcGgG60ND9nO56la9 {\n    width: 20px;\n    height: 20px;\n    margin-left: 5px;\n    postition: relative;\n    top: 2px;\n    filter: sepia(13%) saturate(4368%) hue-rotate(359deg) brightness(105%) contrast(105%);\n}\n\n.SgIm52Fjzr0KgSjnw07c {\n    width: 40px;\n    height: 40px;\n    border-radius: 200px;\n    border: 1px solid var(--black-5);\n    background-color: var(--black-35);\n    cursor: pointer;\n}\n\n.fhsp95CSLvDT7Ecais4z {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    border: 1px solid var(--black-5);\n    background-color: var(--black-35);\n    cursor: pointer;\n}\n\n.n5zYvQSDHuwPLcDcOCJP {\n    width: \"100%\";\n    max-height: 160px;\n    overflow-y: scroll;\n    margin-bottom: 2px;\n    margin-top: 4px;\n    border: 1px solid var(--black-15);\n    background-color: var(--black-25);\n}\n\n.BnUHg1WBRBsdqnx6IRP9 {\n    visibility: hidden;\n    background: rgba(40, 40, 40, 0.5);\n    -webkit-backdrop-filter: blur(4px);\n    border-radius: 4px;\n    color: white !important;\n    font-size: 10px !important;\n    text-align: center;\n    vertical-align: center;\n    padding: 5px 0;\n    border-radius: 4px;\n    position: absolute;\n    right: calc(105% + 5px);\n    top: -10px;\n    padding-left: 4px;\n    padding-right: 4px;\n    align-items: center;\n    justify-content: center;\n    display: inline-flex;\n}\n\n.cW2b9aEUzNChFbNzR6wV {\n    z-index: 999;\n    right: 0px;\n    top: calc(100%);\n}\n.mIXFzIjztyMF3NtGYnT3 {\n    position: relative;\n    cursor: pointer;\n}\n\n.mIXFzIjztyMF3NtGYnT3:hover .BnUHg1WBRBsdqnx6IRP9 {\n    visibility: visible;\n}\n\n.l4ucp1aTR5yJ86iMluf7 {\n    padding: 8px;\n    width: 24px;\n    height: 24px;\n}\n\n.sW3EMFOUxMH_ThE4um8g {\n    color: var(--base-white);\n    width: 18px;\n    height: 18px;\n    transform: scale(1);\n    opacity: 0.5;\n    transition: 0.3s ease;\n}\n\n.sW3EMFOUxMH_ThE4um8g:hover {\n    color: var(--base-red);\n    opacity: 1;\n    transform: scale(1.05);\n}\n\n.S42dKoEfEbABLPv9TVqB {\n    display: flex;\n    flex-direction: column;\n    margin-left: 8px;\n    margin-right: 8px;\n    text-overflow: ellipsis;\n    width: calc(var(--popup-width) - 100px);\n}\n\n.S42dKoEfEbABLPv9TVqB > *:first-child {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 100%;\n}\n\n.S42dKoEfEbABLPv9TVqB > *:nth-child(2) {\n    font-size: 12px;\n    font-weight: 400;\n    color: var(--white-25);\n    line-height: 17px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 100%;\n}\n\n.S42dKoEfEbABLPv9TVqB > *:nth-child(3) {\n    font-size: 12px;\n    font-weight: bold;\n    text-decoration-line: underline;\n    color: gold;\n    line-height: 17px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 100%;\n    cursor: pointer;\n}\n\n.q9EJgkaqg3B5lO31BU1O {\n    position: relative;\n}\n\n.kd6IE4Hb23FWakBhxpul {\n    position: absolute;\n}\n\n.q9EJgkaqg3B5lO31BU1O > .Z5HvteyFDkXIWrV0nOJH {\n    background-color: rgba(0, 0, 0, 0);\n    width: 40px;\n    height: 40px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    margin-left: 8px;\n    transition: background-color var(--transition-time);\n}\n.q9EJgkaqg3B5lO31BU1O.FGjxUqNU6GyGh_DwMoeo > .Z5HvteyFDkXIWrV0nOJH {\n    background-color: var(--black-20);\n}\n\n.q9EJgkaqg3B5lO31BU1O img {\n    width: 20px;\n    height: 20px;\n    filter: brightness(0) saturate(100%) invert(36%) sepia(0%) saturate(0%) hue-rotate(112deg) brightness(93%)\n        contrast(92%);\n    transition: filter var(--transition-time);\n}\n\n.q9EJgkaqg3B5lO31BU1O > .Z5HvteyFDkXIWrV0nOJH:hover > img,\n.q9EJgkaqg3B5lO31BU1O.FGjxUqNU6GyGh_DwMoeo > .Z5HvteyFDkXIWrV0nOJH > img {\n    filter: none;\n}\n\n.Bjzyzqe0dv_ykAzasDYg {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n._DG1gaWEIsQ9q9shUg_8 {\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    margin-right: 8px;\n}\n\n._DG1gaWEIsQ9q9shUg_8.PZN9CwhhLum0KPoMSPxo {\n    background-color: var(--base-green);\n}\n\n._DG1gaWEIsQ9q9shUg_8.OW_aQKH9WhqEVbe7JZGo {\n    background-color: var(--base-yellow);\n}\n._DG1gaWEIsQ9q9shUg_8.mvUKRQF8XoepFufCIcZO {\n    background-color: var(--black-10);\n}\n", ""]);
      o.locals = {
        userInfo: "C9g_UPK0CdNO8l_4jrac",
        userRow: "Sx2gwQU7CAo86dVhfWz7",
        userStatusHolder: "GmraolWigWUwQcdXYvbi",
        googleLogin: "RB1W6pbsDnFHcZBqx7NI",
        userStatus: "B6jlFG2GJJMUHvLh8g_q",
        premiumText: "Jv98gs6IBUXBXBxWWsFK",
        premiumIcon: "THwrcGgG60ND9nO56la9",
        userIcon: "SgIm52Fjzr0KgSjnw07c",
        userDefaultIcon: "fhsp95CSLvDT7Ecais4z",
        quickShare: "n5zYvQSDHuwPLcDcOCJP",
        tooltiptext: "BnUHg1WBRBsdqnx6IRP9",
        tooltiptextLower: "cW2b9aEUzNChFbNzR6wV",
        tooltipHolder: "mIXFzIjztyMF3NtGYnT3",
        tpIcon: "l4ucp1aTR5yJ86iMluf7",
        shareIcon: "sW3EMFOUxMH_ThE4um8g",
        userName: "S42dKoEfEbABLPv9TVqB",
        settings: "q9EJgkaqg3B5lO31BU1O",
        "settings-holder": "kd6IE4Hb23FWakBhxpul",
        iconBtn: "Z5HvteyFDkXIWrV0nOJH",
        active: "FGjxUqNU6GyGh_DwMoeo",
        statusOptionRow: "Bjzyzqe0dv_ykAzasDYg",
        statusBubble: "_DG1gaWEIsQ9q9shUg_8",
        online: "PZN9CwhhLum0KPoMSPxo",
        away: "OW_aQKH9WhqEVbe7JZGo",
        offline: "mvUKRQF8XoepFufCIcZO"
      };
      const l = o;
    },
    2082(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".qABSTduJ4061w9bv3D7Q {\n    font-size: 14px;\n    color: var(--white-15);\n}\n", ""]);
      o.locals = {
        popupLabel: "qABSTduJ4061w9bv3D7Q"
      };
      const l = o;
    },
    2359(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".BCjRgASbQqAQiYx1wMRh {\n    --padding: 16px;\n    width: var(--popup-width);\n    background-color: var(--base-black);\n    color: var(--base-white);\n    position: relative;\n}\n\n.BCjRgASbQqAQiYx1wMRh.Y4OxZ5iOJouIq3kc4l74 > .iU5bU9OPDmHBWBcgihha {\n    padding-bottom: 80px;\n}\n\n.iU5bU9OPDmHBWBcgihha {\n    padding: 8px var(--padding);\n    width: calc(var(--popup-width) - calc(2 * var(--padding)));\n    transition:\n        transform var(--transition-time),\n        opacity var(--transition-time);\n    padding-bottom: 16px;\n}\n\n.APadpImsiTTbuTnjaFtD {\n    padding: 8px var(--padding);\n    width: calc(var(--popup-width) - calc(2 * var(--padding)));\n    height: 440px;\n    transition:\n        height var(--transition-time),\n        opacity var(--transition-time);\n    padding-bottom: 16px;\n}\n\n#sFX78_jBveSDu5jFmaYA {\n    max-width: var(--popup-width);\n}\n\n.TdIFKRuFB4E0HRjPom9S {\n    padding: var(--padding);\n    width: calc(var(--popup-width) - calc(2 * var(--padding)));\n    transition: all var(--transition-time);\n    padding-bottom: 20px;\n}\n\n.APvv7yQmvj_NhHGw_91D {\n    width: calc(var(--popup-width) - calc(2 * var(--padding)));\n    /* base padding should be 40 + 20 + 20 + 36 + 10 + 1 */\n    /* switch + padding + padding + userInfo + userInfoMargin + divider */\n    /* -130px is css hack to shrink the viewport */\n    /* between 127-130 is too slow */\n    /* margin-top: calc(100vh - 132px); */\n}\n\n.cz86CMHFbYamk0bC2DYs {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    transform: translateX(0);\n    will-change: transform;\n}\n\n.BCjRgASbQqAQiYx1wMRh.ULR_TWTu4gHyCuCkvvH4 > .cz86CMHFbYamk0bC2DYs {\n    transform: translateX(calc(var(--popup-width) * -1));\n}\n\n.BCjRgASbQqAQiYx1wMRh._rNeSsY4aqSRWK1pmFDQ.Y4OxZ5iOJouIq3kc4l74 > * > .TdIFKRuFB4E0HRjPom9S {\n    height: 100px;\n    min-height: 100px;\n    max-height: 100px;\n    margin-top: -20px;\n}\n\n.BCjRgASbQqAQiYx1wMRh._rNeSsY4aqSRWK1pmFDQ > .cz86CMHFbYamk0bC2DYs > .TdIFKRuFB4E0HRjPom9S {\n    transform: translateX(var(--popup-width));\n    min-height: 100px;\n    max-height: 100px;\n    opacity: 0;\n    overflow-y: hidden;\n}\n\n.BCjRgASbQqAQiYx1wMRh.ULR_TWTu4gHyCuCkvvH4 > .cz86CMHFbYamk0bC2DYs > .iU5bU9OPDmHBWBcgihha {\n    opacity: 0;\n    transform: scale(0.5);\n}\n\n.BCjRgASbQqAQiYx1wMRh.ULR_TWTu4gHyCuCkvvH4 > .cz86CMHFbYamk0bC2DYs > .TdIFKRuFB4E0HRjPom9S {\n    transform: translateX(0);\n    min-height: 443px; /*600 - 20 - base padding above*/\n    max-height: 443px; /*600 - 20 - base padding above*/\n    opacity: 1;\n}\n", ""]);
      o.locals = {
        popupApp: "BCjRgASbQqAQiYx1wMRh",
        error: "Y4OxZ5iOJouIq3kc4l74",
        popupHome: "iU5bU9OPDmHBWBcgihha",
        popupFriends: "APadpImsiTTbuTnjaFtD",
        "popup-app": "sFX78_jBveSDu5jFmaYA",
        popupCalendar: "TdIFKRuFB4E0HRjPom9S",
        pageSelector: "APvv7yQmvj_NhHGw_91D",
        popupContent: "cz86CMHFbYamk0bC2DYs",
        calendarSelected: "ULR_TWTu4gHyCuCkvvH4",
        homeSelected: "_rNeSsY4aqSRWK1pmFDQ"
      };
      const l = o;
    },
    2551(n, e, t) {
      var r = t(6540);
      var i = t(9982);
      function u(n) {
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + n;
        for (var t = 1; t < arguments.length; t++) {
          e += "&args[]=" + encodeURIComponent(arguments[t]);
        }
        return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var o = new Set();
      var l = {};
      function a(n, e) {
        s(n, e);
        s(n + "Capture", e);
      }
      function s(n, e) {
        l[n] = e;
        n = 0;
        for (; n < e.length; n++) {
          o.add(e[n]);
        }
      }
      var c = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
      var f = Object.prototype.hasOwnProperty;
      var d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var h = {};
      var D = {};
      function p(n, e, t, r, i, u, o) {
        this.acceptsBooleans = e === 2 || e === 3 || e === 4;
        this.attributeName = r;
        this.attributeNamespace = i;
        this.mustUseProperty = t;
        this.propertyName = n;
        this.type = e;
        this.sanitizeURL = u;
        this.removeEmptyString = o;
      }
      var v = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (n) {
        v[n] = new p(n, 0, false, n, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (n) {
        var e = n[0];
        v[e] = new p(e, 1, false, n[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (n) {
        v[n] = new p(n, 2, false, n.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (n) {
        v[n] = new p(n, 2, false, n, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (n) {
        v[n] = new p(n, 3, false, n.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function (n) {
        v[n] = new p(n, 3, true, n, null, false, false);
      });
      ["capture", "download"].forEach(function (n) {
        v[n] = new p(n, 4, false, n, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function (n) {
        v[n] = new p(n, 6, false, n, null, false, false);
      });
      ["rowSpan", "start"].forEach(function (n) {
        v[n] = new p(n, 5, false, n.toLowerCase(), null, false, false);
      });
      var g = /[\-:]([a-z])/g;
      function m(n) {
        return n[1].toUpperCase();
      }
      function b(n, e, t, r) {
        var i = v.hasOwnProperty(e) ? v[e] : null;
        if (i !== null ? i.type !== 0 : r || !(e.length > 2) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") {
          if (function (n, e, t, r) {
            if (e == null || function (n, e, t, r) {
              if (t !== null && t.type === 0) {
                return false;
              }
              switch (typeof e) {
                case "function":
                case "symbol":
                  return true;
                case "boolean":
                  return !r && (t !== null ? !t.acceptsBooleans : (n = n.toLowerCase().slice(0, 5)) !== "data-" && n !== "aria-");
                default:
                  return false;
              }
            }(n, e, t, r)) {
              return true;
            }
            if (r) {
              return false;
            }
            if (t !== null) {
              switch (t.type) {
                case 3:
                  return !e;
                case 4:
                  return e === false;
                case 5:
                  return isNaN(e);
                case 6:
                  return isNaN(e) || e < 1;
              }
            }
            return false;
          }(e, t, i, r)) {
            t = null;
          }
          if (r || i === null) {
            if (function (n) {
              return !!f.call(D, n) || !f.call(h, n) && (d.test(n) ? D[n] = true : (h[n] = true, false));
            }(e)) {
              if (t === null) {
                n.removeAttribute(e);
              } else {
                n.setAttribute(e, "" + t);
              }
            }
          } else if (i.mustUseProperty) {
            n[i.propertyName] = t === null ? i.type !== 3 && "" : t;
          } else {
            e = i.attributeName;
            r = i.attributeNamespace;
            if (t === null) {
              n.removeAttribute(e);
            } else {
              t = (i = i.type) === 3 || i === 4 && t === true ? "" : "" + t;
              if (r) {
                n.setAttributeNS(r, e, t);
              } else {
                n.setAttribute(e, t);
              }
            }
          }
        }
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (n) {
        var e = n.replace(g, m);
        v[e] = new p(e, 1, false, n, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (n) {
        var e = n.replace(g, m);
        v[e] = new p(e, 1, false, n, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
        var e = n.replace(g, m);
        v[e] = new p(e, 1, false, n, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function (n) {
        v[n] = new p(n, 1, false, n.toLowerCase(), null, false, false);
      });
      v.xlinkHref = new p("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function (n) {
        v[n] = new p(n, 1, false, n.toLowerCase(), null, true, true);
      });
      var w = r.t;
      var y = Symbol.for("react.element");
      var F = Symbol.for("react.portal");
      var k = Symbol.for("react.fragment");
      var E = Symbol.for("react.strict_mode");
      var C = Symbol.for("react.profiler");
      var x = Symbol.for("react.provider");
      var _ = Symbol.for("react.context");
      var S = Symbol.for("react.forward_ref");
      var B = Symbol.for("react.suspense");
      var A = Symbol.for("react.suspense_list");
      var j = Symbol.for("react.memo");
      var I = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var T = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var O = Symbol.iterator;
      function R(n) {
        if (n === null || typeof n != "object") {
          return null;
        } else if (typeof (n = O && n[O] || n["@@iterator"]) == "function") {
          return n;
        } else {
          return null;
        }
      }
      var M;
      var U = Object.assign;
      function L(n) {
        if (M === undefined) {
          try {
            throw Error();
          } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            M = e && e[1] || "";
          }
        }
        return "\n" + M + n;
      }
      var P = false;
      function N(n, e) {
        if (!n || P) {
          return "";
        }
        P = true;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = undefined;
        try {
          if (e) {
            e = function () {
              throw Error();
            };
            Object.defineProperty(e.prototype, "props", {
              set: function () {
                throw Error();
              }
            });
            if (typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(e, []);
              } catch (n) {
                var r = n;
              }
              Reflect.construct(n, [], e);
            } else {
              try {
                e.call();
              } catch (n) {
                r = n;
              }
              n.call(e.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (n) {
              r = n;
            }
            n();
          }
        } catch (e) {
          if (e && r && typeof e.stack == "string") {
            for (var i = e.stack.split("\n"), u = r.stack.split("\n"), o = i.length - 1, l = u.length - 1; o >= 1 && l >= 0 && i[o] !== u[l];) {
              l--;
            }
            for (; o >= 1 && l >= 0; o--, l--) {
              if (i[o] !== u[l]) {
                if (o !== 1 || l !== 1) {
                  do {
                    o--;
                    if (--l < 0 || i[o] !== u[l]) {
                      var a = "\n" + i[o].replace(" at new ", " at ");
                      if (n.displayName && a.includes("<anonymous>")) {
                        a = a.replace("<anonymous>", n.displayName);
                      }
                      return a;
                    }
                  } while (o >= 1 && l >= 0);
                }
                break;
              }
            }
          }
        } finally {
          P = false;
          Error.prepareStackTrace = t;
        }
        if (n = n ? n.displayName || n.name : "") {
          return L(n);
        } else {
          return "";
        }
      }
      function H(n) {
        switch (n.tag) {
          case 5:
            return L(n.type);
          case 16:
            return L("Lazy");
          case 13:
            return L("Suspense");
          case 19:
            return L("SuspenseList");
          case 0:
          case 2:
          case 15:
            return n = N(n.type, false);
          case 11:
            return n = N(n.type.render, false);
          case 1:
            return n = N(n.type, true);
          default:
            return "";
        }
      }
      function z(n) {
        if (n == null) {
          return null;
        }
        if (typeof n == "function") {
          return n.displayName || n.name || null;
        }
        if (typeof n == "string") {
          return n;
        }
        switch (n) {
          case k:
            return "Fragment";
          case F:
            return "Portal";
          case C:
            return "Profiler";
          case E:
            return "StrictMode";
          case B:
            return "Suspense";
          case A:
            return "SuspenseList";
        }
        if (typeof n == "object") {
          switch (n.$$typeof) {
            case _:
              return (n.displayName || "Context") + ".Consumer";
            case x:
              return (n.v.displayName || "Context") + ".Provider";
            case S:
              var e = n.render;
              if (!(n = n.displayName)) {
                n = (n = e.displayName || e.name || "") !== "" ? "ForwardRef(" + n + ")" : "ForwardRef";
              }
              return n;
            case j:
              if ((e = n.displayName || null) !== null) {
                return e;
              } else {
                return z(n.type) || "Memo";
              }
            case I:
              e = n.m;
              n = n.F;
              try {
                return z(n(e));
              } catch (n) {}
          }
        }
        return null;
      }
      function V(n) {
        var e = n.type;
        switch (n.tag) {
          case 24:
            return "Cache";
          case 9:
            return (e.displayName || "Context") + ".Consumer";
          case 10:
            return (e.v.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            n = (n = e.render).displayName || n.name || "";
            return e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return e;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return z(e);
          case 8:
            if (e === E) {
              return "StrictMode";
            } else {
              return "Mode";
            }
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof e == "function") {
              return e.displayName || e.name || null;
            }
            if (typeof e == "string") {
              return e;
            }
        }
        return null;
      }
      function $(n) {
        switch (typeof n) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return n;
          default:
            return "";
        }
      }
      function G(n) {
        var e = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
      }
      function W(n) {
        n.C ||= function (n) {
          var e = G(n) ? "checked" : "value";
          var t = Object.getOwnPropertyDescriptor(n.constructor.prototype, e);
          var r = "" + n[e];
          if (!n.hasOwnProperty(e) && t !== undefined && typeof t.get == "function" && typeof t.set == "function") {
            var i = t.get;
            var u = t.set;
            Object.defineProperty(n, e, {
              configurable: true,
              get: function () {
                return i.call(this);
              },
              set: function (n) {
                r = "" + n;
                u.call(this, n);
              }
            });
            Object.defineProperty(n, e, {
              enumerable: t.enumerable
            });
            return {
              getValue: function () {
                return r;
              },
              setValue: function (n) {
                r = "" + n;
              },
              stopTracking: function () {
                n.C = null;
                delete n[e];
              }
            };
          }
        }(n);
      }
      function K(n) {
        if (!n) {
          return false;
        }
        var e = n.C;
        if (!e) {
          return true;
        }
        var t = e.getValue();
        var r = "";
        if (n) {
          r = G(n) ? n.checked ? "true" : "false" : n.value;
        }
        return (n = r) !== t && (e.setValue(n), true);
      }
      function Z(n) {
        if ((n = n || (typeof document != "undefined" ? document : undefined)) === undefined) {
          return null;
        }
        try {
          return n.activeElement || n.body;
        } catch (e) {
          return n.body;
        }
      }
      function q(n, e) {
        var t = e.checked;
        return U({}, e, {
          defaultChecked: undefined,
          defaultValue: undefined,
          value: undefined,
          checked: t ?? n._.initialChecked
        });
      }
      function Q(n, e) {
        var t = e.defaultValue == null ? "" : e.defaultValue;
        var r = e.checked ?? e.defaultChecked;
        t = $(e.value ?? t);
        n._ = {
          initialChecked: r,
          initialValue: t,
          controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
        };
      }
      function Y(n, e) {
        if ((e = e.checked) != null) {
          b(n, "checked", e, false);
        }
      }
      function J(n, e) {
        Y(n, e);
        var t = $(e.value);
        var r = e.type;
        if (t != null) {
          if (r === "number") {
            if (t === 0 && n.value === "" || n.value != t) {
              n.value = "" + t;
            }
          } else if (n.value !== "" + t) {
            n.value = "" + t;
          }
        } else if (r === "submit" || r === "reset") {
          n.removeAttribute("value");
          return;
        }
        if (e.hasOwnProperty("value")) {
          nn(n, e.type, t);
        } else if (e.hasOwnProperty("defaultValue")) {
          nn(n, e.type, $(e.defaultValue));
        }
        if (e.checked == null && e.defaultChecked != null) {
          n.defaultChecked = !!e.defaultChecked;
        }
      }
      function X(n, e, t) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
          var r = e.type;
          if ((r === "submit" || r === "reset") && (e.value === undefined || e.value === null)) {
            return;
          }
          e = "" + n._.initialValue;
          if (!t && e !== n.value) {
            n.value = e;
          }
          n.defaultValue = e;
        }
        if ((t = n.name) !== "") {
          n.name = "";
        }
        n.defaultChecked = !!n._.initialChecked;
        if (t !== "") {
          n.name = t;
        }
      }
      function nn(n, e, t) {
        if (e !== "number" || Z(n.ownerDocument) !== n) {
          if (t == null) {
            n.defaultValue = "" + n._.initialValue;
          } else if (n.defaultValue !== "" + t) {
            n.defaultValue = "" + t;
          }
        }
      }
      var en = Array.isArray;
      function tn(n, e, t, r) {
        n = n.options;
        if (e) {
          e = {};
          for (var i = 0; i < t.length; i++) {
            e["$" + t[i]] = true;
          }
          for (t = 0; t < n.length; t++) {
            i = e.hasOwnProperty("$" + n[t].value);
            if (n[t].selected !== i) {
              n[t].selected = i;
            }
            if (i && r) {
              n[t].defaultSelected = true;
            }
          }
        } else {
          t = "" + $(t);
          e = null;
          i = 0;
          for (; i < n.length; i++) {
            if (n[i].value === t) {
              n[i].selected = true;
              if (r) {
                n[i].defaultSelected = true;
              }
              return;
            }
            if (e === null && !n[i].disabled) {
              e = n[i];
            }
          }
          if (e !== null) {
            e.selected = true;
          }
        }
      }
      function rn(n, e) {
        if (e.dangerouslySetInnerHTML != null) {
          throw Error(u(91));
        }
        return U({}, e, {
          value: undefined,
          defaultValue: undefined,
          children: "" + n._.initialValue
        });
      }
      function un(n, e) {
        var t = e.value;
        if (t == null) {
          t = e.children;
          e = e.defaultValue;
          if (t != null) {
            if (e != null) {
              throw Error(u(92));
            }
            if (en(t)) {
              if (t.length > 1) {
                throw Error(u(93));
              }
              t = t[0];
            }
            e = t;
          }
          if (e == null) {
            e = "";
          }
          t = e;
        }
        n._ = {
          initialValue: $(t)
        };
      }
      function on(n, e) {
        var t = $(e.value);
        var r = $(e.defaultValue);
        if (t != null) {
          if ((t = "" + t) !== n.value) {
            n.value = t;
          }
          if (e.defaultValue == null && n.defaultValue !== t) {
            n.defaultValue = t;
          }
        }
        if (r != null) {
          n.defaultValue = "" + r;
        }
      }
      function ln(n) {
        var e = n.textContent;
        if (e === n._.initialValue && e !== "" && e !== null) {
          n.value = e;
        }
      }
      function an(n) {
        switch (n) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function sn(n, e) {
        if (n == null || n === "http://www.w3.org/1999/xhtml") {
          return an(e);
        } else if (n === "http://www.w3.org/2000/svg" && e === "foreignObject") {
          return "http://www.w3.org/1999/xhtml";
        } else {
          return n;
        }
      }
      var cn;
      var fn;
      fn = function (n, e) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) {
          n.innerHTML = e;
        } else {
          (cn = cn || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>";
          e = cn.firstChild;
          while (n.firstChild) {
            n.removeChild(n.firstChild);
          }
          while (e.firstChild) {
            n.appendChild(e.firstChild);
          }
        }
      };
      var dn = typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (n, e, t, r) {
        MSApp.execUnsafeLocalFunction(function () {
          return fn(n, e);
        });
      } : fn;
      function hn(n, e) {
        if (e) {
          var t = n.firstChild;
          if (t && t === n.lastChild && t.nodeType === 3) {
            t.nodeValue = e;
            return;
          }
        }
        n.textContent = e;
      }
      var Dn = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var pn = ["Webkit", "ms", "Moz", "O"];
      function vn(n, e, t) {
        if (e == null || typeof e == "boolean" || e === "") {
          return "";
        } else if (t || typeof e != "number" || e === 0 || Dn.hasOwnProperty(n) && Dn[n]) {
          return ("" + e).trim();
        } else {
          return e + "px";
        }
      }
      function gn(n, e) {
        n = n.style;
        for (var t in e) {
          if (e.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0;
            var i = vn(t, e[t], r);
            if (t === "float") {
              t = "cssFloat";
            }
            if (r) {
              n.setProperty(t, i);
            } else {
              n[t] = i;
            }
          }
        }
      }
      Object.keys(Dn).forEach(function (n) {
        pn.forEach(function (e) {
          e = e + n.charAt(0).toUpperCase() + n.substring(1);
          Dn[e] = Dn[n];
        });
      });
      var mn = U({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function bn(n, e) {
        if (e) {
          if (mn[n] && (e.children != null || e.dangerouslySetInnerHTML != null)) {
            throw Error(u(137, n));
          }
          if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) {
              throw Error(u(60));
            }
            if (typeof e.dangerouslySetInnerHTML != "object" || !("S" in e.dangerouslySetInnerHTML)) {
              throw Error(u(61));
            }
          }
          if (e.style != null && typeof e.style != "object") {
            throw Error(u(62));
          }
        }
      }
      function wn(n, e) {
        if (n.indexOf("-") === -1) {
          return typeof e.is == "string";
        }
        switch (n) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var yn = null;
      function Fn(n) {
        if ((n = n.target || n.srcElement || window).correspondingUseElement) {
          n = n.correspondingUseElement;
        }
        if (n.nodeType === 3) {
          return n.parentNode;
        } else {
          return n;
        }
      }
      var kn = null;
      var En = null;
      var Cn = null;
      function xn(n) {
        if (n = bi(n)) {
          if (typeof kn != "function") {
            throw Error(u(280));
          }
          var e = n.stateNode;
          if (e) {
            e = yi(e);
            kn(n.stateNode, n.type, e);
          }
        }
      }
      function _n(n) {
        if (En) {
          if (Cn) {
            Cn.push(n);
          } else {
            Cn = [n];
          }
        } else {
          En = n;
        }
      }
      function Sn() {
        if (En) {
          var n = En;
          var e = Cn;
          Cn = En = null;
          xn(n);
          if (e) {
            for (n = 0; n < e.length; n++) {
              xn(e[n]);
            }
          }
        }
      }
      function Bn(n, e) {
        return n(e);
      }
      function An() {}
      var jn = false;
      function In(n, e, t) {
        if (jn) {
          return n(e, t);
        }
        jn = true;
        try {
          return Bn(n, e, t);
        } finally {
          jn = false;
          if (En !== null || Cn !== null) {
            An();
            Sn();
          }
        }
      }
      function Tn(n, e) {
        var t = n.stateNode;
        if (t === null) {
          return null;
        }
        var r = yi(t);
        if (r === null) {
          return null;
        }
        t = r[e];
        n: switch (e) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            if (!(r = !r.disabled)) {
              r = (n = n.type) !== "button" && n !== "input" && n !== "select" && n !== "textarea";
            }
            n = !r;
            break n;
          default:
            n = false;
        }
        if (n) {
          return null;
        }
        if (t && typeof t != "function") {
          throw Error(u(231, e, typeof t));
        }
        return t;
      }
      var On = false;
      if (c) {
        try {
          var Rn = {};
          Object.defineProperty(Rn, "passive", {
            get: function () {
              On = true;
            }
          });
          window.addEventListener("test", Rn, Rn);
          window.removeEventListener("test", Rn, Rn);
        } catch (fn) {
          On = false;
        }
      }
      function Mn(n, e, t, r, i, u, o, l, a) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          e.apply(t, s);
        } catch (n) {
          this.onError(n);
        }
      }
      var Un = false;
      var Ln = null;
      var Pn = false;
      var Nn = null;
      var Hn = {
        onError: function (n) {
          Un = true;
          Ln = n;
        }
      };
      function zn(n, e, t, r, i, u, o, l, a) {
        Un = false;
        Ln = null;
        Mn.apply(Hn, arguments);
      }
      function Vn(n) {
        var e = n;
        var t = n;
        if (n.alternate) {
          while (e.return) {
            e = e.return;
          }
        } else {
          n = e;
          do {
            if ((e = n).flags & 4098) {
              t = e.return;
            }
            n = e.return;
          } while (n);
        }
        if (e.tag === 3) {
          return t;
        } else {
          return null;
        }
      }
      function $n(n) {
        if (n.tag === 13) {
          var e = n.memoizedState;
          if (e === null) {
            if ((n = n.alternate) !== null) {
              e = n.memoizedState;
            }
          }
          if (e !== null) {
            return e.dehydrated;
          }
        }
        return null;
      }
      function Gn(n) {
        if (Vn(n) !== n) {
          throw Error(u(188));
        }
      }
      function Wn(n) {
        if ((n = function (n) {
          var e = n.alternate;
          if (!e) {
            if ((e = Vn(n)) === null) {
              throw Error(u(188));
            }
            if (e !== n) {
              return null;
            } else {
              return n;
            }
          }
          var t = n;
          var r = e;
          while (true) {
            var i = t.return;
            if (i === null) {
              break;
            }
            var o = i.alternate;
            if (o === null) {
              if ((r = i.return) !== null) {
                t = r;
                continue;
              }
              break;
            }
            if (i.child === o.child) {
              for (o = i.child; o;) {
                if (o === t) {
                  Gn(i);
                  return n;
                }
                if (o === r) {
                  Gn(i);
                  return e;
                }
                o = o.sibling;
              }
              throw Error(u(188));
            }
            if (t.return !== r.return) {
              t = i;
              r = o;
            } else {
              var l = false;
              for (var a = i.child; a;) {
                if (a === t) {
                  l = true;
                  t = i;
                  r = o;
                  break;
                }
                if (a === r) {
                  l = true;
                  r = i;
                  t = o;
                  break;
                }
                a = a.sibling;
              }
              if (!l) {
                for (a = o.child; a;) {
                  if (a === t) {
                    l = true;
                    t = o;
                    r = i;
                    break;
                  }
                  if (a === r) {
                    l = true;
                    r = o;
                    t = i;
                    break;
                  }
                  a = a.sibling;
                }
                if (!l) {
                  throw Error(u(189));
                }
              }
            }
            if (t.alternate !== r) {
              throw Error(u(190));
            }
          }
          if (t.tag !== 3) {
            throw Error(u(188));
          }
          if (t.stateNode.current === t) {
            return n;
          } else {
            return e;
          }
        }(n)) !== null) {
          return Kn(n);
        } else {
          return null;
        }
      }
      function Kn(n) {
        if (n.tag === 5 || n.tag === 6) {
          return n;
        }
        for (n = n.child; n !== null;) {
          var e = Kn(n);
          if (e !== null) {
            return e;
          }
          n = n.sibling;
        }
        return null;
      }
      var Zn = i.unstable_scheduleCallback;
      var qn = i.unstable_cancelCallback;
      var Qn = i.unstable_shouldYield;
      var Yn = i.unstable_requestPaint;
      var Jn = i.unstable_now;
      var Xn = i.unstable_getCurrentPriorityLevel;
      var ne = i.unstable_ImmediatePriority;
      var ee = i.unstable_UserBlockingPriority;
      var te = i.unstable_NormalPriority;
      var re = i.unstable_LowPriority;
      var ie = i.unstable_IdlePriority;
      var ue = null;
      var oe = null;
      var le = Math.clz32 ? Math.clz32 : function (n) {
        n >>>= 0;
        if (n === 0) {
          return 32;
        } else {
          return 31 - (ae(n) / se | 0) | 0;
        }
      };
      var ae = Math.log;
      var se = Math.LN2;
      var ce = 64;
      var fe = 4194304;
      function de(n) {
        switch (n & -n) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return n & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return n;
        }
      }
      function he(n, e) {
        var t = n.pendingLanes;
        if (t === 0) {
          return 0;
        }
        var r = 0;
        var i = n.suspendedLanes;
        var u = n.pingedLanes;
        var o = t & 268435455;
        if (o !== 0) {
          var l = o & ~i;
          if (l !== 0) {
            r = de(l);
          } else if ((u &= o) !== 0) {
            r = de(u);
          }
        } else if ((o = t & ~i) !== 0) {
          r = de(o);
        } else if (u !== 0) {
          r = de(u);
        }
        if (r === 0) {
          return 0;
        }
        if (e !== 0 && e !== r && (e & i) === 0 && ((i = r & -r) >= (u = e & -e) || i === 16 && u & 4194240)) {
          return e;
        }
        if (r & 4) {
          r |= t & 16;
        }
        if ((e = n.entangledLanes) !== 0) {
          n = n.entanglements;
          e &= r;
          while (e > 0) {
            i = 1 << (t = 31 - le(e));
            r |= n[t];
            e &= ~i;
          }
        }
        return r;
      }
      function De(n, e) {
        switch (n) {
          case 1:
          case 2:
          case 4:
            return e + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e + 5000;
          default:
            return -1;
        }
      }
      function pe(n) {
        if ((n = n.pendingLanes & -1073741825) !== 0) {
          return n;
        } else if (n & 1073741824) {
          return 1073741824;
        } else {
          return 0;
        }
      }
      function ve() {
        var n = ce;
        if (!((ce <<= 1) & 4194240)) {
          ce = 64;
        }
        return n;
      }
      function ge(n) {
        var e = [];
        for (var t = 0; t < 31; t++) {
          e.push(n);
        }
        return e;
      }
      function me(n, e, t) {
        n.pendingLanes |= e;
        if (e !== 536870912) {
          n.suspendedLanes = 0;
          n.pingedLanes = 0;
        }
        (n = n.eventTimes)[e = 31 - le(e)] = t;
      }
      function be(n, e) {
        var t = n.entangledLanes |= e;
        for (n = n.entanglements; t;) {
          var r = 31 - le(t);
          var i = 1 << r;
          if (i & e | n[r] & e) {
            n[r] |= e;
          }
          t &= ~i;
        }
      }
      var we = 0;
      function ye(n) {
        if ((n &= -n) > 1) {
          if (n > 4) {
            if (n & 268435455) {
              return 16;
            } else {
              return 536870912;
            }
          } else {
            return 4;
          }
        } else {
          return 1;
        }
      }
      var Fe;
      var ke;
      var Ee;
      var Ce;
      var xe;
      var _e = false;
      var Se = [];
      var Be = null;
      var Ae = null;
      var je = null;
      var Ie = new Map();
      var Te = new Map();
      var Oe = [];
      var Re = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Me(n, e) {
        switch (n) {
          case "focusin":
          case "focusout":
            Be = null;
            break;
          case "dragenter":
          case "dragleave":
            Ae = null;
            break;
          case "mouseover":
          case "mouseout":
            je = null;
            break;
          case "pointerover":
          case "pointerout":
            Ie.delete(e.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Te.delete(e.pointerId);
        }
      }
      function Ue(n, e, t, r, i, u) {
        if (n === null || n.nativeEvent !== u) {
          n = {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: r,
            nativeEvent: u,
            targetContainers: [i]
          };
          if (e !== null) {
            if ((e = bi(e)) !== null) {
              ke(e);
            }
          }
          return n;
        } else {
          n.eventSystemFlags |= r;
          e = n.targetContainers;
          if (i !== null && e.indexOf(i) === -1) {
            e.push(i);
          }
          return n;
        }
      }
      function Le(n) {
        var e = mi(n.target);
        if (e !== null) {
          var t = Vn(e);
          if (t !== null) {
            if ((e = t.tag) === 13) {
              if ((e = $n(t)) !== null) {
                n.blockedOn = e;
                xe(n.priority, function () {
                  Ee(t);
                });
                return;
              }
            } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
              n.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
              return;
            }
          }
        }
        n.blockedOn = null;
      }
      function Pe(n) {
        if (n.blockedOn !== null) {
          return false;
        }
        for (var e = n.targetContainers; e.length > 0;) {
          var t = Qe(n.domEventName, n.eventSystemFlags, e[0], n.nativeEvent);
          if (t !== null) {
            if ((e = bi(t)) !== null) {
              ke(e);
            }
            n.blockedOn = t;
            return false;
          }
          var r = new (t = n.nativeEvent).constructor(t.type, t);
          yn = r;
          t.target.dispatchEvent(r);
          yn = null;
          e.shift();
        }
        return true;
      }
      function Ne(n, e, t) {
        if (Pe(n)) {
          t.delete(e);
        }
      }
      function He() {
        _e = false;
        if (Be !== null && Pe(Be)) {
          Be = null;
        }
        if (Ae !== null && Pe(Ae)) {
          Ae = null;
        }
        if (je !== null && Pe(je)) {
          je = null;
        }
        Ie.forEach(Ne);
        Te.forEach(Ne);
      }
      function ze(n, e) {
        if (n.blockedOn === e) {
          n.blockedOn = null;
          if (!_e) {
            _e = true;
            i.unstable_scheduleCallback(i.unstable_NormalPriority, He);
          }
        }
      }
      function Ve(n) {
        function e(e) {
          return ze(e, n);
        }
        if (Se.length > 0) {
          ze(Se[0], n);
          for (var t = 1; t < Se.length; t++) {
            var r = Se[t];
            if (r.blockedOn === n) {
              r.blockedOn = null;
            }
          }
        }
        if (Be !== null) {
          ze(Be, n);
        }
        if (Ae !== null) {
          ze(Ae, n);
        }
        if (je !== null) {
          ze(je, n);
        }
        Ie.forEach(e);
        Te.forEach(e);
        t = 0;
        for (; t < Oe.length; t++) {
          if ((r = Oe[t]).blockedOn === n) {
            r.blockedOn = null;
          }
        }
        while (Oe.length > 0 && (t = Oe[0]).blockedOn === null) {
          Le(t);
          if (t.blockedOn === null) {
            Oe.shift();
          }
        }
      }
      var $e = w.ReactCurrentBatchConfig;
      var Ge = true;
      function We(n, e, t, r) {
        var i = we;
        var u = $e.transition;
        $e.transition = null;
        try {
          we = 1;
          Ze(n, e, t, r);
        } finally {
          we = i;
          $e.transition = u;
        }
      }
      function Ke(n, e, t, r) {
        var i = we;
        var u = $e.transition;
        $e.transition = null;
        try {
          we = 4;
          Ze(n, e, t, r);
        } finally {
          we = i;
          $e.transition = u;
        }
      }
      function Ze(n, e, t, r) {
        if (Ge) {
          var i = Qe(n, e, t, r);
          if (i === null) {
            $r(n, e, r, qe, t);
            Me(n, r);
          } else if (function (n, e, t, r, i) {
            switch (e) {
              case "focusin":
                Be = Ue(Be, n, e, t, r, i);
                return true;
              case "dragenter":
                Ae = Ue(Ae, n, e, t, r, i);
                return true;
              case "mouseover":
                je = Ue(je, n, e, t, r, i);
                return true;
              case "pointerover":
                var u = i.pointerId;
                Ie.set(u, Ue(Ie.get(u) || null, n, e, t, r, i));
                return true;
              case "gotpointercapture":
                u = i.pointerId;
                Te.set(u, Ue(Te.get(u) || null, n, e, t, r, i));
                return true;
            }
            return false;
          }(i, n, e, t, r)) {
            r.stopPropagation();
          } else {
            Me(n, r);
            if (e & 4 && Re.indexOf(n) > -1) {
              while (i !== null) {
                var u = bi(i);
                if (u !== null) {
                  Fe(u);
                }
                if ((u = Qe(n, e, t, r)) === null) {
                  $r(n, e, r, qe, t);
                }
                if (u === i) {
                  break;
                }
                i = u;
              }
              if (i !== null) {
                r.stopPropagation();
              }
            } else {
              $r(n, e, r, null, t);
            }
          }
        }
      }
      var qe = null;
      function Qe(n, e, t, r) {
        qe = null;
        if ((n = mi(n = Fn(r))) !== null) {
          if ((e = Vn(n)) === null) {
            n = null;
          } else if ((t = e.tag) === 13) {
            if ((n = $n(e)) !== null) {
              return n;
            }
            n = null;
          } else if (t === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) {
              if (e.tag === 3) {
                return e.stateNode.containerInfo;
              } else {
                return null;
              }
            }
            n = null;
          } else if (e !== n) {
            n = null;
          }
        }
        qe = n;
        return null;
      }
      function Ye(n) {
        switch (n) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (Xn()) {
              case ne:
                return 1;
              case ee:
                return 4;
              case te:
              case re:
                return 16;
              case ie:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var Je = null;
      var Xe = null;
      var nt = null;
      function et() {
        if (nt) {
          return nt;
        }
        var n;
        var e;
        var t = Xe;
        var r = t.length;
        var i = "value" in Je ? Je.value : Je.textContent;
        var u = i.length;
        for (n = 0; n < r && t[n] === i[n]; n++);
        var o = r - n;
        for (e = 1; e <= o && t[r - e] === i[u - e]; e++);
        return nt = i.slice(n, e > 1 ? 1 - e : undefined);
      }
      function tt(n) {
        var e = n.keyCode;
        if ("charCode" in n) {
          if ((n = n.charCode) === 0 && e === 13) {
            n = 13;
          }
        } else {
          n = e;
        }
        if (n === 10) {
          n = 13;
        }
        if (n >= 32 || n === 13) {
          return n;
        } else {
          return 0;
        }
      }
      function rt() {
        return true;
      }
      function it() {
        return false;
      }
      function ut(n) {
        function e(e, t, r, i, u) {
          this.B = e;
          this.j = r;
          this.type = t;
          this.nativeEvent = i;
          this.target = u;
          this.currentTarget = null;
          for (var o in n) {
            if (n.hasOwnProperty(o)) {
              e = n[o];
              this[o] = e ? e(i) : i[o];
            }
          }
          this.isDefaultPrevented = i.defaultPrevented ?? i.returnValue === false ? rt : it;
          this.isPropagationStopped = it;
          return this;
        }
        U(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            if (n) {
              if (n.preventDefault) {
                n.preventDefault();
              } else if (typeof n.returnValue != "unknown") {
                n.returnValue = false;
              }
              this.isDefaultPrevented = rt;
            }
          },
          stopPropagation: function () {
            var n = this.nativeEvent;
            if (n) {
              if (n.stopPropagation) {
                n.stopPropagation();
              } else if (typeof n.cancelBubble != "unknown") {
                n.cancelBubble = true;
              }
              this.isPropagationStopped = rt;
            }
          },
          persist: function () {},
          isPersistent: rt
        });
        return e;
      }
      var ot;
      var lt;
      var at;
      var st = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (n) {
          return n.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      };
      var ct = ut(st);
      var ft = U({}, st, {
        view: 0,
        detail: 0
      });
      var dt = ut(ft);
      var ht = U({}, ft, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ct,
        button: 0,
        buttons: 0,
        relatedTarget: function (n) {
          if (n.relatedTarget === undefined) {
            if (n.fromElement === n.srcElement) {
              return n.toElement;
            } else {
              return n.fromElement;
            }
          } else {
            return n.relatedTarget;
          }
        },
        movementX: function (n) {
          if ("movementX" in n) {
            return n.movementX;
          } else {
            if (n !== at) {
              if (at && n.type === "mousemove") {
                ot = n.screenX - at.screenX;
                lt = n.screenY - at.screenY;
              } else {
                lt = ot = 0;
              }
              at = n;
            }
            return ot;
          }
        },
        movementY: function (n) {
          if ("movementY" in n) {
            return n.movementY;
          } else {
            return lt;
          }
        }
      });
      var Dt = ut(ht);
      var pt = ut(U({}, ht, {
        dataTransfer: 0
      }));
      var vt = ut(U({}, ft, {
        relatedTarget: 0
      }));
      var gt = ut(U({}, st, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }));
      var mt = U({}, st, {
        clipboardData: function (n) {
          if ("clipboardData" in n) {
            return n.clipboardData;
          } else {
            return window.clipboardData;
          }
        }
      });
      var bt = ut(mt);
      var wt = ut(U({}, st, {
        data: 0
      }));
      var yt = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Ft = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var kt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Et(n) {
        var e = this.nativeEvent;
        if (e.getModifierState) {
          return e.getModifierState(n);
        } else {
          return !!(n = kt[n]) && !!e[n];
        }
      }
      function Ct() {
        return Et;
      }
      var xt = U({}, ft, {
        key: function (n) {
          if (n.key) {
            var e = yt[n.key] || n.key;
            if (e !== "Unidentified") {
              return e;
            }
          }
          if (n.type === "keypress") {
            if ((n = tt(n)) === 13) {
              return "Enter";
            } else {
              return String.fromCharCode(n);
            }
          } else if (n.type === "keydown" || n.type === "keyup") {
            return Ft[n.keyCode] || "Unidentified";
          } else {
            return "";
          }
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ct,
        charCode: function (n) {
          if (n.type === "keypress") {
            return tt(n);
          } else {
            return 0;
          }
        },
        keyCode: function (n) {
          if (n.type === "keydown" || n.type === "keyup") {
            return n.keyCode;
          } else {
            return 0;
          }
        },
        which: function (n) {
          if (n.type === "keypress") {
            return tt(n);
          } else if (n.type === "keydown" || n.type === "keyup") {
            return n.keyCode;
          } else {
            return 0;
          }
        }
      });
      var _t = ut(xt);
      var St = ut(U({}, ht, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }));
      var Bt = ut(U({}, ft, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ct
      }));
      var At = ut(U({}, st, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }));
      var jt = U({}, ht, {
        deltaX: function (n) {
          if ("deltaX" in n) {
            return n.deltaX;
          } else if ("wheelDeltaX" in n) {
            return -n.wheelDeltaX;
          } else {
            return 0;
          }
        },
        deltaY: function (n) {
          if ("deltaY" in n) {
            return n.deltaY;
          } else if ("wheelDeltaY" in n) {
            return -n.wheelDeltaY;
          } else if ("wheelDelta" in n) {
            return -n.wheelDelta;
          } else {
            return 0;
          }
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var It = ut(jt);
      var Tt = [9, 13, 27, 32];
      var Ot = c && "CompositionEvent" in window;
      var Rt = null;
      if (c && "documentMode" in document) {
        Rt = document.documentMode;
      }
      var Mt = c && "TextEvent" in window && !Rt;
      var Ut = c && (!Ot || Rt && Rt > 8 && Rt <= 11);
      var Lt = String.fromCharCode(32);
      var Pt = false;
      function Nt(n, e) {
        switch (n) {
          case "keyup":
            return Tt.indexOf(e.keyCode) !== -1;
          case "keydown":
            return e.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function Ht(n) {
        if (typeof (n = n.detail) == "object" && "data" in n) {
          return n.data;
        } else {
          return null;
        }
      }
      var zt = false;
      var Vt = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function $t(n) {
        var e = n && n.nodeName && n.nodeName.toLowerCase();
        if (e === "input") {
          return !!Vt[n.type];
        } else {
          return e === "textarea";
        }
      }
      function Gt(n, e, t, r) {
        _n(r);
        if ((e = Wr(e, "onChange")).length > 0) {
          t = new ct("onChange", "change", null, t, r);
          n.push({
            event: t,
            listeners: e
          });
        }
      }
      var Wt = null;
      var Kt = null;
      function Zt(n) {
        Lr(n, 0);
      }
      function qt(n) {
        if (K(wi(n))) {
          return n;
        }
      }
      function Qt(n, e) {
        if (n === "change") {
          return e;
        }
      }
      var Yt = false;
      if (c) {
        var Jt;
        if (c) {
          var Xt = "oninput" in document;
          if (!Xt) {
            var nr = document.createElement("div");
            nr.setAttribute("oninput", "return;");
            Xt = typeof nr.oninput == "function";
          }
          Jt = Xt;
        } else {
          Jt = false;
        }
        Yt = Jt && (!document.documentMode || document.documentMode > 9);
      }
      function er() {
        if (Wt) {
          Wt.detachEvent("onpropertychange", tr);
          Kt = Wt = null;
        }
      }
      function tr(n) {
        if (n.propertyName === "value" && qt(Kt)) {
          var e = [];
          Gt(e, Kt, n, Fn(n));
          In(Zt, e);
        }
      }
      function rr(n, e, t) {
        if (n === "focusin") {
          er();
          Kt = t;
          (Wt = e).attachEvent("onpropertychange", tr);
        } else if (n === "focusout") {
          er();
        }
      }
      function ir(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown") {
          return qt(Kt);
        }
      }
      function ur(n, e) {
        if (n === "click") {
          return qt(e);
        }
      }
      function or(n, e) {
        if (n === "input" || n === "change") {
          return qt(e);
        }
      }
      var lr = typeof Object.is == "function" ? Object.is : function (n, e) {
        return n === e && (n !== 0 || 1 / n == 1 / e) || n != n && e != e;
      };
      function ar(n, e) {
        if (lr(n, e)) {
          return true;
        }
        if (typeof n != "object" || n === null || typeof e != "object" || e === null) {
          return false;
        }
        var t = Object.keys(n);
        var r = Object.keys(e);
        if (t.length !== r.length) {
          return false;
        }
        for (r = 0; r < t.length; r++) {
          var i = t[r];
          if (!f.call(e, i) || !lr(n[i], e[i])) {
            return false;
          }
        }
        return true;
      }
      function sr(n) {
        while (n && n.firstChild) {
          n = n.firstChild;
        }
        return n;
      }
      function cr(n, e) {
        var t;
        var r = sr(n);
        for (n = 0; r;) {
          if (r.nodeType === 3) {
            t = n + r.textContent.length;
            if (n <= e && t >= e) {
              return {
                node: r,
                offset: e - n
              };
            }
            n = t;
          }
          n: {
            while (r) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break n;
              }
              r = r.parentNode;
            }
            r = undefined;
          }
          r = sr(r);
        }
      }
      function fr(n, e) {
        return !!n && !!e && (n === e || (!n || n.nodeType !== 3) && (e && e.nodeType === 3 ? fr(n, e.parentNode) : "contains" in n ? n.contains(e) : !!n.compareDocumentPosition && !!(n.compareDocumentPosition(e) & 16)));
      }
      function dr() {
        for (var n = window, e = Z(); e instanceof n.HTMLIFrameElement;) {
          try {
            var t = typeof e.contentWindow.location.href == "string";
          } catch (n) {
            t = false;
          }
          if (!t) {
            break;
          }
          e = Z((n = e.contentWindow).document);
        }
        return e;
      }
      function hr(n) {
        var e = n && n.nodeName && n.nodeName.toLowerCase();
        return e && (e === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || e === "textarea" || n.contentEditable === "true");
      }
      function Dr(n) {
        var e = dr();
        var t = n.focusedElem;
        var r = n.selectionRange;
        if (e !== t && t && t.ownerDocument && fr(t.ownerDocument.documentElement, t)) {
          if (r !== null && hr(t)) {
            e = r.start;
            if ((n = r.end) === undefined) {
              n = e;
            }
            if ("selectionStart" in t) {
              t.selectionStart = e;
              t.selectionEnd = Math.min(n, t.value.length);
            } else if ((n = (e = t.ownerDocument || document) && e.defaultView || window).getSelection) {
              n = n.getSelection();
              var i = t.textContent.length;
              var u = Math.min(r.start, i);
              r = r.end === undefined ? u : Math.min(r.end, i);
              if (!n.extend && u > r) {
                i = r;
                r = u;
                u = i;
              }
              i = cr(t, u);
              var o = cr(t, r);
              if (i && o && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== o.node || n.focusOffset !== o.offset)) {
                (e = e.createRange()).setStart(i.node, i.offset);
                n.removeAllRanges();
                if (u > r) {
                  n.addRange(e);
                  n.extend(o.node, o.offset);
                } else {
                  e.setEnd(o.node, o.offset);
                  n.addRange(e);
                }
              }
            }
          }
          e = [];
          n = t;
          while (n = n.parentNode) {
            if (n.nodeType === 1) {
              e.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
              });
            }
          }
          if (typeof t.focus == "function") {
            t.focus();
          }
          t = 0;
          for (; t < e.length; t++) {
            (n = e[t]).element.scrollLeft = n.left;
            n.element.scrollTop = n.top;
          }
        }
      }
      var pr = c && "documentMode" in document && document.documentMode <= 11;
      var vr = null;
      var gr = null;
      var mr = null;
      var br = false;
      function wr(n, e, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        if (!br && vr != null && vr === Z(r)) {
          if ("selectionStart" in (r = vr) && hr(r)) {
            r = {
              start: r.selectionStart,
              end: r.selectionEnd
            };
          } else {
            r = {
              anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset
            };
          }
          if (!mr || !ar(mr, r)) {
            mr = r;
            if ((r = Wr(gr, "onSelect")).length > 0) {
              e = new ct("onSelect", "select", null, e, t);
              n.push({
                event: e,
                listeners: r
              });
              e.target = vr;
            }
          }
        }
      }
      function yr(n, e) {
        var t = {};
        t[n.toLowerCase()] = e.toLowerCase();
        t["Webkit" + n] = "webkit" + e;
        t["Moz" + n] = "moz" + e;
        return t;
      }
      var Fr = {
        animationend: yr("Animation", "AnimationEnd"),
        animationiteration: yr("Animation", "AnimationIteration"),
        animationstart: yr("Animation", "AnimationStart"),
        transitionend: yr("Transition", "TransitionEnd")
      };
      var kr = {};
      var Er = {};
      function Cr(n) {
        if (kr[n]) {
          return kr[n];
        }
        if (!Fr[n]) {
          return n;
        }
        var e;
        var t = Fr[n];
        for (e in t) {
          if (t.hasOwnProperty(e) && e in Er) {
            return kr[n] = t[e];
          }
        }
        return n;
      }
      if (c) {
        Er = document.createElement("div").style;
        if (!("AnimationEvent" in window)) {
          delete Fr.animationend.animation;
          delete Fr.animationiteration.animation;
          delete Fr.animationstart.animation;
        }
        if (!("TransitionEvent" in window)) {
          delete Fr.transitionend.transition;
        }
      }
      var xr = Cr("animationend");
      var _r = Cr("animationiteration");
      var Sr = Cr("animationstart");
      var Br = Cr("transitionend");
      var Ar = new Map();
      var jr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function Ir(n, e) {
        Ar.set(n, e);
        a(e, [n]);
      }
      for (var Tr = 0; Tr < jr.length; Tr++) {
        var Or = jr[Tr];
        Ir(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
      }
      Ir(xr, "onAnimationEnd");
      Ir(_r, "onAnimationIteration");
      Ir(Sr, "onAnimationStart");
      Ir("dblclick", "onDoubleClick");
      Ir("focusin", "onFocus");
      Ir("focusout", "onBlur");
      Ir(Br, "onTransitionEnd");
      s("onMouseEnter", ["mouseout", "mouseover"]);
      s("onMouseLeave", ["mouseout", "mouseover"]);
      s("onPointerEnter", ["pointerout", "pointerover"]);
      s("onPointerLeave", ["pointerout", "pointerover"]);
      a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
      function Ur(n, e, t) {
        var r = n.type || "unknown-event";
        n.currentTarget = t;
        (function (n, e, t, r, i, o, l, a, s) {
          zn.apply(this, arguments);
          if (Un) {
            if (!Un) {
              throw Error(u(198));
            }
            var c = Ln;
            Un = false;
            Ln = null;
            if (!Pn) {
              Pn = true;
              Nn = c;
            }
          }
        })(r, e, undefined, n);
        n.currentTarget = null;
      }
      function Lr(n, e) {
        e = !!(e & 4);
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          var i = r.event;
          r = r.listeners;
          n: {
            var u = undefined;
            if (e) {
              for (var o = r.length - 1; o >= 0; o--) {
                var l = r[o];
                var a = l.instance;
                var s = l.currentTarget;
                l = l.listener;
                if (a !== u && i.isPropagationStopped()) {
                  break n;
                }
                Ur(i, l, s);
                u = a;
              }
            } else {
              for (o = 0; o < r.length; o++) {
                a = (l = r[o]).instance;
                s = l.currentTarget;
                l = l.listener;
                if (a !== u && i.isPropagationStopped()) {
                  break n;
                }
                Ur(i, l, s);
                u = a;
              }
            }
          }
        }
        if (Pn) {
          n = Nn;
          Pn = false;
          Nn = null;
          throw n;
        }
      }
      function Pr(n, e) {
        var t = e[pi];
        if (t === undefined) {
          t = e[pi] = new Set();
        }
        var r = n + "__bubble";
        if (!t.has(r)) {
          Vr(e, n, 2, false);
          t.add(r);
        }
      }
      function Nr(n, e, t) {
        var r = 0;
        if (e) {
          r |= 4;
        }
        Vr(t, n, r, e);
      }
      var Hr = "_reactListening" + Math.random().toString(36).slice(2);
      function zr(n) {
        if (!n[Hr]) {
          n[Hr] = true;
          o.forEach(function (e) {
            if (e !== "selectionchange") {
              if (!Mr.has(e)) {
                Nr(e, false, n);
              }
              Nr(e, true, n);
            }
          });
          var e = n.nodeType === 9 ? n : n.ownerDocument;
          if (e !== null && !e[Hr]) {
            e[Hr] = true;
            Nr("selectionchange", false, e);
          }
        }
      }
      function Vr(n, e, t, r) {
        switch (Ye(e)) {
          case 1:
            var i = We;
            break;
          case 4:
            i = Ke;
            break;
          default:
            i = Ze;
        }
        t = i.bind(null, e, t, n);
        i = undefined;
        if (!!On && (e === "touchstart" || e === "touchmove" || e === "wheel")) {
          i = true;
        }
        if (r) {
          if (i !== undefined) {
            n.addEventListener(e, t, {
              capture: true,
              passive: i
            });
          } else {
            n.addEventListener(e, t, true);
          }
        } else if (i !== undefined) {
          n.addEventListener(e, t, {
            passive: i
          });
        } else {
          n.addEventListener(e, t, false);
        }
      }
      function $r(n, e, t, r, i) {
        var u = r;
        if (!(e & 1) && !(e & 2) && r !== null) {
          n: while (true) {
            if (r === null) {
              return;
            }
            var o = r.tag;
            if (o === 3 || o === 4) {
              var l = r.stateNode.containerInfo;
              if (l === i || l.nodeType === 8 && l.parentNode === i) {
                break;
              }
              if (o === 4) {
                for (o = r.return; o !== null;) {
                  var a = o.tag;
                  if ((a === 3 || a === 4) && ((a = o.stateNode.containerInfo) === i || a.nodeType === 8 && a.parentNode === i)) {
                    return;
                  }
                  o = o.return;
                }
              }
              while (l !== null) {
                if ((o = mi(l)) === null) {
                  return;
                }
                if ((a = o.tag) === 5 || a === 6) {
                  r = u = o;
                  continue n;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        }
        In(function () {
          var r = u;
          var i = Fn(t);
          var o = [];
          n: {
            var l = Ar.get(n);
            if (l !== undefined) {
              var a = ct;
              var s = n;
              switch (n) {
                case "keypress":
                  if (tt(t) === 0) {
                    break n;
                  }
                case "keydown":
                case "keyup":
                  a = _t;
                  break;
                case "focusin":
                  s = "focus";
                  a = vt;
                  break;
                case "focusout":
                  s = "blur";
                  a = vt;
                  break;
                case "beforeblur":
                case "afterblur":
                  a = vt;
                  break;
                case "click":
                  if (t.button === 2) {
                    break n;
                  }
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  a = Dt;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  a = pt;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  a = Bt;
                  break;
                case xr:
                case _r:
                case Sr:
                  a = gt;
                  break;
                case Br:
                  a = At;
                  break;
                case "scroll":
                  a = dt;
                  break;
                case "wheel":
                  a = It;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  a = bt;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  a = St;
              }
              var c = !!(e & 4);
              var f = !c && n === "scroll";
              var d = c ? l !== null ? l + "Capture" : null : l;
              c = [];
              for (var h, D = r; D !== null;) {
                var p = (h = D).stateNode;
                if (h.tag === 5 && p !== null) {
                  h = p;
                  if (d !== null) {
                    if ((p = Tn(D, d)) != null) {
                      c.push(Gr(D, p, h));
                    }
                  }
                }
                if (f) {
                  break;
                }
                D = D.return;
              }
              if (c.length > 0) {
                l = new a(l, s, null, t, i);
                o.push({
                  event: l,
                  listeners: c
                });
              }
            }
          }
          if (!(e & 7)) {
            a = n === "mouseout" || n === "pointerout";
            if ((!(l = n === "mouseover" || n === "pointerover") || t === yn || !(s = t.relatedTarget || t.fromElement) || !mi(s) && !s[Di]) && (a || l) && (l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, a ? (a = r, (s = (s = t.relatedTarget || t.toElement) ? mi(s) : null) !== null && (s !== (f = Vn(s)) || s.tag !== 5 && s.tag !== 6) && (s = null)) : (a = null, s = r), a !== s)) {
              c = Dt;
              p = "onMouseLeave";
              d = "onMouseEnter";
              D = "mouse";
              if (n === "pointerout" || n === "pointerover") {
                c = St;
                p = "onPointerLeave";
                d = "onPointerEnter";
                D = "pointer";
              }
              f = a == null ? l : wi(a);
              h = s == null ? l : wi(s);
              (l = new c(p, D + "leave", a, t, i)).target = f;
              l.relatedTarget = h;
              p = null;
              if (mi(i) === r) {
                (c = new c(d, D + "enter", s, t, i)).target = h;
                c.relatedTarget = f;
                p = c;
              }
              f = p;
              if (a && s) {
                n: {
                  d = s;
                  D = 0;
                  h = c = a;
                  for (; h; h = Kr(h)) {
                    D++;
                  }
                  h = 0;
                  p = d;
                  for (; p; p = Kr(p)) {
                    h++;
                  }
                  while (D - h > 0) {
                    c = Kr(c);
                    D--;
                  }
                  while (h - D > 0) {
                    d = Kr(d);
                    h--;
                  }
                  while (D--) {
                    if (c === d || d !== null && c === d.alternate) {
                      break n;
                    }
                    c = Kr(c);
                    d = Kr(d);
                  }
                  c = null;
                }
              } else {
                c = null;
              }
              if (a !== null) {
                Zr(o, l, a, c, false);
              }
              if (s !== null && f !== null) {
                Zr(o, f, s, c, true);
              }
            }
            if ((a = (l = r ? wi(r) : window).nodeName && l.nodeName.toLowerCase()) === "select" || a === "input" && l.type === "file") {
              var v = Qt;
            } else if ($t(l)) {
              if (Yt) {
                v = or;
              } else {
                v = ir;
                var g = rr;
              }
            } else if ((a = l.nodeName) && a.toLowerCase() === "input" && (l.type === "checkbox" || l.type === "radio")) {
              v = ur;
            }
            if (v &&= v(n, r)) {
              Gt(o, v, t, i);
            } else {
              if (g) {
                g(n, l, r);
              }
              if (n === "focusout" && (g = l._) && g.controlled && l.type === "number") {
                nn(l, "number", l.value);
              }
            }
            g = r ? wi(r) : window;
            switch (n) {
              case "focusin":
                if ($t(g) || g.contentEditable === "true") {
                  vr = g;
                  gr = r;
                  mr = null;
                }
                break;
              case "focusout":
                mr = gr = vr = null;
                break;
              case "mousedown":
                br = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                br = false;
                wr(o, t, i);
                break;
              case "selectionchange":
                if (pr) {
                  break;
                }
              case "keydown":
              case "keyup":
                wr(o, t, i);
            }
            var m;
            if (Ot) {
              n: {
                switch (n) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break n;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break n;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break n;
                }
                b = undefined;
              }
            } else if (zt) {
              if (Nt(n, t)) {
                b = "onCompositionEnd";
              }
            } else if (n === "keydown" && t.keyCode === 229) {
              b = "onCompositionStart";
            }
            if (b) {
              if (Ut && t.locale !== "ko") {
                if (zt || b !== "onCompositionStart") {
                  if (b === "onCompositionEnd" && zt) {
                    m = et();
                  }
                } else {
                  Xe = "value" in (Je = i) ? Je.value : Je.textContent;
                  zt = true;
                }
              }
              if ((g = Wr(r, b)).length > 0) {
                b = new wt(b, n, null, t, i);
                o.push({
                  event: b,
                  listeners: g
                });
                if (m) {
                  b.data = m;
                } else if ((m = Ht(t)) !== null) {
                  b.data = m;
                }
              }
            }
            if (m = Mt ? function (n, e) {
              switch (n) {
                case "compositionend":
                  return Ht(e);
                case "keypress":
                  if (e.which !== 32) {
                    return null;
                  } else {
                    Pt = true;
                    return Lt;
                  }
                case "textInput":
                  if ((n = e.data) === Lt && Pt) {
                    return null;
                  } else {
                    return n;
                  }
                default:
                  return null;
              }
            }(n, t) : function (n, e) {
              if (zt) {
                if (n === "compositionend" || !Ot && Nt(n, e)) {
                  n = et();
                  nt = Xe = Je = null;
                  zt = false;
                  return n;
                } else {
                  return null;
                }
              }
              switch (n) {
                case "paste":
                default:
                  return null;
                case "keypress":
                  if (!e.ctrlKey && !e.altKey && !e.metaKey || e.ctrlKey && e.altKey) {
                    if (e.char && e.char.length > 1) {
                      return e.char;
                    }
                    if (e.which) {
                      return String.fromCharCode(e.which);
                    }
                  }
                  return null;
                case "compositionend":
                  if (Ut && e.locale !== "ko") {
                    return null;
                  } else {
                    return e.data;
                  }
              }
            }(n, t)) {
              if ((r = Wr(r, "onBeforeInput")).length > 0) {
                i = new wt("onBeforeInput", "beforeinput", null, t, i);
                o.push({
                  event: i,
                  listeners: r
                });
                i.data = m;
              }
            }
          }
          Lr(o, e);
        });
      }
      function Gr(n, e, t) {
        return {
          instance: n,
          listener: e,
          currentTarget: t
        };
      }
      function Wr(n, e) {
        var t = e + "Capture";
        var r = [];
        for (; n !== null;) {
          var i = n;
          var u = i.stateNode;
          if (i.tag === 5 && u !== null) {
            i = u;
            if ((u = Tn(n, t)) != null) {
              r.unshift(Gr(n, u, i));
            }
            if ((u = Tn(n, e)) != null) {
              r.push(Gr(n, u, i));
            }
          }
          n = n.return;
        }
        return r;
      }
      function Kr(n) {
        if (n === null) {
          return null;
        }
        do {
          n = n.return;
        } while (n && n.tag !== 5);
        return n || null;
      }
      function Zr(n, e, t, r, i) {
        var u = e.B;
        var o = [];
        for (; t !== null && t !== r;) {
          var l = t;
          var a = l.alternate;
          var s = l.stateNode;
          if (a !== null && a === r) {
            break;
          }
          if (l.tag === 5 && s !== null) {
            l = s;
            if (i) {
              if ((a = Tn(t, u)) != null) {
                o.unshift(Gr(t, a, l));
              }
            } else if (!i) {
              if ((a = Tn(t, u)) != null) {
                o.push(Gr(t, a, l));
              }
            }
          }
          t = t.return;
        }
        if (o.length !== 0) {
          n.push({
            event: e,
            listeners: o
          });
        }
      }
      var qr = /\r\n?/g;
      var Qr = /\u0000|\uFFFD/g;
      function Yr(n) {
        return (typeof n == "string" ? n : "" + n).replace(qr, "\n").replace(Qr, "");
      }
      function Jr(n, e, t) {
        e = Yr(e);
        if (Yr(n) !== e && t) {
          throw Error(u(425));
        }
      }
      function Xr() {}
      var ni = null;
      var ei = null;
      function ti(n, e) {
        return n === "textarea" || n === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.S != null;
      }
      var ri = typeof setTimeout == "function" ? setTimeout : undefined;
      var ii = typeof clearTimeout == "function" ? clearTimeout : undefined;
      var ui = typeof Promise == "function" ? Promise : undefined;
      var oi = typeof queueMicrotask == "function" ? queueMicrotask : ui !== undefined ? function (n) {
        return ui.resolve(null).then(n).catch(li);
      } : ri;
      function li(n) {
        setTimeout(function () {
          throw n;
        });
      }
      function ai(n, e) {
        var t = e;
        var r = 0;
        do {
          var i = t.nextSibling;
          n.removeChild(t);
          if (i && i.nodeType === 8) {
            if ((t = i.data) === "/$") {
              if (r === 0) {
                n.removeChild(i);
                Ve(e);
                return;
              }
              r--;
            } else if (t === "$" || t === "$?" || t === "$!") {
              r++;
            }
          }
          t = i;
        } while (t);
        Ve(e);
      }
      function si(n) {
        for (; n != null; n = n.nextSibling) {
          var e = n.nodeType;
          if (e === 1 || e === 3) {
            break;
          }
          if (e === 8) {
            if ((e = n.data) === "$" || e === "$!" || e === "$?") {
              break;
            }
            if (e === "/$") {
              return null;
            }
          }
        }
        return n;
      }
      function ci(n) {
        n = n.previousSibling;
        var e = 0;
        for (; n;) {
          if (n.nodeType === 8) {
            var t = n.data;
            if (t === "$" || t === "$!" || t === "$?") {
              if (e === 0) {
                return n;
              }
              e--;
            } else if (t === "/$") {
              e++;
            }
          }
          n = n.previousSibling;
        }
        return null;
      }
      var fi = Math.random().toString(36).slice(2);
      var di = "__reactFiber$" + fi;
      var hi = "__reactProps$" + fi;
      var Di = "__reactContainer$" + fi;
      var pi = "__reactEvents$" + fi;
      var vi = "__reactListeners$" + fi;
      var gi = "__reactHandles$" + fi;
      function mi(n) {
        var e = n[di];
        if (e) {
          return e;
        }
        for (var t = n.parentNode; t;) {
          if (e = t[Di] || t[di]) {
            t = e.alternate;
            if (e.child !== null || t !== null && t.child !== null) {
              for (n = ci(n); n !== null;) {
                if (t = n[di]) {
                  return t;
                }
                n = ci(n);
              }
            }
            return e;
          }
          t = (n = t).parentNode;
        }
        return null;
      }
      function bi(n) {
        if (!(n = n[di] || n[Di]) || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3) {
          return null;
        } else {
          return n;
        }
      }
      function wi(n) {
        if (n.tag === 5 || n.tag === 6) {
          return n.stateNode;
        }
        throw Error(u(33));
      }
      function yi(n) {
        return n[hi] || null;
      }
      var Fi = [];
      var ki = -1;
      function Ei(n) {
        return {
          current: n
        };
      }
      function Ci(n) {
        if (!(ki < 0)) {
          n.current = Fi[ki];
          Fi[ki] = null;
          ki--;
        }
      }
      function xi(n, e) {
        ki++;
        Fi[ki] = n.current;
        n.current = e;
      }
      var _i = {};
      var Si = Ei(_i);
      var Bi = Ei(false);
      var Ai = _i;
      function ji(n, e) {
        var t = n.type.contextTypes;
        if (!t) {
          return _i;
        }
        var r = n.stateNode;
        if (r && r.I === e) {
          return r.T;
        }
        var i;
        var u = {};
        for (i in t) {
          u[i] = e[i];
        }
        if (r) {
          (n = n.stateNode).I = e;
          n.T = u;
        }
        return u;
      }
      function Ii(n) {
        return (n = n.childContextTypes) != null;
      }
      function Ti() {
        Ci(Bi);
        Ci(Si);
      }
      function Oi(n, e, t) {
        if (Si.current !== _i) {
          throw Error(u(168));
        }
        xi(Si, e);
        xi(Bi, t);
      }
      function Ri(n, e, t) {
        var r = n.stateNode;
        e = e.childContextTypes;
        if (typeof r.getChildContext != "function") {
          return t;
        }
        for (var i in r = r.getChildContext()) {
          if (!(i in e)) {
            throw Error(u(108, V(n) || "Unknown", i));
          }
        }
        return U({}, t, r);
      }
      function Mi(n) {
        n = (n = n.stateNode) && n.O || _i;
        Ai = Si.current;
        xi(Si, n);
        xi(Bi, Bi.current);
        return true;
      }
      function Ui(n, e, t) {
        var r = n.stateNode;
        if (!r) {
          throw Error(u(169));
        }
        if (t) {
          n = Ri(n, e, Ai);
          r.O = n;
          Ci(Bi);
          Ci(Si);
          xi(Si, n);
        } else {
          Ci(Bi);
        }
        xi(Bi, t);
      }
      var Li = null;
      var Pi = false;
      var Ni = false;
      function Hi(n) {
        if (Li === null) {
          Li = [n];
        } else {
          Li.push(n);
        }
      }
      function zi() {
        if (!Ni && Li !== null) {
          Ni = true;
          var n = 0;
          var e = we;
          try {
            var t = Li;
            for (we = 1; n < t.length; n++) {
              var r = t[n];
              do {
                r = r(true);
              } while (r !== null);
            }
            Li = null;
            Pi = false;
          } catch (e) {
            if (Li !== null) {
              Li = Li.slice(n + 1);
            }
            Zn(ne, zi);
            throw e;
          } finally {
            we = e;
            Ni = false;
          }
        }
        return null;
      }
      var Vi = [];
      var $i = 0;
      var Gi = null;
      var Wi = 0;
      var Ki = [];
      var Zi = 0;
      var qi = null;
      var Qi = 1;
      var Yi = "";
      function Ji(n, e) {
        Vi[$i++] = Wi;
        Vi[$i++] = Gi;
        Gi = n;
        Wi = e;
      }
      function Xi(n, e, t) {
        Ki[Zi++] = Qi;
        Ki[Zi++] = Yi;
        Ki[Zi++] = qi;
        qi = n;
        var r = Qi;
        n = Yi;
        var i = 32 - le(r) - 1;
        r &= ~(1 << i);
        t += 1;
        var u = 32 - le(e) + i;
        if (u > 30) {
          var o = i - i % 5;
          u = (r & (1 << o) - 1).toString(32);
          r >>= o;
          i -= o;
          Qi = 1 << 32 - le(e) + i | t << i | r;
          Yi = u + n;
        } else {
          Qi = 1 << u | t << i | r;
          Yi = n;
        }
      }
      function nu(n) {
        if (n.return !== null) {
          Ji(n, 1);
          Xi(n, 1, 0);
        }
      }
      function eu(n) {
        while (n === Gi) {
          Gi = Vi[--$i];
          Vi[$i] = null;
          Wi = Vi[--$i];
          Vi[$i] = null;
        }
        while (n === qi) {
          qi = Ki[--Zi];
          Ki[Zi] = null;
          Yi = Ki[--Zi];
          Ki[Zi] = null;
          Qi = Ki[--Zi];
          Ki[Zi] = null;
        }
      }
      var tu = null;
      var ru = null;
      var iu = false;
      var uu = null;
      function ou(n, e) {
        var t = As(5, null, null, 0);
        t.elementType = "DELETED";
        t.stateNode = e;
        t.return = n;
        if ((e = n.deletions) === null) {
          n.deletions = [t];
          n.flags |= 16;
        } else {
          e.push(t);
        }
      }
      function lu(n, e) {
        switch (n.tag) {
          case 5:
            var t = n.type;
            return (e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) !== null && (n.stateNode = e, tu = n, ru = si(e.firstChild), true);
          case 6:
            return (e = n.pendingProps === "" || e.nodeType !== 3 ? null : e) !== null && (n.stateNode = e, tu = n, ru = null, true);
          case 13:
            return (e = e.nodeType !== 8 ? null : e) !== null && (t = qi !== null ? {
              id: Qi,
              overflow: Yi
            } : null, n.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824
            }, (t = As(18, null, null, 0)).stateNode = e, t.return = n, n.child = t, tu = n, ru = null, true);
          default:
            return false;
        }
      }
      function au(n) {
        return !!(n.mode & 1) && !(n.flags & 128);
      }
      function su(n) {
        if (iu) {
          var e = ru;
          if (e) {
            var t = e;
            if (!lu(n, e)) {
              if (au(n)) {
                throw Error(u(418));
              }
              e = si(t.nextSibling);
              var r = tu;
              if (e && lu(n, e)) {
                ou(r, t);
              } else {
                n.flags = n.flags & -4097 | 2;
                iu = false;
                tu = n;
              }
            }
          } else {
            if (au(n)) {
              throw Error(u(418));
            }
            n.flags = n.flags & -4097 | 2;
            iu = false;
            tu = n;
          }
        }
      }
      function cu(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) {
          n = n.return;
        }
        tu = n;
      }
      function fu(n) {
        if (n !== tu) {
          return false;
        }
        if (!iu) {
          cu(n);
          iu = true;
          return false;
        }
        var e;
        if ((e = n.tag !== 3) && !(e = n.tag !== 5)) {
          e = (e = n.type) !== "head" && e !== "body" && !ti(n.type, n.memoizedProps);
        }
        if (e &&= ru) {
          if (au(n)) {
            du();
            throw Error(u(418));
          }
          while (e) {
            ou(n, e);
            e = si(e.nextSibling);
          }
        }
        cu(n);
        if (n.tag === 13) {
          if (!(n = (n = n.memoizedState) !== null ? n.dehydrated : null)) {
            throw Error(u(317));
          }
          n: {
            n = n.nextSibling;
            e = 0;
            while (n) {
              if (n.nodeType === 8) {
                var t = n.data;
                if (t === "/$") {
                  if (e === 0) {
                    ru = si(n.nextSibling);
                    break n;
                  }
                  e--;
                } else if (t === "$" || t === "$!" || t === "$?") {
                  e++;
                }
              }
              n = n.nextSibling;
            }
            ru = null;
          }
        } else {
          ru = tu ? si(n.stateNode.nextSibling) : null;
        }
        return true;
      }
      function du() {
        for (var n = ru; n;) {
          n = si(n.nextSibling);
        }
      }
      function hu() {
        ru = tu = null;
        iu = false;
      }
      function Du(n) {
        if (uu === null) {
          uu = [n];
        } else {
          uu.push(n);
        }
      }
      var pu = w.ReactCurrentBatchConfig;
      function vu(n, e, t) {
        if ((n = t.ref) !== null && typeof n != "function" && typeof n != "object") {
          if (t.h) {
            if (t = t.h) {
              if (t.tag !== 1) {
                throw Error(u(309));
              }
              var r = t.stateNode;
            }
            if (!r) {
              throw Error(u(147, n));
            }
            var i = r;
            var o = "" + n;
            if (e !== null && e.ref !== null && typeof e.ref == "function" && e.ref.R === o) {
              return e.ref;
            } else {
              e = function (n) {
                var e = i.refs;
                if (n === null) {
                  delete e[o];
                } else {
                  e[o] = n;
                }
              };
              e.R = o;
              return e;
            }
          }
          if (typeof n != "string") {
            throw Error(u(284));
          }
          if (!t.h) {
            throw Error(u(290, n));
          }
        }
        return n;
      }
      function gu(n, e) {
        n = Object.prototype.toString.call(e);
        throw Error(u(31, n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n));
      }
      function mu(n) {
        return (0, n.F)(n.m);
      }
      function bu(n) {
        function e(e, t) {
          if (n) {
            var r = e.deletions;
            if (r === null) {
              e.deletions = [t];
              e.flags |= 16;
            } else {
              r.push(t);
            }
          }
        }
        function t(t, r) {
          if (!n) {
            return null;
          }
          while (r !== null) {
            e(t, r);
            r = r.sibling;
          }
          return null;
        }
        function r(n, e) {
          for (n = new Map(); e !== null;) {
            if (e.key !== null) {
              n.set(e.key, e);
            } else {
              n.set(e.index, e);
            }
            e = e.sibling;
          }
          return n;
        }
        function i(n, e) {
          (n = Is(n, e)).index = 0;
          n.sibling = null;
          return n;
        }
        function o(e, t, r) {
          e.index = r;
          if (n) {
            if ((r = e.alternate) !== null) {
              if ((r = r.index) < t) {
                e.flags |= 2;
                return t;
              } else {
                return r;
              }
            } else {
              e.flags |= 2;
              return t;
            }
          } else {
            e.flags |= 1048576;
            return t;
          }
        }
        function l(e) {
          if (n && e.alternate === null) {
            e.flags |= 2;
          }
          return e;
        }
        function a(n, e, t, r) {
          if (e === null || e.tag !== 6) {
            (e = Ms(t, n.mode, r)).return = n;
            return e;
          } else {
            (e = i(e, t)).return = n;
            return e;
          }
        }
        function s(n, e, t, r) {
          var u = t.type;
          if (u === k) {
            return f(n, e, t.props.children, r, t.key);
          } else if (e !== null && (e.elementType === u || typeof u == "object" && u !== null && u.$$typeof === I && mu(u) === e.type)) {
            (r = i(e, t.props)).ref = vu(n, e, t);
            r.return = n;
            return r;
          } else {
            (r = Ts(t.type, t.key, t.props, null, n.mode, r)).ref = vu(n, e, t);
            r.return = n;
            return r;
          }
        }
        function c(n, e, t, r) {
          if (e === null || e.tag !== 4 || e.stateNode.containerInfo !== t.containerInfo || e.stateNode.implementation !== t.implementation) {
            (e = Us(t, n.mode, r)).return = n;
            return e;
          } else {
            (e = i(e, t.children || [])).return = n;
            return e;
          }
        }
        function f(n, e, t, r, u) {
          if (e === null || e.tag !== 7) {
            (e = Os(t, n.mode, r, u)).return = n;
            return e;
          } else {
            (e = i(e, t)).return = n;
            return e;
          }
        }
        function d(n, e, t) {
          if (typeof e == "string" && e !== "" || typeof e == "number") {
            (e = Ms("" + e, n.mode, t)).return = n;
            return e;
          }
          if (typeof e == "object" && e !== null) {
            switch (e.$$typeof) {
              case y:
                (t = Ts(e.type, e.key, e.props, null, n.mode, t)).ref = vu(n, null, e);
                t.return = n;
                return t;
              case F:
                (e = Us(e, n.mode, t)).return = n;
                return e;
              case I:
                return d(n, (0, e.F)(e.m), t);
            }
            if (en(e) || R(e)) {
              (e = Os(e, n.mode, t, null)).return = n;
              return e;
            }
            gu(n, e);
          }
          return null;
        }
        function h(n, e, t, r) {
          var i = e !== null ? e.key : null;
          if (typeof t == "string" && t !== "" || typeof t == "number") {
            if (i !== null) {
              return null;
            } else {
              return a(n, e, "" + t, r);
            }
          }
          if (typeof t == "object" && t !== null) {
            switch (t.$$typeof) {
              case y:
                if (t.key === i) {
                  return s(n, e, t, r);
                } else {
                  return null;
                }
              case F:
                if (t.key === i) {
                  return c(n, e, t, r);
                } else {
                  return null;
                }
              case I:
                return h(n, e, (i = t.F)(t.m), r);
            }
            if (en(t) || R(t)) {
              if (i !== null) {
                return null;
              } else {
                return f(n, e, t, r, null);
              }
            }
            gu(n, t);
          }
          return null;
        }
        function D(n, e, t, r, i) {
          if (typeof r == "string" && r !== "" || typeof r == "number") {
            return a(e, n = n.get(t) || null, "" + r, i);
          }
          if (typeof r == "object" && r !== null) {
            switch (r.$$typeof) {
              case y:
                return s(e, n = n.get(r.key === null ? t : r.key) || null, r, i);
              case F:
                return c(e, n = n.get(r.key === null ? t : r.key) || null, r, i);
              case I:
                return D(n, e, t, (0, r.F)(r.m), i);
            }
            if (en(r) || R(r)) {
              return f(e, n = n.get(t) || null, r, i, null);
            }
            gu(e, r);
          }
          return null;
        }
        function p(i, u, l, a) {
          var s = null;
          var c = null;
          for (var f = u, p = u = 0, v = null; f !== null && p < l.length; p++) {
            if (f.index > p) {
              v = f;
              f = null;
            } else {
              v = f.sibling;
            }
            var g = h(i, f, l[p], a);
            if (g === null) {
              if (f === null) {
                f = v;
              }
              break;
            }
            if (n && f && g.alternate === null) {
              e(i, f);
            }
            u = o(g, u, p);
            if (c === null) {
              s = g;
            } else {
              c.sibling = g;
            }
            c = g;
            f = v;
          }
          if (p === l.length) {
            t(i, f);
            if (iu) {
              Ji(i, p);
            }
            return s;
          }
          if (f === null) {
            for (; p < l.length; p++) {
              if ((f = d(i, l[p], a)) !== null) {
                u = o(f, u, p);
                if (c === null) {
                  s = f;
                } else {
                  c.sibling = f;
                }
                c = f;
              }
            }
            if (iu) {
              Ji(i, p);
            }
            return s;
          }
          for (f = r(i, f); p < l.length; p++) {
            if ((v = D(f, i, p, l[p], a)) !== null) {
              if (n && v.alternate !== null) {
                f.delete(v.key === null ? p : v.key);
              }
              u = o(v, u, p);
              if (c === null) {
                s = v;
              } else {
                c.sibling = v;
              }
              c = v;
            }
          }
          if (n) {
            f.forEach(function (n) {
              return e(i, n);
            });
          }
          if (iu) {
            Ji(i, p);
          }
          return s;
        }
        function v(i, l, a, s) {
          var c = R(a);
          if (typeof c != "function") {
            throw Error(u(150));
          }
          if ((a = c.call(a)) == null) {
            throw Error(u(151));
          }
          var f = c = null;
          for (var p = l, v = l = 0, g = null, m = a.next(); p !== null && !m.done; v++, m = a.next()) {
            if (p.index > v) {
              g = p;
              p = null;
            } else {
              g = p.sibling;
            }
            var b = h(i, p, m.value, s);
            if (b === null) {
              if (p === null) {
                p = g;
              }
              break;
            }
            if (n && p && b.alternate === null) {
              e(i, p);
            }
            l = o(b, l, v);
            if (f === null) {
              c = b;
            } else {
              f.sibling = b;
            }
            f = b;
            p = g;
          }
          if (m.done) {
            t(i, p);
            if (iu) {
              Ji(i, v);
            }
            return c;
          }
          if (p === null) {
            for (; !m.done; v++, m = a.next()) {
              if ((m = d(i, m.value, s)) !== null) {
                l = o(m, l, v);
                if (f === null) {
                  c = m;
                } else {
                  f.sibling = m;
                }
                f = m;
              }
            }
            if (iu) {
              Ji(i, v);
            }
            return c;
          }
          for (p = r(i, p); !m.done; v++, m = a.next()) {
            if ((m = D(p, i, v, m.value, s)) !== null) {
              if (n && m.alternate !== null) {
                p.delete(m.key === null ? v : m.key);
              }
              l = o(m, l, v);
              if (f === null) {
                c = m;
              } else {
                f.sibling = m;
              }
              f = m;
            }
          }
          if (n) {
            p.forEach(function (n) {
              return e(i, n);
            });
          }
          if (iu) {
            Ji(i, v);
          }
          return c;
        }
        return function n(r, u, o, a) {
          if (typeof o == "object" && o !== null && o.type === k && o.key === null) {
            o = o.props.children;
          }
          if (typeof o == "object" && o !== null) {
            switch (o.$$typeof) {
              case y:
                n: {
                  var s = o.key;
                  for (var c = u; c !== null;) {
                    if (c.key === s) {
                      if ((s = o.type) === k) {
                        if (c.tag === 7) {
                          t(r, c.sibling);
                          (u = i(c, o.props.children)).return = r;
                          r = u;
                          break n;
                        }
                      } else if (c.elementType === s || typeof s == "object" && s !== null && s.$$typeof === I && mu(s) === c.type) {
                        t(r, c.sibling);
                        (u = i(c, o.props)).ref = vu(r, c, o);
                        u.return = r;
                        r = u;
                        break n;
                      }
                      t(r, c);
                      break;
                    }
                    e(r, c);
                    c = c.sibling;
                  }
                  if (o.type === k) {
                    (u = Os(o.props.children, r.mode, a, o.key)).return = r;
                    r = u;
                  } else {
                    (a = Ts(o.type, o.key, o.props, null, r.mode, a)).ref = vu(r, u, o);
                    a.return = r;
                    r = a;
                  }
                }
                return l(r);
              case F:
                n: {
                  for (c = o.key; u !== null;) {
                    if (u.key === c) {
                      if (u.tag === 4 && u.stateNode.containerInfo === o.containerInfo && u.stateNode.implementation === o.implementation) {
                        t(r, u.sibling);
                        (u = i(u, o.children || [])).return = r;
                        r = u;
                        break n;
                      }
                      t(r, u);
                      break;
                    }
                    e(r, u);
                    u = u.sibling;
                  }
                  (u = Us(o, r.mode, a)).return = r;
                  r = u;
                }
                return l(r);
              case I:
                return n(r, u, (c = o.F)(o.m), a);
            }
            if (en(o)) {
              return p(r, u, o, a);
            }
            if (R(o)) {
              return v(r, u, o, a);
            }
            gu(r, o);
          }
          if (typeof o == "string" && o !== "" || typeof o == "number") {
            o = "" + o;
            if (u !== null && u.tag === 6) {
              t(r, u.sibling);
              (u = i(u, o)).return = r;
              r = u;
            } else {
              t(r, u);
              (u = Ms(o, r.mode, a)).return = r;
              r = u;
            }
            return l(r);
          } else {
            return t(r, u);
          }
        };
      }
      var wu = bu(true);
      var yu = bu(false);
      var Fu = Ei(null);
      var ku = null;
      var Eu = null;
      var Cu = null;
      function xu() {
        Cu = Eu = ku = null;
      }
      function _u(n) {
        var e = Fu.current;
        Ci(Fu);
        n.M = e;
      }
      function Su(n, e, t) {
        while (n !== null) {
          var r = n.alternate;
          if ((n.childLanes & e) !== e) {
            n.childLanes |= e;
            if (r !== null) {
              r.childLanes |= e;
            }
          } else if (r !== null && (r.childLanes & e) !== e) {
            r.childLanes |= e;
          }
          if (n === t) {
            break;
          }
          n = n.return;
        }
      }
      function Bu(n, e) {
        ku = n;
        Cu = Eu = null;
        if ((n = n.dependencies) !== null && n.firstContext !== null) {
          if ((n.lanes & e) !== 0) {
            bl = true;
          }
          n.firstContext = null;
        }
      }
      function Au(n) {
        var e = n.M;
        if (Cu !== n) {
          n = {
            context: n,
            memoizedValue: e,
            next: null
          };
          if (Eu === null) {
            if (ku === null) {
              throw Error(u(308));
            }
            Eu = n;
            ku.dependencies = {
              lanes: 0,
              firstContext: n
            };
          } else {
            Eu = Eu.next = n;
          }
        }
        return e;
      }
      var ju = null;
      function Iu(n) {
        if (ju === null) {
          ju = [n];
        } else {
          ju.push(n);
        }
      }
      function Tu(n, e, t, r) {
        var i = e.interleaved;
        if (i === null) {
          t.next = t;
          Iu(e);
        } else {
          t.next = i.next;
          i.next = t;
        }
        e.interleaved = t;
        return Ou(n, r);
      }
      function Ou(n, e) {
        n.lanes |= e;
        var t = n.alternate;
        if (t !== null) {
          t.lanes |= e;
        }
        t = n;
        n = n.return;
        while (n !== null) {
          n.childLanes |= e;
          if ((t = n.alternate) !== null) {
            t.childLanes |= e;
          }
          t = n;
          n = n.return;
        }
        if (t.tag === 3) {
          return t.stateNode;
        } else {
          return null;
        }
      }
      var Ru = false;
      function Mu(n) {
        n.updateQueue = {
          baseState: n.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function Uu(n, e) {
        n = n.updateQueue;
        if (e.updateQueue === n) {
          e.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
          };
        }
      }
      function Lu(n, e) {
        return {
          eventTime: n,
          lane: e,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Pu(n, e, t) {
        var r = n.updateQueue;
        if (r === null) {
          return null;
        }
        r = r.shared;
        if (_a & 2) {
          var i = r.pending;
          if (i === null) {
            e.next = e;
          } else {
            e.next = i.next;
            i.next = e;
          }
          r.pending = e;
          return Ou(n, t);
        }
        if ((i = r.interleaved) === null) {
          e.next = e;
          Iu(r);
        } else {
          e.next = i.next;
          i.next = e;
        }
        r.interleaved = e;
        return Ou(n, t);
      }
      function Nu(n, e, t) {
        if ((e = e.updateQueue) !== null && (e = e.shared, t & 4194240)) {
          var r = e.lanes;
          t |= r &= n.pendingLanes;
          e.lanes = t;
          be(n, t);
        }
      }
      function Hu(n, e) {
        var t = n.updateQueue;
        var r = n.alternate;
        if (r !== null && t === (r = r.updateQueue)) {
          var i = null;
          var u = null;
          if ((t = t.firstBaseUpdate) !== null) {
            do {
              var o = {
                eventTime: t.eventTime,
                lane: t.lane,
                tag: t.tag,
                payload: t.payload,
                callback: t.callback,
                next: null
              };
              if (u === null) {
                i = u = o;
              } else {
                u = u.next = o;
              }
              t = t.next;
            } while (t !== null);
            if (u === null) {
              i = u = e;
            } else {
              u = u.next = e;
            }
          } else {
            i = u = e;
          }
          t = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: u,
            shared: r.shared,
            effects: r.effects
          };
          n.updateQueue = t;
          return;
        }
        if ((n = t.lastBaseUpdate) === null) {
          t.firstBaseUpdate = e;
        } else {
          n.next = e;
        }
        t.lastBaseUpdate = e;
      }
      function zu(n, e, t, r) {
        var i = n.updateQueue;
        Ru = false;
        var u = i.firstBaseUpdate;
        var o = i.lastBaseUpdate;
        var l = i.shared.pending;
        if (l !== null) {
          i.shared.pending = null;
          var a = l;
          var s = a.next;
          a.next = null;
          if (o === null) {
            u = s;
          } else {
            o.next = s;
          }
          o = a;
          var c = n.alternate;
          if (c !== null) {
            if ((l = (c = c.updateQueue).lastBaseUpdate) !== o) {
              if (l === null) {
                c.firstBaseUpdate = s;
              } else {
                l.next = s;
              }
              c.lastBaseUpdate = a;
            }
          }
        }
        if (u !== null) {
          var f = i.baseState;
          o = 0;
          c = s = a = null;
          l = u;
          while (true) {
            var d = l.lane;
            var h = l.eventTime;
            if ((r & d) === d) {
              if (c !== null) {
                c = c.next = {
                  eventTime: h,
                  lane: 0,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null
                };
              }
              n: {
                var D = n;
                var p = l;
                d = e;
                h = t;
                switch (p.tag) {
                  case 1:
                    if (typeof (D = p.payload) == "function") {
                      f = D.call(h, f, d);
                      break n;
                    }
                    f = D;
                    break n;
                  case 3:
                    D.flags = D.flags & -65537 | 128;
                  case 0:
                    if ((d = typeof (D = p.payload) == "function" ? D.call(h, f, d) : D) == null) {
                      break n;
                    }
                    f = U({}, f, d);
                    break n;
                  case 2:
                    Ru = true;
                }
              }
              if (l.callback !== null && l.lane !== 0) {
                n.flags |= 64;
                if ((d = i.effects) === null) {
                  i.effects = [l];
                } else {
                  d.push(l);
                }
              }
            } else {
              h = {
                eventTime: h,
                lane: d,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
              };
              if (c === null) {
                s = c = h;
                a = f;
              } else {
                c = c.next = h;
              }
              o |= d;
            }
            if ((l = l.next) === null) {
              if ((l = i.shared.pending) === null) {
                break;
              }
              l = (d = l).next;
              d.next = null;
              i.lastBaseUpdate = d;
              i.shared.pending = null;
            }
          }
          if (c === null) {
            a = f;
          }
          i.baseState = a;
          i.firstBaseUpdate = s;
          i.lastBaseUpdate = c;
          if ((e = i.shared.interleaved) !== null) {
            i = e;
            do {
              o |= i.lane;
              i = i.next;
            } while (i !== e);
          } else if (u === null) {
            i.shared.lanes = 0;
          }
          Ra |= o;
          n.lanes = o;
          n.memoizedState = f;
        }
      }
      function Vu(n, e, t) {
        n = e.effects;
        e.effects = null;
        if (n !== null) {
          for (e = 0; e < n.length; e++) {
            var r = n[e];
            var i = r.callback;
            if (i !== null) {
              r.callback = null;
              r = t;
              if (typeof i != "function") {
                throw Error(u(191, i));
              }
              i.call(r);
            }
          }
        }
      }
      var $u = {};
      var Gu = Ei($u);
      var Wu = Ei($u);
      var Ku = Ei($u);
      function Zu(n) {
        if (n === $u) {
          throw Error(u(174));
        }
        return n;
      }
      function qu(n, e) {
        xi(Ku, e);
        xi(Wu, n);
        xi(Gu, $u);
        switch (n = e.nodeType) {
          case 9:
          case 11:
            e = (e = e.documentElement) ? e.namespaceURI : sn(null, "");
            break;
          default:
            e = sn(e = (n = n === 8 ? e.parentNode : e).namespaceURI || null, n = n.tagName);
        }
        Ci(Gu);
        xi(Gu, e);
      }
      function Qu() {
        Ci(Gu);
        Ci(Wu);
        Ci(Ku);
      }
      function Yu(n) {
        Zu(Ku.current);
        var e = Zu(Gu.current);
        var t = sn(e, n.type);
        if (e !== t) {
          xi(Wu, n);
          xi(Gu, t);
        }
      }
      function Ju(n) {
        if (Wu.current === n) {
          Ci(Gu);
          Ci(Wu);
        }
      }
      var Xu = Ei(0);
      function no(n) {
        for (var e = n; e !== null;) {
          if (e.tag === 13) {
            var t = e.memoizedState;
            if (t !== null && ((t = t.dehydrated) === null || t.data === "$?" || t.data === "$!")) {
              return e;
            }
          } else if (e.tag === 19 && e.memoizedProps.revealOrder !== undefined) {
            if (e.flags & 128) {
              return e;
            }
          } else if (e.child !== null) {
            e.child.return = e;
            e = e.child;
            continue;
          }
          if (e === n) {
            break;
          }
          while (e.sibling === null) {
            if (e.return === null || e.return === n) {
              return null;
            }
            e = e.return;
          }
          e.sibling.return = e.return;
          e = e.sibling;
        }
        return null;
      }
      var eo = [];
      function to() {
        for (var n = 0; n < eo.length; n++) {
          eo[n].U = null;
        }
        eo.length = 0;
      }
      var ro = w.ReactCurrentDispatcher;
      var io = w.ReactCurrentBatchConfig;
      var uo = 0;
      var oo = null;
      var lo = null;
      var ao = null;
      var so = false;
      var co = false;
      var fo = 0;
      var ho = 0;
      function Do() {
        throw Error(u(321));
      }
      function po(n, e) {
        if (e === null) {
          return false;
        }
        for (var t = 0; t < e.length && t < n.length; t++) {
          if (!lr(n[t], e[t])) {
            return false;
          }
        }
        return true;
      }
      function vo(n, e, t, r, i, o) {
        uo = o;
        oo = e;
        e.memoizedState = null;
        e.updateQueue = null;
        e.lanes = 0;
        ro.current = n === null || n.memoizedState === null ? Xo : nl;
        n = t(r, i);
        if (co) {
          o = 0;
          do {
            co = false;
            fo = 0;
            if (o >= 25) {
              throw Error(u(301));
            }
            o += 1;
            ao = lo = null;
            e.updateQueue = null;
            ro.current = el;
            n = t(r, i);
          } while (co);
        }
        ro.current = Jo;
        e = lo !== null && lo.next !== null;
        uo = 0;
        ao = lo = oo = null;
        so = false;
        if (e) {
          throw Error(u(300));
        }
        return n;
      }
      function go() {
        var n = fo !== 0;
        fo = 0;
        return n;
      }
      function mo() {
        var n = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        if (ao === null) {
          oo.memoizedState = ao = n;
        } else {
          ao = ao.next = n;
        }
        return ao;
      }
      function bo() {
        if (lo === null) {
          var n = oo.alternate;
          n = n !== null ? n.memoizedState : null;
        } else {
          n = lo.next;
        }
        var e = ao === null ? oo.memoizedState : ao.next;
        if (e !== null) {
          ao = e;
          lo = n;
        } else {
          if (n === null) {
            throw Error(u(310));
          }
          n = {
            memoizedState: (lo = n).memoizedState,
            baseState: lo.baseState,
            baseQueue: lo.baseQueue,
            queue: lo.queue,
            next: null
          };
          if (ao === null) {
            oo.memoizedState = ao = n;
          } else {
            ao = ao.next = n;
          }
        }
        return ao;
      }
      function wo(n, e) {
        if (typeof e == "function") {
          return e(n);
        } else {
          return e;
        }
      }
      function yo(n) {
        var e = bo();
        var t = e.queue;
        if (t === null) {
          throw Error(u(311));
        }
        t.lastRenderedReducer = n;
        var r = lo;
        var i = r.baseQueue;
        var o = t.pending;
        if (o !== null) {
          if (i !== null) {
            var l = i.next;
            i.next = o.next;
            o.next = l;
          }
          r.baseQueue = i = o;
          t.pending = null;
        }
        if (i !== null) {
          o = i.next;
          r = r.baseState;
          var a = l = null;
          var s = null;
          var c = o;
          do {
            var f = c.lane;
            if ((uo & f) === f) {
              if (s !== null) {
                s = s.next = {
                  lane: 0,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null
                };
              }
              r = c.hasEagerState ? c.eagerState : n(r, c.action);
            } else {
              var d = {
                lane: f,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
              };
              if (s === null) {
                a = s = d;
                l = r;
              } else {
                s = s.next = d;
              }
              oo.lanes |= f;
              Ra |= f;
            }
            c = c.next;
          } while (c !== null && c !== o);
          if (s === null) {
            l = r;
          } else {
            s.next = a;
          }
          if (!lr(r, e.memoizedState)) {
            bl = true;
          }
          e.memoizedState = r;
          e.baseState = l;
          e.baseQueue = s;
          t.lastRenderedState = r;
        }
        if ((n = t.interleaved) !== null) {
          i = n;
          do {
            o = i.lane;
            oo.lanes |= o;
            Ra |= o;
            i = i.next;
          } while (i !== n);
        } else if (i === null) {
          t.lanes = 0;
        }
        return [e.memoizedState, t.dispatch];
      }
      function Fo(n) {
        var e = bo();
        var t = e.queue;
        if (t === null) {
          throw Error(u(311));
        }
        t.lastRenderedReducer = n;
        var r = t.dispatch;
        var i = t.pending;
        var o = e.memoizedState;
        if (i !== null) {
          t.pending = null;
          var l = i = i.next;
          do {
            o = n(o, l.action);
            l = l.next;
          } while (l !== i);
          if (!lr(o, e.memoizedState)) {
            bl = true;
          }
          e.memoizedState = o;
          if (e.baseQueue === null) {
            e.baseState = o;
          }
          t.lastRenderedState = o;
        }
        return [o, r];
      }
      function ko() {}
      function Eo(n, e) {
        var t = oo;
        var r = bo();
        var i = e();
        var o = !lr(r.memoizedState, i);
        if (o) {
          r.memoizedState = i;
          bl = true;
        }
        r = r.queue;
        Mo(_o.bind(null, t, r, n), [n]);
        if (r.getSnapshot !== e || o || ao !== null && ao.memoizedState.tag & 1) {
          t.flags |= 2048;
          jo(9, xo.bind(null, t, r, i, e), undefined, null);
          if (Sa === null) {
            throw Error(u(349));
          }
          if (!(uo & 30)) {
            Co(t, e, i);
          }
        }
        return i;
      }
      function Co(n, e, t) {
        n.flags |= 16384;
        n = {
          getSnapshot: e,
          value: t
        };
        if ((e = oo.updateQueue) === null) {
          e = {
            lastEffect: null,
            stores: null
          };
          oo.updateQueue = e;
          e.stores = [n];
        } else if ((t = e.stores) === null) {
          e.stores = [n];
        } else {
          t.push(n);
        }
      }
      function xo(n, e, t, r) {
        e.value = t;
        e.getSnapshot = r;
        if (So(e)) {
          Bo(n);
        }
      }
      function _o(n, e, t) {
        return t(function () {
          if (So(e)) {
            Bo(n);
          }
        });
      }
      function So(n) {
        var e = n.getSnapshot;
        n = n.value;
        try {
          var t = e();
          return !lr(n, t);
        } catch (n) {
          return true;
        }
      }
      function Bo(n) {
        var e = Ou(n, 1);
        if (e !== null) {
          es(e, n, 1, -1);
        }
      }
      function Ao(n) {
        var e = mo();
        if (typeof n == "function") {
          n = n();
        }
        e.memoizedState = e.baseState = n;
        n = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wo,
          lastRenderedState: n
        };
        e.queue = n;
        n = n.dispatch = Zo.bind(null, oo, n);
        return [e.memoizedState, n];
      }
      function jo(n, e, t, r) {
        n = {
          tag: n,
          create: e,
          destroy: t,
          deps: r,
          next: null
        };
        if ((e = oo.updateQueue) === null) {
          e = {
            lastEffect: null,
            stores: null
          };
          oo.updateQueue = e;
          e.lastEffect = n.next = n;
        } else if ((t = e.lastEffect) === null) {
          e.lastEffect = n.next = n;
        } else {
          r = t.next;
          t.next = n;
          n.next = r;
          e.lastEffect = n;
        }
        return n;
      }
      function Io() {
        return bo().memoizedState;
      }
      function To(n, e, t, r) {
        var i = mo();
        oo.flags |= n;
        i.memoizedState = jo(e | 1, t, undefined, r === undefined ? null : r);
      }
      function Oo(n, e, t, r) {
        var i = bo();
        r = r === undefined ? null : r;
        var u = undefined;
        if (lo !== null) {
          var o = lo.memoizedState;
          u = o.destroy;
          if (r !== null && po(r, o.deps)) {
            i.memoizedState = jo(e, t, u, r);
            return;
          }
        }
        oo.flags |= n;
        i.memoizedState = jo(e | 1, t, u, r);
      }
      function Ro(n, e) {
        return To(8390656, 8, n, e);
      }
      function Mo(n, e) {
        return Oo(2048, 8, n, e);
      }
      function Uo(n, e) {
        return Oo(4, 2, n, e);
      }
      function Lo(n, e) {
        return Oo(4, 4, n, e);
      }
      function Po(n, e) {
        if (typeof e == "function") {
          n = n();
          e(n);
          return function () {
            e(null);
          };
        } else if (e != null) {
          n = n();
          e.current = n;
          return function () {
            e.current = null;
          };
        } else {
          return undefined;
        }
      }
      function No(n, e, t) {
        t = t != null ? t.concat([n]) : null;
        return Oo(4, 4, Po.bind(null, e, n), t);
      }
      function Ho() {}
      function zo(n, e) {
        var t = bo();
        e = e === undefined ? null : e;
        var r = t.memoizedState;
        if (r !== null && e !== null && po(e, r[1])) {
          return r[0];
        } else {
          t.memoizedState = [n, e];
          return n;
        }
      }
      function Vo(n, e) {
        var t = bo();
        e = e === undefined ? null : e;
        var r = t.memoizedState;
        if (r !== null && e !== null && po(e, r[1])) {
          return r[0];
        } else {
          n = n();
          t.memoizedState = [n, e];
          return n;
        }
      }
      function $o(n, e, t) {
        if (uo & 21) {
          if (!lr(t, e)) {
            t = ve();
            oo.lanes |= t;
            Ra |= t;
            n.baseState = true;
          }
          return e;
        } else {
          if (n.baseState) {
            n.baseState = false;
            bl = true;
          }
          return n.memoizedState = t;
        }
      }
      function Go(n, e) {
        var t = we;
        we = t !== 0 && t < 4 ? t : 4;
        n(true);
        var r = io.transition;
        io.transition = {};
        try {
          n(false);
          e();
        } finally {
          we = t;
          io.transition = r;
        }
      }
      function Wo() {
        return bo().memoizedState;
      }
      function Ko(n, e, t) {
        var r = ns(n);
        t = {
          lane: r,
          action: t,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (qo(n)) {
          Qo(e, t);
        } else if ((t = Tu(n, e, t, r)) !== null) {
          es(t, n, r, Xa());
          Yo(t, e, r);
        }
      }
      function Zo(n, e, t) {
        var r = ns(n);
        var i = {
          lane: r,
          action: t,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (qo(n)) {
          Qo(e, i);
        } else {
          var u = n.alternate;
          if (n.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer) !== null) {
            try {
              var o = e.lastRenderedState;
              var l = u(o, t);
              i.hasEagerState = true;
              i.eagerState = l;
              if (lr(l, o)) {
                var a = e.interleaved;
                if (a === null) {
                  i.next = i;
                  Iu(e);
                } else {
                  i.next = a.next;
                  a.next = i;
                }
                e.interleaved = i;
                return;
              }
            } catch (n) {}
          }
          if ((t = Tu(n, e, i, r)) !== null) {
            es(t, n, r, i = Xa());
            Yo(t, e, r);
          }
        }
      }
      function qo(n) {
        var e = n.alternate;
        return n === oo || e !== null && e === oo;
      }
      function Qo(n, e) {
        co = so = true;
        var t = n.pending;
        if (t === null) {
          e.next = e;
        } else {
          e.next = t.next;
          t.next = e;
        }
        n.pending = e;
      }
      function Yo(n, e, t) {
        if (t & 4194240) {
          var r = e.lanes;
          t |= r &= n.pendingLanes;
          e.lanes = t;
          be(n, t);
        }
      }
      var Jo = {
        readContext: Au,
        useCallback: Do,
        useContext: Do,
        useEffect: Do,
        useImperativeHandle: Do,
        useInsertionEffect: Do,
        useLayoutEffect: Do,
        useMemo: Do,
        useReducer: Do,
        useRef: Do,
        useState: Do,
        useDebugValue: Do,
        useDeferredValue: Do,
        useTransition: Do,
        useMutableSource: Do,
        useSyncExternalStore: Do,
        useId: Do,
        unstable_isNewReconciler: false
      };
      var Xo = {
        readContext: Au,
        useCallback: function (n, e) {
          mo().memoizedState = [n, e === undefined ? null : e];
          return n;
        },
        useContext: Au,
        useEffect: Ro,
        useImperativeHandle: function (n, e, t) {
          t = t != null ? t.concat([n]) : null;
          return To(4194308, 4, Po.bind(null, e, n), t);
        },
        useLayoutEffect: function (n, e) {
          return To(4194308, 4, n, e);
        },
        useInsertionEffect: function (n, e) {
          return To(4, 2, n, e);
        },
        useMemo: function (n, e) {
          var t = mo();
          e = e === undefined ? null : e;
          n = n();
          t.memoizedState = [n, e];
          return n;
        },
        useReducer: function (n, e, t) {
          var r = mo();
          e = t !== undefined ? t(e) : e;
          r.memoizedState = r.baseState = e;
          n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: e
          };
          r.queue = n;
          n = n.dispatch = Ko.bind(null, oo, n);
          return [r.memoizedState, n];
        },
        useRef: function (n) {
          n = {
            current: n
          };
          return mo().memoizedState = n;
        },
        useState: Ao,
        useDebugValue: Ho,
        useDeferredValue: function (n) {
          return mo().memoizedState = n;
        },
        useTransition: function () {
          var n = Ao(false);
          var e = n[0];
          n = Go.bind(null, n[1]);
          mo().memoizedState = n;
          return [e, n];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (n, e, t) {
          var r = oo;
          var i = mo();
          if (iu) {
            if (t === undefined) {
              throw Error(u(407));
            }
            t = t();
          } else {
            t = e();
            if (Sa === null) {
              throw Error(u(349));
            }
            if (!(uo & 30)) {
              Co(r, e, t);
            }
          }
          i.memoizedState = t;
          var o = {
            value: t,
            getSnapshot: e
          };
          i.queue = o;
          Ro(_o.bind(null, r, o, n), [n]);
          r.flags |= 2048;
          jo(9, xo.bind(null, r, o, t, e), undefined, null);
          return t;
        },
        useId: function () {
          var n = mo();
          var e = Sa.identifierPrefix;
          if (iu) {
            var t = Yi;
            e = ":" + e + "R" + (t = (Qi & ~(1 << 32 - le(Qi) - 1)).toString(32) + t);
            if ((t = fo++) > 0) {
              e += "H" + t.toString(32);
            }
            e += ":";
          } else {
            e = ":" + e + "r" + (t = ho++).toString(32) + ":";
          }
          return n.memoizedState = e;
        },
        unstable_isNewReconciler: false
      };
      var nl = {
        readContext: Au,
        useCallback: zo,
        useContext: Au,
        useEffect: Mo,
        useImperativeHandle: No,
        useInsertionEffect: Uo,
        useLayoutEffect: Lo,
        useMemo: Vo,
        useReducer: yo,
        useRef: Io,
        useState: function () {
          return yo(wo);
        },
        useDebugValue: Ho,
        useDeferredValue: function (n) {
          return $o(bo(), lo.memoizedState, n);
        },
        useTransition: function () {
          return [yo(wo)[0], bo().memoizedState];
        },
        useMutableSource: ko,
        useSyncExternalStore: Eo,
        useId: Wo,
        unstable_isNewReconciler: false
      };
      var el = {
        readContext: Au,
        useCallback: zo,
        useContext: Au,
        useEffect: Mo,
        useImperativeHandle: No,
        useInsertionEffect: Uo,
        useLayoutEffect: Lo,
        useMemo: Vo,
        useReducer: Fo,
        useRef: Io,
        useState: function () {
          return Fo(wo);
        },
        useDebugValue: Ho,
        useDeferredValue: function (n) {
          var e = bo();
          if (lo === null) {
            return e.memoizedState = n;
          } else {
            return $o(e, lo.memoizedState, n);
          }
        },
        useTransition: function () {
          return [Fo(wo)[0], bo().memoizedState];
        },
        useMutableSource: ko,
        useSyncExternalStore: Eo,
        useId: Wo,
        unstable_isNewReconciler: false
      };
      function tl(n, e) {
        if (n && n.defaultProps) {
          e = U({}, e);
          for (var t in n = n.defaultProps) {
            if (e[t] === undefined) {
              e[t] = n[t];
            }
          }
          return e;
        }
        return e;
      }
      function rl(n, e, t, r) {
        t = (t = t(r, e = n.memoizedState)) == null ? e : U({}, e, t);
        n.memoizedState = t;
        if (n.lanes === 0) {
          n.updateQueue.baseState = t;
        }
      }
      var il = {
        isMounted: function (n) {
          return !!(n = n.L) && Vn(n) === n;
        },
        enqueueSetState: function (n, e, t) {
          n = n.L;
          var r = Xa();
          var i = ns(n);
          var u = Lu(r, i);
          u.payload = e;
          if (t != null) {
            u.callback = t;
          }
          if ((e = Pu(n, u, i)) !== null) {
            es(e, n, i, r);
            Nu(e, n, i);
          }
        },
        enqueueReplaceState: function (n, e, t) {
          n = n.L;
          var r = Xa();
          var i = ns(n);
          var u = Lu(r, i);
          u.tag = 1;
          u.payload = e;
          if (t != null) {
            u.callback = t;
          }
          if ((e = Pu(n, u, i)) !== null) {
            es(e, n, i, r);
            Nu(e, n, i);
          }
        },
        enqueueForceUpdate: function (n, e) {
          n = n.L;
          var t = Xa();
          var r = ns(n);
          var i = Lu(t, r);
          i.tag = 2;
          if (e != null) {
            i.callback = e;
          }
          if ((e = Pu(n, i, r)) !== null) {
            es(e, n, r, t);
            Nu(e, n, r);
          }
        }
      };
      function ul(n, e, t, r, i, u, o) {
        if (typeof (n = n.stateNode).shouldComponentUpdate == "function") {
          return n.shouldComponentUpdate(r, u, o);
        } else {
          return !e.prototype || !e.prototype.isPureReactComponent || !ar(t, r) || !ar(i, u);
        }
      }
      function ol(n, e, t) {
        var r = false;
        var i = _i;
        var u = e.contextType;
        if (typeof u == "object" && u !== null) {
          u = Au(u);
        } else {
          i = Ii(e) ? Ai : Si.current;
          u = (r = (r = e.contextTypes) != null) ? ji(n, i) : _i;
        }
        e = new e(t, u);
        n.memoizedState = e.state ?? null;
        e.updater = il;
        n.stateNode = e;
        e.L = n;
        if (r) {
          (n = n.stateNode).I = i;
          n.T = u;
        }
        return e;
      }
      function ll(n, e, t, r) {
        n = e.state;
        if (typeof e.componentWillReceiveProps == "function") {
          e.componentWillReceiveProps(t, r);
        }
        if (typeof e.UNSAFE_componentWillReceiveProps == "function") {
          e.UNSAFE_componentWillReceiveProps(t, r);
        }
        if (e.state !== n) {
          il.enqueueReplaceState(e, e.state, null);
        }
      }
      function al(n, e, t, r) {
        var i = n.stateNode;
        i.props = t;
        i.state = n.memoizedState;
        i.refs = {};
        Mu(n);
        var u = e.contextType;
        if (typeof u == "object" && u !== null) {
          i.context = Au(u);
        } else {
          u = Ii(e) ? Ai : Si.current;
          i.context = ji(n, u);
        }
        i.state = n.memoizedState;
        if (typeof (u = e.getDerivedStateFromProps) == "function") {
          rl(n, e, u, t);
          i.state = n.memoizedState;
        }
        if (typeof e.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) {
          e = i.state;
          if (typeof i.componentWillMount == "function") {
            i.componentWillMount();
          }
          if (typeof i.UNSAFE_componentWillMount == "function") {
            i.UNSAFE_componentWillMount();
          }
          if (e !== i.state) {
            il.enqueueReplaceState(i, i.state, null);
          }
          zu(n, t, i, r);
          i.state = n.memoizedState;
        }
        if (typeof i.componentDidMount == "function") {
          n.flags |= 4194308;
        }
      }
      function sl(n, e) {
        try {
          var t = "";
          var r = e;
          do {
            t += H(r);
            r = r.return;
          } while (r);
          var i = t;
        } catch (n) {
          i = "\nError generating stack: " + n.message + "\n" + n.stack;
        }
        return {
          value: n,
          source: e,
          stack: i,
          digest: null
        };
      }
      function cl(n, e, t) {
        return {
          value: n,
          source: null,
          stack: t ?? null,
          digest: e ?? null
        };
      }
      function fl(n, e) {
        try {
          console.error(e.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      function hl(n, e, t) {
        (t = Lu(-1, t)).tag = 3;
        t.payload = {
          element: null
        };
        var r = e.value;
        t.callback = function () {
          if (!Va) {
            Va = true;
            $a = r;
          }
          fl(0, e);
        };
        return t;
      }
      function Dl(n, e, t) {
        (t = Lu(-1, t)).tag = 3;
        var r = n.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var i = e.value;
          t.payload = function () {
            return r(i);
          };
          t.callback = function () {
            fl(0, e);
          };
        }
        var u = n.stateNode;
        if (u !== null && typeof u.componentDidCatch == "function") {
          t.callback = function () {
            fl(0, e);
            if (typeof r != "function") {
              if (Ga === null) {
                Ga = new Set([this]);
              } else {
                Ga.add(this);
              }
            }
            var n = e.stack;
            this.componentDidCatch(e.value, {
              componentStack: n !== null ? n : ""
            });
          };
        }
        return t;
      }
      function pl(n, e, t) {
        var r = n.pingCache;
        if (r === null) {
          r = n.pingCache = new dl();
          var i = new Set();
          r.set(e, i);
        } else if ((i = r.get(e)) === undefined) {
          i = new Set();
          r.set(e, i);
        }
        if (!i.has(t)) {
          i.add(t);
          n = Es.bind(null, n, e, t);
          e.then(n, n);
        }
      }
      function vl(n) {
        do {
          var e;
          if (e = n.tag === 13) {
            e = (e = n.memoizedState) === null || e.dehydrated !== null;
          }
          if (e) {
            return n;
          }
          n = n.return;
        } while (n !== null);
        return null;
      }
      function gl(n, e, t, r, i) {
        if (n.mode & 1) {
          n.flags |= 65536;
          n.lanes = i;
          return n;
        } else {
          if (n === e) {
            n.flags |= 65536;
          } else {
            n.flags |= 128;
            t.flags |= 131072;
            t.flags &= -52805;
            if (t.tag === 1) {
              if (t.alternate === null) {
                t.tag = 17;
              } else {
                (e = Lu(-1, 1)).tag = 2;
                Pu(t, e, 1);
              }
            }
            t.lanes |= 1;
          }
          return n;
        }
      }
      var ml = w.ReactCurrentOwner;
      var bl = false;
      function wl(n, e, t, r) {
        e.child = n === null ? yu(e, null, t, r) : wu(e, n.child, t, r);
      }
      function yl(n, e, t, r, i) {
        t = t.render;
        var u = e.ref;
        Bu(e, i);
        r = vo(n, e, t, r, u, i);
        t = go();
        if (n === null || bl) {
          if (iu && t) {
            nu(e);
          }
          e.flags |= 1;
          wl(n, e, r, i);
          return e.child;
        } else {
          e.updateQueue = n.updateQueue;
          e.flags &= -2053;
          n.lanes &= ~i;
          return Vl(n, e, i);
        }
      }
      function Fl(n, e, t, r, i) {
        if (n === null) {
          var u = t.type;
          if (typeof u != "function" || js(u) || u.defaultProps !== undefined || t.compare !== null || t.defaultProps !== undefined) {
            (n = Ts(t.type, null, r, e, e.mode, i)).ref = e.ref;
            n.return = e;
            return e.child = n;
          } else {
            e.tag = 15;
            e.type = u;
            return kl(n, e, u, r, i);
          }
        }
        u = n.child;
        if ((n.lanes & i) === 0) {
          var o = u.memoizedProps;
          if ((t = (t = t.compare) !== null ? t : ar)(o, r) && n.ref === e.ref) {
            return Vl(n, e, i);
          }
        }
        e.flags |= 1;
        (n = Is(u, r)).ref = e.ref;
        n.return = e;
        return e.child = n;
      }
      function kl(n, e, t, r, i) {
        if (n !== null) {
          var u = n.memoizedProps;
          if (ar(u, r) && n.ref === e.ref) {
            bl = false;
            e.pendingProps = r = u;
            if ((n.lanes & i) === 0) {
              e.lanes = n.lanes;
              return Vl(n, e, i);
            }
            if (n.flags & 131072) {
              bl = true;
            }
          }
        }
        return xl(n, e, t, r, i);
      }
      function El(n, e, t) {
        var r = e.pendingProps;
        var i = r.children;
        var u = n !== null ? n.memoizedState : null;
        if (r.mode === "hidden") {
          if (e.mode & 1) {
            if (!(t & 1073741824)) {
              n = u !== null ? u.baseLanes | t : t;
              e.lanes = e.childLanes = 1073741824;
              e.memoizedState = {
                baseLanes: n,
                cachePool: null,
                transitions: null
              };
              e.updateQueue = null;
              xi(Ia, ja);
              ja |= n;
              return null;
            }
            e.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            };
            r = u !== null ? u.baseLanes : t;
            xi(Ia, ja);
            ja |= r;
          } else {
            e.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            };
            xi(Ia, ja);
            ja |= t;
          }
        } else {
          if (u !== null) {
            r = u.baseLanes | t;
            e.memoizedState = null;
          } else {
            r = t;
          }
          xi(Ia, ja);
          ja |= r;
        }
        wl(n, e, i, t);
        return e.child;
      }
      function Cl(n, e) {
        var t = e.ref;
        if (n === null && t !== null || n !== null && n.ref !== t) {
          e.flags |= 512;
          e.flags |= 2097152;
        }
      }
      function xl(n, e, t, r, i) {
        var u = Ii(t) ? Ai : Si.current;
        u = ji(e, u);
        Bu(e, i);
        t = vo(n, e, t, r, u, i);
        r = go();
        if (n === null || bl) {
          if (iu && r) {
            nu(e);
          }
          e.flags |= 1;
          wl(n, e, t, i);
          return e.child;
        } else {
          e.updateQueue = n.updateQueue;
          e.flags &= -2053;
          n.lanes &= ~i;
          return Vl(n, e, i);
        }
      }
      function _l(n, e, t, r, i) {
        if (Ii(t)) {
          var u = true;
          Mi(e);
        } else {
          u = false;
        }
        Bu(e, i);
        if (e.stateNode === null) {
          zl(n, e);
          ol(e, t, r);
          al(e, t, r, i);
          r = true;
        } else if (n === null) {
          var o = e.stateNode;
          var l = e.memoizedProps;
          o.props = l;
          var a = o.context;
          var s = t.contextType;
          if (typeof s == "object" && s !== null) {
            s = Au(s);
          } else {
            s = ji(e, s = Ii(t) ? Ai : Si.current);
          }
          var c = t.getDerivedStateFromProps;
          var f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
          if (!f && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function")) {
            if (l !== r || a !== s) {
              ll(e, o, r, s);
            }
          }
          Ru = false;
          var d = e.memoizedState;
          o.state = d;
          zu(e, r, o, i);
          a = e.memoizedState;
          if (l !== r || d !== a || Bi.current || Ru) {
            if (typeof c == "function") {
              rl(e, t, c, r);
              a = e.memoizedState;
            }
            if (l = Ru || ul(e, t, l, r, d, a, s)) {
              if (!f && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) {
                if (typeof o.componentWillMount == "function") {
                  o.componentWillMount();
                }
                if (typeof o.UNSAFE_componentWillMount == "function") {
                  o.UNSAFE_componentWillMount();
                }
              }
              if (typeof o.componentDidMount == "function") {
                e.flags |= 4194308;
              }
            } else {
              if (typeof o.componentDidMount == "function") {
                e.flags |= 4194308;
              }
              e.memoizedProps = r;
              e.memoizedState = a;
            }
            o.props = r;
            o.state = a;
            o.context = s;
            r = l;
          } else {
            if (typeof o.componentDidMount == "function") {
              e.flags |= 4194308;
            }
            r = false;
          }
        } else {
          o = e.stateNode;
          Uu(n, e);
          l = e.memoizedProps;
          s = e.type === e.elementType ? l : tl(e.type, l);
          o.props = s;
          f = e.pendingProps;
          d = o.context;
          if (typeof (a = t.contextType) == "object" && a !== null) {
            a = Au(a);
          } else {
            a = ji(e, a = Ii(t) ? Ai : Si.current);
          }
          var h = t.getDerivedStateFromProps;
          if (!(c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function")) {
            if (l !== f || d !== a) {
              ll(e, o, r, a);
            }
          }
          Ru = false;
          d = e.memoizedState;
          o.state = d;
          zu(e, r, o, i);
          var D = e.memoizedState;
          if (l !== f || d !== D || Bi.current || Ru) {
            if (typeof h == "function") {
              rl(e, t, h, r);
              D = e.memoizedState;
            }
            if (s = Ru || ul(e, t, s, r, d, D, a) || false) {
              if (!c && (typeof o.UNSAFE_componentWillUpdate == "function" || typeof o.componentWillUpdate == "function")) {
                if (typeof o.componentWillUpdate == "function") {
                  o.componentWillUpdate(r, D, a);
                }
                if (typeof o.UNSAFE_componentWillUpdate == "function") {
                  o.UNSAFE_componentWillUpdate(r, D, a);
                }
              }
              if (typeof o.componentDidUpdate == "function") {
                e.flags |= 4;
              }
              if (typeof o.getSnapshotBeforeUpdate == "function") {
                e.flags |= 1024;
              }
            } else {
              if (typeof o.componentDidUpdate == "function" && (l !== n.memoizedProps || d !== n.memoizedState)) {
                e.flags |= 4;
              }
              if (typeof o.getSnapshotBeforeUpdate == "function" && (l !== n.memoizedProps || d !== n.memoizedState)) {
                e.flags |= 1024;
              }
              e.memoizedProps = r;
              e.memoizedState = D;
            }
            o.props = r;
            o.state = D;
            o.context = a;
            r = s;
          } else {
            if (typeof o.componentDidUpdate == "function" && (l !== n.memoizedProps || d !== n.memoizedState)) {
              e.flags |= 4;
            }
            if (typeof o.getSnapshotBeforeUpdate == "function" && (l !== n.memoizedProps || d !== n.memoizedState)) {
              e.flags |= 1024;
            }
            r = false;
          }
        }
        return Sl(n, e, t, r, u, i);
      }
      function Sl(n, e, t, r, i, u) {
        Cl(n, e);
        var o = !!(e.flags & 128);
        if (!r && !o) {
          if (i) {
            Ui(e, t, false);
          }
          return Vl(n, e, u);
        }
        r = e.stateNode;
        ml.current = e;
        var l = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        e.flags |= 1;
        if (n !== null && o) {
          e.child = wu(e, n.child, null, u);
          e.child = wu(e, null, l, u);
        } else {
          wl(n, e, l, u);
        }
        e.memoizedState = r.state;
        if (i) {
          Ui(e, t, true);
        }
        return e.child;
      }
      function Bl(n) {
        var e = n.stateNode;
        if (e.pendingContext) {
          Oi(0, e.pendingContext, e.pendingContext !== e.context);
        } else if (e.context) {
          Oi(0, e.context, false);
        }
        qu(n, e.containerInfo);
      }
      function Al(n, e, t, r, i) {
        hu();
        Du(i);
        e.flags |= 256;
        wl(n, e, t, r);
        return e.child;
      }
      var jl;
      var Il;
      var Tl;
      var Ol = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function Rl(n) {
        return {
          baseLanes: n,
          cachePool: null,
          transitions: null
        };
      }
      function Ml(n, e, t) {
        var r;
        var i = e.pendingProps;
        var o = Xu.current;
        var l = false;
        var a = !!(e.flags & 128);
        if (!(r = a)) {
          r = (n === null || n.memoizedState !== null) && !!(o & 2);
        }
        if (r) {
          l = true;
          e.flags &= -129;
        } else if (n === null || n.memoizedState !== null) {
          o |= 1;
        }
        xi(Xu, o & 1);
        if (n === null) {
          su(e);
          if ((n = e.memoizedState) !== null && (n = n.dehydrated) !== null) {
            if (e.mode & 1) {
              if (n.data === "$!") {
                e.lanes = 8;
              } else {
                e.lanes = 1073741824;
              }
            } else {
              e.lanes = 1;
            }
            return null;
          } else {
            a = i.children;
            n = i.fallback;
            if (l) {
              i = e.mode;
              l = e.child;
              a = {
                mode: "hidden",
                children: a
              };
              if (i & 1 || l === null) {
                l = Rs(a, i, 0, null);
              } else {
                l.childLanes = 0;
                l.pendingProps = a;
              }
              n = Os(n, i, t, null);
              l.return = e;
              n.return = e;
              l.sibling = n;
              e.child = l;
              e.child.memoizedState = Rl(t);
              e.memoizedState = Ol;
              return n;
            } else {
              return Ul(e, a);
            }
          }
        }
        if ((o = n.memoizedState) !== null && (r = o.dehydrated) !== null) {
          return function (n, e, t, r, i, o, l) {
            if (t) {
              if (e.flags & 256) {
                e.flags &= -257;
                return Ll(n, e, l, r = cl(Error(u(422))));
              } else if (e.memoizedState !== null) {
                e.child = n.child;
                e.flags |= 128;
                return null;
              } else {
                o = r.fallback;
                i = e.mode;
                r = Rs({
                  mode: "visible",
                  children: r.children
                }, i, 0, null);
                (o = Os(o, i, l, null)).flags |= 2;
                r.return = e;
                o.return = e;
                r.sibling = o;
                e.child = r;
                if (e.mode & 1) {
                  wu(e, n.child, null, l);
                }
                e.child.memoizedState = Rl(l);
                e.memoizedState = Ol;
                return o;
              }
            }
            if (!(e.mode & 1)) {
              return Ll(n, e, l, null);
            }
            if (i.data === "$!") {
              if (r = i.nextSibling && i.nextSibling.dataset) {
                var a = r.dgst;
              }
              r = a;
              return Ll(n, e, l, r = cl(o = Error(u(419)), r, undefined));
            }
            a = (l & n.childLanes) !== 0;
            if (bl || a) {
              if ((r = Sa) !== null) {
                switch (l & -l) {
                  case 4:
                    i = 2;
                    break;
                  case 16:
                    i = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    i = 32;
                    break;
                  case 536870912:
                    i = 268435456;
                    break;
                  default:
                    i = 0;
                }
                if ((i = (i & (r.suspendedLanes | l)) !== 0 ? 0 : i) !== 0 && i !== o.retryLane) {
                  o.retryLane = i;
                  Ou(n, i);
                  es(r, n, i, -1);
                }
              }
              Ds();
              return Ll(n, e, l, r = cl(Error(u(421))));
            }
            if (i.data === "$?") {
              e.flags |= 128;
              e.child = n.child;
              e = xs.bind(null, n);
              i.P = e;
              return null;
            } else {
              n = o.treeContext;
              ru = si(i.nextSibling);
              tu = e;
              iu = true;
              uu = null;
              if (n !== null) {
                Ki[Zi++] = Qi;
                Ki[Zi++] = Yi;
                Ki[Zi++] = qi;
                Qi = n.id;
                Yi = n.overflow;
                qi = e;
              }
              e = Ul(e, r.children);
              e.flags |= 4096;
              return e;
            }
          }(n, e, a, i, r, o, t);
        }
        if (l) {
          l = i.fallback;
          a = e.mode;
          r = (o = n.child).sibling;
          var s = {
            mode: "hidden",
            children: i.children
          };
          if (a & 1 || e.child === o) {
            (i = Is(o, s)).subtreeFlags = o.subtreeFlags & 14680064;
          } else {
            (i = e.child).childLanes = 0;
            i.pendingProps = s;
            e.deletions = null;
          }
          if (r !== null) {
            l = Is(r, l);
          } else {
            (l = Os(l, a, t, null)).flags |= 2;
          }
          l.return = e;
          i.return = e;
          i.sibling = l;
          e.child = i;
          i = l;
          l = e.child;
          a = (a = n.child.memoizedState) === null ? Rl(t) : {
            baseLanes: a.baseLanes | t,
            cachePool: null,
            transitions: a.transitions
          };
          l.memoizedState = a;
          l.childLanes = n.childLanes & ~t;
          e.memoizedState = Ol;
          return i;
        }
        n = (l = n.child).sibling;
        i = Is(l, {
          mode: "visible",
          children: i.children
        });
        if (!(e.mode & 1)) {
          i.lanes = t;
        }
        i.return = e;
        i.sibling = null;
        if (n !== null) {
          if ((t = e.deletions) === null) {
            e.deletions = [n];
            e.flags |= 16;
          } else {
            t.push(n);
          }
        }
        e.child = i;
        e.memoizedState = null;
        return i;
      }
      function Ul(n, e) {
        (e = Rs({
          mode: "visible",
          children: e
        }, n.mode, 0, null)).return = n;
        return n.child = e;
      }
      function Ll(n, e, t, r) {
        if (r !== null) {
          Du(r);
        }
        wu(e, n.child, null, t);
        (n = Ul(e, e.pendingProps.children)).flags |= 2;
        e.memoizedState = null;
        return n;
      }
      function Pl(n, e, t) {
        n.lanes |= e;
        var r = n.alternate;
        if (r !== null) {
          r.lanes |= e;
        }
        Su(n.return, e, t);
      }
      function Nl(n, e, t, r, i) {
        var u = n.memoizedState;
        if (u === null) {
          n.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: i
          };
        } else {
          u.isBackwards = e;
          u.rendering = null;
          u.renderingStartTime = 0;
          u.last = r;
          u.tail = t;
          u.tailMode = i;
        }
      }
      function Hl(n, e, t) {
        var r = e.pendingProps;
        var i = r.revealOrder;
        var u = r.tail;
        wl(n, e, r.children, t);
        if ((r = Xu.current) & 2) {
          r = r & 1 | 2;
          e.flags |= 128;
        } else {
          if (n !== null && n.flags & 128) {
            n: for (n = e.child; n !== null;) {
              if (n.tag === 13) {
                if (n.memoizedState !== null) {
                  Pl(n, t, e);
                }
              } else if (n.tag === 19) {
                Pl(n, t, e);
              } else if (n.child !== null) {
                n.child.return = n;
                n = n.child;
                continue;
              }
              if (n === e) {
                break n;
              }
              while (n.sibling === null) {
                if (n.return === null || n.return === e) {
                  break n;
                }
                n = n.return;
              }
              n.sibling.return = n.return;
              n = n.sibling;
            }
          }
          r &= 1;
        }
        xi(Xu, r);
        if (e.mode & 1) {
          switch (i) {
            case "forwards":
              t = e.child;
              i = null;
              while (t !== null) {
                if ((n = t.alternate) !== null && no(n) === null) {
                  i = t;
                }
                t = t.sibling;
              }
              if ((t = i) === null) {
                i = e.child;
                e.child = null;
              } else {
                i = t.sibling;
                t.sibling = null;
              }
              Nl(e, false, i, t, u);
              break;
            case "backwards":
              t = null;
              i = e.child;
              e.child = null;
              while (i !== null) {
                if ((n = i.alternate) !== null && no(n) === null) {
                  e.child = i;
                  break;
                }
                n = i.sibling;
                i.sibling = t;
                t = i;
                i = n;
              }
              Nl(e, true, t, null, u);
              break;
            case "together":
              Nl(e, false, null, null, undefined);
              break;
            default:
              e.memoizedState = null;
          }
        } else {
          e.memoizedState = null;
        }
        return e.child;
      }
      function zl(n, e) {
        if (!(e.mode & 1) && n !== null) {
          n.alternate = null;
          e.alternate = null;
          e.flags |= 2;
        }
      }
      function Vl(n, e, t) {
        if (n !== null) {
          e.dependencies = n.dependencies;
        }
        Ra |= e.lanes;
        if ((t & e.childLanes) === 0) {
          return null;
        }
        if (n !== null && e.child !== n.child) {
          throw Error(u(153));
        }
        if (e.child !== null) {
          t = Is(n = e.child, n.pendingProps);
          e.child = t;
          t.return = e;
          while (n.sibling !== null) {
            n = n.sibling;
            (t = t.sibling = Is(n, n.pendingProps)).return = e;
          }
          t.sibling = null;
        }
        return e.child;
      }
      function $l(n, e) {
        if (!iu) {
          switch (n.tailMode) {
            case "hidden":
              e = n.tail;
              var t = null;
              for (; e !== null;) {
                if (e.alternate !== null) {
                  t = e;
                }
                e = e.sibling;
              }
              if (t === null) {
                n.tail = null;
              } else {
                t.sibling = null;
              }
              break;
            case "collapsed":
              t = n.tail;
              var r = null;
              for (; t !== null;) {
                if (t.alternate !== null) {
                  r = t;
                }
                t = t.sibling;
              }
              if (r === null) {
                if (e || n.tail === null) {
                  n.tail = null;
                } else {
                  n.tail.sibling = null;
                }
              } else {
                r.sibling = null;
              }
          }
        }
      }
      function Gl(n) {
        var e = n.alternate !== null && n.alternate.child === n.child;
        var t = 0;
        var r = 0;
        if (e) {
          for (var i = n.child; i !== null;) {
            t |= i.lanes | i.childLanes;
            r |= i.subtreeFlags & 14680064;
            r |= i.flags & 14680064;
            i.return = n;
            i = i.sibling;
          }
        } else {
          for (i = n.child; i !== null;) {
            t |= i.lanes | i.childLanes;
            r |= i.subtreeFlags;
            r |= i.flags;
            i.return = n;
            i = i.sibling;
          }
        }
        n.subtreeFlags |= r;
        n.childLanes = t;
        return e;
      }
      function Wl(n, e, t) {
        var r = e.pendingProps;
        eu(e);
        switch (e.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            Gl(e);
            return null;
          case 1:
          case 17:
            if (Ii(e.type)) {
              Ti();
            }
            Gl(e);
            return null;
          case 3:
            r = e.stateNode;
            Qu();
            Ci(Bi);
            Ci(Si);
            to();
            if (r.pendingContext) {
              r.context = r.pendingContext;
              r.pendingContext = null;
            }
            if (n === null || n.child === null) {
              if (fu(e)) {
                e.flags |= 4;
              } else if (n !== null && (!n.memoizedState.isDehydrated || !!(e.flags & 256))) {
                e.flags |= 1024;
                if (uu !== null) {
                  us(uu);
                  uu = null;
                }
              }
            }
            Gl(e);
            return null;
          case 5:
            Ju(e);
            var i = Zu(Ku.current);
            t = e.type;
            if (n !== null && e.stateNode != null) {
              Il(n, e, t, r);
              if (n.ref !== e.ref) {
                e.flags |= 512;
                e.flags |= 2097152;
              }
            } else {
              if (!r) {
                if (e.stateNode === null) {
                  throw Error(u(166));
                }
                Gl(e);
                return null;
              }
              n = Zu(Gu.current);
              if (fu(e)) {
                r = e.stateNode;
                t = e.type;
                var o = e.memoizedProps;
                r[di] = e;
                r[hi] = o;
                n = !!(e.mode & 1);
                switch (t) {
                  case "dialog":
                    Pr("cancel", r);
                    Pr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Pr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < Rr.length; i++) {
                      Pr(Rr[i], r);
                    }
                    break;
                  case "source":
                    Pr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Pr("error", r);
                    Pr("load", r);
                    break;
                  case "details":
                    Pr("toggle", r);
                    break;
                  case "input":
                    Q(r, o);
                    Pr("invalid", r);
                    break;
                  case "select":
                    r._ = {
                      wasMultiple: !!o.multiple
                    };
                    Pr("invalid", r);
                    break;
                  case "textarea":
                    un(r, o);
                    Pr("invalid", r);
                }
                bn(t, o);
                i = null;
                for (var a in o) {
                  if (o.hasOwnProperty(a)) {
                    var s = o[a];
                    if (a === "children") {
                      if (typeof s == "string") {
                        if (r.textContent !== s) {
                          if (o.suppressHydrationWarning !== true) {
                            Jr(r.textContent, s, n);
                          }
                          i = ["children", s];
                        }
                      } else if (typeof s == "number" && r.textContent !== "" + s) {
                        if (o.suppressHydrationWarning !== true) {
                          Jr(r.textContent, s, n);
                        }
                        i = ["children", "" + s];
                      }
                    } else if (l.hasOwnProperty(a) && s != null && a === "onScroll") {
                      Pr("scroll", r);
                    }
                  }
                }
                switch (t) {
                  case "input":
                    W(r);
                    X(r, o, true);
                    break;
                  case "textarea":
                    W(r);
                    ln(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    if (typeof o.onClick == "function") {
                      r.onclick = Xr;
                    }
                }
                r = i;
                e.updateQueue = r;
                if (r !== null) {
                  e.flags |= 4;
                }
              } else {
                a = i.nodeType === 9 ? i : i.ownerDocument;
                if (n === "http://www.w3.org/1999/xhtml") {
                  n = an(t);
                }
                if (n === "http://www.w3.org/1999/xhtml") {
                  if (t === "script") {
                    (n = a.createElement("div")).innerHTML = "<script></script>";
                    n = n.removeChild(n.firstChild);
                  } else if (typeof r.is == "string") {
                    n = a.createElement(t, {
                      is: r.is
                    });
                  } else {
                    n = a.createElement(t);
                    if (t === "select") {
                      a = n;
                      if (r.multiple) {
                        a.multiple = true;
                      } else if (r.size) {
                        a.size = r.size;
                      }
                    }
                  }
                } else {
                  n = a.createElementNS(n, t);
                }
                n[di] = e;
                n[hi] = r;
                jl(n, e);
                e.stateNode = n;
                n: {
                  a = wn(t, r);
                  switch (t) {
                    case "dialog":
                      Pr("cancel", n);
                      Pr("close", n);
                      i = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Pr("load", n);
                      i = r;
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Rr.length; i++) {
                        Pr(Rr[i], n);
                      }
                      i = r;
                      break;
                    case "source":
                      Pr("error", n);
                      i = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Pr("error", n);
                      Pr("load", n);
                      i = r;
                      break;
                    case "details":
                      Pr("toggle", n);
                      i = r;
                      break;
                    case "input":
                      Q(n, r);
                      i = q(n, r);
                      Pr("invalid", n);
                      break;
                    case "option":
                    default:
                      i = r;
                      break;
                    case "select":
                      n._ = {
                        wasMultiple: !!r.multiple
                      };
                      i = U({}, r, {
                        value: undefined
                      });
                      Pr("invalid", n);
                      break;
                    case "textarea":
                      un(n, r);
                      i = rn(n, r);
                      Pr("invalid", n);
                  }
                  bn(t, i);
                  for (o in s = i) {
                    if (s.hasOwnProperty(o)) {
                      var c = s[o];
                      if (o === "style") {
                        gn(n, c);
                      } else if (o === "dangerouslySetInnerHTML") {
                        if ((c = c ? c.S : undefined) != null) {
                          dn(n, c);
                        }
                      } else if (o === "children") {
                        if (typeof c == "string") {
                          if (t !== "textarea" || c !== "") {
                            hn(n, c);
                          }
                        } else if (typeof c == "number") {
                          hn(n, "" + c);
                        }
                      } else if (o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus") {
                        if (l.hasOwnProperty(o)) {
                          if (c != null && o === "onScroll") {
                            Pr("scroll", n);
                          }
                        } else if (c != null) {
                          b(n, o, c, a);
                        }
                      }
                    }
                  }
                  switch (t) {
                    case "input":
                      W(n);
                      X(n, r, false);
                      break;
                    case "textarea":
                      W(n);
                      ln(n);
                      break;
                    case "option":
                      if (r.value != null) {
                        n.setAttribute("value", "" + $(r.value));
                      }
                      break;
                    case "select":
                      n.multiple = !!r.multiple;
                      if ((o = r.value) != null) {
                        tn(n, !!r.multiple, o, false);
                      } else if (r.defaultValue != null) {
                        tn(n, !!r.multiple, r.defaultValue, true);
                      }
                      break;
                    default:
                      if (typeof i.onClick == "function") {
                        n.onclick = Xr;
                      }
                  }
                  switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break n;
                    case "img":
                      r = true;
                      break n;
                    default:
                      r = false;
                  }
                }
                if (r) {
                  e.flags |= 4;
                }
              }
              if (e.ref !== null) {
                e.flags |= 512;
                e.flags |= 2097152;
              }
            }
            Gl(e);
            return null;
          case 6:
            if (n && e.stateNode != null) {
              Tl(0, e, n.memoizedProps, r);
            } else {
              if (typeof r != "string" && e.stateNode === null) {
                throw Error(u(166));
              }
              t = Zu(Ku.current);
              Zu(Gu.current);
              if (fu(e)) {
                r = e.stateNode;
                t = e.memoizedProps;
                r[di] = e;
                if ((o = r.nodeValue !== t) && (n = tu) !== null) {
                  switch (n.tag) {
                    case 3:
                      Jr(r.nodeValue, t, !!(n.mode & 1));
                      break;
                    case 5:
                      if (n.memoizedProps.suppressHydrationWarning !== true) {
                        Jr(r.nodeValue, t, !!(n.mode & 1));
                      }
                  }
                }
                if (o) {
                  e.flags |= 4;
                }
              } else {
                (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r))[di] = e;
                e.stateNode = r;
              }
            }
            Gl(e);
            return null;
          case 13:
            Ci(Xu);
            r = e.memoizedState;
            if (n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
              if (iu && ru !== null && e.mode & 1 && !(e.flags & 128)) {
                du();
                hu();
                e.flags |= 98560;
                o = false;
              } else {
                o = fu(e);
                if (r !== null && r.dehydrated !== null) {
                  if (n === null) {
                    if (!o) {
                      throw Error(u(318));
                    }
                    if (!(o = (o = e.memoizedState) !== null ? o.dehydrated : null)) {
                      throw Error(u(317));
                    }
                    o[di] = e;
                  } else {
                    hu();
                    if (!(e.flags & 128)) {
                      e.memoizedState = null;
                    }
                    e.flags |= 4;
                  }
                  Gl(e);
                  o = false;
                } else {
                  if (uu !== null) {
                    us(uu);
                    uu = null;
                  }
                  o = true;
                }
              }
              if (!o) {
                if (e.flags & 65536) {
                  return e;
                } else {
                  return null;
                }
              }
            }
            if (e.flags & 128) {
              e.lanes = t;
              return e;
            } else {
              if ((r = r !== null) !== (n !== null && n.memoizedState !== null) && r) {
                e.child.flags |= 8192;
                if (e.mode & 1) {
                  if (n === null || Xu.current & 1) {
                    if (Ta === 0) {
                      Ta = 3;
                    }
                  } else {
                    Ds();
                  }
                }
              }
              if (e.updateQueue !== null) {
                e.flags |= 4;
              }
              Gl(e);
              return null;
            }
          case 4:
            Qu();
            if (n === null) {
              zr(e.stateNode.containerInfo);
            }
            Gl(e);
            return null;
          case 10:
            _u(e.type.v);
            Gl(e);
            return null;
          case 19:
            Ci(Xu);
            if ((o = e.memoizedState) === null) {
              Gl(e);
              return null;
            }
            r = !!(e.flags & 128);
            if ((a = o.rendering) === null) {
              if (r) {
                $l(o, false);
              } else {
                if (Ta !== 0 || n !== null && n.flags & 128) {
                  for (n = e.child; n !== null;) {
                    if ((a = no(n)) !== null) {
                      e.flags |= 128;
                      $l(o, false);
                      if ((r = a.updateQueue) !== null) {
                        e.updateQueue = r;
                        e.flags |= 4;
                      }
                      e.subtreeFlags = 0;
                      r = t;
                      t = e.child;
                      while (t !== null) {
                        n = r;
                        (o = t).flags &= 14680066;
                        if ((a = o.alternate) === null) {
                          o.childLanes = 0;
                          o.lanes = n;
                          o.child = null;
                          o.subtreeFlags = 0;
                          o.memoizedProps = null;
                          o.memoizedState = null;
                          o.updateQueue = null;
                          o.dependencies = null;
                          o.stateNode = null;
                        } else {
                          o.childLanes = a.childLanes;
                          o.lanes = a.lanes;
                          o.child = a.child;
                          o.subtreeFlags = 0;
                          o.deletions = null;
                          o.memoizedProps = a.memoizedProps;
                          o.memoizedState = a.memoizedState;
                          o.updateQueue = a.updateQueue;
                          o.type = a.type;
                          n = a.dependencies;
                          o.dependencies = n === null ? null : {
                            lanes: n.lanes,
                            firstContext: n.firstContext
                          };
                        }
                        t = t.sibling;
                      }
                      xi(Xu, Xu.current & 1 | 2);
                      return e.child;
                    }
                    n = n.sibling;
                  }
                }
                if (o.tail !== null && Jn() > Ha) {
                  e.flags |= 128;
                  r = true;
                  $l(o, false);
                  e.lanes = 4194304;
                }
              }
            } else {
              if (!r) {
                if ((n = no(a)) !== null) {
                  e.flags |= 128;
                  r = true;
                  if ((t = n.updateQueue) !== null) {
                    e.updateQueue = t;
                    e.flags |= 4;
                  }
                  $l(o, true);
                  if (o.tail === null && o.tailMode === "hidden" && !a.alternate && !iu) {
                    Gl(e);
                    return null;
                  }
                } else if (Jn() * 2 - o.renderingStartTime > Ha && t !== 1073741824) {
                  e.flags |= 128;
                  r = true;
                  $l(o, false);
                  e.lanes = 4194304;
                }
              }
              if (o.isBackwards) {
                a.sibling = e.child;
                e.child = a;
              } else {
                if ((t = o.last) !== null) {
                  t.sibling = a;
                } else {
                  e.child = a;
                }
                o.last = a;
              }
            }
            if (o.tail !== null) {
              e = o.tail;
              o.rendering = e;
              o.tail = e.sibling;
              o.renderingStartTime = Jn();
              e.sibling = null;
              t = Xu.current;
              xi(Xu, r ? t & 1 | 2 : t & 1);
              return e;
            } else {
              Gl(e);
              return null;
            }
          case 22:
          case 23:
            cs();
            r = e.memoizedState !== null;
            if (n !== null && n.memoizedState !== null !== r) {
              e.flags |= 8192;
            }
            if (r && e.mode & 1) {
              if (ja & 1073741824) {
                Gl(e);
                if (e.subtreeFlags & 6) {
                  e.flags |= 8192;
                }
              }
            } else {
              Gl(e);
            }
            return null;
          case 24:
          case 25:
            return null;
        }
        throw Error(u(156, e.tag));
      }
      function Kl(n, e) {
        eu(e);
        switch (e.tag) {
          case 1:
            if (Ii(e.type)) {
              Ti();
            }
            if ((n = e.flags) & 65536) {
              e.flags = n & -65537 | 128;
              return e;
            } else {
              return null;
            }
          case 3:
            Qu();
            Ci(Bi);
            Ci(Si);
            to();
            if ((n = e.flags) & 65536 && !(n & 128)) {
              e.flags = n & -65537 | 128;
              return e;
            } else {
              return null;
            }
          case 5:
            Ju(e);
            return null;
          case 13:
            Ci(Xu);
            if ((n = e.memoizedState) !== null && n.dehydrated !== null) {
              if (e.alternate === null) {
                throw Error(u(340));
              }
              hu();
            }
            if ((n = e.flags) & 65536) {
              e.flags = n & -65537 | 128;
              return e;
            } else {
              return null;
            }
          case 19:
            Ci(Xu);
            return null;
          case 4:
            Qu();
            return null;
          case 10:
            _u(e.type.v);
            return null;
          case 22:
          case 23:
            cs();
            return null;
          default:
            return null;
        }
      }
      jl = function (n, e) {
        for (var t = e.child; t !== null;) {
          if (t.tag === 5 || t.tag === 6) {
            n.appendChild(t.stateNode);
          } else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t;
            t = t.child;
            continue;
          }
          if (t === e) {
            break;
          }
          while (t.sibling === null) {
            if (t.return === null || t.return === e) {
              return;
            }
            t = t.return;
          }
          t.sibling.return = t.return;
          t = t.sibling;
        }
      };
      Il = function (n, e, t, r) {
        var i = n.memoizedProps;
        if (i !== r) {
          n = e.stateNode;
          Zu(Gu.current);
          var u;
          var o = null;
          switch (t) {
            case "input":
              i = q(n, i);
              r = q(n, r);
              o = [];
              break;
            case "select":
              i = U({}, i, {
                value: undefined
              });
              r = U({}, r, {
                value: undefined
              });
              o = [];
              break;
            case "textarea":
              i = rn(n, i);
              r = rn(n, r);
              o = [];
              break;
            default:
              if (typeof i.onClick != "function" && typeof r.onClick == "function") {
                n.onclick = Xr;
              }
          }
          bn(t, r);
          t = null;
          for (c in i) {
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) {
              if (c === "style") {
                var a = i[c];
                for (u in a) {
                  if (a.hasOwnProperty(u)) {
                    t ||= {};
                    t[u] = "";
                  }
                }
              } else if (c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus") {
                if (l.hasOwnProperty(c)) {
                  o ||= [];
                } else {
                  (o = o || []).push(c, null);
                }
              }
            }
          }
          for (c in r) {
            var s = r[c];
            a = i != null ? i[c] : undefined;
            if (r.hasOwnProperty(c) && s !== a && (s != null || a != null)) {
              if (c === "style") {
                if (a) {
                  for (u in a) {
                    if (!!a.hasOwnProperty(u) && (!s || !s.hasOwnProperty(u))) {
                      t ||= {};
                      t[u] = "";
                    }
                  }
                  for (u in s) {
                    if (s.hasOwnProperty(u) && a[u] !== s[u]) {
                      t ||= {};
                      t[u] = s[u];
                    }
                  }
                } else {
                  if (!t) {
                    o ||= [];
                    o.push(c, t);
                  }
                  t = s;
                }
              } else if (c === "dangerouslySetInnerHTML") {
                s = s ? s.S : undefined;
                a = a ? a.S : undefined;
                if (s != null && a !== s) {
                  (o = o || []).push(c, s);
                }
              } else if (c === "children") {
                if (typeof s == "string" || typeof s == "number") {
                  (o = o || []).push(c, "" + s);
                }
              } else if (c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning") {
                if (l.hasOwnProperty(c)) {
                  if (s != null && c === "onScroll") {
                    Pr("scroll", n);
                  }
                  if (!o && a !== s) {
                    o = [];
                  }
                } else {
                  (o = o || []).push(c, s);
                }
              }
            }
          }
          if (t) {
            (o = o || []).push("style", t);
          }
          var c = o;
          if (e.updateQueue = c) {
            e.flags |= 4;
          }
        }
      };
      Tl = function (n, e, t, r) {
        if (t !== r) {
          e.flags |= 4;
        }
      };
      var Zl = false;
      var ql = false;
      var Ql = typeof WeakSet == "function" ? WeakSet : Set;
      var Yl = null;
      function Jl(n, e) {
        var t = n.ref;
        if (t !== null) {
          if (typeof t == "function") {
            try {
              t(null);
            } catch (t) {
              ks(n, e, t);
            }
          } else {
            t.current = null;
          }
        }
      }
      function Xl(n, e, t) {
        try {
          t();
        } catch (t) {
          ks(n, e, t);
        }
      }
      var na = false;
      function ea(n, e, t) {
        var r = e.updateQueue;
        if ((r = r !== null ? r.lastEffect : null) !== null) {
          var i = r = r.next;
          do {
            if ((i.tag & n) === n) {
              var u = i.destroy;
              i.destroy = undefined;
              if (u !== undefined) {
                Xl(e, t, u);
              }
            }
            i = i.next;
          } while (i !== r);
        }
      }
      function ta(n, e) {
        if ((e = (e = e.updateQueue) !== null ? e.lastEffect : null) !== null) {
          var t = e = e.next;
          do {
            if ((t.tag & n) === n) {
              var r = t.create;
              t.destroy = r();
            }
            t = t.next;
          } while (t !== e);
        }
      }
      function ra(n) {
        var e = n.ref;
        if (e !== null) {
          var t = n.stateNode;
          n.tag;
          n = t;
          if (typeof e == "function") {
            e(n);
          } else {
            e.current = n;
          }
        }
      }
      function ia(n) {
        var e = n.alternate;
        if (e !== null) {
          n.alternate = null;
          ia(e);
        }
        n.child = null;
        n.deletions = null;
        n.sibling = null;
        if (n.tag === 5) {
          if ((e = n.stateNode) !== null) {
            delete e[di];
            delete e[hi];
            delete e[pi];
            delete e[vi];
            delete e[gi];
          }
        }
        n.stateNode = null;
        n.return = null;
        n.dependencies = null;
        n.memoizedProps = null;
        n.memoizedState = null;
        n.pendingProps = null;
        n.stateNode = null;
        n.updateQueue = null;
      }
      function ua(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4;
      }
      function oa(n) {
        n: while (true) {
          while (n.sibling === null) {
            if (n.return === null || ua(n.return)) {
              return null;
            }
            n = n.return;
          }
          n.sibling.return = n.return;
          n = n.sibling;
          while (n.tag !== 5 && n.tag !== 6 && n.tag !== 18) {
            if (n.flags & 2) {
              continue n;
            }
            if (n.child === null || n.tag === 4) {
              continue n;
            }
            n.child.return = n;
            n = n.child;
          }
          if (!(n.flags & 2)) {
            return n.stateNode;
          }
        }
      }
      function la(n, e, t) {
        var r = n.tag;
        if (r === 5 || r === 6) {
          n = n.stateNode;
          if (e) {
            if (t.nodeType === 8) {
              t.parentNode.insertBefore(n, e);
            } else {
              t.insertBefore(n, e);
            }
          } else {
            if (t.nodeType === 8) {
              (e = t.parentNode).insertBefore(n, t);
            } else {
              (e = t).appendChild(n);
            }
            if ((t = t.N) == null && e.onclick === null) {
              e.onclick = Xr;
            }
          }
        } else if (r !== 4 && (n = n.child) !== null) {
          la(n, e, t);
          n = n.sibling;
          while (n !== null) {
            la(n, e, t);
            n = n.sibling;
          }
        }
      }
      function aa(n, e, t) {
        var r = n.tag;
        if (r === 5 || r === 6) {
          n = n.stateNode;
          if (e) {
            t.insertBefore(n, e);
          } else {
            t.appendChild(n);
          }
        } else if (r !== 4 && (n = n.child) !== null) {
          aa(n, e, t);
          n = n.sibling;
          while (n !== null) {
            aa(n, e, t);
            n = n.sibling;
          }
        }
      }
      var sa = null;
      var ca = false;
      function fa(n, e, t) {
        for (t = t.child; t !== null;) {
          da(n, e, t);
          t = t.sibling;
        }
      }
      function da(n, e, t) {
        if (oe && typeof oe.onCommitFiberUnmount == "function") {
          try {
            oe.onCommitFiberUnmount(ue, t);
          } catch (n) {}
        }
        switch (t.tag) {
          case 5:
            if (!ql) {
              Jl(t, e);
            }
          case 6:
            var r = sa;
            var i = ca;
            sa = null;
            fa(n, e, t);
            ca = i;
            if ((sa = r) !== null) {
              if (ca) {
                n = sa;
                t = t.stateNode;
                if (n.nodeType === 8) {
                  n.parentNode.removeChild(t);
                } else {
                  n.removeChild(t);
                }
              } else {
                sa.removeChild(t.stateNode);
              }
            }
            break;
          case 18:
            if (sa !== null) {
              if (ca) {
                n = sa;
                t = t.stateNode;
                if (n.nodeType === 8) {
                  ai(n.parentNode, t);
                } else if (n.nodeType === 1) {
                  ai(n, t);
                }
                Ve(n);
              } else {
                ai(sa, t.stateNode);
              }
            }
            break;
          case 4:
            r = sa;
            i = ca;
            sa = t.stateNode.containerInfo;
            ca = true;
            fa(n, e, t);
            sa = r;
            ca = i;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!ql && (r = t.updateQueue) !== null && (r = r.lastEffect) !== null) {
              i = r = r.next;
              do {
                var u = i;
                var o = u.destroy;
                u = u.tag;
                if (o !== undefined && (u & 2 || u & 4)) {
                  Xl(t, e, o);
                }
                i = i.next;
              } while (i !== r);
            }
            fa(n, e, t);
            break;
          case 1:
            if (!ql && (Jl(t, e), typeof (r = t.stateNode).componentWillUnmount == "function")) {
              try {
                r.props = t.memoizedProps;
                r.state = t.memoizedState;
                r.componentWillUnmount();
              } catch (n) {
                ks(t, e, n);
              }
            }
            fa(n, e, t);
            break;
          case 21:
            fa(n, e, t);
            break;
          case 22:
            if (t.mode & 1) {
              ql = (r = ql) || t.memoizedState !== null;
              fa(n, e, t);
              ql = r;
            } else {
              fa(n, e, t);
            }
            break;
          default:
            fa(n, e, t);
        }
      }
      function ha(n) {
        var e = n.updateQueue;
        if (e !== null) {
          n.updateQueue = null;
          var t = n.stateNode;
          if (t === null) {
            t = n.stateNode = new Ql();
          }
          e.forEach(function (e) {
            var r = _s.bind(null, n, e);
            if (!t.has(e)) {
              t.add(e);
              e.then(r, r);
            }
          });
        }
      }
      function Da(n, e) {
        var t = e.deletions;
        if (t !== null) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            try {
              var o = n;
              var l = e;
              var a = l;
              n: while (a !== null) {
                switch (a.tag) {
                  case 5:
                    sa = a.stateNode;
                    ca = false;
                    break n;
                  case 3:
                  case 4:
                    sa = a.stateNode.containerInfo;
                    ca = true;
                    break n;
                }
                a = a.return;
              }
              if (sa === null) {
                throw Error(u(160));
              }
              da(o, l, i);
              sa = null;
              ca = false;
              var s = i.alternate;
              if (s !== null) {
                s.return = null;
              }
              i.return = null;
            } catch (n) {
              ks(i, e, n);
            }
          }
        }
        if (e.subtreeFlags & 12854) {
          for (e = e.child; e !== null;) {
            pa(e, n);
            e = e.sibling;
          }
        }
      }
      function pa(n, e) {
        var t = n.alternate;
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Da(e, n);
            va(n);
            if (r & 4) {
              try {
                ea(3, n, n.return);
                ta(3, n);
              } catch (e) {
                ks(n, n.return, e);
              }
              try {
                ea(5, n, n.return);
              } catch (e) {
                ks(n, n.return, e);
              }
            }
            break;
          case 1:
            Da(e, n);
            va(n);
            if (r & 512 && t !== null) {
              Jl(t, t.return);
            }
            break;
          case 5:
            Da(e, n);
            va(n);
            if (r & 512 && t !== null) {
              Jl(t, t.return);
            }
            if (n.flags & 32) {
              var i = n.stateNode;
              try {
                hn(i, "");
              } catch (e) {
                ks(n, n.return, e);
              }
            }
            if (r & 4 && (i = n.stateNode) != null) {
              var o = n.memoizedProps;
              var l = t !== null ? t.memoizedProps : o;
              var a = n.type;
              var s = n.updateQueue;
              n.updateQueue = null;
              if (s !== null) {
                try {
                  if (a === "input" && o.type === "radio" && o.name != null) {
                    Y(i, o);
                  }
                  wn(a, l);
                  var c = wn(a, o);
                  for (l = 0; l < s.length; l += 2) {
                    var f = s[l];
                    var d = s[l + 1];
                    if (f === "style") {
                      gn(i, d);
                    } else if (f === "dangerouslySetInnerHTML") {
                      dn(i, d);
                    } else if (f === "children") {
                      hn(i, d);
                    } else {
                      b(i, f, d, c);
                    }
                  }
                  switch (a) {
                    case "input":
                      J(i, o);
                      break;
                    case "textarea":
                      on(i, o);
                      break;
                    case "select":
                      var h = i._.wasMultiple;
                      i._.wasMultiple = !!o.multiple;
                      var D = o.value;
                      if (D != null) {
                        tn(i, !!o.multiple, D, false);
                      } else if (h !== !!o.multiple) {
                        if (o.defaultValue != null) {
                          tn(i, !!o.multiple, o.defaultValue, true);
                        } else {
                          tn(i, !!o.multiple, o.multiple ? [] : "", false);
                        }
                      }
                  }
                  i[hi] = o;
                } catch (e) {
                  ks(n, n.return, e);
                }
              }
            }
            break;
          case 6:
            Da(e, n);
            va(n);
            if (r & 4) {
              if (n.stateNode === null) {
                throw Error(u(162));
              }
              i = n.stateNode;
              o = n.memoizedProps;
              try {
                i.nodeValue = o;
              } catch (e) {
                ks(n, n.return, e);
              }
            }
            break;
          case 3:
            Da(e, n);
            va(n);
            if (r & 4 && t !== null && t.memoizedState.isDehydrated) {
              try {
                Ve(e.containerInfo);
              } catch (e) {
                ks(n, n.return, e);
              }
            }
            break;
          case 4:
          default:
            Da(e, n);
            va(n);
            break;
          case 13:
            Da(e, n);
            va(n);
            if ((i = n.child).flags & 8192) {
              o = i.memoizedState !== null;
              i.stateNode.isHidden = o;
              if (!!o && (i.alternate === null || i.alternate.memoizedState === null)) {
                Na = Jn();
              }
            }
            if (r & 4) {
              ha(n);
            }
            break;
          case 22:
            f = t !== null && t.memoizedState !== null;
            if (n.mode & 1) {
              ql = (c = ql) || f;
              Da(e, n);
              ql = c;
            } else {
              Da(e, n);
            }
            va(n);
            if (r & 8192) {
              c = n.memoizedState !== null;
              if ((n.stateNode.isHidden = c) && !f && n.mode & 1) {
                Yl = n;
                f = n.child;
                while (f !== null) {
                  for (d = Yl = f; Yl !== null;) {
                    D = (h = Yl).child;
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        ea(4, h, h.return);
                        break;
                      case 1:
                        Jl(h, h.return);
                        var p = h.stateNode;
                        if (typeof p.componentWillUnmount == "function") {
                          r = h;
                          t = h.return;
                          try {
                            e = r;
                            p.props = e.memoizedProps;
                            p.state = e.memoizedState;
                            p.componentWillUnmount();
                          } catch (n) {
                            ks(r, t, n);
                          }
                        }
                        break;
                      case 5:
                        Jl(h, h.return);
                        break;
                      case 22:
                        if (h.memoizedState !== null) {
                          wa(d);
                          continue;
                        }
                    }
                    if (D !== null) {
                      D.return = h;
                      Yl = D;
                    } else {
                      wa(d);
                    }
                  }
                  f = f.sibling;
                }
              }
              f = null;
              d = n;
              n: while (true) {
                if (d.tag === 5) {
                  if (f === null) {
                    f = d;
                    try {
                      i = d.stateNode;
                      if (c) {
                        if (typeof (o = i.style).setProperty == "function") {
                          o.setProperty("display", "none", "important");
                        } else {
                          o.display = "none";
                        }
                      } else {
                        a = d.stateNode;
                        l = (s = d.memoizedProps.style) != null && s.hasOwnProperty("display") ? s.display : null;
                        a.style.display = vn("display", l);
                      }
                    } catch (e) {
                      ks(n, n.return, e);
                    }
                  }
                } else if (d.tag === 6) {
                  if (f === null) {
                    try {
                      d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                    } catch (e) {
                      ks(n, n.return, e);
                    }
                  }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === n) && d.child !== null) {
                  d.child.return = d;
                  d = d.child;
                  continue;
                }
                if (d === n) {
                  break n;
                }
                while (d.sibling === null) {
                  if (d.return === null || d.return === n) {
                    break n;
                  }
                  if (f === d) {
                    f = null;
                  }
                  d = d.return;
                }
                if (f === d) {
                  f = null;
                }
                d.sibling.return = d.return;
                d = d.sibling;
              }
            }
            break;
          case 19:
            Da(e, n);
            va(n);
            if (r & 4) {
              ha(n);
            }
          case 21:
        }
      }
      function va(n) {
        var e = n.flags;
        if (e & 2) {
          try {
            n: {
              for (var t = n.return; t !== null;) {
                if (ua(t)) {
                  var r = t;
                  break n;
                }
                t = t.return;
              }
              throw Error(u(160));
            }
            switch (r.tag) {
              case 5:
                var i = r.stateNode;
                if (r.flags & 32) {
                  hn(i, "");
                  r.flags &= -33;
                }
                aa(n, oa(n), i);
                break;
              case 3:
              case 4:
                var o = r.stateNode.containerInfo;
                la(n, oa(n), o);
                break;
              default:
                throw Error(u(161));
            }
          } catch (e) {
            ks(n, n.return, e);
          }
          n.flags &= -3;
        }
        if (e & 4096) {
          n.flags &= -4097;
        }
      }
      function ga(n, e, t) {
        Yl = n;
        ma(n, e, t);
      }
      function ma(n, e, t) {
        var r = !!(n.mode & 1);
        for (; Yl !== null;) {
          var i = Yl;
          var u = i.child;
          if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Zl;
            if (!o) {
              var l = i.alternate;
              var a = l !== null && l.memoizedState !== null || ql;
              l = Zl;
              var s = ql;
              Zl = o;
              if ((ql = a) && !s) {
                for (Yl = i; Yl !== null;) {
                  a = (o = Yl).child;
                  if (o.tag === 22 && o.memoizedState !== null) {
                    ya(i);
                  } else if (a !== null) {
                    a.return = o;
                    Yl = a;
                  } else {
                    ya(i);
                  }
                }
              }
              while (u !== null) {
                Yl = u;
                ma(u, e, t);
                u = u.sibling;
              }
              Yl = i;
              Zl = l;
              ql = s;
            }
            ba(n);
          } else if (i.subtreeFlags & 8772 && u !== null) {
            u.return = i;
            Yl = u;
          } else {
            ba(n);
          }
        }
      }
      function ba(n) {
        while (Yl !== null) {
          var e = Yl;
          if (e.flags & 8772) {
            var t = e.alternate;
            try {
              if (e.flags & 8772) {
                switch (e.tag) {
                  case 0:
                  case 11:
                  case 15:
                    if (!ql) {
                      ta(5, e);
                    }
                    break;
                  case 1:
                    var r = e.stateNode;
                    if (e.flags & 4 && !ql) {
                      if (t === null) {
                        r.componentDidMount();
                      } else {
                        var i = e.elementType === e.type ? t.memoizedProps : tl(e.type, t.memoizedProps);
                        r.componentDidUpdate(i, t.memoizedState, r.V);
                      }
                    }
                    var o = e.updateQueue;
                    if (o !== null) {
                      Vu(e, o, r);
                    }
                    break;
                  case 3:
                    var l = e.updateQueue;
                    if (l !== null) {
                      t = null;
                      if (e.child !== null) {
                        switch (e.child.tag) {
                          case 5:
                          case 1:
                            t = e.child.stateNode;
                        }
                      }
                      Vu(e, l, t);
                    }
                    break;
                  case 5:
                    var a = e.stateNode;
                    if (t === null && e.flags & 4) {
                      t = a;
                      var s = e.memoizedProps;
                      switch (e.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          if (s.autoFocus) {
                            t.focus();
                          }
                          break;
                        case "img":
                          if (s.src) {
                            t.src = s.src;
                          }
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (e.memoizedState === null) {
                      var c = e.alternate;
                      if (c !== null) {
                        var f = c.memoizedState;
                        if (f !== null) {
                          var d = f.dehydrated;
                          if (d !== null) {
                            Ve(d);
                          }
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(u(163));
                }
              }
              if (!ql) {
                if (e.flags & 512) {
                  ra(e);
                }
              }
            } catch (n) {
              ks(e, e.return, n);
            }
          }
          if (e === n) {
            Yl = null;
            break;
          }
          if ((t = e.sibling) !== null) {
            t.return = e.return;
            Yl = t;
            break;
          }
          Yl = e.return;
        }
      }
      function wa(n) {
        while (Yl !== null) {
          var e = Yl;
          if (e === n) {
            Yl = null;
            break;
          }
          var t = e.sibling;
          if (t !== null) {
            t.return = e.return;
            Yl = t;
            break;
          }
          Yl = e.return;
        }
      }
      function ya(n) {
        while (Yl !== null) {
          var e = Yl;
          try {
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                var t = e.return;
                try {
                  ta(4, e);
                } catch (n) {
                  ks(e, t, n);
                }
                break;
              case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                  var i = e.return;
                  try {
                    r.componentDidMount();
                  } catch (n) {
                    ks(e, i, n);
                  }
                }
                var u = e.return;
                try {
                  ra(e);
                } catch (n) {
                  ks(e, u, n);
                }
                break;
              case 5:
                var o = e.return;
                try {
                  ra(e);
                } catch (n) {
                  ks(e, o, n);
                }
            }
          } catch (n) {
            ks(e, e.return, n);
          }
          if (e === n) {
            Yl = null;
            break;
          }
          var l = e.sibling;
          if (l !== null) {
            l.return = e.return;
            Yl = l;
            break;
          }
          Yl = e.return;
        }
      }
      var Fa;
      var ka = Math.ceil;
      var Ea = w.ReactCurrentDispatcher;
      var Ca = w.ReactCurrentOwner;
      var xa = w.ReactCurrentBatchConfig;
      var _a = 0;
      var Sa = null;
      var Ba = null;
      var Aa = 0;
      var ja = 0;
      var Ia = Ei(0);
      var Ta = 0;
      var Oa = null;
      var Ra = 0;
      var Ma = 0;
      var Ua = 0;
      var La = null;
      var Pa = null;
      var Na = 0;
      var Ha = Infinity;
      var za = null;
      var Va = false;
      var $a = null;
      var Ga = null;
      var Wa = false;
      var Ka = null;
      var Za = 0;
      var qa = 0;
      var Qa = null;
      var Ya = -1;
      var Ja = 0;
      function Xa() {
        if (_a & 6) {
          return Jn();
        } else if (Ya !== -1) {
          return Ya;
        } else {
          return Ya = Jn();
        }
      }
      function ns(n) {
        if (n.mode & 1) {
          if (_a & 2 && Aa !== 0) {
            return Aa & -Aa;
          } else if (pu.transition !== null) {
            if (Ja === 0) {
              Ja = ve();
            }
            return Ja;
          } else if ((n = we) !== 0) {
            return n;
          } else {
            return n = (n = window.event) === undefined ? 16 : Ye(n.type);
          }
        } else {
          return 1;
        }
      }
      function es(n, e, t, r) {
        if (qa > 50) {
          qa = 0;
          Qa = null;
          throw Error(u(185));
        }
        me(n, t, r);
        if (!(_a & 2) || n !== Sa) {
          if (n === Sa) {
            if (!(_a & 2)) {
              Ma |= t;
            }
            if (Ta === 4) {
              os(n, Aa);
            }
          }
          ts(n, r);
          if (t === 1 && _a === 0 && !(e.mode & 1)) {
            Ha = Jn() + 500;
            if (Pi) {
              zi();
            }
          }
        }
      }
      function ts(n, e) {
        var t = n.callbackNode;
        (function (n, e) {
          var t = n.suspendedLanes;
          var r = n.pingedLanes;
          var i = n.expirationTimes;
          for (var u = n.pendingLanes; u > 0;) {
            var o = 31 - le(u);
            var l = 1 << o;
            var a = i[o];
            if (a === -1) {
              if ((l & t) === 0 || (l & r) !== 0) {
                i[o] = De(l, e);
              }
            } else if (a <= e) {
              n.expiredLanes |= l;
            }
            u &= ~l;
          }
        })(n, e);
        var r = he(n, n === Sa ? Aa : 0);
        if (r === 0) {
          if (t !== null) {
            qn(t);
          }
          n.callbackNode = null;
          n.callbackPriority = 0;
        } else {
          e = r & -r;
          if (n.callbackPriority !== e) {
            if (t != null) {
              qn(t);
            }
            if (e === 1) {
              if (n.tag === 0) {
                (function (n) {
                  Pi = true;
                  Hi(n);
                })(ls.bind(null, n));
              } else {
                Hi(ls.bind(null, n));
              }
              oi(function () {
                if (!(_a & 6)) {
                  zi();
                }
              });
              t = null;
            } else {
              switch (ye(r)) {
                case 1:
                  t = ne;
                  break;
                case 4:
                  t = ee;
                  break;
                case 16:
                default:
                  t = te;
                  break;
                case 536870912:
                  t = ie;
              }
              t = Ss(t, rs.bind(null, n));
            }
            n.callbackPriority = e;
            n.callbackNode = t;
          }
        }
      }
      function rs(n, e) {
        Ya = -1;
        Ja = 0;
        if (_a & 6) {
          throw Error(u(327));
        }
        var t = n.callbackNode;
        if (ys() && n.callbackNode !== t) {
          return null;
        }
        var r = he(n, n === Sa ? Aa : 0);
        if (r === 0) {
          return null;
        }
        if (r & 30 || (r & n.expiredLanes) !== 0 || e) {
          e = ps(n, r);
        } else {
          e = r;
          var i = _a;
          _a |= 2;
          var o = hs();
          for (Sa === n && Aa === e || (za = null, Ha = Jn() + 500, fs(n, e));;) {
            try {
              gs();
              break;
            } catch (e) {
              ds(n, e);
            }
          }
          xu();
          Ea.current = o;
          _a = i;
          if (Ba !== null) {
            e = 0;
          } else {
            Sa = null;
            Aa = 0;
            e = Ta;
          }
        }
        if (e !== 0) {
          if (e === 2) {
            if ((i = pe(n)) !== 0) {
              r = i;
              e = is(n, i);
            }
          }
          if (e === 1) {
            t = Oa;
            fs(n, 0);
            os(n, r);
            ts(n, Jn());
            throw t;
          }
          if (e === 6) {
            os(n, r);
          } else {
            i = n.current.alternate;
            if (!(r & 30) && !function (n) {
              var e = n;
              while (true) {
                if (e.flags & 16384) {
                  var t = e.updateQueue;
                  if (t !== null && (t = t.stores) !== null) {
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      var u = i.getSnapshot;
                      i = i.value;
                      try {
                        if (!lr(u(), i)) {
                          return false;
                        }
                      } catch (n) {
                        return false;
                      }
                    }
                  }
                }
                t = e.child;
                if (e.subtreeFlags & 16384 && t !== null) {
                  t.return = e;
                  e = t;
                } else {
                  if (e === n) {
                    break;
                  }
                  while (e.sibling === null) {
                    if (e.return === null || e.return === n) {
                      return true;
                    }
                    e = e.return;
                  }
                  e.sibling.return = e.return;
                  e = e.sibling;
                }
              }
              return true;
            }(i) && !(e = ps(n, r), e === 2 && (o = pe(n), o !== 0 && (r = o, e = is(n, o))), e !== 1)) {
              t = Oa;
              fs(n, 0);
              os(n, r);
              ts(n, Jn());
              throw t;
            }
            n.finishedWork = i;
            n.finishedLanes = r;
            switch (e) {
              case 0:
              case 1:
                throw Error(u(345));
              case 2:
              case 5:
                ws(n, Pa, za);
                break;
              case 3:
                os(n, r);
                if ((r & 130023424) === r && (e = Na + 500 - Jn()) > 10) {
                  if (he(n, 0) !== 0) {
                    break;
                  }
                  if (((i = n.suspendedLanes) & r) !== r) {
                    Xa();
                    n.pingedLanes |= n.suspendedLanes & i;
                    break;
                  }
                  n.timeoutHandle = ri(ws.bind(null, n, Pa, za), e);
                  break;
                }
                ws(n, Pa, za);
                break;
              case 4:
                os(n, r);
                if ((r & 4194240) === r) {
                  break;
                }
                e = n.eventTimes;
                i = -1;
                while (r > 0) {
                  var l = 31 - le(r);
                  o = 1 << l;
                  if ((l = e[l]) > i) {
                    i = l;
                  }
                  r &= ~o;
                }
                r = i;
                if ((r = ((r = Jn() - r) < 120 ? 120 : r < 480 ? 480 : r < 1080 ? 1080 : r < 1920 ? 1920 : r < 3000 ? 3000 : r < 4320 ? 4320 : ka(r / 1960) * 1960) - r) > 10) {
                  n.timeoutHandle = ri(ws.bind(null, n, Pa, za), r);
                  break;
                }
                ws(n, Pa, za);
                break;
              default:
                throw Error(u(329));
            }
          }
        }
        ts(n, Jn());
        if (n.callbackNode === t) {
          return rs.bind(null, n);
        } else {
          return null;
        }
      }
      function is(n, e) {
        var t = La;
        if (n.current.memoizedState.isDehydrated) {
          fs(n, e).flags |= 256;
        }
        if ((n = ps(n, e)) !== 2) {
          e = Pa;
          Pa = t;
          if (e !== null) {
            us(e);
          }
        }
        return n;
      }
      function us(n) {
        if (Pa === null) {
          Pa = n;
        } else {
          Pa.push.apply(Pa, n);
        }
      }
      function os(n, e) {
        e &= ~Ua;
        e &= ~Ma;
        n.suspendedLanes |= e;
        n.pingedLanes &= ~e;
        n = n.expirationTimes;
        while (e > 0) {
          var t = 31 - le(e);
          var r = 1 << t;
          n[t] = -1;
          e &= ~r;
        }
      }
      function ls(n) {
        if (_a & 6) {
          throw Error(u(327));
        }
        ys();
        var e = he(n, 0);
        if (!(e & 1)) {
          ts(n, Jn());
          return null;
        }
        var t = ps(n, e);
        if (n.tag !== 0 && t === 2) {
          var r = pe(n);
          if (r !== 0) {
            e = r;
            t = is(n, r);
          }
        }
        if (t === 1) {
          t = Oa;
          fs(n, 0);
          os(n, e);
          ts(n, Jn());
          throw t;
        }
        if (t === 6) {
          throw Error(u(345));
        }
        n.finishedWork = n.current.alternate;
        n.finishedLanes = e;
        ws(n, Pa, za);
        ts(n, Jn());
        return null;
      }
      function as(n, e) {
        var t = _a;
        _a |= 1;
        try {
          return n(e);
        } finally {
          if ((_a = t) === 0) {
            Ha = Jn() + 500;
            if (Pi) {
              zi();
            }
          }
        }
      }
      function ss(n) {
        if (Ka !== null && Ka.tag === 0 && !(_a & 6)) {
          ys();
        }
        var e = _a;
        _a |= 1;
        var t = xa.transition;
        var r = we;
        try {
          xa.transition = null;
          we = 1;
          if (n) {
            return n();
          }
        } finally {
          we = r;
          xa.transition = t;
          if (!((_a = e) & 6)) {
            zi();
          }
        }
      }
      function cs() {
        ja = Ia.current;
        Ci(Ia);
      }
      function fs(n, e) {
        n.finishedWork = null;
        n.finishedLanes = 0;
        var t = n.timeoutHandle;
        if (t !== -1) {
          n.timeoutHandle = -1;
          ii(t);
        }
        if (Ba !== null) {
          for (t = Ba.return; t !== null;) {
            var r = t;
            eu(r);
            switch (r.tag) {
              case 1:
                if ((r = r.type.childContextTypes) != null) {
                  Ti();
                }
                break;
              case 3:
                Qu();
                Ci(Bi);
                Ci(Si);
                to();
                break;
              case 5:
                Ju(r);
                break;
              case 4:
                Qu();
                break;
              case 13:
              case 19:
                Ci(Xu);
                break;
              case 10:
                _u(r.type.v);
                break;
              case 22:
              case 23:
                cs();
            }
            t = t.return;
          }
        }
        Sa = n;
        Ba = n = Is(n.current, null);
        Aa = ja = e;
        Ta = 0;
        Oa = null;
        Ua = Ma = Ra = 0;
        Pa = La = null;
        if (ju !== null) {
          for (e = 0; e < ju.length; e++) {
            if ((r = (t = ju[e]).interleaved) !== null) {
              t.interleaved = null;
              var i = r.next;
              var u = t.pending;
              if (u !== null) {
                var o = u.next;
                u.next = i;
                r.next = o;
              }
              t.pending = r;
            }
          }
          ju = null;
        }
        return n;
      }
      function ds(n, e) {
        while (true) {
          var t = Ba;
          try {
            xu();
            ro.current = Jo;
            if (so) {
              for (var r = oo.memoizedState; r !== null;) {
                var i = r.queue;
                if (i !== null) {
                  i.pending = null;
                }
                r = r.next;
              }
              so = false;
            }
            uo = 0;
            ao = lo = oo = null;
            co = false;
            fo = 0;
            Ca.current = null;
            if (t === null || t.return === null) {
              Ta = 1;
              Oa = e;
              Ba = null;
              break;
            }
            n: {
              var o = n;
              var l = t.return;
              var a = t;
              var s = e;
              e = Aa;
              a.flags |= 32768;
              if (s !== null && typeof s == "object" && typeof s.then == "function") {
                var c = s;
                var f = a;
                var d = f.tag;
                if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                  var h = f.alternate;
                  if (h) {
                    f.updateQueue = h.updateQueue;
                    f.memoizedState = h.memoizedState;
                    f.lanes = h.lanes;
                  } else {
                    f.updateQueue = null;
                    f.memoizedState = null;
                  }
                }
                var D = vl(l);
                if (D !== null) {
                  D.flags &= -257;
                  gl(D, l, a, 0, e);
                  if (D.mode & 1) {
                    pl(o, c, e);
                  }
                  s = c;
                  var p = (e = D).updateQueue;
                  if (p === null) {
                    var v = new Set();
                    v.add(s);
                    e.updateQueue = v;
                  } else {
                    p.add(s);
                  }
                  break n;
                }
                if (!(e & 1)) {
                  pl(o, c, e);
                  Ds();
                  break n;
                }
                s = Error(u(426));
              } else if (iu && a.mode & 1) {
                var g = vl(l);
                if (g !== null) {
                  if (!(g.flags & 65536)) {
                    g.flags |= 256;
                  }
                  gl(g, l, a, 0, e);
                  Du(sl(s, a));
                  break n;
                }
              }
              o = s = sl(s, a);
              if (Ta !== 4) {
                Ta = 2;
              }
              if (La === null) {
                La = [o];
              } else {
                La.push(o);
              }
              o = l;
              do {
                switch (o.tag) {
                  case 3:
                    o.flags |= 65536;
                    e &= -e;
                    o.lanes |= e;
                    Hu(o, hl(0, s, e));
                    break n;
                  case 1:
                    a = s;
                    var m = o.type;
                    var b = o.stateNode;
                    if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Ga === null || !Ga.has(b)))) {
                      o.flags |= 65536;
                      e &= -e;
                      o.lanes |= e;
                      Hu(o, Dl(o, a, e));
                      break n;
                    }
                }
                o = o.return;
              } while (o !== null);
            }
            bs(t);
          } catch (n) {
            e = n;
            if (Ba === t && t !== null) {
              Ba = t = t.return;
            }
            continue;
          }
          break;
        }
      }
      function hs() {
        var n = Ea.current;
        Ea.current = Jo;
        if (n === null) {
          return Jo;
        } else {
          return n;
        }
      }
      function Ds() {
        if (Ta === 0 || Ta === 3 || Ta === 2) {
          Ta = 4;
        }
        if (Sa !== null && (!!(Ra & 268435455) || !!(Ma & 268435455))) {
          os(Sa, Aa);
        }
      }
      function ps(n, e) {
        var t = _a;
        _a |= 2;
        var r = hs();
        for (Sa === n && Aa === e || (za = null, fs(n, e));;) {
          try {
            vs();
            break;
          } catch (e) {
            ds(n, e);
          }
        }
        xu();
        _a = t;
        Ea.current = r;
        if (Ba !== null) {
          throw Error(u(261));
        }
        Sa = null;
        Aa = 0;
        return Ta;
      }
      function vs() {
        while (Ba !== null) {
          ms(Ba);
        }
      }
      function gs() {
        while (Ba !== null && !Qn()) {
          ms(Ba);
        }
      }
      function ms(n) {
        var e = Fa(n.alternate, n, ja);
        n.memoizedProps = n.pendingProps;
        if (e === null) {
          bs(n);
        } else {
          Ba = e;
        }
        Ca.current = null;
      }
      function bs(n) {
        var e = n;
        do {
          var t = e.alternate;
          n = e.return;
          if (e.flags & 32768) {
            if ((t = Kl(t, e)) !== null) {
              t.flags &= 32767;
              Ba = t;
              return;
            }
            if (n === null) {
              Ta = 6;
              Ba = null;
              return;
            }
            n.flags |= 32768;
            n.subtreeFlags = 0;
            n.deletions = null;
          } else if ((t = Wl(t, e, ja)) !== null) {
            Ba = t;
            return;
          }
          if ((e = e.sibling) !== null) {
            Ba = e;
            return;
          }
          Ba = e = n;
        } while (e !== null);
        if (Ta === 0) {
          Ta = 5;
        }
      }
      function ws(n, e, t) {
        var r = we;
        var i = xa.transition;
        try {
          xa.transition = null;
          we = 1;
          (function (n, e, t, r) {
            do {
              ys();
            } while (Ka !== null);
            if (_a & 6) {
              throw Error(u(327));
            }
            t = n.finishedWork;
            var i = n.finishedLanes;
            if (t === null) {
              return null;
            }
            n.finishedWork = null;
            n.finishedLanes = 0;
            if (t === n.current) {
              throw Error(u(177));
            }
            n.callbackNode = null;
            n.callbackPriority = 0;
            var o = t.lanes | t.childLanes;
            (function (n, e) {
              var t = n.pendingLanes & ~e;
              n.pendingLanes = e;
              n.suspendedLanes = 0;
              n.pingedLanes = 0;
              n.expiredLanes &= e;
              n.mutableReadLanes &= e;
              n.entangledLanes &= e;
              e = n.entanglements;
              var r = n.eventTimes;
              for (n = n.expirationTimes; t > 0;) {
                var i = 31 - le(t);
                var u = 1 << i;
                e[i] = 0;
                r[i] = -1;
                n[i] = -1;
                t &= ~u;
              }
            })(n, o);
            if (n === Sa) {
              Ba = Sa = null;
              Aa = 0;
            }
            if ((!!(t.subtreeFlags & 2064) || !!(t.flags & 2064)) && !Wa) {
              Wa = true;
              Ss(te, function () {
                ys();
                return null;
              });
            }
            o = !!(t.flags & 15990);
            if (!!(t.subtreeFlags & 15990) || o) {
              o = xa.transition;
              xa.transition = null;
              var l = we;
              we = 1;
              var a = _a;
              _a |= 4;
              Ca.current = null;
              (function (n, e) {
                ni = Ge;
                if (hr(n = dr())) {
                  if ("selectionStart" in n) {
                    var t = {
                      start: n.selectionStart,
                      end: n.selectionEnd
                    };
                  } else {
                    n: {
                      var r = (t = (t = n.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                      if (r && r.rangeCount !== 0) {
                        t = r.anchorNode;
                        var i = r.anchorOffset;
                        var o = r.focusNode;
                        r = r.focusOffset;
                        try {
                          t.nodeType;
                          o.nodeType;
                        } catch (n) {
                          t = null;
                          break n;
                        }
                        var l = 0;
                        var a = -1;
                        var s = -1;
                        var c = 0;
                        var f = 0;
                        var d = n;
                        var h = null;
                        e: while (true) {
                          for (var D; d !== t || i !== 0 && d.nodeType !== 3 || (a = l + i), d !== o || r !== 0 && d.nodeType !== 3 || (s = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (D = d.firstChild) !== null;) {
                            h = d;
                            d = D;
                          }
                          while (true) {
                            if (d === n) {
                              break e;
                            }
                            if (h === t && ++c === i) {
                              a = l;
                            }
                            if (h === o && ++f === r) {
                              s = l;
                            }
                            if ((D = d.nextSibling) !== null) {
                              break;
                            }
                            h = (d = h).parentNode;
                          }
                          d = D;
                        }
                        t = a === -1 || s === -1 ? null : {
                          start: a,
                          end: s
                        };
                      } else {
                        t = null;
                      }
                    }
                  }
                  t = t || {
                    start: 0,
                    end: 0
                  };
                } else {
                  t = null;
                }
                ei = {
                  focusedElem: n,
                  selectionRange: t
                };
                Ge = false;
                Yl = e;
                while (Yl !== null) {
                  n = (e = Yl).child;
                  if (e.subtreeFlags & 1028 && n !== null) {
                    n.return = e;
                    Yl = n;
                  } else {
                    while (Yl !== null) {
                      e = Yl;
                      try {
                        var p = e.alternate;
                        if (e.flags & 1024) {
                          switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (p !== null) {
                                var v = p.memoizedProps;
                                var g = p.memoizedState;
                                var m = e.stateNode;
                                var b = m.getSnapshotBeforeUpdate(e.elementType === e.type ? v : tl(e.type, v), g);
                                m.V = b;
                              }
                              break;
                            case 3:
                              var w = e.stateNode.containerInfo;
                              if (w.nodeType === 1) {
                                w.textContent = "";
                              } else if (w.nodeType === 9 && w.documentElement) {
                                w.removeChild(w.documentElement);
                              }
                              break;
                            default:
                              throw Error(u(163));
                          }
                        }
                      } catch (n) {
                        ks(e, e.return, n);
                      }
                      if ((n = e.sibling) !== null) {
                        n.return = e.return;
                        Yl = n;
                        break;
                      }
                      Yl = e.return;
                    }
                  }
                }
                p = na;
                na = false;
              })(n, t);
              pa(t, n);
              Dr(ei);
              Ge = !!ni;
              ei = ni = null;
              n.current = t;
              ga(t, n, i);
              Yn();
              _a = a;
              we = l;
              xa.transition = o;
            } else {
              n.current = t;
            }
            if (Wa) {
              Wa = false;
              Ka = n;
              Za = i;
            }
            o = n.pendingLanes;
            if (o === 0) {
              Ga = null;
            }
            (function (n) {
              if (oe && typeof oe.onCommitFiberRoot == "function") {
                try {
                  oe.onCommitFiberRoot(ue, n, undefined, !(~n.current.flags & 128));
                } catch (n) {}
              }
            })(t.stateNode);
            ts(n, Jn());
            if (e !== null) {
              r = n.onRecoverableError;
              t = 0;
              for (; t < e.length; t++) {
                i = e[t];
                r(i.value, {
                  componentStack: i.stack,
                  digest: i.digest
                });
              }
            }
            if (Va) {
              Va = false;
              n = $a;
              $a = null;
              throw n;
            }
            if (!!(Za & 1) && n.tag !== 0) {
              ys();
            }
            o = n.pendingLanes;
            if (o & 1) {
              if (n === Qa) {
                qa++;
              } else {
                qa = 0;
                Qa = n;
              }
            } else {
              qa = 0;
            }
            zi();
          })(n, e, t, r);
        } finally {
          xa.transition = i;
          we = r;
        }
        return null;
      }
      function ys() {
        if (Ka !== null) {
          var n = ye(Za);
          var e = xa.transition;
          var t = we;
          try {
            xa.transition = null;
            we = n < 16 ? 16 : n;
            if (Ka === null) {
              var r = false;
            } else {
              n = Ka;
              Ka = null;
              Za = 0;
              if (_a & 6) {
                throw Error(u(331));
              }
              var i = _a;
              _a |= 4;
              Yl = n.current;
              while (Yl !== null) {
                var o = Yl;
                var l = o.child;
                if (Yl.flags & 16) {
                  var a = o.deletions;
                  if (a !== null) {
                    for (var s = 0; s < a.length; s++) {
                      var c = a[s];
                      for (Yl = c; Yl !== null;) {
                        var f = Yl;
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ea(8, f, o);
                        }
                        var d = f.child;
                        if (d !== null) {
                          d.return = f;
                          Yl = d;
                        } else {
                          while (Yl !== null) {
                            var h = (f = Yl).sibling;
                            var D = f.return;
                            ia(f);
                            if (f === c) {
                              Yl = null;
                              break;
                            }
                            if (h !== null) {
                              h.return = D;
                              Yl = h;
                              break;
                            }
                            Yl = D;
                          }
                        }
                      }
                    }
                    var p = o.alternate;
                    if (p !== null) {
                      var v = p.child;
                      if (v !== null) {
                        p.child = null;
                        do {
                          var g = v.sibling;
                          v.sibling = null;
                          v = g;
                        } while (v !== null);
                      }
                    }
                    Yl = o;
                  }
                }
                if (o.subtreeFlags & 2064 && l !== null) {
                  l.return = o;
                  Yl = l;
                } else {
                  n: while (Yl !== null) {
                    if ((o = Yl).flags & 2048) {
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ea(9, o, o.return);
                      }
                    }
                    var m = o.sibling;
                    if (m !== null) {
                      m.return = o.return;
                      Yl = m;
                      break n;
                    }
                    Yl = o.return;
                  }
                }
              }
              var b = n.current;
              for (Yl = b; Yl !== null;) {
                var w = (l = Yl).child;
                if (l.subtreeFlags & 2064 && w !== null) {
                  w.return = l;
                  Yl = w;
                } else {
                  n: for (l = b; Yl !== null;) {
                    if ((a = Yl).flags & 2048) {
                      try {
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ta(9, a);
                        }
                      } catch (n) {
                        ks(a, a.return, n);
                      }
                    }
                    if (a === l) {
                      Yl = null;
                      break n;
                    }
                    var y = a.sibling;
                    if (y !== null) {
                      y.return = a.return;
                      Yl = y;
                      break n;
                    }
                    Yl = a.return;
                  }
                }
              }
              _a = i;
              zi();
              if (oe && typeof oe.onPostCommitFiberRoot == "function") {
                try {
                  oe.onPostCommitFiberRoot(ue, n);
                } catch (n) {}
              }
              r = true;
            }
            return r;
          } finally {
            we = t;
            xa.transition = e;
          }
        }
        return false;
      }
      function Fs(n, e, t) {
        n = Pu(n, e = hl(0, e = sl(t, e), 1), 1);
        e = Xa();
        if (n !== null) {
          me(n, 1, e);
          ts(n, e);
        }
      }
      function ks(n, e, t) {
        if (n.tag === 3) {
          Fs(n, n, t);
        } else {
          while (e !== null) {
            if (e.tag === 3) {
              Fs(e, n, t);
              break;
            }
            if (e.tag === 1) {
              var r = e.stateNode;
              if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ga === null || !Ga.has(r))) {
                e = Pu(e, n = Dl(e, n = sl(t, n), 1), 1);
                n = Xa();
                if (e !== null) {
                  me(e, 1, n);
                  ts(e, n);
                }
                break;
              }
            }
            e = e.return;
          }
        }
      }
      function Es(n, e, t) {
        var r = n.pingCache;
        if (r !== null) {
          r.delete(e);
        }
        e = Xa();
        n.pingedLanes |= n.suspendedLanes & t;
        if (Sa === n && (Aa & t) === t) {
          if (Ta === 4 || Ta === 3 && (Aa & 130023424) === Aa && Jn() - Na < 500) {
            fs(n, 0);
          } else {
            Ua |= t;
          }
        }
        ts(n, e);
      }
      function Cs(n, e) {
        if (e === 0) {
          if (n.mode & 1) {
            e = fe;
            if (!((fe <<= 1) & 130023424)) {
              fe = 4194304;
            }
          } else {
            e = 1;
          }
        }
        var t = Xa();
        if ((n = Ou(n, e)) !== null) {
          me(n, e, t);
          ts(n, t);
        }
      }
      function xs(n) {
        var e = n.memoizedState;
        var t = 0;
        if (e !== null) {
          t = e.retryLane;
        }
        Cs(n, t);
      }
      function _s(n, e) {
        var t = 0;
        switch (n.tag) {
          case 13:
            var r = n.stateNode;
            var i = n.memoizedState;
            if (i !== null) {
              t = i.retryLane;
            }
            break;
          case 19:
            r = n.stateNode;
            break;
          default:
            throw Error(u(314));
        }
        if (r !== null) {
          r.delete(e);
        }
        Cs(n, t);
      }
      function Ss(n, e) {
        return Zn(n, e);
      }
      function Bs(n, e, t, r) {
        this.tag = n;
        this.key = t;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = e;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = r;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function As(n, e, t, r) {
        return new Bs(n, e, t, r);
      }
      function js(n) {
        return !!(n = n.prototype) && !!n.isReactComponent;
      }
      function Is(n, e) {
        var t = n.alternate;
        if (t === null) {
          (t = As(n.tag, e, n.key, n.mode)).elementType = n.elementType;
          t.type = n.type;
          t.stateNode = n.stateNode;
          t.alternate = n;
          n.alternate = t;
        } else {
          t.pendingProps = e;
          t.type = n.type;
          t.flags = 0;
          t.subtreeFlags = 0;
          t.deletions = null;
        }
        t.flags = n.flags & 14680064;
        t.childLanes = n.childLanes;
        t.lanes = n.lanes;
        t.child = n.child;
        t.memoizedProps = n.memoizedProps;
        t.memoizedState = n.memoizedState;
        t.updateQueue = n.updateQueue;
        e = n.dependencies;
        t.dependencies = e === null ? null : {
          lanes: e.lanes,
          firstContext: e.firstContext
        };
        t.sibling = n.sibling;
        t.index = n.index;
        t.ref = n.ref;
        return t;
      }
      function Ts(n, e, t, r, i, o) {
        var l = 2;
        r = n;
        if (typeof n == "function") {
          if (js(n)) {
            l = 1;
          }
        } else if (typeof n == "string") {
          l = 5;
        } else {
          n: switch (n) {
            case k:
              return Os(t.children, i, o, e);
            case E:
              l = 8;
              i |= 8;
              break;
            case C:
              (n = As(12, t, e, i | 2)).elementType = C;
              n.lanes = o;
              return n;
            case B:
              (n = As(13, t, e, i)).elementType = B;
              n.lanes = o;
              return n;
            case A:
              (n = As(19, t, e, i)).elementType = A;
              n.lanes = o;
              return n;
            case T:
              return Rs(t, i, o, e);
            default:
              if (typeof n == "object" && n !== null) {
                switch (n.$$typeof) {
                  case x:
                    l = 10;
                    break n;
                  case _:
                    l = 9;
                    break n;
                  case S:
                    l = 11;
                    break n;
                  case j:
                    l = 14;
                    break n;
                  case I:
                    l = 16;
                    r = null;
                    break n;
                }
              }
              throw Error(u(130, n == null ? n : typeof n, ""));
          }
        }
        (e = As(l, t, e, i)).elementType = n;
        e.type = r;
        e.lanes = o;
        return e;
      }
      function Os(n, e, t, r) {
        (n = As(7, n, r, e)).lanes = t;
        return n;
      }
      function Rs(n, e, t, r) {
        (n = As(22, n, r, e)).elementType = T;
        n.lanes = t;
        n.stateNode = {
          isHidden: false
        };
        return n;
      }
      function Ms(n, e, t) {
        (n = As(6, n, null, e)).lanes = t;
        return n;
      }
      function Us(n, e, t) {
        (e = As(4, n.children !== null ? n.children : [], n.key, e)).lanes = t;
        e.stateNode = {
          containerInfo: n.containerInfo,
          pendingChildren: null,
          implementation: n.implementation
        };
        return e;
      }
      function Ls(n, e, t, r, i) {
        this.tag = e;
        this.containerInfo = n;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = ge(0);
        this.expirationTimes = ge(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = ge(0);
        this.identifierPrefix = r;
        this.onRecoverableError = i;
        this.mutableSourceEagerHydrationData = null;
      }
      function Ps(n, e, t, r, i, u, o, l, a) {
        n = new Ls(n, e, t, l, a);
        if (e === 1) {
          e = 1;
          if (u === true) {
            e |= 8;
          }
        } else {
          e = 0;
        }
        u = As(3, null, null, e);
        n.current = u;
        u.stateNode = n;
        u.memoizedState = {
          element: r,
          isDehydrated: t,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        Mu(u);
        return n;
      }
      function Ns(n) {
        if (!n) {
          return _i;
        }
        n: {
          if (Vn(n = n.L) !== n || n.tag !== 1) {
            throw Error(u(170));
          }
          var e = n;
          do {
            switch (e.tag) {
              case 3:
                e = e.stateNode.context;
                break n;
              case 1:
                if (Ii(e.type)) {
                  e = e.stateNode.O;
                  break n;
                }
            }
            e = e.return;
          } while (e !== null);
          throw Error(u(171));
        }
        if (n.tag === 1) {
          var t = n.type;
          if (Ii(t)) {
            return Ri(n, t, e);
          }
        }
        return e;
      }
      function Hs(n, e, t, r, i, u, o, l, a) {
        (n = Ps(t, r, true, n, 0, u, 0, l, a)).context = Ns(null);
        t = n.current;
        (u = Lu(r = Xa(), i = ns(t))).callback = e ?? null;
        Pu(t, u, i);
        n.current.lanes = i;
        me(n, i, r);
        ts(n, r);
        return n;
      }
      function zs(n, e, t, r) {
        var i = e.current;
        var u = Xa();
        var o = ns(i);
        t = Ns(t);
        if (e.context === null) {
          e.context = t;
        } else {
          e.pendingContext = t;
        }
        (e = Lu(u, o)).payload = {
          element: n
        };
        if ((r = r === undefined ? null : r) !== null) {
          e.callback = r;
        }
        if ((n = Pu(i, e, o)) !== null) {
          es(n, i, o, u);
          Nu(n, i, o);
        }
        return o;
      }
      function Vs(n) {
        if ((n = n.current).child) {
          n.child.tag;
          return n.child.stateNode;
        } else {
          return null;
        }
      }
      function $s(n, e) {
        if ((n = n.memoizedState) !== null && n.dehydrated !== null) {
          var t = n.retryLane;
          n.retryLane = t !== 0 && t < e ? t : e;
        }
      }
      function Gs(n, e) {
        $s(n, e);
        if (n = n.alternate) {
          $s(n, e);
        }
      }
      Fa = function (n, e, t) {
        if (n !== null) {
          if (n.memoizedProps !== e.pendingProps || Bi.current) {
            bl = true;
          } else {
            if ((n.lanes & t) === 0 && !(e.flags & 128)) {
              bl = false;
              return function (n, e, t) {
                switch (e.tag) {
                  case 3:
                    Bl(e);
                    hu();
                    break;
                  case 5:
                    Yu(e);
                    break;
                  case 1:
                    if (Ii(e.type)) {
                      Mi(e);
                    }
                    break;
                  case 4:
                    qu(e, e.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = e.type.v;
                    var i = e.memoizedProps.value;
                    xi(Fu, r.M);
                    r.M = i;
                    break;
                  case 13:
                    if ((r = e.memoizedState) !== null) {
                      if (r.dehydrated !== null) {
                        xi(Xu, Xu.current & 1);
                        e.flags |= 128;
                        return null;
                      } else if ((t & e.child.childLanes) !== 0) {
                        return Ml(n, e, t);
                      } else {
                        xi(Xu, Xu.current & 1);
                        if ((n = Vl(n, e, t)) !== null) {
                          return n.sibling;
                        } else {
                          return null;
                        }
                      }
                    }
                    xi(Xu, Xu.current & 1);
                    break;
                  case 19:
                    r = (t & e.childLanes) !== 0;
                    if (n.flags & 128) {
                      if (r) {
                        return Hl(n, e, t);
                      }
                      e.flags |= 128;
                    }
                    if ((i = e.memoizedState) !== null) {
                      i.rendering = null;
                      i.tail = null;
                      i.lastEffect = null;
                    }
                    xi(Xu, Xu.current);
                    if (r) {
                      break;
                    }
                    return null;
                  case 22:
                  case 23:
                    e.lanes = 0;
                    return El(n, e, t);
                }
                return Vl(n, e, t);
              }(n, e, t);
            }
            bl = !!(n.flags & 131072);
          }
        } else {
          bl = false;
          if (iu && e.flags & 1048576) {
            Xi(e, Wi, e.index);
          }
        }
        e.lanes = 0;
        switch (e.tag) {
          case 2:
            var r = e.type;
            zl(n, e);
            n = e.pendingProps;
            var i = ji(e, Si.current);
            Bu(e, t);
            i = vo(null, e, r, n, i, t);
            var o = go();
            e.flags |= 1;
            if (typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === undefined) {
              e.tag = 1;
              e.memoizedState = null;
              e.updateQueue = null;
              if (Ii(r)) {
                o = true;
                Mi(e);
              } else {
                o = false;
              }
              e.memoizedState = i.state ?? null;
              Mu(e);
              i.updater = il;
              e.stateNode = i;
              i.L = e;
              al(e, r, n, t);
              e = Sl(null, e, r, true, o, t);
            } else {
              e.tag = 0;
              if (iu && o) {
                nu(e);
              }
              wl(null, e, i, t);
              e = e.child;
            }
            return e;
          case 16:
            r = e.elementType;
            n: {
              zl(n, e);
              n = e.pendingProps;
              r = (i = r.F)(r.m);
              e.type = r;
              i = e.tag = function (n) {
                if (typeof n == "function") {
                  if (js(n)) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
                if (n != null) {
                  if ((n = n.$$typeof) === S) {
                    return 11;
                  }
                  if (n === j) {
                    return 14;
                  }
                }
                return 2;
              }(r);
              n = tl(r, n);
              switch (i) {
                case 0:
                  e = xl(null, e, r, n, t);
                  break n;
                case 1:
                  e = _l(null, e, r, n, t);
                  break n;
                case 11:
                  e = yl(null, e, r, n, t);
                  break n;
                case 14:
                  e = Fl(null, e, r, tl(r.type, n), t);
                  break n;
              }
              throw Error(u(306, r, ""));
            }
            return e;
          case 0:
            r = e.type;
            i = e.pendingProps;
            return xl(n, e, r, i = e.elementType === r ? i : tl(r, i), t);
          case 1:
            r = e.type;
            i = e.pendingProps;
            return _l(n, e, r, i = e.elementType === r ? i : tl(r, i), t);
          case 3:
            n: {
              Bl(e);
              if (n === null) {
                throw Error(u(387));
              }
              r = e.pendingProps;
              i = (o = e.memoizedState).element;
              Uu(n, e);
              zu(e, r, null, t);
              var l = e.memoizedState;
              r = l.element;
              if (o.isDehydrated) {
                o = {
                  element: r,
                  isDehydrated: false,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions
                };
                e.updateQueue.baseState = o;
                e.memoizedState = o;
                if (e.flags & 256) {
                  e = Al(n, e, r, t, i = sl(Error(u(423)), e));
                  break n;
                }
                if (r !== i) {
                  e = Al(n, e, r, t, i = sl(Error(u(424)), e));
                  break n;
                }
                ru = si(e.stateNode.containerInfo.firstChild);
                tu = e;
                iu = true;
                uu = null;
                t = yu(e, null, r, t);
                e.child = t;
                while (t) {
                  t.flags = t.flags & -3 | 4096;
                  t = t.sibling;
                }
              } else {
                hu();
                if (r === i) {
                  e = Vl(n, e, t);
                  break n;
                }
                wl(n, e, r, t);
              }
              e = e.child;
            }
            return e;
          case 5:
            Yu(e);
            if (n === null) {
              su(e);
            }
            r = e.type;
            i = e.pendingProps;
            o = n !== null ? n.memoizedProps : null;
            l = i.children;
            if (ti(r, i)) {
              l = null;
            } else if (o !== null && ti(r, o)) {
              e.flags |= 32;
            }
            Cl(n, e);
            wl(n, e, l, t);
            return e.child;
          case 6:
            if (n === null) {
              su(e);
            }
            return null;
          case 13:
            return Ml(n, e, t);
          case 4:
            qu(e, e.stateNode.containerInfo);
            r = e.pendingProps;
            if (n === null) {
              e.child = wu(e, null, r, t);
            } else {
              wl(n, e, r, t);
            }
            return e.child;
          case 11:
            r = e.type;
            i = e.pendingProps;
            return yl(n, e, r, i = e.elementType === r ? i : tl(r, i), t);
          case 7:
            wl(n, e, e.pendingProps, t);
            return e.child;
          case 8:
          case 12:
            wl(n, e, e.pendingProps.children, t);
            return e.child;
          case 10:
            n: {
              r = e.type.v;
              i = e.pendingProps;
              o = e.memoizedProps;
              l = i.value;
              xi(Fu, r.M);
              r.M = l;
              if (o !== null) {
                if (lr(o.value, l)) {
                  if (o.children === i.children && !Bi.current) {
                    e = Vl(n, e, t);
                    break n;
                  }
                } else {
                  for ((o = e.child) !== null && (o.return = e); o !== null;) {
                    var a = o.dependencies;
                    if (a !== null) {
                      l = o.child;
                      for (var s = a.firstContext; s !== null;) {
                        if (s.context === r) {
                          if (o.tag === 1) {
                            (s = Lu(-1, t & -t)).tag = 2;
                            var c = o.updateQueue;
                            if (c !== null) {
                              var f = (c = c.shared).pending;
                              if (f === null) {
                                s.next = s;
                              } else {
                                s.next = f.next;
                                f.next = s;
                              }
                              c.pending = s;
                            }
                          }
                          o.lanes |= t;
                          if ((s = o.alternate) !== null) {
                            s.lanes |= t;
                          }
                          Su(o.return, t, e);
                          a.lanes |= t;
                          break;
                        }
                        s = s.next;
                      }
                    } else if (o.tag === 10) {
                      l = o.type === e.type ? null : o.child;
                    } else if (o.tag === 18) {
                      if ((l = o.return) === null) {
                        throw Error(u(341));
                      }
                      l.lanes |= t;
                      if ((a = l.alternate) !== null) {
                        a.lanes |= t;
                      }
                      Su(l, t, e);
                      l = o.sibling;
                    } else {
                      l = o.child;
                    }
                    if (l !== null) {
                      l.return = o;
                    } else {
                      for (l = o; l !== null;) {
                        if (l === e) {
                          l = null;
                          break;
                        }
                        if ((o = l.sibling) !== null) {
                          o.return = l.return;
                          l = o;
                          break;
                        }
                        l = l.return;
                      }
                    }
                    o = l;
                  }
                }
              }
              wl(n, e, i.children, t);
              e = e.child;
            }
            return e;
          case 9:
            i = e.type;
            r = e.pendingProps.children;
            Bu(e, t);
            r = r(i = Au(i));
            e.flags |= 1;
            wl(n, e, r, t);
            return e.child;
          case 14:
            i = tl(r = e.type, e.pendingProps);
            return Fl(n, e, r, i = tl(r.type, i), t);
          case 15:
            return kl(n, e, e.type, e.pendingProps, t);
          case 17:
            r = e.type;
            i = e.pendingProps;
            i = e.elementType === r ? i : tl(r, i);
            zl(n, e);
            e.tag = 1;
            if (Ii(r)) {
              n = true;
              Mi(e);
            } else {
              n = false;
            }
            Bu(e, t);
            ol(e, r, i);
            al(e, r, i, t);
            return Sl(null, e, r, true, n, t);
          case 19:
            return Hl(n, e, t);
          case 22:
            return El(n, e, t);
        }
        throw Error(u(156, e.tag));
      };
      var Ws = typeof reportError == "function" ? reportError : function (n) {
        console.error(n);
      };
      function Ks(n) {
        this.$ = n;
      }
      function Zs(n) {
        this.$ = n;
      }
      function qs(n) {
        return !!n && (n.nodeType === 1 || n.nodeType === 9 || n.nodeType === 11);
      }
      function Qs(n) {
        return !!n && (n.nodeType === 1 || n.nodeType === 9 || n.nodeType === 11 || n.nodeType === 8 && n.nodeValue === " react-mount-point-unstable ");
      }
      function Ys() {}
      function Js(n, e, t, r, i) {
        var u = t.N;
        if (u) {
          var o = u;
          if (typeof i == "function") {
            var l = i;
            i = function () {
              var n = Vs(o);
              l.call(n);
            };
          }
          zs(e, o, n, i);
        } else {
          o = function (n, e, t, r, i) {
            if (i) {
              if (typeof r == "function") {
                var u = r;
                r = function () {
                  var n = Vs(o);
                  u.call(n);
                };
              }
              var o = Hs(e, r, n, 0, null, false, 0, "", Ys);
              n.N = o;
              n[Di] = o.current;
              zr(n.nodeType === 8 ? n.parentNode : n);
              ss();
              return o;
            }
            while (i = n.lastChild) {
              n.removeChild(i);
            }
            if (typeof r == "function") {
              var l = r;
              r = function () {
                var n = Vs(a);
                l.call(n);
              };
            }
            var a = Ps(n, 0, false, null, 0, false, 0, "", Ys);
            n.N = a;
            n[Di] = a.current;
            zr(n.nodeType === 8 ? n.parentNode : n);
            ss(function () {
              zs(e, a, t, r);
            });
            return a;
          }(t, e, n, i, r);
        }
        return Vs(o);
      }
      Zs.prototype.render = Ks.prototype.render = function (n) {
        var e = this.$;
        if (e === null) {
          throw Error(u(409));
        }
        zs(n, e, null, null);
      };
      Zs.prototype.unmount = Ks.prototype.unmount = function () {
        var n = this.$;
        if (n !== null) {
          this.$ = null;
          var e = n.containerInfo;
          ss(function () {
            zs(null, n, null, null);
          });
          e[Di] = null;
        }
      };
      Zs.prototype.unstable_scheduleHydration = function (n) {
        if (n) {
          var e = Ce();
          n = {
            blockedOn: null,
            target: n,
            priority: e
          };
          for (var t = 0; t < Oe.length && e !== 0 && e < Oe[t].priority; t++);
          Oe.splice(t, 0, n);
          if (t === 0) {
            Le(n);
          }
        }
      };
      Fe = function (n) {
        switch (n.tag) {
          case 3:
            var e = n.stateNode;
            if (e.current.memoizedState.isDehydrated) {
              var t = de(e.pendingLanes);
              if (t !== 0) {
                be(e, t | 1);
                ts(e, Jn());
                if (!(_a & 6)) {
                  Ha = Jn() + 500;
                  zi();
                }
              }
            }
            break;
          case 13:
            ss(function () {
              var e = Ou(n, 1);
              if (e !== null) {
                var t = Xa();
                es(e, n, 1, t);
              }
            });
            Gs(n, 1);
        }
      };
      ke = function (n) {
        if (n.tag === 13) {
          var e = Ou(n, 134217728);
          if (e !== null) {
            es(e, n, 134217728, Xa());
          }
          Gs(n, 134217728);
        }
      };
      Ee = function (n) {
        if (n.tag === 13) {
          var e = ns(n);
          var t = Ou(n, e);
          if (t !== null) {
            es(t, n, e, Xa());
          }
          Gs(n, e);
        }
      };
      Ce = function () {
        return we;
      };
      xe = function (n, e) {
        var t = we;
        try {
          we = n;
          return e();
        } finally {
          we = t;
        }
      };
      kn = function (n, e, t) {
        switch (e) {
          case "input":
            J(n, t);
            e = t.name;
            if (t.type === "radio" && e != null) {
              for (t = n; t.parentNode;) {
                t = t.parentNode;
              }
              t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + "][type=\"radio\"]");
              e = 0;
              for (; e < t.length; e++) {
                var r = t[e];
                if (r !== n && r.form === n.form) {
                  var i = yi(r);
                  if (!i) {
                    throw Error(u(90));
                  }
                  K(r);
                  J(r, i);
                }
              }
            }
            break;
          case "textarea":
            on(n, t);
            break;
          case "select":
            if ((e = t.value) != null) {
              tn(n, !!t.multiple, e, false);
            }
        }
      };
      Bn = as;
      An = ss;
      var Xs = {
        usingClientEntryPoint: false,
        Events: [bi, wi, yi, _n, Sn, as]
      };
      var nc = {
        findFiberByHostInstance: mi,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      };
      var ec = {
        bundleType: nc.bundleType,
        version: nc.version,
        rendererPackageName: nc.rendererPackageName,
        rendererConfig: nc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: w.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (n) {
          if ((n = Wn(n)) === null) {
            return null;
          } else {
            return n.stateNode;
          }
        },
        findFiberByHostInstance: nc.findFiberByHostInstance || function () {
          return null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
        var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!tc.isDisabled && tc.supportsFiber) {
          try {
            ue = tc.inject(ec);
            oe = tc;
          } catch (fn) {}
        }
      }
      e.t = Xs;
      e.createPortal = function (n, e, t = null) {
        if (!qs(e)) {
          throw Error(u(200));
        }
        return function (n, e, t, r = null) {
          return {
            $$typeof: F,
            key: r == null ? null : "" + r,
            children: n,
            containerInfo: e,
            implementation: t
          };
        }(n, e, null, t);
      };
      e.createRoot = function (n, e) {
        if (!qs(n)) {
          throw Error(u(299));
        }
        var t = false;
        var r = "";
        var i = Ws;
        if (e != null) {
          if (e.unstable_strictMode === true) {
            t = true;
          }
          if (e.identifierPrefix !== undefined) {
            r = e.identifierPrefix;
          }
          if (e.onRecoverableError !== undefined) {
            i = e.onRecoverableError;
          }
        }
        e = Ps(n, 1, false, null, 0, t, 0, r, i);
        n[Di] = e.current;
        zr(n.nodeType === 8 ? n.parentNode : n);
        return new Ks(e);
      };
      e.findDOMNode = function (n) {
        if (n == null) {
          return null;
        }
        if (n.nodeType === 1) {
          return n;
        }
        var e = n.L;
        if (e === undefined) {
          if (typeof n.render == "function") {
            throw Error(u(188));
          }
          n = Object.keys(n).join(",");
          throw Error(u(268, n));
        }
        return n = (n = Wn(e)) === null ? null : n.stateNode;
      };
      e.flushSync = function (n) {
        return ss(n);
      };
      e.hydrate = function (n, e, t) {
        if (!Qs(e)) {
          throw Error(u(200));
        }
        return Js(null, n, e, true, t);
      };
      e.hydrateRoot = function (n, e, t) {
        if (!qs(n)) {
          throw Error(u(405));
        }
        var r = t != null && t.hydratedSources || null;
        var i = false;
        var o = "";
        var l = Ws;
        if (t != null) {
          if (t.unstable_strictMode === true) {
            i = true;
          }
          if (t.identifierPrefix !== undefined) {
            o = t.identifierPrefix;
          }
          if (t.onRecoverableError !== undefined) {
            l = t.onRecoverableError;
          }
        }
        e = Hs(e, null, n, 1, t ?? null, i, 0, o, l);
        n[Di] = e.current;
        zr(n);
        if (r) {
          for (n = 0; n < r.length; n++) {
            i = (i = (t = r[n]).G)(t.W);
            if (e.mutableSourceEagerHydrationData == null) {
              e.mutableSourceEagerHydrationData = [t, i];
            } else {
              e.mutableSourceEagerHydrationData.push(t, i);
            }
          }
        }
        return new Zs(e);
      };
      e.render = function (n, e, t) {
        if (!Qs(e)) {
          throw Error(u(200));
        }
        return Js(null, n, e, false, t);
      };
      e.unmountComponentAtNode = function (n) {
        if (!Qs(n)) {
          throw Error(u(40));
        }
        return !!n.N && (ss(function () {
          Js(null, null, n, false, function () {
            n.N = null;
            n[Di] = null;
          });
        }), true);
      };
      e.unstable_batchedUpdates = as;
      e.unstable_renderSubtreeIntoContainer = function (n, e, t, r) {
        if (!Qs(t)) {
          throw Error(u(200));
        }
        if (n == null || n.L === undefined) {
          throw Error(u(38));
        }
        return Js(n, e, t, false, r);
      };
      e.version = "18.3.1-next-f1338f8080-20240426";
    },
    2586(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".pr6pPjeKFG4TyQ8hmo_K span {\n    opacity: 0;\n    -webkit-animation: xhWdIUUO4T1RIzESJKgD 1s infinite;\n    animation: xhWdIUUO4T1RIzESJKgD 1s infinite;\n}\n\n.pr6pPjeKFG4TyQ8hmo_K span:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n.pr6pPjeKFG4TyQ8hmo_K span:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n.pr6pPjeKFG4TyQ8hmo_K span:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@keyframes xhWdIUUO4T1RIzESJKgD {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n", ""]);
      o.locals = {
        ellipsesAnim: "pr6pPjeKFG4TyQ8hmo_K",
        "ellipsis-dot": "xhWdIUUO4T1RIzESJKgD"
      };
      const l = o;
    },
    2691(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".Gi7hRDes7JMt2LOnFVVS {\n    width: 52px;\n    height: 28px;\n    background-color: var(--black-15);\n    border-radius: 26px;\n    cursor: pointer;\n    transition: all var(--transition-time);\n    overflow: hidden;\n    position: relative;\n}\n.mztlugFN3I1fs56mmo4g {\n    margin-top: 4px;\n    margin-left: 4px;\n    background-color: var(--base-white);\n    filter: brightness(4);\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    transition: all var(--transition-time);\n}\n\n.iap0Lf6xKcQVhfYbNYKB {\n    background-image: linear-gradient(106.17deg, #ef3e3a 0%, #9e55a0 100%);\n    opacity: 0;\n    transition: all var(--transition-time);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: 26px;\n}\n._p6kEX84saHCraZLmjt2 {\n    background-image: var(--white-20);\n    opacity: 0;\n    transition: all var(--transition-time);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: 26px;\n}\n\n.Gi7hRDes7JMt2LOnFVVS.pk__mxy3da1OgNyHeRgB {\n}\n\n.Gi7hRDes7JMt2LOnFVVS.pk__mxy3da1OgNyHeRgB > .iap0Lf6xKcQVhfYbNYKB {\n    opacity: 1;\n}\n\n.Gi7hRDes7JMt2LOnFVVS.pk__mxy3da1OgNyHeRgB > .mztlugFN3I1fs56mmo4g {\n    transform: translateX(24px);\n    filter: brightness(1);\n}\n\n.wRzu8QrenTtKjngawozc {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 0 10px;\n}\n.ql_GBGLhEpxHyLgvxHfl {\n    font-size: 13px;\n    color: var(--white-20);\n}\n\n.FZR4QzrNSIXhjiquZm1i {\n    margin: 8px 0 6px;\n}\n", ""]);
      o.locals = {
        toggleSwitch: "Gi7hRDes7JMt2LOnFVVS",
        toggleSwitchInner: "mztlugFN3I1fs56mmo4g",
        toggleSwitchBackground: "iap0Lf6xKcQVhfYbNYKB",
        toggleSwitchBackgroundDisabled: "_p6kEX84saHCraZLmjt2",
        on: "pk__mxy3da1OgNyHeRgB",
        labeledToggleSwitch: "wRzu8QrenTtKjngawozc",
        labeledToggleSwitchLabel: "ql_GBGLhEpxHyLgvxHfl",
        scheduleForm: "FZR4QzrNSIXhjiquZm1i"
      };
      const l = o;
    },
    2849(n) {
      var e = Object.prototype.hasOwnProperty;
      var t = Object.prototype.toString;
      var r = Object.defineProperty;
      var i = Object.getOwnPropertyDescriptor;
      function u(n) {
        if (typeof Array.isArray == "function") {
          return Array.isArray(n);
        } else {
          return t.call(n) === "[object Array]";
        }
      }
      function o(n) {
        if (!n || t.call(n) !== "[object Object]") {
          return false;
        }
        var r;
        var i = e.call(n, "constructor");
        var u = n.constructor && n.constructor.prototype && e.call(n.constructor.prototype, "isPrototypeOf");
        if (n.constructor && !i && !u) {
          return false;
        }
        for (r in n);
        return r === undefined || e.call(n, r);
      }
      function l(n, e) {
        if (r && e.name === "__proto__") {
          r(n, e.name, {
            enumerable: true,
            configurable: true,
            value: e.newValue,
            writable: true
          });
        } else {
          n[e.name] = e.newValue;
        }
      }
      function a(n, t) {
        if (t === "__proto__") {
          if (!e.call(n, t)) {
            return;
          }
          if (i) {
            return i(n, t).value;
          }
        }
        return n[t];
      }
      n.exports = function n() {
        var e;
        var t;
        var r;
        var i;
        var s;
        var c;
        var f = arguments[0];
        var d = 1;
        var h = arguments.length;
        var D = false;
        if (typeof f == "boolean") {
          D = f;
          f = arguments[1] || {};
          d = 2;
        }
        if (f == null || typeof f != "object" && typeof f != "function") {
          f = {};
        }
        for (; d < h; ++d) {
          if ((e = arguments[d]) != null) {
            for (t in e) {
              r = a(f, t);
              if (f !== (i = a(e, t))) {
                if (D && i && (o(i) || (s = u(i)))) {
                  if (s) {
                    s = false;
                    c = r && u(r) ? r : [];
                  } else {
                    c = r && o(r) ? r : {};
                  }
                  l(f, {
                    name: t,
                    newValue: n(D, c, i)
                  });
                } else if (i !== undefined) {
                  l(f, {
                    name: t,
                    newValue: i
                  });
                }
              }
            }
          }
        }
        return f;
      };
    },
    3086(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".bPTK3DFAVB0aNwOe9ykX {\n    font-size: 12px;\n    color: var(--black-5);\n    font-weight: 400;\n}\n", ""]);
      o.locals = {
        infoLabel: "bPTK3DFAVB0aNwOe9ykX"
      };
      const l = o;
    },
    3270(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".Mifo80YNJgx06ZG_YB7L > hr {\n    border-color: var(--black-20);\n}\n\n.Mifo80YNJgx06ZG_YB7L > p {\n    font-size: 14px;\n    color: var(--white-15);\n}\n", ""]);
      o.locals = {
        reviewMessage: "Mifo80YNJgx06ZG_YB7L"
      };
      const l = o;
    },
    4848(n, e, t) {
      n.exports = t(1020);
    },
    5056(n, e, t) {
      n.exports = function (n) {
        var e = t.nc;
        if (e) {
          n.setAttribute("nonce", e);
        }
      };
    },
    5072(n) {
      var e = [];
      function t(n) {
        var t = -1;
        for (var r = 0; r < e.length; r++) {
          if (e[r].identifier === n) {
            t = r;
            break;
          }
        }
        return t;
      }
      function r(n, r) {
        var u = {};
        var o = [];
        for (var l = 0; l < n.length; l++) {
          var a = n[l];
          var s = r.base ? a[0] + r.base : a[0];
          var c = u[s] || 0;
          var f = `${s} ${c}`;
          u[s] = c + 1;
          var d = t(f);
          var h = {
            css: a[1],
            media: a[2],
            sourceMap: a[3],
            supports: a[4],
            layer: a[5]
          };
          if (d !== -1) {
            e[d].references++;
            e[d].updater(h);
          } else {
            var D = i(h, r);
            r.byIndex = l;
            e.splice(l, 0, {
              identifier: f,
              updater: D,
              references: 1
            });
          }
          o.push(f);
        }
        return o;
      }
      function i(n, e) {
        var t = e.domAPI(e);
        t.update(n);
        return function (e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) {
              return;
            }
            t.update(n = e);
          } else {
            t.remove();
          }
        };
      }
      n.exports = function (n, i) {
        var u = r(n = n || [], i = i || {});
        return function (n) {
          n = n || [];
          for (var o = 0; o < u.length; o++) {
            var l = t(u[o]);
            e[l].references--;
          }
          var a = r(n, i);
          for (var s = 0; s < u.length; s++) {
            var c = t(u[s]);
            if (e[c].references === 0) {
              e[c].updater();
              e.splice(c, 1);
            }
          }
          u = a;
        };
      };
    },
    5077(n) {
      var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      var t = /\n/g;
      var r = /^\s*/;
      var i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
      var u = /^:\s*/;
      var o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
      var l = /^[;\s]*/;
      var a = /^\s+|\s+$/g;
      var s = "";
      function c(n) {
        if (n) {
          return n.replace(a, s);
        } else {
          return s;
        }
      }
      n.exports = function (n, a) {
        if (typeof n != "string") {
          throw new TypeError("First argument must be a string");
        }
        if (!n) {
          return [];
        }
        a = a || {};
        var f = 1;
        var d = 1;
        function h(n) {
          var e = n.match(t);
          if (e) {
            f += e.length;
          }
          var r = n.lastIndexOf("\n");
          d = ~r ? n.length - r : d + n.length;
        }
        function D() {
          var n = {
            line: f,
            column: d
          };
          return function (e) {
            e.position = new p(n);
            m();
            return e;
          };
        }
        function p(n) {
          this.start = n;
          this.end = {
            line: f,
            column: d
          };
          this.source = a.source;
        }
        function v(e) {
          var t = new Error(a.source + ":" + f + ":" + d + ": " + e);
          t.reason = e;
          t.filename = a.source;
          t.line = f;
          t.column = d;
          t.source = n;
          if (!a.silent) {
            throw t;
          }
        }
        function g(e) {
          var t = e.exec(n);
          if (t) {
            var r = t[0];
            h(r);
            n = n.slice(r.length);
            return t;
          }
        }
        function m() {
          g(r);
        }
        function b(n) {
          var e;
          for (n = n || []; e = w();) {
            if (e !== false) {
              n.push(e);
            }
          }
          return n;
        }
        function w() {
          var e = D();
          if (n.charAt(0) == "/" && n.charAt(1) == "*") {
            for (var t = 2; s != n.charAt(t) && (n.charAt(t) != "*" || n.charAt(t + 1) != "/");) {
              ++t;
            }
            t += 2;
            if (s === n.charAt(t - 1)) {
              return v("End of comment missing");
            }
            var r = n.slice(2, t - 2);
            d += 2;
            h(r);
            n = n.slice(t);
            d += 2;
            return e({
              type: "comment",
              comment: r
            });
          }
        }
        function y() {
          var n = D();
          var t = g(i);
          if (t) {
            w();
            if (!g(u)) {
              return v("property missing ':'");
            }
            var r = g(o);
            var a = n({
              type: "declaration",
              property: c(t[0].replace(e, s)),
              value: r ? c(r[0].replace(e, s)) : s
            });
            g(l);
            return a;
          }
        }
        p.prototype.content = n;
        m();
        return function () {
          var n;
          var e = [];
          for (b(e); n = y();) {
            if (n !== false) {
              e.push(n);
              b(e);
            }
          }
          return e;
        }();
      };
    },
    5229(n, e, t) {
      var r = (this && this.D || function (n) {
        if (n && n.p) {
          return n;
        } else {
          return {
            default: n
          };
        }
      })(t(1133));
      var i = t(8917);
      function u(n, e) {
        var t = {};
        if (n && typeof n == "string") {
          (0, r.default)(n, function (n, r) {
            if (n && r) {
              t[(0, i.camelCase)(n, e)] = r;
            }
          });
          return t;
        } else {
          return t;
        }
      }
      u.default = u;
      n.exports = u;
    },
    5287(n, e) {
      var t = Symbol.for("react.element");
      var r = Symbol.for("react.portal");
      var i = Symbol.for("react.fragment");
      var u = Symbol.for("react.strict_mode");
      var o = Symbol.for("react.profiler");
      var l = Symbol.for("react.provider");
      var a = Symbol.for("react.context");
      var s = Symbol.for("react.forward_ref");
      var c = Symbol.for("react.suspense");
      var f = Symbol.for("react.memo");
      var d = Symbol.for("react.lazy");
      var h = Symbol.iterator;
      var D = {
        isMounted: function () {
          return false;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      };
      var p = Object.assign;
      var v = {};
      function g(n, e, t) {
        this.props = n;
        this.context = e;
        this.refs = v;
        this.updater = t || D;
      }
      function m() {}
      function b(n, e, t) {
        this.props = n;
        this.context = e;
        this.refs = v;
        this.updater = t || D;
      }
      g.prototype.isReactComponent = {};
      g.prototype.setState = function (n, e) {
        if (typeof n != "object" && typeof n != "function" && n != null) {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
        this.updater.enqueueSetState(this, n, e, "setState");
      };
      g.prototype.forceUpdate = function (n) {
        this.updater.enqueueForceUpdate(this, n, "forceUpdate");
      };
      m.prototype = g.prototype;
      var w = b.prototype = new m();
      w.constructor = b;
      p(w, g.prototype);
      w.isPureReactComponent = true;
      var y = Array.isArray;
      var F = Object.prototype.hasOwnProperty;
      var k = {
        current: null
      };
      var E = {
        key: true,
        ref: true,
        u: true,
        l: true
      };
      function C(n, e, r) {
        var i;
        var u = {};
        var o = null;
        var l = null;
        if (e != null) {
          if (e.ref !== undefined) {
            l = e.ref;
          }
          if (e.key !== undefined) {
            o = "" + e.key;
          }
          for (i in e) {
            if (F.call(e, i) && !E.hasOwnProperty(i)) {
              u[i] = e[i];
            }
          }
        }
        var a = arguments.length - 2;
        if (a === 1) {
          u.children = r;
        } else if (a > 1) {
          var s = Array(a);
          for (var c = 0; c < a; c++) {
            s[c] = arguments[c + 2];
          }
          u.children = s;
        }
        if (n && n.defaultProps) {
          for (i in a = n.defaultProps) {
            if (u[i] === undefined) {
              u[i] = a[i];
            }
          }
        }
        return {
          $$typeof: t,
          type: n,
          key: o,
          ref: l,
          props: u,
          h: k.current
        };
      }
      function x(n) {
        return typeof n == "object" && n !== null && n.$$typeof === t;
      }
      var _ = /\/+/g;
      function S(n, e) {
        if (typeof n == "object" && n !== null && n.key != null) {
          return function (n) {
            var e = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + n.replace(/[=:]/g, function (n) {
              return e[n];
            });
          }("" + n.key);
        } else {
          return e.toString(36);
        }
      }
      function B(n, e, i, u, o) {
        var l = typeof n;
        if (l === "undefined" || l === "boolean") {
          n = null;
        }
        var a = false;
        if (n === null) {
          a = true;
        } else {
          switch (l) {
            case "string":
            case "number":
              a = true;
              break;
            case "object":
              switch (n.$$typeof) {
                case t:
                case r:
                  a = true;
              }
          }
        }
        if (a) {
          o = o(a = n);
          n = u === "" ? "." + S(a, 0) : u;
          if (y(o)) {
            i = "";
            if (n != null) {
              i = n.replace(_, "$&/") + "/";
            }
            B(o, e, i, "", function (n) {
              return n;
            });
          } else if (o != null) {
            if (x(o)) {
              o = function (n, e) {
                return {
                  $$typeof: t,
                  type: n.type,
                  key: e,
                  ref: n.ref,
                  props: n.props,
                  h: n.h
                };
              }(o, i + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(_, "$&/") + "/") + n);
            }
            e.push(o);
          }
          return 1;
        }
        a = 0;
        u = u === "" ? "." : u + ":";
        if (y(n)) {
          for (var s = 0; s < n.length; s++) {
            var c = u + S(l = n[s], s);
            a += B(l, e, i, c, o);
          }
        } else {
          c = function (n) {
            if (n === null || typeof n != "object") {
              return null;
            } else if (typeof (n = h && n[h] || n["@@iterator"]) == "function") {
              return n;
            } else {
              return null;
            }
          }(n);
          if (typeof c == "function") {
            n = c.call(n);
            s = 0;
            while (!(l = n.next()).done) {
              a += B(l = l.value, e, i, c = u + S(l, s++), o);
            }
          } else if (l === "object") {
            e = String(n);
            throw Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return a;
      }
      function A(n, e, t) {
        if (n == null) {
          return n;
        }
        var r = [];
        var i = 0;
        B(n, r, "", "", function (n) {
          return e.call(t, n, i++);
        });
        return r;
      }
      function j(n) {
        if (n.K === -1) {
          var e = n.Z;
          (e = e()).then(function (e) {
            if (n.K === 0 || n.K === -1) {
              n.K = 1;
              n.Z = e;
            }
          }, function (e) {
            if (n.K === 0 || n.K === -1) {
              n.K = 2;
              n.Z = e;
            }
          });
          if (n.K === -1) {
            n.K = 0;
            n.Z = e;
          }
        }
        if (n.K === 1) {
          return n.Z.default;
        }
        throw n.Z;
      }
      var I = {
        current: null
      };
      var T = {
        transition: null
      };
      var O = {
        ReactCurrentDispatcher: I,
        ReactCurrentBatchConfig: T,
        ReactCurrentOwner: k
      };
      function R() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      e.Children = {
        map: A,
        forEach: function (n, e, t) {
          A(n, function () {
            e.apply(this, arguments);
          }, t);
        },
        count: function (n) {
          var e = 0;
          A(n, function () {
            e++;
          });
          return e;
        },
        toArray: function (n) {
          return A(n, function (n) {
            return n;
          }) || [];
        },
        only: function (n) {
          if (!x(n)) {
            throw Error("React.Children.only expected to receive a single React element child.");
          }
          return n;
        }
      };
      e.Component = g;
      e.Fragment = i;
      e.Profiler = o;
      e.PureComponent = b;
      e.StrictMode = u;
      e.Suspense = c;
      e.t = O;
      e.act = R;
      e.cloneElement = function (n, e, r) {
        if (n == null) {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
        }
        var i = p({}, n.props);
        var u = n.key;
        var o = n.ref;
        var l = n.h;
        if (e != null) {
          if (e.ref !== undefined) {
            o = e.ref;
            l = k.current;
          }
          if (e.key !== undefined) {
            u = "" + e.key;
          }
          if (n.type && n.type.defaultProps) {
            var a = n.type.defaultProps;
          }
          for (s in e) {
            if (F.call(e, s) && !E.hasOwnProperty(s)) {
              i[s] = e[s] === undefined && a !== undefined ? a[s] : e[s];
            }
          }
        }
        var s = arguments.length - 2;
        if (s === 1) {
          i.children = r;
        } else if (s > 1) {
          a = Array(s);
          for (var c = 0; c < s; c++) {
            a[c] = arguments[c + 2];
          }
          i.children = a;
        }
        return {
          $$typeof: t,
          type: n.type,
          key: u,
          ref: o,
          props: i,
          h: l
        };
      };
      e.createContext = function (n) {
        (n = {
          $$typeof: a,
          M: n,
          q: n,
          Y: 0,
          Provider: null,
          Consumer: null,
          J: null,
          X: null
        }).Provider = {
          $$typeof: l,
          v: n
        };
        return n.Consumer = n;
      };
      e.createElement = C;
      e.createFactory = function (n) {
        var e = C.bind(null, n);
        e.type = n;
        return e;
      };
      e.createRef = function () {
        return {
          current: null
        };
      };
      e.forwardRef = function (n) {
        return {
          $$typeof: s,
          render: n
        };
      };
      e.isValidElement = x;
      e.lazy = function (n) {
        return {
          $$typeof: d,
          m: {
            K: -1,
            Z: n
          },
          F: j
        };
      };
      e.memo = function (n, e) {
        return {
          $$typeof: f,
          type: n,
          compare: e === undefined ? null : e
        };
      };
      e.startTransition = function (n) {
        var e = T.transition;
        T.transition = {};
        try {
          n();
        } finally {
          T.transition = e;
        }
      };
      e.unstable_act = R;
      e.useCallback = function (n, e) {
        return I.current.useCallback(n, e);
      };
      e.useContext = function (n) {
        return I.current.useContext(n);
      };
      e.useDebugValue = function () {};
      e.useDeferredValue = function (n) {
        return I.current.useDeferredValue(n);
      };
      e.useEffect = function (n, e) {
        return I.current.useEffect(n, e);
      };
      e.useId = function () {
        return I.current.useId();
      };
      e.useImperativeHandle = function (n, e, t) {
        return I.current.useImperativeHandle(n, e, t);
      };
      e.useInsertionEffect = function (n, e) {
        return I.current.useInsertionEffect(n, e);
      };
      e.useLayoutEffect = function (n, e) {
        return I.current.useLayoutEffect(n, e);
      };
      e.useMemo = function (n, e) {
        return I.current.useMemo(n, e);
      };
      e.useReducer = function (n, e, t) {
        return I.current.useReducer(n, e, t);
      };
      e.useRef = function (n) {
        return I.current.useRef(n);
      };
      e.useState = function (n) {
        return I.current.useState(n);
      };
      e.useSyncExternalStore = function (n, e, t) {
        return I.current.useSyncExternalStore(n, e, t);
      };
      e.useTransition = function () {
        return I.current.useTransition();
      };
      e.version = "18.3.1";
    },
    5338(n, e, t) {
      var r = t(961);
      e.H = r.createRoot;
      r.hydrateRoot;
    },
    6314(n) {
      n.exports = function (n) {
        var e = [];
        e.toString = function () {
          return this.map(function (e) {
            var t = "";
            var r = e[5] !== undefined;
            if (e[4]) {
              t += `@supports (${e[4]}) {`;
            }
            if (e[2]) {
              t += `@media ${e[2]} {`;
            }
            if (r) {
              t += `@layer${e[5].length > 0 ? ` ${e[5]}` : ""} {`;
            }
            t += n(e);
            if (r) {
              t += "}";
            }
            if (e[2]) {
              t += "}";
            }
            if (e[4]) {
              t += "}";
            }
            return t;
          }).join("");
        };
        e.i = function (n, t, r, i, u) {
          if (typeof n == "string") {
            n = [[null, n, undefined]];
          }
          var o = {};
          if (r) {
            for (var l = 0; l < this.length; l++) {
              var a = this[l][0];
              if (a != null) {
                o[a] = true;
              }
            }
          }
          for (var s = 0; s < n.length; s++) {
            var c = [].concat(n[s]);
            if (!r || !o[c[0]]) {
              if (u !== undefined) {
                if (c[5] !== undefined) {
                  c[1] = `@layer${c[5].length > 0 ? ` ${c[5]}` : ""} {${c[1]}}`;
                }
                c[5] = u;
              }
              if (t) {
                if (c[2]) {
                  c[1] = `@media ${c[2]} {${c[1]}}`;
                  c[2] = t;
                } else {
                  c[2] = t;
                }
              }
              if (i) {
                if (c[4]) {
                  c[1] = `@supports (${c[4]}) {${c[1]}}`;
                  c[4] = i;
                } else {
                  c[4] = `${i}`;
                }
              }
              e.push(c);
            }
          }
        };
        return e;
      };
    },
    6540(n, e, t) {
      n.exports = t(5287);
    },
    7142(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".NWHF6ckP7jr1ME2TJqMQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    cursor: pointer;\n    padding: 8px 16px;\n    white-space: nowrap;\n    transition: background-color var(--transition-time);\n    font-size: 12px;\n    font-weight: 400;\n    background-color: var(--black-30);\n}\n\n.NWHF6ckP7jr1ME2TJqMQ:hover {\n    background-color: var(--black-20);\n}\n", ""]);
      o.locals = {
        contextMenuOption: "NWHF6ckP7jr1ME2TJqMQ"
      };
      const l = o;
    },
    7187(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, ".PxdnA7JxEPfeYIlPq0XU {\n    font-weight: 500;\n    font-size: 14px;\n    margin-bottom: 10px;\n    letter-spacing: 0.3px;\n    color: var(--white-5);\n}\n", ""]);
      o.locals = {
        sectionHeader: "PxdnA7JxEPfeYIlPq0XU"
      };
      const l = o;
    },
    7463(n, e) {
      function t(n, e) {
        var t = n.length;
        n.push(e);
        n: while (t > 0) {
          var r = t - 1 >>> 1;
          var i = n[r];
          if (!(u(i, e) > 0)) {
            break n;
          }
          n[r] = e;
          n[t] = i;
          t = r;
        }
      }
      function r(n) {
        if (n.length === 0) {
          return null;
        } else {
          return n[0];
        }
      }
      function i(n) {
        if (n.length === 0) {
          return null;
        }
        var e = n[0];
        var t = n.pop();
        if (t !== e) {
          n[0] = t;
          n: for (var r = 0, i = n.length, o = i >>> 1; r < o;) {
            var l = (r + 1) * 2 - 1;
            var a = n[l];
            var s = l + 1;
            var c = n[s];
            if (u(a, t) < 0) {
              if (s < i && u(c, a) < 0) {
                n[r] = c;
                n[s] = t;
                r = s;
              } else {
                n[r] = a;
                n[l] = t;
                r = l;
              }
            } else {
              if (!(s < i) || !(u(c, t) < 0)) {
                break n;
              }
              n[r] = c;
              n[s] = t;
              r = s;
            }
          }
        }
        return e;
      }
      function u(n, e) {
        var t = n.sortIndex - e.sortIndex;
        if (t !== 0) {
          return t;
        } else {
          return n.id - e.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
          return o.now();
        };
      } else {
        var l = Date;
        var a = l.now();
        e.unstable_now = function () {
          return l.now() - a;
        };
      }
      var s = [];
      var c = [];
      var f = 1;
      var d = null;
      var h = 3;
      var D = false;
      var p = false;
      var v = false;
      var g = typeof setTimeout == "function" ? setTimeout : null;
      var m = typeof clearTimeout == "function" ? clearTimeout : null;
      var b = typeof setImmediate != "undefined" ? setImmediate : null;
      function w(n) {
        for (var e = r(c); e !== null;) {
          if (e.callback === null) {
            i(c);
          } else {
            if (!(e.startTime <= n)) {
              break;
            }
            i(c);
            e.sortIndex = e.expirationTime;
            t(s, e);
          }
          e = r(c);
        }
      }
      function y(n) {
        v = false;
        w(n);
        if (!p) {
          if (r(s) !== null) {
            p = true;
            T(F);
          } else {
            var e = r(c);
            if (e !== null) {
              O(y, e.startTime - n);
            }
          }
        }
      }
      function F(n, t) {
        p = false;
        if (v) {
          v = false;
          m(x);
          x = -1;
        }
        D = true;
        var u = h;
        try {
          w(t);
          d = r(s);
          while (d !== null && (!(d.expirationTime > t) || n && !B())) {
            var o = d.callback;
            if (typeof o == "function") {
              d.callback = null;
              h = d.priorityLevel;
              var l = o(d.expirationTime <= t);
              t = e.unstable_now();
              if (typeof l == "function") {
                d.callback = l;
              } else if (d === r(s)) {
                i(s);
              }
              w(t);
            } else {
              i(s);
            }
            d = r(s);
          }
          if (d !== null) {
            var a = true;
          } else {
            var f = r(c);
            if (f !== null) {
              O(y, f.startTime - t);
            }
            a = false;
          }
          return a;
        } finally {
          d = null;
          h = u;
          D = false;
        }
      }
      if (typeof navigator != "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      var k;
      var E = false;
      var C = null;
      var x = -1;
      var _ = 5;
      var S = -1;
      function B() {
        return !(e.unstable_now() - S < _);
      }
      function A() {
        if (C !== null) {
          var n = e.unstable_now();
          S = n;
          var t = true;
          try {
            t = C(true, n);
          } finally {
            if (t) {
              k();
            } else {
              E = false;
              C = null;
            }
          }
        } else {
          E = false;
        }
      }
      if (typeof b == "function") {
        k = function () {
          b(A);
        };
      } else if (typeof MessageChannel != "undefined") {
        var j = new MessageChannel();
        var I = j.port2;
        j.port1.onmessage = A;
        k = function () {
          I.postMessage(null);
        };
      } else {
        k = function () {
          g(A, 0);
        };
      }
      function T(n) {
        C = n;
        if (!E) {
          E = true;
          k();
        }
      }
      function O(n, t) {
        x = g(function () {
          n(e.unstable_now());
        }, t);
      }
      e.unstable_IdlePriority = 5;
      e.unstable_ImmediatePriority = 1;
      e.unstable_LowPriority = 4;
      e.unstable_NormalPriority = 3;
      e.unstable_Profiling = null;
      e.unstable_UserBlockingPriority = 2;
      e.unstable_cancelCallback = function (n) {
        n.callback = null;
      };
      e.unstable_continueExecution = function () {
        if (!p && !D) {
          p = true;
          T(F);
        }
      };
      e.unstable_forceFrameRate = function (n) {
        if (n < 0 || n > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          _ = n > 0 ? Math.floor(1000 / n) : 5;
        }
      };
      e.unstable_getCurrentPriorityLevel = function () {
        return h;
      };
      e.unstable_getFirstCallbackNode = function () {
        return r(s);
      };
      e.unstable_next = function (n) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var e = 3;
            break;
          default:
            e = h;
        }
        var t = h;
        h = e;
        try {
          return n();
        } finally {
          h = t;
        }
      };
      e.unstable_pauseExecution = function () {};
      e.unstable_requestPaint = function () {};
      e.unstable_runWithPriority = function (n, e) {
        switch (n) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            n = 3;
        }
        var t = h;
        h = n;
        try {
          return e();
        } finally {
          h = t;
        }
      };
      e.unstable_scheduleCallback = function (n, i, u) {
        var o = e.unstable_now();
        if (typeof u == "object" && u !== null) {
          u = typeof (u = u.delay) == "number" && u > 0 ? o + u : o;
        } else {
          u = o;
        }
        switch (n) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 10000;
            break;
          default:
            l = 5000;
        }
        n = {
          id: f++,
          callback: i,
          priorityLevel: n,
          startTime: u,
          expirationTime: l = u + l,
          sortIndex: -1
        };
        if (u > o) {
          n.sortIndex = u;
          t(c, n);
          if (r(s) === null && n === r(c)) {
            if (v) {
              m(x);
              x = -1;
            } else {
              v = true;
            }
            O(y, u - o);
          }
        } else {
          n.sortIndex = l;
          t(s, n);
          if (!p && !D) {
            p = true;
            T(F);
          }
        }
        return n;
      };
      e.unstable_shouldYield = B;
      e.unstable_wrapCallback = function (n) {
        var e = h;
        return function () {
          var t = h;
          h = e;
          try {
            return n.apply(this, arguments);
          } finally {
            h = t;
          }
        };
      };
    },
    7659(n) {
      var e = {};
      n.exports = function (n, t) {
        var r = function (n) {
          if (e[n] === undefined) {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            }
            e[n] = t;
          }
          return e[n];
        }(n);
        if (!r) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        r.appendChild(t);
      };
    },
    7825(n) {
      n.exports = function (n) {
        if (typeof document == "undefined") {
          return {
            update: function () {},
            remove: function () {}
          };
        }
        var e = n.insertStyleElement(n);
        return {
          update: function (t) {
            (function (n, e, t) {
              var r = "";
              if (t.supports) {
                r += `@supports (${t.supports}) {`;
              }
              if (t.media) {
                r += `@media ${t.media} {`;
              }
              var i = t.layer !== undefined;
              if (i) {
                r += `@layer${t.layer.length > 0 ? ` ${t.layer}` : ""} {`;
              }
              r += t.css;
              if (i) {
                r += "}";
              }
              if (t.media) {
                r += "}";
              }
              if (t.supports) {
                r += "}";
              }
              var u = t.sourceMap;
              if (u && typeof btoa != "undefined") {
                r += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(u))))} */`;
              }
              e.styleTagTransform(r, n, e.options);
            })(e, n, t);
          },
          remove: function () {
            (function (n) {
              if (n.parentNode === null) {
                return false;
              }
              n.parentNode.removeChild(n);
            })(e);
          }
        };
      };
    },
    8070(n, e, t) {
      t.d(e, {
        A: () => l
      });
      var r = t(1601);
      var i = t.n(r);
      var u = t(6314);
      var o = t.n(u)()(i());
      o.push([n.id, "._6qfZvw2_4uNHjWHrAzW {\n    background-color: var(--black-25);\n    color: var(--white-10);\n    padding: 0 8px;\n    height: 34px;\n    border: 1px solid var(--black-20);\n    border-radius: 2px;\n    font-size: 13px;\n    margin: 6px 0;\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n}\n\n.iCugaUMpyePBepuw9xe9 {\n    display: flex;\n}\n\n.iCugaUMpyePBepuw9xe9 > *:first-child {\n    flex-grow: 1;\n}\n\n.Pbc6C3WK22GDG0KMCzOe {\n    margin: 10px 0;\n    background-color: var(--base-blue);\n    border-radius: 2px;\n    cursor: pointer;\n    height: 34px;\n    flex-shrink: 1;\n    display: flex;\n    align-content: center;\n    padding: 0 11px;\n    transition: all var(--transition-time);\n}\n.Pbc6C3WK22GDG0KMCzOe:hover {\n    filter: brightness(1.15);\n}\n\n.Pbc6C3WK22GDG0KMCzOe.qU5KzwodPh9tIg202Eg2 {\n    background-color: var(--base-green);\n}\n\n.VLTNLgUWXaybNq9Jy9ZA {\n    margin-right: -12px;\n}\n\n.cLS7GkQS6G8vQ2UZQNIj,\n.VLTNLgUWXaybNq9Jy9ZA {\n    width: 12px;\n    transition: all var(--transition-time);\n}\n\n.cLS7GkQS6G8vQ2UZQNIj {\n    filter: invert(100%) sepia(93%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%);\n}\n\n.Pbc6C3WK22GDG0KMCzOe.qU5KzwodPh9tIg202Eg2 > .cLS7GkQS6G8vQ2UZQNIj {\n    opacity: 1;\n}\n\n.Pbc6C3WK22GDG0KMCzOe.qU5KzwodPh9tIg202Eg2 > .VLTNLgUWXaybNq9Jy9ZA {\n    opacity: 0;\n}\n\n.Pbc6C3WK22GDG0KMCzOe:not(.qU5KzwodPh9tIg202Eg2) > .cLS7GkQS6G8vQ2UZQNIj {\n    opacity: 0;\n}\n\n.Pbc6C3WK22GDG0KMCzOe:not(.qU5KzwodPh9tIg202Eg2) > .VLTNLgUWXaybNq9Jy9ZA {\n    opacity: 1;\n}\n\n.LHOeb60JoOg2blGzSkol {\n    height: 34px;\n    margin: 6px 0 20px 0;\n}\n.LHOeb60JoOg2blGzSkol::placeholder {\n    font-size: 13px;\n    font-weight: 400;\n    color: var(--white-35);\n}\n\n.WIm7AiisvkpdwrG5vwAq,\n.WIm7AiisvkpdwrG5vwAq > input {\n    margin: 0;\n}\n\n.MQnKGLmzmZOCeAJp3J3e {\n    display: block;\n    width: 100%;\n    overflow-y: auto;\n    min-height: 54px;\n    height: unset;\n    max-height: 81px;\n    line-height: 20px;\n    padding: 6px 8px;\n    position: relative;\n    z-index: 1;\n}\n.MQnKGLmzmZOCeAJp3J3e:not(:empty) {\n    z-index: 3;\n}\n.RCAhWyyq9F9RPlJo2HxQ {\n    display: block;\n    height: 0;\n    transform: translate(9px, 14px);\n    width: calc(100% - 9px);\n    position: relative;\n    z-index: 2;\n    font-size: 13px;\n    font-weight: 400;\n    color: var(--white-35);\n    pointer-events: none;\n}\n\n.Oz6VwmGWJTDHPeOS84Pn {\n    width: 40px;\n    line-height: 19px;\n    text-align: center;\n}\n\n.QEhHgQSR3mrur516ath_ {\n    margin: 0 6px;\n}\n", ""]);
      o.locals = {
        textInput: "_6qfZvw2_4uNHjWHrAzW",
        copyRow: "iCugaUMpyePBepuw9xe9",
        copyButton: "Pbc6C3WK22GDG0KMCzOe",
        copied: "qU5KzwodPh9tIg202Eg2",
        copyIcon: "VLTNLgUWXaybNq9Jy9ZA",
        checkIcon: "cLS7GkQS6G8vQ2UZQNIj",
        scheduleForm: "LHOeb60JoOg2blGzSkol",
        noMargin: "WIm7AiisvkpdwrG5vwAq",
        textArea: "MQnKGLmzmZOCeAJp3J3e",
        textAreaPlaceholder: "RCAhWyyq9F9RPlJo2HxQ",
        inlineDigit: "Oz6VwmGWJTDHPeOS84Pn",
        inlineMargin: "QEhHgQSR3mrur516ath_"
      };
      const l = o;
    },
    8917(n, e) {
      Object.defineProperty(e, "p", {
        value: true
      });
      e.camelCase = undefined;
      var t = /^--[a-zA-Z0-9_-]+$/;
      var r = /-([a-z])/g;
      var i = /^[^-]+$/;
      var u = /^-(webkit|moz|ms|o|khtml)-/;
      var o = /^-(ms)-/;
      function l(n, e) {
        return e.toUpperCase();
      }
      function a(n, e) {
        return `${e}-`;
      }
      e.camelCase = function (n, e = {}) {
        if (function (n) {
          return !n || i.test(n) || t.test(n);
        }(n)) {
          return n;
        } else {
          n = n.toLowerCase();
          return (n = e.reactCompat ? n.replace(o, a) : n.replace(u, a)).replace(r, l);
        }
      };
    },
    9982(n, e, t) {
      n.exports = t(7463);
    }
  };
  var e = {};
  function t(r) {
    var i = e[r];
    if (i !== undefined) {
      return i.exports;
    }
    var u = e[r] = {
      id: r,
      exports: {}
    };
    n[r].call(u.exports, u, u.exports, t);
    return u.exports;
  }
  t.n = n => {
    var e = n && n.p ? () => n.default : () => n;
    t.d(e, {
      a: e
    });
    return e;
  };
  t.d = (n, e) => {
    for (var r in e) {
      if (t.o(e, r) && !t.o(n, r)) {
        Object.defineProperty(n, r, {
          enumerable: true,
          get: e[r]
        });
      }
    }
  };
  t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  t.r = n => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(n, "p", {
      value: true
    });
  };
  t.nc = undefined;
  var r = {};
  t.r(r);
  t.d(r, {
    boolean: () => sl,
    booleanish: () => cl,
    commaOrSpaceSeparated: () => pl,
    commaSeparated: () => Dl,
    number: () => dl,
    overloadedBoolean: () => fl,
    spaceSeparated: () => hl
  });
  var i = {};
  t.r(i);
  t.d(i, {
    attentionMarkers: () => Vs,
    contentInitial: () => Us,
    disable: () => $s,
    document: () => Ms,
    flow: () => Ps,
    flowInitial: () => Ls,
    insideSpan: () => zs,
    string: () => Ns,
    text: () => Hs
  });
  var u = t(4848);
  var o = t(5072);
  var l = t.n(o);
  var a = t(7825);
  var s = t.n(a);
  var c = t(7659);
  var f = t.n(c);
  var d = t(5056);
  var h = t.n(d);
  var D = t(540);
  var p = t.n(D);
  var v = t(1113);
  var g = t.n(v);
  var m = t(2359);
  var b = {};
  b.styleTagTransform = g();
  b.setAttributes = h();
  b.insert = f().bind(null, "head");
  b.domAPI = s();
  b.insertStyleElement = p();
  l()(m.A, b);
  const w = m.A && m.A.locals ? m.A.locals : undefined;
  var y = t(6540);
  const F = "Service_Background";
  const k = "Popup";
  const E = "Content_Script";
  const C = "https://api.teleparty.com";
  const x = "https://www.teleparty.com";
  const _ = "https://files.teleparty.com";
  const j = typeof chrome != "undefined" ? chrome.runtime : undefined;
  const I = (j == null ? undefined : j.id) ?? "";
  const T = (j == null ? undefined : j.getManifest())?.version ?? "";
  const O = [".hbogola.", ".hboespana."];
  const R = `${x}/manage-subscription`;
  const M = `${x}/premium`;
  const U = /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
  var L = console.log.bind(self.console);
  function P(n, e, t, r) {
    return new (t ||= Promise)(function (i, u) {
      function o(n) {
        try {
          a(r.next(n));
        } catch (n) {
          u(n);
        }
      }
      function l(n) {
        try {
          a(r.throw(n));
        } catch (n) {
          u(n);
        }
      }
      function a(n) {
        var e;
        if (n.done) {
          i(n.value);
        } else {
          (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(o, l);
        }
      }
      a((r = r.apply(n, e || [])).next());
    });
  }
  const N = new class {
    addListener(n) {
      chrome.runtime.onMessage.addListener(n);
    }
    removeListener(n) {
      chrome.runtime.onMessage.removeListener(n);
    }
    sendMessageToTabAsync(n, e, t = 20000) {
      return P(this, undefined, undefined, function* () {
        return new Promise((r, i) => {
          const u = setTimeout(() => {
            console.log("send timeout");
            i("Message Timeout");
          }, t);
          try {
            chrome.tabs.sendMessage(e, n, e => {
              if (chrome.runtime.lastError) {
                L(chrome.runtime.lastError.message + JSON.stringify(n));
              }
              clearTimeout(u);
              r(e);
            });
          } catch (n) {
            clearTimeout(u);
            i(n);
          }
        });
      });
    }
    nn(n, e) {
      return P(this, undefined, undefined, function* () {
        return new Promise((t, r) => {
          let i = null;
          if (e) {
            i = setTimeout(() => {
              r({
                error: "Send Message Timeout"
              });
            }, e);
          }
          try {
            chrome.runtime.sendMessage(I, n, e => {
              if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message + JSON.stringify(n));
              }
              if (i) {
                clearTimeout(i);
              }
              t(e);
            });
          } catch (n) {
            if (i) {
              clearTimeout(i);
            }
            r(n);
          }
        });
      });
    }
  }();
  class H {
    constructor(n, e, t, r, i, u = []) {
      this.requiredPermissions = n;
      this.serverName = t;
      this.name = r;
      this.contentScripts = e;
      this.syncFromEnd = i;
      this.browseScripts = u;
    }
    validateVideoId(n) {
      return !!n;
    }
    validateVideoType(n) {
      return !!n;
    }
    urlWithSessionId(n) {
      return `${x}/join/${n}`;
    }
  }
  const z = Object.freeze("video-highlights");
  const V = Object.freeze(["live-match-info", "fantasy", "commentary", "scorecard", "squad", "key-moments"]);
  const $ = Object.freeze({
    tag: "type",
    value: "match-info"
  });
  const G = Object.freeze({
    VIDEO_ELEMENT_SELECTOR: "video.vjs-tech",
    VIDEO_ELEMENT_SELECTOR_2: "video[class*=\"StyledVideo\"]",
    TITLE_ELEMENT_SELECTOR: "[class*=\"VideoPlayerTitleLabel\"]",
    MATCH_INFO_QUERY_PARAM: $,
    AD_CLASS_NAME: "video[title=\"Advertisement\"]",
    INSTREAM_AD_ID: "[id*=\"instream-video\"]",
    LIVE_MATCH_PAGE_TYPES: V,
    HIGHLIGHTS: z
  });
  const W = Object.freeze({
    LIVE: "/live/",
    VIDEO: "/video/",
    CHANNELS: "/canales/"
  });
  const K = Object.freeze([W.LIVE, W.CHANNELS]);
  const Z = Object.freeze({
    PATH_TYPES: W,
    LIVE_PATHS: K,
    VIDEO_ELEMENT_SELECTOR: "video",
    TITLE_ELEMENT_SELECTOR: "h1"
  });
  const q = Object.freeze({
    SHOW: "player",
    LIVE_TV: "livestream"
  });
  const Q = Object.freeze({
    VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-player-element",
    LIVE_VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-bitmovin-element",
    TITLE_ELEMENT_SELECTOR: "h3[class*=\"VODTitle_show-title\"]",
    VIDEO_TYPES: q,
    AD_CLASS_NAME: "video[title=\"Advertisement\"]"
  });
  const Y = Object.freeze({
    VIDEO: "vod",
    LIVE: "live"
  });
  const J = Object.freeze({
    VIDEO_ELEMENT_SELECTOR: "video#bitmovinplayer-video-null",
    AD_CLASS_NAME: "video[title=\"Advertisement\"]",
    TITLE_ELEMENT_SELECTOR: "#series_title",
    TITLE_ELEMENT_SELECTOR_LIVE_TV: ".bmpui-label-metadata-viu-title.bmpui-label-metadata-viu-title",
    UI_CONTAINER: ".bmpui-ui-uicontainer",
    VIDEO_TYPES: Y,
    QUERY_PARAMS_ORIGIN_EPISODE_CODE_TAG: "originEpisodeCode"
  });
  function X(n) {
    let e = n.length;
    while (--e >= 0) {
      n[e] = 0;
    }
  }
  const nn = 256;
  const en = 286;
  const tn = 30;
  const rn = 15;
  const un = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
  const on = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  const ln = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
  const an = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  const sn = new Array(576);
  X(sn);
  const cn = new Array(60);
  X(cn);
  const fn = new Array(512);
  X(fn);
  const dn = new Array(256);
  X(dn);
  const hn = new Array(29);
  X(hn);
  const Dn = new Array(tn);
  function pn(n, e, t, r, i) {
    this.static_tree = n;
    this.extra_bits = e;
    this.extra_base = t;
    this.elems = r;
    this.max_length = i;
    this.has_stree = n && n.length;
  }
  let vn;
  let gn;
  let mn;
  function bn(n, e) {
    this.dyn_tree = n;
    this.max_code = 0;
    this.stat_desc = e;
  }
  X(Dn);
  const wn = n => n < 256 ? fn[n] : fn[256 + (n >>> 7)];
  const yn = (n, e) => {
    n.pending_buf[n.pending++] = e & 255;
    n.pending_buf[n.pending++] = e >>> 8 & 255;
  };
  const Fn = (n, e, t) => {
    if (n.bi_valid > 16 - t) {
      n.bi_buf |= e << n.bi_valid & 65535;
      yn(n, n.bi_buf);
      n.bi_buf = e >> 16 - n.bi_valid;
      n.bi_valid += t - 16;
    } else {
      n.bi_buf |= e << n.bi_valid & 65535;
      n.bi_valid += t;
    }
  };
  const kn = (n, e, t) => {
    Fn(n, t[e * 2], t[e * 2 + 1]);
  };
  const En = (n, e) => {
    let t = 0;
    do {
      t |= n & 1;
      n >>>= 1;
      t <<= 1;
    } while (--e > 0);
    return t >>> 1;
  };
  const Cn = (n, e, t) => {
    const r = new Array(16);
    let i;
    let u;
    let o = 0;
    for (i = 1; i <= rn; i++) {
      o = o + t[i - 1] << 1;
      r[i] = o;
    }
    for (u = 0; u <= e; u++) {
      let e = n[u * 2 + 1];
      if (e !== 0) {
        n[u * 2] = En(r[e]++, e);
      }
    }
  };
  const xn = n => {
    let e;
    for (e = 0; e < en; e++) {
      n.dyn_ltree[e * 2] = 0;
    }
    for (e = 0; e < tn; e++) {
      n.dyn_dtree[e * 2] = 0;
    }
    for (e = 0; e < 19; e++) {
      n.bl_tree[e * 2] = 0;
    }
    n.dyn_ltree[512] = 1;
    n.opt_len = n.static_len = 0;
    n.sym_next = n.matches = 0;
  };
  const _n = n => {
    if (n.bi_valid > 8) {
      yn(n, n.bi_buf);
    } else if (n.bi_valid > 0) {
      n.pending_buf[n.pending++] = n.bi_buf;
    }
    n.bi_buf = 0;
    n.bi_valid = 0;
  };
  const Sn = (n, e, t, r) => {
    const i = e * 2;
    const u = t * 2;
    return n[i] < n[u] || n[i] === n[u] && r[e] <= r[t];
  };
  const Bn = (n, e, t) => {
    const r = n.heap[t];
    let i = t << 1;
    while (i <= n.heap_len && (i < n.heap_len && Sn(e, n.heap[i + 1], n.heap[i], n.depth) && i++, !Sn(e, r, n.heap[i], n.depth))) {
      n.heap[t] = n.heap[i];
      t = i;
      i <<= 1;
    }
    n.heap[t] = r;
  };
  const An = (n, e, t) => {
    let r;
    let i;
    let u;
    let o;
    let l = 0;
    if (n.sym_next !== 0) {
      do {
        r = n.pending_buf[n.sym_buf + l++] & 255;
        r += (n.pending_buf[n.sym_buf + l++] & 255) << 8;
        i = n.pending_buf[n.sym_buf + l++];
        if (r === 0) {
          kn(n, i, e);
        } else {
          u = dn[i];
          kn(n, u + nn + 1, e);
          o = un[u];
          if (o !== 0) {
            i -= hn[u];
            Fn(n, i, o);
          }
          r--;
          u = wn(r);
          kn(n, u, t);
          o = on[u];
          if (o !== 0) {
            r -= Dn[u];
            Fn(n, r, o);
          }
        }
      } while (l < n.sym_next);
    }
    kn(n, 256, e);
  };
  const jn = (n, e) => {
    const t = e.dyn_tree;
    const r = e.stat_desc.static_tree;
    const i = e.stat_desc.has_stree;
    const u = e.stat_desc.elems;
    let o;
    let l;
    let a;
    let s = -1;
    n.heap_len = 0;
    n.heap_max = 573;
    o = 0;
    for (; o < u; o++) {
      if (t[o * 2] !== 0) {
        n.heap[++n.heap_len] = s = o;
        n.depth[o] = 0;
      } else {
        t[o * 2 + 1] = 0;
      }
    }
    while (n.heap_len < 2) {
      a = n.heap[++n.heap_len] = s < 2 ? ++s : 0;
      t[a * 2] = 1;
      n.depth[a] = 0;
      n.opt_len--;
      if (i) {
        n.static_len -= r[a * 2 + 1];
      }
    }
    e.max_code = s;
    o = n.heap_len >> 1;
    for (; o >= 1; o--) {
      Bn(n, t, o);
    }
    a = u;
    do {
      o = n.heap[1];
      n.heap[1] = n.heap[n.heap_len--];
      Bn(n, t, 1);
      l = n.heap[1];
      n.heap[--n.heap_max] = o;
      n.heap[--n.heap_max] = l;
      t[a * 2] = t[o * 2] + t[l * 2];
      n.depth[a] = (n.depth[o] >= n.depth[l] ? n.depth[o] : n.depth[l]) + 1;
      t[o * 2 + 1] = t[l * 2 + 1] = a;
      n.heap[1] = a++;
      Bn(n, t, 1);
    } while (n.heap_len >= 2);
    n.heap[--n.heap_max] = n.heap[1];
    ((n, e) => {
      const t = e.dyn_tree;
      const r = e.max_code;
      const i = e.stat_desc.static_tree;
      const u = e.stat_desc.has_stree;
      const o = e.stat_desc.extra_bits;
      const l = e.stat_desc.extra_base;
      const a = e.stat_desc.max_length;
      let s;
      let c;
      let f;
      let d;
      let h;
      let D;
      let p = 0;
      for (d = 0; d <= rn; d++) {
        n.bl_count[d] = 0;
      }
      t[n.heap[n.heap_max] * 2 + 1] = 0;
      s = n.heap_max + 1;
      for (; s < 573; s++) {
        c = n.heap[s];
        d = t[t[c * 2 + 1] * 2 + 1] + 1;
        if (d > a) {
          d = a;
          p++;
        }
        t[c * 2 + 1] = d;
        if (!(c > r)) {
          n.bl_count[d]++;
          h = 0;
          if (c >= l) {
            h = o[c - l];
          }
          D = t[c * 2];
          n.opt_len += D * (d + h);
          if (u) {
            n.static_len += D * (i[c * 2 + 1] + h);
          }
        }
      }
      if (p !== 0) {
        do {
          for (d = a - 1; n.bl_count[d] === 0;) {
            d--;
          }
          n.bl_count[d]--;
          n.bl_count[d + 1] += 2;
          n.bl_count[a]--;
          p -= 2;
        } while (p > 0);
        for (d = a; d !== 0; d--) {
          for (c = n.bl_count[d]; c !== 0;) {
            f = n.heap[--s];
            if (!(f > r)) {
              if (t[f * 2 + 1] !== d) {
                n.opt_len += (d - t[f * 2 + 1]) * t[f * 2];
                t[f * 2 + 1] = d;
              }
              c--;
            }
          }
        }
      }
    })(n, e);
    Cn(t, s, n.bl_count);
  };
  const In = (n, e, t) => {
    let r;
    let i;
    let u = -1;
    let o = e[1];
    let l = 0;
    let a = 7;
    let s = 4;
    if (o === 0) {
      a = 138;
      s = 3;
    }
    e[(t + 1) * 2 + 1] = 65535;
    r = 0;
    for (; r <= t; r++) {
      i = o;
      o = e[(r + 1) * 2 + 1];
      if (!(++l < a) || i !== o) {
        if (l < s) {
          n.bl_tree[i * 2] += l;
        } else if (i !== 0) {
          if (i !== u) {
            n.bl_tree[i * 2]++;
          }
          n.bl_tree[32]++;
        } else if (l <= 10) {
          n.bl_tree[34]++;
        } else {
          n.bl_tree[36]++;
        }
        l = 0;
        u = i;
        if (o === 0) {
          a = 138;
          s = 3;
        } else if (i === o) {
          a = 6;
          s = 3;
        } else {
          a = 7;
          s = 4;
        }
      }
    }
  };
  const Tn = (n, e, t) => {
    let r;
    let i;
    let u = -1;
    let o = e[1];
    let l = 0;
    let a = 7;
    let s = 4;
    if (o === 0) {
      a = 138;
      s = 3;
    }
    r = 0;
    for (; r <= t; r++) {
      i = o;
      o = e[(r + 1) * 2 + 1];
      if (!(++l < a) || i !== o) {
        if (l < s) {
          do {
            kn(n, i, n.bl_tree);
          } while (--l !== 0);
        } else if (i !== 0) {
          if (i !== u) {
            kn(n, i, n.bl_tree);
            l--;
          }
          kn(n, 16, n.bl_tree);
          Fn(n, l - 3, 2);
        } else if (l <= 10) {
          kn(n, 17, n.bl_tree);
          Fn(n, l - 3, 3);
        } else {
          kn(n, 18, n.bl_tree);
          Fn(n, l - 11, 7);
        }
        l = 0;
        u = i;
        if (o === 0) {
          a = 138;
          s = 3;
        } else if (i === o) {
          a = 6;
          s = 3;
        } else {
          a = 7;
          s = 4;
        }
      }
    }
  };
  let On = false;
  const Rn = (n, e, t, r) => {
    Fn(n, 0 + (r ? 1 : 0), 3);
    _n(n);
    yn(n, t);
    yn(n, ~t);
    if (t) {
      n.pending_buf.set(n.window.subarray(e, e + t), n.pending);
    }
    n.pending += t;
  };
  var Mn = n => {
    if (!On) {
      (() => {
        let n;
        let e;
        let t;
        let r;
        let i;
        const u = new Array(16);
        t = 0;
        r = 0;
        for (; r < 28; r++) {
          hn[r] = t;
          n = 0;
          for (; n < 1 << un[r]; n++) {
            dn[t++] = r;
          }
        }
        dn[t - 1] = r;
        i = 0;
        r = 0;
        for (; r < 16; r++) {
          Dn[r] = i;
          n = 0;
          for (; n < 1 << on[r]; n++) {
            fn[i++] = r;
          }
        }
        for (i >>= 7; r < tn; r++) {
          Dn[r] = i << 7;
          n = 0;
          for (; n < 1 << on[r] - 7; n++) {
            fn[256 + i++] = r;
          }
        }
        for (e = 0; e <= rn; e++) {
          u[e] = 0;
        }
        for (n = 0; n <= 143;) {
          sn[n * 2 + 1] = 8;
          n++;
          u[8]++;
        }
        while (n <= 255) {
          sn[n * 2 + 1] = 9;
          n++;
          u[9]++;
        }
        while (n <= 279) {
          sn[n * 2 + 1] = 7;
          n++;
          u[7]++;
        }
        while (n <= 287) {
          sn[n * 2 + 1] = 8;
          n++;
          u[8]++;
        }
        Cn(sn, 287, u);
        n = 0;
        for (; n < tn; n++) {
          cn[n * 2 + 1] = 5;
          cn[n * 2] = En(n, 5);
        }
        vn = new pn(sn, un, 257, en, rn);
        gn = new pn(cn, on, 0, tn, rn);
        mn = new pn(new Array(0), ln, 0, 19, 7);
      })();
      On = true;
    }
    n.l_desc = new bn(n.dyn_ltree, vn);
    n.d_desc = new bn(n.dyn_dtree, gn);
    n.bl_desc = new bn(n.bl_tree, mn);
    n.bi_buf = 0;
    n.bi_valid = 0;
    xn(n);
  };
  var Un = (n, e, t, r) => {
    let i;
    let u;
    let o = 0;
    if (n.level > 0) {
      if (n.strm.data_type === 2) {
        n.strm.data_type = (n => {
          let e;
          let t = 4093624447;
          for (e = 0; e <= 31; e++, t >>>= 1) {
            if (t & 1 && n.dyn_ltree[e * 2] !== 0) {
              return 0;
            }
          }
          if (n.dyn_ltree[18] !== 0 || n.dyn_ltree[20] !== 0 || n.dyn_ltree[26] !== 0) {
            return 1;
          }
          for (e = 32; e < nn; e++) {
            if (n.dyn_ltree[e * 2] !== 0) {
              return 1;
            }
          }
          return 0;
        })(n);
      }
      jn(n, n.l_desc);
      jn(n, n.d_desc);
      o = (n => {
        let e;
        In(n, n.dyn_ltree, n.l_desc.max_code);
        In(n, n.dyn_dtree, n.d_desc.max_code);
        jn(n, n.bl_desc);
        e = 18;
        for (; e >= 3 && n.bl_tree[an[e] * 2 + 1] === 0; e--);
        n.opt_len += (e + 1) * 3 + 5 + 5 + 4;
        return e;
      })(n);
      i = n.opt_len + 3 + 7 >>> 3;
      u = n.static_len + 3 + 7 >>> 3;
      if (u <= i) {
        i = u;
      }
    } else {
      i = u = t + 5;
    }
    if (t + 4 <= i && e !== -1) {
      Rn(n, e, t, r);
    } else if (n.strategy === 4 || u === i) {
      Fn(n, 2 + (r ? 1 : 0), 3);
      An(n, sn, cn);
    } else {
      Fn(n, 4 + (r ? 1 : 0), 3);
      ((n, e, t, r) => {
        let i;
        Fn(n, e - 257, 5);
        Fn(n, t - 1, 5);
        Fn(n, r - 4, 4);
        i = 0;
        for (; i < r; i++) {
          Fn(n, n.bl_tree[an[i] * 2 + 1], 3);
        }
        Tn(n, n.dyn_ltree, e - 1);
        Tn(n, n.dyn_dtree, t - 1);
      })(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, o + 1);
      An(n, n.dyn_ltree, n.dyn_dtree);
    }
    xn(n);
    if (r) {
      _n(n);
    }
  };
  var Ln = {
    en: Mn,
    tn: Rn,
    rn: Un,
    un: (n, e, t) => {
      n.pending_buf[n.sym_buf + n.sym_next++] = e;
      n.pending_buf[n.sym_buf + n.sym_next++] = e >> 8;
      n.pending_buf[n.sym_buf + n.sym_next++] = t;
      if (e === 0) {
        n.dyn_ltree[t * 2]++;
      } else {
        n.matches++;
        e--;
        n.dyn_ltree[(dn[t] + nn + 1) * 2]++;
        n.dyn_dtree[wn(e) * 2]++;
      }
      return n.sym_next === n.sym_end;
    },
    ln: n => {
      Fn(n, 2, 3);
      kn(n, 256, sn);
      (n => {
        if (n.bi_valid === 16) {
          yn(n, n.bi_buf);
          n.bi_buf = 0;
          n.bi_valid = 0;
        } else if (n.bi_valid >= 8) {
          n.pending_buf[n.pending++] = n.bi_buf & 255;
          n.bi_buf >>= 8;
          n.bi_valid -= 8;
        }
      })(n);
    }
  };
  var Pn = (n, e, t, r) => {
    let i = n & 65535;
    let u = n >>> 16 & 65535;
    let o = 0;
    while (t !== 0) {
      o = t > 2000 ? 2000 : t;
      t -= o;
      do {
        i = i + e[r++] | 0;
        u = u + i | 0;
      } while (--o);
      i %= 65521;
      u %= 65521;
    }
    return i | u << 16;
  };
  const Nn = new Uint32Array((() => {
    let n;
    let e = [];
    for (var t = 0; t < 256; t++) {
      n = t;
      for (var r = 0; r < 8; r++) {
        n = n & 1 ? n >>> 1 ^ -306674912 : n >>> 1;
      }
      e[t] = n;
    }
    return e;
  })());
  var Hn = (n, e, t, r) => {
    const i = Nn;
    const u = r + t;
    n ^= -1;
    for (let t = r; t < u; t++) {
      n = n >>> 8 ^ i[(n ^ e[t]) & 255];
    }
    return n ^ -1;
  };
  var zn = {
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
  var Vn = {
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
    en: $n,
    tn: Gn,
    rn: Wn,
    un: Kn,
    ln: Zn
  } = Ln;
  const {
    Z_NO_FLUSH: qn,
    Z_PARTIAL_FLUSH: Qn,
    Z_FULL_FLUSH: Yn,
    Z_FINISH: Jn,
    Z_BLOCK: Xn,
    Z_OK: ne,
    Z_STREAM_END: ee,
    Z_STREAM_ERROR: te,
    Z_DATA_ERROR: re,
    Z_BUF_ERROR: ie,
    Z_DEFAULT_COMPRESSION: ue,
    Z_FILTERED: oe,
    Z_HUFFMAN_ONLY: le,
    Z_RLE: ae,
    Z_FIXED: se,
    Z_DEFAULT_STRATEGY: ce,
    Z_UNKNOWN: fe,
    Z_DEFLATED: de
  } = Vn;
  const he = 258;
  const De = 262;
  const pe = 42;
  const ve = 113;
  const ge = 666;
  const me = (n, e) => {
    n.msg = zn[e];
    return e;
  };
  const be = n => n * 2 - (n > 4 ? 9 : 0);
  const we = n => {
    let e = n.length;
    while (--e >= 0) {
      n[e] = 0;
    }
  };
  const ye = n => {
    let e;
    let t;
    let r;
    let i = n.w_size;
    e = n.hash_size;
    r = e;
    do {
      t = n.head[--r];
      n.head[r] = t >= i ? t - i : 0;
    } while (--e);
    e = i;
    r = e;
    do {
      t = n.prev[--r];
      n.prev[r] = t >= i ? t - i : 0;
    } while (--e);
  };
  let Fe = (n, e, t) => (e << n.hash_shift ^ t) & n.hash_mask;
  const ke = n => {
    const e = n.state;
    let t = e.pending;
    if (t > n.avail_out) {
      t = n.avail_out;
    }
    if (t !== 0) {
      n.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + t), n.next_out);
      n.next_out += t;
      e.pending_out += t;
      n.total_out += t;
      n.avail_out -= t;
      e.pending -= t;
      if (e.pending === 0) {
        e.pending_out = 0;
      }
    }
  };
  const Ee = (n, e) => {
    Wn(n, n.block_start >= 0 ? n.block_start : -1, n.strstart - n.block_start, e);
    n.block_start = n.strstart;
    ke(n.strm);
  };
  const Ce = (n, e) => {
    n.pending_buf[n.pending++] = e;
  };
  const xe = (n, e) => {
    n.pending_buf[n.pending++] = e >>> 8 & 255;
    n.pending_buf[n.pending++] = e & 255;
  };
  const _e = (n, e, t, r) => {
    let i = n.avail_in;
    if (i > r) {
      i = r;
    }
    if (i === 0) {
      return 0;
    } else {
      n.avail_in -= i;
      e.set(n.input.subarray(n.next_in, n.next_in + i), t);
      if (n.state.wrap === 1) {
        n.adler = Pn(n.adler, e, i, t);
      } else if (n.state.wrap === 2) {
        n.adler = Hn(n.adler, e, i, t);
      }
      n.next_in += i;
      n.total_in += i;
      return i;
    }
  };
  const Se = (n, e) => {
    let t;
    let r;
    let i = n.max_chain_length;
    let u = n.strstart;
    let o = n.prev_length;
    let l = n.nice_match;
    const a = n.strstart > n.w_size - De ? n.strstart - (n.w_size - De) : 0;
    const s = n.window;
    const c = n.w_mask;
    const f = n.prev;
    const d = n.strstart + he;
    let h = s[u + o - 1];
    let D = s[u + o];
    if (n.prev_length >= n.good_match) {
      i >>= 2;
    }
    if (l > n.lookahead) {
      l = n.lookahead;
    }
    do {
      t = e;
      if (s[t + o] === D && s[t + o - 1] === h && s[t] === s[u] && s[++t] === s[u + 1]) {
        u += 2;
        t++;
        do {} while (s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && s[++u] === s[++t] && u < d);
        r = he - (d - u);
        u = d - he;
        if (r > o) {
          n.match_start = e;
          o = r;
          if (r >= l) {
            break;
          }
          h = s[u + o - 1];
          D = s[u + o];
        }
      }
    } while ((e = f[e & c]) > a && --i !== 0);
    if (o <= n.lookahead) {
      return o;
    } else {
      return n.lookahead;
    }
  };
  const Be = n => {
    const e = n.w_size;
    let t;
    let r;
    let i;
    do {
      r = n.window_size - n.lookahead - n.strstart;
      if (n.strstart >= e + (e - De)) {
        n.window.set(n.window.subarray(e, e + e - r), 0);
        n.match_start -= e;
        n.strstart -= e;
        n.block_start -= e;
        if (n.insert > n.strstart) {
          n.insert = n.strstart;
        }
        ye(n);
        r += e;
      }
      if (n.strm.avail_in === 0) {
        break;
      }
      t = _e(n.strm, n.window, n.strstart + n.lookahead, r);
      n.lookahead += t;
      if (n.lookahead + n.insert >= 3) {
        i = n.strstart - n.insert;
        n.ins_h = n.window[i];
        n.ins_h = Fe(n, n.ins_h, n.window[i + 1]);
        while (n.insert && (n.ins_h = Fe(n, n.ins_h, n.window[i + 3 - 1]), n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++, n.insert--, !(n.lookahead + n.insert < 3)));
      }
    } while (n.lookahead < De && n.strm.avail_in !== 0);
  };
  const Ae = (n, e) => {
    let t;
    let r;
    let i;
    let u = n.pending_buf_size - 5 > n.w_size ? n.w_size : n.pending_buf_size - 5;
    let o = 0;
    let l = n.strm.avail_in;
    do {
      t = 65535;
      i = n.bi_valid + 42 >> 3;
      if (n.strm.avail_out < i) {
        break;
      }
      i = n.strm.avail_out - i;
      r = n.strstart - n.block_start;
      if (t > r + n.strm.avail_in) {
        t = r + n.strm.avail_in;
      }
      if (t > i) {
        t = i;
      }
      if (t < u && (t === 0 && e !== Jn || e === qn || t !== r + n.strm.avail_in)) {
        break;
      }
      o = e === Jn && t === r + n.strm.avail_in ? 1 : 0;
      Gn(n, 0, 0, o);
      n.pending_buf[n.pending - 4] = t;
      n.pending_buf[n.pending - 3] = t >> 8;
      n.pending_buf[n.pending - 2] = ~t;
      n.pending_buf[n.pending - 1] = ~t >> 8;
      ke(n.strm);
      if (r) {
        if (r > t) {
          r = t;
        }
        n.strm.output.set(n.window.subarray(n.block_start, n.block_start + r), n.strm.next_out);
        n.strm.next_out += r;
        n.strm.avail_out -= r;
        n.strm.total_out += r;
        n.block_start += r;
        t -= r;
      }
      if (t) {
        _e(n.strm, n.strm.output, n.strm.next_out, t);
        n.strm.next_out += t;
        n.strm.avail_out -= t;
        n.strm.total_out += t;
      }
    } while (o === 0);
    l -= n.strm.avail_in;
    if (l) {
      if (l >= n.w_size) {
        n.matches = 2;
        n.window.set(n.strm.input.subarray(n.strm.next_in - n.w_size, n.strm.next_in), 0);
        n.strstart = n.w_size;
        n.insert = n.strstart;
      } else {
        if (n.window_size - n.strstart <= l) {
          n.strstart -= n.w_size;
          n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0);
          if (n.matches < 2) {
            n.matches++;
          }
          if (n.insert > n.strstart) {
            n.insert = n.strstart;
          }
        }
        n.window.set(n.strm.input.subarray(n.strm.next_in - l, n.strm.next_in), n.strstart);
        n.strstart += l;
        n.insert += l > n.w_size - n.insert ? n.w_size - n.insert : l;
      }
      n.block_start = n.strstart;
    }
    if (n.high_water < n.strstart) {
      n.high_water = n.strstart;
    }
    if (o) {
      return 4;
    } else if (e !== qn && e !== Jn && n.strm.avail_in === 0 && n.strstart === n.block_start) {
      return 2;
    } else {
      i = n.window_size - n.strstart;
      if (n.strm.avail_in > i && n.block_start >= n.w_size) {
        n.block_start -= n.w_size;
        n.strstart -= n.w_size;
        n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0);
        if (n.matches < 2) {
          n.matches++;
        }
        i += n.w_size;
        if (n.insert > n.strstart) {
          n.insert = n.strstart;
        }
      }
      if (i > n.strm.avail_in) {
        i = n.strm.avail_in;
      }
      if (i) {
        _e(n.strm, n.window, n.strstart, i);
        n.strstart += i;
        n.insert += i > n.w_size - n.insert ? n.w_size - n.insert : i;
      }
      if (n.high_water < n.strstart) {
        n.high_water = n.strstart;
      }
      i = n.bi_valid + 42 >> 3;
      i = n.pending_buf_size - i > 65535 ? 65535 : n.pending_buf_size - i;
      u = i > n.w_size ? n.w_size : i;
      r = n.strstart - n.block_start;
      if (r >= u || (r || e === Jn) && e !== qn && n.strm.avail_in === 0 && r <= i) {
        t = r > i ? i : r;
        o = e === Jn && n.strm.avail_in === 0 && t === r ? 1 : 0;
        Gn(n, n.block_start, t, o);
        n.block_start += t;
        ke(n.strm);
      }
      if (o) {
        return 3;
      } else {
        return 1;
      }
    }
  };
  const je = (n, e) => {
    let t;
    let r;
    while (true) {
      if (n.lookahead < De) {
        Be(n);
        if (n.lookahead < De && e === qn) {
          return 1;
        }
        if (n.lookahead === 0) {
          break;
        }
      }
      t = 0;
      if (n.lookahead >= 3) {
        n.ins_h = Fe(n, n.ins_h, n.window[n.strstart + 3 - 1]);
        t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h];
        n.head[n.ins_h] = n.strstart;
      }
      if (t !== 0 && n.strstart - t <= n.w_size - De) {
        n.match_length = Se(n, t);
      }
      if (n.match_length >= 3) {
        r = Kn(n, n.strstart - n.match_start, n.match_length - 3);
        n.lookahead -= n.match_length;
        if (n.match_length <= n.max_lazy_match && n.lookahead >= 3) {
          n.match_length--;
          do {
            n.strstart++;
            n.ins_h = Fe(n, n.ins_h, n.window[n.strstart + 3 - 1]);
            t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h];
            n.head[n.ins_h] = n.strstart;
          } while (--n.match_length !== 0);
          n.strstart++;
        } else {
          n.strstart += n.match_length;
          n.match_length = 0;
          n.ins_h = n.window[n.strstart];
          n.ins_h = Fe(n, n.ins_h, n.window[n.strstart + 1]);
        }
      } else {
        r = Kn(n, 0, n.window[n.strstart]);
        n.lookahead--;
        n.strstart++;
      }
      if (r && (Ee(n, false), n.strm.avail_out === 0)) {
        return 1;
      }
    }
    n.insert = n.strstart < 2 ? n.strstart : 2;
    if (e === Jn) {
      Ee(n, true);
      if (n.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (n.sym_next && (Ee(n, false), n.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  const Ie = (n, e) => {
    let t;
    let r;
    let i;
    while (true) {
      if (n.lookahead < De) {
        Be(n);
        if (n.lookahead < De && e === qn) {
          return 1;
        }
        if (n.lookahead === 0) {
          break;
        }
      }
      t = 0;
      if (n.lookahead >= 3) {
        n.ins_h = Fe(n, n.ins_h, n.window[n.strstart + 3 - 1]);
        t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h];
        n.head[n.ins_h] = n.strstart;
      }
      n.prev_length = n.match_length;
      n.prev_match = n.match_start;
      n.match_length = 2;
      if (t !== 0 && n.prev_length < n.max_lazy_match && n.strstart - t <= n.w_size - De) {
        n.match_length = Se(n, t);
        if (n.match_length <= 5 && (n.strategy === oe || n.match_length === 3 && n.strstart - n.match_start > 4096)) {
          n.match_length = 2;
        }
      }
      if (n.prev_length >= 3 && n.match_length <= n.prev_length) {
        i = n.strstart + n.lookahead - 3;
        r = Kn(n, n.strstart - 1 - n.prev_match, n.prev_length - 3);
        n.lookahead -= n.prev_length - 1;
        n.prev_length -= 2;
        do {
          if (++n.strstart <= i) {
            n.ins_h = Fe(n, n.ins_h, n.window[n.strstart + 3 - 1]);
            t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h];
            n.head[n.ins_h] = n.strstart;
          }
        } while (--n.prev_length !== 0);
        n.match_available = 0;
        n.match_length = 2;
        n.strstart++;
        if (r && (Ee(n, false), n.strm.avail_out === 0)) {
          return 1;
        }
      } else if (n.match_available) {
        r = Kn(n, 0, n.window[n.strstart - 1]);
        if (r) {
          Ee(n, false);
        }
        n.strstart++;
        n.lookahead--;
        if (n.strm.avail_out === 0) {
          return 1;
        }
      } else {
        n.match_available = 1;
        n.strstart++;
        n.lookahead--;
      }
    }
    if (n.match_available) {
      r = Kn(n, 0, n.window[n.strstart - 1]);
      n.match_available = 0;
    }
    n.insert = n.strstart < 2 ? n.strstart : 2;
    if (e === Jn) {
      Ee(n, true);
      if (n.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (n.sym_next && (Ee(n, false), n.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  function Te(n, e, t, r, i) {
    this.good_length = n;
    this.max_lazy = e;
    this.nice_length = t;
    this.max_chain = r;
    this.func = i;
  }
  const Oe = [new Te(0, 0, 0, 0, Ae), new Te(4, 4, 8, 4, je), new Te(4, 5, 16, 8, je), new Te(4, 6, 32, 32, je), new Te(4, 4, 16, 16, Ie), new Te(8, 16, 32, 32, Ie), new Te(8, 16, 128, 128, Ie), new Te(8, 32, 128, 256, Ie), new Te(32, 128, 258, 1024, Ie), new Te(32, 258, 258, 4096, Ie)];
  function Re() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = de;
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
    we(this.dyn_ltree);
    we(this.dyn_dtree);
    we(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(16);
    this.heap = new Uint16Array(573);
    we(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(573);
    we(this.depth);
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
  const Me = n => {
    if (!n) {
      return 1;
    }
    const e = n.state;
    if (!e || e.strm !== n || e.status !== pe && e.status !== 57 && e.status !== 69 && e.status !== 73 && e.status !== 91 && e.status !== 103 && e.status !== ve && e.status !== ge) {
      return 1;
    } else {
      return 0;
    }
  };
  const Ue = n => {
    if (Me(n)) {
      return me(n, te);
    }
    n.total_in = n.total_out = 0;
    n.data_type = fe;
    const e = n.state;
    e.pending = 0;
    e.pending_out = 0;
    if (e.wrap < 0) {
      e.wrap = -e.wrap;
    }
    e.status = e.wrap === 2 ? 57 : e.wrap ? pe : ve;
    n.adler = e.wrap === 2 ? 0 : 1;
    e.last_flush = -2;
    $n(e);
    return ne;
  };
  const Le = n => {
    const e = Ue(n);
    var t;
    if (e === ne) {
      (t = n.state).window_size = t.w_size * 2;
      we(t.head);
      t.max_lazy_match = Oe[t.level].max_lazy;
      t.good_match = Oe[t.level].good_length;
      t.nice_match = Oe[t.level].nice_length;
      t.max_chain_length = Oe[t.level].max_chain;
      t.strstart = 0;
      t.block_start = 0;
      t.lookahead = 0;
      t.insert = 0;
      t.match_length = t.prev_length = 2;
      t.match_available = 0;
      t.ins_h = 0;
    }
    return e;
  };
  const Pe = (n, e, t, r, i, u) => {
    if (!n) {
      return te;
    }
    let o = 1;
    if (e === ue) {
      e = 6;
    }
    if (r < 0) {
      o = 0;
      r = -r;
    } else if (r > 15) {
      o = 2;
      r -= 16;
    }
    if (i < 1 || i > 9 || t !== de || r < 8 || r > 15 || e < 0 || e > 9 || u < 0 || u > se || r === 8 && o !== 1) {
      return me(n, te);
    }
    if (r === 8) {
      r = 9;
    }
    const l = new Re();
    n.state = l;
    l.strm = n;
    l.status = pe;
    l.wrap = o;
    l.gzhead = null;
    l.w_bits = r;
    l.w_size = 1 << l.w_bits;
    l.w_mask = l.w_size - 1;
    l.hash_bits = i + 7;
    l.hash_size = 1 << l.hash_bits;
    l.hash_mask = l.hash_size - 1;
    l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3);
    l.window = new Uint8Array(l.w_size * 2);
    l.head = new Uint16Array(l.hash_size);
    l.prev = new Uint16Array(l.w_size);
    l.lit_bufsize = 1 << i + 6;
    l.pending_buf_size = l.lit_bufsize * 4;
    l.pending_buf = new Uint8Array(l.pending_buf_size);
    l.sym_buf = l.lit_bufsize;
    l.sym_end = (l.lit_bufsize - 1) * 3;
    l.level = e;
    l.strategy = u;
    l.method = t;
    return Le(n);
  };
  var Ne = (n, e) => {
    let t = e.length;
    if (Me(n)) {
      return te;
    }
    const r = n.state;
    const i = r.wrap;
    if (i === 2 || i === 1 && r.status !== pe || r.lookahead) {
      return te;
    }
    if (i === 1) {
      n.adler = Pn(n.adler, e, t, 0);
    }
    r.wrap = 0;
    if (t >= r.w_size) {
      if (i === 0) {
        we(r.head);
        r.strstart = 0;
        r.block_start = 0;
        r.insert = 0;
      }
      let n = new Uint8Array(r.w_size);
      n.set(e.subarray(t - r.w_size, t), 0);
      e = n;
      t = r.w_size;
    }
    const u = n.avail_in;
    const o = n.next_in;
    const l = n.input;
    n.avail_in = t;
    n.next_in = 0;
    n.input = e;
    Be(r);
    while (r.lookahead >= 3) {
      let n = r.strstart;
      let e = r.lookahead - 2;
      do {
        r.ins_h = Fe(r, r.ins_h, r.window[n + 3 - 1]);
        r.prev[n & r.w_mask] = r.head[r.ins_h];
        r.head[r.ins_h] = n;
        n++;
      } while (--e);
      r.strstart = n;
      r.lookahead = 2;
      Be(r);
    }
    r.strstart += r.lookahead;
    r.block_start = r.strstart;
    r.insert = r.lookahead;
    r.lookahead = 0;
    r.match_length = r.prev_length = 2;
    r.match_available = 0;
    n.next_in = o;
    n.input = l;
    n.avail_in = u;
    r.wrap = i;
    return ne;
  };
  var He = {
    deflateInit: (n, e) => Pe(n, e, de, 15, 8, ce),
    deflateInit2: Pe,
    deflateReset: Le,
    deflateResetKeep: Ue,
    deflateSetHeader: (n, e) => Me(n) || n.state.wrap !== 2 ? te : (n.state.gzhead = e, ne),
    deflate: (n, e) => {
      if (Me(n) || e > Xn || e < 0) {
        if (n) {
          return me(n, te);
        } else {
          return te;
        }
      }
      const t = n.state;
      if (!n.output || n.avail_in !== 0 && !n.input || t.status === ge && e !== Jn) {
        return me(n, n.avail_out === 0 ? ie : te);
      }
      const r = t.last_flush;
      t.last_flush = e;
      if (t.pending !== 0) {
        ke(n);
        if (n.avail_out === 0) {
          t.last_flush = -1;
          return ne;
        }
      } else if (n.avail_in === 0 && be(e) <= be(r) && e !== Jn) {
        return me(n, ie);
      }
      if (t.status === ge && n.avail_in !== 0) {
        return me(n, ie);
      }
      if (t.status === pe && t.wrap === 0) {
        t.status = ve;
      }
      if (t.status === pe) {
        let e = de + (t.w_bits - 8 << 4) << 8;
        let r = -1;
        r = t.strategy >= le || t.level < 2 ? 0 : t.level < 6 ? 1 : t.level === 6 ? 2 : 3;
        e |= r << 6;
        if (t.strstart !== 0) {
          e |= 32;
        }
        e += 31 - e % 31;
        xe(t, e);
        if (t.strstart !== 0) {
          xe(t, n.adler >>> 16);
          xe(t, n.adler & 65535);
        }
        n.adler = 1;
        t.status = ve;
        ke(n);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return ne;
        }
      }
      if (t.status === 57) {
        n.adler = 0;
        Ce(t, 31);
        Ce(t, 139);
        Ce(t, 8);
        if (t.gzhead) {
          Ce(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0));
          Ce(t, t.gzhead.time & 255);
          Ce(t, t.gzhead.time >> 8 & 255);
          Ce(t, t.gzhead.time >> 16 & 255);
          Ce(t, t.gzhead.time >> 24 & 255);
          Ce(t, t.level === 9 ? 2 : t.strategy >= le || t.level < 2 ? 4 : 0);
          Ce(t, t.gzhead.os & 255);
          if (t.gzhead.extra && t.gzhead.extra.length) {
            Ce(t, t.gzhead.extra.length & 255);
            Ce(t, t.gzhead.extra.length >> 8 & 255);
          }
          if (t.gzhead.hcrc) {
            n.adler = Hn(n.adler, t.pending_buf, t.pending, 0);
          }
          t.gzindex = 0;
          t.status = 69;
        } else {
          Ce(t, 0);
          Ce(t, 0);
          Ce(t, 0);
          Ce(t, 0);
          Ce(t, 0);
          Ce(t, t.level === 9 ? 2 : t.strategy >= le || t.level < 2 ? 4 : 0);
          Ce(t, 3);
          t.status = ve;
          ke(n);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return ne;
          }
        }
      }
      if (t.status === 69) {
        if (t.gzhead.extra) {
          let e = t.pending;
          let r = (t.gzhead.extra.length & 65535) - t.gzindex;
          while (t.pending + r > t.pending_buf_size) {
            let i = t.pending_buf_size - t.pending;
            t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + i), t.pending);
            t.pending = t.pending_buf_size;
            if (t.gzhead.hcrc && t.pending > e) {
              n.adler = Hn(n.adler, t.pending_buf, t.pending - e, e);
            }
            t.gzindex += i;
            ke(n);
            if (t.pending !== 0) {
              t.last_flush = -1;
              return ne;
            }
            e = 0;
            r -= i;
          }
          let i = new Uint8Array(t.gzhead.extra);
          t.pending_buf.set(i.subarray(t.gzindex, t.gzindex + r), t.pending);
          t.pending += r;
          if (t.gzhead.hcrc && t.pending > e) {
            n.adler = Hn(n.adler, t.pending_buf, t.pending - e, e);
          }
          t.gzindex = 0;
        }
        t.status = 73;
      }
      if (t.status === 73) {
        if (t.gzhead.name) {
          let e;
          let r = t.pending;
          do {
            if (t.pending === t.pending_buf_size) {
              if (t.gzhead.hcrc && t.pending > r) {
                n.adler = Hn(n.adler, t.pending_buf, t.pending - r, r);
              }
              ke(n);
              if (t.pending !== 0) {
                t.last_flush = -1;
                return ne;
              }
              r = 0;
            }
            e = t.gzindex < t.gzhead.name.length ? t.gzhead.name.charCodeAt(t.gzindex++) & 255 : 0;
            Ce(t, e);
          } while (e !== 0);
          if (t.gzhead.hcrc && t.pending > r) {
            n.adler = Hn(n.adler, t.pending_buf, t.pending - r, r);
          }
          t.gzindex = 0;
        }
        t.status = 91;
      }
      if (t.status === 91) {
        if (t.gzhead.comment) {
          let e;
          let r = t.pending;
          do {
            if (t.pending === t.pending_buf_size) {
              if (t.gzhead.hcrc && t.pending > r) {
                n.adler = Hn(n.adler, t.pending_buf, t.pending - r, r);
              }
              ke(n);
              if (t.pending !== 0) {
                t.last_flush = -1;
                return ne;
              }
              r = 0;
            }
            e = t.gzindex < t.gzhead.comment.length ? t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : 0;
            Ce(t, e);
          } while (e !== 0);
          if (t.gzhead.hcrc && t.pending > r) {
            n.adler = Hn(n.adler, t.pending_buf, t.pending - r, r);
          }
        }
        t.status = 103;
      }
      if (t.status === 103) {
        if (t.gzhead.hcrc) {
          if (t.pending + 2 > t.pending_buf_size && (ke(n), t.pending !== 0)) {
            t.last_flush = -1;
            return ne;
          }
          Ce(t, n.adler & 255);
          Ce(t, n.adler >> 8 & 255);
          n.adler = 0;
        }
        t.status = ve;
        ke(n);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return ne;
        }
      }
      if (n.avail_in !== 0 || t.lookahead !== 0 || e !== qn && t.status !== ge) {
        let r = t.level === 0 ? Ae(t, e) : t.strategy === le ? ((n, e) => {
          let t;
          while (true) {
            if (n.lookahead === 0 && (Be(n), n.lookahead === 0)) {
              if (e === qn) {
                return 1;
              }
              break;
            }
            n.match_length = 0;
            t = Kn(n, 0, n.window[n.strstart]);
            n.lookahead--;
            n.strstart++;
            if (t && (Ee(n, false), n.strm.avail_out === 0)) {
              return 1;
            }
          }
          n.insert = 0;
          if (e === Jn) {
            Ee(n, true);
            if (n.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (n.sym_next && (Ee(n, false), n.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(t, e) : t.strategy === ae ? ((n, e) => {
          let t;
          let r;
          let i;
          let u;
          const o = n.window;
          while (true) {
            if (n.lookahead <= he) {
              Be(n);
              if (n.lookahead <= he && e === qn) {
                return 1;
              }
              if (n.lookahead === 0) {
                break;
              }
            }
            n.match_length = 0;
            if (n.lookahead >= 3 && n.strstart > 0 && (i = n.strstart - 1, r = o[i], r === o[++i] && r === o[++i] && r === o[++i])) {
              u = n.strstart + he;
              do {} while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < u);
              n.match_length = he - (u - i);
              if (n.match_length > n.lookahead) {
                n.match_length = n.lookahead;
              }
            }
            if (n.match_length >= 3) {
              t = Kn(n, 1, n.match_length - 3);
              n.lookahead -= n.match_length;
              n.strstart += n.match_length;
              n.match_length = 0;
            } else {
              t = Kn(n, 0, n.window[n.strstart]);
              n.lookahead--;
              n.strstart++;
            }
            if (t && (Ee(n, false), n.strm.avail_out === 0)) {
              return 1;
            }
          }
          n.insert = 0;
          if (e === Jn) {
            Ee(n, true);
            if (n.strm.avail_out === 0) {
              return 3;
            } else {
              return 4;
            }
          } else if (n.sym_next && (Ee(n, false), n.strm.avail_out === 0)) {
            return 1;
          } else {
            return 2;
          }
        })(t, e) : Oe[t.level].func(t, e);
        if (r === 3 || r === 4) {
          t.status = ge;
        }
        if (r === 1 || r === 3) {
          if (n.avail_out === 0) {
            t.last_flush = -1;
          }
          return ne;
        }
        if (r === 2 && (e === Qn ? Zn(t) : e !== Xn && (Gn(t, 0, 0, false), e === Yn && (we(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), ke(n), n.avail_out === 0)) {
          t.last_flush = -1;
          return ne;
        }
      }
      if (e !== Jn) {
        return ne;
      } else if (t.wrap <= 0) {
        return ee;
      } else {
        if (t.wrap === 2) {
          Ce(t, n.adler & 255);
          Ce(t, n.adler >> 8 & 255);
          Ce(t, n.adler >> 16 & 255);
          Ce(t, n.adler >> 24 & 255);
          Ce(t, n.total_in & 255);
          Ce(t, n.total_in >> 8 & 255);
          Ce(t, n.total_in >> 16 & 255);
          Ce(t, n.total_in >> 24 & 255);
        } else {
          xe(t, n.adler >>> 16);
          xe(t, n.adler & 65535);
        }
        ke(n);
        if (t.wrap > 0) {
          t.wrap = -t.wrap;
        }
        if (t.pending !== 0) {
          return ne;
        } else {
          return ee;
        }
      }
    },
    deflateEnd: n => {
      if (Me(n)) {
        return te;
      }
      const e = n.state.status;
      n.state = null;
      if (e === ve) {
        return me(n, re);
      } else {
        return ne;
      }
    },
    deflateSetDictionary: Ne,
    deflateInfo: "pako deflate (from Nodeca project)"
  };
  const ze = (n, e) => Object.prototype.hasOwnProperty.call(n, e);
  function Ve(n) {
    const e = Array.prototype.slice.call(arguments, 1);
    while (e.length) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") {
          throw new TypeError(t + "must be non-object");
        }
        for (const e in t) {
          if (ze(t, e)) {
            n[e] = t[e];
          }
        }
      }
    }
    return n;
  }
  var $e = n => {
    let e = 0;
    for (let t = 0, r = n.length; t < r; t++) {
      e += n[t].length;
    }
    const t = new Uint8Array(e);
    for (let e = 0, r = 0, i = n.length; e < i; e++) {
      let i = n[e];
      t.set(i, r);
      r += i.length;
    }
    return t;
  };
  let Ge = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (n) {
    Ge = false;
  }
  const We = new Uint8Array(256);
  for (let n = 0; n < 256; n++) {
    We[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
  }
  We[254] = We[254] = 1;
  var Ke = n => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
      return new TextEncoder().encode(n);
    }
    let e;
    let t;
    let r;
    let i;
    let u;
    let o = n.length;
    let l = 0;
    for (i = 0; i < o; i++) {
      t = n.charCodeAt(i);
      if ((t & 64512) == 55296 && i + 1 < o) {
        r = n.charCodeAt(i + 1);
        if ((r & 64512) == 56320) {
          t = 65536 + (t - 55296 << 10) + (r - 56320);
          i++;
        }
      }
      l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    }
    e = new Uint8Array(l);
    u = 0;
    i = 0;
    for (; u < l; i++) {
      t = n.charCodeAt(i);
      if ((t & 64512) == 55296 && i + 1 < o) {
        r = n.charCodeAt(i + 1);
        if ((r & 64512) == 56320) {
          t = 65536 + (t - 55296 << 10) + (r - 56320);
          i++;
        }
      }
      if (t < 128) {
        e[u++] = t;
      } else if (t < 2048) {
        e[u++] = t >>> 6 | 192;
        e[u++] = t & 63 | 128;
      } else if (t < 65536) {
        e[u++] = t >>> 12 | 224;
        e[u++] = t >>> 6 & 63 | 128;
        e[u++] = t & 63 | 128;
      } else {
        e[u++] = t >>> 18 | 240;
        e[u++] = t >>> 12 & 63 | 128;
        e[u++] = t >>> 6 & 63 | 128;
        e[u++] = t & 63 | 128;
      }
    }
    return e;
  };
  var Ze = (n, e) => {
    const t = e || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
      return new TextDecoder().decode(n.subarray(0, e));
    }
    let r;
    let i;
    const u = new Array(t * 2);
    i = 0;
    r = 0;
    while (r < t) {
      let e = n[r++];
      if (e < 128) {
        u[i++] = e;
        continue;
      }
      let o = We[e];
      if (o > 4) {
        u[i++] = 65533;
        r += o - 1;
      } else {
        for (e &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < t;) {
          e = e << 6 | n[r++] & 63;
          o--;
        }
        if (o > 1) {
          u[i++] = 65533;
        } else if (e < 65536) {
          u[i++] = e;
        } else {
          e -= 65536;
          u[i++] = e >> 10 & 1023 | 55296;
          u[i++] = e & 1023 | 56320;
        }
      }
    }
    return ((n, e) => {
      if (e < 65534 && n.subarray && Ge) {
        return String.fromCharCode.apply(null, n.length === e ? n : n.subarray(0, e));
      }
      let t = "";
      for (let r = 0; r < e; r++) {
        t += String.fromCharCode(n[r]);
      }
      return t;
    })(u, i);
  };
  var qe = (n, e) => {
    if ((e = e || n.length) > n.length) {
      e = n.length;
    }
    let t = e - 1;
    while (t >= 0 && (n[t] & 192) == 128) {
      t--;
    }
    if (t < 0 || t === 0) {
      return e;
    } else if (t + We[n[t]] > e) {
      return t;
    } else {
      return e;
    }
  };
  function Qe() {
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
  const Ye = Object.prototype.toString;
  const {
    Z_NO_FLUSH: Je,
    Z_SYNC_FLUSH: Xe,
    Z_FULL_FLUSH: nt,
    Z_FINISH: et,
    Z_OK: tt,
    Z_STREAM_END: rt,
    Z_DEFAULT_COMPRESSION: it,
    Z_DEFAULT_STRATEGY: ut,
    Z_DEFLATED: ot
  } = Vn;
  function lt(n) {
    this.options = Ve({
      level: it,
      method: ot,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: ut
    }, n || {});
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
    this.strm = new Qe();
    this.strm.avail_out = 0;
    let t = He.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (t !== tt) {
      throw new Error(zn[t]);
    }
    if (e.header) {
      He.deflateSetHeader(this.strm, e.header);
    }
    if (e.dictionary) {
      let n;
      n = typeof e.dictionary == "string" ? Ke(e.dictionary) : Ye.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
      t = He.deflateSetDictionary(this.strm, n);
      if (t !== tt) {
        throw new Error(zn[t]);
      }
      this.an = true;
    }
  }
  function at(n, e) {
    const t = new lt(e);
    t.push(n, true);
    if (t.err) {
      throw t.msg || zn[t.err];
    }
    return t.result;
  }
  lt.prototype.push = function (n, e) {
    const t = this.strm;
    const r = this.options.chunkSize;
    let i;
    let u;
    if (this.ended) {
      return false;
    }
    u = e === ~~e ? e : e === true ? et : Je;
    if (typeof n == "string") {
      t.input = Ke(n);
    } else if (Ye.call(n) === "[object ArrayBuffer]") {
      t.input = new Uint8Array(n);
    } else {
      t.input = n;
    }
    t.next_in = 0;
    t.avail_in = t.input.length;
    while (true) {
      if (t.avail_out === 0) {
        t.output = new Uint8Array(r);
        t.next_out = 0;
        t.avail_out = r;
      }
      if ((u === Xe || u === nt) && t.avail_out <= 6) {
        this.onData(t.output.subarray(0, t.next_out));
        t.avail_out = 0;
      } else {
        i = He.deflate(t, u);
        if (i === rt) {
          if (t.next_out > 0) {
            this.onData(t.output.subarray(0, t.next_out));
          }
          i = He.deflateEnd(this.strm);
          this.onEnd(i);
          this.ended = true;
          return i === tt;
        }
        if (t.avail_out !== 0) {
          if (u > 0 && t.next_out > 0) {
            this.onData(t.output.subarray(0, t.next_out));
            t.avail_out = 0;
          } else if (t.avail_in === 0) {
            break;
          }
        } else {
          this.onData(t.output);
        }
      }
    }
    return true;
  };
  lt.prototype.onData = function (n) {
    this.chunks.push(n);
  };
  lt.prototype.onEnd = function (n) {
    if (n === tt) {
      this.result = $e(this.chunks);
    }
    this.chunks = [];
    this.err = n;
    this.msg = this.strm.msg;
  };
  function st(n, e) {
    (e = e || {}).raw = true;
    return at(n, e);
  }
  function ct(n, e) {
    (e = e || {}).gzip = true;
    return at(n, e);
  }
  var ft = {
    Deflate: lt,
    deflate: at,
    deflateRaw: st,
    gzip: ct,
    constants: Vn
  };
  const dt = 16209;
  function ht(n, e) {
    let t;
    let r;
    let i;
    let u;
    let o;
    let l;
    let a;
    let s;
    let c;
    let f;
    let d;
    let h;
    let D;
    let p;
    let v;
    let g;
    let m;
    let b;
    let w;
    let y;
    let F;
    let k;
    let E;
    let C;
    const x = n.state;
    t = n.next_in;
    E = n.input;
    r = t + (n.avail_in - 5);
    i = n.next_out;
    C = n.output;
    u = i - (e - n.avail_out);
    o = i + (n.avail_out - 257);
    l = x.dmax;
    a = x.wsize;
    s = x.whave;
    c = x.wnext;
    f = x.window;
    d = x.hold;
    h = x.bits;
    D = x.lencode;
    p = x.distcode;
    v = (1 << x.lenbits) - 1;
    g = (1 << x.distbits) - 1;
    n: do {
      if (h < 15) {
        d += E[t++] << h;
        h += 8;
        d += E[t++] << h;
        h += 8;
      }
      m = D[d & v];
      e: while (true) {
        b = m >>> 24;
        d >>>= b;
        h -= b;
        b = m >>> 16 & 255;
        if (b === 0) {
          C[i++] = m & 65535;
        } else {
          if (!(b & 16)) {
            if (b & 64) {
              if (b & 32) {
                x.mode = 16191;
                break n;
              }
              n.msg = "invalid literal/length code";
              x.mode = dt;
              break n;
            }
            m = D[(m & 65535) + (d & (1 << b) - 1)];
            continue e;
          }
          w = m & 65535;
          b &= 15;
          if (b) {
            if (h < b) {
              d += E[t++] << h;
              h += 8;
            }
            w += d & (1 << b) - 1;
            d >>>= b;
            h -= b;
          }
          if (h < 15) {
            d += E[t++] << h;
            h += 8;
            d += E[t++] << h;
            h += 8;
          }
          m = p[d & g];
          while (true) {
            b = m >>> 24;
            d >>>= b;
            h -= b;
            b = m >>> 16 & 255;
            if (b & 16) {
              y = m & 65535;
              b &= 15;
              if (h < b) {
                d += E[t++] << h;
                h += 8;
                if (h < b) {
                  d += E[t++] << h;
                  h += 8;
                }
              }
              y += d & (1 << b) - 1;
              if (y > l) {
                n.msg = "invalid distance too far back";
                x.mode = dt;
                break n;
              }
              d >>>= b;
              h -= b;
              b = i - u;
              if (y > b) {
                b = y - b;
                if (b > s && x.sane) {
                  n.msg = "invalid distance too far back";
                  x.mode = dt;
                  break n;
                }
                F = 0;
                k = f;
                if (c === 0) {
                  F += a - b;
                  if (b < w) {
                    w -= b;
                    do {
                      C[i++] = f[F++];
                    } while (--b);
                    F = i - y;
                    k = C;
                  }
                } else if (c < b) {
                  F += a + c - b;
                  b -= c;
                  if (b < w) {
                    w -= b;
                    do {
                      C[i++] = f[F++];
                    } while (--b);
                    F = 0;
                    if (c < w) {
                      b = c;
                      w -= b;
                      do {
                        C[i++] = f[F++];
                      } while (--b);
                      F = i - y;
                      k = C;
                    }
                  }
                } else {
                  F += c - b;
                  if (b < w) {
                    w -= b;
                    do {
                      C[i++] = f[F++];
                    } while (--b);
                    F = i - y;
                    k = C;
                  }
                }
                while (w > 2) {
                  C[i++] = k[F++];
                  C[i++] = k[F++];
                  C[i++] = k[F++];
                  w -= 3;
                }
                if (w) {
                  C[i++] = k[F++];
                  if (w > 1) {
                    C[i++] = k[F++];
                  }
                }
              } else {
                F = i - y;
                do {
                  C[i++] = C[F++];
                  C[i++] = C[F++];
                  C[i++] = C[F++];
                  w -= 3;
                } while (w > 2);
                if (w) {
                  C[i++] = C[F++];
                  if (w > 1) {
                    C[i++] = C[F++];
                  }
                }
              }
              break;
            }
            if (b & 64) {
              n.msg = "invalid distance code";
              x.mode = dt;
              break n;
            }
            m = p[(m & 65535) + (d & (1 << b) - 1)];
          }
        }
        break;
      }
    } while (t < r && i < o);
    w = h >> 3;
    t -= w;
    h -= w << 3;
    d &= (1 << h) - 1;
    n.next_in = t;
    n.next_out = i;
    n.avail_in = t < r ? r - t + 5 : 5 - (t - r);
    n.avail_out = i < o ? o - i + 257 : 257 - (i - o);
    x.hold = d;
    x.bits = h;
  }
  const Dt = 15;
  const pt = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  const vt = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
  const gt = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  const mt = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
  var bt = (n, e, t, r, i, u, o, l) => {
    const a = l.bits;
    let s;
    let c;
    let f;
    let d;
    let h;
    let D;
    let p = 0;
    let v = 0;
    let g = 0;
    let m = 0;
    let b = 0;
    let w = 0;
    let y = 0;
    let F = 0;
    let k = 0;
    let E = 0;
    let C = null;
    const x = new Uint16Array(16);
    const _ = new Uint16Array(16);
    let S;
    let B;
    let A;
    let j = null;
    for (p = 0; p <= Dt; p++) {
      x[p] = 0;
    }
    for (v = 0; v < r; v++) {
      x[e[t + v]]++;
    }
    b = a;
    m = Dt;
    for (; m >= 1 && x[m] === 0; m--);
    if (b > m) {
      b = m;
    }
    if (m === 0) {
      i[u++] = 20971520;
      i[u++] = 20971520;
      l.bits = 1;
      return 0;
    }
    for (g = 1; g < m && x[g] === 0; g++);
    if (b < g) {
      b = g;
    }
    F = 1;
    p = 1;
    for (; p <= Dt; p++) {
      F <<= 1;
      F -= x[p];
      if (F < 0) {
        return -1;
      }
    }
    if (F > 0 && (n === 0 || m !== 1)) {
      return -1;
    }
    _[1] = 0;
    p = 1;
    for (; p < Dt; p++) {
      _[p + 1] = _[p] + x[p];
    }
    for (v = 0; v < r; v++) {
      if (e[t + v] !== 0) {
        o[_[e[t + v]]++] = v;
      }
    }
    if (n === 0) {
      C = j = o;
      D = 20;
    } else if (n === 1) {
      C = pt;
      j = vt;
      D = 257;
    } else {
      C = gt;
      j = mt;
      D = 0;
    }
    E = 0;
    v = 0;
    p = g;
    h = u;
    w = b;
    y = 0;
    f = -1;
    k = 1 << b;
    d = k - 1;
    if (n === 1 && k > 852 || n === 2 && k > 592) {
      return 1;
    }
    while (true) {
      S = p - y;
      if (o[v] + 1 < D) {
        B = 0;
        A = o[v];
      } else if (o[v] >= D) {
        B = j[o[v] - D];
        A = C[o[v] - D];
      } else {
        B = 96;
        A = 0;
      }
      s = 1 << p - y;
      c = 1 << w;
      g = c;
      do {
        c -= s;
        i[h + (E >> y) + c] = S << 24 | B << 16 | A;
      } while (c !== 0);
      for (s = 1 << p - 1; E & s;) {
        s >>= 1;
      }
      if (s !== 0) {
        E &= s - 1;
        E += s;
      } else {
        E = 0;
      }
      v++;
      if (--x[p] === 0) {
        if (p === m) {
          break;
        }
        p = e[t + o[v]];
      }
      if (p > b && (E & d) !== f) {
        if (y === 0) {
          y = b;
        }
        h += g;
        w = p - y;
        F = 1 << w;
        while (w + y < m && (F -= x[w + y], !(F <= 0))) {
          w++;
          F <<= 1;
        }
        k += 1 << w;
        if (n === 1 && k > 852 || n === 2 && k > 592) {
          return 1;
        }
        f = E & d;
        i[f] = b << 24 | w << 16 | h - u;
      }
    }
    if (E !== 0) {
      i[h + E] = p - y << 24 | 4194304;
    }
    l.bits = b;
    return 0;
  };
  const {
    Z_FINISH: wt,
    Z_BLOCK: yt,
    Z_TREES: Ft,
    Z_OK: kt,
    Z_STREAM_END: Et,
    Z_NEED_DICT: Ct,
    Z_STREAM_ERROR: xt,
    Z_DATA_ERROR: _t,
    Z_MEM_ERROR: St,
    Z_BUF_ERROR: Bt,
    Z_DEFLATED: At
  } = Vn;
  const jt = 16180;
  const It = 16190;
  const Tt = 16191;
  const Ot = 16192;
  const Rt = 16194;
  const Mt = 16199;
  const Ut = 16200;
  const Lt = 16206;
  const Pt = 16209;
  const Nt = n => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
  function Ht() {
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
  const zt = n => {
    if (!n) {
      return 1;
    }
    const e = n.state;
    if (!e || e.strm !== n || e.mode < jt || e.mode > 16211) {
      return 1;
    } else {
      return 0;
    }
  };
  const Vt = n => {
    if (zt(n)) {
      return xt;
    }
    const e = n.state;
    n.total_in = n.total_out = e.total = 0;
    n.msg = "";
    if (e.wrap) {
      n.adler = e.wrap & 1;
    }
    e.mode = jt;
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
    return kt;
  };
  const $t = n => {
    if (zt(n)) {
      return xt;
    }
    const e = n.state;
    e.wsize = 0;
    e.whave = 0;
    e.wnext = 0;
    return Vt(n);
  };
  const Gt = (n, e) => {
    let t;
    if (zt(n)) {
      return xt;
    }
    const r = n.state;
    if (e < 0) {
      t = 0;
      e = -e;
    } else {
      t = 5 + (e >> 4);
      if (e < 48) {
        e &= 15;
      }
    }
    if (e && (e < 8 || e > 15)) {
      return xt;
    } else {
      if (r.window !== null && r.wbits !== e) {
        r.window = null;
      }
      r.wrap = t;
      r.wbits = e;
      return $t(n);
    }
  };
  const Wt = (n, e) => {
    if (!n) {
      return xt;
    }
    const t = new Ht();
    n.state = t;
    t.strm = n;
    t.window = null;
    t.mode = jt;
    const r = Gt(n, e);
    if (r !== kt) {
      n.state = null;
    }
    return r;
  };
  let Kt;
  let Zt;
  let qt = true;
  const Qt = n => {
    if (qt) {
      Kt = new Int32Array(512);
      Zt = new Int32Array(32);
      let e = 0;
      while (e < 144) {
        n.lens[e++] = 8;
      }
      while (e < 256) {
        n.lens[e++] = 9;
      }
      while (e < 280) {
        n.lens[e++] = 7;
      }
      while (e < 288) {
        n.lens[e++] = 8;
      }
      bt(1, n.lens, 0, 288, Kt, 0, n.work, {
        bits: 9
      });
      e = 0;
      while (e < 32) {
        n.lens[e++] = 5;
      }
      bt(2, n.lens, 0, 32, Zt, 0, n.work, {
        bits: 5
      });
      qt = false;
    }
    n.lencode = Kt;
    n.lenbits = 9;
    n.distcode = Zt;
    n.distbits = 5;
  };
  const Yt = (n, e, t, r) => {
    let i;
    const u = n.state;
    if (u.window === null) {
      u.wsize = 1 << u.wbits;
      u.wnext = 0;
      u.whave = 0;
      u.window = new Uint8Array(u.wsize);
    }
    if (r >= u.wsize) {
      u.window.set(e.subarray(t - u.wsize, t), 0);
      u.wnext = 0;
      u.whave = u.wsize;
    } else {
      i = u.wsize - u.wnext;
      if (i > r) {
        i = r;
      }
      u.window.set(e.subarray(t - r, t - r + i), u.wnext);
      if (r -= i) {
        u.window.set(e.subarray(t - r, t), 0);
        u.wnext = r;
        u.whave = u.wsize;
      } else {
        u.wnext += i;
        if (u.wnext === u.wsize) {
          u.wnext = 0;
        }
        if (u.whave < u.wsize) {
          u.whave += i;
        }
      }
    }
    return 0;
  };
  var Jt = (n, e) => {
    let t;
    let r;
    let i;
    let u;
    let o;
    let l;
    let a;
    let s;
    let c;
    let f;
    let d;
    let h;
    let D;
    let p;
    let v;
    let g;
    let m;
    let b;
    let w;
    let y;
    let F;
    let k;
    let E = 0;
    const C = new Uint8Array(4);
    let x;
    let _;
    const S = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    if (zt(n) || !n.output || !n.input && n.avail_in !== 0) {
      return xt;
    }
    t = n.state;
    if (t.mode === Tt) {
      t.mode = Ot;
    }
    o = n.next_out;
    i = n.output;
    a = n.avail_out;
    u = n.next_in;
    r = n.input;
    l = n.avail_in;
    s = t.hold;
    c = t.bits;
    f = l;
    d = a;
    k = kt;
    n: while (true) {
      switch (t.mode) {
        case jt:
          if (t.wrap === 0) {
            t.mode = Ot;
            break;
          }
          while (c < 16) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if (t.wrap & 2 && s === 35615) {
            if (t.wbits === 0) {
              t.wbits = 15;
            }
            t.check = 0;
            C[0] = s & 255;
            C[1] = s >>> 8 & 255;
            t.check = Hn(t.check, C, 2, 0);
            s = 0;
            c = 0;
            t.mode = 16181;
            break;
          }
          if (t.head) {
            t.head.done = false;
          }
          if (!(t.wrap & 1) || (((s & 255) << 8) + (s >> 8)) % 31) {
            n.msg = "incorrect header check";
            t.mode = Pt;
            break;
          }
          if ((s & 15) !== At) {
            n.msg = "unknown compression method";
            t.mode = Pt;
            break;
          }
          s >>>= 4;
          c -= 4;
          F = 8 + (s & 15);
          if (t.wbits === 0) {
            t.wbits = F;
          }
          if (F > 15 || F > t.wbits) {
            n.msg = "invalid window size";
            t.mode = Pt;
            break;
          }
          t.dmax = 1 << t.wbits;
          t.flags = 0;
          n.adler = t.check = 1;
          t.mode = s & 512 ? 16189 : Tt;
          s = 0;
          c = 0;
          break;
        case 16181:
          while (c < 16) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          t.flags = s;
          if ((t.flags & 255) !== At) {
            n.msg = "unknown compression method";
            t.mode = Pt;
            break;
          }
          if (t.flags & 57344) {
            n.msg = "unknown header flags set";
            t.mode = Pt;
            break;
          }
          if (t.head) {
            t.head.text = s >> 8 & 1;
          }
          if (t.flags & 512 && t.wrap & 4) {
            C[0] = s & 255;
            C[1] = s >>> 8 & 255;
            t.check = Hn(t.check, C, 2, 0);
          }
          s = 0;
          c = 0;
          t.mode = 16182;
        case 16182:
          while (c < 32) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if (t.head) {
            t.head.time = s;
          }
          if (t.flags & 512 && t.wrap & 4) {
            C[0] = s & 255;
            C[1] = s >>> 8 & 255;
            C[2] = s >>> 16 & 255;
            C[3] = s >>> 24 & 255;
            t.check = Hn(t.check, C, 4, 0);
          }
          s = 0;
          c = 0;
          t.mode = 16183;
        case 16183:
          while (c < 16) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if (t.head) {
            t.head.xflags = s & 255;
            t.head.os = s >> 8;
          }
          if (t.flags & 512 && t.wrap & 4) {
            C[0] = s & 255;
            C[1] = s >>> 8 & 255;
            t.check = Hn(t.check, C, 2, 0);
          }
          s = 0;
          c = 0;
          t.mode = 16184;
        case 16184:
          if (t.flags & 1024) {
            while (c < 16) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            t.length = s;
            if (t.head) {
              t.head.extra_len = s;
            }
            if (t.flags & 512 && t.wrap & 4) {
              C[0] = s & 255;
              C[1] = s >>> 8 & 255;
              t.check = Hn(t.check, C, 2, 0);
            }
            s = 0;
            c = 0;
          } else if (t.head) {
            t.head.extra = null;
          }
          t.mode = 16185;
        case 16185:
          if (t.flags & 1024 && (h = t.length, h > l && (h = l), h && (t.head && (F = t.head.extra_len - t.length, t.head.extra ||= new Uint8Array(t.head.extra_len), t.head.extra.set(r.subarray(u, u + h), F)), t.flags & 512 && t.wrap & 4 && (t.check = Hn(t.check, r, h, u)), l -= h, u += h, t.length -= h), t.length)) {
            break n;
          }
          t.length = 0;
          t.mode = 16186;
        case 16186:
          if (t.flags & 2048) {
            if (l === 0) {
              break n;
            }
            h = 0;
            do {
              F = r[u + h++];
              if (t.head && F && t.length < 65536) {
                t.head.name += String.fromCharCode(F);
              }
            } while (F && h < l);
            if (t.flags & 512 && t.wrap & 4) {
              t.check = Hn(t.check, r, h, u);
            }
            l -= h;
            u += h;
            if (F) {
              break n;
            }
          } else if (t.head) {
            t.head.name = null;
          }
          t.length = 0;
          t.mode = 16187;
        case 16187:
          if (t.flags & 4096) {
            if (l === 0) {
              break n;
            }
            h = 0;
            do {
              F = r[u + h++];
              if (t.head && F && t.length < 65536) {
                t.head.comment += String.fromCharCode(F);
              }
            } while (F && h < l);
            if (t.flags & 512 && t.wrap & 4) {
              t.check = Hn(t.check, r, h, u);
            }
            l -= h;
            u += h;
            if (F) {
              break n;
            }
          } else if (t.head) {
            t.head.comment = null;
          }
          t.mode = 16188;
        case 16188:
          if (t.flags & 512) {
            while (c < 16) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            if (t.wrap & 4 && s !== (t.check & 65535)) {
              n.msg = "header crc mismatch";
              t.mode = Pt;
              break;
            }
            s = 0;
            c = 0;
          }
          if (t.head) {
            t.head.hcrc = t.flags >> 9 & 1;
            t.head.done = true;
          }
          n.adler = t.check = 0;
          t.mode = Tt;
          break;
        case 16189:
          while (c < 32) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          n.adler = t.check = Nt(s);
          s = 0;
          c = 0;
          t.mode = It;
        case It:
          if (t.havedict === 0) {
            n.next_out = o;
            n.avail_out = a;
            n.next_in = u;
            n.avail_in = l;
            t.hold = s;
            t.bits = c;
            return Ct;
          }
          n.adler = t.check = 1;
          t.mode = Tt;
        case Tt:
          if (e === yt || e === Ft) {
            break n;
          }
        case Ot:
          if (t.last) {
            s >>>= c & 7;
            c -= c & 7;
            t.mode = Lt;
            break;
          }
          while (c < 3) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          t.last = s & 1;
          s >>>= 1;
          c -= 1;
          switch (s & 3) {
            case 0:
              t.mode = 16193;
              break;
            case 1:
              Qt(t);
              t.mode = Mt;
              if (e === Ft) {
                s >>>= 2;
                c -= 2;
                break n;
              }
              break;
            case 2:
              t.mode = 16196;
              break;
            case 3:
              n.msg = "invalid block type";
              t.mode = Pt;
          }
          s >>>= 2;
          c -= 2;
          break;
        case 16193:
          s >>>= c & 7;
          c -= c & 7;
          while (c < 32) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if ((s & 65535) != (s >>> 16 ^ 65535)) {
            n.msg = "invalid stored block lengths";
            t.mode = Pt;
            break;
          }
          t.length = s & 65535;
          s = 0;
          c = 0;
          t.mode = Rt;
          if (e === Ft) {
            break n;
          }
        case Rt:
          t.mode = 16195;
        case 16195:
          h = t.length;
          if (h) {
            if (h > l) {
              h = l;
            }
            if (h > a) {
              h = a;
            }
            if (h === 0) {
              break n;
            }
            i.set(r.subarray(u, u + h), o);
            l -= h;
            u += h;
            a -= h;
            o += h;
            t.length -= h;
            break;
          }
          t.mode = Tt;
          break;
        case 16196:
          while (c < 14) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          t.nlen = 257 + (s & 31);
          s >>>= 5;
          c -= 5;
          t.ndist = 1 + (s & 31);
          s >>>= 5;
          c -= 5;
          t.ncode = 4 + (s & 15);
          s >>>= 4;
          c -= 4;
          if (t.nlen > 286 || t.ndist > 30) {
            n.msg = "too many length or distance symbols";
            t.mode = Pt;
            break;
          }
          t.have = 0;
          t.mode = 16197;
        case 16197:
          while (t.have < t.ncode) {
            while (c < 3) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            t.lens[S[t.have++]] = s & 7;
            s >>>= 3;
            c -= 3;
          }
          while (t.have < 19) {
            t.lens[S[t.have++]] = 0;
          }
          t.lencode = t.lendyn;
          t.lenbits = 7;
          x = {
            bits: t.lenbits
          };
          k = bt(0, t.lens, 0, 19, t.lencode, 0, t.work, x);
          t.lenbits = x.bits;
          if (k) {
            n.msg = "invalid code lengths set";
            t.mode = Pt;
            break;
          }
          t.have = 0;
          t.mode = 16198;
        case 16198:
          while (t.have < t.nlen + t.ndist) {
            while (E = t.lencode[s & (1 << t.lenbits) - 1], v = E >>> 24, g = E >>> 16 & 255, m = E & 65535, !(v <= c)) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            if (m < 16) {
              s >>>= v;
              c -= v;
              t.lens[t.have++] = m;
            } else {
              if (m === 16) {
                for (_ = v + 2; c < _;) {
                  if (l === 0) {
                    break n;
                  }
                  l--;
                  s += r[u++] << c;
                  c += 8;
                }
                s >>>= v;
                c -= v;
                if (t.have === 0) {
                  n.msg = "invalid bit length repeat";
                  t.mode = Pt;
                  break;
                }
                F = t.lens[t.have - 1];
                h = 3 + (s & 3);
                s >>>= 2;
                c -= 2;
              } else if (m === 17) {
                for (_ = v + 3; c < _;) {
                  if (l === 0) {
                    break n;
                  }
                  l--;
                  s += r[u++] << c;
                  c += 8;
                }
                s >>>= v;
                c -= v;
                F = 0;
                h = 3 + (s & 7);
                s >>>= 3;
                c -= 3;
              } else {
                for (_ = v + 7; c < _;) {
                  if (l === 0) {
                    break n;
                  }
                  l--;
                  s += r[u++] << c;
                  c += 8;
                }
                s >>>= v;
                c -= v;
                F = 0;
                h = 11 + (s & 127);
                s >>>= 7;
                c -= 7;
              }
              if (t.have + h > t.nlen + t.ndist) {
                n.msg = "invalid bit length repeat";
                t.mode = Pt;
                break;
              }
              while (h--) {
                t.lens[t.have++] = F;
              }
            }
          }
          if (t.mode === Pt) {
            break;
          }
          if (t.lens[256] === 0) {
            n.msg = "invalid code -- missing end-of-block";
            t.mode = Pt;
            break;
          }
          t.lenbits = 9;
          x = {
            bits: t.lenbits
          };
          k = bt(1, t.lens, 0, t.nlen, t.lencode, 0, t.work, x);
          t.lenbits = x.bits;
          if (k) {
            n.msg = "invalid literal/lengths set";
            t.mode = Pt;
            break;
          }
          t.distbits = 6;
          t.distcode = t.distdyn;
          x = {
            bits: t.distbits
          };
          k = bt(2, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, x);
          t.distbits = x.bits;
          if (k) {
            n.msg = "invalid distances set";
            t.mode = Pt;
            break;
          }
          t.mode = Mt;
          if (e === Ft) {
            break n;
          }
        case Mt:
          t.mode = Ut;
        case Ut:
          if (l >= 6 && a >= 258) {
            n.next_out = o;
            n.avail_out = a;
            n.next_in = u;
            n.avail_in = l;
            t.hold = s;
            t.bits = c;
            ht(n, d);
            o = n.next_out;
            i = n.output;
            a = n.avail_out;
            u = n.next_in;
            r = n.input;
            l = n.avail_in;
            s = t.hold;
            c = t.bits;
            if (t.mode === Tt) {
              t.back = -1;
            }
            break;
          }
          for (t.back = 0; E = t.lencode[s & (1 << t.lenbits) - 1], v = E >>> 24, g = E >>> 16 & 255, m = E & 65535, !(v <= c);) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if (g && !(g & 240)) {
            b = v;
            w = g;
            y = m;
            while (E = t.lencode[y + ((s & (1 << b + w) - 1) >> b)], v = E >>> 24, g = E >>> 16 & 255, m = E & 65535, !(b + v <= c)) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            s >>>= b;
            c -= b;
            t.back += b;
          }
          s >>>= v;
          c -= v;
          t.back += v;
          t.length = m;
          if (g === 0) {
            t.mode = 16205;
            break;
          }
          if (g & 32) {
            t.back = -1;
            t.mode = Tt;
            break;
          }
          if (g & 64) {
            n.msg = "invalid literal/length code";
            t.mode = Pt;
            break;
          }
          t.extra = g & 15;
          t.mode = 16201;
        case 16201:
          if (t.extra) {
            for (_ = t.extra; c < _;) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            t.length += s & (1 << t.extra) - 1;
            s >>>= t.extra;
            c -= t.extra;
            t.back += t.extra;
          }
          t.was = t.length;
          t.mode = 16202;
        case 16202:
          while (E = t.distcode[s & (1 << t.distbits) - 1], v = E >>> 24, g = E >>> 16 & 255, m = E & 65535, !(v <= c)) {
            if (l === 0) {
              break n;
            }
            l--;
            s += r[u++] << c;
            c += 8;
          }
          if (!(g & 240)) {
            b = v;
            w = g;
            y = m;
            while (E = t.distcode[y + ((s & (1 << b + w) - 1) >> b)], v = E >>> 24, g = E >>> 16 & 255, m = E & 65535, !(b + v <= c)) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            s >>>= b;
            c -= b;
            t.back += b;
          }
          s >>>= v;
          c -= v;
          t.back += v;
          if (g & 64) {
            n.msg = "invalid distance code";
            t.mode = Pt;
            break;
          }
          t.offset = m;
          t.extra = g & 15;
          t.mode = 16203;
        case 16203:
          if (t.extra) {
            for (_ = t.extra; c < _;) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            t.offset += s & (1 << t.extra) - 1;
            s >>>= t.extra;
            c -= t.extra;
            t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            n.msg = "invalid distance too far back";
            t.mode = Pt;
            break;
          }
          t.mode = 16204;
        case 16204:
          if (a === 0) {
            break n;
          }
          h = d - a;
          if (t.offset > h) {
            h = t.offset - h;
            if (h > t.whave && t.sane) {
              n.msg = "invalid distance too far back";
              t.mode = Pt;
              break;
            }
            if (h > t.wnext) {
              h -= t.wnext;
              D = t.wsize - h;
            } else {
              D = t.wnext - h;
            }
            if (h > t.length) {
              h = t.length;
            }
            p = t.window;
          } else {
            p = i;
            D = o - t.offset;
            h = t.length;
          }
          if (h > a) {
            h = a;
          }
          a -= h;
          t.length -= h;
          do {
            i[o++] = p[D++];
          } while (--h);
          if (t.length === 0) {
            t.mode = Ut;
          }
          break;
        case 16205:
          if (a === 0) {
            break n;
          }
          i[o++] = t.length;
          a--;
          t.mode = Ut;
          break;
        case Lt:
          if (t.wrap) {
            while (c < 32) {
              if (l === 0) {
                break n;
              }
              l--;
              s |= r[u++] << c;
              c += 8;
            }
            d -= a;
            n.total_out += d;
            t.total += d;
            if (t.wrap & 4 && d) {
              n.adler = t.check = t.flags ? Hn(t.check, i, d, o - d) : Pn(t.check, i, d, o - d);
            }
            d = a;
            if (t.wrap & 4 && (t.flags ? s : Nt(s)) !== t.check) {
              n.msg = "incorrect data check";
              t.mode = Pt;
              break;
            }
            s = 0;
            c = 0;
          }
          t.mode = 16207;
        case 16207:
          if (t.wrap && t.flags) {
            while (c < 32) {
              if (l === 0) {
                break n;
              }
              l--;
              s += r[u++] << c;
              c += 8;
            }
            if (t.wrap & 4 && s !== (t.total & -1)) {
              n.msg = "incorrect length check";
              t.mode = Pt;
              break;
            }
            s = 0;
            c = 0;
          }
          t.mode = 16208;
        case 16208:
          k = Et;
          break n;
        case Pt:
          k = _t;
          break n;
        case 16210:
          return St;
        default:
          return xt;
      }
    }
    n.next_out = o;
    n.avail_out = a;
    n.next_in = u;
    n.avail_in = l;
    t.hold = s;
    t.bits = c;
    if (t.wsize || d !== n.avail_out && t.mode < Pt && (t.mode < Lt || e !== wt)) {
      Yt(n, n.output, n.next_out, d - n.avail_out);
    }
    f -= n.avail_in;
    d -= n.avail_out;
    n.total_in += f;
    n.total_out += d;
    t.total += d;
    if (t.wrap & 4 && d) {
      n.adler = t.check = t.flags ? Hn(t.check, i, d, n.next_out - d) : Pn(t.check, i, d, n.next_out - d);
    }
    n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Tt ? 128 : 0) + (t.mode === Mt || t.mode === Rt ? 256 : 0);
    if ((f === 0 && d === 0 || e === wt) && k === kt) {
      k = Bt;
    }
    return k;
  };
  var Xt = {
    inflateReset: $t,
    inflateReset2: Gt,
    inflateResetKeep: Vt,
    inflateInit: n => Wt(n, 15),
    inflateInit2: Wt,
    inflate: Jt,
    inflateEnd: n => {
      if (zt(n)) {
        return xt;
      }
      let e = n.state;
      e.window &&= null;
      n.state = null;
      return kt;
    },
    inflateGetHeader: (n, e) => {
      if (zt(n)) {
        return xt;
      }
      const t = n.state;
      if (t.wrap & 2) {
        t.head = e;
        e.done = false;
        return kt;
      } else {
        return xt;
      }
    },
    inflateSetDictionary: (n, e) => {
      const t = e.length;
      let r;
      let i;
      let u;
      if (zt(n)) {
        return xt;
      } else {
        r = n.state;
        if (r.wrap !== 0 && r.mode !== It) {
          return xt;
        } else if (r.mode === It && (i = 1, i = Pn(i, e, t, 0), i !== r.check)) {
          return _t;
        } else {
          u = Yt(n, e, t, t);
          if (u) {
            r.mode = 16210;
            return St;
          } else {
            r.havedict = 1;
            return kt;
          }
        }
      }
    },
    inflateInfo: "pako inflate (from Nodeca project)"
  };
  function nr() {
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
  const er = Object.prototype.toString;
  const {
    Z_NO_FLUSH: tr,
    Z_FINISH: rr,
    Z_OK: ir,
    Z_STREAM_END: ur,
    Z_NEED_DICT: or,
    Z_STREAM_ERROR: lr,
    Z_DATA_ERROR: ar,
    Z_MEM_ERROR: sr
  } = Vn;
  function cr(n) {
    this.options = Ve({
      chunkSize: 65536,
      windowBits: 15,
      to: ""
    }, n || {});
    const e = this.options;
    if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
      e.windowBits = -e.windowBits;
      if (e.windowBits === 0) {
        e.windowBits = -15;
      }
    }
    if (!!(e.windowBits >= 0) && !!(e.windowBits < 16) && (!n || !n.windowBits)) {
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
    this.strm = new Qe();
    this.strm.avail_out = 0;
    let t = Xt.inflateInit2(this.strm, e.windowBits);
    if (t !== ir) {
      throw new Error(zn[t]);
    }
    this.header = new nr();
    Xt.inflateGetHeader(this.strm, this.header);
    if (e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Ke(e.dictionary) : er.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = Xt.inflateSetDictionary(this.strm, e.dictionary), t !== ir))) {
      throw new Error(zn[t]);
    }
  }
  function fr(n, e) {
    const t = new cr(e);
    t.push(n);
    if (t.err) {
      throw t.msg || zn[t.err];
    }
    return t.result;
  }
  cr.prototype.push = function (n, e) {
    const t = this.strm;
    const r = this.options.chunkSize;
    const i = this.options.dictionary;
    let u;
    let o;
    let l;
    if (this.ended) {
      return false;
    }
    o = e === ~~e ? e : e === true ? rr : tr;
    if (er.call(n) === "[object ArrayBuffer]") {
      t.input = new Uint8Array(n);
    } else {
      t.input = n;
    }
    t.next_in = 0;
    t.avail_in = t.input.length;
    while (true) {
      if (t.avail_out === 0) {
        t.output = new Uint8Array(r);
        t.next_out = 0;
        t.avail_out = r;
      }
      u = Xt.inflate(t, o);
      if (u === or && i) {
        u = Xt.inflateSetDictionary(t, i);
        if (u === ir) {
          u = Xt.inflate(t, o);
        } else if (u === ar) {
          u = or;
        }
      }
      while (t.avail_in > 0 && u === ur && t.state.wrap > 0 && n[t.next_in] !== 0) {
        Xt.inflateReset(t);
        u = Xt.inflate(t, o);
      }
      switch (u) {
        case lr:
        case ar:
        case or:
        case sr:
          this.onEnd(u);
          this.ended = true;
          return false;
      }
      l = t.avail_out;
      if (t.next_out && (t.avail_out === 0 || u === ur)) {
        if (this.options.to === "string") {
          let n = qe(t.output, t.next_out);
          let e = t.next_out - n;
          let i = Ze(t.output, n);
          t.next_out = e;
          t.avail_out = r - e;
          if (e) {
            t.output.set(t.output.subarray(n, n + e), 0);
          }
          this.onData(i);
        } else {
          this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
        }
      }
      if (u !== ir || l !== 0) {
        if (u === ur) {
          u = Xt.inflateEnd(this.strm);
          this.onEnd(u);
          this.ended = true;
          return true;
        }
        if (t.avail_in === 0) {
          break;
        }
      }
    }
    return true;
  };
  cr.prototype.onData = function (n) {
    this.chunks.push(n);
  };
  cr.prototype.onEnd = function (n) {
    if (n === ir) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = $e(this.chunks);
      }
    }
    this.chunks = [];
    this.err = n;
    this.msg = this.strm.msg;
  };
  function dr(n, e) {
    (e = e || {}).raw = true;
    return fr(n, e);
  }
  var hr = {
    Inflate: cr,
    inflate: fr,
    inflateRaw: dr,
    ungzip: fr,
    constants: Vn
  };
  const {
    Deflate: Dr,
    deflate: pr,
    deflateRaw: vr,
    gzip: gr
  } = ft;
  const {
    Inflate: mr,
    inflate: br,
    inflateRaw: wr,
    ungzip: yr
  } = hr;
  var Fr;
  var kr;
  function Er(n) {
    return n.hostname.includes(".amazon.") || n.hostname.includes(".primevideo.");
  }
  function Cr(n = new URL(window.location.href)) {
    return n.hostname === "tv.youtube.com";
  }
  function xr(n) {
    return function () {
      return new Promise(e => {
        setTimeout(() => {
          e();
        }, n);
      });
    };
  }
  function _r(n) {
    const e = T.split(".").map(Number);
    const t = n.split(".").map(Number);
    for (let n = 0; n < e.length; n++) {
      if (e[n] > t[n]) {
        return 1;
      }
      if (e[n] < t[n]) {
        return -1;
      }
    }
    return 0;
  }
  (function (n) {
    n.REGISTER = "register";
    n.PARTY_START = "party_start";
    n.PARTY_JOIN = "party_join";
    n.PARTY_END = "party_end";
    n.PARTY_SHARE = "party_share";
    n.PARTY_SCHEDULE = "party_schedule";
  })(Fr ||= {});
  (function (n) {
    n.NETFLIX = "Netflix";
    n.HULU = "Hulu";
    n.DISNEY_PLUS = "Disney";
    n.DISNEY_PLUS_MENA = "DisneyMena";
    n.HBO_MAX = "HBOMax";
    n.MAX = "Max";
    n.YOUTUBE = "Youtube";
    n.YOUTUBE_TV = "YoutubeTV";
    n.AMAZON = "Amazon";
    n.CRUNCHYROLL = "Crunchyroll";
    n.ESPN = "ESPN+";
    n.PARAMOUNT = "Paramount+";
    n.FUNIMATION = "Funimation";
    n.HOTSTAR = "Hotstar";
    n.PEACOCK = "Peacock TV";
    n.STAR_PLUS = "Starplus";
    n.PLUTO_TV = "PlutoTV";
    n.APPLE_TV = "AppleTV";
    n.JIO_CINEMA = "JioCinema";
    n.TUBI_TV = "TubiTV";
    n.MUBI = "Mubi";
    n.STAN = "Stan";
    n.CRAVE = "Crave";
    n.SLING = "Sling";
    n.FUBO = "Fubo";
    n.VIKI = "Viki";
    n.SPOTIFY = "Spotify";
    n.ZEE5 = "Zee5";
    n.SONY_LIV = "SonyLiv";
    n.UNEXT = "U-Next";
    n.HULU_JP = "Hulu Japan";
    n.WILLOW = "Willow";
    n.CANALPLUS = "Canal+";
    n.FANCODE = "Fancode";
    n.SHAHID = "Shahid";
    n.SHUDDER = "Shudder";
    n.VIU = "Viu";
    n.VIDIO = "Vidio";
    n.FOX_ONE = "Fox One";
    n.TSN_PLUS = "TSN+";
    n.LEAGUE_PASS = "LeaguePass";
    n.DAZN = "DAZN";
    n.VIX = "Vix";
    n.MIGU = "Migu";
    n.F1_TV = "F1 TV";
  })(kr ||= {});
  const Sr = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes("tv.apple.com");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("tv.apple.com");
    }
    getVideoId(n) {
      return n.toString().split("https://tv.apple.com/")[1];
    }
  }([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", kr.APPLE_TV, false, ["browse_scripts/appletv/appletv_browse_bundled.js"]);
  Object.freeze(Sr);
  const Br = Sr;
  const Ar = new class extends H {
    isValidUrl(n) {
      return Er(n);
    }
    isBrowsing(n) {
      return Er(n) || n.pathname.includes("amazon.");
    }
    getVideoId(n) {
      const e = n.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
      if (e != null && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", kr.AMAZON, false, ["browse_scripts/amazon/amazon_browse_bundled.js"]);
  Object.freeze(Ar);
  const jr = Ar;
  const Ir = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".canalplus.") && ["/cinema", "/sport", "/divertissement", "/decouverte", "/musique", "/series"].some(e => n.pathname.includes(e));
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".canalplus.");
    }
    getVideoId(n) {
      const e = n.pathname.split("/").filter(Boolean);
      if (e[0] === "live" && e.length >= 2) {
        return e[1];
      } else {
        return e.join("/");
      }
    }
  }([], ["content_scripts/canalplus/canalplus_content_bundled.js"], "canalplus", kr.CANALPLUS, false, ["browse_scripts/canalplus/canalplus_browse_bundled.js"]);
  Object.freeze(Ir);
  const Tr = Ir;
  const Or = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes(".crave.");
        const t = n.pathname.includes("/play/") || n.pathname.includes("/live");
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".crave.");
    }
    getVideoId(n) {
      if (n.pathname.includes("/live")) {
        const e = n.searchParams.get("channel");
        if (e) {
          return `live/${e}`;
        } else {
          return "live";
        }
      }
      return n.pathname.split("/").slice(2).join("/");
    }
  }([], ["content_scripts/crave/crave_content_bundled.js"], "crave", kr.CRAVE, false, ["browse_scripts/crave/crave_browse_bundled.js"]);
  Object.freeze(Or);
  const Rr = Or;
  const Mr = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".crunchyroll.");
    }
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".crunchyroll.") && n.pathname.includes("/watch/");
      }(n);
    }
    getVideoId(n) {
      const e = n.pathname.match(/watch\/(.*)\//);
      if (e && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", kr.CRUNCHYROLL, false, ["browse_scripts/crunchyroll/crunchyroll_browse_bundled.js"]);
  Object.freeze(Mr);
  const Ur = Mr;
  const Lr = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".disneyplus.") && (n.pathname.includes("/video") || n.pathname.includes("/play"));
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".disneyplus.") && !n.hostname.includes("apps.disneyplus.");
    }
    getVideoId(n) {
      const e = n.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
      if (e && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/disney/disney_content_bundled.js"], "disney", kr.DISNEY_PLUS, false, ["browse_scripts/disney/disney_browse_bundled.js"]);
  Object.freeze(Lr);
  const Pr = Lr;
  const Nr = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes("apps.disneyplus.") && n.pathname.includes("/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("apps.disneyplus.");
    }
    getVideoId(n) {
      const e = n.pathname.split("/");
      if (e && e.length > 1) {
        return e[e.length - 2];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", kr.DISNEY_PLUS_MENA, false);
  Object.freeze(Nr);
  const Hr = Nr;
  const zr = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".espn.");
    }
    isValidUrl(n) {
      return function (n) {
        if (!n.hostname.includes(".espn.")) {
          return false;
        }
        const e = n.pathname;
        return e.includes("/player") || e.includes("/watch/");
      }(n);
    }
    getVideoId(n) {
      const e = n.pathname;
      const t = e.match(/\/watch\/player\/_\/id\/([^/?#]+)/);
      if (t == null ? undefined : t[1]) {
        return decodeURIComponent(t[1]);
      }
      const r = ["contentId", "mediaId", "id"];
      for (const e of r) {
        const t = n.searchParams.get(e);
        if (!t) {
          continue;
        }
        const r = decodeURIComponent(t);
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(r) || /^\d{8,}$/.test(r)) {
          return r;
        }
      }
      const i = (e + n.hash).match(/\b([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|\d{8,})\b/);
      if (i == null) {
        return undefined;
      } else {
        return i[1];
      }
    }
  }([], ["content_scripts/espn/espn_content_bundled.js"], "espn", kr.ESPN, false, ["browse_scripts/espn/espn_browse_bundled.js"]);
  Object.freeze(zr);
  const Vr = zr;
  const $r = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("fancode.com");
        const t = n.searchParams.get(G.MATCH_INFO_QUERY_PARAM.tag) === G.MATCH_INFO_QUERY_PARAM.value;
        const r = n.pathname.includes(G.HIGHLIGHTS);
        const i = G.LIVE_MATCH_PAGE_TYPES.some(e => n.pathname.includes(e));
        return e && !t && (r || i);
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".fancode.");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/fancode/fancode_content_bundled.js"], "fancode", kr.FANCODE, false, ["browse_scripts/fancode/fancode_browse_bundled.js"]);
  Object.freeze($r);
  const Gr = $r;
  var Wr;
  (function (n) {
    n.NETFLIX = "netflix";
    n.HULU = "hulu";
    n.DISNEY_PLUS = "disney";
    n.STAR_PLUS = "starplus";
    n.AMAZON = "amazon";
    n.YOUTUBE = "youtube";
    n.HBO_MAX = "hbomax";
    n.MAX = "max";
    n.FUBO = "fubo";
    n.CRUNCHYROLL = "crunchyroll";
    n.PARAMOUNT = "paramount";
    n.PEACOCK = "peacock";
    n.HOTSTAR = "hotstar";
    n.DISNEY_PLUS_MENA = "disneymena";
    n.APPLE_TV = "appletv";
    n.PLUTO_TV = "plutotv";
    n.FUNIMATION = "funimation";
    n.TUBI_TV = "tubitv";
    n.JIO_CINEMA = "jiocinema";
    n.MUBI = "mubi";
    n.CRAVE = "crave";
    n.STAN = "stan";
    n.SONY_LIV = "sonyliv";
    n.ZEE5 = "zee5";
    n.HULU_JP = "hulujp";
    n.UNEXT = "unext";
    n.GLOBOPLAY = "globoplay";
    n.WILLOW = "willow";
    n.FANCODE = "fancode";
    n.CANALPLUS = "canalplus";
    n.SHAHID = "shahid";
    n.RTL = "rtl";
    n.ESPN = "espn";
    n.SLING = "sling";
    n.VIKI = "viki";
    n.SPOTIFY = "spotify";
    n.SHOWTIME = "showtime";
    n.SHUDDER = "shudder";
    n.AMC_PLUS = "amcplus";
    n.VIU = "viu";
    n.VIDIO = "vidio";
    n.FOX_ONE = "foxone";
    n.TSN_PLUS = "tsnplus";
    n.LEAGUE_PASS = "leaguepass";
    n.DAZN = "dazn";
    n.VIX = "vix";
    n.MIGU = "migu";
    n.F1_TV = "f1tv";
  })(Wr ||= {});
  const Kr = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".fox.") && n.pathname.includes("/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".fox.");
    }
    getVideoId(n) {
      const e = n.pathname;
      const t = e.indexOf("/watch/");
      if (t !== -1) {
        return e.substring(t + 7);
      }
    }
  }([], ["content_scripts/foxone/foxone_content_bundled.js"], Wr.FOX_ONE, kr.FOX_ONE, false, ["browse_scripts/foxone/foxone_browse_bundled.js"]);
  Object.freeze(Kr);
  const Zr = Kr;
  const qr = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("fubo.tv");
        const t = n.pathname.includes("watch");
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".fubo.tv");
    }
    getVideoId(n) {
      return n.search.substring(1);
    }
  }([], ["content_scripts/fubo/fubo_content_bundled.js"], "fubo", kr.FUBO, false, ["browse_scripts/fubo/fubo_browse_bundled.js"]);
  Object.freeze(qr);
  const Qr = qr;
  const Yr = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".funimation.");
    }
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".funimation.") && n.pathname.includes("/v/");
      }(n);
    }
    getVideoId(n) {
      return n.pathname.split("/v/")[1];
    }
  }([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", kr.FUNIMATION, false, ["browse_scripts/funimation/funimation_browse_bundled.js"]);
  Object.freeze(Yr);
  const Jr = Yr;
  function Xr(n) {
    const e = n.match(/\/video\/watch\/([^/?#]+)/i);
    if (e) {
      return e[1];
    } else {
      return undefined;
    }
  }
  const ni = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".hbomax.") && n.pathname.includes("video/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("play.hbomax.");
    }
    getVideoId(n) {
      return Xr(n.pathname);
    }
  }([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", kr.HBO_MAX, false, ["browse_scripts/hbo_max/hbo_max_browse_bundled.js"]);
  Object.freeze(ni);
  const ei = ni;
  const ti = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".hotstar.") && n.pathname.includes("/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".hotstar.");
    }
    getVideoId(n) {
      return n.pathname.substring(4);
    }
  }([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", kr.HOTSTAR, false, ["browse_scripts/hotstar/hotstar_browse_bundled.js"]);
  Object.freeze(ti);
  const ri = ti;
  const ii = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".hulu.") && !n.hostname.includes("hulu.jp") && n.pathname.includes("/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".hulu.") && !n.hostname.includes("hulu.jp");
    }
    getVideoId(n) {
      const e = n.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
      if (e && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", kr.HULU, false, ["browse_scripts/hulu/hulu_browse_bundled.js"]);
  Object.freeze(ii);
  const ui = ii;
  const oi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes("hulu.jp") && n.pathname.startsWith("/watch/");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".hulu.jp");
    }
    getVideoId(n) {
      const e = n.pathname.split("watch/");
      if (e.length > 1 && e[1].length > 0) {
        return e[1];
      }
    }
  }([], ["content_scripts/hulujp/hulujp_content_bundled.js"], "hulujp", kr.HULU_JP, false, ["browse_scripts/hulujp/hulujp_browse_bundled.js"]);
  Object.freeze(oi);
  const li = oi;
  const ai = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes(".jiocinema.");
        const t = n.pathname.includes("/watch") && n.pathname.includes("/movies/");
        const r = n.pathname.includes("/sports/");
        const i = n.pathname.includes("/tv-shows/");
        const u = n.pathname.includes("/news/");
        return e && (t || r || i || u);
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".jiocinema.");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", kr.JIO_CINEMA, false, ["browse_scripts/jio_cinema/jio_cinema_browse_bundled.js"]);
  Object.freeze(ai);
  const si = ai;
  const ci = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".max.") && n.pathname.includes("video/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("play.max.");
    }
    getVideoId(n) {
      return Xr(n.pathname);
    }
  }([], ["content_scripts/max/max_content_bundled.js"], "max", kr.MAX, false, ["browse_scripts/max/max_browse_bundled.js"]);
  Object.freeze(ci);
  const fi = ci;
  const di = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("mubi.");
        const t = n.pathname.includes("player");
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("mubi.");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
    getWatchUrl(n) {
      return `${window.location.origin}/${n}`;
    }
  }([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", kr.MUBI, false, ["browse_scripts/mubi/mubi_browse_bundled.js"]);
  Object.freeze(di);
  const hi = di;
  const Di = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".netflix.") && n.pathname.includes("/watch");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".netflix.");
    }
    getVideoId(n) {
      const e = n.pathname.match(/^.*\/([0-9]+)\??.*/);
      if (e && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", kr.NETFLIX, false, ["browse_scripts/netflix/netflix_browse_bundled.js"]);
  Object.freeze(Di);
  const pi = Di;
  const vi = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".paramountplus.");
    }
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".paramountplus.") && (n.pathname.includes("/video") || n.pathname.includes("/stream") || n.pathname.includes("/movie") || n.pathname.includes("/live-tv"));
      }(n);
    }
    getVideoId(n) {
      return n.pathname;
    }
  }([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", kr.PARAMOUNT, false, ["browse_scripts/paramount/paramount_browse_bundled.js"]);
  Object.freeze(vi);
  const gi = vi;
  const mi = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".peacocktv.");
    }
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".peacocktv.") && n.pathname.includes("/watch") && n.pathname.includes("/playback");
      }(n);
    }
    getVideoId(n) {
      if (n.pathname.includes("/live/")) {
        return n.pathname.split("/").filter(Boolean).pop();
      }
      const e = n.pathname.match(/\/watch\/playback\/(?:vod|event|preview|clip)\/([^/?#]+)\/([^/?#]+)/);
      if (e) {
        return `${e[1]}/${e[2]}`;
      }
      const t = n.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
      if (t && t.length > 0) {
        return t[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", kr.PEACOCK, false, ["browse_scripts/peacock/peacock_browse_bundled.js"]);
  Object.freeze(mi);
  const bi = mi;
  const wi = /(?:^|\/)watch\/live-tv(?:\/|$)/i;
  const yi = "us";
  const Fi = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes("pluto.tv");
    }
    isValidUrl(n) {
      return !!function (n) {
        return !!n.hostname.includes("pluto.tv") && (/\/on-demand\//.test(n.pathname) || /\/movies\/[^/]+/.test(n.pathname) || /\/shows\/[^/]+\/episode\/[^/]+/.test(n.pathname) || /\/watch\/live-tv/.test(n.pathname));
      }(n) && (!!this.isLiveTvPath(n) || !!this.getVideoId(n));
    }
    getVideoId(n) {
      const e = n.pathname.replace(/^\/+|\/+$/g, "");
      if (this.sn(e)) {
        const e = this.getLiveOriginId(n);
        if (!e) {
          return;
        }
        return this.buildLiveVideoId(e, this.getLocale(n));
      }
      if (this.cn(e) || this.fn(e) || this.dn(e)) {
        return `${e}#open`;
      }
    }
    getWatchUrl(n) {
      const e = this.getLiveOriginIdFromVideoId(n);
      if (e) {
        return `https://www.pluto.tv/${this.getLocaleFromVideoId(n)}/watch/live-tv/#${e}`;
      }
      return `https://www.pluto.tv/${n.replace(/^\/+|\/+$/g, "").replace(/#open$/i, "")}#open`;
    }
    isMoviePath(n) {
      return this.cn(n.pathname.replace(/^\/+|\/+$/g, ""));
    }
    isShowEpisodePath(n) {
      return this.fn(n.pathname.replace(/^\/+|\/+$/g, ""));
    }
    isLiveTvPath(n) {
      return this.sn(n.pathname.replace(/^\/+|\/+$/g, ""));
    }
    getLocale(n) {
      return this.hn(n.pathname.replace(/^\/+|\/+$/g, ""));
    }
    getLiveOriginId(n) {
      const e = n.hash.replace(/^#/, "").trim();
      if (e && e.toLowerCase() !== "open") {
        return e;
      }
    }
    buildLiveVideoId(n, e = yi) {
      return `${e || yi}/watch/live-tv/#${n}`;
    }
    getLiveOriginIdFromVideoId(n) {
      var e;
      const t = n.replace(/^\/+/, "");
      if (/#/.test(t) && /watch\/live-tv/i.test(t)) {
        const n = (e = t.split("#").pop()) === null || e === undefined ? undefined : e.trim();
        if (n && n.toLowerCase() !== "open") {
          return n;
        }
      }
      const r = t.match(/live-tv\/([^/#]+)/i);
      if (r == null ? undefined : r[1]) {
        return r[1];
      } else if (/^\d+$/.test(t)) {
        return t;
      } else {
        return undefined;
      }
    }
    getLocaleFromVideoId(n) {
      return this.hn(n.replace(/^\/+|\/+$/g, ""));
    }
    hn(n) {
      const e = n.split("/")[0];
      if (e && /^[a-z]{2}(?:-[a-z]{2})?$/i.test(e) && e.length <= 5) {
        return e.toLowerCase();
      } else {
        return yi;
      }
    }
    sn(n) {
      return wi.test(n);
    }
    dn(n) {
      return /(^|\/)on-demand\//.test(n);
    }
    cn(n) {
      return /(^|\/)movies\/[^/]+/.test(n);
    }
    fn(n) {
      return /(^|\/)shows\/[^/]+\/episode\/[^/]+/.test(n);
    }
  }([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", kr.PLUTO_TV, false, ["browse_scripts/plutotv/plutotv_browse_bundled.js"]);
  Object.freeze(Fi);
  const ki = Fi;
  const Ei = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("shahid.mbc.net");
        const t = n.pathname.includes(Q.VIDEO_TYPES.SHOW);
        const r = n.pathname.includes(Q.VIDEO_TYPES.LIVE_TV);
        return e && (t || r);
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("shahid.mbc.net");
    }
    getVideoId(n) {
      return n.pathname.substring(4);
    }
  }([], ["content_scripts/shahid/shahid_content_bundled.js"], "shahid", kr.SHAHID, false, ["browse_scripts/shahid/shahid_browse_bundled.js"]);
  Object.freeze(Ei);
  const Ci = Ei;
  const xi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".shudder.com") && (n.pathname.includes("/video") || n.pathname.includes("/live"));
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".shudder.");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/shudder/shudder_content_bundled.js"], Wr.SHUDDER, kr.SHUDDER, false, ["browse_scripts/shudder/shudder_browse_bundled.js"]);
  Object.freeze(xi);
  const _i = xi;
  const Si = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("watch.sling.com");
        const t = n.pathname.split("/");
        return e && t.length > 0 && t[t.length - 1] === "watch";
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".sling.com");
    }
    getVideoId(n) {
      return n.pathname.slice(1) || undefined;
    }
  }([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", kr.SLING, false, ["browse_scripts/sling/sling_browse_bundled.js"]);
  Object.freeze(Si);
  const Bi = Si;
  const Ai = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("sonyliv.com");
        const t = n.searchParams.get("watch") === "true";
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".sonyliv.com");
    }
    getVideoId(n) {
      let e = n.pathname.substring(1);
      if (n.search) {
        e += n.search;
      }
      return e;
    }
  }([], ["content_scripts/sonyliv/sonyliv_content_bundled.js"], "sonyliv", kr.SONY_LIV, false, ["browse_scripts/sonyliv/sonyliv_browse_bundled.js"]);
  Object.freeze(Ai);
  const ji = Ai;
  const Ii = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes("spotify.com");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".spotify.com");
    }
    getVideoId(n) {
      const e = n.pathname.replace(/^\//, "");
      if (e.startsWith("track/")) {
        const n = e.split("/")[1];
        if (n) {
          return `track/${n}`;
        } else {
          return undefined;
        }
      }
      const t = n.searchParams.get("trackId");
      if (t) {
        return `track/${t}`;
      }
      return e + n.search || undefined;
    }
  }([], ["content_scripts/spotify/spotify_content_bundled.js"], "spotify", kr.SPOTIFY, false);
  Object.freeze(Ii);
  const Ti = Ii;
  const Oi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("app.stan.com.au") || n.hostname.includes("play.stan.com.au");
        const t = n.pathname.split("/");
        return e && t.length === 4 && t[3] === "play";
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".stan.com.au");
    }
    getVideoId(n) {
      return n.pathname.split("/")[2];
    }
  }([], ["content_scripts/stan/stan_content_bundled.js"], "stan", kr.STAN, false, ["browse_scripts/stan/stan_browse_bundled.js"]);
  Object.freeze(Oi);
  const Ri = Oi;
  const Mi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".starplus.") && n.pathname.includes("/video");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".starplus.");
    }
    getVideoId(n) {
      const e = n.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
      if (e && e.length > 0) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", kr.STAR_PLUS, false);
  Object.freeze(Mi);
  const Ui = Mi;
  const Li = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname === "tsn.ca" || n.hostname.endsWith(".tsn.ca");
        const t = n.pathname.split("/").filter(Boolean);
        const r = t.indexOf("video");
        const i = n.pathname.replace(/\/+$/, "") === "/live";
        a = n.pathname;
        const u = a.includes("/event/");
        const o = r !== -1;
        const l = r !== -1 && t.length > r + 1;
        var a;
        console.log("checking tsn party url", {
          isTsn: e,
          hasVideoSection: o,
          hasExtraPathAfterVideo: l,
          isLive: i,
          isEvent: u
        });
        return e && (i || u || o && l);
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".tsn.");
    }
    getVideoId(n) {
      return n.pathname.slice(1) || undefined;
    }
  }([], ["content_scripts/tsnplus/tsnplus_content_bundled.js"], "tsnplus", kr.TSN_PLUS, false, ["browse_scripts/tsnplus/tsnplus_browse_bundled.js"]);
  Object.freeze(Li);
  const Pi = Li;
  const Ni = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes("tubitv.com");
    }
    isValidUrl(n) {
      return function (n) {
        const e = n.pathname.includes("live");
        const t = ["tv-shows", "movies"].some(e => n.pathname.includes(e)) && n.pathname.split("/").length > 2;
        return n.hostname.includes("tubitv.com") && (e || t);
      }(n);
    }
    getVideoId(n) {
      return n.pathname.split("/").slice(0, 3).join("/");
    }
  }([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", kr.TUBI_TV, false, ["browse_scripts/tubitv/tubitv_browse_bundled.js"]);
  Object.freeze(Ni);
  const Hi = Ni;
  const zi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".unext.") && (n.pathname.includes("/play") || n.pathname.includes("/live"));
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".unext.");
    }
    getVideoId(n) {
      const e = n.pathname.split("/").filter(Boolean);
      if (e[0] === "play" && e.length >= 3) {
        return `${e[1]}/${e[2]}`;
      } else if (e[0] === "live" && e.length >= 2) {
        return e[1];
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/unext/unext_content_bundled.js"], "unext", kr.UNEXT, false, ["browse_scripts/unext/unext_browse_bundled.js"]);
  Object.freeze(zi);
  const Vi = zi;
  const $i = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes(".vidio.");
        const t = n.pathname.includes("/watch/") || n.pathname.includes("/live/");
        const r = n.pathname.includes("shorts");
        return e && t && !r;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".vidio.");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/vidio/vidio_content_bundled.js"], "vidio", kr.VIDIO, false, ["browse_scripts/vidio/vidio_browse_bundled.js"]);
  Object.freeze($i);
  const Gi = $i;
  const Wi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("viki.com");
        const t = n.pathname.includes("videos");
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".viki.com");
    }
    getVideoId(n) {
      const e = n.pathname.split("/");
      if (e.length === 3 && e[1] === "videos") {
        return e[2];
      }
    }
  }([], ["content_scripts/viki/viki_content_bundled.js"], "viki", kr.VIKI, false, ["browse_scripts/viki/viki_browse_bundled.js"]);
  Object.freeze(Wi);
  const Ki = Wi;
  const Zi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("viu.com");
        const t = n.pathname.includes(J.VIDEO_TYPES.VIDEO);
        const r = n.pathname.includes(J.VIDEO_TYPES.LIVE);
        return e && (t || r);
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".viu.");
    }
    getVideoId(n) {
      return `${n.pathname.split("/")?.[4]}/${n.pathname.split("/")?.[5]}/${n.pathname.split("/")?.[6]}${n.search}`;
    }
  }([], ["content_scripts/viu/viu_content_bundled.js"], "viu", kr.VIU, false, ["browse_scripts/viu/viu_browse_bundled.js"]);
  Object.freeze(Zi);
  const qi = Zi;
  const Qi = new class extends H {
    isValidUrl(n) {
      return function (n) {
        const e = n.hostname.includes("vix.com");
        const t = Object.values(Z.PATH_TYPES).some(e => n.pathname.includes(e));
        return e && t;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("vix.com");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/vix/vix_content_bundled.js"], "vix", kr.VIX, false, ["browse_scripts/vix/vix_browse_bundled.js"]);
  Object.freeze(Qi);
  const Yi = Qi;
  const Ji = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".willow.tv") && n.pathname.split("/").length >= 3;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".willow.tv");
    }
    getVideoId(n) {
      return n.pathname.substring(1);
    }
  }([], ["content_scripts/willow/willow_content_bundled.js"], "willow", kr.WILLOW, false, ["browse_scripts/willow/willow_browse_bundled.js"]);
  Object.freeze(Ji);
  const Xi = Ji;
  const nu = new class extends H {
    isBrowsing(n) {
      return !n.href.includes(".hotstar.") && !n.href.includes(".fubo.") && !n.href.includes("apps.disneyplus.") && !!n.href.includes("watch?");
    }
    isValidUrl(n) {
      return function (n) {
        return (!Cr(n) || !!n.pathname.includes("/watch")) && n.hostname.includes(".youtube.");
      }(n);
    }
    getVideoId(n) {
      let e;
      const {
        pathname: t,
        searchParams: r,
        hostname: i
      } = n;
      if (function (n = new URL(window.location.href)) {
        return Cr(n) && n.pathname.includes("/watch");
      }(n)) {
        const n = t.split("/").filter(Boolean);
        if (n[0] === "watch" && n[1]) {
          e = n[1];
        }
      } else if (t.startsWith("/watch")) {
        e = r.get("v") || undefined;
      } else if (t.startsWith("/shorts/")) {
        e = t.split("/").filter(Boolean)[1];
      }
      if (!e && (n.href.includes("/watch") || n.href.includes("/shorts/"))) {
        const t = /(youtu.*be.*)\/(watch.*?v=|embed\/|v|shorts\/|shorts|)(.*?((?=[&#?])|$))/gm.exec(n.href);
        e = t != null && t.length > 3 && t[3] ? t[3] : undefined;
      }
      if (!e) {
        const n = t.split("/").filter(Boolean);
        const r = n[n.length - 1];
        if (t.startsWith("/embed/")) {
          e = r !== "embed" ? r : undefined;
        } else if (t.startsWith("/v/")) {
          e = r !== "v" ? r : undefined;
        } else if (i === "youtu.be") {
          e = r;
        }
      }
      return e || "browsing";
    }
  }([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", kr.YOUTUBE, false, []);
  Object.freeze(nu);
  const eu = nu;
  const tu = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes(".zee5.") && n.pathname.split("/").length >= 5;
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes(".zee5.");
    }
    getVideoId(n) {
      const e = n.pathname.substring(1).split("global/");
      return e[e.length - 1];
    }
  }([], ["content_scripts/zee5/zee5_content_bundled.js"], "zee5", kr.ZEE5, false, ["browse_scripts/zee5/zee5_browse_bundled.js"]);
  Object.freeze(tu);
  const ru = tu;
  const iu = new class extends H {
    Dn(n) {
      return n === "nba.com" || n.endsWith(".nba.com");
    }
    pn(n) {
      return !!n.startsWith("/watch/feature") || !!n.startsWith("/watch/nba-tv") || n.startsWith("/watch/") || n.startsWith("/game/");
    }
    isBrowsing(n) {
      return n.hostname.includes(".nba.");
    }
    isValidUrl(n) {
      return this.Dn(n.hostname) && this.pn(n.pathname.toLowerCase());
    }
    getVideoId(n) {
      const e = n.pathname.replace(/\/+$/, "").replace(/^\/+/, "");
      const t = e.toLowerCase();
      if (t.startsWith("game/") || t.startsWith("watch/")) {
        return e;
      }
    }
  }([], ["content_scripts/leaguepass/leaguepass_content_bundled.js"], "leaguepass", kr.LEAGUE_PASS, false, ["browse_scripts/leaguepass/leaguepass_browse_bundled.js"]);
  Object.freeze(iu);
  const uu = iu;
  const ou = new class extends H {
    isBrowsing(n) {
      return n.hostname.includes(".dazn.");
    }
    isValidUrl(n) {
      return n.hostname.includes("dazn.com");
    }
    getVideoId(n) {
      const e = n.pathname.split("/").filter(Boolean);
      if (/^[a-z]{2}-[A-Z]{2}$/.test(e[0])) {
        e.shift();
      }
      return e.join("/");
    }
  }([], ["content_scripts/dazn/dazn_content_bundled.js"], "dazn", kr.DAZN, false, ["browse_scripts/dazn/dazn_browse_bundled.js"]);
  Object.freeze(ou);
  const lu = ou;
  function au(n) {
    return n.hostname.includes("miguvideo.com") && (n.pathname === "/" || n.pathname === "");
  }
  const su = new class extends H {
    isBrowsing(n) {
      return !au(n) && n.hostname.includes(".miguvideo.");
    }
    isValidUrl(n) {
      return !!n.hostname.includes("miguvideo.com") && !!n.pathname.startsWith("/p/") || au(n);
    }
    getVideoId(n) {
      if (au(n)) {
        return "live/home";
      }
      const e = n.pathname;
      const t = e.indexOf("/p/");
      if (t !== -1) {
        return e.substring(t + 3);
      } else {
        return undefined;
      }
    }
  }([], ["content_scripts/migu/migu_content_bundled.js"], "migu", kr.MIGU, false, ["browse_scripts/migu/migu_browse_bundled.js"]);
  Object.freeze(su);
  const cu = su;
  const fu = new class extends H {
    isValidUrl(n) {
      return function (n) {
        return n.hostname.includes("f1tv.formula1.com") && n.pathname.includes("/detail/");
      }(n);
    }
    isBrowsing(n) {
      return n.hostname.includes("f1tv.formula1.com") && !this.isValidUrl(n);
    }
    getVideoId(n) {
      const e = n.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
      if (e.startsWith("detail/")) {
        return e;
      }
    }
  }([], ["content_scripts/f1_tv/f1_tv_content_bundled.js"], Wr.F1_TV, kr.F1_TV, false, ["browse_scripts/f1_tv/f1_tv_browse_bundled.js"]);
  Object.freeze(fu);
  const du = [pi, ui, Pr, ei, jr, eu, Ur, Vr, gi, ri, bi, Ui, fi, Jr, Br, ki, si, Hi, hi, Ri, Rr, Bi, Hr, Qr, Ki, Ti, li, ji, Vi, Xi, ru, Gr, Tr, Ci, qi, Gi, _i, Zr, Pi, uu, lu, Yi, cu, fu];
  Object.fromEntries(du.map(n => [n.name, n]));
  const hu = class {
    constructor(n, e) {
      this.isBrowsing = false;
      this.needsCSPBlock = false;
      this.id = e;
      this.videoId;
      this.url = n;
      const t = [Br];
      for (const e of du) {
        if (e.isValidUrl(this.url)) {
          this.streamingService = e;
          this.serviceName = e.name;
          this.videoId = e.getVideoId(n);
          if (t.includes(e)) {
            this.needsCSPBlock = true;
          }
          break;
        }
        if (e.isBrowsing(this.url)) {
          this.isBrowsing = true;
          this.streamingService = e;
          this.serviceName = e.name;
          if (t.includes(e)) {
            this.needsCSPBlock = true;
          }
          break;
        }
      }
    }
    urlWithSessionId(n) {
      if (this.streamingService) {
        return this.streamingService.urlWithSessionId(n);
      } else {
        return undefined;
      }
    }
  };
  const Du = "Failed to read chrome storage. Please refresh the page and try again";
  const pu = "An unexpected error occurred. Please refresh the page and try again.";
  const vu = [{
    domains: [".netflix."],
    serverName: Wr.NETFLIX,
    name: kr.NETFLIX,
    homepage: "https://netflix.com",
    premium: false,
    iconUrl: "/img/service_logos/netflix.svg",
    popularity: 64184.49597
  }, {
    domains: [".disneyplus."],
    serverName: Wr.DISNEY_PLUS,
    name: kr.DISNEY_PLUS,
    homepage: "https://disneyplus.com",
    premium: false,
    iconUrl: "/img/service_logos/disney.svg",
    popularity: 7139.926064
  }, {
    domains: [".hbomax.", ".max."],
    serverName: Wr.HBO_MAX,
    name: kr.HBO_MAX,
    homepage: "https://play.max.com",
    premium: false,
    iconUrl: "/img/service_logos/max.svg",
    popularity: 8070.383044
  }, {
    domains: [".hulu."],
    serverName: Wr.HULU,
    name: kr.HULU,
    homepage: "https://hulu.com",
    premium: false,
    iconUrl: "/img/service_logos/hulu.svg",
    popularity: 1854.542783
  }, {
    domains: [".amazon.", ".primevideo."],
    serverName: Wr.AMAZON,
    name: kr.AMAZON,
    homepage: "https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011",
    premium: false,
    iconUrl: "/img/service_logos/prime.svg",
    popularity: 3003.498061
  }, {
    domains: [".youtube."],
    serverName: Wr.YOUTUBE,
    name: kr.YOUTUBE,
    homepage: "https://youtube.com",
    premium: false,
    iconUrl: "/img/service_logos/youtube.svg",
    popularity: 4812.704642
  }, {
    domains: [".paramountplus."],
    serverName: Wr.PARAMOUNT,
    name: kr.PARAMOUNT,
    homepage: "https://www.paramountplus.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/paramount_banner.webp",
    iconUrl: "/img/service_logos/paramount.svg",
    popularity: 130.809939
  }, {
    domains: [".peacocktv."],
    serverName: Wr.PEACOCK,
    name: kr.PEACOCK,
    homepage: "https://www.peacocktv.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/peacock_banner.webp",
    iconUrl: "/img/service_logos/peacock.svg",
    popularity: 193.353472
  }, {
    domains: [".crunchyroll."],
    serverName: Wr.CRUNCHYROLL,
    name: kr.CRUNCHYROLL,
    homepage: "https://beta.crunchyroll.com",
    premium: true,
    notificationBannerImage: "img/service_banners/crunch_banner.webp",
    iconUrl: "/img/service_logos/crunchyroll.svg",
    popularity: 634.02917
  }, {
    domains: [".fubo.tv"],
    serverName: Wr.FUBO,
    name: kr.FUBO,
    homepage: "https://www.fubo.tv/",
    premium: true,
    notificationBannerImage: "img/service_banners/fubo_banner.webp",
    sports: ["nba"],
    iconUrl: "/img/service_logos/fubo.svg",
    popularity: 0
  }, {
    domains: [".espn."],
    serverName: Wr.ESPN,
    name: kr.ESPN,
    homepage: "https://plus.espn.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/espn_banner.webp",
    sports: ["nba"],
    iconUrl: "/img/service_logos/espnplus.svg",
    popularity: 0
  }, {
    domains: [".hotstar."],
    serverName: Wr.HOTSTAR,
    name: kr.HOTSTAR,
    homepage: "https://www.hotstar.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/hotstar_banner.webp",
    iconUrl: "/img/service_logos/jiohotstar.svg",
    popularity: 52.29375
  }, {
    domains: ["tv.apple."],
    serverName: Wr.APPLE_TV,
    name: kr.APPLE_TV,
    homepage: "https://tv.apple.com",
    premium: true,
    notificationBannerImage: "img/service_banners/apple_tv_banner.webp",
    iconUrl: "/img/service_logos/appletv.svg",
    popularity: 13.574957
  }, {
    domains: ["tubitv.com"],
    serverName: Wr.TUBI_TV,
    name: kr.TUBI_TV,
    homepage: "https://tubitv.com",
    premium: false,
    notificationBannerImage: "img/service_banners/tubi_tv_banner.webp",
    iconUrl: "/img/service_logos/tubi.svg",
    popularity: 223.183048
  }, {
    domains: [".sling."],
    serverName: Wr.SLING,
    name: kr.SLING,
    homepage: "https://watch.sling.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/sling_banner.webp",
    iconUrl: "/img/service_logos/sling.svg",
    popularity: 0
  }, {
    domains: ["pluto."],
    serverName: Wr.PLUTO_TV,
    name: kr.PLUTO_TV,
    homepage: "https://www.pluto.tv",
    premium: false,
    notificationBannerImage: "img/service_banners/pluto_tv_banner.webp",
    iconUrl: "/img/service_logos/pluto.svg",
    popularity: 0
  }, {
    domains: [".tsn."],
    serverName: Wr.TSN_PLUS,
    name: kr.TSN_PLUS,
    homepage: "https://www.tsn.ca/video/",
    premium: true,
    notificationBannerImage: "img/tsn_plus_banner.webp",
    iconUrl: "/img/service_logos/tsnplus.svg",
    popularity: 0
  }, {
    domains: ["mubi."],
    serverName: Wr.MUBI,
    name: kr.MUBI,
    homepage: "https://mubi.com",
    premium: true,
    notificationBannerImage: "img/service_banners/mubi_banner.webp",
    iconUrl: "/img/service_logos/mubi.svg",
    popularity: 0
  }, {
    domains: ["stan."],
    serverName: Wr.STAN,
    name: kr.STAN,
    homepage: "https://play.stan.com.au/",
    premium: true,
    notificationBannerImage: "img/service_banners/stan_banner.webp",
    iconUrl: "/img/service_logos/stan.svg",
    popularity: 0
  }, {
    domains: [".crave."],
    serverName: Wr.CRAVE,
    name: kr.CRAVE,
    homepage: "https://crave.ca",
    premium: true,
    notificationBannerImage: "img/service_banners/crave_banner.webp",
    iconUrl: "/img/service_logos/crave.svg",
    popularity: 0
  }, {
    domains: [".viki."],
    serverName: Wr.VIKI,
    name: kr.VIKI,
    homepage: "https://www.viki.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/viki_banner.webp",
    iconUrl: "/img/service_logos/viki.svg",
    popularity: 0
  }, {
    domains: [".spotify."],
    serverName: Wr.SPOTIFY,
    name: kr.SPOTIFY,
    homepage: "https://open.spotify.com/",
    premium: false,
    iconUrl: "/img/service_logos/spotify.svg",
    popularity: 0
  }, {
    domains: [".zee5."],
    serverName: Wr.ZEE5,
    name: kr.ZEE5,
    homepage: "https://www.zee5.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/zee5_banner.webp",
    iconUrl: "/img/service_logos/zee5.svg",
    popularity: 0
  }, {
    domains: [".sonyliv."],
    serverName: Wr.SONY_LIV,
    name: kr.SONY_LIV,
    homepage: "https://www.sonyliv.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/sonyliv_banner.webp",
    iconUrl: "/img/service_logos/sonyliv.svg",
    popularity: 0
  }, {
    domains: [".shudder."],
    serverName: Wr.SHUDDER,
    name: kr.SHUDDER,
    homepage: "https://watch.shudder.com",
    premium: true,
    notificationBannerImage: "img/service_banners/shudder_banner.webp",
    iconUrl: "img/service_logos/shudder.svg",
    popularity: 0
  }, {
    domains: [".fox."],
    serverName: Wr.FOX_ONE,
    name: kr.FOX_ONE,
    homepage: "https://www.fox.com",
    premium: true,
    notificationBannerImage: "img/service_banners/foxone_banner.webp",
    iconUrl: "img/service_logos/foxone.svg",
    popularity: 0
  }, {
    domains: [".willow."],
    serverName: Wr.WILLOW,
    name: kr.WILLOW,
    homepage: "https://www.willow.tv/",
    premium: true,
    iconUrl: "/img/service_logos/willow.svg",
    notificationBannerImage: "img/service_banners/willow_banner.webp",
    popularity: 0
  }, {
    domains: [".fancode."],
    serverName: Wr.FANCODE,
    name: kr.FANCODE,
    homepage: "https://www.fancode.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/fancode_banner.webp",
    iconUrl: "/img/service_logos/fancode.svg",
    popularity: 0
  }, {
    domains: [".canalplus."],
    serverName: Wr.CANALPLUS,
    name: kr.CANALPLUS,
    homepage: "https://www.canalplus.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/canalplus_banner.webp",
    iconUrl: "/img/service_logos/canalplus.svg",
    popularity: 0,
    disabled: false
  }, {
    domains: ["shahid."],
    serverName: Wr.SHAHID,
    name: kr.SHAHID,
    homepage: "https://shahid.mbc.net/",
    premium: true,
    notificationBannerImage: "img/service_banners/shahid_banner.webp",
    iconUrl: "/img/service_logos/shahid.svg",
    popularity: 0
  }, {
    domains: [".viu."],
    serverName: Wr.VIU,
    name: kr.VIU,
    homepage: "https://www.viu.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/viu_banner.webp",
    iconUrl: "/img/service_logos/viu.svg",
    popularity: 0
  }, {
    domains: [".vidio."],
    serverName: Wr.VIDIO,
    name: kr.VIDIO,
    homepage: "https://www.vidio.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/vidio_banner.webp",
    iconUrl: "/img/service_logos/vidio.png",
    popularity: 0
  }, {
    domains: [".nba."],
    serverName: Wr.LEAGUE_PASS,
    name: kr.LEAGUE_PASS,
    homepage: "https://nba.com",
    premium: true,
    notificationBannerImage: "img/service_banners/leaguepass_banner.webp",
    sports: ["nba"],
    iconUrl: "/img/service_logos/leaguepass.svg",
    popularity: 0
  }, {
    domains: ["vix.com"],
    serverName: Wr.VIX,
    name: kr.VIX,
    homepage: "https://vix.com/",
    premium: true,
    notificationBannerImage: "img/service_banners/vix_banner.webp",
    iconUrl: "/img/service_logos/vix.svg",
    popularity: 0
  }, {
    domains: [".unext."],
    serverName: Wr.UNEXT,
    name: kr.UNEXT,
    homepage: "https://video.unext.jp/",
    premium: true,
    notificationBannerImage: "img/service_banners/unext_banner.webp",
    iconUrl: "/img/service_logos/unext.svg",
    popularity: 0
  }, {
    domains: [".hulu.jp"],
    serverName: Wr.HULU_JP,
    name: kr.HULU_JP,
    homepage: "https://www.hulu.jp/",
    premium: true,
    notificationBannerImage: "img/service_banners/hulujp_banner.webp",
    iconUrl: "/img/service_logos/hulujp.svg",
    popularity: 0
  }, {
    domains: [".showtime."],
    serverName: Wr.SHOWTIME,
    disabled: true,
    premium: true,
    iconUrl: "",
    popularity: 0
  }, {
    domains: [".amcplus."],
    serverName: Wr.AMC_PLUS,
    disabled: true,
    premium: true,
    iconUrl: "",
    popularity: 0
  }, {
    domains: [".funimation."],
    serverName: Wr.FUNIMATION,
    name: kr.FUNIMATION,
    disabled: true,
    premium: true,
    iconUrl: "",
    popularity: 0
  }, {
    domains: [".starplus."],
    serverName: Wr.STAR_PLUS,
    name: kr.STAR_PLUS,
    homepage: "https://www.starplus.com/",
    premium: true,
    disabled: true,
    notificationBannerImage: "img/service_banners/starplus_banner.webp",
    iconUrl: "/img/service_logos/starplus.svg",
    popularity: 0
  }, {
    domains: [".jiocinema."],
    serverName: Wr.JIO_CINEMA,
    name: kr.JIO_CINEMA,
    homepage: "https://www.jiocinema.com",
    premium: true,
    notificationBannerImage: "img/service_banners/jiocinema_banner.webp",
    disabled: true,
    iconUrl: "/img/service_logos/jiocinema.svg",
    popularity: 0
  }, {
    domains: [".dazn."],
    serverName: Wr.DAZN,
    name: kr.DAZN,
    homepage: "https://dazn.com",
    premium: true,
    iconUrl: "/img/service_logos/dazn.svg",
    popularity: 0,
    notificationBannerImage: "img/service_banners/dazn_banner.webp"
  }, {
    domains: [".miguvideo."],
    serverName: Wr.MIGU,
    name: kr.MIGU,
    homepage: "https://miguvideo.com",
    premium: true,
    notificationBannerImage: "img/service_banners/migu_banner.webp",
    iconUrl: "/img/service_logos/migu.svg",
    popularity: 0
  }, {
    domains: ["f1tv.formula1.com"],
    serverName: Wr.F1_TV,
    name: kr.F1_TV,
    homepage: "https://f1tv.formula1.com",
    premium: true,
    notificationBannerImage: "img/service_banners/f1tv_banner.webp",
    iconUrl: "/img/service_logos/f1tv.svg",
    popularity: 0
  }];
  const gu = vu.filter(n => !n.disabled);
  const mu = gu.flatMap(n => n.domains);
  const bu = gu.filter(n => {
    return n.notificationBannerImage || n.sports?.length;
  });
  bu.flatMap(n => n.domains);
  gu.filter(n => n.premium).map(n => n.serverName);
  var wu;
  var yu;
  (function (n) {
    n.BROADCAST = "brodadcast";
    n.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode";
    n.SEND_MESSAGE = "sendMessage";
    n.CONTENT_SCRIPT_READY = "contentScriptReady";
    n.CONTENT_SCRIPT_ERROR = "contentScriptError";
    n.TEARDOWN = "teardown";
    n.GET_SESSION_DATA = "getSessionData";
    n.SET_TYPING = "setTyping";
    n.SET_BUFFERING = "setBuffering";
    n.SET_WATCHING_ADS = "setWatchingAds";
    n.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
    n.SEND_REACTION = "sendReaction";
    n.SEND_GIF = "sendGIF";
    n.WEB_RTC = "webRTC";
    n.EVENT_SUCCESS = "eventSuccess";
    n.SELECT_PROVIDER = "selectProvider";
    n.REPORT_STREAM_POSITION = "reportStreamPosition";
  })(wu ||= {});
  (function (n) {
    n.CREATE_SESSION = "createSession";
    n.SCHEDULE_SESSION = "scheduleSession";
    n.LOBBY_RELAY_SEND_CHAT = "lobbyRelaySendChat";
    n.LOBBY_RELAY_SET_TYPING = "lobbyRelaySetTyping";
    n.LOBBY_RELAY_BIND_JOIN = "lobbyRelayBindJoin";
    n.SELECT_PROVIDER = "selectProvider";
    n.REPORT_STREAM_POSITION = "reportStreamPosition";
    n.RE_INJECT = "reInject";
    n.GET_INIT_DATA = "getInitData";
    n.GET_INIT_USER_SETTINGS = "getInitUserSettings";
    n.IS_CONTENT_SCRIPT_READY = "isContentScriptReady";
    n.IS_VIDEO_READY = "isVideoReady";
    n.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE = "getCustomStartPartyButtonMessage";
    n.CHANGE_FIREBASE_PASSWORD = "changeFirebasePassword";
    n.SET_CHAT_VISIBLE = "setChatVisible";
    n.SET_USER_REACTIONS_DISABLED = "setUserReactionsDisabled";
    n.DISCONNECT = "teardown";
    n.CLOSE_POPUP = "closePopup";
    n.GET_SCHEDULED_EVENTS = "getScheduledEvents";
    n.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents";
    n.GOOGLE_SIGN_IN = "googleSignIn";
    n.EMAIL_SIGN_IN = "emailSignIn";
    n.FORGOT_PASSWORD = "forgotPassword";
    n.EMAIL_SIGN_UP = "emailSignUp";
    n.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn";
    n.CREATE_SCHEDULED_EVENT = "createScheduledEvent";
    n.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent";
    n.SET_USER_STATUS = "SET_USER_STATUS";
    n.SIGN_IN_CREATE = "SIGN_IN_CREATE";
    n.REDIRECT_DATA_SET = "redirectDataSet";
    n.LOAD_REDIRECT_URL_FINISHED = "loadRedirectUrlFinished";
    n.RESET_PASSWORD = "resetPassword";
  })(yu ||= {});
  class Fu {
    constructor(n, e, t) {
      this.sender = n;
      this.target = e;
      this.type = t;
    }
  }
  class ku extends Fu {
    constructor(n, e, t) {
      super(n, e, t);
      this.type = t;
    }
  }
  class Eu extends ku {
    constructor(n, e) {
      super(n, e, yu.GET_INIT_DATA);
    }
  }
  const Cu = ["*://*/*"];
  class xu extends ku {
    constructor(n, e, t) {
      super(n, e, yu.CREATE_SESSION);
      this.data = t;
    }
  }
  class _u extends ku {
    constructor(n, e) {
      super(n, e, yu.DISCONNECT);
    }
  }
  class Su extends Fu {
    constructor(n, e, t) {
      super(n, e, t);
      this.type = t;
    }
  }
  var Bu;
  var Au;
  (function (n) {
    n.JOIN_SESSION = "joinSession";
    n.LEAVE_SESSION = "leaveSession";
    n.ACCEPT_DROPIN = "acceptDropin";
    n.SET_STATUS_TYPE = "setStatusType";
    n.SET_DATA = "setData";
    n.GET_DATA = "getData";
    n.GET_STATUS_TYPE = "getStatusType";
    n.GET_PARTY_STATUS = "getPartyStatus";
    n.GET_TAB_PARTY_SESSION_FOR_POPUP = "getTabPartySessionForPopup";
    n.GET_VIDEO_DATA = "getVideoData";
    n.LOAD_SESSION = "loadSession";
    n.NO_SESSION_DATA = "noSessionData";
    n.ON_NOTIF = "onNotif";
    n.FORWARD_TO_SIDEBAR = "forwardToSidebar";
    n.TEARDOWN = "teardown";
    n.ON_VIDEO_UPDATE = "onVideoUpdate";
    n.SOCKET_LOST_CONNECTION = "socketLostConnection";
    n.REBOOT = "socketReconnect";
    n.LOG_EVENT = "logEvent";
    n.LOG_EXPERIMENT = "logExperiment";
    n.STAY_ALIVE = "stayAlive";
    n.LOAD_CHAT_WINDOW = "loadChatWindow";
    n.RESET_CHAT_WINDOW = "resetChatWindow";
    n.HIDE_CHAT_WINDOW = "hideChatWindow";
    n.SET_USER_PRESENCE = "setUserPresence";
    n.TOGGLE_OPEN_PARTY = "toggleOpenParty";
    n.GET_ACTIVE_PARTY = "getActiveParty";
    n.GET_TAB_ID = "getTabId";
    n.SET_ACTIVE_PARTY = "setActiveParty";
    n.FULLSCREEN_WINDOW = "fullscreenWindow";
    n.MAX_WINDOW = "maxWindow";
    n.GET_EXPERIMENT_FLAG = "getExpFlag";
    n.USER_LIST = "userList";
    n.USER_AUTHENTICATED = "userAuthenticated";
    n.BLOCK_CSP = "blockCSP";
    n.REDIRECT_DATA_SET = "redirectDataSet";
    n.LOAD_NETFLIX_DATA = "loadNetflixData";
    n.TOGGLE_BACKGROUND_TAB = "toggleBackgroundTab";
    n.GET_ALLCHAT_HAS_FOCUS = "getAllchatHasFocus";
    n.SET_REDIRECT_URL = "setRedirectUrl";
    n.GET_REDIRECT_URL = "getRedirectUrl";
    n.SET_POSTHOG_DISTINCT_ID = "setPosthogDistinctId";
    n.POSTHOG_HAS_FEATURE = "posthogHasFeature";
    n.GET_PERM_ID = "getPermId";
    n.GET_VALIDATIONS_FAILURE_INFO = "getValidationsFailureInfo";
    n.UPDATE_USER_SETTINGS = "updateUserSettings";
    n.UPDATE_HANDLE = "updateHandle";
    n.SEND_API_REQUEST = "sendApiRequest";
    n.PARTY_INIT_TIMING = "partyInitTiming";
  })(Bu ||= {});
  (function (n) {
    n.POSTHOG = "posthog";
    n.METIS = "metis";
    n.BOTH = "both";
  })(Au ||= {});
  class ju extends Su {
    constructor(n, e, t, r = Au.BOTH) {
      super(n, e, Bu.LOG_EVENT);
      this.eventPipelineTarget = Au.BOTH;
      this.data = t;
      this.sender = n;
      this.target = e;
      this.eventPipelineTarget = r;
    }
  }
  class Iu extends ku {
    constructor(n, e, t = false) {
      super(n, e, yu.GET_INIT_USER_SETTINGS);
      this.shouldRefresh = t;
      this.data = {
        shouldRefresh: t
      };
    }
  }
  var Tu = t(1869);
  var Ou = {};
  Ou.styleTagTransform = g();
  Ou.setAttributes = h();
  Ou.insert = f().bind(null, "head");
  Ou.domAPI = s();
  Ou.insertStyleElement = p();
  l()(Tu.A, Ou);
  const Ru = Tu.A && Tu.A.locals ? Tu.A.locals : undefined;
  var Mu = t(1011);
  var Uu = {};
  Uu.styleTagTransform = g();
  Uu.setAttributes = h();
  Uu.insert = f().bind(null, "head");
  Uu.domAPI = s();
  Uu.insertStyleElement = p();
  l()(Mu.A, Uu);
  const Lu = Mu.A && Mu.A.locals ? Mu.A.locals : undefined;
  const Pu = (0, y.createContext)(null);
  const Nu = function ({
    classList: n,
    active: e,
    setActive: t,
    children: r
  }) {
    const i = (0, y.useContext)(Pu);
    const o = (0, y.useRef)(null);
    n = (n = n ?? []).map(n => Lu[n]);
    (function (n, e, t = () => null) {
      function r(r) {
        var i;
        var u;
        if (((i = n == null ? undefined : n.current) === null || i === undefined ? undefined : i.contains(r.target)) && !((u = e == null ? undefined : e.current) === null || u === undefined ? undefined : u.contains(r.target))) {
          t();
        }
      }
      (0, y.useEffect)(() => {
        document.addEventListener("mouseup", r);
        return () => {
          document.removeEventListener("mouseup", r);
        };
      });
    })(i, o, () => t(false));
    return (0, u.jsx)("div", Object.assign({
      className: Lu.contextMenu + (e ? " " + Lu.active : "") + " " + n.join(" "),
      ref: o
    }, {
      children: r
    }));
  };
  var Hu = t(7142);
  var zu = {};
  zu.styleTagTransform = g();
  zu.setAttributes = h();
  zu.insert = f().bind(null, "head");
  zu.domAPI = s();
  zu.insertStyleElement = p();
  l()(Hu.A, zu);
  const Vu = Hu.A && Hu.A.locals ? Hu.A.locals : undefined;
  const $u = function ({
    children: n,
    clickHandler: e,
    color: t
  }) {
    return (0, u.jsx)("div", Object.assign({
      onClick: e,
      className: Vu.contextMenuOption,
      style: {
        color: t ?? "var(--base-white)"
      }
    }, {
      children: n
    }));
  };
  const Gu = function ({
    margin: n = "8px 0"
  }) {
    return <div style={{
      borderBottom: "1px solid var(--black-15)",
      margin: n
    }} />;
  };
  var Wu = t(1811);
  var Ku = {};
  Ku.styleTagTransform = g();
  Ku.setAttributes = h();
  Ku.insert = f().bind(null, "head");
  Ku.domAPI = s();
  Ku.insertStyleElement = p();
  l()(Wu.A, Ku);
  const Zu = Wu.A && Wu.A.locals ? Wu.A.locals : undefined;
  class qu extends ku {
    constructor(n, e, t) {
      super(n, e, yu.SET_USER_STATUS);
      this.data = t;
    }
  }
  const Qu = ["Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg"];
  const Yu = ["General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg"];
  const Ju = {
    General: ["Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg"],
    Christmas: ["angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg"],
    Halloween: ["bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg"],
    Thanksgiving: ["acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg"]
  };
  function Xu(n) {
    if (n) {
      return n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\r\n]{3,}/gm, "\n\n").replace(U, `<span style="font-size: ${function (n) {
        let e = 16;
        const t = n.replace(U, "").replace(/[\uFE0F]/g, "");
        const r = ((n || "").match(U) || []).length;
        if (t.length === 0 && r <= 3) {
          e = 32;
        }
        return e;
      }(n)}px">$&</span>`);
    } else {
      return n;
    }
  }
  var no;
  (function (n) {
    n.SET_USER_LIST = "setUserList";
    n.SET_CONNECTION_ID = "setConnectionId";
    n.LOAD_INIT_DATA = "loadInitData";
    n.SET_PAGE_TITLE = "setPageTitle";
    n.ADD_GIF_MESSAGE = "addGifMessage";
    n.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady";
    n.RESET_VIEW = "resetView";
    n.HIDE_CHAT = "hideChat";
    n.ON_UPDATE_SETTINGS = "onUpdateSettings";
    n.PREVIEW_REACTION = "previewReaction";
    n.UPDATE_SETTINGS = "updateSettings";
    n.UPDATE_ACTIONS_STATE = "updateActionsState";
    n.GO_NEXT_EPISODE = "goNextEpisode";
    n.SET_REACTIONS_ACTIVE = "setReactionsActive";
    n.ON_FOCUS = "onSidebarFocus";
    n.SET_USER_ICON_URL = "setUserIconUrl";
    n.SET_USER_ICON_FRAME_URL = "setUserIconFrameUrl";
    n.ADD_MESSAGE = "addMessage";
    n.CLEAR_MESSAGES = "clearMessages";
    n.SET_PRESENCE_MESSAGE = "setPresenceMessage";
    n.ON_PAGE_CLICK = "onPageClick";
    n.ON_PURCHASE = "onPurchase";
    n.DISPLAY_MODAL = "displayModal";
    n.OPEN_TAB = "openTab";
    n.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate";
    n.ON_WEB_RTC = "onWebRTC";
    n.SHARE_SHEET = "shareSheet";
    n.TRACK_DATA = "trackData";
    n.RESET_CHAT_WINDOW = "resetChatWindow";
    n.RECEIVED_MESSAGE = "receivedMessage";
  })(no ||= {});
  class eo {
    constructor(n) {
      this.vn = n;
      this.gn = [];
      this.mn = 0;
      this.bn = document.title;
      this.wn = 0;
      this.yn = new Map();
      this.Fn = new Map();
      this.kn = new Map();
      this.En = [];
      this.Cn = [];
      this.xn = "";
      this._n = "";
      L("Message Controller");
    }
    Sn(n, e, t, r) {
      return jQuery(`\n            <div class="msg-container ${!r && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${r ? `<img src="${Xu(n)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-txt message${t.isSystemMessage ? "-system" : "-txt"}">\n                    ${r ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""}\n                    <p data-tp-id="chat_history_container-message">${Xu(t.body).trim()}</p>\n                </div>\n            </div>\n          `);
    }
    Bn(n, e, t, r) {
      const i = 200 / (t.gifObject.media.full.dims[0] / t.gifObject.media.full.dims[1]);
      const u = 200 / (t.gifObject.media.fullMobile.dims[0] / t.gifObject.media.fullMobile.dims[1]);
      const o = this.vn.shouldUseVideoGIF();
      return jQuery(`\n            <div class="msg-container ${!r && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${r ? `<img src="${Xu(n)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${r ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""}  \n            ${o ? `<video src="${Xu(t.gifObject.media.full.url)}"  height="${i}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Xu(t.gifObject.media.fullMobile.url)}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`}     \n                </div>\n            </div>\n          `);
    }
    An(n, e, t) {
      return jQuery(`\n            <div class="msg ${!t && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    ${t ? `<img src="${Xu(n)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                </div>\n                <div class="message${e.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Xu(e.body).trim()}</p>\n                </div>\n            </div>\n        `);
    }
    jn(n, e, t) {
      const r = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]);
      const i = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]);
      const u = this.vn.shouldUseVideoGIF();
      return jQuery(`\n            <div class="msg-container ${!t && "tp-msg-combined"}-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${t ? `<img src="${Xu(n)}" data-tp-id="chat_history_container-user_icon"/>` : ""}\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${u ? `<video src="${Xu(e.gifObject.media.full.url)}" data-tp-id="chat_history_container-gif" height="${r}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>` : `<img src="${Xu(e.gifObject.media.fullMobile.url)}" data-tp-id="chat_history_container-gif" height="${i}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`}\n                </div>\n            </div>\n          `);
    }
    In(n, e, t, r, i) {
      n.appendTo(jQuery("#chat-history"));
      const u = n[0];
      u.Tn = e.permId;
      u.On = t;
      u.Rn = r;
      u.Mn = e;
      u.Un = i;
    }
    reloadMessages() {
      this.vn.queueMessageForFrame(no.CLEAR_MESSAGES, "");
      for (const n of this.gn) {
        this.vn.queueMessageForFrame(no.ADD_MESSAGE, {
          originalMessage: n,
          userIcon: this.getUserIconURL(n.permId, n.userIcon),
          userNickname: this.getUserNickname(n.permId, n.userNickname),
          userIconFrame: this.getUserIconFrameURL(n.permId, n.userIconFrame)
        });
      }
    }
    Ln(n, e) {
      if (Math.abs(n.timestamp - e.timestamp) > 60000) {
        return false;
      }
      if (n.permId !== e.permId) {
        return false;
      }
      if ("isSystemMessage" in e && e.isSystemMessage && (e.body.includes("joined") || e.body.includes("left"))) {
        return false;
      }
      if ("gifObject" in n) {
        if ("isSystemMessage" in e && e.isSystemMessage) {
          return false;
        }
      } else {
        if (n.isSystemMessage && (n.body.includes("joined") || n.body.includes("left"))) {
          return false;
        }
        if ("gifObject" in e) {
          if (n.isSystemMessage) {
            return false;
          }
        } else if (n.isSystemMessage !== e.isSystemMessage) {
          return false;
        }
      }
      return true;
    }
    addMessage(n, e, t) {
      if (n.messageId && this.gn.some(e => e.messageId === n.messageId)) {
        return;
      }
      if (t === undefined) {
        t = this.gn.length;
      }
      if (n.isSystemMessage && n.body === "left" && (console.log("trying to add left message"), !n.userIcon && !this.yn.has(n.permId))) {
        return;
      }
      if (t === 0 && n.isSystemMessage && n.body.includes("joined")) {
        return;
      }
      if (e && n.isSystemMessage && n.body.indexOf("updated their user icon") > -1) {
        if (n.userIcon) {
          this.setUserIcon(n.permId, n.userIcon);
        }
        if (n.userNickname) {
          this.setUserNickname(n.permId, n.userNickname);
        }
      }
      const r = this.gn.slice(-1).pop();
      const i = r === undefined || !(t > 0) || !this.Ln(r, n);
      this.gn.push(n);
      const u = Object.assign({}, n);
      const o = this.getUserIconURL(u.permId, u.userIcon);
      const l = this.getUserNickname(u.permId, u.userNickname);
      const a = this.getUserIconFrameURL(u.permId, u.userIconFrame);
      this.vn.queueMessageForFrame(no.ADD_MESSAGE, {
        originalMessage: u,
        userIcon: o,
        userNickname: l,
        userIconFrame: a
      });
      const s = l === "" ? this.An(o, u, i) : this.Sn(o, l, u, i);
      this.In(s, u, o, l, i);
      this.scrollToBottom();
      this.Pn();
    }
    addGif(n, e) {
      if (n.messageId && this.gn.some(e => e.messageId === n.messageId)) {
        return;
      }
      if (e === undefined) {
        e = this.gn.length;
      }
      const t = this.gn.slice(-1).pop();
      const r = t === undefined || !(e > 0) || !this.Ln(t, n);
      this.gn.push(n);
      const i = n.userIcon ? this.getUserIconURL(n.permId, n.userIcon) : this.getUserIconURL(n.permId);
      const u = n.userNickname ? this.getUserNickname(n.permId, n.userNickname) : "";
      const o = this.getUserIconFrameURL(n.permId, n.userIconFrame);
      this.vn.queueMessageForFrame(no.ADD_MESSAGE, {
        originalMessage: n,
        userIcon: i,
        userNickname: u,
        userIconFrame: o
      });
      const l = u === "" ? this.jn(i, n, r) : this.Bn(i, u, n, r);
      l[0].Nn = true;
      this.In(l, n, i, u, r);
      xr(100)().then(this.scrollToBottom.bind(this));
      this.Pn();
    }
    scrollToBottom() {
      jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
    }
    clearUnreadCount() {
      if (this.mn > 0) {
        this.mn = 0;
        document.title = this.bn;
      }
    }
    Pn() {
      this.mn += 1;
      this.wn += 1;
      if (!document.hasFocus()) {
        document.title = "(" + String(this.mn) + ") " + this.bn;
      }
    }
    getUserIconURL(n, e = "") {
      if (n && this.yn.has(n)) {
        return this.yn.get(n);
      }
      const t = eo.parseIconSrc(e);
      const r = t !== undefined ? t : this.Hn();
      if (n) {
        this.yn.set(n, r);
      }
      this.Cn.push(r);
      return r;
    }
    static parseIconSrc(n) {
      if (n.includes("/profile-images/")) {
        return n;
      }
      const e = n.includes("?newIconUrl=") ? n.split("?newIconUrl=")[1] : n;
      const t = n.includes("?newIconUrl=") ? n.split("?newIconUrl=")[0] : n;
      if (Yu.includes(e)) {
        return chrome.runtime.getURL("img/icons/" + n);
      } else if (Qu.includes(t)) {
        return chrome.runtime.getURL("img/icons/General/" + n);
      } else {
        return undefined;
      }
    }
    static getFullIconURL(n) {
      const e = eo.parseIconSrc(n);
      if (e == null ? undefined : e.includes("/profile-images/")) {
        return _ + e;
      } else {
        return e;
      }
    }
    getUserIconFrameURL(n, e = "") {
      const t = n ? this.Fn.get(n) : undefined;
      if (t !== undefined) {
        return t;
      } else {
        if (n && e) {
          this.Fn.set(n, e);
        }
        return e;
      }
    }
    setUserIconFrameForUser(n, e = "") {
      if (n) {
        this.Fn.set(n, e);
      }
      return e;
    }
    getUserNickname(n, e = "") {
      if (!this.kn.has(n)) {
        this.kn.set(n, e);
        this.En.push(e);
      }
      return Xu(this.kn.get(n));
    }
    Hn() {
      let n = chrome.runtime.getURL("img/icons/General/" + Qu[Math.floor(Math.random() * Qu.length)]);
      if (this.Cn.length < Ju.General.length) {
        while (this.Cn.includes(n)) {
          n = chrome.runtime.getURL("img/icons/General/" + Qu[Math.floor(Math.random() * Qu.length)]);
        }
      }
      return n;
    }
    zn(n) {
      const e = n[0];
      const t = e.Tn;
      let r = e.On;
      if (t && this.getUserIconURL(t) !== r) {
        r = this.getUserIconURL(t);
        n.find("img").attr("src", r);
        e.On = r;
      }
      const i = e.Rn;
      if (t && r) {
        const u = this.getUserNickname(t);
        if (u !== i) {
          const i = e.Mn;
          const o = e.Un;
          let l;
          if (e.Nn && i && "gifObject" in i && o) {
            l = u == "" ? this.jn(r, i, o) : this.Bn(r, u, i, o);
          }
          if (!e.Nn && i && !("gifObject" in i) && o) {
            l = u == "" ? this.An(r, i, o) : this.Sn(r, u, i, o);
          }
          if (l) {
            n.replaceWith(l);
            const e = l[0];
            e.Tn = t;
            e.On = r;
            e.Rn = u;
            e.Mn = i;
            e.Un = o;
          }
        }
      }
    }
    setUserIconUrl(n) {
      this.xn = n;
      this.vn.queueMessageForFrame(no.SET_USER_ICON_URL, n);
    }
    setUserIconFrameUrl(n) {
      this._n = n;
      this.vn.queueMessageForFrame(no.SET_USER_ICON_FRAME_URL, n);
    }
    renderSidebar() {
      jQuery("#user-icon img").attr("src", this.xn);
      jQuery(".user-icon img").attr("src", this.xn);
      const n = jQuery(".msg");
      for (let e = 0; e < n.length; e++) {
        this.zn(jQuery(n[e]));
      }
      const e = jQuery(".msg-container");
      for (let n = 0; n < e.length; n++) {
        this.zn(jQuery(e[n]));
      }
      if (this.vn.isChatFrameActive()) {
        this.reloadMessages();
      }
    }
    Vn(n) {
      let e = null;
      if (n) {
        if (n.includes("/profile-images/")) {
          return n;
        }
        if (n.includes("?newIconUrl=")) {
          const t = n.split("?newIconUrl=");
          const r = t[1];
          const i = t[0];
          if (Yu.includes(r)) {
            e = chrome.runtime.getURL(`img/icons/${r}`);
          } else if (Qu.includes(i)) {
            e = chrome.runtime.getURL(`img/icons/General/${i}`);
          }
        } else if (Yu.includes(n)) {
          e = chrome.runtime.getURL(`img/icons/${n}`);
        } else if (Qu.includes(n)) {
          e = chrome.runtime.getURL(`img/icons/General/${n}`);
        }
      }
      if (e === null) {
        let n = Ju.General.filter(n => !this.Cn.includes(n));
        if (n.length === 0) {
          n = Ju.General;
        }
        const t = n[Math.floor(Math.random() * n.length)];
        e = chrome.runtime.getURL(`/img/icons/General/${t}`);
      }
      return e;
    }
    setUserIcon(n, e) {
      const t = this.Vn(e);
      this.yn.set(n, t);
      this.Cn.push(t);
      this.renderSidebar();
    }
    setUserNickname(n, e) {
      const t = Xu(e);
      this.kn.set(n, t);
      this.En.push(t);
      this.renderSidebar();
    }
    updateUserData(n, e, t, r) {
      const i = this.Vn(e);
      this.yn.set(n, i);
      this.setUserIconFrameForUser(n, r);
      this.Cn.push(i);
      this.kn.set(n, t);
      this.En.push(t);
      this.renderSidebar();
    }
    addYoutubePromo() {
      jQuery(`\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL("img/youtube_promo.jpg")}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `).prependTo(jQuery("#chat-history"));
    }
    addReviewMessage() {
      jQuery("\n          <div class=\"msg-container\">\n          <div class=\"msg-txt message-system\" style=\"width:100%\">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id=\"reviewLink\" href=\"https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews\" style=\"display:inline;color:red;text-decoration:underline;\" target=\"none\">here!</a>\n          </p>\n          </div>\n          </div>\n          ").appendTo(jQuery("#chat-history"));
      const n = new ju(E, F, {
        name: "review-shown",
        action: {
          description: "review was shown on chrome",
          reason: "review was shown."
        }
      });
      N.nn(n);
      const e = {
        eventType: "review-shown-chrome",
        sessionId: this.vn.getSessionId()
      };
      const t = new ju(E, F, e);
      N.nn(t);
      jQuery("#reviewLink").click(() => {
        chrome.storage.local.set({
          reviewClicked: true
        });
        const n = new ju(E, F, {
          name: "review-clicked",
          action: {
            description: "review was clicked on chrome",
            reason: "review was clicked."
          }
        });
        N.nn(n);
        const e = {
          eventType: "review-clicked-chrome",
          sessionId: this.vn.getSessionId()
        };
        const t = new ju(E, F, e);
        N.nn(t);
      });
    }
    getMessages(n = false) {
      if (n) {
        return this.gn.filter(n => n.isSystemMessage);
      } else {
        return this.gn;
      }
    }
  }
  const _Component5 = function ({
    userData: n,
    handleSignOut: e,
    handleSignInButton: t
  }) {
    if (!n) {
      return <div>{(0, u.jsx)("div", Object.assign({
          className: Ru.userInfo
        }, {
          children: (0, u.jsx)("div", Object.assign({
            className: Ru.userRow
          }, {
            children: <img className={Ru.tpIcon} src="/img/tp_gradient.svg" />
          }))
        }))}<Gu margin="0 0 8px 0" /></div>;
    }
    const [s, c] = (0, y.useState)(false);
    const [f, d] = (0, y.useState)(false);
    const h = n => {
      d(false);
      N.nn(new qu(k, F, {
        status: n
      }));
    };
    return <div>{n.signedIn && (0, u.jsxs)("div", Object.assign({
        className: Ru.userInfo
      }, {
        children: [(0, u.jsxs)("div", Object.assign({
          className: Ru.userRow
        }, {
          children: [<img className={Ru.userIcon} alt="User icon" src={eo.getFullIconURL(n.userSettings?.userIcon)} />, (0, u.jsxs)("div", Object.assign({
            className: Ru.userName
          }, {
            children: [<div>{n.userSettings.userNickname ?? n.currentUser?.displayName}{n.has_premium && <u.Fragment>{(0, u.jsxs)("span", Object.assign({
                  className: Ru.premiumText
                }, {
                  children: [" ", "★", <span> Premium Member</span>]
                }))}</u.Fragment>}</div>, (0, u.jsxs)("div", Object.assign({
              className: Ru.userStatusHolder
            }, {
              children: [" ", n.currentUser?.email]
            })), !n.has_premium && n.currentUser?.uid && (0, u.jsx)("div", Object.assign({
              onClick: () => {
                chrome.tabs.create({
                  url: `${M}?ref=popup_upgrade_label`
                });
              }
            }, {
              children: "★ Upgrade To Premium"
            }))]
          })), (0, u.jsxs)(Nu, Object.assign({
            classList: ["activityContextMenu"],
            active: f,
            setActive: d
          }, {
            children: [(0, u.jsx)($u, Object.assign({
              clickHandler: () => {
                h(3);
              }
            }, {
              children: (0, u.jsxs)("div", Object.assign({
                className: Ru.statusOptionRow
              }, {
                children: [<div className={Ru.statusBubble + " " + Ru.online} />, " Online"]
              }))
            })), (0, u.jsx)($u, Object.assign({
              clickHandler: () => {
                h(2);
              }
            }, {
              children: (0, u.jsxs)("div", Object.assign({
                className: Ru.statusOptionRow
              }, {
                children: [<div className={Ru.statusBubble + " " + Ru.away} />, " Away"]
              }))
            })), (0, u.jsx)($u, Object.assign({
              clickHandler: () => {
                h(1);
              }
            }, {
              children: (0, u.jsxs)("div", Object.assign({
                className: Ru.statusOptionRow
              }, {
                children: [<div className={Ru.statusBubble + " " + Ru.offline} />, " Offline"]
              }))
            }))]
          }))]
        })), (0, u.jsxs)("div", Object.assign({
          className: Ru.settings + (s ? " " + Ru.active : "")
        }, {
          children: [(0, u.jsx)("div", Object.assign({
            className: Ru.iconBtn,
            onClick: () => {
              c(!s);
              console.log(s);
            }
          }, {
            children: <img src="/img/icon_setting_active.svg" />
          })), (0, u.jsxs)(Nu, Object.assign({
            active: s,
            setActive: c
          }, {
            children: [(0, u.jsx)($u, Object.assign({
              clickHandler: () => {
                window.open(R);
                c(false);
              }
            }, {
              children: "Manage Account"
            })), (0, u.jsx)($u, Object.assign({
              color: "var(--base-red)",
              clickHandler: () => {
                e();
                c(false);
              }
            }, {
              children: "Sign out"
            }))]
          }))]
        }))]
      }))}{!n.signedIn && (0, u.jsxs)("div", Object.assign({
        className: Ru.userInfo
      }, {
        children: [(0, u.jsx)("div", Object.assign({
          className: Ru.userRow
        }, {
          children: <img className={Ru.tpIcon} src="/img/tp_gradient.svg" />
        })), (0, u.jsx)("button", Object.assign({
          className: `${Zu.button} ${Zu.signIn}`,
          onClick: () => {
            t();
          }
        }, {
          children: "Log In"
        }))]
      }))}<Gu margin="0 0 8px 0" /></div>;
  };
  var ro;
  (function (n) {
    n.GET_AUTH_TOKEN = "getAuthToken";
    n.SIGN_OUT = "signOut";
    n.GET_SIGN_OUT_EPOCH = "getSignOutEpoch";
  })(ro ||= {});
  class io extends Fu {
    constructor(n, e, t) {
      super(n, e, t);
      this.type = t;
    }
  }
  class uo extends io {
    constructor(n, e) {
      super(n, e, ro.SIGN_OUT);
    }
  }
  var oo = t(2586);
  var lo = {};
  lo.styleTagTransform = g();
  lo.setAttributes = h();
  lo.insert = f().bind(null, "head");
  lo.domAPI = s();
  lo.insertStyleElement = p();
  l()(oo.A, lo);
  const ao = oo.A && oo.A.locals ? oo.A.locals : undefined;
  const _Component = function () {
    return (0, u.jsxs)("span", Object.assign({
      className: ao.ellipsesAnim
    }, {
      children: [<span>.</span>, <span>.</span>, <span>.</span>]
    }));
  };
  var co = t(2082);
  var fo = {};
  fo.styleTagTransform = g();
  fo.setAttributes = h();
  fo.insert = f().bind(null, "head");
  fo.domAPI = s();
  fo.insertStyleElement = p();
  l()(co.A, fo);
  const ho = co.A && co.A.locals ? co.A.locals : undefined;
  const Do = function ({
    children: n
  }) {
    return (0, u.jsx)("div", Object.assign({
      className: ho.popupLabel
    }, {
      children: n
    }));
  };
  function po(n, e, t, r) {
    return new (t ||= Promise)(function (i, u) {
      function o(n) {
        try {
          a(r.next(n));
        } catch (n) {
          u(n);
        }
      }
      function l(n) {
        try {
          a(r.throw(n));
        } catch (n) {
          u(n);
        }
      }
      function a(n) {
        var e;
        if (n.done) {
          i(n.value);
        } else {
          (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(o, l);
        }
      }
      a((r = r.apply(n, e || [])).next());
    });
  }
  const vo = new class {
    getItemAsync(n) {
      return po(this, undefined, undefined, function* () {
        const t = yield chrome.storage.local.get(n);
        return t[n] ?? null;
      });
    }
    getItemsAsync(n) {
      return po(this, undefined, undefined, function* () {
        return new Promise((e, t) => {
          chrome.storage.local.get(n, n => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              t(new Error(Du));
            } else {
              e(n);
            }
          });
        });
      });
    }
    getStorageUse() {
      return po(this, undefined, undefined, function* () {
        return new Promise((n, e) => {
          chrome.storage.local.getBytesInUse(null, t => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              e(new Error(Du));
            } else {
              n(t);
            }
          });
        });
      });
    }
    getAllItemsAsync() {
      return po(this, undefined, undefined, function* () {
        return new Promise((n, e) => {
          chrome.storage.local.get(null, t => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              e(new Error(Du));
            } else {
              n(t);
            }
          });
        });
      });
    }
  }();
  Object.freeze(vo);
  const go = vo;
  class mo extends ku {
    constructor(n, e) {
      super(n, e, yu.IS_CONTENT_SCRIPT_READY);
    }
  }
  class bo extends Su {
    constructor(n, e, t) {
      super(n, e, Bu.SET_REDIRECT_URL);
      this.data = t;
    }
  }
  class wo extends Su {
    constructor(n, e, t) {
      super(n, e, Bu.GET_TAB_PARTY_SESSION_FOR_POPUP);
      this.data = t;
    }
  }
  class yo extends ku {
    constructor(n, e, t) {
      super(n, e, yu.SIGN_IN_CREATE);
      this.data = t;
    }
  }
  var Fo = t(7187);
  var ko = {};
  ko.styleTagTransform = g();
  ko.setAttributes = h();
  ko.insert = f().bind(null, "head");
  ko.domAPI = s();
  ko.insertStyleElement = p();
  l()(Fo.A, ko);
  const Eo = Fo.A && Fo.A.locals ? Fo.A.locals : undefined;
  const Co = function ({
    children: n
  }) {
    return (0, u.jsx)("div", Object.assign({
      className: Eo.sectionHeader
    }, {
      children: n
    }));
  };
  function _Component4(n) {
    return <div><Co><span>{n.isPremiumService() ? `Sign Up To Watch ${n.extensionTab.serviceName}` : "Sign Up For Teleparty"}</span></Co><span>Welcome to Teleparty! Please sign in to start watching with friends.</span>{(0, u.jsx)("button", Object.assign({
        className: `${Zu.button} ${Zu.gradient}`,
        onClick: () => {
          window.open(`${x}/signup?ref=close`);
          if (!n.isPremiumService()) {
            N.nn(new yo(k, F, {
              action: "StartParty",
              data: {
                createSettings: {
                  controlLock: n.controlLock,
                  reactionsDisabled: n.reactionsDisabled
                },
                extensionTabData: n.extensionTab
              }
            }));
          }
        }
      }, {
        children: <span>Sign Up</span>
      }))}{!n.isPremiumService() && (0, u.jsx)("div", Object.assign({
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }, {
        children: (0, u.jsx)("span", Object.assign({
          onClick: () => n.setWantsToSignIn(false),
          style: {
            textDecoration: "underline",
            color: "lightgray",
            cursor: "pointer"
          }
        }, {
          children: "Continue as Guest"
        }))
      }))}</div>;
  }
  function _o(n) {
    const e = vu.filter(e => {
      return n.unavailableServices.has(e.name ?? "") || n.unavailableServices.has(e.serverName ?? "");
    }).sort((n, e) => e.popularity - n.popularity);
    const t = vu.filter(n => !n.disabled && !n.premium && n.homepage && !e.includes(n)).sort((n, e) => e.popularity - n.popularity);
    const r = vu.filter(n => !n.disabled && n.premium && n.homepage && !e.includes(n)).sort((n, e) => e.popularity - n.popularity);
    const i = t => (0, u.jsx)("div", Object.assign({
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 96px)",
        columnGap: "8px",
        rowGap: "0px"
      }
    }, {
      children: t.map(t => {
        return (0, u.jsx)("button", Object.assign({
          className: `${Zu.button} ${Zu.tpTile} ${e.includes(t) ? Zu.tpTileUnavailable : t.premium ? Zu.tpTilePremium : Zu.tpTileNonPremium}`,
          onClick: () => n.onServiceClick(t.serverName),
          "aria-label": t.name ?? t.serverName,
          title: t.name ?? t.serverName
        }, {
          children: <img src={t.iconUrl} alt={t.name ?? t.serverName} />
        }), t.serverName);
      })
    }));
    return <div><Do>To use the extension, please select one of the following services below.</Do>{t.length > 0 && <u.Fragment>{(0, u.jsx)("p", Object.assign({
          style: {
            fontSize: "14px"
          }
        }, {
          children: "Free services"
        }))}{i(t)}</u.Fragment>}{r.length > 0 && <u.Fragment>{(0, u.jsx)("p", Object.assign({
          style: {
            fontSize: "14px",
            fontWeight: 500,
            background: "linear-gradient(180deg, #FFAC0C 0%, #FFE5B1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }
        }, {
          children: "★ Premium Services"
        }))}{i(r)}</u.Fragment>}{e.length > 0 && <u.Fragment>{(0, u.jsx)("p", Object.assign({
          style: {
            fontSize: "14px",
            color: "#787878"
          }
        }, {
          children: "Under maintenance – We’ll restore support soon."
        }))}{i(e)}</u.Fragment>}</div>;
  }
  const So = function ({
    learnMoreUrl: n,
    canDismissError: e,
    onDismissError: t,
    children: r
  }) {
    return <div>{(0, u.jsx)("div", Object.assign({
        style: {
          fontSize: "14px"
        }
      }, {
        children: r
      }))}{n && (0, u.jsx)("button", Object.assign({
        className: `${Zu.button} ${Zu.gradient}`,
        onClick: () => {
          chrome.tabs.create({
            url: n
          });
        }
      }, {
        children: "Learn more"
      }))}{e && (0, u.jsx)("button", Object.assign({
        className: `${Zu.button} ${Zu.outline}`,
        onClick: t
      }, {
        children: "Dismiss"
      }))}</div>;
  };
  function Bo(n) {
    return <div>{(0, u.jsx)(So, Object.assign({
        learnMoreUrl: "",
        canDismissError: n.canDismissError,
        onDismissError: n.onDismissError
      }, {
        children: <u.Fragment>{n.errorMessage}{n.errorMessageUrl && (0, u.jsx)("a", Object.assign({
            href: n.errorMessageUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, {
            children: "Click Here"
          }))}</u.Fragment>
      }))}</div>;
  }
  class Ao extends ku {
    constructor(n, e, t) {
      super(n, e, yu.SET_CHAT_VISIBLE);
      this.data = t;
    }
  }
  var jo = t(8070);
  var Io = {};
  Io.styleTagTransform = g();
  Io.setAttributes = h();
  Io.insert = f().bind(null, "head");
  Io.domAPI = s();
  Io.insertStyleElement = p();
  l()(jo.A, Io);
  const To = jo.A && jo.A.locals ? jo.A.locals : undefined;
  function Oo({
    defaultValue: n = "",
    onChange: e,
    onFocus: t,
    textType: r = "text",
    onKeyPress: i,
    readOnly: o = false,
    placeholder: l = "",
    classList: a = [],
    id: s = ""
  }) {
    a = a.map(n => To[n]);
    return <div><input className={To.textInput + " " + a.join(" ")} type={r} onChange={e} onFocus={t} id={s} onKeyPress={i} readOnly={o} placeholder={l} value={n} /></div>;
  }
  function Ro({
    value: n
  }) {
    const [e, t] = (0, y.useState)(false);
    return (0, u.jsxs)("div", Object.assign({
      className: To.copyRow
    }, {
      children: [<Oo defaultValue={n} readOnly={true} onFocus={n => n.target.select()} />, (0, u.jsxs)("div", Object.assign({
        className: To.copyButton + (e ? " " + To.copied : ""),
        onClick: () => {
          navigator.clipboard.writeText(n);
          t(true);
          setTimeout(() => t(false), 1500);
          const e = new ju(k, F, {
            name: "user_click",
            component: {
              name: "copy_text",
              type: "button",
              origin: "tp"
            },
            message: {
              text: n
            }
          });
          N.nn(e);
        }
      }, {
        children: [<img className={To.copyIcon} src="/img/icon_clipboard_active.svg" />, <img className={To.checkIcon} src="/img/check.svg" />]
      }))]
    }));
  }
  var Mo = t(2691);
  var Uo = {};
  Uo.styleTagTransform = g();
  Uo.setAttributes = h();
  Uo.insert = f().bind(null, "head");
  Uo.domAPI = s();
  Uo.insertStyleElement = p();
  l()(Mo.A, Uo);
  const Lo = Mo.A && Mo.A.locals ? Mo.A.locals : undefined;
  function Po({
    state: n,
    handleToggle: e,
    disabled: t = false
  }) {
    return (0, u.jsxs)("div", Object.assign({
      className: Lo.toggleSwitch + " " + (n ? Lo.on : ""),
      onClick: () => {
        if (!t) {
          e();
        }
      }
    }, {
      children: [<div className={t ? Lo.toggleSwitchBackgroundDisabled : Lo.toggleSwitchBackground} />, <div className={Lo.toggleSwitchInner} />]
    }));
  }
  function No({
    state: n,
    children: e,
    handleToggle: t,
    disabled: r
  }) {
    return (0, u.jsxs)("div", Object.assign({
      className: Lo.labeledToggleSwitch
    }, {
      children: [(0, u.jsx)("span", Object.assign({
        className: Lo.labeledToggleSwitchLabel
      }, {
        children: e
      })), <Po state={n} disabled={r} handleToggle={t} />]
    }));
  }
  var Ho = t(3270);
  var zo = {};
  zo.styleTagTransform = g();
  zo.setAttributes = h();
  zo.insert = f().bind(null, "head");
  zo.domAPI = s();
  zo.insertStyleElement = p();
  l()(Ho.A, zo);
  const Vo = Ho.A && Ho.A.locals ? Ho.A.locals : undefined;
  const $o = function ({
    handleReviewButton: n
  }) {
    return (0, u.jsxs)("div", Object.assign({
      className: Vo.reviewMessage
    }, {
      children: [<Gu />, <p>Enjoying Teleparty? Leave a positive review on the Chrome Store.</p>, (0, u.jsx)("button", Object.assign({
        className: `${Zu.button} ${Zu.gradient}`,
        onClick: n
      }, {
        children: "Leave a review"
      }))]
    }));
  };
  function Go(n) {
    return <div><Co>Party Management</Co>{(0, u.jsx)(No, Object.assign({
        state: n.showChat,
        handleToggle: () => {
          if (n.extensionTab) {
            n.setShowChat(!n.showChat);
            const e = {
              visible: !n.showChat
            };
            const t = new Ao(k, E, e);
            N.sendMessageToTabAsync(t, n.extensionTab.id);
          }
        }
      }, {
        children: "Show Chat Sidebar"
      }))}<Gu /><Do>Share the URL below so others can join the party. The recipient(s) should navigate to this URL and then click on the red <img style={{
          height: "12px",
          verticalAlign: "middle"
        }} src="/img/icon.png" alt="Tp" /> icon to join.</Do><Ro value={n.partyUrl} />{(0, u.jsx)("button", Object.assign({
        className: `${Zu.button} ${Zu.disconnect}`,
        onClick: n.disconnectHandler
      }, {
        children: "Disconnect"
      }))}{(0, u.jsx)("button", Object.assign({
        className: `${Zu.button}`,
        style: {
          padding: "0px",
          marginTop: "5px",
          color: "#b4b4b4",
          fontSize: "12px",
          textDecoration: "underline"
        },
        onClick: () => {
          N.sendMessageToTabAsync({
            sender: k,
            target: E,
            type: "TP_BUG_REPORT_OPEN"
          }, n.extensionTab.id);
        }
      }, {
        children: "Report a problem"
      }))}{n.showReviewMessage && <$o handleReviewButton={n.handleReviewButton} />}</div>;
  }
  var Wo = t(3086);
  var Ko = {};
  Ko.styleTagTransform = g();
  Ko.setAttributes = h();
  Ko.insert = f().bind(null, "head");
  Ko.domAPI = s();
  Ko.insertStyleElement = p();
  l()(Wo.A, Ko);
  const Zo = Wo.A && Wo.A.locals ? Wo.A.locals : undefined;
  const _Component2 = function ({
    children: n
  }) {
    return (0, u.jsx)("div", Object.assign({
      className: Zo.infoLabel
    }, {
      children: n
    }));
  };
  function Qo() {}
  function Yo() {}
  const Jo = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
  const Xo = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
  const nl = {};
  function el(n, e) {
    return ((e || nl).jsx ? Xo : Jo).test(n);
  }
  const tl = /[ \t\n\f\r]/g;
  function rl(n) {
    return n.replace(tl, "") === "";
  }
  class il {
    constructor(n, e, t) {
      this.normal = e;
      this.property = n;
      if (t) {
        this.space = t;
      }
    }
  }
  function ul(n, e) {
    const t = {};
    const r = {};
    for (const e of n) {
      Object.assign(t, e.property);
      Object.assign(r, e.normal);
    }
    return new il(t, r, e);
  }
  function ol(n) {
    return n.toLowerCase();
  }
  il.prototype.normal = {};
  il.prototype.property = {};
  il.prototype.space = undefined;
  class ll {
    constructor(n, e) {
      this.attribute = e;
      this.property = n;
    }
  }
  ll.prototype.attribute = "";
  ll.prototype.booleanish = false;
  ll.prototype.boolean = false;
  ll.prototype.commaOrSpaceSeparated = false;
  ll.prototype.commaSeparated = false;
  ll.prototype.defined = false;
  ll.prototype.mustUseProperty = false;
  ll.prototype.number = false;
  ll.prototype.overloadedBoolean = false;
  ll.prototype.property = "";
  ll.prototype.spaceSeparated = false;
  ll.prototype.space = undefined;
  let al = 0;
  const sl = vl();
  const cl = vl();
  const fl = vl();
  const dl = vl();
  const hl = vl();
  const Dl = vl();
  const pl = vl();
  function vl() {
    return 2 ** ++al;
  }
  const gl = Object.keys(r);
  class ml extends ll {
    constructor(n, e, t, i) {
      let u = -1;
      super(n, e);
      bl(this, "space", i);
      if (typeof t == "number") {
        while (++u < gl.length) {
          const n = gl[u];
          bl(this, gl[u], (t & r[n]) === r[n]);
        }
      }
    }
  }
  function bl(n, e, t) {
    if (t) {
      n[e] = t;
    }
  }
  function wl(n) {
    const e = {};
    const t = {};
    for (const [r, i] of Object.entries(n.properties)) {
      const u = new ml(r, n.transform(n.attributes || {}, r), i, n.space);
      if (n.mustUseProperty && n.mustUseProperty.includes(r)) {
        u.mustUseProperty = true;
      }
      e[r] = u;
      t[ol(r)] = r;
      t[ol(u.attribute)] = r;
    }
    return new il(e, t, n.space);
  }
  ml.prototype.defined = true;
  const yl = wl({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: cl,
      ariaAutoComplete: null,
      ariaBusy: cl,
      ariaChecked: cl,
      ariaColCount: dl,
      ariaColIndex: dl,
      ariaColSpan: dl,
      ariaControls: hl,
      ariaCurrent: null,
      ariaDescribedBy: hl,
      ariaDetails: null,
      ariaDisabled: cl,
      ariaDropEffect: hl,
      ariaErrorMessage: null,
      ariaExpanded: cl,
      ariaFlowTo: hl,
      ariaGrabbed: cl,
      ariaHasPopup: null,
      ariaHidden: cl,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: hl,
      ariaLevel: dl,
      ariaLive: null,
      ariaModal: cl,
      ariaMultiLine: cl,
      ariaMultiSelectable: cl,
      ariaOrientation: null,
      ariaOwns: hl,
      ariaPlaceholder: null,
      ariaPosInSet: dl,
      ariaPressed: cl,
      ariaReadOnly: cl,
      ariaRelevant: null,
      ariaRequired: cl,
      ariaRoleDescription: hl,
      ariaRowCount: dl,
      ariaRowIndex: dl,
      ariaRowSpan: dl,
      ariaSelected: cl,
      ariaSetSize: dl,
      ariaSort: null,
      ariaValueMax: dl,
      ariaValueMin: dl,
      ariaValueNow: dl,
      ariaValueText: null,
      role: null
    },
    transform: (n, e) => e === "role" ? e : "aria-" + e.slice(4).toLowerCase()
  });
  function Fl(n, e) {
    if (e in n) {
      return n[e];
    } else {
      return e;
    }
  }
  function kl(n, e) {
    return Fl(n, e.toLowerCase());
  }
  const El = wl({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Dl,
      acceptCharset: hl,
      accessKey: hl,
      action: null,
      allow: null,
      allowFullScreen: sl,
      allowPaymentRequest: sl,
      allowUserMedia: sl,
      alt: null,
      as: null,
      async: sl,
      autoCapitalize: null,
      autoComplete: hl,
      autoFocus: sl,
      autoPlay: sl,
      blocking: hl,
      capture: null,
      charSet: null,
      checked: sl,
      cite: null,
      className: hl,
      cols: dl,
      colSpan: null,
      content: null,
      contentEditable: cl,
      controls: sl,
      controlsList: hl,
      coords: dl | Dl,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: sl,
      defer: sl,
      dir: null,
      dirName: null,
      disabled: sl,
      download: fl,
      draggable: cl,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: sl,
      formTarget: null,
      headers: hl,
      height: dl,
      hidden: fl,
      high: dl,
      href: null,
      hrefLang: null,
      htmlFor: hl,
      httpEquiv: hl,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: sl,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: sl,
      itemId: null,
      itemProp: hl,
      itemRef: hl,
      itemScope: sl,
      itemType: hl,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: sl,
      low: dl,
      manifest: null,
      max: null,
      maxLength: dl,
      media: null,
      method: null,
      min: null,
      minLength: dl,
      multiple: sl,
      muted: sl,
      name: null,
      nonce: null,
      noModule: sl,
      noValidate: sl,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: sl,
      optimum: dl,
      pattern: null,
      ping: hl,
      placeholder: null,
      playsInline: sl,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: sl,
      referrerPolicy: null,
      rel: hl,
      required: sl,
      reversed: sl,
      rows: dl,
      rowSpan: dl,
      sandbox: hl,
      scope: null,
      scoped: sl,
      seamless: sl,
      selected: sl,
      shadowRootClonable: sl,
      shadowRootDelegatesFocus: sl,
      shadowRootMode: null,
      shape: null,
      size: dl,
      sizes: null,
      slot: null,
      span: dl,
      spellCheck: cl,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: dl,
      step: null,
      style: null,
      tabIndex: dl,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: sl,
      useMap: null,
      value: cl,
      width: dl,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: hl,
      axis: null,
      background: null,
      bgColor: null,
      border: dl,
      borderColor: null,
      bottomMargin: dl,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: sl,
      declare: sl,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: dl,
      leftMargin: dl,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: dl,
      marginWidth: dl,
      noResize: sl,
      noHref: sl,
      noShade: sl,
      noWrap: sl,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: dl,
      rules: null,
      scheme: null,
      scrolling: cl,
      standby: null,
      summary: null,
      text: null,
      topMargin: dl,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: dl,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: sl,
      disableRemotePlayback: sl,
      prefix: null,
      property: null,
      results: dl,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: kl
  });
  const Cl = wl({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: pl,
      accentHeight: dl,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: dl,
      amplitude: dl,
      arabicForm: null,
      ascent: dl,
      attributeName: null,
      attributeType: null,
      azimuth: dl,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: dl,
      by: null,
      calcMode: null,
      capHeight: dl,
      className: hl,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: dl,
      diffuseConstant: dl,
      direction: null,
      display: null,
      dur: null,
      divisor: dl,
      dominantBaseline: null,
      download: sl,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: dl,
      enableBackground: null,
      end: null,
      event: null,
      exponent: dl,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: dl,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Dl,
      g2: Dl,
      glyphName: Dl,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: dl,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: dl,
      horizOriginX: dl,
      horizOriginY: dl,
      id: null,
      ideographic: dl,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: dl,
      k: dl,
      k1: dl,
      k2: dl,
      k3: dl,
      k4: dl,
      kernelMatrix: pl,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: dl,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: dl,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: dl,
      overlineThickness: dl,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: dl,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: hl,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: dl,
      pointsAtY: dl,
      pointsAtZ: dl,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: pl,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: pl,
      rev: pl,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: pl,
      requiredFeatures: pl,
      requiredFonts: pl,
      requiredFormats: pl,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: dl,
      specularExponent: dl,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: dl,
      strikethroughThickness: dl,
      string: null,
      stroke: null,
      strokeDashArray: pl,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: dl,
      strokeOpacity: dl,
      strokeWidth: null,
      style: null,
      surfaceScale: dl,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: pl,
      tabIndex: dl,
      tableValues: null,
      target: null,
      targetX: dl,
      targetY: dl,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: pl,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: dl,
      underlineThickness: dl,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: dl,
      values: null,
      vAlphabetic: dl,
      vMathematical: dl,
      vectorEffect: null,
      vHanging: dl,
      vIdeographic: dl,
      version: null,
      vertAdvY: dl,
      vertOriginX: dl,
      vertOriginY: dl,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: dl,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: Fl
  });
  const xl = wl({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform: (n, e) => "xlink:" + e.slice(5).toLowerCase()
  });
  const _l = wl({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: kl
  });
  const Sl = wl({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform: (n, e) => "xml:" + e.slice(3).toLowerCase()
  });
  const Bl = ul([yl, El, xl, _l, Sl], "html");
  const Al = ul([yl, Cl, xl, _l, Sl], "svg");
  const jl = /[A-Z]/g;
  const Il = /-[a-z]/g;
  const Tl = /^data[-\w.:]+$/i;
  function Ol(n) {
    return "-" + n.toLowerCase();
  }
  function Rl(n) {
    return n.charAt(1).toUpperCase();
  }
  const Ml = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  };
  var Ul = t(5229);
  const Ll = Nl("end");
  const Pl = Nl("start");
  function Nl(n) {
    return function (e) {
      const t = e && e.position && e.position[n] || {};
      if (typeof t.line == "number" && t.line > 0 && typeof t.column == "number" && t.column > 0) {
        return {
          line: t.line,
          column: t.column,
          offset: typeof t.offset == "number" && t.offset > -1 ? t.offset : undefined
        };
      }
    };
  }
  function Hl(n) {
    if (n && typeof n == "object") {
      if ("position" in n || "type" in n) {
        return Vl(n.position);
      } else if ("start" in n || "end" in n) {
        return Vl(n);
      } else if ("line" in n || "column" in n) {
        return zl(n);
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
  function zl(n) {
    return $l(n && n.line) + ":" + $l(n && n.column);
  }
  function Vl(n) {
    return zl(n && n.start) + "-" + zl(n && n.end);
  }
  function $l(n) {
    if (n && typeof n == "number") {
      return n;
    } else {
      return 1;
    }
  }
  class Gl extends Error {
    constructor(n, e, t) {
      super();
      if (typeof e == "string") {
        t = e;
        e = undefined;
      }
      let r = "";
      let i = {};
      let u = false;
      if (e) {
        i = "line" in e && "column" in e || "start" in e && "end" in e ? {
          place: e
        } : "type" in e ? {
          ancestors: [e],
          place: e.position
        } : {
          ...e
        };
      }
      if (typeof n == "string") {
        r = n;
      } else if (!i.cause && n) {
        u = true;
        r = n.message;
        i.cause = n;
      }
      if (!i.ruleId && !i.source && typeof t == "string") {
        const n = t.indexOf(":");
        if (n === -1) {
          i.ruleId = t;
        } else {
          i.source = t.slice(0, n);
          i.ruleId = t.slice(n + 1);
        }
      }
      if (!i.place && i.ancestors && i.ancestors) {
        const n = i.ancestors[i.ancestors.length - 1];
        if (n) {
          i.place = n.position;
        }
      }
      const o = i.place && "start" in i.place ? i.place.start : i.place;
      this.ancestors = i.ancestors || undefined;
      this.cause = i.cause || undefined;
      this.column = o ? o.column : undefined;
      this.fatal = undefined;
      this.file = "";
      this.message = r;
      this.line = o ? o.line : undefined;
      this.name = Hl(i.place) || "1:1";
      this.place = i.place || undefined;
      this.reason = this.message;
      this.ruleId = i.ruleId || undefined;
      this.source = i.source || undefined;
      this.stack = u && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "";
      this.actual = undefined;
      this.expected = undefined;
      this.note = undefined;
      this.url = undefined;
    }
  }
  Gl.prototype.file = "";
  Gl.prototype.name = "";
  Gl.prototype.reason = "";
  Gl.prototype.message = "";
  Gl.prototype.stack = "";
  Gl.prototype.column = undefined;
  Gl.prototype.line = undefined;
  Gl.prototype.ancestors = undefined;
  Gl.prototype.cause = undefined;
  Gl.prototype.fatal = undefined;
  Gl.prototype.place = undefined;
  Gl.prototype.ruleId = undefined;
  Gl.prototype.source = undefined;
  const Wl = {}.hasOwnProperty;
  const Kl = new Map();
  const Zl = /[A-Z]/g;
  const ql = new Set(["table", "tbody", "thead", "tfoot", "tr"]);
  const Ql = new Set(["td", "th"]);
  const Yl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function Jl(n, e) {
    if (!e || e.Fragment === undefined) {
      throw new TypeError("Expected `Fragment` in options");
    }
    const t = e.filePath || undefined;
    let r;
    if (e.development) {
      if (typeof e.jsxDEV != "function") {
        throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      }
      r = function (n, e) {
        return t;
        function t(t, r, i, u) {
          const o = Array.isArray(i.children);
          const l = Pl(t);
          return e(r, i, u, o, {
            columnNumber: l ? l.column - 1 : undefined,
            fileName: n,
            lineNumber: l ? l.line : undefined
          }, undefined);
        }
      }(t, e.jsxDEV);
    } else {
      if (typeof e.jsx != "function") {
        throw new TypeError("Expected `jsx` in production options");
      }
      if (typeof e.jsxs != "function") {
        throw new TypeError("Expected `jsxs` in production options");
      }
      r = function (n, e, t) {
        return r;
        function r(n, r, i, u) {
          const o = Array.isArray(i.children) ? t : e;
          if (u) {
            return o(r, i, u);
          } else {
            return o(r, i);
          }
        }
      }(0, e.jsx, e.jsxs);
    }
    const i = {
      Fragment: e.Fragment,
      ancestors: [],
      components: e.components || {},
      create: r,
      elementAttributeNameCase: e.elementAttributeNameCase || "react",
      evaluater: e.createEvaluater ? e.createEvaluater() : undefined,
      filePath: t,
      ignoreInvalidStyle: e.ignoreInvalidStyle || false,
      passKeys: e.passKeys !== false,
      passNode: e.passNode || false,
      schema: e.space === "svg" ? Al : Bl,
      stylePropertyNameCase: e.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: e.tableCellAlignToStyle !== false
    };
    const u = Xl(i, n, undefined);
    if (u && typeof u != "string") {
      return u;
    } else {
      return i.create(n, i.Fragment, {
        children: u || undefined
      }, undefined);
    }
  }
  function Xl(n, e, t) {
    if (e.type === "element") {
      return function (n, e, t) {
        const r = n.schema;
        let i = r;
        if (e.tagName.toLowerCase() === "svg" && r.space === "html") {
          i = Al;
          n.schema = i;
        }
        n.ancestors.push(e);
        const u = ia(n, e.tagName, false);
        const o = function (n, e) {
          const t = {};
          let r;
          let i;
          for (i in e.properties) {
            if (i !== "children" && Wl.call(e.properties, i)) {
              const u = ra(n, i, e.properties[i]);
              if (u) {
                const [i, o] = u;
                if (n.tableCellAlignToStyle && i === "align" && typeof o == "string" && Ql.has(e.tagName)) {
                  r = o;
                } else {
                  t[i] = o;
                }
              }
            }
          }
          if (r) {
            (t.style ||= {})[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
          }
          return t;
        }(n, e);
        let l = ta(n, e);
        if (ql.has(e.tagName)) {
          l = l.filter(function (n) {
            return typeof n != "string" || !(typeof (e = n) == "object" ? e.type === "text" && rl(e.value) : rl(e));
            var e;
          });
        }
        na(n, o, u, e);
        ea(o, l);
        n.ancestors.pop();
        n.schema = r;
        return n.create(e, u, o, t);
      }(n, e, t);
    } else if (e.type === "mdxFlowExpression" || e.type === "mdxTextExpression") {
      return function (n, e) {
        if (e.data && e.data.estree && n.evaluater) {
          const t = e.data.estree.body[0];
          t.type;
          return n.evaluater.evaluateExpression(t.expression);
        }
        ua(n, e.position);
      }(n, e);
    } else if (e.type === "mdxJsxFlowElement" || e.type === "mdxJsxTextElement") {
      return function (n, e, t) {
        const r = n.schema;
        let i = r;
        if (e.name === "svg" && r.space === "html") {
          i = Al;
          n.schema = i;
        }
        n.ancestors.push(e);
        const u = e.name === null ? n.Fragment : ia(n, e.name, true);
        const o = function (n, e) {
          const t = {};
          for (const r of e.attributes) {
            if (r.type === "mdxJsxExpressionAttribute") {
              if (r.data && r.data.estree && n.evaluater) {
                const e = r.data.estree.body[0];
                Qo(e.type);
                const i = e.expression;
                Qo(i.type);
                const u = i.properties[0];
                Qo(u.type);
                Object.assign(t, n.evaluater.evaluateExpression(u.argument));
              } else {
                ua(n, e.position);
              }
            } else {
              const i = r.name;
              let u;
              if (r.value && typeof r.value == "object") {
                if (r.value.data && r.value.data.estree && n.evaluater) {
                  const e = r.value.data.estree.body[0];
                  Qo(e.type);
                  u = n.evaluater.evaluateExpression(e.expression);
                } else {
                  ua(n, e.position);
                }
              } else {
                u = r.value === null || r.value;
              }
              t[i] = u;
            }
          }
          return t;
        }(n, e);
        const l = ta(n, e);
        na(n, o, u, e);
        ea(o, l);
        n.ancestors.pop();
        n.schema = r;
        return n.create(e, u, o, t);
      }(n, e, t);
    } else if (e.type === "mdxjsEsm") {
      return function (n, e) {
        if (e.data && e.data.estree && n.evaluater) {
          return n.evaluater.evaluateProgram(e.data.estree);
        }
        ua(n, e.position);
      }(n, e);
    } else if (e.type === "root") {
      return function (n, e, t) {
        const r = {};
        ea(r, ta(n, e));
        return n.create(e, n.Fragment, r, t);
      }(n, e, t);
    } else if (e.type === "text") {
      return function (n, e) {
        return e.value;
      }(0, e);
    } else {
      return undefined;
    }
  }
  function na(n, e, t, r) {
    if (typeof t != "string" && t !== n.Fragment && n.passNode) {
      e.node = r;
    }
  }
  function ea(n, e) {
    if (e.length > 0) {
      const t = e.length > 1 ? e : e[0];
      if (t) {
        n.children = t;
      }
    }
  }
  function ta(n, e) {
    const t = [];
    let r = -1;
    const i = n.passKeys ? new Map() : Kl;
    while (++r < e.children.length) {
      const u = e.children[r];
      let o;
      if (n.passKeys) {
        const n = u.type === "element" ? u.tagName : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement" ? u.name : undefined;
        if (n) {
          const e = i.get(n) || 0;
          o = n + "-" + e;
          i.set(n, e + 1);
        }
      }
      const l = Xl(n, u, o);
      if (l !== undefined) {
        t.push(l);
      }
    }
    return t;
  }
  function ra(n, e, t) {
    const r = function (n, e) {
      const t = ol(e);
      let r = e;
      let i = ll;
      if (t in n.normal) {
        return n.property[n.normal[t]];
      }
      if (t.length > 4 && t.slice(0, 4) === "data" && Tl.test(e)) {
        if (e.charAt(4) === "-") {
          const n = e.slice(5).replace(Il, Rl);
          r = "data" + n.charAt(0).toUpperCase() + n.slice(1);
        } else {
          const n = e.slice(4);
          if (!Il.test(n)) {
            let t = n.replace(jl, Ol);
            if (t.charAt(0) !== "-") {
              t = "-" + t;
            }
            e = "data" + t;
          }
        }
        i = ml;
      }
      return new i(r, e);
    }(n.schema, e);
    if (t != null && (typeof t != "number" || !Number.isNaN(t))) {
      if (Array.isArray(t)) {
        t = r.commaSeparated ? function (n, e) {
          const t = e || {};
          return (n[n.length - 1] === "" ? [...n, ""] : n).join((t.padRight ? " " : "") + "," + (t.padLeft === false ? "" : " ")).trim();
        }(t) : t.join(" ").trim();
      }
      if (r.property === "style") {
        let e = typeof t == "object" ? t : function (n, e) {
          try {
            return Ul(e, {
              reactCompat: true
            });
          } catch (e) {
            if (n.ignoreInvalidStyle) {
              return {};
            }
            const t = e;
            const r = new Gl("Cannot parse `style` attribute", {
              ancestors: n.ancestors,
              cause: t,
              ruleId: "style",
              source: "hast-util-to-jsx-runtime"
            });
            r.file = n.filePath || undefined;
            r.url = Yl + "#cannot-parse-style-attribute";
            throw r;
          }
        }(n, String(t));
        if (n.stylePropertyNameCase === "css") {
          e = function (n) {
            const e = {};
            let t;
            for (t in n) {
              if (Wl.call(n, t)) {
                e[oa(t)] = n[t];
              }
            }
            return e;
          }(e);
        }
        return ["style", e];
      }
      return [n.elementAttributeNameCase === "react" && r.space ? Ml[r.property] || r.property : r.attribute, t];
    }
  }
  function ia(n, e, t) {
    let r;
    if (t) {
      if (e.includes(".")) {
        const n = e.split(".");
        let t;
        let i = -1;
        while (++i < n.length) {
          const e = el(n[i]) ? {
            type: "Identifier",
            name: n[i]
          } : {
            type: "Literal",
            value: n[i]
          };
          t = t ? {
            type: "MemberExpression",
            object: t,
            property: e,
            computed: Boolean(i && e.type === "Literal"),
            optional: false
          } : e;
        }
        r = t;
      } else {
        r = el(e) && !/^[a-z]/.test(e) ? {
          type: "Identifier",
          name: e
        } : {
          type: "Literal",
          value: e
        };
      }
    } else {
      r = {
        type: "Literal",
        value: e
      };
    }
    if (r.type === "Literal") {
      const e = r.value;
      if (Wl.call(n.components, e)) {
        return n.components[e];
      } else {
        return e;
      }
    }
    if (n.evaluater) {
      return n.evaluater.evaluateExpression(r);
    }
    ua(n);
  }
  function ua(n, e) {
    const t = new Gl("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: n.ancestors,
      place: e,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    t.file = n.filePath || undefined;
    t.url = Yl + "#cannot-handle-mdx-estrees-without-createevaluater";
    throw t;
  }
  function oa(n) {
    let e = n.replace(Zl, la);
    if (e.slice(0, 3) === "ms-") {
      e = "-" + e;
    }
    return e;
  }
  function la(n) {
    return "-" + n.toLowerCase();
  }
  const aa = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
  };
  const sa = {};
  function ca(n, e, t) {
    if (function (n) {
      return Boolean(n && typeof n == "object");
    }(n)) {
      if ("value" in n) {
        if (n.type !== "html" || t) {
          return n.value;
        } else {
          return "";
        }
      }
      if (e && "alt" in n && n.alt) {
        return n.alt;
      }
      if ("children" in n) {
        return fa(n.children, e, t);
      }
    }
    if (Array.isArray(n)) {
      return fa(n, e, t);
    } else {
      return "";
    }
  }
  function fa(n, e, t) {
    const r = [];
    let i = -1;
    while (++i < n.length) {
      r[i] = ca(n[i], e, t);
    }
    return r.join("");
  }
  function da(n, e, t, r) {
    const i = n.length;
    let u;
    let o = 0;
    e = e < 0 ? -e > i ? 0 : i + e : e > i ? i : e;
    t = t > 0 ? t : 0;
    if (r.length < 10000) {
      u = Array.from(r);
      u.unshift(e, t);
      n.splice(...u);
    } else {
      for (t && n.splice(e, t); o < r.length;) {
        u = r.slice(o, o + 10000);
        u.unshift(e, 0);
        n.splice(...u);
        o += 10000;
        e += 10000;
      }
    }
  }
  function ha(n, e) {
    if (n.length > 0) {
      da(n, n.length, 0, e);
      return n;
    } else {
      return e;
    }
  }
  class Da {
    constructor(n) {
      this.left = n ? [...n] : [];
      this.right = [];
    }
    get(n) {
      if (n < 0 || n >= this.left.length + this.right.length) {
        throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      }
      if (n < this.left.length) {
        return this.left[n];
      } else {
        return this.right[this.right.length - n + this.left.length - 1];
      }
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      this.setCursor(0);
      return this.right.pop();
    }
    slice(n, e) {
      const t = e == null ? Number.POSITIVE_INFINITY : e;
      if (t < this.left.length) {
        return this.left.slice(n, t);
      } else if (n > this.left.length) {
        return this.right.slice(this.right.length - t + this.left.length, this.right.length - n + this.left.length).reverse();
      } else {
        return this.left.slice(n).concat(this.right.slice(this.right.length - t + this.left.length).reverse());
      }
    }
    splice(n, e, t) {
      const r = e || 0;
      this.setCursor(Math.trunc(n));
      const i = this.right.splice(this.right.length - r, Number.POSITIVE_INFINITY);
      if (t) {
        pa(this.left, t);
      }
      return i.reverse();
    }
    pop() {
      this.setCursor(Number.POSITIVE_INFINITY);
      return this.left.pop();
    }
    push(n) {
      this.setCursor(Number.POSITIVE_INFINITY);
      this.left.push(n);
    }
    pushMany(n) {
      this.setCursor(Number.POSITIVE_INFINITY);
      pa(this.left, n);
    }
    unshift(n) {
      this.setCursor(0);
      this.right.push(n);
    }
    unshiftMany(n) {
      this.setCursor(0);
      pa(this.right, n.reverse());
    }
    setCursor(n) {
      if (n !== this.left.length && (!(n > this.left.length) || this.right.length !== 0) && (!(n < 0) || this.left.length !== 0)) {
        if (n < this.left.length) {
          const e = this.left.splice(n, Number.POSITIVE_INFINITY);
          pa(this.right, e.reverse());
        } else {
          const e = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
          pa(this.left, e.reverse());
        }
      }
    }
  }
  function pa(n, e) {
    let t = 0;
    if (e.length < 10000) {
      n.push(...e);
    } else {
      while (t < e.length) {
        n.push(...e.slice(t, t + 10000));
        t += 10000;
      }
    }
  }
  function va(n) {
    const e = {};
    let t;
    let r;
    let i;
    let u;
    let o;
    let l;
    let a;
    let s = -1;
    const c = new Da(n);
    while (++s < c.length) {
      while (s in e) {
        s = e[s];
      }
      t = c.get(s);
      if (s && t[1].type === "chunkFlow" && c.get(s - 1)[1].type === "listItemPrefix" && (l = t[1].$n.events, i = 0, i < l.length && l[i][1].type === "lineEndingBlank" && (i += 2), i < l.length && l[i][1].type === "content")) {
        while (++i < l.length && l[i][1].type !== "content") {
          if (l[i][1].type === "chunkText") {
            l[i][1].Gn = true;
            i++;
          }
        }
      }
      if (t[0] === "enter") {
        if (t[1].contentType) {
          Object.assign(e, ga(c, s));
          s = e[s];
          a = true;
        }
      } else if (t[1].Wn) {
        i = s;
        r = undefined;
        while (i--) {
          u = c.get(i);
          if (u[1].type === "lineEnding" || u[1].type === "lineEndingBlank") {
            if (u[0] === "enter") {
              if (r) {
                c.get(r)[1].type = "lineEndingBlank";
              }
              u[1].type = "lineEnding";
              r = i;
            }
          } else if (u[1].type !== "linePrefix" && u[1].type !== "listItemIndent") {
            break;
          }
        }
        if (r) {
          t[1].end = {
            ...c.get(r)[1].start
          };
          o = c.slice(r, s);
          o.unshift(t);
          c.splice(r, s - r + 1, o);
        }
      }
    }
    da(n, 0, Number.POSITIVE_INFINITY, c.slice(0));
    return !a;
  }
  function ga(n, e) {
    const t = n.get(e)[1];
    const r = n.get(e)[2];
    let i = e - 1;
    const u = [];
    let o = t.$n;
    if (!o) {
      o = r.parser[t.contentType](t.start);
      if (t.Kn) {
        o.Kn = true;
      }
    }
    const l = o.events;
    const a = [];
    const s = {};
    let c;
    let f;
    let d = -1;
    let h = t;
    let D = 0;
    let p = 0;
    const v = [p];
    while (h) {
      while (n.get(++i)[1] !== h);
      u.push(i);
      if (!h.$n) {
        c = r.sliceStream(h);
        if (!h.next) {
          c.push(null);
        }
        if (f) {
          o.defineSkip(h.start);
        }
        if (h.Gn) {
          o.Zn = true;
        }
        o.write(c);
        if (h.Gn) {
          o.Zn = undefined;
        }
      }
      f = h;
      h = h.next;
    }
    for (h = t; ++d < l.length;) {
      if (l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line) {
        p = d + 1;
        v.push(p);
        h.$n = undefined;
        h.previous = undefined;
        h = h.next;
      }
    }
    o.events = [];
    if (h) {
      h.$n = undefined;
      h.previous = undefined;
    } else {
      v.pop();
    }
    d = v.length;
    while (d--) {
      const e = l.slice(v[d], v[d + 1]);
      const t = u.pop();
      a.push([t, t + e.length - 1]);
      n.splice(t, 2, e);
    }
    a.reverse();
    d = -1;
    while (++d < a.length) {
      s[D + a[d][0]] = D + a[d][1];
      D += a[d][1] - a[d][0] - 1;
    }
    return s;
  }
  const ma = {}.hasOwnProperty;
  function ba(n, e) {
    let t;
    for (t in e) {
      const r = (ma.call(n, t) ? n[t] : undefined) || (n[t] = {});
      const i = e[t];
      let u;
      if (i) {
        for (u in i) {
          if (!ma.call(r, u)) {
            r[u] = [];
          }
          const n = i[u];
          wa(r[u], Array.isArray(n) ? n : n ? [n] : []);
        }
      }
    }
  }
  function wa(n, e) {
    let t = -1;
    const r = [];
    while (++t < e.length) {
      (e[t].add === "after" ? n : r).push(e[t]);
    }
    da(n, 0, 0, r);
  }
  const ya = Ta(/[A-Za-z]/);
  const Fa = Ta(/[\dA-Za-z]/);
  const ka = Ta(/[#-'*+\--9=?A-Z^-~]/);
  function Ea(n) {
    return n !== null && (n < 32 || n === 127);
  }
  const Ca = Ta(/\d/);
  const xa = Ta(/[\dA-Fa-f]/);
  const _a = Ta(/[!-/:-@[-`{-~]/);
  function Sa(n) {
    return n !== null && n < -2;
  }
  function Ba(n) {
    return n !== null && (n < 0 || n === 32);
  }
  function Aa(n) {
    return n === -2 || n === -1 || n === 32;
  }
  const ja = Ta(/\p{P}|\p{S}/u);
  const Ia = Ta(/\s/);
  function Ta(n) {
    return function (e) {
      return e !== null && e > -1 && n.test(String.fromCharCode(e));
    };
  }
  function Oa(n, e, t, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let u = 0;
    return function (r) {
      if (Aa(r)) {
        n.enter(t);
        return o(r);
      }
      return e(r);
    };
    function o(r) {
      if (Aa(r) && u++ < i) {
        n.consume(r);
        return o;
      } else {
        n.exit(t);
        return e(r);
      }
    }
  }
  const Ra = {
    tokenize: function (n) {
      const e = n.attempt(this.parser.constructs.contentInitial, function (t) {
        if (t === null) {
          n.consume(t);
          return;
        }
        n.enter("lineEnding");
        n.consume(t);
        n.exit("lineEnding");
        return Oa(n, e, "linePrefix");
      }, function (e) {
        n.enter("paragraph");
        return r(e);
      });
      let t;
      return e;
      function r(e) {
        const r = n.enter("chunkText", {
          contentType: "text",
          previous: t
        });
        if (t) {
          t.next = r;
        }
        t = r;
        return i(e);
      }
      function i(e) {
        if (e === null) {
          n.exit("chunkText");
          n.exit("paragraph");
          n.consume(e);
          return;
        } else if (Sa(e)) {
          n.consume(e);
          n.exit("chunkText");
          return r;
        } else {
          n.consume(e);
          return i;
        }
      }
    }
  };
  const Ma = {
    tokenize: function (n) {
      const e = this;
      const t = [];
      let r;
      let i;
      let u;
      let o = 0;
      return l;
      function l(r) {
        if (o < t.length) {
          const i = t[o];
          e.containerState = i[1];
          return n.attempt(i[0].continuation, a, s)(r);
        }
        return s(r);
      }
      function a(n) {
        o++;
        if (e.containerState.qn) {
          e.containerState.qn = undefined;
          if (r) {
            m();
          }
          const t = e.events.length;
          let i;
          let u = t;
          while (u--) {
            if (e.events[u][0] === "exit" && e.events[u][1].type === "chunkFlow") {
              i = e.events[u][1].end;
              break;
            }
          }
          g(o);
          let l = t;
          while (l < e.events.length) {
            e.events[l][1].end = {
              ...i
            };
            l++;
          }
          da(e.events, u + 1, 0, e.events.slice(t));
          e.events.length = l;
          return s(n);
        }
        return l(n);
      }
      function s(i) {
        if (o === t.length) {
          if (!r) {
            return d(i);
          }
          if (r.currentConstruct && r.currentConstruct.concrete) {
            return D(i);
          }
          e.interrupt = Boolean(r.currentConstruct && !r.Qn);
        }
        e.containerState = {};
        return n.check(Ua, c, f)(i);
      }
      function c(n) {
        if (r) {
          m();
        }
        g(o);
        return d(n);
      }
      function f(n) {
        e.parser.lazy[e.now().line] = o !== t.length;
        u = e.now().offset;
        return D(n);
      }
      function d(t) {
        e.containerState = {};
        return n.attempt(Ua, h, D)(t);
      }
      function h(n) {
        o++;
        t.push([e.currentConstruct, e.containerState]);
        return d(n);
      }
      function D(t) {
        if (t === null) {
          if (r) {
            m();
          }
          g(0);
          n.consume(t);
          return;
        } else {
          r = r || e.parser.flow(e.now());
          n.enter("chunkFlow", {
            $n: r,
            contentType: "flow",
            previous: i
          });
          return p(t);
        }
      }
      function p(t) {
        if (t === null) {
          v(n.exit("chunkFlow"), true);
          g(0);
          n.consume(t);
          return;
        } else if (Sa(t)) {
          n.consume(t);
          v(n.exit("chunkFlow"));
          o = 0;
          e.interrupt = undefined;
          return l;
        } else {
          n.consume(t);
          return p;
        }
      }
      function v(n, t) {
        const l = e.sliceStream(n);
        if (t) {
          l.push(null);
        }
        n.previous = i;
        if (i) {
          i.next = n;
        }
        i = n;
        r.defineSkip(n.start);
        r.write(l);
        if (e.parser.lazy[n.start.line]) {
          let n = r.events.length;
          while (n--) {
            if (r.events[n][1].start.offset < u && (!r.events[n][1].end || r.events[n][1].end.offset > u)) {
              return;
            }
          }
          const t = e.events.length;
          let i;
          let l;
          let a = t;
          while (a--) {
            if (e.events[a][0] === "exit" && e.events[a][1].type === "chunkFlow") {
              if (i) {
                l = e.events[a][1].end;
                break;
              }
              i = true;
            }
          }
          g(o);
          n = t;
          while (n < e.events.length) {
            e.events[n][1].end = {
              ...l
            };
            n++;
          }
          da(e.events, a + 1, 0, e.events.slice(t));
          e.events.length = n;
        }
      }
      function g(r) {
        let i = t.length;
        while (i-- > r) {
          const r = t[i];
          e.containerState = r[1];
          r[0].exit.call(e, n);
        }
        t.length = r;
      }
      function m() {
        r.write([null]);
        i = undefined;
        r = undefined;
        e.containerState.qn = undefined;
      }
    }
  };
  const Ua = {
    tokenize: function (n, e, t) {
      return Oa(n, n.attempt(this.parser.constructs.document, e, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
    }
  };
  const La = {
    partial: true,
    tokenize: function (n, e, t) {
      return function (e) {
        if (Aa(e)) {
          return Oa(n, r, "linePrefix")(e);
        } else {
          return r(e);
        }
      };
      function r(n) {
        if (n === null || Sa(n)) {
          return e(n);
        } else {
          return t(n);
        }
      }
    }
  };
  const Pa = {
    resolve: function (n) {
      va(n);
      return n;
    },
    tokenize: function (n, e) {
      let t;
      return function (e) {
        n.enter("content");
        t = n.enter("chunkContent", {
          contentType: "content"
        });
        return r(e);
      };
      function r(e) {
        if (e === null) {
          return i(e);
        } else if (Sa(e)) {
          return n.check(Na, u, i)(e);
        } else {
          n.consume(e);
          return r;
        }
      }
      function i(t) {
        n.exit("chunkContent");
        n.exit("content");
        return e(t);
      }
      function u(e) {
        n.consume(e);
        n.exit("chunkContent");
        t.next = n.enter("chunkContent", {
          contentType: "content",
          previous: t
        });
        t = t.next;
        return r;
      }
    }
  };
  const Na = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        n.exit("chunkContent");
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return Oa(n, i, "linePrefix");
      };
      function i(i) {
        if (i === null || Sa(i)) {
          return t(i);
        }
        const u = r.events[r.events.length - 1];
        if (!r.parser.constructs.disable.null.includes("codeIndented") && u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4) {
          return e(i);
        } else {
          return n.interrupt(r.parser.constructs.flow, t, e)(i);
        }
      }
    }
  };
  const Ha = {
    tokenize: function (n) {
      const e = this;
      const t = n.attempt(La, function (r) {
        if (r === null) {
          n.consume(r);
          return;
        }
        n.enter("lineEndingBlank");
        n.consume(r);
        n.exit("lineEndingBlank");
        e.currentConstruct = undefined;
        return t;
      }, n.attempt(this.parser.constructs.flowInitial, r, Oa(n, n.attempt(this.parser.constructs.flow, r, n.attempt(Pa, r)), "linePrefix")));
      return t;
      function r(r) {
        if (r !== null) {
          n.enter("lineEnding");
          n.consume(r);
          n.exit("lineEnding");
          e.currentConstruct = undefined;
          return t;
        }
        n.consume(r);
      }
    }
  };
  const za = {
    resolveAll: Wa()
  };
  const Va = Ga("string");
  const $a = Ga("text");
  function Ga(n) {
    return {
      resolveAll: Wa(n === "text" ? Ka : undefined),
      tokenize: function (e) {
        const t = this;
        const r = this.parser.constructs[n];
        const i = e.attempt(r, u, o);
        return u;
        function u(n) {
          if (a(n)) {
            return i(n);
          } else {
            return o(n);
          }
        }
        function o(n) {
          if (n !== null) {
            e.enter("data");
            e.consume(n);
            return l;
          }
          e.consume(n);
        }
        function l(n) {
          if (a(n)) {
            e.exit("data");
            return i(n);
          } else {
            e.consume(n);
            return l;
          }
        }
        function a(n) {
          if (n === null) {
            return true;
          }
          const e = r[n];
          let i = -1;
          if (e) {
            while (++i < e.length) {
              const n = e[i];
              if (!n.previous || n.previous.call(t, t.previous)) {
                return true;
              }
            }
          }
          return false;
        }
      }
    };
  }
  function Wa(n) {
    return function (e, t) {
      let r;
      let i = -1;
      while (++i <= e.length) {
        if (r === undefined) {
          if (e[i] && e[i][1].type === "data") {
            r = i;
            i++;
          }
        } else if (!e[i] || e[i][1].type !== "data") {
          if (i !== r + 2) {
            e[r][1].end = e[i - 1][1].end;
            e.splice(r + 2, i - r - 2);
            i = r + 2;
          }
          r = undefined;
        }
      }
      if (n) {
        return n(e, t);
      } else {
        return e;
      }
    };
  }
  function Ka(n, e) {
    let t = 0;
    while (++t <= n.length) {
      if ((t === n.length || n[t][1].type === "lineEnding") && n[t - 1][1].type === "data") {
        const r = n[t - 1][1];
        const i = e.sliceStream(r);
        let u;
        let o = i.length;
        let l = -1;
        let a = 0;
        while (o--) {
          const n = i[o];
          if (typeof n == "string") {
            for (l = n.length; n.charCodeAt(l - 1) === 32;) {
              a++;
              l--;
            }
            if (l) {
              break;
            }
            l = -1;
          } else if (n === -2) {
            u = true;
            a++;
          } else if (n !== -1) {
            o++;
            break;
          }
        }
        if (e.Kn && t === n.length) {
          a = 0;
        }
        if (a) {
          const i = {
            type: t === n.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              Yn: o ? l : r.start.Yn + l,
              Jn: r.start.Jn + o,
              line: r.end.line,
              column: r.end.column - a,
              offset: r.end.offset - a
            },
            end: {
              ...r.end
            }
          };
          r.end = {
            ...i.start
          };
          if (r.start.offset === r.end.offset) {
            Object.assign(r, i);
          } else {
            n.splice(t, 0, ["enter", i, e], ["exit", i, e]);
            t += 2;
          }
        }
        t++;
      }
    }
    return n;
  }
  const Za = {
    name: "thematicBreak",
    tokenize: function (n, e, t) {
      let r;
      let i = 0;
      return function (e) {
        n.enter("thematicBreak");
        return function (n) {
          r = n;
          return u(n);
        }(e);
      };
      function u(u) {
        if (u === r) {
          n.enter("thematicBreakSequence");
          return o(u);
        } else if (i >= 3 && (u === null || Sa(u))) {
          n.exit("thematicBreak");
          return e(u);
        } else {
          return t(u);
        }
      }
      function o(e) {
        if (e === r) {
          n.consume(e);
          i++;
          return o;
        } else {
          n.exit("thematicBreakSequence");
          if (Aa(e)) {
            return Oa(n, u, "whitespace")(e);
          } else {
            return u(e);
          }
        }
      }
    }
  };
  const qa = {
    continuation: {
      tokenize: function (n, e, t) {
        const r = this;
        r.containerState.qn = undefined;
        return n.check(La, i, u);
        function i(t) {
          r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine;
          return Oa(n, e, "listItemIndent", r.containerState.size + 1)(t);
        }
        function u(t) {
          if (r.containerState.furtherBlankLines || !Aa(t)) {
            r.containerState.furtherBlankLines = undefined;
            r.containerState.initialBlankLine = undefined;
            return o(t);
          } else {
            r.containerState.furtherBlankLines = undefined;
            r.containerState.initialBlankLine = undefined;
            return n.attempt(Ya, e, o)(t);
          }
        }
        function o(i) {
          r.containerState.qn = true;
          r.interrupt = undefined;
          return Oa(n, n.attempt(qa, e, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(i);
        }
      }
    },
    exit: function (n) {
      n.exit(this.containerState.type);
    },
    name: "list",
    tokenize: function (n, e, t) {
      const r = this;
      const i = r.events[r.events.length - 1];
      let u = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0;
      let o = 0;
      return function (e) {
        const i = r.containerState.type || (e === 42 || e === 43 || e === 45 ? "listUnordered" : "listOrdered");
        if (i === "listUnordered" ? !r.containerState.marker || e === r.containerState.marker : Ca(e)) {
          if (!r.containerState.type) {
            r.containerState.type = i;
            n.enter(i, {
              Wn: true
            });
          }
          if (i === "listUnordered") {
            n.enter("listItemPrefix");
            if (e === 42 || e === 45) {
              return n.check(Za, t, a)(e);
            } else {
              return a(e);
            }
          }
          if (!r.interrupt || e === 49) {
            n.enter("listItemPrefix");
            n.enter("listItemValue");
            return l(e);
          }
        }
        return t(e);
      };
      function l(e) {
        if (Ca(e) && ++o < 10) {
          n.consume(e);
          return l;
        } else if ((!r.interrupt || o < 2) && (r.containerState.marker ? e === r.containerState.marker : e === 41 || e === 46)) {
          n.exit("listItemValue");
          return a(e);
        } else {
          return t(e);
        }
      }
      function a(e) {
        n.enter("listItemMarker");
        n.consume(e);
        n.exit("listItemMarker");
        r.containerState.marker = r.containerState.marker || e;
        return n.check(La, r.interrupt ? t : s, n.attempt(Qa, f, c));
      }
      function s(n) {
        r.containerState.initialBlankLine = true;
        u++;
        return f(n);
      }
      function c(e) {
        if (Aa(e)) {
          n.enter("listItemPrefixWhitespace");
          n.consume(e);
          n.exit("listItemPrefixWhitespace");
          return f;
        } else {
          return t(e);
        }
      }
      function f(t) {
        r.containerState.size = u + r.sliceSerialize(n.exit("listItemPrefix"), true).length;
        return e(t);
      }
    }
  };
  const Qa = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return Oa(n, function (n) {
        const i = r.events[r.events.length - 1];
        if (!Aa(n) && i && i[1].type === "listItemPrefixWhitespace") {
          return e(n);
        } else {
          return t(n);
        }
      }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    }
  };
  const Ya = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return Oa(n, function (n) {
        const i = r.events[r.events.length - 1];
        if (i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], true).length === r.containerState.size) {
          return e(n);
        } else {
          return t(n);
        }
      }, "listItemIndent", r.containerState.size + 1);
    }
  };
  const Ja = {
    continuation: {
      tokenize: function (n, e, t) {
        const r = this;
        return function (e) {
          if (Aa(e)) {
            return Oa(n, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(e);
          }
          return i(e);
        };
        function i(r) {
          return n.attempt(Ja, e, t)(r);
        }
      }
    },
    exit: function (n) {
      n.exit("blockQuote");
    },
    name: "blockQuote",
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        if (e === 62) {
          const t = r.containerState;
          if (!t.open) {
            n.enter("blockQuote", {
              Wn: true
            });
            t.open = true;
          }
          n.enter("blockQuotePrefix");
          n.enter("blockQuoteMarker");
          n.consume(e);
          n.exit("blockQuoteMarker");
          return i;
        }
        return t(e);
      };
      function i(t) {
        if (Aa(t)) {
          n.enter("blockQuotePrefixWhitespace");
          n.consume(t);
          n.exit("blockQuotePrefixWhitespace");
          n.exit("blockQuotePrefix");
          return e;
        } else {
          n.exit("blockQuotePrefix");
          return e(t);
        }
      }
    }
  };
  function Xa(n, e, t, r, i, u, o, l, a) {
    const s = a || Number.POSITIVE_INFINITY;
    let c = 0;
    return function (e) {
      if (e === 60) {
        n.enter(r);
        n.enter(i);
        n.enter(u);
        n.consume(e);
        n.exit(u);
        return f;
      }
      if (e === null || e === 32 || e === 41 || Ea(e)) {
        return t(e);
      }
      n.enter(r);
      n.enter(o);
      n.enter(l);
      n.enter("chunkString", {
        contentType: "string"
      });
      return D(e);
    };
    function f(t) {
      if (t === 62) {
        n.enter(u);
        n.consume(t);
        n.exit(u);
        n.exit(i);
        n.exit(r);
        return e;
      } else {
        n.enter(l);
        n.enter("chunkString", {
          contentType: "string"
        });
        return d(t);
      }
    }
    function d(e) {
      if (e === 62) {
        n.exit("chunkString");
        n.exit(l);
        return f(e);
      } else if (e === null || e === 60 || Sa(e)) {
        return t(e);
      } else {
        n.consume(e);
        if (e === 92) {
          return h;
        } else {
          return d;
        }
      }
    }
    function h(e) {
      if (e === 60 || e === 62 || e === 92) {
        n.consume(e);
        return d;
      } else {
        return d(e);
      }
    }
    function D(i) {
      if (c || i !== null && i !== 41 && !Ba(i)) {
        if (c < s && i === 40) {
          n.consume(i);
          c++;
          return D;
        } else if (i === 41) {
          n.consume(i);
          c--;
          return D;
        } else if (i === null || i === 32 || i === 40 || Ea(i)) {
          return t(i);
        } else {
          n.consume(i);
          if (i === 92) {
            return p;
          } else {
            return D;
          }
        }
      } else {
        n.exit("chunkString");
        n.exit(l);
        n.exit(o);
        n.exit(r);
        return e(i);
      }
    }
    function p(e) {
      if (e === 40 || e === 41 || e === 92) {
        n.consume(e);
        return D;
      } else {
        return D(e);
      }
    }
  }
  function ns(n, e, t, r, i, u) {
    const o = this;
    let l;
    let a = 0;
    return function (e) {
      n.enter(r);
      n.enter(i);
      n.consume(e);
      n.exit(i);
      n.enter(u);
      return s;
    };
    function s(f) {
      if (a > 999 || f === null || f === 91 || f === 93 && !l || f === 94 && !a && "Xn" in o.parser.constructs) {
        return t(f);
      } else if (f === 93) {
        n.exit(u);
        n.enter(i);
        n.consume(f);
        n.exit(i);
        n.exit(r);
        return e;
      } else if (Sa(f)) {
        n.enter("lineEnding");
        n.consume(f);
        n.exit("lineEnding");
        return s;
      } else {
        n.enter("chunkString", {
          contentType: "string"
        });
        return c(f);
      }
    }
    function c(e) {
      if (e === null || e === 91 || e === 93 || Sa(e) || a++ > 999) {
        n.exit("chunkString");
        return s(e);
      } else {
        n.consume(e);
        l ||= !Aa(e);
        if (e === 92) {
          return f;
        } else {
          return c;
        }
      }
    }
    function f(e) {
      if (e === 91 || e === 92 || e === 93) {
        n.consume(e);
        a++;
        return c;
      } else {
        return c(e);
      }
    }
  }
  function es(n, e, t, r, i, u) {
    let o;
    return function (e) {
      if (e === 34 || e === 39 || e === 40) {
        n.enter(r);
        n.enter(i);
        n.consume(e);
        n.exit(i);
        o = e === 40 ? 41 : e;
        return l;
      }
      return t(e);
    };
    function l(t) {
      if (t === o) {
        n.enter(i);
        n.consume(t);
        n.exit(i);
        n.exit(r);
        return e;
      } else {
        n.enter(u);
        return a(t);
      }
    }
    function a(e) {
      if (e === o) {
        n.exit(u);
        return l(o);
      } else if (e === null) {
        return t(e);
      } else if (Sa(e)) {
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return Oa(n, a, "linePrefix");
      } else {
        n.enter("chunkString", {
          contentType: "string"
        });
        return s(e);
      }
    }
    function s(e) {
      if (e === o || e === null || Sa(e)) {
        n.exit("chunkString");
        return a(e);
      } else {
        n.consume(e);
        if (e === 92) {
          return c;
        } else {
          return s;
        }
      }
    }
    function c(e) {
      if (e === o || e === 92) {
        n.consume(e);
        return s;
      } else {
        return s(e);
      }
    }
  }
  function ts(n, e) {
    let t;
    return function r(i) {
      if (Sa(i)) {
        n.enter("lineEnding");
        n.consume(i);
        n.exit("lineEnding");
        t = true;
        return r;
      }
      if (Aa(i)) {
        return Oa(n, r, t ? "linePrefix" : "lineSuffix")(i);
      }
      return e(i);
    };
  }
  function rs(n) {
    return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const is = {
    name: "definition",
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      return function (e) {
        n.enter("definition");
        return function (e) {
          return ns.call(r, n, u, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(e);
        }(e);
      };
      function u(e) {
        i = rs(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1));
        if (e === 58) {
          n.enter("definitionMarker");
          n.consume(e);
          n.exit("definitionMarker");
          return o;
        } else {
          return t(e);
        }
      }
      function o(e) {
        if (Ba(e)) {
          return ts(n, l)(e);
        } else {
          return l(e);
        }
      }
      function l(e) {
        return Xa(n, a, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(e);
      }
      function a(e) {
        return n.attempt(us, s, s)(e);
      }
      function s(e) {
        if (Aa(e)) {
          return Oa(n, c, "whitespace")(e);
        } else {
          return c(e);
        }
      }
      function c(u) {
        if (u === null || Sa(u)) {
          n.exit("definition");
          r.parser.defined.push(i);
          return e(u);
        } else {
          return t(u);
        }
      }
    }
  };
  const us = {
    partial: true,
    tokenize: function (n, e, t) {
      return function (e) {
        if (Ba(e)) {
          return ts(n, r)(e);
        } else {
          return t(e);
        }
      };
      function r(e) {
        return es(n, i, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(e);
      }
      function i(e) {
        if (Aa(e)) {
          return Oa(n, u, "whitespace")(e);
        } else {
          return u(e);
        }
      }
      function u(n) {
        if (n === null || Sa(n)) {
          return e(n);
        } else {
          return t(n);
        }
      }
    }
  };
  const os = {
    name: "codeIndented",
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        n.enter("codeIndented");
        return Oa(n, i, "linePrefix", 5)(e);
      };
      function i(n) {
        const e = r.events[r.events.length - 1];
        if (e && e[1].type === "linePrefix" && e[2].sliceSerialize(e[1], true).length >= 4) {
          return u(n);
        } else {
          return t(n);
        }
      }
      function u(e) {
        if (e === null) {
          return l(e);
        } else if (Sa(e)) {
          return n.attempt(ls, u, l)(e);
        } else {
          n.enter("codeFlowValue");
          return o(e);
        }
      }
      function o(e) {
        if (e === null || Sa(e)) {
          n.exit("codeFlowValue");
          return u(e);
        } else {
          n.consume(e);
          return o;
        }
      }
      function l(t) {
        n.exit("codeIndented");
        return e(t);
      }
    }
  };
  const ls = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return i;
      function i(e) {
        if (r.parser.lazy[r.now().line]) {
          return t(e);
        } else if (Sa(e)) {
          n.enter("lineEnding");
          n.consume(e);
          n.exit("lineEnding");
          return i;
        } else {
          return Oa(n, u, "linePrefix", 5)(e);
        }
      }
      function u(n) {
        const u = r.events[r.events.length - 1];
        if (u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4) {
          return e(n);
        } else if (Sa(n)) {
          return i(n);
        } else {
          return t(n);
        }
      }
    }
  };
  const as = {
    name: "headingAtx",
    resolve: function (n, e) {
      let t;
      let r;
      let i = n.length - 2;
      let u = 3;
      if (n[u][1].type === "whitespace") {
        u += 2;
      }
      if (i - 2 > u && n[i][1].type === "whitespace") {
        i -= 2;
      }
      if (n[i][1].type === "atxHeadingSequence" && (u === i - 1 || i - 4 > u && n[i - 2][1].type === "whitespace")) {
        i -= u + 1 === i ? 2 : 4;
      }
      if (i > u) {
        t = {
          type: "atxHeadingText",
          start: n[u][1].start,
          end: n[i][1].end
        };
        r = {
          type: "chunkText",
          start: n[u][1].start,
          end: n[i][1].end,
          contentType: "text"
        };
        da(n, u, i - u + 1, [["enter", t, e], ["enter", r, e], ["exit", r, e], ["exit", t, e]]);
      }
      return n;
    },
    tokenize: function (n, e, t) {
      let r = 0;
      return function (e) {
        n.enter("atxHeading");
        return function (e) {
          n.enter("atxHeadingSequence");
          return i(e);
        }(e);
      };
      function i(e) {
        if (e === 35 && r++ < 6) {
          n.consume(e);
          return i;
        } else if (e === null || Ba(e)) {
          n.exit("atxHeadingSequence");
          return u(e);
        } else {
          return t(e);
        }
      }
      function u(t) {
        if (t === 35) {
          n.enter("atxHeadingSequence");
          return o(t);
        } else if (t === null || Sa(t)) {
          n.exit("atxHeading");
          return e(t);
        } else if (Aa(t)) {
          return Oa(n, u, "whitespace")(t);
        } else {
          n.enter("atxHeadingText");
          return l(t);
        }
      }
      function o(e) {
        if (e === 35) {
          n.consume(e);
          return o;
        } else {
          n.exit("atxHeadingSequence");
          return u(e);
        }
      }
      function l(e) {
        if (e === null || e === 35 || Ba(e)) {
          n.exit("atxHeadingText");
          return u(e);
        } else {
          n.consume(e);
          return l;
        }
      }
    }
  };
  const ss = {
    name: "setextUnderline",
    resolveTo: function (n, e) {
      let t;
      let r;
      let i;
      let u = n.length;
      while (u--) {
        if (n[u][0] === "enter") {
          if (n[u][1].type === "content") {
            t = u;
            break;
          }
          if (n[u][1].type === "paragraph") {
            r = u;
          }
        } else {
          if (n[u][1].type === "content") {
            n.splice(u, 1);
          }
          if (!i && n[u][1].type === "definition") {
            i = u;
          }
        }
      }
      const o = {
        type: "setextHeading",
        start: {
          ...n[t][1].start
        },
        end: {
          ...n[n.length - 1][1].end
        }
      };
      n[r][1].type = "setextHeadingText";
      if (i) {
        n.splice(r, 0, ["enter", o, e]);
        n.splice(i + 1, 0, ["exit", n[t][1], e]);
        n[t][1].end = {
          ...n[i][1].end
        };
      } else {
        n[t][1] = o;
      }
      n.push(["exit", o, e]);
      return n;
    },
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      return function (e) {
        let o;
        let l = r.events.length;
        while (l--) {
          if (r.events[l][1].type !== "lineEnding" && r.events[l][1].type !== "linePrefix" && r.events[l][1].type !== "content") {
            o = r.events[l][1].type === "paragraph";
            break;
          }
        }
        if (!r.parser.lazy[r.now().line] && (r.interrupt || o)) {
          n.enter("setextHeadingLine");
          i = e;
          return function (e) {
            n.enter("setextHeadingLineSequence");
            return u(e);
          }(e);
        }
        return t(e);
      };
      function u(e) {
        if (e === i) {
          n.consume(e);
          return u;
        } else {
          n.exit("setextHeadingLineSequence");
          if (Aa(e)) {
            return Oa(n, o, "lineSuffix")(e);
          } else {
            return o(e);
          }
        }
      }
      function o(r) {
        if (r === null || Sa(r)) {
          n.exit("setextHeadingLine");
          return e(r);
        } else {
          return t(r);
        }
      }
    }
  };
  const cs = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
  const fs = ["pre", "script", "style", "textarea"];
  const ds = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: function (n) {
      let e = n.length;
      while (e-- && (n[e][0] !== "enter" || n[e][1].type !== "htmlFlow"));
      if (e > 1 && n[e - 2][1].type === "linePrefix") {
        n[e][1].start = n[e - 2][1].start;
        n[e + 1][1].start = n[e - 2][1].start;
        n.splice(e - 2, 2);
      }
      return n;
    },
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      let u;
      let o;
      let l;
      let a;
      return function (e) {
        return function (e) {
          n.enter("htmlFlow");
          n.enter("htmlFlowData");
          n.consume(e);
          return s;
        }(e);
      };
      function s(l) {
        if (l === 33) {
          n.consume(l);
          return c;
        } else if (l === 47) {
          n.consume(l);
          u = true;
          return h;
        } else if (l === 63) {
          n.consume(l);
          i = 3;
          if (r.interrupt) {
            return e;
          } else {
            return O;
          }
        } else if (ya(l)) {
          n.consume(l);
          o = String.fromCharCode(l);
          return D;
        } else {
          return t(l);
        }
      }
      function c(u) {
        if (u === 45) {
          n.consume(u);
          i = 2;
          return f;
        } else if (u === 91) {
          n.consume(u);
          i = 5;
          l = 0;
          return d;
        } else if (ya(u)) {
          n.consume(u);
          i = 4;
          if (r.interrupt) {
            return e;
          } else {
            return O;
          }
        } else {
          return t(u);
        }
      }
      function f(i) {
        if (i === 45) {
          n.consume(i);
          if (r.interrupt) {
            return e;
          } else {
            return O;
          }
        } else {
          return t(i);
        }
      }
      function d(i) {
        const u = "CDATA[";
        if (i === u.charCodeAt(l++)) {
          n.consume(i);
          if (l === 6) {
            if (r.interrupt) {
              return e;
            } else {
              return x;
            }
          } else {
            return d;
          }
        } else {
          return t(i);
        }
      }
      function h(e) {
        if (ya(e)) {
          n.consume(e);
          o = String.fromCharCode(e);
          return D;
        } else {
          return t(e);
        }
      }
      function D(l) {
        if (l === null || l === 47 || l === 62 || Ba(l)) {
          const a = l === 47;
          const s = o.toLowerCase();
          if (a || u || !fs.includes(s)) {
            if (cs.includes(o.toLowerCase())) {
              i = 6;
              if (a) {
                n.consume(l);
                return p;
              } else if (r.interrupt) {
                return e(l);
              } else {
                return x(l);
              }
            } else {
              i = 7;
              if (r.interrupt && !r.parser.lazy[r.now().line]) {
                return t(l);
              } else if (u) {
                return v(l);
              } else {
                return g(l);
              }
            }
          } else {
            i = 1;
            if (r.interrupt) {
              return e(l);
            } else {
              return x(l);
            }
          }
        }
        if (l === 45 || Fa(l)) {
          n.consume(l);
          o += String.fromCharCode(l);
          return D;
        } else {
          return t(l);
        }
      }
      function p(i) {
        if (i === 62) {
          n.consume(i);
          if (r.interrupt) {
            return e;
          } else {
            return x;
          }
        } else {
          return t(i);
        }
      }
      function v(e) {
        if (Aa(e)) {
          n.consume(e);
          return v;
        } else {
          return E(e);
        }
      }
      function g(e) {
        if (e === 47) {
          n.consume(e);
          return E;
        } else if (e === 58 || e === 95 || ya(e)) {
          n.consume(e);
          return m;
        } else if (Aa(e)) {
          n.consume(e);
          return g;
        } else {
          return E(e);
        }
      }
      function m(e) {
        if (e === 45 || e === 46 || e === 58 || e === 95 || Fa(e)) {
          n.consume(e);
          return m;
        } else {
          return b(e);
        }
      }
      function b(e) {
        if (e === 61) {
          n.consume(e);
          return w;
        } else if (Aa(e)) {
          n.consume(e);
          return b;
        } else {
          return g(e);
        }
      }
      function w(e) {
        if (e === null || e === 60 || e === 61 || e === 62 || e === 96) {
          return t(e);
        } else if (e === 34 || e === 39) {
          n.consume(e);
          a = e;
          return y;
        } else if (Aa(e)) {
          n.consume(e);
          return w;
        } else {
          return F(e);
        }
      }
      function y(e) {
        if (e === a) {
          n.consume(e);
          a = null;
          return k;
        } else if (e === null || Sa(e)) {
          return t(e);
        } else {
          n.consume(e);
          return y;
        }
      }
      function F(e) {
        if (e === null || e === 34 || e === 39 || e === 47 || e === 60 || e === 61 || e === 62 || e === 96 || Ba(e)) {
          return b(e);
        } else {
          n.consume(e);
          return F;
        }
      }
      function k(n) {
        if (n === 47 || n === 62 || Aa(n)) {
          return g(n);
        } else {
          return t(n);
        }
      }
      function E(e) {
        if (e === 62) {
          n.consume(e);
          return C;
        } else {
          return t(e);
        }
      }
      function C(e) {
        if (e === null || Sa(e)) {
          return x(e);
        } else if (Aa(e)) {
          n.consume(e);
          return C;
        } else {
          return t(e);
        }
      }
      function x(e) {
        if (e === 45 && i === 2) {
          n.consume(e);
          return A;
        } else if (e === 60 && i === 1) {
          n.consume(e);
          return j;
        } else if (e === 62 && i === 4) {
          n.consume(e);
          return R;
        } else if (e === 63 && i === 3) {
          n.consume(e);
          return O;
        } else if (e === 93 && i === 5) {
          n.consume(e);
          return T;
        } else if (!Sa(e) || i !== 6 && i !== 7) {
          if (e === null || Sa(e)) {
            n.exit("htmlFlowData");
            return _(e);
          } else {
            n.consume(e);
            return x;
          }
        } else {
          n.exit("htmlFlowData");
          return n.check(hs, M, _)(e);
        }
      }
      function _(e) {
        return n.check(Ds, S, M)(e);
      }
      function S(e) {
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return B;
      }
      function B(e) {
        if (e === null || Sa(e)) {
          return _(e);
        } else {
          n.enter("htmlFlowData");
          return x(e);
        }
      }
      function A(e) {
        if (e === 45) {
          n.consume(e);
          return O;
        } else {
          return x(e);
        }
      }
      function j(e) {
        if (e === 47) {
          n.consume(e);
          o = "";
          return I;
        } else {
          return x(e);
        }
      }
      function I(e) {
        if (e === 62) {
          const t = o.toLowerCase();
          if (fs.includes(t)) {
            n.consume(e);
            return R;
          } else {
            return x(e);
          }
        }
        if (ya(e) && o.length < 8) {
          n.consume(e);
          o += String.fromCharCode(e);
          return I;
        } else {
          return x(e);
        }
      }
      function T(e) {
        if (e === 93) {
          n.consume(e);
          return O;
        } else {
          return x(e);
        }
      }
      function O(e) {
        if (e === 62) {
          n.consume(e);
          return R;
        } else if (e === 45 && i === 2) {
          n.consume(e);
          return O;
        } else {
          return x(e);
        }
      }
      function R(e) {
        if (e === null || Sa(e)) {
          n.exit("htmlFlowData");
          return M(e);
        } else {
          n.consume(e);
          return R;
        }
      }
      function M(t) {
        n.exit("htmlFlow");
        return e(t);
      }
    }
  };
  const hs = {
    partial: true,
    tokenize: function (n, e, t) {
      return function (r) {
        n.enter("lineEnding");
        n.consume(r);
        n.exit("lineEnding");
        return n.attempt(La, e, t);
      };
    }
  };
  const Ds = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        if (Sa(e)) {
          n.enter("lineEnding");
          n.consume(e);
          n.exit("lineEnding");
          return i;
        }
        return t(e);
      };
      function i(n) {
        if (r.parser.lazy[r.now().line]) {
          return t(n);
        } else {
          return e(n);
        }
      }
    }
  };
  const ps = {
    partial: true,
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        if (e === null) {
          return t(e);
        }
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return i;
      };
      function i(n) {
        if (r.parser.lazy[r.now().line]) {
          return t(n);
        } else {
          return e(n);
        }
      }
    }
  };
  const vs = {
    concrete: true,
    name: "codeFenced",
    tokenize: function (n, e, t) {
      const r = this;
      const i = {
        partial: true,
        tokenize: function (n, e, t) {
          let i = 0;
          return o;
          function o(e) {
            n.enter("lineEnding");
            n.consume(e);
            n.exit("lineEnding");
            return a;
          }
          function a(e) {
            n.enter("codeFencedFence");
            if (Aa(e)) {
              return Oa(n, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(e);
            } else {
              return s(e);
            }
          }
          function s(e) {
            if (e === u) {
              n.enter("codeFencedFenceSequence");
              return c(e);
            } else {
              return t(e);
            }
          }
          function c(e) {
            if (e === u) {
              i++;
              n.consume(e);
              return c;
            } else if (i >= l) {
              n.exit("codeFencedFenceSequence");
              if (Aa(e)) {
                return Oa(n, f, "whitespace")(e);
              } else {
                return f(e);
              }
            } else {
              return t(e);
            }
          }
          function f(r) {
            if (r === null || Sa(r)) {
              n.exit("codeFencedFence");
              return e(r);
            } else {
              return t(r);
            }
          }
        }
      };
      let u;
      let o = 0;
      let l = 0;
      return function (e) {
        return function (e) {
          const t = r.events[r.events.length - 1];
          o = t && t[1].type === "linePrefix" ? t[2].sliceSerialize(t[1], true).length : 0;
          u = e;
          n.enter("codeFenced");
          n.enter("codeFencedFence");
          n.enter("codeFencedFenceSequence");
          return a(e);
        }(e);
      };
      function a(e) {
        if (e === u) {
          l++;
          n.consume(e);
          return a;
        } else if (l < 3) {
          return t(e);
        } else {
          n.exit("codeFencedFenceSequence");
          if (Aa(e)) {
            return Oa(n, s, "whitespace")(e);
          } else {
            return s(e);
          }
        }
      }
      function s(t) {
        if (t === null || Sa(t)) {
          n.exit("codeFencedFence");
          if (r.interrupt) {
            return e(t);
          } else {
            return n.check(ps, h, m)(t);
          }
        } else {
          n.enter("codeFencedFenceInfo");
          n.enter("chunkString", {
            contentType: "string"
          });
          return c(t);
        }
      }
      function c(e) {
        if (e === null || Sa(e)) {
          n.exit("chunkString");
          n.exit("codeFencedFenceInfo");
          return s(e);
        } else if (Aa(e)) {
          n.exit("chunkString");
          n.exit("codeFencedFenceInfo");
          return Oa(n, f, "whitespace")(e);
        } else if (e === 96 && e === u) {
          return t(e);
        } else {
          n.consume(e);
          return c;
        }
      }
      function f(e) {
        if (e === null || Sa(e)) {
          return s(e);
        } else {
          n.enter("codeFencedFenceMeta");
          n.enter("chunkString", {
            contentType: "string"
          });
          return d(e);
        }
      }
      function d(e) {
        if (e === null || Sa(e)) {
          n.exit("chunkString");
          n.exit("codeFencedFenceMeta");
          return s(e);
        } else if (e === 96 && e === u) {
          return t(e);
        } else {
          n.consume(e);
          return d;
        }
      }
      function h(e) {
        return n.attempt(i, m, D)(e);
      }
      function D(e) {
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return p;
      }
      function p(e) {
        if (o > 0 && Aa(e)) {
          return Oa(n, v, "linePrefix", o + 1)(e);
        } else {
          return v(e);
        }
      }
      function v(e) {
        if (e === null || Sa(e)) {
          return n.check(ps, h, m)(e);
        } else {
          n.enter("codeFlowValue");
          return g(e);
        }
      }
      function g(e) {
        if (e === null || Sa(e)) {
          n.exit("codeFlowValue");
          return v(e);
        } else {
          n.consume(e);
          return g;
        }
      }
      function m(t) {
        n.exit("codeFenced");
        return e(t);
      }
    }
  };
  const gs = document.createElement("i");
  function ms(n) {
    const e = "&" + n + ";";
    gs.innerHTML = e;
    const t = gs.textContent;
    return (t.charCodeAt(t.length - 1) !== 59 || n === "semi") && t !== e && t;
  }
  const bs = {
    name: "characterReference",
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      let u;
      let o = 0;
      return function (e) {
        n.enter("characterReference");
        n.enter("characterReferenceMarker");
        n.consume(e);
        n.exit("characterReferenceMarker");
        return l;
      };
      function l(e) {
        if (e === 35) {
          n.enter("characterReferenceMarkerNumeric");
          n.consume(e);
          n.exit("characterReferenceMarkerNumeric");
          return a;
        } else {
          n.enter("characterReferenceValue");
          i = 31;
          u = Fa;
          return s(e);
        }
      }
      function a(e) {
        if (e === 88 || e === 120) {
          n.enter("characterReferenceMarkerHexadecimal");
          n.consume(e);
          n.exit("characterReferenceMarkerHexadecimal");
          n.enter("characterReferenceValue");
          i = 6;
          u = xa;
          return s;
        } else {
          n.enter("characterReferenceValue");
          i = 7;
          u = Ca;
          return s(e);
        }
      }
      function s(l) {
        if (l === 59 && o) {
          const i = n.exit("characterReferenceValue");
          if (u !== Fa || ms(r.sliceSerialize(i))) {
            n.enter("characterReferenceMarker");
            n.consume(l);
            n.exit("characterReferenceMarker");
            n.exit("characterReference");
            return e;
          } else {
            return t(l);
          }
        }
        if (u(l) && o++ < i) {
          n.consume(l);
          return s;
        } else {
          return t(l);
        }
      }
    }
  };
  const ws = {
    name: "characterEscape",
    tokenize: function (n, e, t) {
      return function (e) {
        n.enter("characterEscape");
        n.enter("escapeMarker");
        n.consume(e);
        n.exit("escapeMarker");
        return r;
      };
      function r(r) {
        if (_a(r)) {
          n.enter("characterEscapeValue");
          n.consume(r);
          n.exit("characterEscapeValue");
          n.exit("characterEscape");
          return e;
        } else {
          return t(r);
        }
      }
    }
  };
  const ys = {
    name: "lineEnding",
    tokenize: function (n, e) {
      return function (t) {
        n.enter("lineEnding");
        n.consume(t);
        n.exit("lineEnding");
        return Oa(n, e, "linePrefix");
      };
    }
  };
  function Fs(n, e, t) {
    const r = [];
    let i = -1;
    while (++i < n.length) {
      const u = n[i].resolveAll;
      if (u && !r.includes(u)) {
        e = u(e, t);
        r.push(u);
      }
    }
    return e;
  }
  const ks = {
    name: "labelEnd",
    resolveAll: function (n) {
      let e = -1;
      const t = [];
      while (++e < n.length) {
        const r = n[e][1];
        t.push(n[e]);
        if (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
          const n = r.type === "labelImage" ? 4 : 2;
          r.type = "data";
          e += n;
        }
      }
      if (n.length !== t.length) {
        da(n, 0, n.length, t);
      }
      return n;
    },
    resolveTo: function (n, e) {
      let t;
      let r;
      let i;
      let u;
      let o = n.length;
      let l = 0;
      while (o--) {
        t = n[o][1];
        if (r) {
          if (t.type === "link" || t.type === "labelLink" && t.ne) {
            break;
          }
          if (n[o][0] === "enter" && t.type === "labelLink") {
            t.ne = true;
          }
        } else if (i) {
          if (n[o][0] === "enter" && (t.type === "labelImage" || t.type === "labelLink") && !t.ee && (r = o, t.type !== "labelLink")) {
            l = 2;
            break;
          }
        } else if (t.type === "labelEnd") {
          i = o;
        }
      }
      const a = {
        type: n[r][1].type === "labelLink" ? "link" : "image",
        start: {
          ...n[r][1].start
        },
        end: {
          ...n[n.length - 1][1].end
        }
      };
      const s = {
        type: "label",
        start: {
          ...n[r][1].start
        },
        end: {
          ...n[i][1].end
        }
      };
      const c = {
        type: "labelText",
        start: {
          ...n[r + l + 2][1].end
        },
        end: {
          ...n[i - 2][1].start
        }
      };
      u = [["enter", a, e], ["enter", s, e]];
      u = ha(u, n.slice(r + 1, r + l + 3));
      u = ha(u, [["enter", c, e]]);
      u = ha(u, Fs(e.parser.constructs.insideSpan.null, n.slice(r + l + 4, i - 3), e));
      u = ha(u, [["exit", c, e], n[i - 2], n[i - 1], ["exit", s, e]]);
      u = ha(u, n.slice(i + 1));
      u = ha(u, [["exit", a, e]]);
      da(n, r, n.length, u);
      return n;
    },
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      let u;
      let o = r.events.length;
      while (o--) {
        if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1].ee) {
          i = r.events[o][1];
          break;
        }
      }
      return function (e) {
        if (!i) {
          return t(e);
        }
        if (i.ne) {
          return c(e);
        }
        u = r.parser.defined.includes(rs(r.sliceSerialize({
          start: i.end,
          end: r.now()
        })));
        n.enter("labelEnd");
        n.enter("labelMarker");
        n.consume(e);
        n.exit("labelMarker");
        n.exit("labelEnd");
        return l;
      };
      function l(e) {
        if (e === 40) {
          return n.attempt(Es, s, u ? s : c)(e);
        } else if (e === 91) {
          return n.attempt(Cs, s, u ? a : c)(e);
        } else if (u) {
          return s(e);
        } else {
          return c(e);
        }
      }
      function a(e) {
        return n.attempt(xs, s, c)(e);
      }
      function s(n) {
        return e(n);
      }
      function c(n) {
        i.ee = true;
        return t(n);
      }
    }
  };
  const Es = {
    tokenize: function (n, e, t) {
      return function (e) {
        n.enter("resource");
        n.enter("resourceMarker");
        n.consume(e);
        n.exit("resourceMarker");
        return r;
      };
      function r(e) {
        if (Ba(e)) {
          return ts(n, i)(e);
        } else {
          return i(e);
        }
      }
      function i(e) {
        if (e === 41) {
          return s(e);
        } else {
          return Xa(n, u, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(e);
        }
      }
      function u(e) {
        if (Ba(e)) {
          return ts(n, l)(e);
        } else {
          return s(e);
        }
      }
      function o(n) {
        return t(n);
      }
      function l(e) {
        if (e === 34 || e === 39 || e === 40) {
          return es(n, a, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(e);
        } else {
          return s(e);
        }
      }
      function a(e) {
        if (Ba(e)) {
          return ts(n, s)(e);
        } else {
          return s(e);
        }
      }
      function s(r) {
        if (r === 41) {
          n.enter("resourceMarker");
          n.consume(r);
          n.exit("resourceMarker");
          n.exit("resource");
          return e;
        } else {
          return t(r);
        }
      }
    }
  };
  const Cs = {
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        return ns.call(r, n, i, u, "reference", "referenceMarker", "referenceString")(e);
      };
      function i(n) {
        if (r.parser.defined.includes(rs(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)))) {
          return e(n);
        } else {
          return t(n);
        }
      }
      function u(n) {
        return t(n);
      }
    }
  };
  const xs = {
    tokenize: function (n, e, t) {
      return function (e) {
        n.enter("reference");
        n.enter("referenceMarker");
        n.consume(e);
        n.exit("referenceMarker");
        return r;
      };
      function r(r) {
        if (r === 93) {
          n.enter("referenceMarker");
          n.consume(r);
          n.exit("referenceMarker");
          n.exit("reference");
          return e;
        } else {
          return t(r);
        }
      }
    }
  };
  const _s = {
    name: "labelStartImage",
    resolveAll: ks.resolveAll,
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        n.enter("labelImage");
        n.enter("labelImageMarker");
        n.consume(e);
        n.exit("labelImageMarker");
        return i;
      };
      function i(e) {
        if (e === 91) {
          n.enter("labelMarker");
          n.consume(e);
          n.exit("labelMarker");
          n.exit("labelImage");
          return u;
        } else {
          return t(e);
        }
      }
      function u(n) {
        if (n === 94 && "Xn" in r.parser.constructs) {
          return t(n);
        } else {
          return e(n);
        }
      }
    }
  };
  function Ss(n) {
    if (n === null || Ba(n) || Ia(n)) {
      return 1;
    } else if (ja(n)) {
      return 2;
    } else {
      return undefined;
    }
  }
  const Bs = {
    name: "attention",
    resolveAll: function (n, e) {
      let t;
      let r;
      let i;
      let u;
      let o;
      let l;
      let a;
      let s;
      let c = -1;
      while (++c < n.length) {
        if (n[c][0] === "enter" && n[c][1].type === "attentionSequence" && n[c][1].te) {
          for (t = c; t--;) {
            if (n[t][0] === "exit" && n[t][1].type === "attentionSequence" && n[t][1].re && e.sliceSerialize(n[t][1]).charCodeAt(0) === e.sliceSerialize(n[c][1]).charCodeAt(0)) {
              if ((n[t][1].te || n[c][1].re) && (n[c][1].end.offset - n[c][1].start.offset) % 3 && !((n[t][1].end.offset - n[t][1].start.offset + n[c][1].end.offset - n[c][1].start.offset) % 3)) {
                continue;
              }
              l = n[t][1].end.offset - n[t][1].start.offset > 1 && n[c][1].end.offset - n[c][1].start.offset > 1 ? 2 : 1;
              const f = {
                ...n[t][1].end
              };
              const d = {
                ...n[c][1].start
              };
              As(f, -l);
              As(d, l);
              u = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: f,
                end: {
                  ...n[t][1].end
                }
              };
              o = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: {
                  ...n[c][1].start
                },
                end: d
              };
              i = {
                type: l > 1 ? "strongText" : "emphasisText",
                start: {
                  ...n[t][1].end
                },
                end: {
                  ...n[c][1].start
                }
              };
              r = {
                type: l > 1 ? "strong" : "emphasis",
                start: {
                  ...u.start
                },
                end: {
                  ...o.end
                }
              };
              n[t][1].end = {
                ...u.start
              };
              n[c][1].start = {
                ...o.end
              };
              a = [];
              if (n[t][1].end.offset - n[t][1].start.offset) {
                a = ha(a, [["enter", n[t][1], e], ["exit", n[t][1], e]]);
              }
              a = ha(a, [["enter", r, e], ["enter", u, e], ["exit", u, e], ["enter", i, e]]);
              a = ha(a, Fs(e.parser.constructs.insideSpan.null, n.slice(t + 1, c), e));
              a = ha(a, [["exit", i, e], ["enter", o, e], ["exit", o, e], ["exit", r, e]]);
              if (n[c][1].end.offset - n[c][1].start.offset) {
                s = 2;
                a = ha(a, [["enter", n[c][1], e], ["exit", n[c][1], e]]);
              } else {
                s = 0;
              }
              da(n, t - 1, c - t + 3, a);
              c = t + a.length - s - 2;
              break;
            }
          }
        }
      }
      c = -1;
      while (++c < n.length) {
        if (n[c][1].type === "attentionSequence") {
          n[c][1].type = "data";
        }
      }
      return n;
    },
    tokenize: function (n, e) {
      const t = this.parser.constructs.attentionMarkers.null;
      const r = this.previous;
      const i = Ss(r);
      let u;
      return function (e) {
        u = e;
        n.enter("attentionSequence");
        return o(e);
      };
      function o(l) {
        if (l === u) {
          n.consume(l);
          return o;
        }
        const a = n.exit("attentionSequence");
        const s = Ss(l);
        const c = !s || s === 2 && i || t.includes(l);
        const f = !i || i === 2 && s || t.includes(r);
        a.re = Boolean(u === 42 ? c : c && (i || !f));
        a.te = Boolean(u === 42 ? f : f && (s || !c));
        return e(l);
      }
    }
  };
  function As(n, e) {
    n.column += e;
    n.offset += e;
    n.Yn += e;
  }
  const js = {
    name: "autolink",
    tokenize: function (n, e, t) {
      let r = 0;
      return function (e) {
        n.enter("autolink");
        n.enter("autolinkMarker");
        n.consume(e);
        n.exit("autolinkMarker");
        n.enter("autolinkProtocol");
        return i;
      };
      function i(e) {
        if (ya(e)) {
          n.consume(e);
          return u;
        } else if (e === 64) {
          return t(e);
        } else {
          return a(e);
        }
      }
      function u(n) {
        if (n === 43 || n === 45 || n === 46 || Fa(n)) {
          r = 1;
          return o(n);
        } else {
          return a(n);
        }
      }
      function o(e) {
        if (e === 58) {
          n.consume(e);
          r = 0;
          return l;
        } else if ((e === 43 || e === 45 || e === 46 || Fa(e)) && r++ < 32) {
          n.consume(e);
          return o;
        } else {
          r = 0;
          return a(e);
        }
      }
      function l(r) {
        if (r === 62) {
          n.exit("autolinkProtocol");
          n.enter("autolinkMarker");
          n.consume(r);
          n.exit("autolinkMarker");
          n.exit("autolink");
          return e;
        } else if (r === null || r === 32 || r === 60 || Ea(r)) {
          return t(r);
        } else {
          n.consume(r);
          return l;
        }
      }
      function a(e) {
        if (e === 64) {
          n.consume(e);
          return s;
        } else if (ka(e)) {
          n.consume(e);
          return a;
        } else {
          return t(e);
        }
      }
      function s(n) {
        if (Fa(n)) {
          return c(n);
        } else {
          return t(n);
        }
      }
      function c(t) {
        if (t === 46) {
          n.consume(t);
          r = 0;
          return s;
        } else if (t === 62) {
          n.exit("autolinkProtocol").type = "autolinkEmail";
          n.enter("autolinkMarker");
          n.consume(t);
          n.exit("autolinkMarker");
          n.exit("autolink");
          return e;
        } else {
          return f(t);
        }
      }
      function f(e) {
        if ((e === 45 || Fa(e)) && r++ < 63) {
          const t = e === 45 ? f : c;
          n.consume(e);
          return t;
        }
        return t(e);
      }
    }
  };
  const Is = {
    name: "htmlText",
    tokenize: function (n, e, t) {
      const r = this;
      let i;
      let u;
      let o;
      return function (e) {
        n.enter("htmlText");
        n.enter("htmlTextData");
        n.consume(e);
        return l;
      };
      function l(e) {
        if (e === 33) {
          n.consume(e);
          return a;
        } else if (e === 47) {
          n.consume(e);
          return w;
        } else if (e === 63) {
          n.consume(e);
          return m;
        } else if (ya(e)) {
          n.consume(e);
          return k;
        } else {
          return t(e);
        }
      }
      function a(e) {
        if (e === 45) {
          n.consume(e);
          return s;
        } else if (e === 91) {
          n.consume(e);
          u = 0;
          return h;
        } else if (ya(e)) {
          n.consume(e);
          return g;
        } else {
          return t(e);
        }
      }
      function s(e) {
        if (e === 45) {
          n.consume(e);
          return d;
        } else {
          return t(e);
        }
      }
      function c(e) {
        if (e === null) {
          return t(e);
        } else if (e === 45) {
          n.consume(e);
          return f;
        } else if (Sa(e)) {
          o = c;
          return I(e);
        } else {
          n.consume(e);
          return c;
        }
      }
      function f(e) {
        if (e === 45) {
          n.consume(e);
          return d;
        } else {
          return c(e);
        }
      }
      function d(n) {
        if (n === 62) {
          return j(n);
        } else if (n === 45) {
          return f(n);
        } else {
          return c(n);
        }
      }
      function h(e) {
        const r = "CDATA[";
        if (e === r.charCodeAt(u++)) {
          n.consume(e);
          if (u === 6) {
            return D;
          } else {
            return h;
          }
        } else {
          return t(e);
        }
      }
      function D(e) {
        if (e === null) {
          return t(e);
        } else if (e === 93) {
          n.consume(e);
          return p;
        } else if (Sa(e)) {
          o = D;
          return I(e);
        } else {
          n.consume(e);
          return D;
        }
      }
      function p(e) {
        if (e === 93) {
          n.consume(e);
          return v;
        } else {
          return D(e);
        }
      }
      function v(e) {
        if (e === 62) {
          return j(e);
        } else if (e === 93) {
          n.consume(e);
          return v;
        } else {
          return D(e);
        }
      }
      function g(e) {
        if (e === null || e === 62) {
          return j(e);
        } else if (Sa(e)) {
          o = g;
          return I(e);
        } else {
          n.consume(e);
          return g;
        }
      }
      function m(e) {
        if (e === null) {
          return t(e);
        } else if (e === 63) {
          n.consume(e);
          return b;
        } else if (Sa(e)) {
          o = m;
          return I(e);
        } else {
          n.consume(e);
          return m;
        }
      }
      function b(n) {
        if (n === 62) {
          return j(n);
        } else {
          return m(n);
        }
      }
      function w(e) {
        if (ya(e)) {
          n.consume(e);
          return y;
        } else {
          return t(e);
        }
      }
      function y(e) {
        if (e === 45 || Fa(e)) {
          n.consume(e);
          return y;
        } else {
          return F(e);
        }
      }
      function F(e) {
        if (Sa(e)) {
          o = F;
          return I(e);
        } else if (Aa(e)) {
          n.consume(e);
          return F;
        } else {
          return j(e);
        }
      }
      function k(e) {
        if (e === 45 || Fa(e)) {
          n.consume(e);
          return k;
        } else if (e === 47 || e === 62 || Ba(e)) {
          return E(e);
        } else {
          return t(e);
        }
      }
      function E(e) {
        if (e === 47) {
          n.consume(e);
          return j;
        } else if (e === 58 || e === 95 || ya(e)) {
          n.consume(e);
          return C;
        } else if (Sa(e)) {
          o = E;
          return I(e);
        } else if (Aa(e)) {
          n.consume(e);
          return E;
        } else {
          return j(e);
        }
      }
      function C(e) {
        if (e === 45 || e === 46 || e === 58 || e === 95 || Fa(e)) {
          n.consume(e);
          return C;
        } else {
          return x(e);
        }
      }
      function x(e) {
        if (e === 61) {
          n.consume(e);
          return _;
        } else if (Sa(e)) {
          o = x;
          return I(e);
        } else if (Aa(e)) {
          n.consume(e);
          return x;
        } else {
          return E(e);
        }
      }
      function _(e) {
        if (e === null || e === 60 || e === 61 || e === 62 || e === 96) {
          return t(e);
        } else if (e === 34 || e === 39) {
          n.consume(e);
          i = e;
          return S;
        } else if (Sa(e)) {
          o = _;
          return I(e);
        } else if (Aa(e)) {
          n.consume(e);
          return _;
        } else {
          n.consume(e);
          return B;
        }
      }
      function S(e) {
        if (e === i) {
          n.consume(e);
          i = undefined;
          return A;
        } else if (e === null) {
          return t(e);
        } else if (Sa(e)) {
          o = S;
          return I(e);
        } else {
          n.consume(e);
          return S;
        }
      }
      function B(e) {
        if (e === null || e === 34 || e === 39 || e === 60 || e === 61 || e === 96) {
          return t(e);
        } else if (e === 47 || e === 62 || Ba(e)) {
          return E(e);
        } else {
          n.consume(e);
          return B;
        }
      }
      function A(n) {
        if (n === 47 || n === 62 || Ba(n)) {
          return E(n);
        } else {
          return t(n);
        }
      }
      function j(r) {
        if (r === 62) {
          n.consume(r);
          n.exit("htmlTextData");
          n.exit("htmlText");
          return e;
        } else {
          return t(r);
        }
      }
      function I(e) {
        n.exit("htmlTextData");
        n.enter("lineEnding");
        n.consume(e);
        n.exit("lineEnding");
        return T;
      }
      function T(e) {
        if (Aa(e)) {
          return Oa(n, O, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(e);
        } else {
          return O(e);
        }
      }
      function O(e) {
        n.enter("htmlTextData");
        return o(e);
      }
    }
  };
  const Ts = {
    name: "labelStartLink",
    resolveAll: ks.resolveAll,
    tokenize: function (n, e, t) {
      const r = this;
      return function (e) {
        n.enter("labelLink");
        n.enter("labelMarker");
        n.consume(e);
        n.exit("labelMarker");
        n.exit("labelLink");
        return i;
      };
      function i(n) {
        if (n === 94 && "Xn" in r.parser.constructs) {
          return t(n);
        } else {
          return e(n);
        }
      }
    }
  };
  const Os = {
    name: "hardBreakEscape",
    tokenize: function (n, e, t) {
      return function (e) {
        n.enter("hardBreakEscape");
        n.consume(e);
        return r;
      };
      function r(r) {
        if (Sa(r)) {
          n.exit("hardBreakEscape");
          return e(r);
        } else {
          return t(r);
        }
      }
    }
  };
  const Rs = {
    name: "codeText",
    previous: function (n) {
      return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
    },
    resolve: function (n) {
      let e;
      let t;
      let r = n.length - 4;
      let i = 3;
      if ((n[i][1].type === "lineEnding" || n[i][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
        for (e = i; ++e < r;) {
          if (n[e][1].type === "codeTextData") {
            n[i][1].type = "codeTextPadding";
            n[r][1].type = "codeTextPadding";
            i += 2;
            r -= 2;
            break;
          }
        }
      }
      e = i - 1;
      r++;
      while (++e <= r) {
        if (t === undefined) {
          if (e !== r && n[e][1].type !== "lineEnding") {
            t = e;
          }
        } else if (e === r || n[e][1].type === "lineEnding") {
          n[t][1].type = "codeTextData";
          if (e !== t + 2) {
            n[t][1].end = n[e - 1][1].end;
            n.splice(t + 2, e - t - 2);
            r -= e - t - 2;
            e = t + 2;
          }
          t = undefined;
        }
      }
      return n;
    },
    tokenize: function (n, e, t) {
      let r;
      let i;
      let u = 0;
      return function (e) {
        n.enter("codeText");
        n.enter("codeTextSequence");
        return o(e);
      };
      function o(e) {
        if (e === 96) {
          n.consume(e);
          u++;
          return o;
        } else {
          n.exit("codeTextSequence");
          return l(e);
        }
      }
      function l(e) {
        if (e === null) {
          return t(e);
        } else if (e === 32) {
          n.enter("space");
          n.consume(e);
          n.exit("space");
          return l;
        } else if (e === 96) {
          i = n.enter("codeTextSequence");
          r = 0;
          return s(e);
        } else if (Sa(e)) {
          n.enter("lineEnding");
          n.consume(e);
          n.exit("lineEnding");
          return l;
        } else {
          n.enter("codeTextData");
          return a(e);
        }
      }
      function a(e) {
        if (e === null || e === 32 || e === 96 || Sa(e)) {
          n.exit("codeTextData");
          return l(e);
        } else {
          n.consume(e);
          return a;
        }
      }
      function s(t) {
        if (t === 96) {
          n.consume(t);
          r++;
          return s;
        } else if (r === u) {
          n.exit("codeTextSequence");
          n.exit("codeText");
          return e(t);
        } else {
          i.type = "codeTextData";
          return a(t);
        }
      }
    }
  };
  const Ms = {
    42: qa,
    43: qa,
    45: qa,
    48: qa,
    49: qa,
    50: qa,
    51: qa,
    52: qa,
    53: qa,
    54: qa,
    55: qa,
    56: qa,
    57: qa,
    62: Ja
  };
  const Us = {
    91: is
  };
  const Ls = {
    [-2]: os,
    [-1]: os,
    32: os
  };
  const Ps = {
    35: as,
    42: Za,
    45: [ss, Za],
    60: ds,
    61: ss,
    95: Za,
    96: vs,
    126: vs
  };
  const Ns = {
    38: bs,
    92: ws
  };
  const Hs = {
    [-5]: ys,
    [-4]: ys,
    [-3]: ys,
    33: _s,
    38: bs,
    42: Bs,
    60: [js, Is],
    91: Ts,
    92: [Os, ws],
    93: ks,
    95: Bs,
    96: Rs
  };
  const zs = {
    null: [Bs, za]
  };
  const Vs = {
    null: [42, 95]
  };
  const $s = {
    null: []
  };
  function Gs(n, e, t) {
    let r = {
      Yn: -1,
      Jn: 0,
      line: t && t.line || 1,
      column: t && t.column || 1,
      offset: t && t.offset || 0
    };
    const i = {};
    const u = [];
    let o = [];
    let l = [];
    let a = true;
    const s = {
      attempt: m(function (n, e) {
        b(n, e.from);
      }),
      check: m(g),
      consume: function (n) {
        if (Sa(n)) {
          r.line++;
          r.column = 1;
          r.offset += n === -3 ? 2 : 1;
          w();
        } else if (n !== -1) {
          r.column++;
          r.offset++;
        }
        if (r.Yn < 0) {
          r.Jn++;
        } else {
          r.Yn++;
          if (r.Yn === o[r.Jn].length) {
            r.Yn = -1;
            r.Jn++;
          }
        }
        c.previous = n;
        a = true;
      },
      enter: function (n, e) {
        const t = e || {};
        t.type = n;
        t.start = D();
        c.events.push(["enter", t, c]);
        l.push(t);
        return t;
      },
      exit: function (n) {
        const e = l.pop();
        e.end = D();
        c.events.push(["exit", e, c]);
        return e;
      },
      interrupt: m(g, {
        interrupt: true
      })
    };
    const c = {
      code: null,
      containerState: {},
      defineSkip: function (n) {
        i[n.line] = n.column;
        w();
      },
      events: [],
      now: D,
      parser: n,
      previous: null,
      sliceSerialize: function (n, e) {
        return function (n, e) {
          let t = -1;
          const r = [];
          let i;
          while (++t < n.length) {
            const u = n[t];
            let o;
            if (typeof u == "string") {
              o = u;
            } else {
              switch (u) {
                case -5:
                  o = "\r";
                  break;
                case -4:
                  o = "\n";
                  break;
                case -3:
                  o = "\r\n";
                  break;
                case -2:
                  o = e ? " " : "\t";
                  break;
                case -1:
                  if (!e && i) {
                    continue;
                  }
                  o = " ";
                  break;
                default:
                  o = String.fromCharCode(u);
              }
            }
            i = u === -2;
            r.push(o);
          }
          return r.join("");
        }(h(n), e);
      },
      sliceStream: h,
      write: function (n) {
        o = ha(o, n);
        p();
        if (o[o.length - 1] !== null) {
          return [];
        }
        b(e, 0);
        c.events = Fs(u, c.events, c);
        return c.events;
      }
    };
    let f;
    let d = e.tokenize.call(c, s);
    if (e.resolveAll) {
      u.push(e);
    }
    return c;
    function h(n) {
      return function (n, e) {
        const t = e.start.Jn;
        const r = e.start.Yn;
        const i = e.end.Jn;
        const u = e.end.Yn;
        let o;
        if (t === i) {
          o = [n[t].slice(r, u)];
        } else {
          o = n.slice(t, i);
          if (r > -1) {
            const n = o[0];
            if (typeof n == "string") {
              o[0] = n.slice(r);
            } else {
              o.shift();
            }
          }
          if (u > 0) {
            o.push(n[i].slice(0, u));
          }
        }
        return o;
      }(o, n);
    }
    function D() {
      const {
        Yn: n,
        Jn: e,
        line: t,
        column: i,
        offset: u
      } = r;
      return {
        Yn: n,
        Jn: e,
        line: t,
        column: i,
        offset: u
      };
    }
    function p() {
      let n;
      while (r.Jn < o.length) {
        const e = o[r.Jn];
        if (typeof e == "string") {
          n = r.Jn;
          if (r.Yn < 0) {
            r.Yn = 0;
          }
          while (r.Jn === n && r.Yn < e.length) {
            v(e.charCodeAt(r.Yn));
          }
        } else {
          v(e);
        }
      }
    }
    function v(n) {
      a = undefined;
      f = n;
      d = d(n);
    }
    function g(n, e) {
      e.restore();
    }
    function m(n, e) {
      return function (t, i, u) {
        let o;
        let f;
        let d;
        let h;
        if (Array.isArray(t)) {
          return p(t);
        } else if ("tokenize" in t) {
          return p([t]);
        } else {
          return function (n) {
            return e;
            function e(e) {
              const t = e !== null && n[e];
              const r = e !== null && n.null;
              return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
            }
          }(t);
        }
        function p(n) {
          o = n;
          f = 0;
          if (n.length === 0) {
            return u;
          } else {
            return v(n[f]);
          }
        }
        function v(n) {
          return function (t) {
            h = function () {
              const n = D();
              const e = c.previous;
              const t = c.currentConstruct;
              const i = c.events.length;
              const u = Array.from(l);
              return {
                from: i,
                restore: o
              };
              function o() {
                r = n;
                c.previous = e;
                c.currentConstruct = t;
                c.events.length = i;
                l = u;
                w();
              }
            }();
            d = n;
            if (!n.partial) {
              c.currentConstruct = n;
            }
            if (n.name && c.parser.constructs.disable.null.includes(n.name)) {
              return m(t);
            }
            return n.tokenize.call(e ? Object.assign(Object.create(c), e) : c, s, g, m)(t);
          };
        }
        function g(e) {
          a = true;
          n(d, h);
          return i;
        }
        function m(n) {
          a = true;
          h.restore();
          if (++f < o.length) {
            return v(o[f]);
          } else {
            return u;
          }
        }
      };
    }
    function b(n, e) {
      if (n.resolveAll && !u.includes(n)) {
        u.push(n);
      }
      if (n.resolve) {
        da(c.events, e, c.events.length - e, n.resolve(c.events.slice(e), c));
      }
      if (n.resolveTo) {
        c.events = n.resolveTo(c.events, c);
      }
    }
    function w() {
      if (r.line in i && r.column < 2) {
        r.column = i[r.line];
        r.offset += i[r.line] - 1;
      }
    }
  }
  function Ws(n) {
    const e = function (n) {
      const e = {};
      let t = -1;
      while (++t < n.length) {
        ba(e, n[t]);
      }
      return e;
    }([i, ...((n || {}).extensions || [])]);
    const t = {
      constructs: e,
      content: r(Ra),
      defined: [],
      document: r(Ma),
      flow: r(Ha),
      lazy: {},
      string: r(Va),
      text: r($a)
    };
    return t;
    function r(n) {
      return function (e) {
        return Gs(t, n, e);
      };
    }
  }
  const Ks = /[\0\t\n\r]/g;
  function Zs(n, e) {
    const t = Number.parseInt(n, e);
    if (t < 9 || t === 11 || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || !(~t & 65535) || (t & 65535) == 65534 || t > 1114111) {
      return "�";
    } else {
      return String.fromCodePoint(t);
    }
  }
  const qs = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function Qs(n, e, t) {
    if (e) {
      return e;
    }
    if (t.charCodeAt(0) === 35) {
      const n = t.charCodeAt(1);
      const e = n === 120 || n === 88;
      return Zs(t.slice(e ? 2 : 1), e ? 16 : 10);
    }
    return ms(t) || n;
  }
  const Ys = {}.hasOwnProperty;
  function Js(n, e, t) {
    if (typeof e != "string") {
      t = e;
      e = undefined;
    }
    return function (n) {
      const e = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
          autolink: u(en),
          autolinkProtocol: C,
          autolinkEmail: C,
          atxHeading: u(Y),
          blockQuote: u(W),
          characterEscape: C,
          characterReference: C,
          codeFenced: u(K),
          codeFencedFenceInfo: o,
          codeFencedFenceMeta: o,
          codeIndented: u(K, o),
          codeText: u(Z, o),
          codeTextData: C,
          data: C,
          codeFlowValue: C,
          definition: u(q),
          definitionDestinationString: o,
          definitionLabelString: o,
          definitionTitleString: o,
          emphasis: u(Q),
          hardBreakEscape: u(J),
          hardBreakTrailing: u(J),
          htmlFlow: u(X, o),
          htmlFlowData: C,
          htmlText: u(X, o),
          htmlTextData: C,
          image: u(nn),
          label: o,
          link: u(en),
          listItem: u(rn),
          listItemValue: d,
          listOrdered: u(tn, f),
          listUnordered: u(tn),
          paragraph: u(un),
          reference: P,
          referenceString: o,
          resourceDestinationString: o,
          resourceTitleString: o,
          setextHeading: u(Y),
          strong: u(on),
          thematicBreak: u(an)
        },
        exit: {
          atxHeading: a(),
          atxHeadingSequence: y,
          autolink: a(),
          autolinkEmail: G,
          autolinkProtocol: $,
          blockQuote: a(),
          characterEscapeValue: x,
          characterReferenceMarkerHexadecimal: H,
          characterReferenceMarkerNumeric: H,
          characterReferenceValue: z,
          characterReference: V,
          codeFenced: a(v),
          codeFencedFence: p,
          codeFencedFenceInfo: h,
          codeFencedFenceMeta: D,
          codeFlowValue: x,
          codeIndented: a(g),
          codeText: a(j),
          codeTextData: x,
          data: x,
          definition: a(),
          definitionDestinationString: w,
          definitionLabelString: m,
          definitionTitleString: b,
          emphasis: a(),
          hardBreakEscape: a(S),
          hardBreakTrailing: a(S),
          htmlFlow: a(B),
          htmlFlowData: x,
          htmlText: a(A),
          htmlTextData: x,
          image: a(T),
          label: R,
          labelText: O,
          lineEnding: _,
          link: a(I),
          listItem: a(),
          listOrdered: a(),
          listUnordered: a(),
          paragraph: a(),
          referenceString: N,
          resourceDestinationString: M,
          resourceTitleString: U,
          resource: L,
          setextHeading: a(E),
          setextHeadingLineSequence: k,
          setextHeadingText: F,
          strong: a(),
          thematicBreak: a()
        }
      };
      nc(e, (n || {}).mdastExtensions || []);
      const t = {};
      return r;
      function r(n) {
        let r = {
          type: "root",
          children: []
        };
        const u = {
          stack: [r],
          tokenStack: [],
          config: e,
          enter: l,
          exit: s,
          buffer: o,
          resume: c,
          data: t
        };
        const a = [];
        let f = -1;
        while (++f < n.length) {
          if (n[f][1].type === "listOrdered" || n[f][1].type === "listUnordered") {
            if (n[f][0] === "enter") {
              a.push(f);
            } else {
              f = i(n, a.pop(), f);
            }
          }
        }
        for (f = -1; ++f < n.length;) {
          const t = e[n[f][0]];
          if (Ys.call(t, n[f][1].type)) {
            t[n[f][1].type].call(Object.assign({
              sliceSerialize: n[f][2].sliceSerialize
            }, u), n[f][1]);
          }
        }
        if (u.tokenStack.length > 0) {
          const n = u.tokenStack[u.tokenStack.length - 1];
          (n[1] || tc).call(u, undefined, n[0]);
        }
        r.position = {
          start: Xs(n.length > 0 ? n[0][1].start : {
            line: 1,
            column: 1,
            offset: 0
          }),
          end: Xs(n.length > 0 ? n[n.length - 2][1].end : {
            line: 1,
            column: 1,
            offset: 0
          })
        };
        f = -1;
        while (++f < e.transforms.length) {
          r = e.transforms[f](r) || r;
        }
        return r;
      }
      function i(n, e, t) {
        let r;
        let i;
        let u;
        let o;
        let l = e - 1;
        let a = -1;
        let s = false;
        while (++l <= t) {
          const e = n[l];
          switch (e[1].type) {
            case "listUnordered":
            case "listOrdered":
            case "blockQuote":
              if (e[0] === "enter") {
                a++;
              } else {
                a--;
              }
              o = undefined;
              break;
            case "lineEndingBlank":
              if (e[0] === "enter") {
                if (!!r && !o && !a && !u) {
                  u = l;
                }
                o = undefined;
              }
              break;
            case "linePrefix":
            case "listItemValue":
            case "listItemMarker":
            case "listItemPrefix":
            case "listItemPrefixWhitespace":
              break;
            default:
              o = undefined;
          }
          if (!a && e[0] === "enter" && e[1].type === "listItemPrefix" || a === -1 && e[0] === "exit" && (e[1].type === "listUnordered" || e[1].type === "listOrdered")) {
            if (r) {
              let o = l;
              for (i = undefined; o--;) {
                const e = n[o];
                if (e[1].type === "lineEnding" || e[1].type === "lineEndingBlank") {
                  if (e[0] === "exit") {
                    continue;
                  }
                  if (i) {
                    n[i][1].type = "lineEndingBlank";
                    s = true;
                  }
                  e[1].type = "lineEnding";
                  i = o;
                } else if (e[1].type !== "linePrefix" && e[1].type !== "blockQuotePrefix" && e[1].type !== "blockQuotePrefixWhitespace" && e[1].type !== "blockQuoteMarker" && e[1].type !== "listItemIndent") {
                  break;
                }
              }
              if (u && (!i || u < i)) {
                r.ie = true;
              }
              r.end = Object.assign({}, i ? n[i][1].start : e[1].end);
              n.splice(i || l, 0, ["exit", r, e[2]]);
              l++;
              t++;
            }
            if (e[1].type === "listItemPrefix") {
              const i = {
                type: "listItem",
                ie: false,
                start: Object.assign({}, e[1].start),
                end: undefined
              };
              r = i;
              n.splice(l, 0, ["enter", i, e[2]]);
              l++;
              t++;
              u = undefined;
              o = true;
            }
          }
        }
        n[e][1].ie = s;
        return t;
      }
      function u(n, e) {
        return t;
        function t(t) {
          l.call(this, n(t), t);
          if (e) {
            e.call(this, t);
          }
        }
      }
      function o() {
        this.stack.push({
          type: "fragment",
          children: []
        });
      }
      function l(n, e, t) {
        this.stack[this.stack.length - 1].children.push(n);
        this.stack.push(n);
        this.tokenStack.push([e, t || undefined]);
        n.position = {
          start: Xs(e.start),
          end: undefined
        };
      }
      function a(n) {
        return e;
        function e(e) {
          if (n) {
            n.call(this, e);
          }
          s.call(this, e);
        }
      }
      function s(n, e) {
        const t = this.stack.pop();
        const r = this.tokenStack.pop();
        if (!r) {
          throw new Error("Cannot close `" + n.type + "` (" + Hl({
            start: n.start,
            end: n.end
          }) + "): it’s not open");
        }
        if (r[0].type !== n.type) {
          if (e) {
            e.call(this, n, r[0]);
          } else {
            (r[1] || tc).call(this, n, r[0]);
          }
        }
        t.position.end = Xs(n.end);
      }
      function c() {
        return function (n, e) {
          const t = e || sa;
          return ca(n, typeof t.includeImageAlt != "boolean" || t.includeImageAlt, typeof t.includeHtml != "boolean" || t.includeHtml);
        }(this.stack.pop());
      }
      function f() {
        this.data.expectingFirstListItemValue = true;
      }
      function d(n) {
        if (this.data.expectingFirstListItemValue) {
          this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(n), 10);
          this.data.expectingFirstListItemValue = undefined;
        }
      }
      function h() {
        const n = this.resume();
        this.stack[this.stack.length - 1].lang = n;
      }
      function D() {
        const n = this.resume();
        this.stack[this.stack.length - 1].meta = n;
      }
      function p() {
        if (!this.data.flowCodeInside) {
          this.buffer();
          this.data.flowCodeInside = true;
        }
      }
      function v() {
        const n = this.resume();
        this.stack[this.stack.length - 1].value = n.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        this.data.flowCodeInside = undefined;
      }
      function g() {
        const n = this.resume();
        this.stack[this.stack.length - 1].value = n.replace(/(\r?\n|\r)$/g, "");
      }
      function m(n) {
        const e = this.resume();
        const t = this.stack[this.stack.length - 1];
        t.label = e;
        t.identifier = rs(this.sliceSerialize(n)).toLowerCase();
      }
      function b() {
        const n = this.resume();
        this.stack[this.stack.length - 1].title = n;
      }
      function w() {
        const n = this.resume();
        this.stack[this.stack.length - 1].url = n;
      }
      function y(n) {
        const e = this.stack[this.stack.length - 1];
        if (!e.depth) {
          const t = this.sliceSerialize(n).length;
          e.depth = t;
        }
      }
      function F() {
        this.data.setextHeadingSlurpLineEnding = true;
      }
      function k(n) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(n).codePointAt(0) === 61 ? 1 : 2;
      }
      function E() {
        this.data.setextHeadingSlurpLineEnding = undefined;
      }
      function C(n) {
        const e = this.stack[this.stack.length - 1].children;
        let t = e[e.length - 1];
        if (!t || t.type !== "text") {
          t = ln();
          t.position = {
            start: Xs(n.start),
            end: undefined
          };
          e.push(t);
        }
        this.stack.push(t);
      }
      function x(n) {
        const e = this.stack.pop();
        e.value += this.sliceSerialize(n);
        e.position.end = Xs(n.end);
      }
      function _(n) {
        const t = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
          t.children[t.children.length - 1].position.end = Xs(n.end);
          this.data.atHardBreak = undefined;
          return;
        }
        if (!this.data.setextHeadingSlurpLineEnding && e.canContainEols.includes(t.type)) {
          C.call(this, n);
          x.call(this, n);
        }
      }
      function S() {
        this.data.atHardBreak = true;
      }
      function B() {
        const n = this.resume();
        this.stack[this.stack.length - 1].value = n;
      }
      function A() {
        const n = this.resume();
        this.stack[this.stack.length - 1].value = n;
      }
      function j() {
        const n = this.resume();
        this.stack[this.stack.length - 1].value = n;
      }
      function I() {
        const n = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
          const e = this.data.referenceType || "shortcut";
          n.type += "Reference";
          n.referenceType = e;
          delete n.url;
          delete n.title;
        } else {
          delete n.identifier;
          delete n.label;
        }
        this.data.referenceType = undefined;
      }
      function T() {
        const n = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
          const e = this.data.referenceType || "shortcut";
          n.type += "Reference";
          n.referenceType = e;
          delete n.url;
          delete n.title;
        } else {
          delete n.identifier;
          delete n.label;
        }
        this.data.referenceType = undefined;
      }
      function O(n) {
        const e = this.sliceSerialize(n);
        const t = this.stack[this.stack.length - 2];
        t.label = function (n) {
          return n.replace(qs, Qs);
        }(e);
        t.identifier = rs(e).toLowerCase();
      }
      function R() {
        const n = this.stack[this.stack.length - 1];
        const e = this.resume();
        const t = this.stack[this.stack.length - 1];
        this.data.inReference = true;
        if (t.type === "link") {
          const e = n.children;
          t.children = e;
        } else {
          t.alt = e;
        }
      }
      function M() {
        const n = this.resume();
        this.stack[this.stack.length - 1].url = n;
      }
      function U() {
        const n = this.resume();
        this.stack[this.stack.length - 1].title = n;
      }
      function L() {
        this.data.inReference = undefined;
      }
      function P() {
        this.data.referenceType = "collapsed";
      }
      function N(n) {
        const e = this.resume();
        const t = this.stack[this.stack.length - 1];
        t.label = e;
        t.identifier = rs(this.sliceSerialize(n)).toLowerCase();
        this.data.referenceType = "full";
      }
      function H(n) {
        this.data.characterReferenceType = n.type;
      }
      function z(n) {
        const e = this.sliceSerialize(n);
        const t = this.data.characterReferenceType;
        let r;
        if (t) {
          r = Zs(e, t === "characterReferenceMarkerNumeric" ? 10 : 16);
          this.data.characterReferenceType = undefined;
        } else {
          r = ms(e);
        }
        this.stack[this.stack.length - 1].value += r;
      }
      function V(n) {
        this.stack.pop().position.end = Xs(n.end);
      }
      function $(n) {
        x.call(this, n);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(n);
      }
      function G(n) {
        x.call(this, n);
        this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(n);
      }
      function W() {
        return {
          type: "blockquote",
          children: []
        };
      }
      function K() {
        return {
          type: "code",
          lang: null,
          meta: null,
          value: ""
        };
      }
      function Z() {
        return {
          type: "inlineCode",
          value: ""
        };
      }
      function q() {
        return {
          type: "definition",
          identifier: "",
          label: null,
          title: null,
          url: ""
        };
      }
      function Q() {
        return {
          type: "emphasis",
          children: []
        };
      }
      function Y() {
        return {
          type: "heading",
          depth: 0,
          children: []
        };
      }
      function J() {
        return {
          type: "break"
        };
      }
      function X() {
        return {
          type: "html",
          value: ""
        };
      }
      function nn() {
        return {
          type: "image",
          title: null,
          url: "",
          alt: null
        };
      }
      function en() {
        return {
          type: "link",
          title: null,
          url: "",
          children: []
        };
      }
      function tn(n) {
        return {
          type: "list",
          ordered: n.type === "listOrdered",
          start: null,
          spread: n.ie,
          children: []
        };
      }
      function rn(n) {
        return {
          type: "listItem",
          spread: n.ie,
          checked: null,
          children: []
        };
      }
      function un() {
        return {
          type: "paragraph",
          children: []
        };
      }
      function on() {
        return {
          type: "strong",
          children: []
        };
      }
      function ln() {
        return {
          type: "text",
          value: ""
        };
      }
      function an() {
        return {
          type: "thematicBreak"
        };
      }
    }(t)(function (n) {
      while (!va(n));
      return n;
    }(Ws(t).document().write(function () {
      let n;
      let e = 1;
      let t = "";
      let r = true;
      return function (i, u, o) {
        const l = [];
        let a;
        let s;
        let c;
        let f;
        let d;
        i = t + (typeof i == "string" ? i.toString() : new TextDecoder(u || undefined).decode(i));
        c = 0;
        t = "";
        if (r) {
          if (i.charCodeAt(0) === 65279) {
            c++;
          }
          r = undefined;
        }
        while (c < i.length) {
          Ks.lastIndex = c;
          a = Ks.exec(i);
          f = a && a.index !== undefined ? a.index : i.length;
          d = i.charCodeAt(f);
          if (!a) {
            t = i.slice(c);
            break;
          }
          if (d === 10 && c === f && n) {
            l.push(-3);
            n = undefined;
          } else {
            if (n) {
              l.push(-5);
              n = undefined;
            }
            if (c < f) {
              l.push(i.slice(c, f));
              e += f - c;
            }
            switch (d) {
              case 0:
                l.push(65533);
                e++;
                break;
              case 9:
                s = Math.ceil(e / 4) * 4;
                l.push(-2);
                while (e++ < s) {
                  l.push(-1);
                }
                break;
              case 10:
                l.push(-4);
                e = 1;
                break;
              default:
                n = true;
                e = 1;
            }
          }
          c = f + 1;
        }
        if (o) {
          if (n) {
            l.push(-5);
          }
          if (t) {
            l.push(t);
          }
          l.push(null);
        }
        return l;
      };
    }()(n, e, true))));
  }
  function Xs(n) {
    return {
      line: n.line,
      column: n.column,
      offset: n.offset
    };
  }
  function nc(n, e) {
    let t = -1;
    while (++t < e.length) {
      const r = e[t];
      if (Array.isArray(r)) {
        nc(n, r);
      } else {
        ec(n, r);
      }
    }
  }
  function ec(n, e) {
    let t;
    for (t in e) {
      if (Ys.call(e, t)) {
        switch (t) {
          case "canContainEols":
            {
              const r = e[t];
              if (r) {
                n[t].push(...r);
              }
              break;
            }
          case "transforms":
            {
              const r = e[t];
              if (r) {
                n[t].push(...r);
              }
              break;
            }
          case "enter":
          case "exit":
            {
              const r = e[t];
              if (r) {
                Object.assign(n[t], r);
              }
              break;
            }
        }
      }
    }
  }
  function tc(n, e) {
    throw n ? new Error("Cannot close `" + n.type + "` (" + Hl({
      start: n.start,
      end: n.end
    }) + "): a different token (`" + e.type + "`, " + Hl({
      start: e.start,
      end: e.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + e.type + "`, " + Hl({
      start: e.start,
      end: e.end
    }) + ") is still open");
  }
  function rc(n) {
    const e = this;
    e.parser = function (t) {
      return Js(t, {
        ...e.data("settings"),
        ...n,
        extensions: e.data("micromarkExtensions") || [],
        mdastExtensions: e.data("fromMarkdownExtensions") || []
      });
    };
  }
  const ic = typeof self == "object" ? self : globalThis;
  const uc = n => ((n, e) => {
    const t = (e, t) => {
      n.set(t, e);
      return e;
    };
    const r = i => {
      if (n.has(i)) {
        return n.get(i);
      }
      const [u, o] = e[i];
      switch (u) {
        case 0:
        case -1:
          return t(o, i);
        case 1:
          {
            const n = t([], i);
            for (const e of o) {
              n.push(r(e));
            }
            return n;
          }
        case 2:
          {
            const n = t({}, i);
            for (const [e, t] of o) {
              n[r(e)] = r(t);
            }
            return n;
          }
        case 3:
          return t(new Date(o), i);
        case 4:
          {
            const {
              source: n,
              flags: e
            } = o;
            return t(new RegExp(n, e), i);
          }
        case 5:
          {
            const n = t(new Map(), i);
            for (const [e, t] of o) {
              n.set(r(e), r(t));
            }
            return n;
          }
        case 6:
          {
            const n = t(new Set(), i);
            for (const e of o) {
              n.add(r(e));
            }
            return n;
          }
        case 7:
          {
            const {
              name: n,
              message: e
            } = o;
            return t(new ic[n](e), i);
          }
        case 8:
          return t(BigInt(o), i);
        case "BigInt":
          return t(Object(BigInt(o)), i);
        case "ArrayBuffer":
          return t(new Uint8Array(o).buffer, o);
        case "DataView":
          {
            const {
              buffer: n
            } = new Uint8Array(o);
            return t(new DataView(n), o);
          }
      }
      return t(new ic[u](o), i);
    };
    return r;
  })(new Map(), n)(0);
  const oc = "";
  const {
    toString: lc
  } = {};
  const {
    keys: ac
  } = Object;
  const sc = n => {
    const e = typeof n;
    if (e !== "object" || !n) {
      return [0, e];
    }
    const t = lc.call(n).slice(8, -1);
    switch (t) {
      case "Array":
        return [1, oc];
      case "Object":
        return [2, oc];
      case "Date":
        return [3, oc];
      case "RegExp":
        return [4, oc];
      case "Map":
        return [5, oc];
      case "Set":
        return [6, oc];
      case "DataView":
        return [1, t];
    }
    if (t.includes("Array")) {
      return [1, t];
    } else if (t.includes("Error")) {
      return [7, t];
    } else {
      return [2, t];
    }
  };
  const cc = ([n, e]) => n === 0 && (e === "function" || e === "symbol");
  const fc = (n, {
    json: e,
    lossy: t
  } = {}) => {
    const r = [];
    ((n, e, t, r) => {
      const i = (n, e) => {
        const i = r.push(n) - 1;
        t.set(e, i);
        return i;
      };
      const u = r => {
        if (t.has(r)) {
          return t.get(r);
        }
        let [o, l] = sc(r);
        switch (o) {
          case 0:
            {
              let e = r;
              switch (l) {
                case "bigint":
                  o = 8;
                  e = r.toString();
                  break;
                case "function":
                case "symbol":
                  if (n) {
                    throw new TypeError("unable to serialize " + l);
                  }
                  e = null;
                  break;
                case "undefined":
                  return i([-1], r);
              }
              return i([o, e], r);
            }
          case 1:
            {
              if (l) {
                let n = r;
                if (l === "DataView") {
                  n = new Uint8Array(r.buffer);
                } else if (l === "ArrayBuffer") {
                  n = new Uint8Array(r);
                }
                return i([l, [...n]], r);
              }
              const n = [];
              const e = i([o, n], r);
              for (const e of r) {
                n.push(u(e));
              }
              return e;
            }
          case 2:
            {
              if (l) {
                switch (l) {
                  case "BigInt":
                    return i([l, r.toString()], r);
                  case "Boolean":
                  case "Number":
                  case "String":
                    return i([l, r.valueOf()], r);
                }
              }
              if (e && "toJSON" in r) {
                return u(r.toJSON());
              }
              const t = [];
              const a = i([o, t], r);
              for (const e of ac(r)) {
                if (!!n || !cc(sc(r[e]))) {
                  t.push([u(e), u(r[e])]);
                }
              }
              return a;
            }
          case 3:
            return i([o, r.toISOString()], r);
          case 4:
            {
              const {
                source: n,
                flags: e
              } = r;
              return i([o, {
                source: n,
                flags: e
              }], r);
            }
          case 5:
            {
              const e = [];
              const t = i([o, e], r);
              for (const [t, i] of r) {
                if (n || !cc(sc(t)) && !cc(sc(i))) {
                  e.push([u(t), u(i)]);
                }
              }
              return t;
            }
          case 6:
            {
              const e = [];
              const t = i([o, e], r);
              for (const t of r) {
                if (!!n || !cc(sc(t))) {
                  e.push(u(t));
                }
              }
              return t;
            }
        }
        const {
          message: a
        } = r;
        return i([o, {
          name: l,
          message: a
        }], r);
      };
      return u;
    })(!e && !t, !!e, new Map(), r)(n);
    return r;
  };
  const dc = typeof structuredClone == "function" ? (n, e) => e && ("json" in e || "lossy" in e) ? uc(fc(n, e)) : structuredClone(n) : (n, e) => uc(fc(n, e));
  function hc(n) {
    const e = [];
    let t = -1;
    let r = 0;
    let i = 0;
    while (++t < n.length) {
      const u = n.charCodeAt(t);
      let o = "";
      if (u === 37 && Fa(n.charCodeAt(t + 1)) && Fa(n.charCodeAt(t + 2))) {
        i = 2;
      } else if (u < 128) {
        if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))) {
          o = String.fromCharCode(u);
        }
      } else if (u > 55295 && u < 57344) {
        const e = n.charCodeAt(t + 1);
        if (u < 56320 && e > 56319 && e < 57344) {
          o = String.fromCharCode(u, e);
          i = 1;
        } else {
          o = "�";
        }
      } else {
        o = String.fromCharCode(u);
      }
      if (o) {
        e.push(n.slice(r, t), encodeURIComponent(o));
        r = t + i + 1;
        o = "";
      }
      if (i) {
        t += i;
        i = 0;
      }
    }
    return e.join("") + n.slice(r);
  }
  function Dc(n, e) {
    const t = [{
      type: "text",
      value: "↩"
    }];
    if (e > 1) {
      t.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
          type: "text",
          value: String(e)
        }]
      });
    }
    return t;
  }
  function pc(n, e) {
    return "Back to reference " + (n + 1) + (e > 1 ? "-" + e : "");
  }
  const vc = function (n) {
    if (n == null) {
      return mc;
    }
    if (typeof n == "function") {
      return gc(n);
    }
    if (typeof n == "object") {
      if (Array.isArray(n)) {
        return function (n) {
          const e = [];
          let t = -1;
          while (++t < n.length) {
            e[t] = vc(n[t]);
          }
          return gc(r);
          function r(...n) {
            let t = -1;
            while (++t < e.length) {
              if (e[t].apply(this, n)) {
                return true;
              }
            }
            return false;
          }
        }(n);
      } else {
        return function (n) {
          const e = n;
          return gc(t);
          function t(t) {
            const r = t;
            let i;
            for (i in n) {
              if (r[i] !== e[i]) {
                return false;
              }
            }
            return true;
          }
        }(n);
      }
    }
    if (typeof n == "string") {
      return function (n) {
        return gc(e);
        function e(e) {
          return e && e.type === n;
        }
      }(n);
    }
    throw new Error("Expected function, string, or object as test");
  };
  function gc(n) {
    return function (e, t, r) {
      return Boolean(bc(e) && n.call(this, e, typeof t == "number" ? t : undefined, r || undefined));
    };
  }
  function mc() {
    return true;
  }
  function bc(n) {
    return n !== null && typeof n == "object" && "type" in n;
  }
  const wc = [];
  const yc = true;
  const Fc = false;
  function kc(n, e, t, r) {
    let i;
    if (typeof e == "function" && typeof t != "function") {
      r = t;
      t = e;
    } else {
      i = e;
    }
    const u = vc(i);
    const o = r ? -1 : 1;
    (function n(i, l, a) {
      const s = i && typeof i == "object" ? i : {};
      if (typeof s.type == "string") {
        const n = typeof s.tagName == "string" ? s.tagName : typeof s.name == "string" ? s.name : undefined;
        Object.defineProperty(c, "name", {
          value: "node (" + i.type + (n ? "<" + n + ">" : "") + ")"
        });
      }
      return c;
      function c() {
        let s;
        let c;
        let f;
        let d = wc;
        if ((!e || u(i, l, a[a.length - 1] || undefined)) && (d = function (n) {
          if (Array.isArray(n)) {
            return n;
          }
          if (typeof n == "number") {
            return [yc, n];
          }
          if (n == null) {
            return wc;
          } else {
            return [n];
          }
        }(t(i, a)), d[0] === Fc)) {
          return d;
        }
        if ("children" in i && i.children) {
          const e = i;
          if (e.children && d[0] !== "skip") {
            c = (r ? e.children.length : -1) + o;
            f = a.concat(e);
            while (c > -1 && c < e.children.length) {
              const t = e.children[c];
              s = n(t, c, f)();
              if (s[0] === Fc) {
                return s;
              }
              c = typeof s[1] == "number" ? s[1] : c + o;
            }
          }
        }
        return d;
      }
    })(n, undefined, [])();
  }
  function Ec(n, e, t, r) {
    let i;
    let u;
    let o;
    if (typeof e == "function" && typeof t != "function") {
      u = undefined;
      o = e;
      i = t;
    } else {
      u = e;
      o = t;
      i = r;
    }
    kc(n, u, function (n, e) {
      const t = e[e.length - 1];
      const r = t ? t.children.indexOf(n) : undefined;
      return o(n, r, t);
    }, i);
  }
  function Cc(n, e) {
    const t = e.referenceType;
    let r = "]";
    if (t === "collapsed") {
      r += "[]";
    } else if (t === "full") {
      r += "[" + (e.label || e.identifier) + "]";
    }
    if (e.type === "imageReference") {
      return [{
        type: "text",
        value: "![" + e.alt + r
      }];
    }
    const i = n.all(e);
    const u = i[0];
    if (u && u.type === "text") {
      u.value = "[" + u.value;
    } else {
      i.unshift({
        type: "text",
        value: "["
      });
    }
    const o = i[i.length - 1];
    if (o && o.type === "text") {
      o.value += r;
    } else {
      i.push({
        type: "text",
        value: r
      });
    }
    return i;
  }
  function xc(n) {
    const e = n.spread;
    if (e == null) {
      return n.children.length > 1;
    } else {
      return e;
    }
  }
  function _c(n) {
    const e = String(n);
    const t = /\r?\n|\r/g;
    let r = t.exec(e);
    let i = 0;
    const u = [];
    while (r) {
      u.push(Sc(e.slice(i, r.index), i > 0, true), r[0]);
      i = r.index + r[0].length;
      r = t.exec(e);
    }
    u.push(Sc(e.slice(i), i > 0, false));
    return u.join("");
  }
  function Sc(n, e, t) {
    let r = 0;
    let i = n.length;
    if (e) {
      let e = n.codePointAt(r);
      while (e === 9 || e === 32) {
        r++;
        e = n.codePointAt(r);
      }
    }
    if (t) {
      let e = n.codePointAt(i - 1);
      while (e === 9 || e === 32) {
        i--;
        e = n.codePointAt(i - 1);
      }
    }
    if (i > r) {
      return n.slice(r, i);
    } else {
      return "";
    }
  }
  const Bc = {
    blockquote: function (n, e) {
      const t = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: n.wrap(n.all(e), true)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    break: function (n, e) {
      const t = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      };
      n.patch(e, t);
      return [n.applyData(e, t), {
        type: "text",
        value: "\n"
      }];
    },
    code: function (n, e) {
      const t = e.value ? e.value + "\n" : "";
      const r = {};
      const i = e.lang ? e.lang.split(/\s+/) : [];
      if (i.length > 0) {
        r.className = ["language-" + i[0]];
      }
      let u = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
          type: "text",
          value: t
        }]
      };
      if (e.meta) {
        u.data = {
          meta: e.meta
        };
      }
      n.patch(e, u);
      u = n.applyData(e, u);
      u = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [u]
      };
      n.patch(e, u);
      return u;
    },
    delete: function (n, e) {
      const t = {
        type: "element",
        tagName: "del",
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    emphasis: function (n, e) {
      const t = {
        type: "element",
        tagName: "em",
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    footnoteReference: function (n, e) {
      const t = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-";
      const r = String(e.identifier).toUpperCase();
      const i = hc(r.toLowerCase());
      const u = n.footnoteOrder.indexOf(r);
      let o;
      let l = n.footnoteCounts.get(r);
      if (l === undefined) {
        l = 0;
        n.footnoteOrder.push(r);
        o = n.footnoteOrder.length;
      } else {
        o = u + 1;
      }
      l += 1;
      n.footnoteCounts.set(r, l);
      const a = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fn-" + i,
          id: t + "fnref-" + i + (l > 1 ? "-" + l : ""),
          dataFootnoteRef: true,
          ariaDescribedBy: ["footnote-label"]
        },
        children: [{
          type: "text",
          value: String(o)
        }]
      };
      n.patch(e, a);
      const s = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [a]
      };
      n.patch(e, s);
      return n.applyData(e, s);
    },
    heading: function (n, e) {
      const t = {
        type: "element",
        tagName: "h" + e.depth,
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    html: function (n, e) {
      if (n.options.allowDangerousHtml) {
        const t = {
          type: "raw",
          value: e.value
        };
        n.patch(e, t);
        return n.applyData(e, t);
      }
    },
    imageReference: function (n, e) {
      const t = String(e.identifier).toUpperCase();
      const r = n.definitionById.get(t);
      if (!r) {
        return Cc(n, e);
      }
      const i = {
        src: hc(r.url || ""),
        alt: e.alt
      };
      if (r.title !== null && r.title !== undefined) {
        i.title = r.title;
      }
      const u = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
      };
      n.patch(e, u);
      return n.applyData(e, u);
    },
    image: function (n, e) {
      const t = {
        src: hc(e.url)
      };
      if (e.alt !== null && e.alt !== undefined) {
        t.alt = e.alt;
      }
      if (e.title !== null && e.title !== undefined) {
        t.title = e.title;
      }
      const r = {
        type: "element",
        tagName: "img",
        properties: t,
        children: []
      };
      n.patch(e, r);
      return n.applyData(e, r);
    },
    inlineCode: function (n, e) {
      const t = {
        type: "text",
        value: e.value.replace(/\r?\n|\r/g, " ")
      };
      n.patch(e, t);
      const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [t]
      };
      n.patch(e, r);
      return n.applyData(e, r);
    },
    linkReference: function (n, e) {
      const t = String(e.identifier).toUpperCase();
      const r = n.definitionById.get(t);
      if (!r) {
        return Cc(n, e);
      }
      const i = {
        href: hc(r.url || "")
      };
      if (r.title !== null && r.title !== undefined) {
        i.title = r.title;
      }
      const u = {
        type: "element",
        tagName: "a",
        properties: i,
        children: n.all(e)
      };
      n.patch(e, u);
      return n.applyData(e, u);
    },
    link: function (n, e) {
      const t = {
        href: hc(e.url)
      };
      if (e.title !== null && e.title !== undefined) {
        t.title = e.title;
      }
      const r = {
        type: "element",
        tagName: "a",
        properties: t,
        children: n.all(e)
      };
      n.patch(e, r);
      return n.applyData(e, r);
    },
    listItem: function (n, e, t) {
      const r = n.all(e);
      const i = t ? function (n) {
        let e = false;
        if (n.type === "list") {
          e = n.spread || false;
          const t = n.children;
          let r = -1;
          while (!e && ++r < t.length) {
            e = xc(t[r]);
          }
        }
        return e;
      }(t) : xc(e);
      const u = {};
      const o = [];
      if (typeof e.checked == "boolean") {
        const n = r[0];
        let t;
        if (n && n.type === "element" && n.tagName === "p") {
          t = n;
        } else {
          t = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
          };
          r.unshift(t);
        }
        if (t.children.length > 0) {
          t.children.unshift({
            type: "text",
            value: " "
          });
        }
        t.children.unshift({
          type: "element",
          tagName: "input",
          properties: {
            type: "checkbox",
            checked: e.checked,
            disabled: true
          },
          children: []
        });
        u.className = ["task-list-item"];
      }
      let l = -1;
      while (++l < r.length) {
        const n = r[l];
        if (i || l !== 0 || n.type !== "element" || n.tagName !== "p") {
          o.push({
            type: "text",
            value: "\n"
          });
        }
        if (n.type !== "element" || n.tagName !== "p" || i) {
          o.push(n);
        } else {
          o.push(...n.children);
        }
      }
      const a = r[r.length - 1];
      if (a && (i || a.type !== "element" || a.tagName !== "p")) {
        o.push({
          type: "text",
          value: "\n"
        });
      }
      const s = {
        type: "element",
        tagName: "li",
        properties: u,
        children: o
      };
      n.patch(e, s);
      return n.applyData(e, s);
    },
    list: function (n, e) {
      const t = {};
      const r = n.all(e);
      let i = -1;
      for (typeof e.start == "number" && e.start !== 1 && (t.start = e.start); ++i < r.length;) {
        const n = r[i];
        if (n.type === "element" && n.tagName === "li" && n.properties && Array.isArray(n.properties.className) && n.properties.className.includes("task-list-item")) {
          t.className = ["contains-task-list"];
          break;
        }
      }
      const u = {
        type: "element",
        tagName: e.ordered ? "ol" : "ul",
        properties: t,
        children: n.wrap(r, true)
      };
      n.patch(e, u);
      return n.applyData(e, u);
    },
    paragraph: function (n, e) {
      const t = {
        type: "element",
        tagName: "p",
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    root: function (n, e) {
      const t = {
        type: "root",
        children: n.wrap(n.all(e))
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    strong: function (n, e) {
      const t = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    table: function (n, e) {
      const t = n.all(e);
      const r = t.shift();
      const i = [];
      if (r) {
        const t = {
          type: "element",
          tagName: "thead",
          properties: {},
          children: n.wrap([r], true)
        };
        n.patch(e.children[0], t);
        i.push(t);
      }
      if (t.length > 0) {
        const r = {
          type: "element",
          tagName: "tbody",
          properties: {},
          children: n.wrap(t, true)
        };
        const u = Pl(e.children[1]);
        const o = Ll(e.children[e.children.length - 1]);
        if (u && o) {
          r.position = {
            start: u,
            end: o
          };
        }
        i.push(r);
      }
      const u = {
        type: "element",
        tagName: "table",
        properties: {},
        children: n.wrap(i, true)
      };
      n.patch(e, u);
      return n.applyData(e, u);
    },
    tableCell: function (n, e) {
      const t = {
        type: "element",
        tagName: "td",
        properties: {},
        children: n.all(e)
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    tableRow: function (n, e, t) {
      const r = t ? t.children : undefined;
      const i = (r ? r.indexOf(e) : 1) === 0 ? "th" : "td";
      const u = t && t.type === "table" ? t.align : undefined;
      const o = u ? u.length : e.children.length;
      let l = -1;
      const a = [];
      while (++l < o) {
        const t = e.children[l];
        const r = {};
        const o = u ? u[l] : undefined;
        if (o) {
          r.align = o;
        }
        let s = {
          type: "element",
          tagName: i,
          properties: r,
          children: []
        };
        if (t) {
          s.children = n.all(t);
          n.patch(t, s);
          s = n.applyData(t, s);
        }
        a.push(s);
      }
      const s = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: n.wrap(a, true)
      };
      n.patch(e, s);
      return n.applyData(e, s);
    },
    text: function (n, e) {
      const t = {
        type: "text",
        value: _c(String(e.value))
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    thematicBreak: function (n, e) {
      const t = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
      };
      n.patch(e, t);
      return n.applyData(e, t);
    },
    toml: Ac,
    yaml: Ac,
    definition: Ac,
    footnoteDefinition: Ac
  };
  function Ac() {}
  const jc = {}.hasOwnProperty;
  const Ic = {};
  function Tc(n, e) {
    if (n.position) {
      e.position = function (n) {
        const e = Pl(n);
        const t = Ll(n);
        if (e && t) {
          return {
            start: e,
            end: t
          };
        }
      }(n);
    }
  }
  function Oc(n, e) {
    let t = e;
    if (n && n.data) {
      const e = n.data.hName;
      const r = n.data.hChildren;
      const i = n.data.hProperties;
      if (typeof e == "string") {
        if (t.type === "element") {
          t.tagName = e;
        } else {
          t = {
            type: "element",
            tagName: e,
            properties: {},
            children: "children" in t ? t.children : [t]
          };
        }
      }
      if (t.type === "element" && i) {
        Object.assign(t.properties, dc(i));
      }
      if ("children" in t && t.children && r != null) {
        t.children = r;
      }
    }
    return t;
  }
  function Rc(n, e) {
    const t = e.data || {};
    const r = !("value" in e) || jc.call(t, "hProperties") || jc.call(t, "hChildren") ? {
      type: "element",
      tagName: "div",
      properties: {},
      children: n.all(e)
    } : {
      type: "text",
      value: e.value
    };
    n.patch(e, r);
    return n.applyData(e, r);
  }
  function Mc(n, e) {
    const t = [];
    let r = -1;
    for (e && t.push({
      type: "text",
      value: "\n"
    }); ++r < n.length;) {
      if (r) {
        t.push({
          type: "text",
          value: "\n"
        });
      }
      t.push(n[r]);
    }
    if (e && n.length > 0) {
      t.push({
        type: "text",
        value: "\n"
      });
    }
    return t;
  }
  function Uc(n) {
    let e = 0;
    let t = n.charCodeAt(e);
    while (t === 9 || t === 32) {
      e++;
      t = n.charCodeAt(e);
    }
    return n.slice(e);
  }
  function Lc(n, e) {
    const t = function (n, e) {
      const t = e || Ic;
      const r = new Map();
      const i = new Map();
      const u = new Map();
      const o = {
        ...Bc,
        ...t.handlers
      };
      const l = {
        all: function (n) {
          const e = [];
          if ("children" in n) {
            const t = n.children;
            let r = -1;
            while (++r < t.length) {
              const i = l.one(t[r], n);
              if (i) {
                if (r && t[r - 1].type === "break" && (Array.isArray(i) || i.type !== "text" || (i.value = Uc(i.value)), !Array.isArray(i) && i.type === "element")) {
                  const n = i.children[0];
                  if (n && n.type === "text") {
                    n.value = Uc(n.value);
                  }
                }
                if (Array.isArray(i)) {
                  e.push(...i);
                } else {
                  e.push(i);
                }
              }
            }
          }
          return e;
        },
        applyData: Oc,
        definitionById: r,
        footnoteById: i,
        footnoteCounts: u,
        footnoteOrder: [],
        handlers: o,
        one: function (n, e) {
          const t = n.type;
          const r = l.handlers[t];
          if (jc.call(l.handlers, t) && r) {
            return r(l, n, e);
          }
          if (l.options.passThrough && l.options.passThrough.includes(t)) {
            if ("children" in n) {
              const {
                children: e,
                ...t
              } = n;
              const r = dc(t);
              r.children = l.all(n);
              return r;
            }
            return dc(n);
          }
          return (l.options.unknownHandler || Rc)(l, n, e);
        },
        options: t,
        patch: Tc,
        wrap: Mc
      };
      Ec(n, function (n) {
        if (n.type === "definition" || n.type === "footnoteDefinition") {
          const e = n.type === "definition" ? r : i;
          const t = String(n.identifier).toUpperCase();
          if (!e.has(t)) {
            e.set(t, n);
          }
        }
      });
      return l;
    }(n, e);
    const r = t.one(n, undefined);
    const i = function (n) {
      const e = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-";
      const t = n.options.footnoteBackContent || Dc;
      const r = n.options.footnoteBackLabel || pc;
      const i = n.options.footnoteLabel || "Footnotes";
      const u = n.options.footnoteLabelTagName || "h2";
      const o = n.options.footnoteLabelProperties || {
        className: ["sr-only"]
      };
      const l = [];
      let a = -1;
      while (++a < n.footnoteOrder.length) {
        const i = n.footnoteById.get(n.footnoteOrder[a]);
        if (!i) {
          continue;
        }
        const u = n.all(i);
        const o = String(i.identifier).toUpperCase();
        const s = hc(o.toLowerCase());
        let c = 0;
        const f = [];
        const d = n.footnoteCounts.get(o);
        while (d !== undefined && ++c <= d) {
          if (f.length > 0) {
            f.push({
              type: "text",
              value: " "
            });
          }
          let n = typeof t == "string" ? t : t(a, c);
          if (typeof n == "string") {
            n = {
              type: "text",
              value: n
            };
          }
          f.push({
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + e + "fnref-" + s + (c > 1 ? "-" + c : ""),
              dataFootnoteBackref: "",
              ariaLabel: typeof r == "string" ? r : r(a, c),
              className: ["data-footnote-backref"]
            },
            children: Array.isArray(n) ? n : [n]
          });
        }
        const h = u[u.length - 1];
        if (h && h.type === "element" && h.tagName === "p") {
          const n = h.children[h.children.length - 1];
          if (n && n.type === "text") {
            n.value += " ";
          } else {
            h.children.push({
              type: "text",
              value: " "
            });
          }
          h.children.push(...f);
        } else {
          u.push(...f);
        }
        const D = {
          type: "element",
          tagName: "li",
          properties: {
            id: e + "fn-" + s
          },
          children: n.wrap(u, true)
        };
        n.patch(i, D);
        l.push(D);
      }
      if (l.length !== 0) {
        return {
          type: "element",
          tagName: "section",
          properties: {
            dataFootnotes: true,
            className: ["footnotes"]
          },
          children: [{
            type: "element",
            tagName: u,
            properties: {
              ...dc(o),
              id: "footnote-label"
            },
            children: [{
              type: "text",
              value: i
            }]
          }, {
            type: "text",
            value: "\n"
          }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: n.wrap(l, true)
          }, {
            type: "text",
            value: "\n"
          }]
        };
      }
    }(t);
    const u = Array.isArray(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
    if (i) {
      u.children.push({
        type: "text",
        value: "\n"
      }, i);
    }
    return u;
  }
  function Pc(n, e) {
    if (n && "run" in n) {
      return async function (t, r) {
        const i = Lc(t, {
          file: r,
          ...e
        });
        await n.run(i, r);
      };
    } else {
      return function (t, r) {
        return Lc(t, {
          file: r,
          ...(n || e)
        });
      };
    }
  }
  function Nc(n) {
    if (n) {
      throw n;
    }
  }
  var Hc = t(2849);
  function zc(n) {
    if (typeof n != "object" || n === null) {
      return false;
    }
    const e = Object.getPrototypeOf(n);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
  }
  function Vc() {
    const n = [];
    const e = {
      run: function (...e) {
        let t = -1;
        const r = e.pop();
        if (typeof r != "function") {
          throw new TypeError("Expected function as last argument, not " + r);
        }
        (function i(u, ...o) {
          const l = n[++t];
          let a = -1;
          if (u) {
            r(u);
          } else {
            while (++a < e.length) {
              if (o[a] === null || o[a] === undefined) {
                o[a] = e[a];
              }
            }
            e = o;
            if (l) {
              (function (n, e) {
                let t;
                return r;
                function r(...e) {
                  const r = n.length > e.length;
                  let o;
                  if (r) {
                    e.push(i);
                  }
                  try {
                    o = n.apply(this, e);
                  } catch (n) {
                    if (r && t) {
                      throw n;
                    }
                    return i(n);
                  }
                  if (!r) {
                    if (o && o.then && typeof o.then == "function") {
                      o.then(u, i);
                    } else if (o instanceof Error) {
                      i(o);
                    } else {
                      u(o);
                    }
                  }
                }
                function i(n, ...r) {
                  if (!t) {
                    t = true;
                    e(n, ...r);
                  }
                }
                function u(n) {
                  i(null, n);
                }
              })(l, i)(...o);
            } else {
              r(null, ...o);
            }
          }
        })(null, ...e);
      },
      use: function (t) {
        if (typeof t != "function") {
          throw new TypeError("Expected `middelware` to be a function, not " + t);
        }
        n.push(t);
        return e;
      }
    };
    return e;
  }
  const $c = {
    basename: function (n, e) {
      if (e !== undefined && typeof e != "string") {
        throw new TypeError("\"ext\" argument must be a string");
      }
      Gc(n);
      let t;
      let r = 0;
      let i = -1;
      let u = n.length;
      if (e === undefined || e.length === 0 || e.length > n.length) {
        while (u--) {
          if (n.codePointAt(u) === 47) {
            if (t) {
              r = u + 1;
              break;
            }
          } else if (i < 0) {
            t = true;
            i = u + 1;
          }
        }
        if (i < 0) {
          return "";
        } else {
          return n.slice(r, i);
        }
      }
      if (e === n) {
        return "";
      }
      let o = -1;
      let l = e.length - 1;
      while (u--) {
        if (n.codePointAt(u) === 47) {
          if (t) {
            r = u + 1;
            break;
          }
        } else {
          if (o < 0) {
            t = true;
            o = u + 1;
          }
          if (l > -1) {
            if (n.codePointAt(u) === e.codePointAt(l--)) {
              if (l < 0) {
                i = u;
              }
            } else {
              l = -1;
              i = o;
            }
          }
        }
      }
      if (r === i) {
        i = o;
      } else if (i < 0) {
        i = n.length;
      }
      return n.slice(r, i);
    },
    dirname: function (n) {
      Gc(n);
      if (n.length === 0) {
        return ".";
      }
      let e;
      let t = -1;
      let r = n.length;
      while (--r) {
        if (n.codePointAt(r) === 47) {
          if (e) {
            t = r;
            break;
          }
        } else {
          e ||= true;
        }
      }
      if (t < 0) {
        if (n.codePointAt(0) === 47) {
          return "/";
        } else {
          return ".";
        }
      } else if (t === 1 && n.codePointAt(0) === 47) {
        return "//";
      } else {
        return n.slice(0, t);
      }
    },
    extname: function (n) {
      Gc(n);
      let e;
      let t = n.length;
      let r = -1;
      let i = 0;
      let u = -1;
      let o = 0;
      while (t--) {
        const l = n.codePointAt(t);
        if (l !== 47) {
          if (r < 0) {
            e = true;
            r = t + 1;
          }
          if (l === 46) {
            if (u < 0) {
              u = t;
            } else if (o !== 1) {
              o = 1;
            }
          } else if (u > -1) {
            o = -1;
          }
        } else if (e) {
          i = t + 1;
          break;
        }
      }
      if (u < 0 || r < 0 || o === 0 || o === 1 && u === r - 1 && u === i + 1) {
        return "";
      }
      return n.slice(u, r);
    },
    join: function (...n) {
      let e;
      let t = -1;
      while (++t < n.length) {
        Gc(n[t]);
        if (n[t]) {
          e = e === undefined ? n[t] : e + "/" + n[t];
        }
      }
      if (e === undefined) {
        return ".";
      } else {
        return function (n) {
          Gc(n);
          const e = n.codePointAt(0) === 47;
          let t = function (n, e) {
            let t;
            let r;
            let i = "";
            let u = 0;
            let o = -1;
            let l = 0;
            let a = -1;
            while (++a <= n.length) {
              if (a < n.length) {
                t = n.codePointAt(a);
              } else {
                if (t === 47) {
                  break;
                }
                t = 47;
              }
              if (t === 47) {
                if (o === a - 1 || l === 1) ;else if (o !== a - 1 && l === 2) {
                  if (i.length < 2 || u !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
                    if (i.length > 2) {
                      r = i.lastIndexOf("/");
                      if (r !== i.length - 1) {
                        if (r < 0) {
                          i = "";
                          u = 0;
                        } else {
                          i = i.slice(0, r);
                          u = i.length - 1 - i.lastIndexOf("/");
                        }
                        o = a;
                        l = 0;
                        continue;
                      }
                    } else if (i.length > 0) {
                      i = "";
                      u = 0;
                      o = a;
                      l = 0;
                      continue;
                    }
                  }
                  if (e) {
                    i = i.length > 0 ? i + "/.." : "..";
                    u = 2;
                  }
                } else {
                  if (i.length > 0) {
                    i += "/" + n.slice(o + 1, a);
                  } else {
                    i = n.slice(o + 1, a);
                  }
                  u = a - o - 1;
                }
                o = a;
                l = 0;
              } else if (t === 46 && l > -1) {
                l++;
              } else {
                l = -1;
              }
            }
            return i;
          }(n, !e);
          if (t.length === 0 && !e) {
            t = ".";
          }
          if (t.length > 0 && n.codePointAt(n.length - 1) === 47) {
            t += "/";
          }
          if (e) {
            return "/" + t;
          } else {
            return t;
          }
        }(e);
      }
    },
    sep: "/"
  };
  function Gc(n) {
    if (typeof n != "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
    }
  }
  const Wc = {
    cwd: function () {
      return "/";
    }
  };
  function Kc(n) {
    return Boolean(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && n.auth === undefined);
  }
  function Zc(n) {
    if (typeof n == "string") {
      n = new URL(n);
    } else if (!Kc(n)) {
      const e = new TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + n + "`");
      e.code = "ERR_INVALID_ARG_TYPE";
      throw e;
    }
    if (n.protocol !== "file:") {
      const n = new TypeError("The URL must be of scheme file");
      n.code = "ERR_INVALID_URL_SCHEME";
      throw n;
    }
    return function (n) {
      if (n.hostname !== "") {
        const n = new TypeError("File URL host must be \"localhost\" or empty on darwin");
        n.code = "ERR_INVALID_FILE_URL_HOST";
        throw n;
      }
      const e = n.pathname;
      let t = -1;
      while (++t < e.length) {
        if (e.codePointAt(t) === 37 && e.codePointAt(t + 1) === 50) {
          const n = e.codePointAt(t + 2);
          if (n === 70 || n === 102) {
            const n = new TypeError("File URL path must not include encoded / characters");
            n.code = "ERR_INVALID_FILE_URL_PATH";
            throw n;
          }
        }
      }
      return decodeURIComponent(e);
    }(n);
  }
  const qc = ["history", "path", "basename", "stem", "extname", "dirname"];
  class Qc {
    constructor(n) {
      let e;
      e = n ? Kc(n) ? {
        path: n
      } : typeof n == "string" || function (n) {
        return Boolean(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
      }(n) ? {
        value: n
      } : n : {};
      this.cwd = "cwd" in e ? "" : Wc.cwd();
      this.data = {};
      this.history = [];
      this.messages = [];
      this.value;
      this.map;
      this.result;
      this.stored;
      let t;
      let r = -1;
      while (++r < qc.length) {
        const n = qc[r];
        if (n in e && e[n] !== undefined && e[n] !== null) {
          this[n] = n === "history" ? [...e[n]] : e[n];
        }
      }
      for (t in e) {
        if (!qc.includes(t)) {
          this[t] = e[t];
        }
      }
    }
    get basename() {
      if (typeof this.path == "string") {
        return $c.basename(this.path);
      } else {
        return undefined;
      }
    }
    set basename(n) {
      Jc(n, "basename");
      Yc(n, "basename");
      this.path = $c.join(this.dirname || "", n);
    }
    get dirname() {
      if (typeof this.path == "string") {
        return $c.dirname(this.path);
      } else {
        return undefined;
      }
    }
    set dirname(n) {
      Xc(this.basename, "dirname");
      this.path = $c.join(n || "", this.basename);
    }
    get extname() {
      if (typeof this.path == "string") {
        return $c.extname(this.path);
      } else {
        return undefined;
      }
    }
    set extname(n) {
      Yc(n, "extname");
      Xc(this.dirname, "extname");
      if (n) {
        if (n.codePointAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (n.includes(".", 1)) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = $c.join(this.dirname, this.stem + (n || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(n) {
      if (Kc(n)) {
        n = Zc(n);
      }
      Jc(n, "path");
      if (this.path !== n) {
        this.history.push(n);
      }
    }
    get stem() {
      if (typeof this.path == "string") {
        return $c.basename(this.path, this.extname);
      } else {
        return undefined;
      }
    }
    set stem(n) {
      Jc(n, "stem");
      Yc(n, "stem");
      this.path = $c.join(this.dirname || "", n + (this.extname || ""));
    }
    fail(n, e, t) {
      const r = this.message(n, e, t);
      r.fatal = true;
      throw r;
    }
    info(n, e, t) {
      const r = this.message(n, e, t);
      r.fatal = undefined;
      return r;
    }
    message(n, e, t) {
      const r = new Gl(n, e, t);
      if (this.path) {
        r.name = this.path + ":" + r.name;
        r.file = this.path;
      }
      r.fatal = false;
      this.messages.push(r);
      return r;
    }
    toString(n) {
      if (this.value === undefined) {
        return "";
      }
      if (typeof this.value == "string") {
        return this.value;
      }
      return new TextDecoder(n || undefined).decode(this.value);
    }
  }
  function Yc(n, e) {
    if (n && n.includes($c.sep)) {
      throw new Error("`" + e + "` cannot be a path: did not expect `" + $c.sep + "`");
    }
  }
  function Jc(n, e) {
    if (!n) {
      throw new Error("`" + e + "` cannot be empty");
    }
  }
  function Xc(n, e) {
    if (!n) {
      throw new Error("Setting `" + e + "` requires `path` to be set too");
    }
  }
  const nf = function (n) {
    const e = this.constructor.prototype;
    const t = e[n];
    const r = function () {
      return t.apply(r, arguments);
    };
    Object.setPrototypeOf(r, e);
    return r;
  };
  const ef = {}.hasOwnProperty;
  class tf extends nf {
    constructor() {
      super("copy");
      this.Compiler = undefined;
      this.Parser = undefined;
      this.attachers = [];
      this.compiler = undefined;
      this.freezeIndex = -1;
      this.frozen = undefined;
      this.namespace = {};
      this.parser = undefined;
      this.transformers = Vc();
    }
    copy() {
      const n = new tf();
      let e = -1;
      while (++e < this.attachers.length) {
        const t = this.attachers[e];
        n.use(...t);
      }
      n.data(Hc(true, {}, this.namespace));
      return n;
    }
    data(n, e) {
      if (typeof n == "string") {
        if (arguments.length === 2) {
          lf("data", this.frozen);
          this.namespace[n] = e;
          return this;
        } else {
          return ef.call(this.namespace, n) && this.namespace[n] || undefined;
        }
      } else if (n) {
        lf("data", this.frozen);
        this.namespace = n;
        return this;
      } else {
        return this.namespace;
      }
    }
    freeze() {
      if (this.frozen) {
        return this;
      }
      const n = this;
      while (++this.freezeIndex < this.attachers.length) {
        const [e, ...t] = this.attachers[this.freezeIndex];
        if (t[0] === false) {
          continue;
        }
        if (t[0] === true) {
          t[0] = undefined;
        }
        const r = e.call(n, ...t);
        if (typeof r == "function") {
          this.transformers.use(r);
        }
      }
      this.frozen = true;
      this.freezeIndex = Number.POSITIVE_INFINITY;
      return this;
    }
    parse(n) {
      this.freeze();
      const e = cf(n);
      const t = this.parser || this.Parser;
      uf("parse", t);
      return t(String(e), e);
    }
    process(n, e) {
      const t = this;
      this.freeze();
      uf("process", this.parser || this.Parser);
      of("process", this.compiler || this.Compiler);
      if (e) {
        return r(undefined, e);
      } else {
        return new Promise(r);
      }
      function r(r, i) {
        const u = cf(n);
        const o = t.parse(u);
        function l(n, t) {
          if (n || !t) {
            i(n);
          } else if (r) {
            r(t);
          } else {
            e(undefined, t);
          }
        }
        t.run(o, u, function (n, e, r) {
          if (n || !e || !r) {
            return l(n);
          }
          const i = e;
          const u = t.stringify(i, r);
          var o;
          if (typeof (o = u) == "string" || function (n) {
            return Boolean(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
          }(o)) {
            r.value = u;
          } else {
            r.result = u;
          }
          l(n, r);
        });
      }
    }
    processSync(n) {
      let e;
      let t = false;
      this.freeze();
      uf("processSync", this.parser || this.Parser);
      of("processSync", this.compiler || this.Compiler);
      this.process(n, function (n, r) {
        t = true;
        Nc(n);
        e = r;
      });
      sf("processSync", "process", t);
      return e;
    }
    run(n, e, t) {
      af(n);
      this.freeze();
      const r = this.transformers;
      if (!t && typeof e == "function") {
        t = e;
        e = undefined;
      }
      if (t) {
        return i(undefined, t);
      } else {
        return new Promise(i);
      }
      function i(i, u) {
        const o = cf(e);
        r.run(n, o, function (e, r, o) {
          const l = r || n;
          if (e) {
            u(e);
          } else if (i) {
            i(l);
          } else {
            t(undefined, l, o);
          }
        });
      }
    }
    runSync(n, e) {
      let t;
      let r = false;
      this.run(n, e, function (n, e) {
        Nc(n);
        t = e;
        r = true;
      });
      sf("runSync", "run", r);
      return t;
    }
    stringify(n, e) {
      this.freeze();
      const t = cf(e);
      const r = this.compiler || this.Compiler;
      of("stringify", r);
      af(n);
      return r(n, t);
    }
    use(n, ...e) {
      const t = this.attachers;
      const r = this.namespace;
      lf("use", this.frozen);
      if (n == null) ;else if (typeof n == "function") {
        l(n, e);
      } else {
        if (typeof n != "object") {
          throw new TypeError("Expected usable value, not `" + n + "`");
        }
        if (Array.isArray(n)) {
          o(n);
        } else {
          u(n);
        }
      }
      return this;
      function i(n) {
        if (typeof n == "function") {
          l(n, []);
        } else {
          if (typeof n != "object") {
            throw new TypeError("Expected usable value, not `" + n + "`");
          }
          if (Array.isArray(n)) {
            const [e, ...t] = n;
            l(e, t);
          } else {
            u(n);
          }
        }
      }
      function u(n) {
        if (!("plugins" in n) && !("settings" in n)) {
          throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        }
        o(n.plugins);
        if (n.settings) {
          r.settings = Hc(true, r.settings, n.settings);
        }
      }
      function o(n) {
        let e = -1;
        if (n == null) ;else {
          if (!Array.isArray(n)) {
            throw new TypeError("Expected a list of plugins, not `" + n + "`");
          }
          while (++e < n.length) {
            i(n[e]);
          }
        }
      }
      function l(n, e) {
        let r = -1;
        let i = -1;
        while (++r < t.length) {
          if (t[r][0] === n) {
            i = r;
            break;
          }
        }
        if (i === -1) {
          t.push([n, ...e]);
        } else if (e.length > 0) {
          let [r, ...u] = e;
          const o = t[i][1];
          if (zc(o) && zc(r)) {
            r = Hc(true, o, r);
          }
          t[i] = [n, r, ...u];
        }
      }
    }
  }
  const rf = new tf().freeze();
  function uf(n, e) {
    if (typeof e != "function") {
      throw new TypeError("Cannot `" + n + "` without `parser`");
    }
  }
  function of(n, e) {
    if (typeof e != "function") {
      throw new TypeError("Cannot `" + n + "` without `compiler`");
    }
  }
  function lf(n, e) {
    if (e) {
      throw new Error("Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
    }
  }
  function af(n) {
    if (!zc(n) || typeof n.type != "string") {
      throw new TypeError("Expected node, got `" + n + "`");
    }
  }
  function sf(n, e, t) {
    if (!t) {
      throw new Error("`" + n + "` finished async. Use `" + e + "` instead");
    }
  }
  function cf(n) {
    if (function (n) {
      return Boolean(n && typeof n == "object" && "message" in n && "messages" in n);
    }(n)) {
      return n;
    } else {
      return new Qc(n);
    }
  }
  const ff = [];
  const df = {
    allowDangerousHtml: true
  };
  const hf = /^(https?|ircs?|mailto|xmpp)$/i;
  const Df = [{
    from: "astPlugins",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowDangerousHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  }, {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  }, {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  }, {
    from: "escapeHtml",
    id: "remove-buggy-html-in-markdown-parser"
  }, {
    from: "includeElementIndex",
    id: "#remove-includeelementindex"
  }, {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }, {
    from: "linkTarget",
    id: "remove-linktarget"
  }, {
    from: "plugins",
    id: "change-plugins-to-remarkplugins",
    to: "remarkPlugins"
  }, {
    from: "rawSourcePos",
    id: "#remove-rawsourcepos"
  }, {
    from: "renderers",
    id: "change-renderers-to-components",
    to: "components"
  }, {
    from: "source",
    id: "change-source-to-children",
    to: "children"
  }, {
    from: "sourcePos",
    id: "#remove-sourcepos"
  }, {
    from: "transformImageUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }, {
    from: "transformLinkUri",
    id: "#add-urltransform",
    to: "urlTransform"
  }];
  function pf(n) {
    const e = vf(n);
    const t = gf(n);
    return mf(e.runSync(e.parse(t), t), n);
  }
  function vf(n) {
    const e = n.rehypePlugins || ff;
    const t = n.remarkPlugins || ff;
    const r = n.remarkRehypeOptions ? {
      ...n.remarkRehypeOptions,
      ...df
    } : df;
    return rf().use(rc).use(t).use(Pc, r).use(e);
  }
  function gf(n) {
    const e = n.children || "";
    const t = new Qc();
    if (typeof e == "string") {
      t.value = e;
    }
    return t;
  }
  function mf(n, e) {
    const t = e.allowedElements;
    const r = e.allowElement;
    const i = e.components;
    const o = e.disallowedElements;
    const l = e.skipHtml;
    const a = e.unwrapDisallowed;
    const s = e.urlTransform || bf;
    for (const n of Df) {
      if (Object.hasOwn(e, n.from)) {
        Yo((n.from, n.to && n.to, n.id));
      }
    }
    if (e.className) {
      n = {
        type: "element",
        tagName: "div",
        properties: {
          className: e.className
        },
        children: n.type === "root" ? n.children : [n]
      };
    }
    Ec(n, function (n, e, i) {
      if (n.type === "raw" && i && typeof e == "number") {
        if (l) {
          i.children.splice(e, 1);
        } else {
          i.children[e] = {
            type: "text",
            value: n.value
          };
        }
        return e;
      }
      if (n.type === "element") {
        let e;
        for (e in aa) {
          if (Object.hasOwn(aa, e) && Object.hasOwn(n.properties, e)) {
            const t = n.properties[e];
            const r = aa[e];
            if (r === null || r.includes(n.tagName)) {
              n.properties[e] = s(String(t || ""), e, n);
            }
          }
        }
      }
      if (n.type === "element") {
        let u = t ? !t.includes(n.tagName) : !!o && o.includes(n.tagName);
        if (!u && r && typeof e == "number") {
          u = !r(n, e, i);
        }
        if (u && i && typeof e == "number") {
          if (a && n.children) {
            i.children.splice(e, 1, ...n.children);
          } else {
            i.children.splice(e, 1);
          }
          return e;
        }
      }
    });
    return Jl(n, {
      Fragment: u.Fragment,
      components: i,
      ignoreInvalidStyle: true,
      jsx: u.jsx,
      jsxs: u.jsxs,
      passKeys: true,
      passNode: true
    });
  }
  function bf(n) {
    const e = n.indexOf(":");
    const t = n.indexOf("?");
    const r = n.indexOf("#");
    const i = n.indexOf("/");
    if (e === -1 || i !== -1 && e > i || t !== -1 && e > t || r !== -1 && e > r || hf.test(n.slice(0, e))) {
      return n;
    } else {
      return "";
    }
  }
  function wf(n, e) {
    var t = {};
    for (var r in n) {
      if (Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0) {
        t[r] = n[r];
      }
    }
    if (n != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(n); i < r.length; i++) {
        if (e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i])) {
          t[r[i]] = n[r[i]];
        }
      }
    }
    return t;
  }
  const _Component3 = function ({
    userData: n,
    spinning: e,
    createSessionHandler: t,
    controlLock: r,
    reactionsDisabled: i,
    handleControlLockToggle: o,
    handleReactionsDisabled: l,
    extensionTab: a,
    videoDetected: s,
    needsPermission: c,
    isPremiumService: f,
    onServiceClick: d,
    isServiceUnavailable: h,
    announcementsForService: D,
    customStartPartyButtonMessage: p
  }) {
    const [v, g] = (0, y.useState)(false);
    const m = (0, y.useMemo)(() => a.serviceName === "canalplus" && !s, [a.serviceName, s]);
    const b = (0, y.useMemo)(() => !(n == null ? undefined : n.has_premium) && f(), [n, a]);
    const w = !b && !h && !a.isBrowsing && !m && !p;
    return <div><Co><span>Create a Teleparty</span></Co>{(0, u.jsxs)("div", Object.assign({
        style: {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: 8
        },
        onClick: () => {
          g(!v);
        }
      }, {
        children: [(0, u.jsx)("span", Object.assign({
          style: {
            cursor: "pointer",
            fontSize: 14,
            color: "var(--white-25)"
          }
        }, {
          children: "Party Settings"
        })), <img src={chrome.runtime.getURL("img/icon_chevron.svg")} style={{
          width: 14,
          position: "relative",
          rotate: v ? "180deg" : "",
          filter: "brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(6649%) hue-rotate(166deg) brightness(115%) contrast(97%)"
        }} />]
      }))}{v && <div>{(0, u.jsx)(No, Object.assign({
          state: r,
          handleToggle: () => {
            if (!b) {
              o();
            }
          }
        }, {
          children: "Only I have control"
        }))}{(0, u.jsx)(No, Object.assign({
          state: i,
          handleToggle: () => {
            if (!b) {
              l();
            }
          }
        }, {
          children: "Disable Reactions For Party"
        }))}</div>}{(0, u.jsxs)("button", Object.assign({
        className: `${Zu.button} ${w ? Zu.gradient : Zu.gradientLocked}`,
        onClick: h ? () => {} : () => {
          if (w) {
            if (b) {
              const n = vu.find(n => n.name === a.serviceName && !n.disabled);
              console.log(n, a.serviceName);
              if ((n == null ? undefined : n.serverName) && n.homepage) {
                d(n.serverName);
              } else {
                chrome.tabs.create({
                  url: M
                });
              }
              return;
            }
            t();
          }
        },
        "aria-label": h ? `${a.serviceName} under maintenance` : "Start the party"
      }, {
        children: [e && <span>Loading<_Component /></span>, !e && (0, u.jsxs)("span", Object.assign({
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }
        }, {
          children: [!b && !c && f() && (0, u.jsx)("span", Object.assign({
            style: {
              fontSize: 16,
              marginRight: 6
            }
          }, {
            children: "★ "
          })), (a.isBrowsing || h || p) && <img src={chrome.runtime.getURL("/img/lock.svg")} style={{
            width: 15,
            marginRight: 6
          }} />, h ? `${a.serviceName} is under maintenance` : b ? "Upgrade to premium to host" : m ? "Play a video first" : a.isBrowsing ? "Select a video first" : p ?? "Start the party"]
        }))]
      }))}{a.isBrowsing ? <_Component2>Please open a video on {a.serviceName} first, then activate the extension to start a party.</_Component2> : b ? <_Component2>Subscribe to Teleparty Premium to host {a.serviceName} parties. Watch together on {a.serviceName} today!</_Component2> : c ? <_Component2>You need to grant permissions to start the party.</_Component2> : <_Component2>Please make sure to tell your guests that they need to click on the red <img style={{
          height: "12px",
          verticalAlign: "middle"
        }} src="/img/icon.png" alt="Tp" /> icon to join a party after clicking on your party invite link.</_Component2>}{D && D.length > 0 && (0, u.jsxs)("div", Object.assign({
        style: {
          marginTop: 20
        }
      }, {
        children: [<Co>{(0, u.jsx)("span", Object.assign({
            style: {
              color: "var(--white-25)"
            }
          }, {
            children: "Announcements"
          }))}</Co>, D.map(n => (0, u.jsxs)("div", Object.assign({
          style: {
            marginBottom: 8,
            backgroundColor: "#302f2f",
            padding: "12px",
            paddingBottom: "6px",
            borderRadius: "16px"
          }
        }, {
          children: [(0, u.jsx)("span", Object.assign({
            style: {
              color: "white",
              fontWeight: "bold"
            }
          }, {
            children: n.title
          })), <_Component2>{(0, u.jsx)("span", Object.assign({
              style: {
                color: "var(--white-15)"
              }
            }, {
              children: (0, u.jsx)(pf, Object.assign({
                components: {
                  a: n => {
                    var {
                      node: e
                    } = n;
                    var t = wf(n, ["node"]);
                    return (0, u.jsx)("a", Object.assign({}, t, {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }));
                  }
                }
              }, {
                children: n.message
              }))
            }))}</_Component2>]
        }), n.announcementId))]
      }))}</div>;
  };
  const Ff = ({
    needsPermission: n,
    showSupportedServices: e,
    wantsToSignIn: t,
    spinning: r,
    showChat: i,
    showReviewMessage: o,
    videoDetected: l,
    errorMessage: a,
    errorMessageUrl: s,
    canDismissError: c,
    partyUrl: f,
    userData: d,
    extensionTab: h,
    unavailableServices: D,
    announcementsForService: p,
    isServiceUnavailable: v,
    controlLock: g,
    reactionsDisabled: m,
    isPremiumService: b,
    onServiceClick: w,
    createSessionHandler: y,
    loadPopup: F,
    handleReviewButton: k,
    disconnectHandler: E,
    setShowChat: C,
    setErrorMessage: x,
    setErrorMessageUrl: _,
    setWantsToSignIn: S,
    setControlLock: B,
    setReactionsDisabled: A,
    customStartPartyButtonMessage: j
  }) => !d || d.signedIn || !t || f || e ? e ? <_o onServiceClick={w} unavailableServices={D} /> : a ? <Bo errorMessage={a} onDismissError={() => {
    x("");
    _("");
  }} errorMessageUrl={s} canDismissError={c} /> : f ? <Go showChat={i} setShowChat={C} partyUrl={f} handleReviewButton={k} showReviewMessage={o} disconnectHandler={E} extensionTab={h} /> : <_Component3 userData={d} spinning={r} createSessionHandler={y} controlLock={g} reactionsDisabled={m} handleControlLockToggle={() => B(!g)} handleReactionsDisabled={() => A(!m)} extensionTab={h} videoDetected={l} needsPermission={n} isPremiumService={b} onServiceClick={w} isServiceUnavailable={v} announcementsForService={p} customStartPartyButtonMessage={j} /> : <_Component4 isPremiumService={b} extensionTab={h} setWantsToSignIn={S} controlLock={g} reactionsDisabled={m} />;
  function kf(n, e, t, r) {
    return new (t ||= Promise)(function (i, u) {
      function o(n) {
        try {
          a(r.next(n));
        } catch (n) {
          u(n);
        }
      }
      function l(n) {
        try {
          a(r.throw(n));
        } catch (n) {
          u(n);
        }
      }
      function a(n) {
        var e;
        if (n.done) {
          i(n.value);
        } else {
          (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(o, l);
        }
      }
      a((r = r.apply(n, e || [])).next());
    });
  }
  const Ef = "announcements_cache_v1";
  function Cf(n, e) {
    var t;
    return n && typeof n.deviceTypes == "object" && ((t = n.deviceTypes) === null || t === undefined ? undefined : t.includes("chrome".toUpperCase())) && (n.service === "all" || n.service === e || !e) && _r(n.extensionVersionIntroduced) >= 0 && (n.extensionVersionResolved === "unresolved" || _r(n.extensionVersionResolved) <= 0) && (n.expirationDate === -1 || Date.now() / 1000 < n.expirationDate);
  }
  function xf() {
    return kf(this, undefined, undefined, function* () {
      const e = yield kf(undefined, undefined, undefined, function* () {
        try {
          const {
            [Ef]: e
          } = yield chrome.storage.local.get(Ef);
          if ((e == null ? undefined : e.announcements)?.length) {
            if (Date.now() - e.fetchedAtMs > 600000) {
              return null;
            } else {
              return e.announcements;
            }
          } else {
            return null;
          }
        } catch (n) {
          return null;
        }
      });
      if (e) {
        return e;
      }
      const t = yield fetch(`${C}/announcements`);
      const r = yield t.json();
      const i = r.announcements ?? [];
      (n => {
        kf(undefined, undefined, undefined, function* () {
          try {
            const e = {
              announcements: n,
              fetchedAtMs: Date.now()
            };
            yield chrome.storage.local.set({
              [Ef]: e
            });
          } catch (n) {}
        });
      })(i);
      return i;
    });
  }
  class _f extends Su {
    constructor(n, e, t) {
      super(n, e, Bu.GET_DATA);
      this.data = t;
    }
  }
  function Sf(n, e, t, r) {
    return new (t ||= Promise)(function (i, u) {
      function o(n) {
        try {
          a(r.next(n));
        } catch (n) {
          u(n);
        }
      }
      function l(n) {
        try {
          a(r.throw(n));
        } catch (n) {
          u(n);
        }
      }
      function a(n) {
        var e;
        if (n.done) {
          i(n.value);
        } else {
          (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(o, l);
        }
      }
      a((r = r.apply(n, e || [])).next());
    });
  }
  const Bf = [kr.CRUNCHYROLL, kr.ESPN];
  function Af(n, e, t, r) {
    return new (t ||= Promise)(function (i, u) {
      function o(n) {
        try {
          a(r.next(n));
        } catch (n) {
          u(n);
        }
      }
      function l(n) {
        try {
          a(r.throw(n));
        } catch (n) {
          u(n);
        }
      }
      function a(n) {
        var e;
        if (n.done) {
          i(n.value);
        } else {
          (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(o, l);
        }
      }
      a((r = r.apply(n, e || [])).next());
    });
  }
  const _Component6 = function () {
    const n = (0, y.useRef)(null);
    const [e, t] = (0, y.useState)(true);
    const [r, i] = (0, y.useState)(false);
    const [o, l] = (0, y.useState)("");
    const [a, s] = (0, y.useState)("");
    const [c, f] = (0, y.useState)(false);
    const [d, h] = (0, y.useState)("");
    const [D, p] = (0, y.useState)(() => (n, e) => new Promise(() => null));
    const [v, g] = (0, y.useState)(false);
    const [m, b] = (0, y.useState)(false);
    const [C, _] = (0, y.useState)(true);
    const [S, B] = (0, y.useState)(false);
    const [A, j] = (0, y.useState)({});
    const [I, T] = (0, y.useState)(true);
    const [R, U] = (0, y.useState)();
    const [P, H] = (0, y.useState)("");
    const [z, V] = (0, y.useState)(false);
    const [$, G] = (0, y.useState)(false);
    const [W, K] = (0, y.useState)(true);
    const [Z, q] = (0, y.useState)([]);
    const [Q, Y] = (0, y.useState)(null);
    (0, y.useEffect)(() => {
      (function () {
        Af(this, undefined, undefined, function* () {
          try {
            q(yield xf());
          } catch (n) {
            console.error(n);
          }
        });
      })();
    }, []);
    const J = (0, y.useMemo)(() => vu.find(n => {
      return (n.name ?? "").toLowerCase() === (A.serviceName ?? "").toLowerCase() || (n.serverName ?? "").toLowerCase() === (A.serviceName ?? "").toLowerCase();
    }), [A.serviceName]);
    const X = (0, y.useMemo)(() => J ? Z.filter(n => Cf(n, J == null ? undefined : J.serverName)) : [], [J, Z]);
    const nn = (0, y.useMemo)(() => (Z == null ? undefined : Z.length) ? (console.log(Z.filter(n => Cf(n)).filter(n => n.enforcement === "DISABLE_SERVICE")), new Set(Z.filter(n => Cf(n)).filter(n => n.enforcement === "DISABLE_SERVICE").map(n => n.service).filter(Boolean))) : new Set(), [Z]);
    const en = (0, y.useMemo)(() => !!J && !!nn && nn.has(J.serverName) && true, [nn, J]);
    const tn = n => Af(this, undefined, undefined, function* () {
      const e = yield N.nn(new _f(E, F, {
        key: "sportLobby"
      }));
      if ((e == null ? undefined : e.result) && n && e.result.includes(n)) {
        h(e.result);
      }
    });
    const rn = (n, e) => Af(this, undefined, undefined, function* () {
      let t = n;
      if (!n && d && d.includes("join")) {
        const n = d.split("/");
        t = n[n.length - 1];
      }
      const r = yield go.getItemsAsync(["REDIRECT_URL"]);
      if (t && r.REDIRECT_URL && r.REDIRECT_URL[t]) {
        h(r.REDIRECT_URL[t]);
      } else if (e) {
        h(e);
      }
    });
    (0, y.useEffect)(() => {
      (() => {
        Af(this, undefined, undefined, function* () {
          const n = new ju(k, F, {
            name: "user_click",
            component: {
              name: "popup_open",
              type: "button",
              origin: "tp"
            }
          });
          let e;
          function r(n) {
            return O.some(e => n.hostname.includes(e));
          }
          function i() {
            N.nn(new Iu(k, F)).then(n => {
              U(n);
            });
          }
          N.nn(n);
          chrome.storage.local.get(["userId"], function (n) {
            if (n.userId) {
              e = n.userId;
              H(n.userId);
            }
          });
          window.popupApp = {};
          window.popupApp.getActiveTabAsync = () => Af(this, undefined, undefined, function* () {
            return new Promise((n, e) => {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (t) {
                if (t.length) {
                  n(t[0]);
                } else {
                  e();
                }
              });
            });
          });
          setInterval(i, 30000);
          i();
          const u = yield window.popupApp.getActiveTabAsync();
          let o;
          L("Popup");
          if (u.url && u.id) {
            const a = new URL(u.url);
            o = new hu(a, u.id);
            j(o);
            console.log(o);
            if (!o.serviceName || r(a)) {
              if (r(a)) {
                l("Sorry, Teleparty doesn't support this site yet, but we will in the future!");
              } else if (!function (n) {
                return mu.some(e => n.hostname.includes(e));
              }(a)) {
                V(true);
              } else {
                l("Please start the video first and then click on the Tp Icon.");
              }
              return;
            }
            function s(n, e, r) {
              if (n.type === no.ON_PURCHASE) {
                i();
              }
              if (e.tab?.id == o.id && n.target == k && n.sender == E) {
                if (n.type === wu.CONTENT_SCRIPT_READY) {
                  console.log("stop spin 1");
                  t(false);
                  fn();
                  L("Content Script Ready");
                  r();
                  N.removeListener(s);
                } else if (n.type === wu.CONTENT_SCRIPT_ERROR) {
                  console.log("stop spin 2");
                  l(n.data.message);
                  f(n.data.showButton);
                  t(false);
                  r();
                  N.removeListener(s);
                }
              }
              if (n.type === yu.LOAD_REDIRECT_URL_FINISHED) {
                rn(n.data.sessionId);
                r();
              }
              return false;
            }
            function c(n) {
              return `${x}/join/${n}`;
            }
            function d(n) {
              if (n && n.error) {
                l(n.error);
                f(false);
              } else {
                l(pu);
                f(false);
              }
            }
            function D(n, e) {
              return {
                createSettings: {
                  controlLock: n,
                  reactionsDisabled: e
                },
                streamingService: o.streamingService,
                tabId: o.id
              };
            }
            N.addListener(s);
            p(() => (n, e) => Af(this, undefined, undefined, function* () {
              const i = {
                popup_click: Date.now()
              };
              const u = D(n, e);
              if (yield dn(u)) {
                return;
              }
              i.popup_permissions_checked = Date.now();
              t(true);
              yield hn();
              i.popup_scripts_injected = Date.now();
              yield function (n, e) {
                return Sf(this, undefined, undefined, function* () {
                  const t = new Promise(n => setTimeout(n, 500));
                  if (!n || e !== undefined && Bf.includes(e)) {
                    yield t;
                    return;
                  }
                  const r = N.sendMessageToTabAsync(new mo(k, E), n).then(n => (n == null ? undefined : n.ready) === true && !n.error).catch(() => false);
                  if (!(yield Promise.race([r, t.then(() => false)]))) {
                    yield t;
                  }
                });
              }(o == null ? undefined : o.id, (o == null ? undefined : o.streamingService)?.name);
              L("Sending create session");
              i.popup_create_sent = Date.now();
              const l = new xu(k, F, Object.assign(Object.assign({}, u), {
                timingMarks: i
              }));
              L(l);
              try {
                const n = yield N.nn(l);
                if (n && n.sessionId) {
                  const e = n.sessionId;
                  const t = c(e);
                  h(t);
                  N.nn(new bo(k, F, e));
                  rn(e, t);
                  if (n.showReviewMessage) {
                    B(true);
                  }
                } else {
                  d(n);
                }
                t(false);
              } catch (n) {
                t(false);
                d(n);
              }
            }));
          } else {
            V(true);
          }
        });
      })();
    }, []);
    (0, y.useEffect)(() => {
      pn();
    }, []);
    (0, y.useEffect)(() => {
      if (!R || !(R == null ? undefined : R.signedIn)) {
        T(true);
      }
    }, [R]);
    (0, y.useEffect)(() => {
      if (A && A.serviceName && !A.isBrowsing) {
        sn();
      } else {
        t(false);
      }
    }, [A]);
    const un = () => Af(this, undefined, undefined, function* () {
      yield xr(50)();
      if (A == null ? undefined : A.streamingService) {
        const n = A.streamingService;
        if (n.name == kr.CRUNCHYROLL || n.name == kr.ESPN) {
          const e = n.name == kr.CRUNCHYROLL ? "*://*.crunchyroll.com/*" : "*://*.espn.com/*";
          i(!chrome.permissions.contains({
            origins: [e]
          }));
        }
      }
      return false;
    });
    const on = () => Af(this, undefined, undefined, function* () {
      return N.sendMessageToTabAsync({
        sender: k,
        target: E,
        type: yu.IS_VIDEO_READY
      }, (A == null ? undefined : A.id) ?? 0).then(n => {
        if (n && n.hasVideo) {
          G(true);
        }
      });
    });
    const ln = () => Af(this, undefined, undefined, function* () {
      const e = yield N.sendMessageToTabAsync({
        sender: k,
        target: E,
        type: yu.GET_CUSTOM_START_PARTY_BUTTON_MESSAGE
      }, (A == null ? undefined : A.id) ?? 0);
      Y(e);
    });
    const an = n => Af(this, undefined, undefined, function* () {
      try {
        const r = new wo(k, F, {
          tabId: n
        });
        const i = yield N.nn(r);
        if (i == null ? undefined : i.inSession) {
          tn(i.sessionId);
        }
        if ((i == null ? undefined : i.inSession) && i.partyUrl) {
          h(i.partyUrl);
          const n = i.sessionId ?? i.partyUrl.split("/").filter(Boolean).pop() ?? "";
          if (n) {
            N.nn(new bo(k, F, n));
            rn(n, i.partyUrl);
          }
        }
      } catch (n) {}
    });
    const sn = () => Af(this, undefined, undefined, function* () {
      yield un();
      if ((A == null ? undefined : A.id) && A.streamingService?.name === kr.CRUNCHYROLL) {
        yield an(A.id);
      }
      if (!(yield cn())) {
        hn().then(Dn);
      }
    });
    const cn = () => Af(this, undefined, undefined, function* () {
      if (!(A == null ? undefined : A.id) || !A.streamingService) {
        return false;
      }
      try {
        t(true);
        const n = new mo(k, E);
        const e = yield N.sendMessageToTabAsync(n, A.id);
        if ((e == null ? undefined : e.ready) && !e.error) {
          t(false);
          yield fn();
          yield ln();
          L("Content Script already ready — skipped reinjection");
          on();
          return true;
        }
      } catch (n) {}
      return false;
    });
    const fn = () => Af(this, undefined, undefined, function* () {
      var e;
      t(true);
      const r = new Eu(k, E);
      const i = yield N.sendMessageToTabAsync(r, (A == null ? undefined : A.id) ?? 0);
      if (i.inSession) {
        tn(i.sessionId);
      }
      if (i.inSession && i.partyUrl) {
        h(i.partyUrl);
        const n = i.partyUrl.split("/");
        const t = n[n.length - 1];
        N.nn(new bo(k, F, t));
        b(!!i.reactionsDisabled);
        _((e = i.isChatVisible) !== null && e !== undefined && e);
        if (i.showReviewMessage) {
          B(true);
        }
        rn(t, i.partyUrl);
      }
      t(false);
    });
    const dn = n => Af(this, undefined, undefined, function* () {
      const e = Cu;
      if (yield chrome.permissions.contains({
        origins: e
      })) {
        i(false);
        return false;
      }
      yield chrome.storage.local.set({
        PENDING_PERMISSION_START: {
          createSessionData: n,
          requiredOrigins: e
        }
      });
      const t = yield chrome.permissions.request({
        origins: e
      });
      yield chrome.storage.local.remove("PENDING_PERMISSION_START");
      if (t) {
        i(false);
        return false;
      } else {
        i(true);
        return true;
      }
    });
    const hn = () => Af(this, undefined, undefined, function* () {
      if (A == null ? undefined : A.streamingService) {
        const n = A.streamingService;
        let e = false;
        const t = n.name == kr.CRUNCHYROLL;
        if (n.name == kr.ESPN) {
          e = true;
        }
        if (t) {
          e = true;
        }
        const r = () => Af(this, undefined, undefined, function* () {
          yield Promise.all(n.contentScripts.map(n => chrome.scripting.executeScript({
            target: {
              tabId: A.id,
              allFrames: e
            },
            files: ["lib/tp_libraries_min.js", n]
          })));
          chrome.scripting.executeScript({
            target: {
              tabId: A.id
            },
            files: ["bug_report/bug_report_injector_bundled.js"]
          });
        });
        yield r();
        if (t) {
          for (const n of [400, 800]) {
            yield xr(n)();
            yield r();
          }
        }
      }
    });
    const Dn = () => Af(this, undefined, undefined, function* () {
      try {
        t(true);
        const e = new mo(k, E);
        const r = yield N.sendMessageToTabAsync(e, (A == null ? undefined : A.id) ?? 0);
        if (r) {
          if (r.error) {
            l(r.error.message);
            t(false);
          } else {
            t(false);
            yield fn();
            yield ln();
            L("Content Script Ready");
            on();
          }
        } else {
          l(pu);
          t(false);
        }
      } catch (n) {
        l(pu);
        t(false);
      }
    });
    const pn = () => Af(this, undefined, undefined, function* () {
      const n = yield go.getItemsAsync(["home_selected"]);
      if (n.home_selected !== undefined) {
        T(n.home_selected === "true");
      }
    });
    return (0, u.jsx)("div", Object.assign({
      className: w.popupApp + " " + (I ? w.homeSelected : w.calendarSelected) + (o ? " " + w.error : ""),
      ref: n
    }, {
      children: (0, u.jsxs)(Pu.Provider, Object.assign({
        value: n
      }, {
        children: [<div><_Component5 userData={R} handleSignOut={() => {
            N.nn(new uo(k, F)).then(() => {
              N.nn(new Iu(k, F)).then(n => {
                U(Object.assign(Object.assign({}, n), {
                  signedIn: false
                }));
                (() => {
                  var n;
                  const e = document.getElementById("friendIframe");
                  if ((n = e == null ? undefined : e.contentWindow) !== null && n !== undefined) {
                    n.postMessage("tp_update", "*");
                  }
                })();
              });
            });
          }} handleSignInButton={() => window.open(`${x}/signup?ref=popup`)} homeSelected={I} /></div>, (0, u.jsxs)("div", Object.assign({
          className: w.popupContent
        }, {
          children: [(0, u.jsx)("div", Object.assign({
            className: w.popupHome
          }, {
            children: <Ff needsPermission={r} showSupportedServices={z} wantsToSignIn={W} spinning={e} showChat={C} showReviewMessage={S} videoDetected={$} errorMessage={o} errorMessageUrl={a} canDismissError={c} partyUrl={d} userData={R} extensionTab={A} unavailableServices={nn} isServiceUnavailable={en} controlLock={v} announcementsForService={X} reactionsDisabled={m} isPremiumService={() => {
              const n = A;
              return !!n.serviceName && vu.some(e => e.name === n.serviceName && e.premium && !e.disabled);
            }} onServiceClick={n => {
              if (en) {
                return;
              }
              const e = vu.find(e => e.serverName === n && !e.disabled);
              var t;
              if (e && e.homepage) {
                if (e.premium) {
                  if (R && R.has_premium) {
                    chrome.tabs.create({
                      url: e.homepage
                    });
                  } else {
                    t = `${e.serverName}_popup`;
                    chrome.tabs.create({
                      url: `${M}?ref=${t}`
                    });
                  }
                } else {
                  chrome.tabs.create({
                    url: e.homepage
                  });
                }
              }
            }} createSessionHandler={() => D(v, m)} loadPopup={sn} handleReviewButton={() => {
              window.open("https://chromewebstore.google.com/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews");
              chrome.storage.local.set({
                reviewClicked: true
              });
              const n = new ju(k, F, {
                eventType: "review-clicked-chrome"
              });
              N.nn(n);
            }} disconnectHandler={() => Af(this, undefined, undefined, function* () {
              if (A) {
                const n = new _u(k, E);
                yield N.sendMessageToTabAsync(n, A.id);
                window.close();
              }
            })} setShowChat={_} setErrorMessage={l} setErrorMessageUrl={s} setWantsToSignIn={K} setControlLock={g} setReactionsDisabled={b} customStartPartyButtonMessage={Q} />
          })), !I && <u.Fragment><Do>Loading Friends Data <_Component /> <br /> <br />Insert placeholder image here</Do></u.Fragment>]
        }))]
      }))
    }));
  };
  var If = t(5338);
  const Tf = document.getElementById("popup-app");
  (0, If.H)(Tf).render(<_Component6 />);
})();