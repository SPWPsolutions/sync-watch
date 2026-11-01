/******/ (() => {
  // webpackBootstrap
  /******/ "use strict"; // ./src/Teleparty/ContentScripts/activation_fallback_injected.js

  /**
   * Main-world helper for services that require a trusted user interaction
   * before `HTMLMediaElement.play()` is allowed to start playback.
   *
   * This module has two responsibilities:
   * 1. Render and manage a click-through overlay that collects a real user gesture.
   * 2. Expose the "activation pending" state to isolated-world content scripts via
   *    DOM attributes on `document.documentElement`, so Teleparty can suspend sync
   *    while playback is blocked by browser/site activation requirements.
   *
   * The DOM-attribute contract is intentionally simple because injected scripts and
   * content scripts do not share the same JS global object.
   */
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
  const OVERLAY_ID = "tp-activation-overlay";
  const ACTIVATION_PENDING_ATTR = "data-tp-activation-pending";
  const ACTIVATION_PENDING_SERVICE_ATTR = "data-tp-activation-service";
  const ACTIVATION_HELPER_SERVICE_ATTR = "data-tp-activation-helper-service";
  const ACTIVATION_CONTINUE_EVENT = "TPActivationContinue";
  /**
   * Delays execution for a short interval.
   *
   * @param {number} ms - Delay duration in milliseconds.
   * @returns {Promise<void>}
   */
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  /**
   * Converts unknown thrown values into a compact loggable string.
   *
   * @param {unknown} error - Error-like value returned from `catch`.
   * @returns {string}
   */
  const formatError = (error) => {
    if (!error) {
      return "UnknownError";
    }
    if (typeof error === "string") {
      return error;
    }
    const name = error.name || "Error";
    const message = error.message || "Unknown error";
    return `${name}: ${message}`;
  };
  /**
   * Ensures the overlay host creates a positioning context for the absolute overlay.
   *
   * @param {HTMLElement} container - Container that should visually own the overlay.
   * @returns {void}
   */
  const ensureOverlayHostPositioning = (container) => {
    const position = window.getComputedStyle(container).position;
    if (position === "static" || position === "") {
      container.style.position = "relative";
    }
  };
  /**
   * Reads the browser's transient user-activation state when available.
   *
   * @returns {boolean | undefined}
   */
  const getUserActivationState = () => {
    const userActivation = navigator["userActivation"];
    return userActivation ? userActivation.isActive : undefined;
  };
  /**
   * Marks the page as activation-blocked so content scripts can suspend sync.
   *
   * @param {string} serviceName - Human-readable service identifier for logging/debugging.
   * @returns {void}
   */
  const setActivationPending = (serviceName) => {
    document.documentElement.setAttribute(ACTIVATION_PENDING_ATTR, "true");
    document.documentElement.setAttribute(
      ACTIVATION_PENDING_SERVICE_ATTR,
      serviceName,
    );
  };
  /**
   * Clears the activation-blocked marker if this helper currently owns it.
   *
   * @param {string} serviceName - Human-readable service identifier for logging/debugging.
   * @returns {void}
   */
  const clearActivationPending = (serviceName) => {
    const currentService = document.documentElement.getAttribute(
      ACTIVATION_PENDING_SERVICE_ATTR,
    );
    if (currentService && currentService !== serviceName) {
      return;
    }
    document.documentElement.removeAttribute(ACTIVATION_PENDING_ATTR);
    document.documentElement.removeAttribute(ACTIVATION_PENDING_SERVICE_ATTR);
  };
  /**
   * Dispatches a main-world DOM event that tells the content-script side to seek
   * to the latest known party time immediately after the user provides a trusted click.
   *
   * This runs before the sync gate is fully reopened, so the forwarder can do a
   * one-shot resync without allowing the normal periodic sync/broadcast loop to race.
   *
   * @param {string} serviceName - Human-readable service identifier for logging/debugging.
   * @returns {void}
   */
  const dispatchActivationContinueEvent = (serviceName) => {
    const event = new CustomEvent(ACTIVATION_CONTINUE_EVENT, {
      detail: {
        serviceName,
        requestedAt: Date.now(),
      },
    });
    window.dispatchEvent(event);
  };
  /**
   * Removes the activation overlay from the DOM if present.
   *
   * @returns {void}
   */
  const removeOverlay = () => {
    var _a;
    (_a = document.getElementById(OVERLAY_ID)) === null || _a === void 0
      ? void 0
      : _a.remove();
  };
  /**
   * Creates the full-surface activation overlay element.
   *
   * @param {string} labelText - Copy displayed to the user.
   * @param {(event: MouseEvent) => void | Promise<void>} onClick - Trusted click handler.
   * @returns {HTMLButtonElement}
   */
  const createOverlay = (labelText, onClick) => {
    const overlay = document.createElement("button");
    overlay.id = OVERLAY_ID;
    overlay.type = "button";
    overlay.setAttribute("aria-label", labelText);
    Object.assign(overlay.style, {
      position: "absolute",
      inset: "0",
      zIndex: "2147483647",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      border: "0",
      padding: "0",
      margin: "0",
      background: "rgba(0, 0, 0, 0.9)",
      cursor: "pointer",
      backdropFilter: "blur(8px) saturate(0.65)",
    });
    const prompt = document.createElement("span");
    Object.assign(prompt.style, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      userSelect: "none",
      pointerEvents: "none",
    });
    const icon = document.createElement("span");
    icon.innerHTML = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <circle cx="36" cy="36" r="35" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.1)"/>
        <polygon points="28,20 56,36 28,52" fill="white"/>
    </svg>`;
    const label = document.createElement("span");
    Object.assign(label.style, {
      color: "#ffffff",
      fontSize: "16px",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.3px",
      textAlign: "center",
    });
    label.textContent = labelText;
    prompt.appendChild(icon);
    prompt.appendChild(label);
    overlay.appendChild(prompt);
    overlay.addEventListener("click", onClick);
    return overlay;
  };
  /**
   * @typedef {Object} ActivationFallbackOptions
   * @property {string} serviceName
   * Human-readable service name used for logging and DOM activation markers.
   * @property {() => HTMLVideoElement | null} getVideoElement
   * Returns the current site video element, or `null` while the player is still mounting.
   * @property {(videoElement: HTMLVideoElement) => HTMLElement | null} [getOverlayContainer]
   * Returns the element that should host the overlay. Defaults to the video's parent element.
   * @property {(videoElement: HTMLVideoElement) => boolean} shouldStartMonitoring
   * Returns `true` when Teleparty should begin activation gating for the current page state.
   * @property {(videoElement: HTMLVideoElement) => { found: boolean, clicked: boolean }} [clickPlayControl]
   * Optional site-specific play-button hook, executed inside the trusted overlay click handler.
   * @property {string} [labelText]
   * Visible call-to-action shown in the overlay.
   * @property {number} [pollIntervalMs]
   * Poll cadence used to detect when activation monitoring should start.
   * @property {number} [activationWindowMs]
   * Maximum time to keep the page in activation-pending mode before giving up.
   * @property {number} [retryDelayMs]
   * Delay before re-checking whether playback actually started after a click attempt.
   */
  /**
   * @typedef {Object} ActivationFallbackController
   * @property {() => void} stop
   * Immediately clears overlay state, unmarks activation-pending mode, and stops polling.
   */
  /**
   * Installs a trusted-click playback fallback for activation-gated players.
   *
   * While the fallback is active, the helper marks the page as activation-pending so
   * Teleparty's content-script sync layer can temporarily stop applying seeks/play/pause
   * commands that would otherwise cause the blocked video to visibly jump underneath the
   * overlay. Once the user clicks, the helper emits a one-shot activation-continue
   * event so the content-script side can immediately seek to the current party time
   * before normal synchronization resumes.
   *
   * @param {ActivationFallbackOptions} options - Service-specific selectors and behavior.
   * @returns {ActivationFallbackController}
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  const setupActivationPlaybackFallback = ({
    serviceName,
    getVideoElement,
    getOverlayContainer,
    shouldStartMonitoring,
    clickPlayControl,
    labelText = "Click to continue watching",
    pollIntervalMs = 500,
    activationWindowMs = 30000,
    retryDelayMs = 750,
  }) => {
    let monitorStartedAt = 0;
    let monitorActive = false;
    let completed = false;
    document.documentElement.setAttribute(
      ACTIVATION_HELPER_SERVICE_ATTR,
      serviceName,
    );
    const log = (...args) => {
      console.log(`[Teleparty ${serviceName} activation]`, ...args);
    };
    const stopMonitoring = () => {
      completed = true;
      clearActivationPending(serviceName);
      removeOverlay();
      clearInterval(interval);
    };
    const maybeRestoreOverlay = (reason) =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield sleep(retryDelayMs);
        if (completed || !monitorActive) {
          return;
        }
        const video = getVideoElement();
        if (!video) {
          return;
        }
        if (!video.paused) {
          log("Playback started after activation attempt");
          stopMonitoring();
          return;
        }
        if (Date.now() - monitorStartedAt > activationWindowMs) {
          log("Activation window expired while waiting for playback to start");
          stopMonitoring();
          return;
        }
        log("Restoring activation overlay", reason);
        showOverlay(video);
      });
    const tryStartPlayback = (video) =>
      __awaiter(void 0, void 0, void 0, function* () {
        let playControlResult = { found: false, clicked: false };
        try {
          playControlResult =
            (clickPlayControl === null || clickPlayControl === void 0
              ? void 0
              : clickPlayControl(video)) || playControlResult;
        } catch (error) {
          log("Play control handling failed", formatError(error));
        }
        log(
          "Attempting playback",
          `userActivation.isActive=${getUserActivationState()}`,
          `playControlFound=${playControlResult.found}`,
          `playControlClicked=${playControlResult.clicked}`,
        );
        try {
          yield video.play();
          log("video.play() resolved");
        } catch (error) {
          log("video.play() rejected", formatError(error));
          yield maybeRestoreOverlay("video.play rejected");
          return;
        }
        yield maybeRestoreOverlay("video remained paused after play()");
      });
    const showOverlay = (video) => {
      if (completed) {
        return;
      }
      const container =
        (getOverlayContainer === null || getOverlayContainer === void 0
          ? void 0
          : getOverlayContainer(video)) || video.parentElement;
      if (!(container instanceof HTMLElement)) {
        return;
      }
      const existingOverlay = document.getElementById(OVERLAY_ID);
      if (
        (existingOverlay === null || existingOverlay === void 0
          ? void 0
          : existingOverlay.parentElement) === container
      ) {
        return;
      }
      existingOverlay === null || existingOverlay === void 0
        ? void 0
        : existingOverlay.remove();
      ensureOverlayHostPositioning(container);
      const overlay = createOverlay(labelText, (event) =>
        __awaiter(void 0, void 0, void 0, function* () {
          if (!event.isTrusted) {
            log("Ignoring untrusted overlay click");
            return;
          }
          removeOverlay();
          dispatchActivationContinueEvent(serviceName);
          yield tryStartPlayback(getVideoElement() || video);
        }),
      );
      container.appendChild(overlay);
    };
    const interval = setInterval(() => {
      if (completed) {
        clearInterval(interval);
        return;
      }
      const video = getVideoElement();
      if (!video) {
        return;
      }
      if (!monitorActive) {
        if (!shouldStartMonitoring(video)) {
          return;
        }
        monitorActive = true;
        monitorStartedAt = Date.now();
        setActivationPending(serviceName);
        log("Started activation monitoring");
      } else if (!shouldStartMonitoring(video)) {
        log(
          "Stopping activation monitoring because conditions no longer match",
        );
        stopMonitoring();
        return;
      }
      if (Date.now() - monitorStartedAt > activationWindowMs) {
        log("Activation window expired");
        stopMonitoring();
        return;
      }
      if (!video.paused) {
        stopMonitoring();
        return;
      }
      showOverlay(video);
    }, pollIntervalMs);
    return {
      stop: stopMonitoring,
    };
  }; // ./src/Teleparty/ContentScripts/AppleTV/appletv_injected.js

  var appletv_injected_awaiter =
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

  if (!window.injectScriptLoaded) {
    window.injectScriptLoaded = true;
    const ACTIVATION_EXPECTED_STATE_ATTR = "data-tp-activation-expected-state";
    const ACTIVATION_EXPECTED_SERVICE_ATTR =
      "data-tp-activation-expected-service";
    const TP_CURRENT_PLAYER_PATCHED = "__tpCurrentPlayerPatched";
    const CURRENT_PLAYER_PATCH_POLL_MS = 250;
    const PLAYER_EVENT_METHODS = ["play", "pause", "seekToTime"];
    let suppressPlayerEvents = false;
    const playerOriginals = {
      play: null,
      pause: null,
      seekToTime: null,
    };
    const emitPlayerEvent = (action, args) => {
      if (suppressPlayerEvents) {
        return;
      }
      window.postMessage(
        {
          type: "tpApplePlayerEvent",
          action,
          args,
        },
        "*",
      );
    };
    const patchPlayerControlMethods = (player) => {
      if (!player || typeof player !== "object") {
        return;
      }
      for (const name of PLAYER_EVENT_METHODS) {
        try {
          const original = player[name];
          if (
            typeof original !== "function" ||
            original[TP_CURRENT_PLAYER_PATCHED]
          ) {
            continue;
          }
          playerOriginals[name] = original.bind(player);
          const wrapped = function (...args) {
            emitPlayerEvent(name, args);
            return original.apply(this, args);
          };
          wrapped[TP_CURRENT_PLAYER_PATCHED] = true;
          player[name] = wrapped;
        } catch (_a) {
          // Ignore host-object patch failures.
        }
      }
    };
    const getCurrentPlayer = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        return (_g =
          (_f =
            (_e =
              (_d =
                (_c =
                  (_b =
                    (_a = window.MusicKit) === null || _a === void 0
                      ? void 0
                      : _a.getInstance()) === null || _b === void 0
                    ? void 0
                    : _b.playbackControllers) === null || _c === void 0
                  ? void 0
                  : _c.serial) === null || _d === void 0
                ? void 0
                : _d.services) === null || _e === void 0
              ? void 0
              : _e.mediaItemPlayback) === null || _f === void 0
            ? void 0
            : _f._currentPlayer) !== null && _g !== void 0
          ? _g
          : null;
      } catch (_h) {
        return null;
      }
    };
    const getVideoElement = () => {
      return (
        document.getElementById("apple-music-video-player") ||
        document.querySelector("video")
      );
    };
    const getPlayerActionFn = (action) => {
      if (typeof playerOriginals[action] === "function") {
        return playerOriginals[action];
      }
      const player = getCurrentPlayer();
      if (player && typeof player[action] === "function") {
        return player[action].bind(player);
      }
      return null;
    };
    const runVideoFallback = (action, args) =>
      appletv_injected_awaiter(void 0, void 0, void 0, function* () {
        const video = getVideoElement();
        if (!video) {
          throw new Error("video element unavailable");
        }
        if (action === "play") {
          yield video.play();
          return;
        }
        if (action === "pause") {
          video.pause();
          return;
        }
        if (action === "seekToTime") {
          const seconds = Number(args[0]);
          if (!Number.isFinite(seconds)) {
            throw new Error("invalid seek time");
          }
          video.currentTime = seconds;
          return;
        }
        throw new Error(`unknown action ${action}`);
      });
    let patchedCurrentPlayer = null;
    const tryPatchCurrentPlayer = () => {
      const currentPlayer = getCurrentPlayer();
      if (!currentPlayer || currentPlayer === patchedCurrentPlayer) {
        return !!currentPlayer;
      }
      playerOriginals.play = null;
      playerOriginals.pause = null;
      playerOriginals.seekToTime = null;
      patchPlayerControlMethods(currentPlayer);
      patchedCurrentPlayer = currentPlayer;
      return true;
    };
    setInterval(tryPatchCurrentPlayer, CURRENT_PLAYER_PATCH_POLL_MS);
    tryPatchCurrentPlayer();
    // Content script → page-world player commands (play / pause / seekToTime).
    window.addEventListener("message", (event) =>
      appletv_injected_awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (
          event.source !== window ||
          ((_a = event.data) === null || _a === void 0 ? void 0 : _a.type) !==
            "tpApplePlayerCommand"
        ) {
          return;
        }
        const requestId = event.data.requestId;
        const action = event.data.action;
        const args = Array.isArray(event.data.args) ? event.data.args : [];
        const reply = (ok, error) => {
          window.postMessage(
            {
              type: "tpApplePlayerCommandResult",
              requestId,
              ok,
              error: error ? String(error) : undefined,
            },
            "*",
          );
        };
        try {
          tryPatchCurrentPlayer();
          const fn = getPlayerActionFn(action);
          if (typeof fn === "function") {
            suppressPlayerEvents = true;
            try {
              yield fn(...args);
              reply(true);
              return;
            } catch (_b) {
              // Player method failed; fall back to <video>.
            } finally {
              suppressPlayerEvents = false;
            }
          }
          yield runVideoFallback(action, args);
          reply(true);
        } catch (error) {
          suppressPlayerEvents = false;
          reply(false, error instanceof Error ? error.message : error);
        }
      }),
    );
    (() => {
      const originalSet = Map.prototype.set;
      const patchJetPlayAction = (jet) => {
        if (
          !jet ||
          typeof jet.onAction !== "function" ||
          jet.__tpPlayActionPatched
        ) {
          return;
        }
        jet.__tpPlayActionPatched = true;
        const originalOnAction = jet.onAction.bind(jet);
        jet.onAction = function (actionName, handler, ...rest) {
          let nextHandler = handler;
          if (actionName === "playAction" && typeof handler === "function") {
            window.__applePlayAction = handler;
            nextHandler = function (...handlerArgs) {
              return appletv_injected_awaiter(
                this,
                void 0,
                void 0,
                function* () {
                  try {
                    window.postMessage(
                      {
                        type: "playAction",
                        args: JSON.parse(JSON.stringify(handlerArgs)),
                      },
                      "*",
                    );
                  } catch (_a) {
                    // Args not structured-cloneable; still run the handler.
                  }
                  return handler.apply(this, handlerArgs);
                },
              );
            };
          }
          return originalOnAction(actionName, nextHandler, ...rest);
        };
      };
      // Content script can't reach page-world __applePlayAction; bridge via postMessage.
      window.addEventListener("message", (event) =>
        appletv_injected_awaiter(void 0, void 0, void 0, function* () {
          var _a;
          if (
            event.source !== window ||
            ((_a = event.data) === null || _a === void 0 ? void 0 : _a.type) !==
              "tpInvokePlayAction"
          ) {
            return;
          }
          const requestId = event.data.requestId;
          const args = Array.isArray(event.data.args) ? event.data.args : [];
          try {
            if (typeof window.__applePlayAction !== "function") {
              throw new Error("playAction unavailable");
            }
            // Call the original handler so we don't re-emit a playAction capture.
            yield window.__applePlayAction(...args);
            window.postMessage(
              { type: "tpInvokePlayActionResult", requestId, ok: true },
              "*",
            );
          } catch (error) {
            window.postMessage(
              {
                type: "tpInvokePlayActionResult",
                requestId,
                ok: false,
                error: error instanceof Error ? error.message : String(error),
              },
              "*",
            );
          }
        }),
      );
      Map.prototype.set = function (key, value) {
        const result = originalSet.call(this, key, value);
        if (key === "jet" && value && typeof value.onAction === "function") {
          patchJetPlayAction(value);
        }
        if (
          key === "playback" &&
          value &&
          typeof value.play === "function" &&
          typeof value.stop === "function"
        ) {
          patchJetPlayAction(value.jet);
          Map.prototype.set = originalSet;
        }
        return result;
      };
    })();
    // Inject an empty element into the page to store the last canonicalId and featureReferenceId
    const emptyElement = document.createElement("div");
    emptyElement.id = "teleparty-appletv-id-container";
    document.body.appendChild(emptyElement);
    const getPlayButton = () => {
      return document.querySelector(".playback-play__play");
    };
    const extractVideoId = () => {
      if (!window.MusicKit) {
        return;
      }
      try {
        const playables =
          window.MusicKit.getInstance().playbackControllers.serial.services
            .mediaItemPlayback._currentPlayer._nowPlayingItem.playables[0];
        const newCanonicalId = playables.canonicalId;
        const newFeatureReferenceId = playables.contentId;
        if (newCanonicalId && newFeatureReferenceId) {
          const currentCanonicalId =
            emptyElement.getAttribute("data-canonical-id");
          const currentFeatureReferenceId = emptyElement.getAttribute(
            "data-feature-reference-id",
          );
          // Only update and post a message if the IDs have changed
          if (
            newCanonicalId !== currentCanonicalId ||
            newFeatureReferenceId !== currentFeatureReferenceId
          ) {
            emptyElement.setAttribute("data-canonical-id", newCanonicalId);
            emptyElement.setAttribute(
              "data-feature-reference-id",
              newFeatureReferenceId,
            );
            window.postMessage(
              {
                type: "idDetected",
                canonicalId: newCanonicalId,
                featureReferenceId: newFeatureReferenceId,
              },
              "*",
            );
          }
        }
      } catch (error) {
        // do nothing
      }
    };
    const extractSkipMap = () => {
      var _a, _b, _c;
      try {
        if (!window.MusicKit) {
          return;
        }
        const skipMap =
          (_c =
            (_b =
              (_a = window.MusicKit.getInstance()) === null || _a === void 0
                ? void 0
                : _a._playbackController) === null || _b === void 0
              ? void 0
              : _b._skipIntro) === null || _c === void 0
            ? void 0
            : _c.skipMap;
        if (!skipMap) return;
        // Extract only values from the map
        const skipMapArray = Array.from(skipMap.values());
        let skipDataElement = document.getElementById("skip-map-data");
        if (!skipDataElement) {
          skipDataElement = document.createElement("div");
          skipDataElement.id = "skip-map-data";
          skipDataElement.style.display = "none";
          document.body.appendChild(skipDataElement);
        }
        // Store as JSON string
        skipDataElement.setAttribute(
          "data-skip-map",
          JSON.stringify(skipMapArray),
        );
      } catch (_d) {
        // do nothing
      }
    };
    // Run extractSkipMap every 10 seconds
    setInterval(extractSkipMap, 10000);
    // Schedule the extractVideoId function to run every 100ms
    setInterval(extractVideoId, 100);
    setupActivationPlaybackFallback({
      serviceName: "AppleTV",
      getVideoElement,
      getOverlayContainer: (videoElement) => {
        var _a;
        return (_a = videoElement.parentElement) === null || _a === void 0
          ? void 0
          : _a.parentElement;
      },
      shouldStartMonitoring: (videoElement) => {
        const expectsPlaying =
          document.documentElement.getAttribute(
            ACTIVATION_EXPECTED_SERVICE_ATTR,
          ) === "AppleTV" &&
          document.documentElement.getAttribute(
            ACTIVATION_EXPECTED_STATE_ATTR,
          ) === "playing";
        return (
          expectsPlaying &&
          Boolean(
            videoElement === null || videoElement === void 0
              ? void 0
              : videoElement.src,
          ) &&
          Boolean(document.querySelector("#chat-wrapper")) &&
          Boolean(
            videoElement === null || videoElement === void 0
              ? void 0
              : videoElement.paused,
          )
        );
      },
      clickPlayControl: (videoElement) => {
        const playButton = getPlayButton();
        const result = {
          found: Boolean(playButton),
          clicked: false,
        };
        if (videoElement.paused && playButton instanceof HTMLElement) {
          playButton.click();
          result.clicked = true;
        }
        return result;
      },
    });
  }

  /******/
})();
