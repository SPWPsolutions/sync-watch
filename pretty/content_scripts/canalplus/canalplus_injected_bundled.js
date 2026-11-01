/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ 2201() {
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
      (function () {
        if (window.tpCanalPlusBridgeLoaded) return;
        window.tpCanalPlusBridgeLoaded = true;
        const AD_SEQUENCES = ["PREROLL", "MIDROLL", "POSTROLL"];
        let activePlayer = null;
        let activeStore = null;
        let unsubscribe = null;
        let enabled = false;
        let remoteDepth = 0;
        let localSeek = null;
        let remoteSeek = null;
        let remoteUntil = 0;
        let previousState = null;
        let lastSignature = "";
        let lastSentAt = 0;
        let lifecycleTimer = null;
        let observedHost = null;
        const observer = new MutationObserver(() => refreshPlayer());
        const getFiber = (element) => {
          const key =
            element &&
            Object.keys(element).find((name) =>
              name.startsWith("__reactFiber$"),
            );
          return key ? element[key] : null;
        };
        const getVideo = () =>
          document.querySelector('[data-testid="playerRoot"] video');
        const getHost = () => {
          var _a;
          return (_a = getVideo()) === null || _a === void 0
            ? void 0
            : _a.closest('[id^="oneplayer-container-"]');
        };
        const validPlayer = (player, host, video) => {
          var _a, _b, _c, _d, _e;
          return (
            !!host &&
            !!(video === null || video === void 0
              ? void 0
              : video.isConnected) &&
            ((player === null || player === void 0
              ? void 0
              : player.container) ||
              ((_b =
                (_a =
                  player === null || player === void 0
                    ? void 0
                    : player.root) === null || _a === void 0
                  ? void 0
                  : _a._internalRoot) === null || _b === void 0
                ? void 0
                : _b.containerInfo)) === host &&
            player.videoElement === video &&
            player.initialized === true &&
            ((_c = player.player) === null || _c === void 0
              ? void 0
              : _c.isDestroyed) === false &&
            ["play", "pause", "seekTo"].every(
              (name) => typeof player[name] === "function",
            ) &&
            typeof ((_d = player.player.store) === null || _d === void 0
              ? void 0
              : _d.getState) === "function" &&
            typeof ((_e = player.player.store) === null || _e === void 0
              ? void 0
              : _e.subscribe) === "function"
          );
        };
        const findPlayer = (host, video) => {
          var _a;
          // The website owns this ref outside OnePlayer's separate React root.
          // Hook positions and component names change between website builds.
          for (
            let fiber = getFiber(host), depth = 0;
            fiber && depth < 16;
            fiber = fiber.return, depth++
          ) {
            for (
              let hook = fiber.memoizedState, index = 0;
              hook && index < 80;
              hook = hook.next, index++
            ) {
              const value = hook.memoizedState;
              for (const candidate of [
                value,
                value === null || value === void 0 ? void 0 : value.current,
                (_a =
                  value === null || value === void 0
                    ? void 0
                    : value.current) === null || _a === void 0
                  ? void 0
                  : _a.value,
              ]) {
                if (validPlayer(candidate, host, video)) return candidate;
              }
            }
          }
          return null;
        };
        const milliseconds = (seconds) =>
          typeof seconds === "number" && Number.isFinite(seconds)
            ? Math.floor(seconds * 1000)
            : null;
        const readState = () => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (!validPlayer(activePlayer, getHost(), getVideo())) return null;
          const state = activePlayer.player.store.getState();
          if (
            ((_a = state.config) === null || _a === void 0
              ? void 0
              : _a.experience) !== "vod"
          )
            return null;
          const core = state.core;
          const video = activePlayer.videoElement;
          const positionMs = milliseconds(
            core === null || core === void 0 ? void 0 : core.currentTime,
          );
          const contentId =
            (_b = state.data) === null || _b === void 0 ? void 0 : _b.id;
          if (
            positionMs === null ||
            typeof contentId !== "string" ||
            !contentId
          )
            return null;
          const rawState = core.playerState;
          return {
            contentId,
            timestamp: Date.now(),
            positionMs,
            durationMs:
              (_c = milliseconds(core.videoDuration)) !== null && _c !== void 0
                ? _c
                : milliseconds(video.duration),
            seekTargetMs: milliseconds(core.seekingTime),
            playing: core.isPlaying === true,
            rawState,
            buffering: [
              "BUFFERING",
              "FREEZING",
              "LOADING",
              "RELOADING",
            ].includes(rawState),
            ready:
              ["CONTENT", ...AD_SEQUENCES].includes(
                (_d = state.sequence) === null || _d === void 0
                  ? void 0
                  : _d.current,
              ) &&
              // OnePlayer can stay LOADED while waiting for Teleparty to play
              // a joined session. The old API accepted this buffered video.
              (rawState === "LOADED"
                ? video.readyState >= video.HAVE_FUTURE_DATA
                : [
                    "PLAYING",
                    "PAUSED",
                    "SEEKING",
                    "BUFFERING",
                    "FREEZING",
                  ].includes(rawState)),
            sequence:
              (_e = state.sequence) === null || _e === void 0
                ? void 0
                : _e.current,
            // Empty prerolls pass through PREROLL in the same dispatch cycle.
            // An ad sequence alone does not mean there is an ad to wait for.
            adPlaying:
              AD_SEQUENCES.includes(
                (_f = state.sequence) === null || _f === void 0
                  ? void 0
                  : _f.current,
              ) &&
              (((_g = state.ads) === null || _g === void 0
                ? void 0
                : _g.currentAd) != null ||
                ((_h = state.ads) === null || _h === void 0
                  ? void 0
                  : _h.remainingTime) > 0),
            actualPositionMs: milliseconds(video.currentTime),
            actualPaused: video.paused,
            actualSeeking: video.seeking,
          };
        };
        const pendingSeek = (seek, state) => {
          if (
            !seek ||
            seek.contentId !== state.contentId ||
            state.adPlaying ||
            Date.now() >= seek.expiresAt
          )
            return null;
          const settled =
            !state.actualSeeking &&
            state.actualPositionMs !== null &&
            Math.abs(state.actualPositionMs - seek.targetMs) <
              (state.playing ? 1500 : 250);
          return settled ? null : seek;
        };
        const normalizeState = (state) => {
          var _a;
          if (!state) return null;
          localSeek = pendingSeek(localSeek, state);
          remoteSeek = pendingSeek(remoteSeek, state);
          const ready =
            state.ready && !state.buffering && state.rawState !== "SEEKING";
          return {
            contentId: state.contentId,
            updatedAt: state.timestamp,
            positionMs:
              (_a = state.actualPositionMs) !== null && _a !== void 0
                ? _a
                : state.positionMs,
            durationMs: state.durationMs,
            playbackState: ready
              ? state.playing
                ? "playing"
                : "paused"
              : "loading",
            playing: state.playing,
            buffering: state.buffering,
            adPlaying: state.adPlaying,
            // LOADED permits joining, but episode autoplay has not started yet.
            episodeReady:
              ready && ["PLAYING", "PAUSED"].includes(state.rawState),
            settling:
              !!localSeek ||
              state.actualSeeking ||
              state.buffering ||
              state.actualPaused === state.playing,
            remote: remoteDepth > 0 || Date.now() < remoteUntil || !!remoteSeek,
          };
        };
        const payload = (state = readState()) => ({
          ok: !!state,
          eventsActive: enabled && !!unsubscribe && !!state,
          state: normalizeState(state),
        });
        const post = (type, data) =>
          window.postMessage(Object.assign({ type }, data), "*");
        const emit = (force = false) => {
          var _a, _b, _c;
          const state = readState();
          const previous = previousState;
          previousState = state;
          let action;
          // Redux writes intents synchronously, before native media settles.
          // Sequence/identity changes are transitions, not user controls.
          if (
            (state === null || state === void 0 ? void 0 : state.sequence) ===
              "CONTENT" &&
            (previous === null || previous === void 0
              ? void 0
              : previous.sequence) === "CONTENT" &&
            state.contentId === previous.contentId &&
            remoteDepth === 0
          ) {
            if (
              state.seekTargetMs !== null &&
              state.seekTargetMs !== previous.seekTargetMs
            )
              action = "seek";
            else if (state.playing !== previous.playing)
              action = state.playing ? "play" : "pause";
          }
          if (action) {
            remoteSeek = null;
            remoteUntil = 0;
            if (action === "seek") {
              localSeek = {
                contentId: state.contentId,
                targetMs: state.seekTargetMs,
                expiresAt: Date.now() + 10000,
              };
            }
          }
          const current = payload(state);
          const signature = JSON.stringify([
            current.ok,
            current.eventsActive,
            state === null || state === void 0 ? void 0 : state.contentId,
            state === null || state === void 0 ? void 0 : state.sequence,
            state === null || state === void 0 ? void 0 : state.rawState,
            state === null || state === void 0 ? void 0 : state.playing,
            state === null || state === void 0 ? void 0 : state.seekTargetMs,
            (_a = current.state) === null || _a === void 0
              ? void 0
              : _a.settling,
            (_b = current.state) === null || _b === void 0 ? void 0 : _b.remote,
            (_c = current.state) === null || _c === void 0
              ? void 0
              : _c.adPlaying,
          ]);
          const now = Date.now();
          if (
            !force &&
            !action &&
            signature === lastSignature &&
            now - lastSentAt < 250
          )
            return;
          lastSignature = signature;
          lastSentAt = now;
          post(
            "TP_CANALPLUS_PLAYER_EVENT",
            Object.assign(Object.assign({}, current), {
              action,
              seekTargetMs: action === "seek" ? state.seekTargetMs : undefined,
              remote: remoteDepth > 0,
            }),
          );
        };
        const detach = () => {
          if (unsubscribe) unsubscribe();
          unsubscribe = null;
          activeStore = null;
          activePlayer = null;
          previousState = null;
          localSeek = null;
          remoteSeek = null;
          remoteUntil = 0;
        };
        const refreshPlayer = () => {
          const host = getHost();
          const video = getVideo();
          const player = validPlayer(activePlayer, host, video)
            ? activePlayer
            : findPlayer(host, video);
          const store =
            player === null || player === void 0 ? void 0 : player.player.store;
          if (player !== activePlayer || store !== activeStore) {
            detach();
            activePlayer = player;
            activeStore = store || null;
            previousState = readState();
            if (enabled && activeStore && previousState)
              unsubscribe = activeStore.subscribe(() => emit());
            if (enabled) emit(true);
          } else if (enabled && !unsubscribe && readState()) {
            previousState = readState();
            unsubscribe = activeStore.subscribe(() => emit());
            emit(true);
          }
          if (
            enabled &&
            observedHost !==
              (host === null || host === void 0 ? void 0 : host.parentElement)
          ) {
            observer.disconnect();
            observedHost =
              (host === null || host === void 0
                ? void 0
                : host.parentElement) || null;
            if (observedHost)
              observer.observe(observedHost, {
                childList: true,
                subtree: true,
              });
          }
        };
        const start = () => {
          if (enabled) return;
          enabled = true;
          refreshPlayer();
          emit(true);
          lifecycleTimer = window.setInterval(refreshPlayer, 500);
        };
        const stop = () => {
          enabled = false;
          window.clearInterval(lifecycleTimer);
          lifecycleTimer = null;
          observer.disconnect();
          observedHost = null;
          detach();
        };
        const legacyContentId = () => {
          var _a;
          for (
            let fiber = getFiber(
              document.querySelector('[data-testid="videoCore"]'),
            );
            fiber;
            fiber = fiber.return
          ) {
            if (
              typeof ((_a = fiber.memoizedProps) === null || _a === void 0
                ? void 0
                : _a.contentId) === "string"
            )
              return fiber.memoizedProps.contentId;
          }
          return null;
        };
        window.addEventListener("message", (event) =>
          __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            if (
              event.source !== window ||
              !event.data ||
              typeof event.data !== "object"
            )
              return;
            const { type, requestId, action, timeMs } = event.data;
            if (
              ((_a = event.data.infoSending) === null || _a === void 0
                ? void 0
                : _a.type) === "getVideoData"
            ) {
              // Initial joining uses the original metadata-only React lookup.
              // Native discovery starts once the party listener enables events.
              if (enabled) refreshPlayer();
              const videoId =
                (enabled &&
                  ((_b = readState()) === null || _b === void 0
                    ? void 0
                    : _b.contentId)) ||
                legacyContentId();
              if (videoId) post("VideoData", { videoData: { videoId } });
              return;
            }
            if (type === "TP_CANALPLUS_START_PLAYER_EVENTS") {
              start();
              return;
            }
            if (type === "TP_CANALPLUS_STOP_PLAYER_EVENTS") {
              stop();
              return;
            }
            if (type === "TP_CANALPLUS_GET_PLAYER_STATE") {
              refreshPlayer();
              post(
                "TP_CANALPLUS_PLAYER_STATE",
                Object.assign(Object.assign({}, payload()), { requestId }),
              );
              return;
            }
            if (type === "TP_CANALPLUS_LOAD_EPISODE") {
              const targetId = event.data.contentId;
              refreshPlayer();
              const state = readState();
              const nextId =
                (_d =
                  (_c =
                    activeStore === null || activeStore === void 0
                      ? void 0
                      : activeStore.getState().data) === null || _c === void 0
                    ? void 0
                    : _c.series) === null || _d === void 0
                  ? void 0
                  : _d.nextEpisodeId;
              if (
                !enabled ||
                !state ||
                typeof targetId !== "string" ||
                !targetId ||
                (state.contentId !== targetId &&
                  (nextId !== targetId ||
                    typeof activePlayer.goToNextEpisode !== "function"))
              ) {
                post("TP_CANALPLUS_LOAD_EPISODE_RESULT", {
                  requestId,
                  ok: false,
                });
                return;
              }
              remoteDepth++;
              try {
                if (state.contentId !== targetId)
                  activePlayer.goToNextEpisode();
                // A dispatched action alone is not success: the reducer can
                // publish the destination before its media is ready.
                const deadline = Date.now() + 8000;
                while (Date.now() < deadline) {
                  refreshPlayer();
                  const current = readState();
                  const video = getVideo();
                  if (
                    (current === null || current === void 0
                      ? void 0
                      : current.contentId) === targetId &&
                    current.ready &&
                    ["PLAYING", "PAUSED"].includes(current.rawState) &&
                    !current.buffering &&
                    (video === null || video === void 0
                      ? void 0
                      : video.readyState) >= video.HAVE_FUTURE_DATA
                  ) {
                    post(
                      "TP_CANALPLUS_LOAD_EPISODE_RESULT",
                      Object.assign(Object.assign({}, payload()), {
                        requestId,
                      }),
                    );
                    return;
                  }
                  if (!enabled) break;
                  yield new Promise((resolve) =>
                    window.setTimeout(resolve, 100),
                  );
                }
                throw new Error("Canal+ episode did not become ready in time");
              } catch (error) {
                post("TP_CANALPLUS_LOAD_EPISODE_RESULT", {
                  requestId,
                  ok: false,
                  error: String(error),
                });
              } finally {
                remoteUntil = Date.now() + 350;
                remoteDepth--;
              }
              return;
            }
            if (
              type !== "TP_CANALPLUS_CONTROL" ||
              !["play", "pause", "seek"].includes(action)
            )
              return;
            refreshPlayer();
            const state = readState();
            if (!state) {
              post("TP_CANALPLUS_CONTROL_RESULT", {
                requestId,
                ok: false,
                available: false,
              });
              return;
            }
            try {
              remoteDepth++;
              if (!["CONTENT", ...AD_SEQUENCES].includes(state.sequence)) {
                throw new Error(
                  "Canal+ player is transitioning between sequences",
                );
              }
              if (action === "seek") {
                if (
                  state.adPlaying ||
                  typeof timeMs !== "number" ||
                  !Number.isFinite(timeMs)
                ) {
                  throw new Error("Cannot seek ads or an invalid timestamp");
                }
                const endMs =
                  state.durationMs > 0 ? state.durationMs : Infinity;
                const targetMs = Math.max(0, Math.min(timeMs, endMs));
                localSeek = null;
                remoteSeek = {
                  contentId: state.contentId,
                  targetMs,
                  expiresAt: Date.now() + 10000,
                };
                yield activePlayer.seekTo(targetMs / 1000);
              } else {
                const method = state.adPlaying
                  ? action === "play"
                    ? "resumeAd"
                    : "pauseAd"
                  : action;
                if (typeof activePlayer[method] !== "function")
                  throw new Error(method + " unavailable");
                yield activePlayer[method]();
              }
              post(
                "TP_CANALPLUS_CONTROL_RESULT",
                Object.assign(Object.assign({}, payload()), {
                  requestId,
                  ok: true,
                  available: true,
                }),
              );
            } catch (error) {
              remoteSeek = null;
              post(
                "TP_CANALPLUS_CONTROL_RESULT",
                Object.assign(Object.assign({}, payload()), {
                  requestId,
                  ok: false,
                  available: true,
                  error: String(error),
                }),
              );
            } finally {
              remoteUntil = Date.now() + 350;
              remoteDepth--;
            }
          }),
        );
        window.addEventListener("pagehide", stop);
        console.log("Loaded TP Canal+ Injected");
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
  /******/ __webpack_modules__[2201].call(__webpack_exports__);
  /******/
  /******/
})();
