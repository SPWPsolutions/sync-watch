/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ 4411() {
      var __awaiter =
        (this && this.__awaiter) ||
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
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next(),
            );
          });
        };
      (function initializeTelepartyDisney() {
        if (window.tpDisneyMediaBridgeLoaded) return;
        window.tpDisneyMediaBridgeLoaded = true;
        window.seekScriptLoaded = true;
        var findReactProps = function () {
          const elementRoot = document.querySelector(
            "main#section_index > div",
          );
          if (elementRoot == null) {
            return null;
          }
          const keys = Object.keys(elementRoot);
          let key = null;
          for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith("__reactInternalInstance")) {
              key = keys[i];
              break;
            }
          }
          if (key == null) {
            return null;
          }
          if (
            typeof elementRoot[key] === "undefined" ||
            typeof elementRoot[key].memoizedProps.children._owner ===
              "undefined"
          ) {
            return null;
          }
          return elementRoot[key].memoizedProps.children._owner.memoizedProps;
        };
        var seekInteraction = function (e) {
          var _a, _b, _c, _d, _e, _f;
          if (e.source == window && e.data) {
            if (e.data.type && "NEXT_EPISODE" == e.data.type) {
              const reactProps = findReactProps();
              reactProps.navigate({
                name: "video",
                params: {
                  contentId: e.data.videoId,
                  timerAutoAdvanced: !0,
                },
              });
            }
            if (e.data.type && "teardown" == e.data.type) {
              window.removeEventListener("message", seekInteraction, !1);
              window.seekScriptLoaded = false;
              stopPlayerEvents();
            }
            if (e.data.type && "play" == e.data.type) {
              const player =
                document.querySelector(".btm-media-player") ||
                document.querySelector("disney-web-player");
              if (player) {
                player.click();
              }
              const togglePlayPause =
                document.querySelector("toggle-play-pause") ||
                document.querySelector(".toggle-play-pause") ||
                ((_b =
                  (_a = document.querySelector("disney-web-player")) === null ||
                  _a === void 0
                    ? void 0
                    : _a.shadowRoot) === null || _b === void 0
                  ? void 0
                  : _b.querySelector("toggle-play-pause"));
              if (togglePlayPause && togglePlayPause.shadowRoot) {
                const playButton =
                  togglePlayPause.shadowRoot.querySelector(".play-button");
                if (playButton) {
                  playButton.click();
                }
              }
            }
            if (e.data.type && "pause" == e.data.type) {
              const player =
                document.querySelector(".btm-media-player") ||
                document.querySelector("disney-web-player");
              if (player) {
                player.click();
              }
              const togglePlayPause =
                document.querySelector("toggle-play-pause") ||
                document.querySelector(".toggle-play-pause") ||
                ((_d =
                  (_c = document.querySelector("disney-web-player")) === null ||
                  _c === void 0
                    ? void 0
                    : _c.shadowRoot) === null || _d === void 0
                  ? void 0
                  : _d.querySelector("toggle-play-pause"));
              if (togglePlayPause && togglePlayPause.shadowRoot) {
                const pauseButton =
                  togglePlayPause.shadowRoot.querySelector(".pause-button");
                if (pauseButton) {
                  pauseButton.click();
                }
              }
            }
            if (e.data.type && "seek" == e.data.type) {
              const player =
                document.querySelector(".btm-media-player") ||
                document.querySelector("disney-web-player");
              if (player) {
                player.click();
              }
              const progressBar =
                document.querySelector("progress-bar") ||
                ((_f =
                  (_e = document.querySelector("disney-web-player")) === null ||
                  _e === void 0
                    ? void 0
                    : _e.shadowRoot) === null || _f === void 0
                  ? void 0
                  : _f.querySelector("progress-bar"));
              if (progressBar && progressBar.shadowRoot) {
                const seekbar = progressBar.shadowRoot.querySelector(
                  ".progress-bar__seekable-range",
                );
                if (seekbar) {
                  const maxTime =
                    Number(seekbar.getAttribute("aria-valuemax")) || 1;
                  const minTime =
                    Number(seekbar.getAttribute("aria-valuemin")) || 0;
                  const progress = e.data.time / ((maxTime - minTime) * 1000);
                  const seekBounds = seekbar.getBoundingClientRect();
                  const n = progress * seekbar.offsetWidth;
                  const x = n + seekBounds.left;
                  const y = seekBounds.top + seekBounds.height / 2;
                  const baseOptions = {
                    pointerId: 1,
                    isPrimary: true,
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                    clientX: x,
                    clientY: y,
                    view: window,
                  };
                  seekbar.dispatchEvent(
                    new PointerEvent("pointerdown", baseOptions),
                  );
                  seekbar.dispatchEvent(
                    new PointerEvent("pointerup", baseOptions),
                  );
                }
              }
            }
          }
        };
        window.addEventListener("message", seekInteraction, false);
        let eventsEnabled = false;
        let activePlayer = null;
        let eventsActive = false;
        let stateEventsActive = false;
        let nativeAdPlaying;
        let nativeAdSessionId;
        let remoteControlDepth = 0;
        let skipCommandDepth = 0;
        let lastStateSignature = "";
        let lastStateSentAt = 0;
        let cleanupPlayer = [];
        let cleanupCommandBus = () => undefined;
        let activeCommandBus = null;
        const observer = new MutationObserver(() => refreshPlayerEvents());
        const adObserver = new MutationObserver(() => emitState(true));
        let observedAdRoot = null;
        const getMediaPlayer = () => {
          var _a;
          return (_a = document.querySelector("disney-web-player")) === null ||
            _a === void 0
            ? void 0
            : _a.mediaPlayer;
        };
        const floorTimelineMs = (value) =>
          typeof value === "number" && isFinite(value)
            ? Math.floor(value)
            : null;
        const getAdRoot = () => {
          var _a, _b, _c;
          return (_c =
            document.querySelector("ad-badge-overlay") ||
            ((_b =
              (_a = document.querySelector("disney-web-player")) === null ||
              _a === void 0
                ? void 0
                : _a.shadowRoot) === null || _b === void 0
              ? void 0
              : _b.querySelector("ad-badge-overlay"))) === null || _c === void 0
            ? void 0
            : _c.shadowRoot;
        };
        const updateNativeAdState = (playerState) => {
          var _a, _b;
          const interstitials =
            (_a =
              playerState === null || playerState === void 0
                ? void 0
                : playerState.extensions) === null || _a === void 0
              ? void 0
              : _a.interstitials;
          if (
            !interstitials ||
            !Object.prototype.hasOwnProperty.call(
              interstitials,
              "currentSession",
            )
          ) {
            nativeAdPlaying = undefined;
            nativeAdSessionId = undefined;
            return;
          }
          const session = interstitials.currentSession;
          const assetType =
            (_b =
              session === null || session === void 0
                ? void 0
                : session.currentAsset) === null || _b === void 0
              ? void 0
              : _b.type;
          if (!session) {
            nativeAdPlaying = false;
          } else if (typeof assetType === "string") {
            nativeAdPlaying = assetType.toLowerCase() === "ad";
          } else if (
            !session.sessionId ||
            session.sessionId !== nativeAdSessionId
          ) {
            // Unknown interstitials use the badge until an ad asset is identified.
            // Keep a known ad pod active between its assets, even without a badge.
            nativeAdPlaying = undefined;
          }
          nativeAdSessionId =
            session === null || session === void 0 ? void 0 : session.sessionId;
        };
        const getStatePayload = () => {
          var _a, _b, _c;
          const mediaPlayer = getMediaPlayer();
          if (!mediaPlayer) {
            return {
              ok: false,
              eventsActive: false,
              error: "mediaPlayer unavailable",
            };
          }
          const info =
            (_a = mediaPlayer.timeline) === null || _a === void 0
              ? void 0
              : _a.info;
          const status = mediaPlayer.playbackStatus;
          const playhead =
            info === null || info === void 0 ? void 0 : info.playheadPositionMs;
          const isLive = !!mediaPlayer.isLive;
          const adPlaying =
            !isLive &&
            (nativeAdPlaying !== null && nativeAdPlaying !== void 0
              ? nativeAdPlaying
              : !!((_b = getAdRoot()) === null || _b === void 0
                  ? void 0
                  : _b.querySelector(".ad-badge-overlay--container")));
          const adEventsActive =
            stateEventsActive &&
            mediaPlayer === activePlayer &&
            nativeAdPlaying !== undefined &&
            !isLive;
          if (typeof playhead !== "number" || !isFinite(playhead)) {
            return {
              ok: false,
              eventsActive: false,
              isLive,
              adPlaying,
              adEventsActive,
              error: "mediaPlayer timeline unavailable",
            };
          }
          return {
            ok: true,
            eventsActive:
              eventsActive && mediaPlayer === activePlayer && !isLive,
            isLive,
            adPlaying,
            adEventsActive,
            state: {
              isLive,
              playheadPositionMs: Math.floor(playhead),
              programDurationMs: floorTimelineMs(
                info === null || info === void 0
                  ? void 0
                  : info.programDurationMs,
              ),
              seekableDurationMs: floorTimelineMs(
                info === null || info === void 0
                  ? void 0
                  : info.seekableDurationMs,
              ),
              seekableStartMs: floorTimelineMs(
                info === null || info === void 0
                  ? void 0
                  : info.seekableStartMs,
              ),
              seekableEndMs: floorTimelineMs(
                info === null || info === void 0 ? void 0 : info.seekableEndMs,
              ),
              startPositionMs: floorTimelineMs(
                info === null || info === void 0
                  ? void 0
                  : info.startPositionMs,
              ),
              zeroPositionProgramDateTimeMs: floorTimelineMs(
                info === null || info === void 0
                  ? void 0
                  : info.zeroPositionProgramDateTimeMs,
              ),
              playing: !!(status === null || status === void 0
                ? void 0
                : status.playing),
              paused: !!(status === null || status === void 0
                ? void 0
                : status.paused),
              buffering: !!(status === null || status === void 0
                ? void 0
                : status.buffering),
              notready: !!(status === null || status === void 0
                ? void 0
                : status.notready),
              ended: !!(status === null || status === void 0
                ? void 0
                : status.ended),
              currentState:
                (_c =
                  status === null || status === void 0
                    ? void 0
                    : status.currentState) !== null && _c !== void 0
                  ? _c
                  : null,
              adPlaying,
            },
          };
        };
        const postBridgeResult = (type, requestId, payload) => {
          window.postMessage(Object.assign({ type, requestId }, payload), "*");
        };
        const emitState = (force = false) => {
          const payload = getStatePayload();
          const state = payload.state;
          // Timeline callbacks keep time fresh. Always deliver transitions immediately.
          const signature = JSON.stringify([
            payload.eventsActive,
            payload.ok,
            state === null || state === void 0 ? void 0 : state.currentState,
            state === null || state === void 0 ? void 0 : state.playing,
            state === null || state === void 0 ? void 0 : state.paused,
            state === null || state === void 0 ? void 0 : state.buffering,
            payload.adPlaying,
            payload.adEventsActive,
          ]);
          const now = Date.now();
          if (
            !force &&
            signature === lastStateSignature &&
            now - lastStateSentAt < 250
          ) {
            return;
          }
          lastStateSignature = signature;
          lastStateSentAt = now;
          postBridgeResult("TP_DISNEY_PLAYER_EVENT", undefined, payload);
        };
        const detachPlayer = () => {
          eventsActive = false;
          stateEventsActive = false;
          nativeAdPlaying = undefined;
          nativeAdSessionId = undefined;
          cleanupPlayer
            .splice(0)
            .reverse()
            .forEach((cleanup) => cleanup());
          activePlayer = null;
          adObserver.disconnect();
          observedAdRoot = null;
        };
        const patchControl = (player, name) => {
          const original = player[name];
          if (typeof original !== "function") {
            return false;
          }
          const descriptor = Object.getOwnPropertyDescriptor(player, name);
          const wrapped = function (...args) {
            var _a, _b, _c;
            const payload = getStatePayload();
            let action = name;
            let seekTargetMs;
            if (name === "quickFastForward" || name === "quickRewind") {
              const offset = Number(args[0]);
              seekTargetMs =
                ((_a = payload.state) === null || _a === void 0
                  ? void 0
                  : _a.playheadPositionMs) +
                (name === "quickRewind" ? -Math.abs(offset) : Math.abs(offset));
              action = "seek";
            } else if (name === "seek") {
              seekTargetMs = args[0];
            }
            if (
              action === "seek" &&
              typeof seekTargetMs === "number" &&
              isFinite(seekTargetMs)
            ) {
              seekTargetMs = Math.max(
                0,
                Math.min(
                  seekTargetMs,
                  (_c =
                    (_b = payload.state) === null || _b === void 0
                      ? void 0
                      : _b.seekableEndMs) !== null && _c !== void 0
                    ? _c
                    : Infinity,
                ),
              );
            }
            const notify =
              eventsActive &&
              remoteControlDepth === 0 &&
              skipCommandDepth === 0 &&
              payload.ok &&
              !payload.state.adPlaying &&
              (action !== "seek" ||
                (typeof seekTargetMs === "number" && isFinite(seekTargetMs)));
            if (notify) {
              postBridgeResult(
                "TP_DISNEY_PLAYER_EVENT",
                undefined,
                Object.assign(Object.assign({}, payload), {
                  action,
                  seekTargetMs,
                }),
              );
            }
            try {
              const result = original.apply(this, args);
              // Observe rejection without replacing the promise Disney receives.
              if (notify && result && typeof result.catch === "function") {
                result.catch(() =>
                  postBridgeResult(
                    "TP_DISNEY_PLAYER_EVENT",
                    undefined,
                    Object.assign(Object.assign({}, getStatePayload()), {
                      action: "controlFailed",
                    }),
                  ),
                );
              }
              return result;
            } catch (error) {
              if (notify) {
                postBridgeResult(
                  "TP_DISNEY_PLAYER_EVENT",
                  undefined,
                  Object.assign(Object.assign({}, getStatePayload()), {
                    action: "controlFailed",
                  }),
                );
              }
              throw error;
            }
          };
          player[name] = wrapped;
          if (player[name] !== wrapped) {
            return false;
          }
          cleanupPlayer.push(() => {
            if (player[name] === wrapped) {
              if (descriptor) Object.defineProperty(player, name, descriptor);
              else delete player[name];
            }
          });
          return true;
        };
        const refreshCommandBus = () => {
          var _a;
          const bus =
            (_a = document.querySelector("main-app-controls-overlay")) ===
              null || _a === void 0
              ? void 0
              : _a.commandBus;
          if (bus === activeCommandBus) return;
          cleanupCommandBus();
          activeCommandBus = bus;
          cleanupCommandBus = () => undefined;
          if (
            typeof (bus === null || bus === void 0 ? void 0 : bus.dispatch) !==
            "function"
          )
            return;
          const original = bus.dispatch;
          const descriptor = Object.getOwnPropertyDescriptor(bus, "dispatch");
          const wrapped = function (...args) {
            var _a, _b, _c;
            const message = args[0];
            if (
              remoteControlDepth === 0 &&
              (message === null || message === void 0
                ? void 0
                : message.type) === "playNext" &&
              ((_a =
                message === null || message === void 0
                  ? void 0
                  : message.payload) === null || _a === void 0
                ? void 0
                : _a.nextContentId)
            ) {
              window.postMessage(
                {
                  type: "TP_DISNEY_PLAY_NEXT",
                  nextContentId: message.payload.nextContentId,
                },
                "*",
              );
            }
            // Skip Intro / Recap dispatch timecode updates directly instead of
            // calling mediaPlayer.seek(), so report their target before seeking.
            const value =
              (_b =
                message === null || message === void 0
                  ? void 0
                  : message.payload) === null || _b === void 0
                ? void 0
                : _b.value;
            const isSkipSeek =
              (message === null || message === void 0
                ? void 0
                : message.type) === "mediaElementDispatch" &&
              (value === null || value === void 0 ? void 0 : value.type) ===
                "@@btmp/CLIENT/TIMECODE/UPDATE" &&
              (value === null || value === void 0 ? void 0 : value.cause) ===
                "skip" &&
              typeof value.value === "number" &&
              isFinite(value.value);
            const payload = isSkipSeek ? getStatePayload() : null;
            const notifySkip =
              isSkipSeek &&
              eventsActive &&
              remoteControlDepth === 0 &&
              skipCommandDepth === 0 &&
              (payload === null || payload === void 0 ? void 0 : payload.ok) &&
              !payload.state.adPlaying;
            if (notifySkip) {
              const seekTargetMs = Math.max(
                0,
                Math.min(
                  value.value,
                  (_c = payload.state.seekableEndMs) !== null && _c !== void 0
                    ? _c
                    : Infinity,
                ),
              );
              postBridgeResult(
                "TP_DISNEY_PLAYER_EVENT",
                undefined,
                Object.assign(Object.assign({}, payload), {
                  action: "seek",
                  seekTargetMs,
                }),
              );
              skipCommandDepth++;
            }
            try {
              const result = original.apply(this, args);
              if (notifySkip && result && typeof result.catch === "function") {
                result.catch(() =>
                  postBridgeResult(
                    "TP_DISNEY_PLAYER_EVENT",
                    undefined,
                    Object.assign(Object.assign({}, getStatePayload()), {
                      action: "controlFailed",
                    }),
                  ),
                );
              }
              return result;
            } catch (error) {
              if (notifySkip) {
                postBridgeResult(
                  "TP_DISNEY_PLAYER_EVENT",
                  undefined,
                  Object.assign(Object.assign({}, getStatePayload()), {
                    action: "controlFailed",
                  }),
                );
              }
              throw error;
            } finally {
              if (notifySkip) skipCommandDepth--;
            }
          };
          try {
            bus.dispatch = wrapped;
            cleanupCommandBus = () => {
              if (bus.dispatch === wrapped) {
                if (descriptor)
                  Object.defineProperty(bus, "dispatch", descriptor);
                else delete bus.dispatch;
              }
            };
          } catch (_b) {
            // Native next-episode fallback remains available in the content script.
          }
        };
        function refreshPlayerEvents() {
          var _a, _b;
          refreshCommandBus();
          const player = getMediaPlayer();
          if (
            player !== activePlayer ||
            (stateEventsActive &&
              (player === null || player === void 0
                ? void 0
                : player.isLive)) ||
            (eventsEnabled && !stateEventsActive && player && !player.isLive)
          ) {
            detachPlayer();
            postBridgeResult("TP_DISNEY_PLAYER_EVENT", undefined, {
              ok: false,
              eventsActive: false,
            });
            activePlayer = player;
            if (
              eventsEnabled &&
              player &&
              !player.isLive &&
              typeof ((_a = player.state) === null || _a === void 0
                ? void 0
                : _a.addStateChangedListener) === "function" &&
              typeof ((_b = player.state) === null || _b === void 0
                ? void 0
                : _b.removeStateChangedListener) === "function"
            ) {
              activePlayer = player;
              try {
                eventsActive = ["play", "pause", "seek"].every((name) =>
                  patchControl(player, name),
                );
                if (eventsActive) {
                  for (const name of ["quickFastForward", "quickRewind"])
                    patchControl(player, name);
                } else {
                  cleanupPlayer
                    .splice(0)
                    .reverse()
                    .forEach((cleanup) => cleanup());
                }
                // This selector receives native timeline, playback and interstitial updates.
                const selector = (state) => state.player;
                const callback = (playerState) => {
                  updateNativeAdState(playerState);
                  emitState();
                };
                cleanupPlayer.push(() =>
                  player.state.removeStateChangedListener(selector, callback),
                );
                stateEventsActive = true;
                player.state.addStateChangedListener(selector, callback);
              } catch (_c) {
                detachPlayer();
              }
            }
            emitState(true);
          }
          const adRoot = getAdRoot();
          if (eventsEnabled && adRoot !== observedAdRoot) {
            adObserver.disconnect();
            observedAdRoot = adRoot;
            if (adRoot)
              adObserver.observe(adRoot, {
                childList: true,
                subtree: true,
                attributes: true,
              });
          }
        }
        function startPlayerEvents() {
          window.addEventListener("message", seekInteraction, false);
          window.seekScriptLoaded = true;
          eventsEnabled = true;
          observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
          });
          refreshPlayerEvents();
        }
        function stopPlayerEvents() {
          window.removeEventListener("message", seekInteraction, false);
          eventsEnabled = false;
          observer.disconnect();
          detachPlayer();
          cleanupCommandBus();
          activeCommandBus = null;
          emitState(true);
        }
        const onMessage = (event) =>
          __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (
              event.source !== window ||
              !event.data ||
              typeof event.data.type !== "string"
            )
              return;
            const { type, requestId } = event.data;
            if (type === "TP_DISNEY_START_PLAYER_EVENTS") {
              startPlayerEvents();
              return;
            }
            if (type === "TP_DISNEY_STOP_PLAYER_EVENTS") {
              stopPlayerEvents();
              return;
            }
            if (type === "TP_DISNEY_GET_MEDIA_PLAYER_STATE") {
              if (event.data.observePlayerEvents) startPlayerEvents();
              postBridgeResult(
                "TP_DISNEY_MEDIA_PLAYER_STATE",
                requestId,
                getStatePayload(),
              );
              return;
            }
            const resultTypes = {
              TP_DISNEY_PLAY_MEDIA_PLAYER: "TP_DISNEY_PLAY_MEDIA_PLAYER_RESULT",
              TP_DISNEY_PAUSE_MEDIA_PLAYER:
                "TP_DISNEY_PAUSE_MEDIA_PLAYER_RESULT",
              TP_DISNEY_SEEK_MEDIA_PLAYER: "TP_DISNEY_SEEK_MEDIA_PLAYER_RESULT",
              TP_DISNEY_DISPATCH_PLAY_NEXT:
                "TP_DISNEY_DISPATCH_PLAY_NEXT_RESULT",
            };
            const resultType = resultTypes[type];
            if (!resultType) return;
            remoteControlDepth++;
            try {
              const player = getMediaPlayer();
              if (type === "TP_DISNEY_PLAY_MEDIA_PLAYER") {
                if (
                  typeof (player === null || player === void 0
                    ? void 0
                    : player.play) !== "function"
                )
                  throw new Error("mediaPlayer.play unavailable");
                yield player.play();
              } else if (type === "TP_DISNEY_PAUSE_MEDIA_PLAYER") {
                if (
                  typeof (player === null || player === void 0
                    ? void 0
                    : player.pause) !== "function"
                )
                  throw new Error("mediaPlayer.pause unavailable");
                yield player.pause();
              } else if (type === "TP_DISNEY_SEEK_MEDIA_PLAYER") {
                const timeMs = event.data.timeMs;
                if (typeof timeMs !== "number" || !isFinite(timeMs))
                  throw new Error("invalid seek time");
                if (
                  event.data.usePdt === true &&
                  typeof (player === null || player === void 0
                    ? void 0
                    : player.seekToDate) === "function"
                ) {
                  yield player.seekToDate(new Date(timeMs));
                } else {
                  if (
                    typeof (player === null || player === void 0
                      ? void 0
                      : player.seek) !== "function"
                  )
                    throw new Error("mediaPlayer.seek unavailable");
                  yield player.seek(timeMs);
                }
              } else {
                const bus =
                  (_a = document.querySelector("main-app-controls-overlay")) ===
                    null || _a === void 0
                    ? void 0
                    : _a.commandBus;
                const nextContentId = event.data.nextContentId;
                if (
                  typeof (bus === null || bus === void 0
                    ? void 0
                    : bus.dispatch) !== "function" ||
                  typeof nextContentId !== "string" ||
                  !nextContentId
                ) {
                  throw new Error("commandBus unavailable");
                }
                yield bus.dispatch({
                  type: "playNext",
                  payload: { label: "Play next", nextContentId },
                });
              }
              postBridgeResult(resultType, requestId, { ok: true });
            } catch (error) {
              postBridgeResult(resultType, requestId, {
                ok: false,
                error: String(error),
              });
            } finally {
              remoteControlDepth--;
            }
          });
        window.addEventListener("message", onMessage, false);
      })();

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__[4411].call(__webpack_exports__);
  /******/
  /******/
})();
