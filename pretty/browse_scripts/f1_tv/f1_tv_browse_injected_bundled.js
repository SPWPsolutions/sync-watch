/******/ (() => {
  // webpackBootstrap
  /******/ "use strict"; // ./src/Teleparty/Enums/InternalStreamingServiceName.ts

  var InternalStreamingServiceName;
  (function (InternalStreamingServiceName) {
    InternalStreamingServiceName["NETFLIX"] = "netflix";
    InternalStreamingServiceName["HULU"] = "hulu";
    InternalStreamingServiceName["DISNEY_PLUS"] = "disney";
    InternalStreamingServiceName["STAR_PLUS"] = "starplus";
    InternalStreamingServiceName["AMAZON"] = "amazon";
    InternalStreamingServiceName["YOUTUBE"] = "youtube";
    InternalStreamingServiceName["HBO_MAX"] = "hbomax";
    InternalStreamingServiceName["MAX"] = "max";
    InternalStreamingServiceName["FUBO"] = "fubo";
    InternalStreamingServiceName["CRUNCHYROLL"] = "crunchyroll";
    InternalStreamingServiceName["PARAMOUNT"] = "paramount";
    InternalStreamingServiceName["PEACOCK"] = "peacock";
    InternalStreamingServiceName["HOTSTAR"] = "hotstar";
    InternalStreamingServiceName["DISNEY_PLUS_MENA"] = "disneymena";
    InternalStreamingServiceName["APPLE_TV"] = "appletv";
    InternalStreamingServiceName["PLUTO_TV"] = "plutotv";
    InternalStreamingServiceName["FUNIMATION"] = "funimation";
    InternalStreamingServiceName["TUBI_TV"] = "tubitv";
    InternalStreamingServiceName["JIO_CINEMA"] = "jiocinema";
    InternalStreamingServiceName["MUBI"] = "mubi";
    InternalStreamingServiceName["CRAVE"] = "crave";
    InternalStreamingServiceName["STAN"] = "stan";
    InternalStreamingServiceName["SONY_LIV"] = "sonyliv";
    InternalStreamingServiceName["ZEE5"] = "zee5";
    InternalStreamingServiceName["HULU_JP"] = "hulujp";
    InternalStreamingServiceName["UNEXT"] = "unext";
    InternalStreamingServiceName["GLOBOPLAY"] = "globoplay";
    InternalStreamingServiceName["WILLOW"] = "willow";
    InternalStreamingServiceName["FANCODE"] = "fancode";
    InternalStreamingServiceName["CANALPLUS"] = "canalplus";
    InternalStreamingServiceName["SHAHID"] = "shahid";
    InternalStreamingServiceName["RTL"] = "rtl";
    InternalStreamingServiceName["ESPN"] = "espn";
    InternalStreamingServiceName["SLING"] = "sling";
    InternalStreamingServiceName["VIKI"] = "viki";
    InternalStreamingServiceName["SPOTIFY"] = "spotify";
    InternalStreamingServiceName["SHOWTIME"] = "showtime";
    InternalStreamingServiceName["SHUDDER"] = "shudder";
    InternalStreamingServiceName["AMC_PLUS"] = "amcplus";
    InternalStreamingServiceName["VIU"] = "viu";
    InternalStreamingServiceName["VIDIO"] = "vidio";
    InternalStreamingServiceName["FOX_ONE"] = "foxone";
    InternalStreamingServiceName["TSN_PLUS"] = "tsnplus";
    InternalStreamingServiceName["LEAGUE_PASS"] = "leaguepass";
    InternalStreamingServiceName["DAZN"] = "dazn";
    InternalStreamingServiceName["VIX"] = "vix";
    InternalStreamingServiceName["MIGU"] = "migu";
    InternalStreamingServiceName["F1_TV"] = "f1tv";
  })(InternalStreamingServiceName || (InternalStreamingServiceName = {})); // ./src/Teleparty/Constants/env.ts

  var _a, _b, _c, _d, _e, _f;
  // NOTE: Changing the .env file seems to require re-running build-dev-watch
  // if you are using that for development.
  const PROD_DEFAULTS = {
    API_URL: "https://api.teleparty.com",
    WEBSOCKETS_URL: "wss://ws.teleparty.com",
    REDIRECT_URL: "https://www.teleparty.com",
    // This is a public key, so it's okay to hardcode it here
    POSTHOG_API_KEY: "phc_8h1T6DYsM416utBY2HpUYkyyBKyVErAyoNpFbtp2D9b",
    POSTHOG_API_HOST: "https://us.i.posthog.com",
    IMAGE_CDN_URL: "https://files.teleparty.com",
  };
  const API_URL = true ? PROD_DEFAULTS.API_URL : 0;
  const WEBSOCKETS_URL = true ? PROD_DEFAULTS.WEBSOCKETS_URL : 0;
  const REDIRECT_URL = true ? PROD_DEFAULTS.REDIRECT_URL : 0;
  const PROD_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ",
    authDomain: "teleparty-mobile.firebaseapp.com",
    projectId: "teleparty-mobile",
    storageBucket: "teleparty-mobile.appspot.com",
    messagingSenderId: "961974665980",
    appId: "1:961974665980:web:fe4179db8591331aeb8d79",
    measurementId: "G-PC36DK40FL",
  };
  const DEV_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDmxz7HsfNuhW52Mti-Q9lAGHJYOzEijb8",
    authDomain: "teleparty-auth---test.firebaseapp.com",
    projectId: "teleparty-auth---test",
    storageBucket: "teleparty-auth---test.appspot.com",
    messagingSenderId: "391169153212",
    appId: "1:391169153212:web:0eae4ff68890df614b18b9",
    measurementId: "G-MFZH5P1Z4E",
  };
  const FIREBASE_CONFIG = true ? PROD_FIREBASE_CONFIG : 0;
  // PostHog Configuration
  const POSTHOG_API_KEY = true ? PROD_DEFAULTS.POSTHOG_API_KEY : 0;
  const POSTHOG_API_HOST = true ? PROD_DEFAULTS.POSTHOG_API_HOST : 0;
  const IGNORE_UNDER_MAINTENANCE = true ? false : 0;
  const IMAGE_CDN_URL = true ? PROD_DEFAULTS.IMAGE_CDN_URL : 0;
  const BACKEND_SELECTOR_AWS_CDN =
    "MISSING_ENV_VAR".BACKEND_SELECTOR_AWS_CDN ||
    "https://d1491j4uhxdasz.cloudfront.net"; // ./src/Teleparty/Managers/Announcements.ts

  var __awaiter =
    (undefined && undefined.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P
          ? value
          : new P(function (resolve) {
              resolve(value);
            });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done
            ? resolve(result.value)
            : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

  const ANNOUNCEMENTS_CACHE_KEY = "announcements_cache_v1";
  const CACHE_TTL_MS = 10 * 60 * 1000;
  function announcementApplicable(announcement, serviceName) {
    var _a;
    return (
      announcement &&
      typeof announcement.deviceTypes === "object" &&
      ((_a = announcement.deviceTypes) === null || _a === void 0
        ? void 0
        : _a.includes("chrome".toUpperCase())) &&
      (announcement.service === "all" ||
        announcement.service === serviceName ||
        !serviceName) &&
      compareExtensionVersion(announcement.extensionVersionIntroduced) >= 0 &&
      (announcement.extensionVersionResolved === "unresolved" ||
        compareExtensionVersion(announcement.extensionVersionResolved) <= 0) &&
      (announcement.expirationDate === -1 ||
        Date.now() / 1000 < announcement.expirationDate)
    );
  }
  const getCache = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      var _a;
      try {
        const { [ANNOUNCEMENTS_CACHE_KEY]: cache } =
          yield chrome.storage.local.get(ANNOUNCEMENTS_CACHE_KEY);
        if (
          !((_a =
            cache === null || cache === void 0
              ? void 0
              : cache.announcements) === null || _a === void 0
            ? void 0
            : _a.length)
        )
          return null;
        if (Date.now() - cache.fetchedAtMs > CACHE_TTL_MS) return null;
        return cache.announcements;
      } catch (_b) {
        return null;
      }
    });
  const setCache = (announcements) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const payload = { announcements, fetchedAtMs: Date.now() };
        yield chrome.storage.local.set({ [ANNOUNCEMENTS_CACHE_KEY]: payload });
      } catch (_c) {
        // ignore cache write failures
      }
    });
  function fetchAnnouncements() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const cached = yield getCache();
      if (cached) return cached;
      const resp = yield fetch(`${API_URL}/announcements`);
      const data = yield resp.json();
      const announcements =
        (_a = data["announcements"]) !== null && _a !== void 0 ? _a : [];
      void setCache(announcements);
      return announcements;
    });
  } // ./src/Teleparty/Utils/NativePartyPageState.ts

  const IN_PARTY_ATTR = "data-tp-in-party";
  /** Shared DOM flag readable from both content scripts and page-injected browse scripts. */
  function setPageInParty(inParty) {
    if (inParty) {
      document.documentElement.setAttribute(IN_PARTY_ATTR, "true");
    } else {
      document.documentElement.removeAttribute(IN_PARTY_ATTR);
    }
  }
  function isPageInParty() {
    return document.documentElement.getAttribute(IN_PARTY_ATTR) === "true";
  }
  const NATIVE_PARTY_BUTTON_SELECTOR =
    "#native-party-button, [id^='native-party-button'], .native-party-button, #native-party-button-homepage, [data-tp-native-party='1']"; // ./src/Teleparty/BrowseScripts/NativePartyHandler.ts

  var NativePartyHandler_awaiter =
    (undefined && undefined.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P
          ? value
          : new P(function (resolve) {
              resolve(value);
            });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done
            ? resolve(result.value)
            : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

  // How long the party-status entry written by BrowseScript is considered fresh.
  // BrowseScript refreshes it every ~1s; if we don't see a recent update we assume
  // the bridge isn't running and fall back to "not in party" rather than blocking.
  const PARTY_STATUS_FRESHNESS_MS = 2000;
  function getTelepartyConfig() {
    try {
      const stored = sessionStorage.getItem("telepartyPremiumConfig");
      if (stored) {
        const config = JSON.parse(stored);
        return config;
      }
    } catch (e) {
      // console.error("Error parsing sessionStorage config:", e)
    }
    return null;
  }
  function defaultCleanupNativePartyButtons() {
    document
      .querySelectorAll(NATIVE_PARTY_BUTTON_SELECTOR)
      .forEach((button) => {
        button.remove();
      });
  }
  function hasNativePartyButtons() {
    return document.querySelector(NATIVE_PARTY_BUTTON_SELECTOR) !== null;
  }
  const nativePartyPlayHandlers = new WeakMap();
  let nativePartyClickDelegationInstalled = false;
  function handleNativePartyButtonClick(button, play, e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Native party button clicked");
    const config = getTelepartyConfig();
    if (
      (config === null || config === void 0
        ? void 0
        : config.serviceIsPremium) &&
      !(config === null || config === void 0 ? void 0 : config.userHasPremium)
    ) {
      console.log(
        "Redirecting non-premium user on premium service to premium page",
      );
      window.open(
        "https://teleparty.com/premium?ref=start-" + config.serviceName,
        "_blank",
      );
      return;
    }
    localStorage.setItem(
      "nativeParty",
      JSON.stringify({
        shouldStart: true,
        expiry: Date.now() + 1000 * 60 * 2,
        randomId: Math.random().toString(),
      }),
    );
    play(e);
  }
  function ensureNativePartyClickDelegation() {
    if (nativePartyClickDelegationInstalled) {
      return;
    }
    nativePartyClickDelegationInstalled = true;
    // Fallback for SPAs (e.g. Migu) that replace injected buttons between bind cycles.
    document.addEventListener(
      "click",
      (e) => {
        const target = e.target;
        if (!(target instanceof Element)) {
          return;
        }
        const button = target.closest(NATIVE_PARTY_BUTTON_SELECTOR);
        if (!(button instanceof HTMLElement)) {
          return;
        }
        const binding = button;
        if (binding._telepartyHandlerBound) {
          return;
        }
        const play = nativePartyPlayHandlers.get(button);
        if (!play) {
          return;
        }
        handleNativePartyButtonClick(button, play, e);
      },
      true,
    );
  }
  function bindNativePartyButtonHandlers(buttons) {
    if (!buttons) {
      return;
    }
    ensureNativePartyClickDelegation();
    for (const { button, play } of buttons) {
      const buttonElement = button;
      nativePartyPlayHandlers.set(button, play);
      if (buttonElement._telepartyHandler) {
        button.removeEventListener(
          "click",
          buttonElement._telepartyHandler,
          true,
        );
      }
      const clickHandler = (e) => {
        var _a;
        const playFn =
          (_a = nativePartyPlayHandlers.get(button)) !== null && _a !== void 0
            ? _a
            : play;
        handleNativePartyButtonClick(button, playFn, e);
      };
      buttonElement._telepartyHandler = clickHandler;
      buttonElement._telepartyHandlerBound = true;
      button.addEventListener("click", clickHandler, true);
    }
  }
  function addNativePartyHandler(tryAddButton, service, options = {}) {
    var _a;
    return NativePartyHandler_awaiter(this, void 0, void 0, function* () {
      const cleanupNativePartyButtons =
        (_a = options.cleanupNativePartyButtons) !== null && _a !== void 0
          ? _a
          : defaultCleanupNativePartyButtons;
      let unavailable = [];
      try {
        const announcements = yield fetchAnnouncements();
        unavailable = announcements
          .filter((a) => a.enforcement === "DISABLE_SERVICE")
          .map((a) => a.service)
          .filter(Boolean);
      } catch (e) {
        console.error(e);
      }
      // Immediately bail out if this service is under maintenance
      if (unavailable.includes(service) && !IGNORE_UNDER_MAINTENANCE) {
        console.log(`Service under maintenance: ${service}`);
        return;
      }
      let inPartyCached = isPageInParty();
      bindNativePartyButtonHandlers(tryAddButton());
      setInterval(() => {
        try {
          const inParty = isPageInParty();
          if (inParty) {
            if (!inPartyCached || hasNativePartyButtons()) {
              cleanupNativePartyButtons();
            }
            inPartyCached = true;
            return;
          }
          inPartyCached = false;
          bindNativePartyButtonHandlers(tryAddButton());
        } catch (error) {
          // console.error("Error in addNativePartyHandler:", error)
        }
      }, 500);
    });
  } // ./src/Teleparty/BrowseScripts/F1TV/f1_tv_browse_injected.js

  /** Bootstrap `lg` — F1 switches hero Watch markup here (`d-lg-*`). */
  const MOBILE_MEDIA = "(max-width: 991.98px)";
  const PARTY_BUTTON_STYLE =
    "background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%);" +
    "color: #fff;" +
    "border: none;" +
    "border-radius: 36px;" +
    "cursor: pointer;" +
    "white-space: nowrap;" +
    "display: inline-flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "font-size: 15px;" +
    "font-weight: 700;" +
    "letter-spacing: 0.2px;" +
    "line-height: 20px;" +
    "min-height: 40px;" +
    "padding: 9px 20px;" +
    "text-decoration: none;" +
    "z-index: 2;";
  function isMobileLayout() {
    return window.matchMedia(MOBILE_MEDIA).matches;
  }
  function hasNativePartyButton(container) {
    return !!(container === null || container === void 0
      ? void 0
      : container.querySelector(
          "[id^='native-party-button'], [data-tp-native-party='1']",
        ));
  }
  function isElementVisible(element) {
    if (!(element instanceof HTMLElement)) {
      return false;
    }
    if (
      element.offsetParent === null &&
      getComputedStyle(element).position !== "fixed"
    ) {
      return false;
    }
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }
  function createNativePartyButton(uniqueId) {
    const nativePartyButton = document.createElement("button");
    nativePartyButton.setAttribute("class", "tp-f1-native-party-button");
    nativePartyButton.setAttribute("type", "button");
    nativePartyButton.setAttribute("id", uniqueId);
    nativePartyButton.setAttribute("data-tp-native-party", "1");
    nativePartyButton.setAttribute("style", PARTY_BUTTON_STYLE);
    nativePartyButton.innerHTML = "<span>Start a Teleparty</span>";
    return nativePartyButton;
  }
  function addDetailNativePartyButton() {
    const playButton = document.querySelector(
      "a.inset-video-item-play-button, .inset-video-item-play-button",
    );
    if (!playButton) {
      return [];
    }
    const parent = playButton.closest(
      ".inset-video-item-play-button-container, .inset-video-item-container",
    );
    if (!parent || hasNativePartyButton(parent)) {
      return [];
    }
    const nativePartyButton = createNativePartyButton("native-party-button");
    nativePartyButton.style.margin = "8px 0 0";
    parent.appendChild(nativePartyButton);
    return [
      {
        button: nativePartyButton,
        play: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const url = new URL(window.location.href);
          if (
            url.pathname.includes("/detail/") &&
            url.searchParams.get("action") !== "play"
          ) {
            url.searchParams.set("action", "play");
            window.location.href = url.toString();
            return;
          }
          playButton.click();
        },
      },
    ];
  }
  /** Desktop: absolute, to the right of Watch (original working style). */
  function positionDesktopPartyButton(nativePartyButton, watchButton) {
    const container =
      watchButton.closest(".card-body") || watchButton.parentElement;
    if (!container) {
      return;
    }
    if (window.getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
    if (nativePartyButton.parentElement !== container) {
      container.appendChild(nativePartyButton);
    }
    nativePartyButton.setAttribute("style", PARTY_BUTTON_STYLE);
    nativePartyButton.style.position = "absolute";
    nativePartyButton.style.left = `${watchButton.offsetLeft + watchButton.offsetWidth + 12}px`;
    nativePartyButton.style.top = `${watchButton.offsetTop}px`;
    nativePartyButton.style.marginLeft = "0";
    nativePartyButton.style.marginTop = "0";
  }
  /** Mobile: vertical stack under Watch. */
  function positionMobilePartyButton(nativePartyButton, watchButton) {
    const container = watchButton.closest(
      ".interactive-poster-watch-button-fixed",
    );
    if (!container) {
      return;
    }
    const controls = watchButton.closest(
      ".interactive-poster-controls-container",
    );
    if (controls) {
      controls.style.setProperty("height", "auto", "important");
      controls.style.setProperty("line-height", "normal", "important");
      controls.style.setProperty("padding-bottom", "12px", "important");
      controls.style.setProperty("overflow", "visible", "important");
    }
    watchButton.style.setProperty("position", "static", "important");
    watchButton.style.setProperty("transform", "none", "important");
    watchButton.style.setProperty("bottom", "auto", "important");
    watchButton.style.setProperty("margin-top", "0", "important");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.gap = "10px";
    container.style.width = "100%";
    nativePartyButton.setAttribute("style", PARTY_BUTTON_STYLE);
    nativePartyButton.style.position = "static";
    nativePartyButton.style.margin = "0";
    if (nativePartyButton.previousElementSibling !== watchButton) {
      watchButton.insertAdjacentElement("afterend", nativePartyButton);
    }
  }
  function addHeroCarouselNativePartyButtons() {
    const mobile = isMobileLayout();
    const results = [];
    // Only use the Watch control that matches the current breakpoint.
    const watchSelector = mobile
      ? ".interactive-poster-watch-button-fixed a.interactive-poster-watch-button[data-tao='h-watch-button']"
      : ".card-body > a.interactive-poster-watch-button[data-tao='h-watch-button']";
    const watchButtons = document.querySelectorAll(watchSelector);
    watchButtons.forEach((watchButton, index) => {
      var _a, _b;
      if (!isElementVisible(watchButton)) {
        return;
      }
      const container = mobile
        ? watchButton.closest(".interactive-poster-watch-button-fixed")
        : watchButton.closest(".card-body");
      if (!container) {
        return;
      }
      let partyButton = container.querySelector("[data-tp-native-party='1']");
      if (
        !partyButton &&
        ((_b =
          (_a = watchButton.nextElementSibling) === null || _a === void 0
            ? void 0
            : _a.matches) === null || _b === void 0
          ? void 0
          : _b.call(_a, "[data-tp-native-party='1']"))
      ) {
        partyButton = watchButton.nextElementSibling;
      }
      if (!partyButton) {
        partyButton = createNativePartyButton(
          `native-party-button-hero-${index}`,
        );
        results.push({
          button: partyButton,
          play: () => watchButton.click(),
        });
      }
      if (mobile) {
        positionMobilePartyButton(partyButton, watchButton);
      } else {
        positionDesktopPartyButton(partyButton, watchButton);
      }
    });
    return results;
  }
  function addNativePartyButton() {
    // Drop the other breakpoint's buttons so styles don't leak across resize.
    const mobile = isMobileLayout();
    document
      .querySelectorAll(
        "[data-tp-native-party='1'][id^='native-party-button-hero']",
      )
      .forEach((button) => {
        const inMobileStrip = !!button.closest(
          ".interactive-poster-watch-button-fixed",
        );
        if (mobile ? !inMobileStrip : inMobileStrip) {
          button.remove();
        }
      });
    const createdButtons = [
      ...addDetailNativePartyButton(),
      ...addHeroCarouselNativePartyButtons(),
    ];
    return createdButtons.length > 0 ? createdButtons : undefined;
  }
  addNativePartyHandler(
    addNativePartyButton,
    InternalStreamingServiceName.F1_TV,
  );

  /******/
})();
